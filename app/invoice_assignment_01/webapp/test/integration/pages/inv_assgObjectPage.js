sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'invoiceassignment01',
            componentId: 'inv_assgObjectPage',
            contextPath: '/inv_assg'
        },
        CustomPageDefinitions
    );
});