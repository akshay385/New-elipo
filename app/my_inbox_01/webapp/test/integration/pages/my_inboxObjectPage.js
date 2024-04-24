sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'myinbox01',
            componentId: 'my_inboxObjectPage',
            contextPath: '/my_inbox'
        },
        CustomPageDefinitions
    );
});