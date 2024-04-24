namespace namee;

entity inv_assg
{
    key invoice : String(40);
    RE_INVOICE_NO : String(40);
    REF_INVOICE_NO : String(40);
    Payment_Terms : String(40);
    SUPPLIER_NAME : String(40);
    DATE : String(40);
    MODIFIED_by : String(40);
    modified_date_time : String(40);
    assign_inv_to : String(40);
    inv_file : LargeString;
    IRN : String(40);
    GSTIN : String(40);
    Document_Type : String(40);
    Invoice_Date : String(40);
    Posting_Date : String(40);
    Reference_po_number : String(40);
    Due_Date : String(40);
    Vendor_Code : String(40);
    Payment_Method : String(40);
    Currency : String(40);
    Company_Code : String(40);
    GL_Account : String(40);
    Cost_Center : String(40);
    Discount_per : String(40);
    Discount_Amount : String(40);
    TDS_per : String(40);
    Total_TDS_Amount : String(40);
    SGST_Amount : String(40);
    CGST_Amount : String(40);
    Taxable_Amount : String(40);
    Adjustment : String(40);
    Amount_Total : String(40);
    Department : String(40);
    Internal_Order : String(40);
    TCS_amount : String(40);
    file_link : LargeString;
    item_data_parent : Association to many item_data_for_invassign on item_data_parent.item_data_child = $self;
}


entity item_data_for_invassign
{
    key id : UUID;
    key invoice : String;
     Item : String;
    Item_No : String;
    Material : String;
    HSN_SAC : String;
    Qty : String;
    Unit_Price : String;
    GL_Acc : String;
    Plant : String;
    Cost_Center : String;
    Disc_Per : String;
    GST_Per : String;	
    Taxable_Amt : String;
    Tax_Amt : String;
    Total_Amt : String;	
    bool : Boolean;
    item_data_child : Association to one inv_assg on item_data_child.invoice = invoice;
}

//========================================search help for invoice assignment==============================
entity asgn_inv_to
{
    key id : String(40);
    name : String(40);
    is_group : String(40);
}

entity comments_temp
{
    key id : UUID;
    sr_no : String;
    comments_title : String;
    comments_desc : String;
}

entity track_invoices
{
    key invoice : String;
    Ref_invoice : String;
    Ref_PO_Num : String;
    Due_Date : String;
    suplier_name : String;
    invoice_date : String;
    modified_by : String;
    Status : String;
    error_log : String;
    faulty : Integer;
    Payment_Terms : String;
    IRN : String;
    GSTIN : String;
    Document_Type : String;
    Posting_Date : String;
    Vendor_Code : String;
    Payment_Method : String;
    Company_Code : String;
    Currency : String;
    Department : String;
    GL_Account : String;
    Cost_Center : String;
    Internal_Order : String;
    Taxable_Amount : String;
    Adjustment : String;
    Amount_Total : String;
    TCS_amount : String;
    TDS_per : String;
    Total_TDS_Amount : String;
    Discount_per : String;
    Discount_Amount : String;
    CGST_Amount : String;
    SGST_Amount : String;
    file_link : LargeString;
    item_data_parent : Association to many item_data_for_track on item_data_parent.item_data_child1 = $self;
}


entity item_data_for_track
{
    key id : UUID;
    key invoice : String;
    Item : String;
    Item_No : String;
    Material : String;
    HSN_Code : String;
    Qty : String;
    Unit_Price : String;
    GL_Acc : String;
    Plant : String;
    Cost_Center : String;
    Disc_Per : String;
    GST_Per : String;	
    Taxable_Amt : String;
    Tax_Amt : String;
    Total_Amt : String;	
    bool : Boolean;
    item_data_child1 : Association to one track_invoices on item_data_child1.invoice = invoice;
}

entity New
{
    key invoice_no : String;
    Ref_invoice_no : String;
    supplier_name : String default 'NA';
    Date : String;
    modified_date_time : String;
    INVOICE_FILE : String;

    irn : String;
    ref_po_num : String;
    gstin : String;
    Document_Type : String;
    Ref_invoice_no1 : String;
    invoice_date : String;
    posting_date : String;
    baseline_date : String;
    Vendor_Code : String;
    payment_terms : String;
    payment_method : String;
    company_code : String;
    currency : String;
    department_name : String;
    gl_account : String;
    cost_center : String;
    internal_order : String;
    taxable_amount : String;
    adjustment : String;
     amount : String;
    tcs : String;
    tds_per : String;
    tds_tot_amt : String;
    discount_per : String;
    total_discount_amount : String;
    vat_per : String;
    file_link : LargeString;
    value1 : Boolean default false;
    value : Integer;
     bool : Boolean;
    Gst_Perc  : String;
    IGST : Boolean;
     IGST_val : String;
    CGST : String;
    SGST : String;
    child_item : Composition of many item_new on child_item.invoice = invoice_no;
}


