using CatalogService as service from '../../srv/service';

annotate service.New with @(
    UI.CreateHidden,
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'invoice_no',
            Value : invoice_no,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Ref_invoice_no',
            Value : Ref_invoice_no,
        },
        {
            $Type : 'UI.DataField',
            Label : 'supplier_name',
            Value : supplier_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Date',
            Value : Date,
        },
        {
            $Type : 'UI.DataField',
            Label : 'modified_date_time',
            Value : modified_date_time,
        },
        {
            $Type : 'UI.DataField',
            Value : INVOICE_FILE,
            Label : 'INVOICE_FILE',
        },
    ]
);
annotate service.New with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'invoice_no',
                Value : invoice_no,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Ref_invoice_no',
                Value : Ref_invoice_no,
            },
            {
                $Type : 'UI.DataField',
                Label : 'supplier_name',
                Value : supplier_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Date',
                Value : Date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'modified_date_time',
                Value : modified_date_time,
            },
            {
                $Type : 'UI.DataField',
                Label : 'INVOICE_FILE',
                Value : INVOICE_FILE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'irn',
                Value : irn,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ref_po_num',
                Value : ref_po_num,
                ![@Common.FieldControl] : value,
            },
            {
                $Type : 'UI.DataField',
                Label : 'gstin',
                Value : gstin,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Document_Type',
                Value : Document_Type,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Ref_invoice_no1',
                Value : Ref_invoice_no1,
            },
            {
                $Type : 'UI.DataField',
                Label : 'invoice_date',
                Value : invoice_date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'posting_date',
                Value : posting_date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'baseline_date',
                Value : baseline_date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Vendor_Code',
                Value : Vendor_Code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'payment_terms',
                Value : payment_terms,
            },
            {
                $Type : 'UI.DataField',
                Label : 'payment_method',
                Value : payment_method,
            },
            {
                $Type : 'UI.DataField',
                Label : 'company_code',
                Value : company_code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'currency',
                Value : currency,
            },
            {
                $Type : 'UI.DataField',
                Label : 'department_name',
                Value : department_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'gl_account',
                Value : gl_account,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cost_center',
                Value : cost_center,
            },
            {
                $Type : 'UI.DataField',
                Label : 'internal_order',
                Value : internal_order,
            },
            {
                $Type : 'UI.DataField',
                Label : 'taxable_amount',
                Value : taxable_amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'adjustment',
                Value : adjustment,
            },
            {
                $Type : 'UI.DataField',
                Label : 'amount',
                Value : amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'tcs',
                Value : tcs,
            },
            {
                $Type : 'UI.DataField',
                Label : 'tds_per',
                Value : tds_per,
            },
            {
                $Type : 'UI.DataField',
                Label : 'tds_tot_amt',
                Value : tds_tot_amt,
            },
            {
                $Type : 'UI.DataField',
                Label : 'discount_per',
                Value : discount_per,
            },
            {
                $Type : 'UI.DataField',
                Label : 'total_discount_amount',
                Value : total_discount_amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'vat_per',
                Value : vat_per,
            },
            {
                $Type : 'UI.DataField',
                Value : Gst_Perc,
                Label : 'Gst_Perc',
            },
            // {
            //     $Type : 'UI.DataField',
            //     Value : CGST,
            //     Label : 'CGST',
            // },
            // {
            //     $Type : 'UI.DataField',
            //     Value : SGST,
            //     Label : 'SGST',
            // },
            // {
            //     $Type : 'UI.DataField',
            //     Value : IGST_val,
            //     Label : 'IGST_val',
            // },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'itm_details',
            ID : 'itm_details',
            Target : 'child_item/@UI.LineItem#itm_details',
        },
    ]
);




annotate service.New with
 @(Common : {
    SideEffects #ItemChanged4    : {
        SourceProperties : ['Gst_Perc'],
        TargetEntities : ['child_item']
    }});

