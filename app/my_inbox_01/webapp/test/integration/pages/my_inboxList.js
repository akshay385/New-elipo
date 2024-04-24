sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'myinbox01',
            componentId: 'my_inboxList',
            contextPath: '/my_inbox'
        },
        CustomPageDefinitions
    );
});