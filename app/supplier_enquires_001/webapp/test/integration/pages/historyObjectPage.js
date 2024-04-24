sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'supplierenquires001',
            componentId: 'historyObjectPage',
            contextPath: '/supplier_enq/enq_parent'
        },
        CustomPageDefinitions
    );
});