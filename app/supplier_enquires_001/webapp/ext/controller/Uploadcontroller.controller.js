sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('supplierenquires001.ext.controller.Uploadcontroller', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf supplierenquires001.ext.controller.Uploadcontroller
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				debugger;
				// alert('Hello');
			},
			onpress: function(){
				alert('Hello');
			},
			onAfterItemAdded: function (oEvent) {
				debugger
				var item = oEvent.getParameter("item")
				this._createEntity(item)
					.then((id) => {
						this._uploadContent(item, id);
					})
					.catch((err) => {
						console.log(err);
					})
			},

			onUploadCompleted: function (oEvent) {
				debugger;
				var oUploadSet = this.byId("uploadSet");
				oUploadSet.removeAllIncompleteItems();
				oUploadSet.getBinding("items").refresh();
			},

			onOpenPressed: function (oEvent) {
				// to be implemented	
				debugger;		
			},

			_createEntity: function (item) {
				var data = {
					mediaType: item.getMediaType(),
					fileName: item.getFileName(),
					size: item.getFileObject().size
				};

				var settings = {
					url: "/attachments/Files",
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					data: JSON.stringify(data)
				}

				return new Promise((resolve, reject) => {
					$.ajax(settings)
						.done((results, textStatus, request) => {
							resolve(results.ID);
						})
						.fail((err) => {
							reject(err);
						})
				})
			},

			_uploadContent: function (item, id) {
				var url = `/attachments/Files(${id})/content`
				item.setUploadUrl(url);
				var oUploadSet = this.byId("uploadSet");
				oUploadSet.setHttpRequestMethod("PUT")
				oUploadSet.uploadItem(item);
			}
		}
	});
});
