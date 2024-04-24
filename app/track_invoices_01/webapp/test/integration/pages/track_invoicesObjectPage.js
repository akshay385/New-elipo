sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'trackinvoices01',
            componentId: 'track_invoicesObjectPage',
            contextPath: '/track_invoices'
        },
        CustomPageDefinitions
    );
});