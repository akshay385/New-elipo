sap.ui.define(["sap/m/MessageBox","sap/m/MessageToast","sap/ui/core/UIComponent"],function(e,t,o){"use strict";function n(o,n){var r;function a(e){r&&r.getBeginButton().setEnabled(e)}function i(e){r.setBusy(e)}function s(){r&&r.close()}function l(t,o,n){e.error("Upload failed",{title:"Error"})}function c(e){return sap.ui.core.Fragment.byId("excelUploadDialog",e)}return{onBeforeOpen:function(e){r=e.getSource();o.addDependent(r)},onAfterClose:function(e){o.removeDependent(r);r.destroy();r=undefined},_getBaseURL:function(){debugger;var e=this.getOwnerComponent().getManifestEntry("/sap.app/id").replaceAll(".","/");return jQuery.sap.getModulePath(e)},onFileChange:function(e){var t=e.getParameters("files").files[0];this.file=t},onOk:function(e){debugger;let t=e.oSource.oPropagatedProperties.oModels.pageInternal.mContexts["/pages/invoicecockpit01::NewList/controls/fe::table::tableView1::LineItem"].oModel.oData.currentCtxt.sPath;const o=/Draft\('(\d+)'\)/;const n=t.match(o);const r=n[1];var a=c("__fileUploader");var i=new FileReader;i.onload=function(e){debugger;var t=this.file;this.content=e.currentTarget.result;this.createfile(r)}.bind(this);i.readAsDataURL(this.file)},createfile:function(t){debugger;var o=this;var t=t;var n=this.file;var r=this.content;var a=r.split(",")[1];var i=this.file.name;var l=this.file.type;const c=atob(a);const u=new ArrayBuffer(c.length);const f=new Uint8Array(u);for(let e=0;e<c.length;e++){f[e]=c.charCodeAt(e)}const p=new Blob([u],{type:l});const d=new File([p],i,{type:l});var g="https://elipo_backend-shy-echidna-yp.cfapps.us20.hana.ondemand.com/dev/upload";var h=new FormData;h.append("file",n);h.append("mime_type",l);h.append("file_name",i);h.append("file_id",t);h.append("userid","einvoiceportal@gmail.com");fetch(g,{method:"POST",body:h}).then(function(e){if(e.status===200){return e.text()}else{throw new Error("POST request failed with status: "+e.status)}}).then(function(t){var o=JSON.parse(t);if(o.statusCode===200){var n="File Uploaded Successfully";e.success(n);s();console.log("Success: "+o.body)}else{var n="Failed to upload";e.error("Failed to upload");s();console.log("Error: "+o.body)}}).catch(function(e){console.error(e)});debugger},onCancel:function(e){s()},onTypeMismatch:function(e){var t=e.getSource().getFileType().map(function(e){return"*."+e}).join(", ");l("The file type *."+e.getParameter("fileType")+" is not supported. Choose one of the following types: "+t)},onFileAllowed:function(e){a(true)},onFileEmpty:function(e){a(false)},onUploadComplete:function(e){var n=e.getParameter("status");var r=e.getSource();r.clear();a(false);i(false);if(n>=400){var c;try{c=JSON.parse(e.getParameter("responseRaw"))}catch(t){c=e.getParameter("responseRaw")}if(c&&c.error&&c.error.message){l(c.error.code,c.error.target,c&&c.error&&c.error.message)}}else{t.show("File uploaded successfully");o.refresh();s()}}}}return{upload:function(e,t){this.loadFragment({id:"excelUploadDialog",name:"invoicecockpit01.ext.fragment.Draftattachment",controller:n(this,"MediaFile")}).then(function(e){e.open()})}}});