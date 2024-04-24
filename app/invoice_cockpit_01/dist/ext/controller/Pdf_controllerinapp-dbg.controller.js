sap.ui.define(['sap/ui/core/mvc/ControllerExtension','sap/ui/model/json/JSONModel'], function (ControllerExtension,JSONModel) {
	'use strict';

	return ControllerExtension.extend('invoicecockpit01.ext.controller.Pdf_controllerinapp', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf invoicecockpit01.ext.controller.Pdf_controllerinapp
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing: {
				onAfterBinding: async function (oBindingContext) {debugger
				   var oView = this.getView();
					   const
					   oExtensionAPI = this.base.getExtensionAPI(),
					   oModel = oExtensionAPI.getModel(),
					   sFunctionName = "getPdfUrl_inapp",
					   oFunction = oModel.bindContext(`/${sFunctionName}(...)`);
					   // oBookingTableAPI = oExtensionAPI.byId("fe::CustomSubSection::Bookings--OwnBookingsTable"),
					   // oWarningMessage = new Message({
					   //   type: MessageType.Warning,
					   //   message: await oExtensionAPI.getModel("i18n").getResourceBundle().getText("bookingsNew")
					   // }),
					   //   oInfoMessage = new Message({
					   // 	type: MessageType.Info,
					   // 	message: await oExtensionAPI.getModel("i18n").getResourceBundle().getText("bookingsAttention")
					   //   });
						 // Request OData function with current CustomerID
					   //   const oCustomer = await oBindingContext.requestObject(oBindingContext.getPath());
					   //   oFunction.setParameter("CustomerID", oCustomer.CustomerID);
						 await oFunction.execute();
						 var oContext = oFunction.getBoundContext();
						 
						 var res = oContext.getObject();
						 debugger
						 await oFunction.execute();
						 debugger
						oContext = oFunction.getBoundContext();
						 
						  res = oContext.getObject();
						 ///////
						 
									 // let x = x1
									 /////
									 // if (x.startsWith('"') && x.endsWith('"')) {
									 // 	x = x.slice(1, -1);
									 //   }
									 /////
								   res = res.value.file_link;
									 console.log(res);debugger
									 var oModel1 = new JSONModel({ 
										 pdfUrl : res    
											 });
								 
									 // Set the model to the view
									 oView.setModel(oModel1, "pdfModel");
						 ///////
					   //   if (this.message !== undefined) {
					   // 	oBookingTableAPI.removeMessage(this.message);
					   //   } 
					   //   if (oContext.getProperty("HasNewBookings")) {
					   // 	this.message = oBookingTableAPI.addMessage(oWarningMessage);
					   // 	oExtensionAPI.showMessages([oInfoMessage]);
					   //   }
					   
			   
				} 
				}

		}
	});
});
