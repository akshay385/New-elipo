sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'invoicecockpit01',
            componentId: 'item_newObjectPage',
            contextPath: '/New/child_item'
        },
        CustomPageDefinitions
    );
});