annotate service.New with
 @(Common : {
    SideEffects #disc    : {
        SourceProperties : ['discount_per'],
        TargetProperties : ['total_discount_amount']
    }});
   

annotate service.New with @Common.SideEffects#disupdate:{
    SourceProperties:['discount_per'],
    TargetEntities:['child_item']
};

annotate service.New with
 @(Common : {
    SideEffects #tot_amt    : {
        SourceProperties : ['discount_per'],
        TargetProperties : ['amount','taxable_amount','total_discount_amount']
    }});

annotate service.New with
 @(Common : {
    SideEffects #tds_amt    : {
        SourceProperties : ['tds_per'],
        TargetProperties : ['amount']
    }});


annotate service.item_new with @(
    UI.LineItem #itm_details : [
        {
            $Type : 'UI.DataField',
            Value : Item,
            Label : 'Item',
        },{
            $Type : 'UI.DataField',
            Value : Item_No,
            Label : 'Item_No',
        },{
            $Type : 'UI.DataField',
            Value : HSN_Code,
            Label : 'HSN_Code',
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
            Label : 'Unit_Price',
        },{
            $Type : 'UI.DataField',
            Value : GL_Acc,
            Label : 'GL_Acc',
        },{
            $Type : 'UI.DataField',
            Value : Cost_Center,
            Label : 'Cost_Center',
        },{
            $Type : 'UI.DataField',
            Value : Plant,
            Label : 'Plant',
        },
        {
            $Type : 'UI.DataField',
            Value : Disc_Per,
            Label : 'Disc_Per',
        },
        {
            $Type : 'UI.DataField',
            Value : GST_Per,
            Label : 'GST_Per',
        },{
            $Type : 'UI.DataField',
            Value : Taxable_Amt,
            Label : 'Taxable_Amt',
        },
        {
            $Type : 'UI.DataField',
            Value : Tax_Amt,
            Label : 'Tax_Amt',
        },{
            $Type : 'UI.DataField',
            Value : Total_Amt,
            Label : 'Total_Amt',
        },]
);
annotate service.New with @(
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
        Text : 'New',
    }
);
annotate service.Draft with @(
    UI.CreateHidden,
    UI.LineItem #tableView1 : [
        {
            $Type : 'UI.DataField',
            Value : invoice_no,
            Label : 'invoice_no',
        },{
            $Type : 'UI.DataField',
            Value : Ref_invoice_no,
            Label : 'Ref_invoice_no',
        },{
            $Type : 'UI.DataField',
            Value : supplier_name,
            Label : 'supplier_name',
        },{
            $Type : 'UI.DataField',
            Value : Date,
            Label : 'Date',
        },{
            $Type : 'UI.DataField',
            Value : modified_by,
            Label : 'modified_by',
        },{
            $Type : 'UI.DataField',
            Value : modified_date_time,
            Label : 'modified_date_time',
        },{
            $Type : 'UI.DataField',
            Value : INVOICE_FILE,
            Label : 'INVOICE_FILE',
        },],
    UI.SelectionPresentationVariant #tableView1 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView1',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Draft',
    }
);
annotate service.Draft with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'form1',
            ID : 'form1',
            Target : '@UI.FieldGroup#form1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'item',
            ID : 'item',
            Target : 'item_data_draft/@UI.LineItem#item',
        },]
);
annotate service.item2 with @(
    UI.LineItem #tab1 : [
    ]
);
annotate service.Draft with @(
    UI.FieldGroup #form1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : irn,
                Label : 'irn',
            },{
                $Type : 'UI.DataField',
                Value : ref_po_num,
                Label : 'ref_po_num',
                 ![@Common.FieldControl] : value,

            },{
                $Type : 'UI.DataField',
                Value : gstin,
                Label : 'gstin',
            },{
                $Type : 'UI.DataField',
                Value : Document_Type,
                Label : 'Document_Type',
            },{
                $Type : 'UI.DataField',
                Value : Ref_invoice_no1,
                Label : 'Ref_invoice_no1',
            },{
                $Type : 'UI.DataField',
                Value : invoice_date,
                Label : 'invoice_date',
            },{
                $Type : 'UI.DataField',
                Value : posting_date,
                Label : 'posting_date',
            },{
                $Type : 'UI.DataField',
                Value : baseline_date,
                Label : 'baseline_date',
            },{
                $Type : 'UI.DataField',
                Value : Vendor_Code,
                Label : 'Vendor_Code',
            },{
                $Type : 'UI.DataField',
                Value : payment_terms,
                Label : 'payment_terms',
            },{
                $Type : 'UI.DataField',
                Value : payment_method,
                Label : 'payment_method',
            },{
                $Type : 'UI.DataField',
                Value : company_code,
                Label : 'company_code',
            },{
                $Type : 'UI.DataField',
                Value : currency,
                Label : 'currency',
            },{
                $Type : 'UI.DataField',
                Value : department_name,
                Label : 'department_name',
            },{
                $Type : 'UI.DataField',
                Value : gl_account,
                Label : 'gl_account',
            },{
                $Type : 'UI.DataField',
                Value : cost_center,
                Label : 'cost_center',
            },{
                $Type : 'UI.DataField',
                Value : internal_order,
                Label : 'internal_order',
            },{
                $Type : 'UI.DataField',
                Value : taxable_amount,
                Label : 'taxable_amount',
            },{
                $Type : 'UI.DataField',
                Value : adjustment,
                Label : 'adjustment',
            },{
                $Type : 'UI.DataField',
                Value : amount,
                Label : 'amount',
            },{
                $Type : 'UI.DataField',
                Value : tcs,
                Label : 'tcs',
            },{
                $Type : 'UI.DataField',
                Value : tds_per,
                Label : 'tds_per',
            },{
                $Type : 'UI.DataField',
                Value : discount_per,
                Label : 'discount_per',
            },{
                $Type : 'UI.DataField',
                Value : vat_per,
                Label : 'vat_per',
            },],
    }
);
annotate service.item2 with @(
    UI.LineItem #item : [
        {
            $Type : 'UI.DataField',
            Value : sl_no,
            Label : 'sl_no',
        },{
            $Type : 'UI.DataField',
            Value : item_no,
            Label : 'item_no',
        },{
            $Type : 'UI.DataField',
            Value : HSN_Code,
            Label : 'HSN_Code',
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
            Value : Qc,
            Label : 'Qc',
        },{
            $Type : 'UI.DataField',
            Value : Unit_Price,
            Label : 'Unit_Price',
        },{
            $Type : 'UI.DataField',
            Value : GL_ACC,
            Label : 'GL_ACC',
        },{
            $Type : 'UI.DataField',
            Value : Cost_Center,
            Label : 'Cost_Center',
        },{
            $Type : 'UI.DataField',
            Value : Plant,
            Label : 'Plant',
        },{
            $Type : 'UI.DataField',
            Value : Disc_Perc,
            Label : 'Disc_Perc',
        },{
            $Type : 'UI.DataField',
            Value : Taxable_Amount,
            Label : 'Taxable_Amount',
        },{
            $Type : 'UI.DataField',
            Value : Tax_Amount,
            Label : 'Tax_Amount',
        },{
            $Type : 'UI.DataField',
            Value : Total_Amount,
            Label : 'Total_Amount',
        },]
);
annotate service.Rejected with @(
    UI.CreateHidden,
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : invoice_no,
            Label : 'invoice_no',
        },{
            $Type : 'UI.DataField',
            Value : Ref_invoice_no1,
            Label : 'Ref_invoice_no1',
        },{
            $Type : 'UI.DataField',
            Value : supplier_name,
            Label : 'supplier_name',
        },{
            $Type : 'UI.DataField',
            Value : Date,
            Label : 'Date',
        },{
            $Type : 'UI.DataField',
            Value : modified_by,
            Label : 'modified_by',
        },{
            $Type : 'UI.DataField',
            Value : modified_date_time,
            Label : 'modified_date_time',
        },{
            $Type : 'UI.DataField',
            Value : INVOICE_FILE,
            Label : 'INVOICE_FILE',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Rejected',
    }
);
annotate service.Rejected with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'form',
            ID : 'form',
            Target : '@UI.FieldGroup#form1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'item',
            ID : 'item',
            Target : 'item_data_draft/@UI.LineItem#item',
        },],
    UI.FieldGroup #form : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : item_data_draft.sl_no,
                Label : 'sl_no',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.item_no,
                Label : 'item_no',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.HSN_Code,
                Label : 'HSN_Code',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Material,
                Label : 'Material',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Qty,
                Label : 'Qty',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Qc,
                Label : 'Qc',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Unit_Price,
                Label : 'Unit_Price',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.GL_ACC,
                Label : 'GL_ACC',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Cost_Center,
                Label : 'Cost_Center',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Plant,
                Label : 'Plant',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Disc_Perc,
                Label : 'Disc_Perc',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Taxable_Amount,
                Label : 'Taxable_Amount',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Tax_Amount,
                Label : 'Tax_Amount',
            },{
                $Type : 'UI.DataField',
                Value : item_data_draft.Total_Amount,
                Label : 'Total_Amount',
            },],
    }
);
annotate service.Rejected with @(
    UI.FieldGroup #form1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : irn,
                Label : 'irn',
            },{
                $Type : 'UI.DataField',
                Value : ref_po_num,
                Label : 'ref_po_num',
                 ![@Common.FieldControl] : value,
            },{
                $Type : 'UI.DataField',
                Value : gstin,
                Label : 'gstin',
            },{
                $Type : 'UI.DataField',
                Value : Document_Type,
                Label : 'Document_Type',
            },{
                $Type : 'UI.DataField',
                Value : Ref_invoice_no,
                Label : 'Ref_invoice_no',
            },{
                $Type : 'UI.DataField',
                Value : Ref_invoice_no1,
                Label : 'Ref_invoice_no1',
            },{
                $Type : 'UI.DataField',
                Value : invoice_date,
                Label : 'invoice_date',
            },{
                $Type : 'UI.DataField',
                Value : posting_date,
                Label : 'posting_date',
            },{
                $Type : 'UI.DataField',
                Value : baseline_date,
                Label : 'baseline_date',
            },{
                $Type : 'UI.DataField',
                Value : Vendor_Code,
                Label : 'Vendor_Code',
            },{
                $Type : 'UI.DataField',
                Value : payment_terms,
                Label : 'payment_terms',
            },{
                $Type : 'UI.DataField',
                Value : payment_method,
                Label : 'payment_method',
            },{
                $Type : 'UI.DataField',
                Value : company_code,
                Label : 'company_code',
            },{
                $Type : 'UI.DataField',
                Value : currency,
                Label : 'currency',
            },{
                $Type : 'UI.DataField',
                Value : department_name,
                Label : 'department_name',
            },{
                $Type : 'UI.DataField',
                Value : gl_account,
                Label : 'gl_account',
            },{
                $Type : 'UI.DataField',
                Value : cost_center,
                Label : 'cost_center',
            },{
                $Type : 'UI.DataField',
                Value : internal_order,
                Label : 'internal_order',
            },{
                $Type : 'UI.DataField',
                Value : taxable_amount,
                Label : 'taxable_amount',
            },{
                $Type : 'UI.DataField',
                Value : adjustment,
                Label : 'adjustment',
            },{
                $Type : 'UI.DataField',
                Value : amount,
                Label : 'amount',
            },{
                $Type : 'UI.DataField',
                Value : tcs,
                Label : 'tcs',
            },{
                $Type : 'UI.DataField',
                Value : tds_per,
                Label : 'tds_per',
            },{
                $Type : 'UI.DataField',
                Value : discount_per,
                Label : 'discount_per',
            },{
                $Type : 'UI.DataField',
                Value : vat_per,
                Label : 'vat_per',
            },],
    }
);
annotate service.item3 with @(
    UI.LineItem #item : [
        {
            $Type : 'UI.DataField',
            Value : sl_no,
            Label : 'sl_no',
        },{
            $Type : 'UI.DataField',
            Value : item_no,
            Label : 'item_no',
        },{
            $Type : 'UI.DataField',
            Value : HSN_Code,
            Label : 'HSN_Code',
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
            Value : Qc,
            Label : 'Qc',
        },{
            $Type : 'UI.DataField',
            Value : Unit_Price,
            Label : 'Unit_Price',
        },{
            $Type : 'UI.DataField',
            Value : GL_ACC,
            Label : 'GL_ACC',
        },{
            $Type : 'UI.DataField',
            Value : Cost_Center,
            Label : 'Cost_Center',
        },{
            $Type : 'UI.DataField',
            Value : Plant,
            Label : 'Plant',
        },{
            $Type : 'UI.DataField',
            Value : Disc_Perc,
            Label : 'Disc_Perc',
        },{
            $Type : 'UI.DataField',
            Value : GST_Per,
            Label : 'Gst_Perc',
        },{
            $Type : 'UI.DataField',
            Value : Taxable_Amount,
            Label : 'Taxable_Amount',
        },{
            $Type : 'UI.DataField',
            Value : Tax_Amount,
            Label : 'Tax_Amount',
        },{
            $Type : 'UI.DataField',
            Value : Total_Amount,
            Label : 'Total_Amount',
        },]
);
annotate service.inapproval with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : invoice,
            Label : 'invoice',
        },{
            $Type : 'UI.DataField',
            Value : Ref_invoice,
            Label : 'Ref_invoice',
        },{
            $Type : 'UI.DataField',
            Value : suplier_name,
            Label : 'suplier_name',
        },{
            $Type : 'UI.DataField',
            Value : Date,
            Label : 'Date',
        },{
            $Type : 'UI.DataField',
            Value : modified_by,
            Label : 'modified_by',
        },{
            $Type : 'UI.DataField',
            Value : Mod_date_time,
            Label : 'Mod_date_time',
        },{
            $Type : 'UI.DataField',
            Value : ass.Approver,
            Label : 'Approver',
        },{
            $Type : 'UI.DataField',
            Value : INVOICE_FILE,
            Label : 'INVOICE_FILE',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'In Approval',
    }
);
annotate service.inapproval with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'form',
            ID : 'form',
            Target : '@UI.FieldGroup#form',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'item',
            ID : 'item',
            Target : 'item_for_inapp/@UI.LineItem#item',
        },
    ],
    UI.FieldGroup #form : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : irn,
                Label : 'irn',
            },{
                $Type : 'UI.DataField',
                Value : Reference_po_num,
                Label : 'Reference_po_num',
            },{
                $Type : 'UI.DataField',
                Value : gstin,
                Label : 'gstin',
            },{
                $Type : 'UI.DataField',
                Value : Document_type,
                Label : 'Document_type',
            },{
                $Type : 'UI.DataField',
                Value : Ref_invoice_no,
                Label : 'Ref_invoice_no',
            },{
                $Type : 'UI.DataField',
                Value : invoice_date,
                Label : 'invoice_date',
            },{
                $Type : 'UI.DataField',
                Value : posting_date,
                Label : 'posting_date',
            },{
                $Type : 'UI.DataField',
                Value : Baseline_date,
                Label : 'Baseline_date',
            },{
                $Type : 'UI.DataField',
                Value : Vendor,
                Label : 'Vendor',
            },{
                $Type : 'UI.DataField',
                Value : Payment_Terms,
                Label : 'Payment_Terms',
            },{
                $Type : 'UI.DataField',
                Value : Payment_Method,
                Label : 'Payment_Method',
            },{
                $Type : 'UI.DataField',
                Value : company_code,
                Label : 'company_code',
            },{
                $Type : 'UI.DataField',
                Value : Currency,
                Label : 'Currency',
            },{
                $Type : 'UI.DataField',
                Value : Department,
                Label : 'Department',
            },{
                $Type : 'UI.DataField',
                Value : GL_account,
                Label : 'GL_account',
            },{
                $Type : 'UI.DataField',
                Value : cost_center,
                Label : 'cost_center',
            },{
                $Type : 'UI.DataField',
                Value : internal_order,
                Label : 'internal_order',
            },{
                $Type : 'UI.DataField',
                Value : taxable_amount,
                Label : 'taxable_amount',
            },{
                $Type : 'UI.DataField',
                Value : Adjustment,
                Label : 'Adjustment',
            },{
                $Type : 'UI.DataField',
                Value : Amount,
                Label : 'Amount',
            },{
                $Type : 'UI.DataField',
                Value : tcs_amount,
                Label : 'tcs_amount',
            },{
                $Type : 'UI.DataField',
                Value : tds_percent,
                Label : 'tds_percent',
            },{
                $Type : 'UI.DataField',
                Value : Discount_percent,
                Label : 'Discount_percent',
            },{
                $Type : 'UI.DataField',
                Value : tax_perc,
                Label : 'tax_perc',
            },],
    }
);
annotate service.item4 with @(
    UI.LineItem #item : [
        {
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.sl_no,
            Label : 'sl_no',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.item_no,
            Label : 'item_no',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.HSN_Code,
            Label : 'HSN_Code',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Material,
            Label : 'Material',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Qty,
            Label : 'Qty',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Qc,
            Label : 'Qc',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Unit_Price,
            Label : 'Unit_Price',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.GL_ACC,
            Label : 'GL_ACC',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Cost_Center,
            Label : 'Cost_Center',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Plant,
            Label : 'Plant',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Disc_Perc,
            Label : 'Disc_Perc',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.GST_Per,
            Label : 'Gst_Perc',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Taxable_Amount,
            Label : 'Taxable_Amount',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Tax_Amount,
            Label : 'Tax_Amount',
        },{
            $Type : 'UI.DataField',
            Value : item_inapp_inv.item_for_inapp.Total_Amount,
            Label : 'Total_Amount',
        },]
);
annotate service.Submitted_to_ERP with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : invoice,
            Label : 'invoice',
        },{
            $Type : 'UI.DataField',
            Value : Ref_invoice,
            Label : 'Ref_invoice',
        },{
            $Type : 'UI.DataField',
            Value : Erp_invoiceno,
            Label : 'Erp_invoiceno',
        },{
            $Type : 'UI.DataField',
            Value : suplier_name,
            Label : 'suplier_name',
        },{
            $Type : 'UI.DataField',
            Value : Date,
            Label : 'Date',
        },{
            $Type : 'UI.DataField',
            Value : Modified_by,
            Label : 'Modified_by',
        },{
            $Type : 'UI.DataField',
            Value : Mod_date_time,
            Label : 'Mod_date_time',
        },{
            $Type : 'UI.DataField',
            Value : ass_erp1.Approver,
            Label : 'Approver',
        },
        {
            $Type : 'UI.DataField',
            Value : INVOICE_FILE,
            Label : 'INVOICE_FILE',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Submitted to ERP',
    }
);
annotate service.Submitted_to_ERP with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'form',
            ID : 'form',
            Target : '@UI.FieldGroup#form',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'item_data',
            ID : 'item_data',
            Target : 'item_data_erp/@UI.LineItem#item_data',
        },
    ],
    UI.FieldGroup #form : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : IRN,
                Label : 'IRN',
            },{
                $Type : 'UI.DataField',
                Value : Reference_po_num,
                Label : 'Reference_po_num',
            },{
                $Type : 'UI.DataField',
                Value : gstin,
                Label : 'gstin',
            },{
                $Type : 'UI.DataField',
                Value : Document_type,
                Label : 'Document_type',
            },{
                $Type : 'UI.DataField',
                Value : Ref_invoice_no,
                Label : 'Ref_invoice_no',
            },{
                $Type : 'UI.DataField',
                Value : invoice_date,
                Label : 'invoice_date',
            },{
                $Type : 'UI.DataField',
                Value : posting_date,
                Label : 'posting_date',
            },{
                $Type : 'UI.DataField',
                Value : Baseline_date,
                Label : 'Baseline_date',
            },{
                $Type : 'UI.DataField',
                Value : Vendor,
                Label : 'Vendor',
            },{
                $Type : 'UI.DataField',
                Value : Payment_Terms,
                Label : 'Payment_Terms',
            },{
                $Type : 'UI.DataField',
                Value : Payment_Method,
                Label : 'Payment_Method',
            },{
                $Type : 'UI.DataField',
                Value : company_code,
                Label : 'company_code',
            },{
                $Type : 'UI.DataField',
                Value : Currency,
                Label : 'Currency',
            },{
                $Type : 'UI.DataField',
                Value : Department,
                Label : 'Department',
            },{
                $Type : 'UI.DataField',
                Value : GL_account,
                Label : 'GL_account',
            },{
                $Type : 'UI.DataField',
                Value : cost_center,
                Label : 'cost_center',
            },{
                $Type : 'UI.DataField',
                Value : internal_order,
                Label : 'internal_order',
            },{
                $Type : 'UI.DataField',
                Value : taxable_amount,
                Label : 'taxable_amount',
            },{
                $Type : 'UI.DataField',
                Value : Adjustment,
                Label : 'Adjustment',
            },{
                $Type : 'UI.DataField',
                Value : Amount,
                Label : 'Amount',
            },{
                $Type : 'UI.DataField',
                Value : tcs_amount,
                Label : 'tcs_amount',
            },{
                $Type : 'UI.DataField',
                Value : tds_percent,
                Label : 'tds_percent',
            },{
                $Type : 'UI.DataField',
                Value : Discount_percent,
                Label : 'Discount_percent',
            },
            {
                $Type : 'UI.DataField',
                Value : Gst_percent,
                Label : 'Gst_percent',
            },],
    }
);
annotate service.item5 with @(
    UI.LineItem #item_data : [
        {
            $Type : 'UI.DataField',
            Value : sl_no,
            Label : 'sl_no',
        },{
            $Type : 'UI.DataField',
            Value : item_no,
            Label : 'item_no',
        },{
            $Type : 'UI.DataField',
            Value : HSN_Code,
            Label : 'HSN_Code',
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
            Value : Qc,
            Label : 'Qc',
        },{
            $Type : 'UI.DataField',
            Value : Unit_Price,
            Label : 'Unit_Price',
        },{
            $Type : 'UI.DataField',
            Value : GL_ACC,
            Label : 'GL_ACC',
        },{
            $Type : 'UI.DataField',
            Value : Cost_Center,
            Label : 'Cost_Center',
        },{
            $Type : 'UI.DataField',
            Value : Plant,
            Label : 'Plant',
        },{
            $Type : 'UI.DataField',
            Value : Disc_Perc,
            Label : 'Disc_Perc',
        },{
            $Type : 'UI.DataField',
            Value : GST_Per,
            Label : 'GST_Per',
        },{
            $Type : 'UI.DataField',
            Value : Taxable_Amount,
            Label : 'Taxable_Amount',
        },{
            $Type : 'UI.DataField',
            Value : Tax_Amount,
            Label : 'Tax_Amount',
        },{
            $Type : 'UI.DataField',
            Value : Total_Amount,
            Label : 'Total_Amount',
        },]
);
annotate service.New with {
    Document_Type @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Document_Type',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : Document_Type,
                    ValueListProperty : 'type',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.New with {
    Vendor_Code @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'vendor_search_help',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : Vendor_Code,
                    ValueListProperty : 'vendor_id',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'name',
                },
            ],
            PresentationVariantQualifier : 'vh_New_Vendor_Code',
        },
        Common.ValueListWithFixedValues : false
)};
annotate service.vendor_search_help with @(
    UI.PresentationVariant #vh_New_Vendor_Code : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : vendor_id,
                Descending : false,
            },
        ],
    }
);
annotate service.New with {
    payment_terms @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Pay_ter',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : payment_terms,
                    ValueListProperty : 'value',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.New with {
    payment_method @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Payment_Meth',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : payment_method,
                    ValueListProperty : 'table_key',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.New with {
    company_code @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'company_code',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : company_code,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            PresentationVariantQualifier : 'vh_New_company_code',
        },
        Common.ValueListWithFixedValues : false
)};
annotate service.company_code with @(
    UI.PresentationVariant #vh_New_company_code : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : code,
                Descending : false,
            },
        ],
    }
);
annotate service.New with {
    currency @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'currency',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : currency,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            PresentationVariantQualifier : 'vh_New_currency',
        },
        Common.ValueListWithFixedValues : false
)};
annotate service.currency with @(
    UI.PresentationVariant #vh_New_currency : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : code,
                Descending : false,
            },
        ],
    }
);
annotate service.New with {
    department_name @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'department',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : department_name,
                    ValueListProperty : 'name',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.New with {
    gl_account @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'gl_acc',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : gl_account,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            PresentationVariantQualifier : 'vh_New_gl_account',
        },
        Common.ValueListWithFixedValues : false
)};
annotate service.gl_acc with @(
    UI.PresentationVariant #vh_New_gl_account : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : code,
                Descending : false,
            },
        ],
    }
);
annotate service.New with {
    cost_center @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'cost_center',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : cost_center,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            PresentationVariantQualifier : 'vh_New_cost_center',
        },
        Common.ValueListWithFixedValues : false
)};
annotate service.cost_center with @(
    UI.PresentationVariant #vh_New_cost_center : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : code,
                Descending : false,
            },
        ],
    }
);
annotate service.New with {
    internal_order @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'internal_ord',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : internal_order,
                    ValueListProperty : 'code',
                },
            ],
            PresentationVariantQualifier : 'vh_New_internal_order',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.internal_ord with @(
    UI.PresentationVariant #vh_New_internal_order : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : code,
                Descending : false,
            },
        ],
    }
);
annotate service.New with {
    tds_per @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'tds',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : tds_per,
                    ValueListProperty : 'value',
                },
            ],
        PresentationVariantQualifier : 'vh_New_tds_per',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.tds with @(
    UI.PresentationVariant #vh_New_tds_per : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : value,
                Descending : false,
            },
        ],
    }
);
annotate service.New with {
    vat_per @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'gst',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : vat_per,
                    ValueListProperty : 'description',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.New with @(
    UI.Identification : [
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'CatalogService.HidePo',
            Label : 'HidePo',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'CatalogService.ShowPo',
            Label : 'ShowPo',
        },
    ]
);
annotate service.Draft with @(
    UI.Identification : [
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'CatalogService.ShowPo',
            Label : 'ShowPo',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'CatalogService.HidePo',
            Label : 'HidePo',
        },
    ]
);
annotate service.Rejected with @(
    UI.Identification : [
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'CatalogService.ShowPo',
            Label : 'ShowPo',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'CatalogService.HidePo',
            Label : 'HidePo',
        },
    ]
);
annotate service.New with {
    Gst_Perc @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'gst',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : Gst_Perc,
                    ValueListProperty : 'description',
                },
            ],
            Label : 'gst',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.item_new with {
    Material @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'material',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : Material,
                    ValueListProperty : 'mat_no',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'mat_name',
                },
            ],
            Label : 'material',
        },
        Common.ValueListWithFixedValues : false
)};
