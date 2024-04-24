sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'invoiceassignment01/test/integration/FirstJourney',
		'invoiceassignment01/test/integration/pages/inv_assgList',
		'invoiceassignment01/test/integration/pages/inv_assgObjectPage',
		'invoiceassignment01/test/integration/pages/item_data_for_invassignObjectPage'
    ],
    function(JourneyRunner, opaJourney, inv_assgList, inv_assgObjectPage, item_data_for_invassignObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('invoiceassignment01') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheinv_assgList: inv_assgList,
					onTheinv_assgObjectPage: inv_assgObjectPage,
					onTheitem_data_for_invassignObjectPage: item_data_for_invassignObjectPage
                }
            },
            opaJourney.run
        );
    }
);