entity item_new
{
    key id : UUID;
    key invoice : String;
    Item : String;
    Item_No : String;
    Material : String;
    HSN_Code : String;
    Qty : String;
    Unit_Price : String;
    GL_Acc : String;
    Plant : String;
    Cost_Center : String;
    Disc_Per : String;
    GST_Per : String;	
    Taxable_Amt : String;
    Tax_Amt : String;
    Total_Amt : String;	
    item_data_child1 : Association to one New on item_data_child1.invoice_no = invoice;
}


entity Draft
{
   key invoice_no : String;
    Ref_invoice_no : String;
    supplier_name : String default 'NA';
    Date : String;
    modified_by : String;
    modified_date_time : String;
    INVOICE_FILE : String;

    irn : String;
    ref_po_num : String;
    gstin : String;
    Document_Type : String;
    Ref_invoice_no1 : String;
    invoice_date : String;
    posting_date : String;
    baseline_date : String;
    Vendor_Code : String;
    payment_terms : String;
    payment_method : String;
    company_code : String;
    currency : String;
    department_name : String;
    gl_account : String;
    cost_center : String;
    internal_order : String;
    taxable_amount : String;
    adjustment : String;
     amount : String;
    tcs : String;
    tds_per : String;
    tds_tot_amt : String;
    discount_per : String;
    total_discount_amount : String;
    vat_per : String;
    value1 : Boolean default false;
    value : Integer;
    file_link : LargeString;
    // draf : Association to many invoice_for_draft on draf.draft_data = $self;
    item_data_draft : Association to  many item2 on item_data_draft.invoice = invoice_no;
}


entity item2
{
    key id : UUID;
        key invoice : String;
        item_no : String;
    // Ref_invoice_no : String(20);
        sl_no : String;
        HSN_Code : String;
        Material : String;
         Qty : String;
    Qc : String;
    Unit_Price : String;
    GL_ACC : String;
    Cost_Center :String;
    Plant : String;
    Disc_Perc : String;
    Gst_Perc : String;
    Taxable_Amount : String;
    Tax_Amount :String;
    Total_Amount :String;
    item_draft_inv : Association to one Draft on item_draft_inv.invoice_no = invoice;
}



entity Rejected
{
   key invoice_no : String;
    Ref_invoice_no : String;
    supplier_name : String default 'NA';
    Date : String;
    modified_by : String;
    modified_date_time : String;
    INVOICE_FILE : String;

    irn : String;
    ref_po_num : String;
    gstin : String;
    Document_Type : String;
    Ref_invoice_no1 : String;
    invoice_date : String;
    posting_date : String;
    baseline_date : String;
    Vendor_Code : String;
    payment_terms : String;
    payment_method : String;
    company_code : String;
    currency : String;
    department_name : String;
    gl_account : String;
    cost_center : String;
    internal_order : String;
    taxable_amount : String;
    adjustment : String;
     amount : String;
    tcs : String;
    tds_per : String;
    tds_tot_amt : String;
    discount_per : String;
    total_discount_amount : String;
    vat_per : String;
    value1 : Boolean default false;
    value : Integer;
    file_link : LargeString;
    // draf : Association to many invoice_for_draft on draf.draft_data = $self;
    item_data_draft : Association to  many item3 on item_data_draft.invoice = invoice_no;
}


entity item3
{
    key id : UUID;
        key invoice : String;
        item_no : String;
    // Ref_invoice_no : String;
        sl_no : String;
        HSN_Code : String;
        Material : String;
         Qty : String;
    Qc : String;
    Unit_Price : String;
    GL_ACC : String;
    Cost_Center :String;
    Plant : String;
    Disc_Perc : String;
    GST_Per : String;
    Taxable_Amount : String;
    Tax_Amount :String;
    Total_Amount :String;
    item_draft_inv : Association to one Rejected on item_draft_inv.invoice_no = invoice;
}


entity inapproval
{
        key invoice : String;
        Ref_invoice : String;
        suplier_name : String;
        Date : String;
        modified_by : String;
        Mod_date_time : String;
        INVOICE_FILE : String;
   
        irn : String;
        Reference_po_num : String;
        gstin : String;
        Document_type : String;
        Ref_invoice_no : String;
        invoice_date : String;
        posting_date : String;
        Baseline_date : String;
        Vendor : String;
        Payment_Terms : String;
        Payment_Method : String;
        company_code : String;
        Currency :String;
        Department : String;
        GL_account : String;
        cost_center : String;
        internal_order : String;
        taxable_amount : String;
        Adjustment : String;
        Amount : String;
        tcs_amount : String;
        tds_percent : String;
        tds_tot_amt : String;
        Discount_percent : String;
        tax_perc : String;
        total_discount_amount : String;
        cgst_tot_amt : String;
        sgst_tot_amt : String;
        igst_tot_amt : String;
        file_link : LargeString;
    ass : Association to many Approver_tab on ass.app = $self;
    // ass1 : Association to many invoice_data_inapproval on ass1.invoice = invoice;
    item_for_inapp : Composition of many item4 on item_for_inapp.item_inapp_inv = $self;

}

