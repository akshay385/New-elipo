sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'commentstemplate01',
            componentId: 'comments_tempList',
            contextPath: '/comments_temp'
        },
        CustomPageDefinitions
    );
});