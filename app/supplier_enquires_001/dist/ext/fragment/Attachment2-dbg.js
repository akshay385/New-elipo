sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onPress: function (oEvent) {
            MessageToast.show("Custom handler invoked.");
        },


        onAfterItemAdded: function (oEvent) {
            debugger
            var item = oEvent.getParameter("item")
            var currentDate = new Date(); // Get the current date and time
            var formattedDate = currentDate.toISOString().split('T')[0]; // Extract date in YYYY-MM-DD format
            var formattedTime = currentDate.toISOString().split('T')[1].slice(0, 8); // Extract time in HH:MM:SS format
            let inputString = oEvent.oSource.oPropagatedProperties.oModels.pageInternal.mContexts["/pages/supplierenquires001::supplier_enqObjectPage/controls/fe::FormContainer::details"].oModel.oData.currentCtxt.sPath;
            const regex = /Enquiry_no='(\d+)'/;
            const match = inputString.match(regex);
            const enq_no = match[1];
            console.log("got enquiry number",enq_no)
            var data = {
                Enquiry_no : enq_no,
                mediaType: item.getMediaType(),
                fileName: item.getFileName(),
                size: item.getFileObject().size,
                // createdAtDate: formattedDate, // Add current date to 'createdAtDate'
                // createdAtTime: formattedTime // Add current time to 'createdAtTime'
            };

            var settings = {
                url: "/odata/v4/catalog/attachments",
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                data: JSON.stringify(data)
            }
            
            return new Promise((resolve, reject) => {
                $.ajax(settings)
                    .done((results, textStatus, request) => {
                        debugger
                        resolve(results.ID);
                        debugger 
                        location.reload();
                        // var oUploadSet = this.byId("uploadSet");
                        // oUploadSet.removeAllIncompleteItems();
                        // oUploadSet.getBinding("items").refresh();

                    })
                    .fail((err) => {
                        reject(err);
                    })
            })
            // this.createEntity(item)
            //     .then((id) => {
            //         this._uploadContent(item, id);
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     })

        },

        onUploadCompleted: function (oEvent) {
            debugger;
            // var oUploadSet = this.byId("uploadSet");
            // oUploadSet.removeAllIncompleteItems();
            // oUploadSet.getBinding("items").refresh();
        },

        aftercancel :async function(oEvent) {
            debugger;
            // const cds = require('@sap/cds');
            let attachments = await cds.connect.to('/odata/v4/catalog/attachments');
            let inputString = oEvent.oSource.oPropagatedProperties.oModels.pageInternal.mContexts["/pages/supplierenquires001::supplier_enqObjectPage/controls/fe::FormContainer::details"].oModel.oData.currentCtxt.sPath;
            const regex = /Enquiry_no='(\d+)'/;
            const match = inputString.match(regex);
            const enq_no = match[1];
            await SELECT.from(attachments).where({Enquiry_no:enq_no});
            console.log();

        },

       onOpenPressed: function (oEvent) {
				oEvent.preventDefault();
				var item = oEvent.getSource();
				this._fileName = item.getFileName();
				this._download(item)
					.then((blob) => {
						var url = window.URL.createObjectURL(blob);
						// //open in the browser
						// window.open(url);

						//download
						var link = document.createElement('a');
						link.href = url;
						link.setAttribute('download', this._fileName);
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);						
					})
					.catch((err)=> {
						console.log(err);
					});					
			},
        // createEntity: function (item) {
        //     var data = {
        //         mediaType: item.getMediaType(),
        //         fileName: item.getFileName(),
        //         size: item.getFileObject().size,
        //     };

        //     var settings = {
        //         url: "/odata/v4/catalog/Files",
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json"
        //         },
        //         data: JSON.stringify(data)
        //     }

        //     return new Promise((resolve, reject) => {
        //         $.ajax(settings)
        //             .done((results, textStatus, request) => {
        //                 resolve(results.ID);
        //             })
        //             .fail((err) => {
        //                 reject(err);
        //             })
        //     })
        // },

        _uploadContent: function (item, id) {
            var url = `/odata/v4/catalog/attachments(${id})/content`
            item.setUploadUrl(url);
            var oUploadSet = this.byId("uploadSet");
            oUploadSet.setHttpRequestMethod("PUT")
            oUploadSet.uploadItem(item);
        }.bind(this)
    };
});
