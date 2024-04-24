using CatalogService as service from '../../srv/service';

annotate service.comments_temp with @(
    Capabilities.InsertRestrictions.Insertable : true,
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'COMMENTS TITLE	',
            Value : comments_title,
        },
        {
            $Type : 'UI.DataField',
            Label : 'COMMENTS DESCRIPTION	',
            Value : comments_desc,
        },
    ]
);
annotate service.comments_temp with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'COMMENTS TITLE	',
                Value : comments_title,
            },
            {
                $Type : 'UI.DataField',
                Label : 'COMMENTS DESCRIPTION	',
                Value : comments_desc,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
annotate service.comments_temp with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : 'COMMENTS TEMPLATE',
    }
);
