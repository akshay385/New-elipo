sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'commentstemplate01/test/integration/FirstJourney',
		'commentstemplate01/test/integration/pages/comments_tempList',
		'commentstemplate01/test/integration/pages/comments_tempObjectPage'
    ],
    function(JourneyRunner, opaJourney, comments_tempList, comments_tempObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('commentstemplate01') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecomments_tempList: comments_tempList,
					onThecomments_tempObjectPage: comments_tempObjectPage
                }
            },
            opaJourney.run
        );
    }
);