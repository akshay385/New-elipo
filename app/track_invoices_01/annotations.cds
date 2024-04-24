using CatalogService as service from '../../srv/service';

annotate service.track_invoices with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'INVOICE NO ',
            Value : invoice,
        },
        {
            $Type : 'UI.DataField',
            Label : 'REF. INVOICE NO',
            Value : Ref_invoice,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SUPPLIER NAME',
            Value : suplier_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'INVOICE DATE ',
            Value : invoice_date,
        },
        {
            $Type : 'UI.DataField',
            Label : 'MODIFIED BY',
            Value : modified_by,
        },
        {
            $Type : 'UI.DataField',
            Value : Status,
            Label : 'STATUS',
            Criticality : faulty,
            CriticalityRepresentation : #WithoutIcon,
        },
        {
            $Type : 'UI.DataField',
            Value : error_log,
            Label : 'ERROR LOG',
        },
    ]
);
annotate service.track_invoices with @(
    UI.DeleteHidden : true,
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'IRN',
                Value : IRN,
            },
            {
                $Type : 'UI.DataField',
                Label : 'GSTIN',
                Value : GSTIN,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Document Type',
                Value : Document_Type,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Ref. Invoice No.',
                Value : Ref_invoice,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Invoice Date',
                Value : invoice_date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Posting Date',
                Value : Posting_Date,
            },
            {
                $Type : 'UI.DataField',
                Value : Ref_PO_Num,
                Label : 'Reference PO Number',
            },
            {
                $Type : 'UI.DataField',
                Label : 'Payment Terms',
                Value : Payment_Terms,
            },
            {
                $Type : 'UI.DataField',
                Value : Due_Date,
                Label : 'Due Date',
            },
            {
                $Type : 'UI.DataField',
                Label : 'Vendor Code',
                Value : Vendor_Code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Payment Method',
                Value : Payment_Method,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Currency',
                Value : Currency,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Company Code',
                Value : Company_Code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'G/L Account',
                Value : GL_Account,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Cost Center',
                Value : Cost_Center,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SGST Amt',
                Value : SGST_Amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CGST Amt',
                Value : CGST_Amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Discount%',
                Value : Discount_per,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Discount Amt',
                Value : Discount_Amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TDS%',
                Value : TDS_per,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Total TDS Amt',
                Value : Total_TDS_Amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Taxable Amount',
                Value : Taxable_Amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Adjustment',
                Value : Adjustment,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Amount (Total)',
                Value : Amount_Total,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Department',
                Value : Department,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TCS',
                Value : TCS_amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Internal Order',
                Value : Internal_Order,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'Details',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            // Label : 'item_details',
            ID : 'item_details',
            Target : 'item_data_parent/@UI.LineItem#item_details',
        },
    ]
);
annotate service.item_data_for_track with @(
    UI.LineItem #item_details : [
        {
            $Type : 'UI.DataField',
            Value : Item,
            Label : 'Item',
        },{
            $Type : 'UI.DataField',
            Value : HSN_Code,
            Label : 'Hsn Code	',
        },{
            $Type : 'UI.DataField',
            Value : Material,
            Label : 'Material',
        },{
            $Type : 'UI.DataField',
            Value : Qty,
            Label : 'Qty',
        },{
            $Type : 'UI.DataField',
            Value : Unit_Price,
            Label : 'Unit Price',
        },{
            $Type : 'UI.DataField',
            Value : GL_Acc,
            Label : 'G/L Acc	',
        },{
            $Type : 'UI.DataField',
            Value : Cost_Center,
            Label : 'Cost Center',
        },{
            $Type : 'UI.DataField',
            Value : Plant,
            Label : 'Plant',
        },{
            $Type : 'UI.DataField',
            Value : Disc_Per,
            Label : 'Disc.(%)	',
        },{
            $Type : 'UI.DataField',
            Value : GST_Per,
            Label : 'GST%	',
        },{
            $Type : 'UI.DataField',
            Value : Taxable_Amt,
            Label : 'Taxable Amt	',
        },{
            $Type : 'UI.DataField',
            Value : Tax_Amt,
            Label : 'Tax Amt	',
        },{
            $Type : 'UI.DataField',
            Value : Total_Amt,
            Label : 'Total_Amt',
        },]
);
annotate service.track_invoices with @(
    UI.HeaderInfo : {
        TypeNamePlural : '',
        TypeName : '',
        Title : {
            $Type : 'UI.DataField',
            Value : invoice,
        },
        Description : {
            $Type : 'UI.DataField',
            Value : suplier_name,
        },
        TypeImageUrl : 'sap-icon://activities',
    }
);
