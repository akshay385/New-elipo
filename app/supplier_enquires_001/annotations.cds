using CatalogService as service from '../../srv/service';
using from '../../db/schema';

annotate service.supplier_enq with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : Enquiry_no,
            Label : 'Enquiry_no',
        },
        {
            $Type : 'UI.DataField',
            Value : Supplier_name,
            Label : 'Supplier_name',
        },
        {
            $Type : 'UI.DataField',
            Value : Description,
            Label : 'Description',
        },
        {
            $Type : 'UI.DataField',
            Value : Recieved_date,
            Label : 'Recieved_date',
        },
        {
            $Type : 'UI.DataField',
            Value : Status,
            Label : 'Status',
            Criticality : faulty,
            CriticalityRepresentation : #WithoutIcon,
        },
        {
            $Type : 'UI.DataField',
            Value : last_responded,
            Label : 'last_responded',
        },
    ]
);
annotate service.supplier_enq with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'details',
            ID : 'details',
            Target : '@UI.FieldGroup#details1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'History',
            ID : 'History',
            Target : 'enq_parent/@UI.LineItem#History',
        },
        {
            $Type : 'UI.CollectionFacet',
            // Label : 'last_view',
            ID : 'last_view',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'Attachments Uploaded ',
                    ID : 'AttachmentsUploaded',
                    Target : 'attach/@UI.LineItem#AttachmentsUploaded',
                },],
        },
        // {
        //     $Type : 'UI.ReferenceFacet',
        //     Label : 'table',
        //     ID : 'table',
        //     Target : 'attach/@UI.LineItem#table',
        // },
        // {
        //     $Type : 'UI.ReferenceFacet',
        //     Label : 'attachments',
        //     ID : 'attachments',
        //     Target : 'attachments/@UI.LineItem#attachments',
        // },
        ],
    UI.FieldGroup #Details : {
        $Type : 'UI.FieldGroupType',
        Data : [
        ],
    }
);
annotate service.supplier_enq with @(
    UI.FieldGroup #details : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Enq_desc,
                Label : 'Enq_desc',
            },{
                $Type : 'UI.DataField',
                Value : Recieved_date,
                Label : 'Recieved_date',
            },{
                $Type : 'UI.DataField',
                Value : Supplier_Enquiry,
                Label : 'Supplier_Enquiry',
            },{
                $Type : 'UI.DataField',
                Value : Comments_template,
                Label : 'Comments_template',
            },{
                $Type : 'UI.DataField',
                Value : Edit_comment,
                Label : 'Edit_comment',
            },],
    }
);
annotate service.supplier_enq with @(
    UI.FieldGroup #details1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Recieved_date,
                Label : 'Recieved_date',
            },
            {
                $Type : 'UI.DataField',
                Value : Supplier_Enquiry,
                Label : 'Supplier_Enquiry',
            },
            {
                $Type : 'UI.DataField',
                Value : Comments_template,
                Label : 'Comments_template',
            },
            {
                $Type : 'UI.DataField',
                Value : Edit_comment,
                Label : 'Edit_comment',
            },],
    }
);
// annotate service.supplier_enq with @(
//     UI.FieldGroup #form : {
//         $Type : 'UI.FieldGroupType',
//         Data : [
//             {
//                 $Type : 'UI.DataField',
//                 Value : files.fileName,
//                 Label : 'fileName',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : files.size,
//                 Label : 'size',
//             },],
//     }
// );
// annotate service.supplier_enq with @(
//     UI.FieldGroup #frm1 : {
//         $Type : 'UI.FieldGroupType',
//         Data : [
//             {
//                 $Type : 'UI.DataField',
//                 Value : filesss.size,
//                 Label : 'size',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : filesss.fileName,
//                 Label : 'fileName',
//             },],
//     }
// );
annotate service.supplier_enq with @(
    UI.FieldGroup #form1 : {
        $Type : 'UI.FieldGroupType',
        Data : [],
    }
);
annotate service.history with @(
    UI.LineItem #History : [
        {
            $Type : 'UI.DataField',
            Value : img,
            // Label : 'img',
        },{
            $Type : 'UI.DataField',
            Value : Comments,
            // Label : 'Comments',
        },]
);

annotate service.supplier_enq with @(
    UI.Identification : [
    ]
);
annotate service.attachments with @(
    UI.LineItem #table : [
    ]
);
annotate service.attachments with @(
    UI.LineItem #attachments2 : [
        {
            $Type : 'UI.DataField',
            Value : fileName,
            Label : 'fileName',
        },{
            $Type : 'UI.DataField',
            Value : mediaType,
            Label : 'mediaType',
        },{
            $Type : 'UI.DataField',
            Value : createdAt,
        },]
);
annotate service.attachments with @(
    UI.LineItem #attachment2 : [
        {
            $Type : 'UI.DataField',
            Value : fileName,
            Label : 'fileName',
        },{
            $Type : 'UI.DataField',
            Value : mediaType,
            Label : 'mediaType',
        },{
            $Type : 'UI.DataField',
            Value : createdAt,
        },]
);
annotate service.attachments with @(
    UI.LineItem #AttachmentsUploaded : [
        {
            $Type : 'UI.DataField',
            Value : fileName,
            Label : 'Attachment Name',
        },{
            $Type : 'UI.DataField',
            Value : mediaType,
            Label : 'Attachment format',
        },{
            $Type : 'UI.DataField',
            Value : createdAt,
            Label : 'Uploaded (Date-Time)',
        },{
            $Type : 'UI.DataField',
            Value : content,
            Label : 'content',
        },]
);
