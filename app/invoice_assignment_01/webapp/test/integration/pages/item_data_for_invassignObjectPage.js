sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'invoiceassignment01',
            componentId: 'item_data_for_invassignObjectPage',
            contextPath: '/inv_assg/item_data_parent'
        },
        CustomPageDefinitions
    );
});