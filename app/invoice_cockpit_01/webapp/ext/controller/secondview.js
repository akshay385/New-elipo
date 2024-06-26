sap.ui.define(["sap/m/MessageBox", "sap/m/MessageToast", "sap/ui/core/UIComponent"],

    function (MessageBox, MessageToast, UIComponent) {
        "use strict";
        function _createUploadController(oExtensionAPI, Entity) {
            var oUploadDialog;

            function setOkButtonEnabled(bOk) {
                oUploadDialog && oUploadDialog.getBeginButton().setEnabled(bOk);
            }

            function setDialogBusy(bBusy) {
                oUploadDialog.setBusy(bBusy)
            }

            function closeDialog() {
                oUploadDialog && oUploadDialog.close()
            }

            function showError(code, target, sMessage) {
                MessageBox.error("Upload failed", { title: "Error" })
            }

            function byId(sId) {
                return sap.ui.core.Fragment.byId("excelUploadDialog", sId);
            }

            return {
                onBeforeOpen: function (oEvent) {
                    oUploadDialog = oEvent.getSource();
                    oExtensionAPI.addDependent(oUploadDialog);
                },

                onAfterClose: function (oEvent) {
                    oExtensionAPI.removeDependent(oUploadDialog);
                    oUploadDialog.destroy();
                    oUploadDialog = undefined;
                },

                //                 onOk: function (oEvent) {
                //                     setDialogBusy(true)

                //                     var oFileUploader = byId("uploader");
                //                     var headPar = new sap.ui.unified.FileUploaderParameter();
                //                     headPar.setName('slug');
                //                     headPar.setValue(Entity);
                //                     oFileUploader.removeHeaderParameter('slug');
                //                     oFileUploader.addHeaderParameter(headPar);

                //                     var oFragment = sap.ui.xmlfragment("excelUploadDialog", "project1.ext.fragment.Pdffffffff");

                //                     // Get the FileUploader control by its ID
                //                     var oUploader = sap.ui.core.Fragment.byId("excelUploadDialog", "uploader");

                //                     var selectedFile = oUploader.getValue();
                // debugger;

                //                     var sUploadUri = oExtensionAPI._controller.extensionAPI._controller._oAppComponent.getManifestObject().resolveUri("/odata/v4/catalog/ExcelUpload/excel")
                //                     oFileUploader.setUploadUrl(sUploadUri);
                //                     oFileUploader
                //                         .checkFileReadable()
                //                         .then(function () {
                //                             oFileUploader.upload();
                //                         })
                //                         .catch(function (error) {
                //                             showError("The file cannot be read.");
                //                             setDialogBusy(false)
                //                         })
                //                 },
                _getBaseURL: function () {
                    debugger;
                    var oBaseUrl = this.getOwnerComponent().getManifestEntry("/sap.app/id").replaceAll(".", "/");
                    return jQuery.sap.getModulePath(oBaseUrl)
                },

                /**
                 * on File Change
                 */
                onFileChange: function (oEvent) {
                    var file = oEvent.getParameters("files").files[0];
                    this.file = file;
                },


                onOk: function (oEvent) {
                 debugger;
                    let inputString = oEvent.oSource.oPropagatedProperties.oModels.pageInternal.mContexts["/pages/invoicecockpit01::NewList/controls/fe::table::tableView1::LineItem"].oModel.oData.currentCtxt.sPath;
                    const regex = /Draft\('(\d+)'\)/;
                    const match = inputString.match(regex);
                    const invoice_no = match[1];

                    var oUploadSet = byId("__fileUploader");
                    //Upload imaged
                    var reader = new FileReader();
                    reader.onload = function (oEvent) {
                        // get an access to the content of the file
                        debugger;
                        var file = this.file;
                        this.content = oEvent.currentTarget.result;
                        this.createfile(invoice_no);
                    }.bind(this);
                    reader.readAsDataURL(this.file);

                },


                /**
                 *  Create Operation to create an entry in CAP
                 */
                createfile: function (invoice_no) {
                    debugger;
                    var that = this;
                    var invoice_no = invoice_no;

                    var file_ori = this.file;
                    var file_real = this.content;
                    var base64Content = file_real.split(',')[1];
                    var file_name = this.file.name;
                    var mime_type = this.file.type;
                    const binaryData = atob(base64Content);
                    // Create an ArrayBuffer from the binary data
                    const arrayBuffer = new ArrayBuffer(binaryData.length);
                    const uint8Array = new Uint8Array(arrayBuffer);
                    for (let i = 0; i < binaryData.length; i++) {
                        uint8Array[i] = binaryData.charCodeAt(i);
                    }
                    // Create a Blob from the ArrayBuffer
                    const blob = new Blob([arrayBuffer], { type: mime_type });

                    // Create a File from the Blob
                    const file2 = new File([blob], file_name, { type: mime_type });
                    // const file1 = base64ToFile(base64Data, file_name, mime_type);
                    var url = "https://elipo_backend-shy-echidna-yp.cfapps.us20.hana.ondemand.com/dev/upload";
                    var formData = new FormData();
                    formData.append("file", file_ori);
                    formData.append("mime_type", mime_type);
                    formData.append("file_name", file_name);
                    formData.append("file_id", invoice_no);
                    formData.append("userid", 'einvoiceportal@gmail.com');
                    fetch(url, {
                        method: 'POST',
                        body: formData
                    })
                        .then(function (response) {
                            if (response.status === 200) {
                                return response.text(); 
                            } else {
                                throw new Error("POST request failed with status: " + response.status);
                            }
                        })
                        .then(function (data) {
                            var response = JSON.parse(data);

                            if (response.statusCode === 200) {
                                var sMsg = "File Uploaded Successfully";
                                MessageBox.success(sMsg);
                                closeDialog();
                                console.log("Success: " + response.body);

                            } else {
                                var sMsg = "Failed to upload";
                                MessageBox.error("Failed to upload");
                                closeDialog();
                                console.log("Error: " + response.body);

                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                    debugger;
                    
                },
                onCancel: function (oEvent) {
                    closeDialog();
                },

                onTypeMismatch: function (oEvent) {
                    var sSupportedFileTypes = oEvent
                        .getSource()
                        .getFileType()
                        .map(function (sFileType) {
                            return "*." + sFileType;
                        })
                        .join(", ");

                    showError(
                        "The file type *." +
                        oEvent.getParameter("fileType") +
                        " is not supported. Choose one of the following types: " +
                        sSupportedFileTypes
                    );
                },

                onFileAllowed: function (oEvent) {
                    setOkButtonEnabled(true)
                },

                onFileEmpty: function (oEvent) {
                    setOkButtonEnabled(false)
                },

                onUploadComplete: function (oEvent) {
                    var iStatus = oEvent.getParameter("status");
                    var oFileUploader = oEvent.getSource()

                    oFileUploader.clear();
                    setOkButtonEnabled(false)
                    setDialogBusy(false)

                    if (iStatus >= 400) {
                        var oRawResponse;
                        try {
                            oRawResponse = JSON.parse(oEvent.getParameter("responseRaw"));
                        } catch (e) {
                            oRawResponse = oEvent.getParameter("responseRaw");
                        }
                        if (oRawResponse && oRawResponse.error && oRawResponse.error.message) {
                            showError(oRawResponse.error.code, oRawResponse.error.target, oRawResponse && oRawResponse.error && oRawResponse.error.message);
                        }
                    } else {
                        MessageToast.show("File uploaded successfully");
                        oExtensionAPI.refresh()
                        closeDialog();
                    }
                }
            };
        };


        return {
            upload: function (oBindingContext, aSelectedContexts) {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "invoicecockpit01.ext.fragment.Draftattachment",
                    controller: _createUploadController(this, 'MediaFile')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            }
        };
    });

