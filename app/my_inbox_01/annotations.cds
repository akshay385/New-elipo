using CatalogService as service from '../../srv/service';

annotate service.my_inbox with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : invoice_no,
            Label : 'INVOICE NO',
        },
        {
            $Type : 'UI.DataField',
            Value : ref_inv_no,
            Label : 'REF.',
        },
        {
            $Type : 'UI.DataField',
            Value : supplier_name,
            Label : 'SUPPLIER NAME',
        },
        {
            $Type : 'UI.DataField',
            Value : Date,
            Label : 'DATE',
        },
        {
            $Type : 'UI.DataField',
            Value : Modified_by,
            Label : 'MODIFIED BY',
        },
        {
            $Type : 'UI.DataField',
            Value : modified_date_time,
            Label : 'MODIFIED DATE TIME',
        },
        {
            $Type : 'UI.DataField',
            Value : invoice_file,
            Label : 'INVOICE FILE',
        },
        {
            $Type : 'UI.DataField',
            Value : Action,
            Label : 'ACTION',
        },
    ]
);
