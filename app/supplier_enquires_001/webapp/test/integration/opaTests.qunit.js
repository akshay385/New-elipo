sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'supplierenquires001/test/integration/FirstJourney',
		'supplierenquires001/test/integration/pages/supplier_enqList',
		'supplierenquires001/test/integration/pages/supplier_enqObjectPage',
		'supplierenquires001/test/integration/pages/historyObjectPage'
    ],
    function(JourneyRunner, opaJourney, supplier_enqList, supplier_enqObjectPage, historyObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('supplierenquires001') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThesupplier_enqList: supplier_enqList,
					onThesupplier_enqObjectPage: supplier_enqObjectPage,
					onThehistoryObjectPage: historyObjectPage
                }
            },
            opaJourney.run
        );
    }
);