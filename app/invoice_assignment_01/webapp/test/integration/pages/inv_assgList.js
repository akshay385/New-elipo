sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'invoiceassignment01',
            componentId: 'inv_assgList',
            contextPath: '/inv_assg'
        },
        CustomPageDefinitions
    );
});