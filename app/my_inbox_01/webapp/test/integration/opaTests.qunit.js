sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myinbox01/test/integration/FirstJourney',
		'myinbox01/test/integration/pages/my_inboxList',
		'myinbox01/test/integration/pages/my_inboxObjectPage'
    ],
    function(JourneyRunner, opaJourney, my_inboxList, my_inboxObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myinbox01') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemy_inboxList: my_inboxList,
					onThemy_inboxObjectPage: my_inboxObjectPage
                }
            },
            opaJourney.run
        );
    }
);