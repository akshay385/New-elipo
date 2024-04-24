sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'trackinvoices01',
            componentId: 'track_invoicesList',
            contextPath: '/track_invoices'
        },
        CustomPageDefinitions
    );
});