entity Approver_tab
{
    key id:UUID;
    invoice : String;
    Approver : String;
   app : Association to one inapproval on app.invoice = invoice;   
}


entity item4
{
    key id : UUID;
        key invoice : String;
        item_no : String;
    // Ref_invoice_no : String(20);
        sl_no : String;
        HSN_Code : String;
        Material : String;
         Qty : String;
    Qc : String;
    Unit_Price : String;
    GL_ACC : String;
    Cost_Center :String;
    Plant : String;
    Disc_Perc : String;
    GST_Per : String;
    Taxable_Amount : String;
    Tax_Amount :String;
    Total_Amount :String;
    item_inapp_inv : Association to one inapproval on item_inapp_inv.invoice = invoice;
}


entity Submitted_to_ERP {
    key invoice : String;
     Ref_invoice : String;
    Erp_invoiceno : String;
    suplier_name : String;
    Date : String;
    Modified_by : String;
    Mod_date_time : String;
    INVOICE_FILE : String;

     IRN : String;
    Reference_po_num : String;
    gstin : String;
    Document_type : String;
    Ref_invoice_no : String;
    invoice_date : String;
    posting_date : String;
    Baseline_date : String;
    Vendor : String;
    Payment_Terms : String;
    Payment_Method : String;
    company_code : String;
    Currency :String;
    Department : String;
    GL_account : String;
    cost_center : String;
    internal_order : String;
    taxable_amount : String;
    Adjustment : String;
    Amount : String;
    tcs_amount : String;
    tds_percent : String;
    Discount_percent : String;
    Gst_percent : String;
    file_link : LargeString;
    // inv_data : Composition of many invoice_data_sub_erp on inv_data.inapp_data_for_erp = $self;
    ass_erp1 : Association to many erp_app_tab on ass_erp1.app1 = $self;
    item_data_erp : Composition of many item5 on item_data_erp.item_inapp_inv = $self;
}

entity erp_app_tab
{
    key id:UUID;
    invoice : String;
    Approver : String;
   app1 : Association to one Submitted_to_ERP on app1.invoice = invoice;   
}


entity item5
{
    key id : UUID;
        key invoice : String;
        item_no : String;
    // Ref_invoice_no : String(20);
        sl_no : String;
        HSN_Code : String;
        Material : String;
         Qty : String;
    Qc : String;
    Unit_Price : String;
    GL_ACC : String;
    Cost_Center :String;
    Plant : String;
    Disc_Perc : String;
    GST_Per : String;
    Taxable_Amount : String;
    Tax_Amount :String;
    Total_Amount :String;
    item_inapp_inv : Association to one Submitted_to_ERP on item_inapp_inv.invoice = invoice;
}

//===============================================SEARCH HELPS===============================================
entity vendor_search_help {
    vendor_id : String;
    name : String;

}

entity Pay_ter {
    value : String;
}

entity Payment_Meth 
{
    table_key : String;
}


entity Document_Type {
    type : String;
}

entity company_code
{
   key code : String; 
    description : String;
}

entity currency
{
    key code : String;
    description : String;
}

entity department 
{
    name : String;
}

entity gl_acc 
{
    key code : String;
    description : String;
}

entity cost_center {
    key code : String;
    description : String;
}

entity internal_ord {
    key code : String;
}

entity tds {
    value : String;
}

entity gst
{
    description : String;
}



entity supplier_enq
{
    key Enquiry_no : String;
    Supplier_name : String;
    Description : String;
    Enq_desc : String;
    Recieved_date : String;
    Supplier_Enquiry : String;
    Comments_template : String;
    Edit_comment : String;
    Status : String;
    last_responded : String;
    faulty : Integer;
    attach : Association to many attachments on attach.Enquiry_no = Enquiry_no;
    enq_parent : Association to many history on enq_parent.enq_child = $self;
}

entity attachments : cuid, managed{
    key Enquiry_no :String default '41';
    @Core.MediaType: mediaType
    content: LargeBinary;
    @Core.IsMediaType: true
    mediaType: String;
    fileName: String;
    size: Integer;
    url: String;
    parent : Association to supplier_enq;
}


entity history
{
    key id : UUID;
    img : String @UI.IsImageURL;
   Enquiry_no : String;
    Comments : String;
    enq_child : Association to one supplier_enq on enq_child.Enquiry_no = Enquiry_no;
}

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Files: cuid, managed{
    @Core.MediaType: mediaType
    content: LargeBinary;
    @Core.IsMediaType: true
    mediaType: String;
    fileName: String;
    size: Integer;
    url: String;
}

entity material 
{
    key mat_no : String;
    mat_name : String;
}


entity my_inbox
{
    key invoice_no : String;
    ref_inv_no : String;
    supplier_name : String;
    Date : String;
    Modified_by : String;
    modified_date_time : String;
    invoice_file : String;
    Action : String;
}




