using CatalogService as service from '../../srv/service';

annotate service.inv_assg with @(
     Capabilities.InsertRestrictions : {
    Insertable : false
     },
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'INVOICE NO. ',
            Value : invoice,
        },
        {
            $Type : 'UI.DataField',
            Label : 'REF. INVOICE NO',
            Value : RE_INVOICE_NO,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SUPPLIER NAME',
            Value : SUPPLIER_NAME,
        },
        {
            $Type : 'UI.DataField',
            Value : DATE,
            Label : 'DATE',
        },
        {
            $Type : 'UI.DataField',
            Value : MODIFIED_by,
            Label : 'MODIFIED BY',
        },
        {
            $Type : 'UI.DataField',
            Value : modified_date_time,
            Label : 'MODIFIED DATE-TIME',
        },
        {
            $Type : 'UI.DataField',
            Value : inv_file,
            Label : 'INVOICE FILE',
        },
    ]
);
annotate service.inv_assg with @(
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
                Label : 'Ref. Invoice No',
                Value : REF_INVOICE_NO,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Invoice Date',
                Value : Invoice_Date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Posting Date',
                Value : Posting_Date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Reference PO Number',
                Value : Reference_po_number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Payment Terms',
                Value : Payment_Terms,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Due Date',
                Value : Due_Date,
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
                Label : 'GL Account',
                Value : GL_Account,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Cost Center',
                Value : Cost_Center,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Discount per',
                Value : Discount_per,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Discount Amount',
                Value : Discount_Amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TDS per',
                Value : TDS_per,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Total TDS Amount',
                Value : Total_TDS_Amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SGST Amount',
                Value : SGST_Amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CGST Amount',
                Value : CGST_Amount,
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
                Label : 'Amount Total',
                Value : Amount_Total,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Department',
                Value : Department,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Internal Order',
                Value : Internal_Order,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TCS amount',
                Value : TCS_amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Assign Invoice To ',
                Value : assign_inv_to,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            // Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            // Label : 'item',
            ID : 'item',
            Target : 'item_data_parent/@UI.LineItem#item',
        },
    ]
);
annotate service.item_data_for_invassign with @(
     UI.DeleteHidden : true,
    UI.LineItem #item : [
        {
            $Type : 'UI.DataField',
            Value : Item,
            Label : 'Item',
        },{
            $Type : 'UI.DataField',
            Value : Item_No,
            Label : 'Item No',
        },{
            $Type : 'UI.DataField',
            Value : Material,
            Label : 'Material',
        },{
            $Type : 'UI.DataField',
            Value : HSN_SAC,
            Label : 'HSN/SAC	',
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
            Label : 'GL Acc',
        },{
            $Type : 'UI.DataField',
            Value : Plant,
            Label : 'Plant',
        },{
            $Type : 'UI.DataField',
            Value : Cost_Center,
            Label : 'Cost Center',
        },{
            $Type : 'UI.DataField',
            Value : Disc_Per,
            Label : 'Disc.(%)',
        },{
            $Type : 'UI.DataField',
            Value : GST_Per,
            Label : 'GST%	',
        },{
            $Type : 'UI.DataField',
            Value : Taxable_Amt,
            Label : 'Taxable Amt',
        },{
            $Type : 'UI.DataField',
            Value : Tax_Amt,
            Label : 'Tax Amt',
        },{
            $Type : 'UI.DataField',
            Value : Total_Amt,
            Label : 'Total Amt',
        },]
);
annotate service.inv_assg with {
    assign_inv_to @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'asgn_inv_to',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : assign_inv_to,
                    ValueListProperty : 'name',
                },
            ],
            Label : 'name help',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.inv_assg with {
    IRN @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    GSTIN @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Document_Type @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    REF_INVOICE_NO @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Invoice_Date @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Posting_Date @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Reference_po_number @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Payment_Terms @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Due_Date @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Vendor_Code @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Payment_Method @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Currency @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Company_Code @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    GL_Account @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Cost_Center @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Discount_per @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Discount_Amount @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    TDS_per @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Total_TDS_Amount @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    SGST_Amount @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    CGST_Amount @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Taxable_Amount @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Adjustment @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Amount_Total @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Department @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    Internal_Order @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    TCS_amount @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with {
    assign_inv_to @Common.FieldControl : #Mandatory
};
annotate service.item_data_for_invassign with {
    Item @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Item_No @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Material @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    HSN_SAC @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Qty @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Unit_Price @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    GL_Acc @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Plant @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Cost_Center @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Disc_Per @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    GST_Per @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Taxable_Amt @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Tax_Amt @Common.FieldControl : #ReadOnly
};
annotate service.item_data_for_invassign with {
    Total_Amt @Common.FieldControl : #ReadOnly
};
annotate service.inv_assg with @(
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View',
    }
);
annotate service.inv_assg with @(
    UI.HeaderInfo : {
        TypeImageUrl : 'sap-icon://activity-items',
        TypeName : '',
        TypeNamePlural : '',
        Title : {
            $Type : 'UI.DataField',
            Value : invoice,
        },
    }
);
// annotate service.Draft with @(
//     UI.LineItem #tableView : [
//         {
//             $Type : 'UI.DataField',
//             Value : invoice_no,
//             Label : 'invoice_no',
//         },{
//             $Type : 'UI.DataField',
//             Value : Ref_invoice_no,
//             Label : 'Ref_invoice_no',
//         },{
//             $Type : 'UI.DataField',
//             Value : supplier_name,
//             Label : 'supplier_name',
//         },{
//             $Type : 'UI.DataField',
//             Value : Date,
//             Label : 'Date',
//         },{
//             $Type : 'UI.DataField',
//             Value : modified_by,
//             Label : 'modified_by',
//         },{
//             $Type : 'UI.DataField',
//             Value : modified_date_time,
//             Label : 'modified_date_time',
//         },{
//             $Type : 'UI.DataField',
//             Value : INVOICE_FILE,
//             Label : 'INVOICE_FILE',
//         },],
//     UI.SelectionPresentationVariant #tableView : {
//         $Type : 'UI.SelectionPresentationVariantType',
//         PresentationVariant : {
//             $Type : 'UI.PresentationVariantType',
//             Visualizations : [
//                 '@UI.LineItem#tableView',
//             ],
//         },
//         SelectionVariant : {
//             $Type : 'UI.SelectionVariantType',
//             SelectOptions : [
//             ],
//         },
//         Text : 'Table View Draft',
//     }
// );
// annotate service.Draft with @(
//     UI.Facets : [
//         {
//             $Type : 'UI.ReferenceFacet',
//             Label : 'form',
//             ID : 'form',
//             Target : '@UI.FieldGroup#form',
//         },
//     ],
//     UI.FieldGroup #form : {
//         $Type : 'UI.FieldGroupType',
//         Data : [
//             {
//                 $Type : 'UI.DataField',
//                 Value : irn,
//                 Label : 'irn',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : ref_po_num,
//                 Label : 'ref_po_num',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : gstin,
//                 Label : 'gstin',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : Document_Type,
//                 Label : 'Document_Type',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : Ref_invoice_no1,
//                 Label : 'Ref_invoice_no1',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : invoice_date,
//                 Label : 'invoice_date',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : posting_date,
//                 Label : 'posting_date',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : baseline_date,
//                 Label : 'baseline_date',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : Vendor_Code,
//                 Label : 'Vendor_Code',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : payment_terms,
//                 Label : 'payment_terms',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : payment_method,
//                 Label : 'payment_method',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : company_code,
//                 Label : 'company_code',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : currency,
//                 Label : 'currency',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : department_name,
//                 Label : 'department_name',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : gl_account,
//                 Label : 'gl_account',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : cost_center,
//                 Label : 'cost_center',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : internal_order,
//                 Label : 'internal_order',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : taxable_amount,
//                 Label : 'taxable_amount',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : adjustment,
//                 Label : 'adjustment',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : amount,
//                 Label : 'amount',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : tcs,
//                 Label : 'tcs',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : tds_per,
//                 Label : 'tds_per',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : discount_per,
//                 Label : 'discount_per',
//             },{
//                 $Type : 'UI.DataField',
//                 Value : vat_per,
//                 Label : 'vat_per',
//             },],
//     }
// );
