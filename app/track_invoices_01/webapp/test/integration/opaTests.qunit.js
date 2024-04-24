sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'trackinvoices01/test/integration/FirstJourney',
		'trackinvoices01/test/integration/pages/track_invoicesList',
		'trackinvoices01/test/integration/pages/track_invoicesObjectPage'
    ],
    function(JourneyRunner, opaJourney, track_invoicesList, track_invoicesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('trackinvoices01') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetrack_invoicesList: track_invoicesList,
					onThetrack_invoicesObjectPage: track_invoicesObjectPage
                }
            },
            opaJourney.run
        );
    }
);