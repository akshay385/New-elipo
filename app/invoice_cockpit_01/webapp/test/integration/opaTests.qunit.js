sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'invoicecockpit01/test/integration/FirstJourney',
		'invoicecockpit01/test/integration/pages/NewList',
		'invoicecockpit01/test/integration/pages/NewObjectPage',
		'invoicecockpit01/test/integration/pages/item_newObjectPage'
    ],
    function(JourneyRunner, opaJourney, NewList, NewObjectPage, item_newObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('invoicecockpit01') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheNewList: NewList,
					onTheNewObjectPage: NewObjectPage,
					onTheitem_newObjectPage: item_newObjectPage
                }
            },
            opaJourney.run
        );
    }
);