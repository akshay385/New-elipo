sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'commentstemplate01',
            componentId: 'comments_tempObjectPage',
            contextPath: '/comments_temp'
        },
        CustomPageDefinitions
    );
});