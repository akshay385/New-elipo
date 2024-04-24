const cds = require('@sap/cds');
const { update } = require('@sap/cds/libx/_runtime/hana/execute');
const { parse } = require('path');

module.exports = cds.service.impl(async function () {
    /* SERVICE ENTITIES */
    let {
        inv_assg,
        item_data_for_invassign,
        asgn_inv_to,
        comments_temp,
        track_invoices,
        item_data_for_track,
        New,
        item_new,
        Draft,
        item2,
        item3,
        Rejected,
        inapproval,
        Approver_tab,
        item4,
        Submitted_to_ERP,
        erp_app_tab,
        item5,
        vendor_search_help,
        gst,
        tds,
        internal_ord,
        cost_center,
        gl_acc,
        department,
        currency,
        company_code,
        Payment_Meth,
        Pay_ter,
        Document_Type,
        supplier_enq,
        history,
        material,
    } = this.entities;
    const c4re = await cds.connect.to('iflow');



    //===================================================================invoice assign====================================================
    firstReadInvoice1 = true;
    this.before('READ', inv_assg, async (req) => {
        firstReadInvoice1 = true;
        try {
            //debugger
            var er = false;
            const data = await SELECT.from(inv_assg);
            invoiceNo1 = data[0].invoice;
            if (req.params[0].invoice != null) {
                cds.tx(req).run(DELETE(inv_assg));
                var er = true;
                const invoice_no = req.params[0].invoice;
                const link = `/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com`;
                const resp1 = await c4re.get(link);
                const entries1 = [];

                entries1.push({
                    invoice: `${resp1.body.invoice_no}`,
                    inv_file: 'Open',
                    Payment_Terms: `${resp1.body.payment_terms}`,
                    IRN: `${resp1.body.irn}`,
                    Reference_po_number: `${resp1.body.ref_po_num}`,
                    GSTIN: `${resp1.body.gstin}`,
                    Document_Type: `${resp1.body.doc_type_desc || 'NA'}`,
                    REF_INVOICE_NO: `${resp1.body.user_invoice_id}`,
                    Invoice_Date: `${resp1.body.invoice_date}`,
                    Posting_Date: `${resp1.body.posting_date}`,
                    Due_Date: `${resp1.body.baseline_date}`,
                    Vendor_Code: `${resp1.body.supplier_id}`,
                    Payment_Method: `${resp1.body.payment_method}`,
                    Company_Code: `${resp1.body.company_code}`,
                    Currency: `${resp1.body.currency}`,
                    Department: `${resp1.body.department_name || 'NA'}`,
                    GL_Account: `${resp1.body.gl_account}`,
                    Cost_Center: `${resp1.body.cost_center}`,
                    Internal_Order: `${resp1.body.internal_order}`,
                    Taxable_Amount: `${resp1.body.taxable_amount || 'NA'}`,
                    Adjustment: `${resp1.body.adjustment}`,
                    Amount_Total: `${resp1.body.amount || 'NA'}`,
                    TCS_amount: `${resp1.body.tcs || 'NA'}`,
                    TDS_per: `${resp1.body.tds_per || 'NA'}`,
                    Total_TDS_Amount: `${resp1.body.tds_tot_amt || 'NA'}`,
                    Discount_per: `${resp1.body.discount_per || 'NA'}`,
                    Discount_Amount: `${resp1.body.discount_amount || 'NA'}`,
                    CGST_Amount: `${resp1.body.cgst_amount || 'NA'}`,
                    SGST_Amount: `${resp1.body.sgst_amount || 'NA'}`,

                    file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,
                });
                await cds.tx(req).run(INSERT.into(inv_assg).entries(entries1));

            }
            var er = false;
            return req;
        } catch (err) {
            if (er) {
                req.error(500, err.message);
            }
            try {
                var er = false;
                const data = await SELECT.from(inv_assg);
                invoiceNo1 = data[0].invoice;
                if (req.query.SELECT.where[2].val != null) {
                    // debugger
                    cds.tx(req).run(DELETE(inv_assg));
                    var er = true;
                    // cds.tx(req).run(DELETE(podatatab));
                    const invoice_no = req.query.SELECT.where[2].val;
                    const link = `/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com`;

                    const resp1 = await c4re.get(link);
                    const entries1 = [];

                    entries1.push({
                        invoice: `${resp1.body.invoice_no}`,
                        inv_file: 'Open',
                        Payment_Terms: `${resp1.body.payment_terms}`,
                        IRN: `${resp1.body.irn}`,
                        Reference_po_number: `${resp1.body.ref_po_num}`,
                        GSTIN: `${resp1.body.gstin}`,
                        Document_Type: `${resp1.body.doc_type_desc || 'NA'}`,
                        REF_INVOICE_NO: `${resp1.body.user_invoice_id}`,
                        Invoice_Date: `${resp1.body.invoice_date}`,
                        Posting_Date: `${resp1.body.posting_date}`,
                        Due_Date: `${resp1.body.baseline_date}`,
                        Vendor_Code: `${resp1.body.supplier_id}`,
                        Payment_Method: `${resp1.body.payment_method}`,
                        Company_Code: `${resp1.body.company_code}`,
                        Currency: `${resp1.body.currency}`,
                        Department: `${resp1.body.department_name || 'NA'}`,
                        GL_Account: `${resp1.body.gl_account}`,
                        Cost_Center: `${resp1.body.cost_center}`,
                        Internal_Order: `${resp1.body.internal_order}`,
                        Taxable_Amount: `${resp1.body.taxable_amount || 'NA'}`,
                        Adjustment: `${resp1.body.adjustment}`,
                        Amount_Total: `${resp1.body.amount || 'NA'}`,
                        TCS_amount: `${resp1.body.tcs || 'NA'}`,
                        TDS_per: `${resp1.body.tds_per || 'NA'}`,
                        Total_TDS_Amount: `${resp1.body.tds_tot_amt || 'NA'}`,
                        Discount_per: `${resp1.body.discount_per || 'NA'}`,
                        Discount_Amount: `${resp1.body.discount_amount || 'NA'}`,
                        CGST_Amount: `${resp1.body.cgst_amount || 'NA'}`,
                        SGST_Amount: `${resp1.body.sgst_amount || 'NA'}`,
                        file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,

                    });
                    await cds.tx(req).run(INSERT.into(inv_assg).entries(entries1));

                }
                var er = false;
                return req;
            } catch (err) {
                if (er) {
                    req.error(500, err.message);
                }

                try {
                    if (firstReadInvoice1) {
                        cds.tx(req).run(DELETE(inv_assg));

                        const resp = await c4re.post('/dev/fetch-invoice?userid=einvoiceportal@gmail.com&tabname=new&pageno=3&nooflines=50');
                        const spaces = resp.body.invoices;
                        const entries = [];
                        spaces.forEach(space => {
                            entries.push({
                                inv_file: `${space.invoice_files.length || 'NA'}`,
                                invoice: `${space.invoice_no}`,
                                RE_INVOICE_NO: `${space.user_invoice_id}`,
                                SUPPLIER_NAME: `${space.supplier_name || 'NA'}`,
                                DATE: `${space.invoice_date}`,
                                MODIFIED_by: `${space.working_person}`,
                                modified_date_time: `${space.modified_date}`,                                
                            });
                        });


                        await cds.tx(req).run(INSERT.into(inv_assg).entries(entries));
                    }
                    return req;

                } catch (err) {
                    req.error(500, err.message);
                }

            }

        }
    });

    //===============================================ITEM DATA FOR INVOICE ASSIGNMENT (LAST TAB) =====================================
    this.before('READ', item_data_for_invassign, async (req) => {
        try {
            var invoice_no = req.params[0].invoice;
            console.log(invoice_no);
            if (true) {
                const entries = [];
                const resp = await c4re.get(`/dev/fetch-invoice?invoice_no=${invoice_no}&&userid=einvoiceportal@gmail.com`);
                cds.tx(req).run(DELETE(item_data_for_invassign));
                const spaces = resp.body.items;
                const inv_no = resp.body.invoice_no;
                console.log("Before sorting:", spaces);
                spaces.sort((a, b) => a.item_no - b.item_no);
                console.log("after sorting:", spaces);
                let item_cnt = 1;
                spaces.forEach(space => {
                    const qty_unit = `${space.quantity} ${space.unit}`;
                    // const gstLabel = `CGST: ${space.gst_per/2}% 
                    // SGST: ${space.gst_per/2}%`;
                    const amt = `CGST Amt: ${space.cgst_amount}% 
            SGST Amt: ${space.sgst_amount}%`;
                    const materialAndDescription = `${space.material} (${space.material_desc})`;
                    let gstLabel, am;
                    if (resp.body.is_igst === "y") {
                        gstLabel = `IGST: ${space.gst_per}%`;
                    } else {
                        gstLabel = `CGST: ${space.gst_per / 2}% SGST: ${space.gst_per / 2}%`;
                    }
                    entries.push({
                        invoice: `${inv_no}`,
                        Item: `${item_cnt}`,
                        Item_No: 'NA',
                        Material: `${materialAndDescription}`,
                        HSN_SAC: `${space.hsn_code || 'NA'}`,
                        Qty: `${qty_unit}`,
                        Unit_Price: `${space.amt_per_unit}`,
                        GL_Acc: `${space.gl_account}`,
                        Plant: `${space.plant}`,
                        Cost_Center: `${space.cost_center}`,
                        Disc_Per: `${space.discount} Disc.Amt : ${space.discount_amount}`,
                        GST_Per: `${space.gst_per}% ${gstLabel}`,
                        Taxable_Amt: `${space.taxable_amount}`,
                        Tax_Amt: `${space.amount} CGST Amt : ${space.cgst_amount} SGST Amt : ${space.sgst_amount}`,
                        Total_Amt: `${space.gross_amount}`,

                    });
                    item_cnt++;
                });
                await cds.tx(req).run(INSERT.into(item_data_for_invassign).entries(entries));
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }

    });




    //=======================================Search help for assign inv to==============================================

    var asgn_inv = true;
    this.before('READ', asgn_inv_to, async (req) => {
        try {
            if (asgn_inv) {
                const entries = [];
                const resp = await c4re.get('/dev/assignment-approver?assign_details=X');
                cds.tx(req).run(DELETE(asgn_inv_to));
                const space1 = resp.body;
                space1.forEach(space => {
                    entries.push({
                        id: `${space.id}`,
                        name: `${space.name}`,
                        is_group: `${space.is_group}`,                        

                    });
                });
                await cds.tx(req).run(INSERT.into(asgn_inv_to).entries(entries));
                asgn_inv = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }

    });

    //===========================update invoice assignment===========================================
    this.on('UPDATE', inv_assg, async (req) => {
        try {
            const selectedName = req.data.assign_inv_to;

            // const assignmentData = fetchAssignmentData(selectedName);
            const data = await cds.tx(req).run(SELECT.from(asgn_inv_to).where({ name: selectedName }).columns(['id', 'name', 'is_group']));

            const payload = {

                name: data[0].name,
                id: data[0].id,
                is_group: data[0].is_group,
                invoice: req.data.invoice,
            };

            const externalServiceURL = '/dev/invoice-assignment?userid=einvoiceportal@gmail.com';

            const response = await c4re.post(externalServiceURL, payload);


            return "Assignment completed successfully";
        } catch (err) {
            req.error(500, err.message);
        }
    });



    this.on('getPdfUrl', async (req) => {
        const fileLinkValue = await SELECT`file_link`.from(inv_assg);
        return fileLinkValue;
    });



var com = true;
this.before('READ', comments_temp, async (req) => {
    try {
        if (com) {
            const entries = [];        
            const resp = await c4re.get('/dev/comment-templates');
            cds.tx(req).run(DELETE(comments_temp));
            const space1 = resp.body;
            space1.forEach(space => {
                entries.push({
                    sr_no: `${space.sr_no}`,
                    comments_title: `${space.comment_title}`,
                    comments_desc: `${space.comment_description}`,

                });
            });
            await cds.tx(req).run(INSERT.into(comments_temp).entries(entries));
            com = false;
        }
        return req;
    } catch (err) {
        req.error(500, err.message);
    }

});


this.on('POST', comments_temp, async (req) => {
    try {
        const payload = {
            comment_description : `${req.data.comments_desc}`,
            comment_title : `${req.data.comments_title}`,
        };

        const externalServiceURL = `/dev/comment-templates`;

        const response = await c4re.post(externalServiceURL, payload);
        const createdEntity = await INSERT.into(comments_temp).entries(req.data);
        // Assuming response is the external service's response, you can return it to the client
        return req.data;
    } catch (err) {
        // If there's an error, return an error response
        req.error(500, err.message);
    }

});

this.on('DELETE', comments_temp, async (req) => {
        try {
            var id1 = req.data.id
            const data = await cds.tx(req).run(SELECT.from(comments_temp).where({ id : id1 }).columns(['sr_no', 'comments_title', 'comments_desc']));
            console.log("Executed");
            const no = data[0].sr_no;
            const externalServiceURL = `/dev/comment-templates?sr_no=${no}`;
    
            const response = await c4re.delete(externalServiceURL);
            const createdEntity = await DELETE.from(comments_temp).where({id : req.data.id});
            return req.data;
        } catch (err) {
            
            req.error(500, err.message);
        }
});


this.on('UPDATE', comments_temp, async (req) => {
    try {
        var id1 = req.data.sr_no;
        const payload = {
            comment_description : `${req.data.comments_desc}`,
            comment_title : `${req.data.comments_title}`,
        };


        const externalServiceURL = `/dev/comment-templates?sr_no=${id1}`;

        const response = await c4re.post(externalServiceURL, payload);
        const updatedEntity = await UPDATE(comments_temp).set(req.data).where({ sr_no: req.data.sr_no });
            return req.data;
    } catch (err) {
        req.error(500, err.message);
    }

});




//===================================track_invoices service===================================

this.before('READ', track_invoices, async (req) => {
    try {
        var er = false;
        const data = await SELECT.from(track_invoices);
        invoiceNo1 = data[0].invoice;   
            if (req.params[0].invoice != null)  {
              
                cds.tx(req).run(DELETE(track_invoices));
                var er = true;
                
                const invoice_no = req.params[0].invoice;
                const link = `/dev/track-invoice?userid=einvoiceportal@gmail.com&invoice_no=${invoice_no}`;
                const resp1 = await c4re.post(link);
                const spaces1 = resp1.body;
                let totalTaxableAmount = 0;
                spaces1.items.forEach(space => {
                
                    const tot = space.quantity * space.amt_per_unit;
                    const TA = (tot * space.gst_per) / 100;
                    
                    totalTaxableAmount += tot;
                });
           
                var csgst = totalTaxableAmount * 0.09;
                
                const entries1 = [];
                entries1.push({
                    invoice: `${resp1.body.invoice_no}`,
                    Payment_Terms: `${resp1.body.payment_terms}`,
                    IRN: `${resp1.body.irn}`,
                    Ref_PO_Num: `${resp1.body.ref_po_num}`,
                    Due_Date: `${resp1.body.baseline_date}`,
                    GSTIN: `${resp1.body.gstin}`,
                    Document_Type: `${resp1.body.doc_type_desc}`,
                    Posting_Date: `${resp1.body.posting_date}`,
                    Vendor_Code: `${resp1.body.supplier_id}`,
                    Payment_Terms: `${resp1.body.payment_terms}`,
                    Payment_Method: `${resp1.body.payment_method}`,
                    Company_Code: `${resp1.body.company_code}`,
                    Currency: `${resp1.body.currency}`,
                    Department: `${resp1.body.department_name}`,
                    GL_Account: `${resp1.body.gl_account}`,
                    Cost_Center: `${resp1.body.cost_center}`,
                    Internal_Order: `${resp1.body.internal_order}`,
                    Taxable_Amount: `${totalTaxableAmount}`,
                    Adjustment: `${resp1.body.adjustment}`,
                    Amount_Total: `${resp1.body.amount}`,
                    TCS_amount: `${resp1.body.tcs}`,
                    TDS_per: `${resp1.body.tds_per}`,
                    Total_TDS_Amount: `${resp1.body.tds_tot_amt}`,
                    Discount_per: `${resp1.body.discount_per}`,
                    Discount_Amount: `${resp1.body.total_discount_amount}`,
                    CGST_Amount: `${csgst}`,
                    SGST_Amount: `${csgst}`,
                        file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,
                    });
                // });
               
                
                await cds.tx(req).run(INSERT.into(track_invoices).entries(entries1));    
            
            }
           
            
        // }
        var er = false;
        return req;
    } catch (err) {
        if (er) {
           req.error(500, err.message);
        }
        try {
          
            var er = false;
            const data = await SELECT.from(track_invoices);
            invoiceNo1 = data[0].invoice;   
                if (req.query.SELECT.where[2].val != null)  {
                    // debugger
                    cds.tx(req).run(DELETE(track_invoices));
                    var er = true;
                    // cds.tx(req).run(DELETE(podatatab));
                    const invoice_no = req.query.SELECT.where[2].val;
                    const link = `/dev/track-invoice?userid=einvoiceportal@gmail.com&invoice_no=${invoice_no}`;
                    const resp1 = await c4re.post(link);
                    const spaces1 = resp1.body;
                    const entries1 = [];
                    entries1.push({
                        invoice: `${resp1.body.invoice_no}`,
                        Payment_Terms: `${resp1.body.payment_terms}`,
                        IRN: `${resp1.body.irn}`,
                        Ref_PO_Num: `${resp1.body.ref_po_num}`,
                        GSTIN: `${resp1.body.gstin}`,
                        Document_Type: `${resp1.body.document_type}`,
                        Posting_Date: `${resp1.body.posting_date}`,
                        Vendor_Code: `${resp1.body.supplier_id}`,
                        Payment_Method: `${resp1.body.payment_method}`,
                        Company_Code: `${resp1.body.company_code}`,
                        Currency: `${resp1.body.currency}`,
                        Department: `${resp1.body.department_name}`,
                        GL_Account: `${resp1.body.gl_account}`,
                        Cost_Center: `${resp1.body.cost_center}`,
                        Internal_Order: `${resp1.body.internal_order}`,
                        Taxable_Amount: `${resp1.body.taxable_amount}`,
                        Adjustment: `${resp1.body.adjustment}`,
                        Amount_Total: `${resp1.body.amount}`,
                        TCS_amount: `${resp1.body.tcs}`,
                        TDS_per: `${resp1.body.tds_per}`,
                        Total_TDS_Amount: `${resp1.body.tds_tot_amt}`,
                        Discount_per: `${resp1.body.discount_per}`,
                        Discount_Amount: `${resp1.body.total_discount_amount}`,
                        CGST_Amount: `${resp1.body.cgst_tot_amt}`,
                        SGST_Amount: `${resp1.body.sgst_tot_amt}`,                    
                        file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,

                        });
                    // await cds.tx(req).run(INSERT.into(Newtab).entries(entries1));
                    await cds.tx(req).run(INSERT.into(track_invoices).entries(entries1));    
                
                }
                // debugger
                
            // }
            var er = false;
            return req;
        } catch (err) {
            if (er) {
               req.error(500, err.message);
            }

        try
        {
        if (firstReadInvoice1) {
            cds.tx(req).run(DELETE(track_invoices));
            const body = {
                condn : []
        }
            const resp = await c4re.post('/dev/track-invoice?userid=einvoiceportal@gmail.com&pageno=1&nooflines=50',body);
            const spaces = resp.body.invoices;
            const entries = [];
            spaces.forEach(space=>{
                const errorLogValue = space.error_log && space.error_log.length > 0 ? 1 : 0;
                    let critical_track
                    let val
                    if(space.in_status == 'tosap')
                    {
                        val = 'Posted'
                        critical_track = 3;
                        
                    }
                    if(space.in_status == 'new')
                    {

                        val = 'new'
                        critical_track = 4;
                    }
                    if(space.in_status == 'inapproval')
                    {
                        val = 'inapproval'
                        critical_track = '1';
                    }
                    if(space.in_status == 'draft')
                    {
                        val = 'draft'
                        critical_track = 2;
                    }
                entries.push({
                    invoice: `${space.invoice_no}`,
                    Ref_invoice: `${space.user_invoice_id || 'NA'}`,
                    suplier_name: `${space.supplier_name || 'NA'}`,
                    invoice_date: `${space.invoice_date}`,
                    modified_by: `${space.working_person}`,
                    Status : `${val}`,
                    error_log : `${errorLogValue}`,
                    faulty : `${critical_track}`,
                                
                });
            });

            
            await cds.tx(req).run(INSERT.into(track_invoices).entries(entries));
        }
        return req;
        
    }catch(err){
     req.error(500, err.message);
    }

    }

    }
});


//===============================================ITEM DATA FOR track (LAST TAB) =====================================
this.before('READ', item_data_for_track, async (req) => {
    try {
        var invoice_no = req.params[0].invoice;
        console.log(invoice_no);
        if (true) {
            const entries = [];
            const resp = await c4re.post(`/dev/track-invoice?userid=einvoiceportal@gmail.com&invoice_no=${invoice_no}`);
            cds.tx(req).run(DELETE(item_data_for_track));
            const spaces = resp.body.items;
            const inv_no = resp.body.invoice_no;
            // console.log("Before sorting:", spaces);
            // spaces.sort((a, b) => a.item_no - b.item_no);
            // console.log("after sorting:", spaces);
            let item_cnt = 1;
            spaces.forEach(space => {
                const qty_unit = `${space.quantity} ${space.unit}`;
                const tot = `${space.quantity * space.amt_per_unit}`
                // const gstLabel = `CGST: ${space.gst_per/2}% 
                // SGST: ${space.gst_per/2}%`;
                const amt = `CGST Amt: ${space.cgst_amount}% 
        SGST Amt: ${space.sgst_amount}%`;
                const materialAndDescription = `${space.material} (${space.material_desc})`;
                let gstLabel, am;
                if (resp.body.is_igst === "y") {
                    gstLabel = `IGST: ${space.gst_per}%`;
                } else {
                    gstLabel = `CGST: ${space.gst_per / 2}% SGST: ${space.gst_per / 2}%`;
                }
                var TA = `${(tot * space.gst_per)/100}`;
                var tot_amt = Number(tot) + Number(TA);
                entries.push({
                    invoice: `${inv_no}`,
                    Item: `${item_cnt}`,
                    Item_No: 'NA',
                    Material: `${materialAndDescription}`,
                    HSN_Code : `${space.hsn_code || 'NA'}`,
                    Qty: `${qty_unit}`,
                    Unit_Price: `${space.amt_per_unit}`,
                    GL_Acc: `${space.gl_account}`,
                    Plant: `${space.plant}`,
                    Cost_Center: `${space.cost_center}`,
                    Disc_Per: `${space.discount} Disc.Amt : ${space.discount_amount}`,
                    GST_Per: `${space.gst_per}% ${gstLabel}`,
                    Taxable_Amt: `${tot}`,
                    Tax_Amt : `${TA} CGST AMT : ${TA/2} SGST AMT : ${TA/2}`,
                    Total_Amt: `${tot_amt}`,

                });
                item_cnt++;
            });
            await cds.tx(req).run(INSERT.into(item_data_for_track).entries(entries));
        }
        return req;
    } catch (err) {
        req.error(500, err.message);
    }

});


this.on('getPdfUrl1', async (req) => {
    const fileLinkValue = await SELECT`file_link`.from(track_invoices);
    return fileLinkValue;
});


// ==============================new view in invoice cockpit=======================
var firstReadInvoice1 = true;
this.before('READ', New, async (req) => {
    try {
        if (firstReadInvoice1) {
            const entries = [];
            const entries1 = [];
            page_no = 3;
            const resp = await c4re.post(`/dev/fetch-invoice?userid=einvoiceportal@gmail.com&tabname=new&pageno=${page_no}&nooflines=4`);
          
            const spaces = resp.body.invoices;

            // if (spaces.length == 0) {
            //     break;
            // }

            // Loop through the initial data and retrieve additional data for each invoice
            for (let i = 0; i < spaces.length; i++) {
                const space = spaces[i];
                const invoice_no = space.invoice_no;

                // Fetch additional data for the current invoice
                // const resp1 = await c4re.post(`/dev/fetch-invoice-sup?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com`);
                const resp1 = await c4re.get(`/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com&edit=X`);
                space_item = resp1.body.items;
                let result1 = 0, result01 = 0;
                for (let i = 0; i < space_item.length; i++) {
                    const item = space_item[i];
                    const qtyUnitPrice = parseFloat(item.quantity) * parseFloat(item.amt_per_unit);
                    const gstValue = qtyUnitPrice * (18 / 100);
                    const result = qtyUnitPrice - (gstValue).toFixed(2);
                    console.log();
                    result1 += result;
                    result01 = result1.toFixed(2);
                    console.log(`Result for item ${i + 1}: ${result}`);
                  }
               
                
                //  if(resp1.body.length == 0){
                //    continue;
                //  }
                // Push the data for Invoice2
                entries.push({
                        invoice_no: `${space.invoice_no}`,
                        Ref_invoice_no : `${space.user_invoice_id}`,
                        supplier_name: `${space.supplier_name || 'NA'}`,
                        Date : `${space.invoice_date}`,
                        modified_date_time : `${space.modified_date}`,
                        INVOICE_FILE: `${space.invoice_files.length || 'NA'}`,
                        
                        
                        irn: `${resp1.body.irn}`,
                        ref_po_num: `${resp1.body.ref_po_num}`,
                        gstin: `${resp1.body.gstin}`,
                        Document_Type : `${resp1.body.doc_type_desc}`,
                        Ref_invoice_no1 : `${resp1.user_invoice_id}`,
                        invoice_date: `${space.invoice_date}`,
                        posting_date: `${resp1.body.posting_date}`,
                        baseline_date: `${resp1.body.baseline_date}`,
                        Vendor_Code : `${resp1.supplier_id}`,
                        payment_terms: `${resp1.body.payment_terms}`,
                        payment_method: `${resp1.body.payment_method}`,
                        company_code: `${resp1.body.company_code}`,
                        currency: `${resp1.body.currency}`,
                        department_name: `${resp1.body.department_name}`,
                        gl_account: `${resp1.body.gl_account}`,
                        cost_center: `${resp1.body.cost_center}`,
                        modified_date_time : `${space.modified_date}`,
                        internal_order: `${resp1.body.internal_order}`,
                        taxable_amount: `${resp1.body.taxable_amount}`,
                        adjustment: `${resp1.body.adjustment}`,
                        amount: `${result01}`,
                        tcs: `${resp1.body.tcs}`,
                        tds_per: `${resp1.body.tds_per}`,
                        tds_tot_amt: `${resp1.body.tds_tot_amt}`,
                        discount_per: `${resp1.body.discount_per || 'NA'}`,
                        total_discount_amount: `${resp1.body.total_discount_amount}`, 
                        IGST_val : '1',
                        CGST : '2',
                        SGST : '3',
                    // cgst_tot_amt: `${resp1.body.cgst_tot_amt}`,
                    // sgst_tot_amt: `${resp1.body.sgst_tot_amt}`,
                    // igst_tot_amt: `${resp1.body.igst_tot_amt}`,
                        file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,
                    // buttonbool: `${false}`,
                    // bool: (() => {
                    //     if (resp1.body.igst_tot_amt == 0) {
                    //         return 0; // for cgsst
                    //     } else {
                    //         return 1; // for igst
                    //     }
                    // })(),
                    // totaltaxamount: `${(() => {
                    //     if (resp1.body.is_igst == "n") {
                    //         return `CGST: ${resp1.body.cgst_tot_amt}, SGST: ${resp1.body.sgst_tot_amt}`;
                    //     } else {
                    //         return `IGST: ${resp1.body.igst_tot_amt}`;
                    //     }
                    // })()}`,
                    // value1: (() => {
                    //     if (resp1.body.npo == "y") {
                    //         return 7;
                    //     } else {
                    //         return 3;
                    //     }
                    // })(),
                    // is_igst: `${resp1.body.is_igst}`,
                    // npo: `${resp1.body.npo}`,
                    // sup_status: `${resp1.body.sup_status}`

                });
                var spaces1 = resp1.body.items;

            //     if (!resp1.body || (typeof resp1.body === 'string' && resp1.body.includes("'NoneType' object is not subscriptable")) || (!resp1.body || (typeof resp1.body !== 'string' || !resp1.body.includes('Internal Server Error')))) {
            //         console.log(`no items in ${invoice_no}`);

            //     }
            //         else if (
            //        Object.keys(resp1.body).length === 0 && 
            //         resp1.statuscode === 200
            //         )
            //         {
            //             console.log(`no items in ${invoice_no}`);
            //         }
            //         else{

                        
            //          console.log  (`wrong ${invoice_no}`) ;
            //     spaces1.forEach(space => {
                  
            //         entries1.push({

            //             parentrejected2_invoice_no:invoice_no,
            //              invoice_no: invoice_no,
            //             // invoice_no: 12,
            //             // id : 2222,
            //             material: space.material,
            //            material_desc: space.material_desc,
            //            hsn_code: space.hsn_code,
            //            item_no : space.item_no,
            //            quantity: space.quantity,
            //            amt_per_unit: space.amt_per_unit,
            //            discount: space.discount,
            //               gst_per:  space.gst_per,
            //               sgst_per: `SGST:${space.sgst_per}`,
            //               cgst_per: `CGST:${space.cgst_per}`,
            //               igst_per: `IGST:${space.igst_per}`,
            //             taxable_amount: space.taxable_amount,
            //             tax_value_amount:  ((space.taxable_amount*(space.gst_per/100))+(space.taxable_amount)),
            //             sgst_amount: `SGST:${space.sgst_amount}`,
            //             cgst_amount: `CGST:${space.cgst_amount}`,
            //             igst_amount: `IGST:${space.igst_amount}`,
            //             amount: space.amount,
            //             bigst_per : space.sgst_amount == 0 ? true : false ,
            //         });     
            //   });
            // }
            if (
                resp1.body &&
                resp1.statuscode === 200 &&
                resp1.body.invoice_no &&
                resp1.body.invoice_date )
                // Add more conditions for other expected fields 
                 {
                // The response format matches the expected format, proceed to process it
                // ...
                let item_cnt = 1;
                spaces1.forEach(space => {
                    const qty_unit = `${space.quantity} ${space.unit}`;
                const tot = `${space.quantity * space.amt_per_unit}`
                // const gstLabel = `CGST: ${space.gst_per/2}% 
                // SGST: ${space.gst_per/2}%`;
                const amt = `CGST Amt: ${space.cgst_amount}% 
        SGST Amt: ${space.sgst_amount}%`;
                const materialAndDescription = `${space.material} (${space.material_desc})`;
                let gstLabel, am;
                if (resp.body.is_igst === "y") {
                    gstLabel = `IGST: ${space.gst_per}%`;
                } else {
                    gstLabel = `CGST: ${space.gst_per / 2}% SGST: ${space.gst_per / 2}%`;
                }
                var TA = `${(tot * space.gst_per)/100}`;
                var tot_amt = Number(tot) + Number(TA);
                    entries1.push({
                    invoice: `${invoice_no}`,
                    Item: `${item_cnt}`,
                    Item_No: 'NA',
                    Material: `${materialAndDescription}`,
                    HSN_Code : `${space.hsn_code || 'NA'}`,
                    Qty: `${qty_unit}`,
                    Unit_Price: `${space.amt_per_unit}`,
                    GL_Acc: `${space.gl_account}`,
                    Plant: `${space.plant}`,
                    Cost_Center: `${space.cost_center}`,
                    Disc_Per: `NA 0`,
                    GST_Per: `${space.gst_per}% ${gstLabel}`,
                    Taxable_Amt: `${tot}`,
                    Tax_Amt : `${TA} CGST AMT : ${TA/2} SGST AMT : ${TA/2}`,
                    Total_Amt: `${tot_amt}`,
                    });
                    item_cnt++;
                });
            } else {
                console.log(`Response format is not as expected for invoice ${invoice_no}. Rejecting it.`);
            }

            
            


             }
        //     page_no++;
        // }

            // Perform database operations
            await cds.tx(req).run(DELETE(New));
             await cds.tx(req).run(DELETE(item_new));
            await cds.tx(req).run(INSERT.into(New).entries(entries));
         await cds.tx(req).run(INSERT.into(item_new).entries(entries1));

            firstReadInvoice1 = false;
        }

        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});


this.on('getPdfUrl_new', async (req) => {
    const fileLinkValue = await SELECT `file_link`.from(New);
    return fileLinkValue;
  });





// ==============================draft view in invoice cockpit=======================
var firstReadInvoice1 = true;
this.before('READ', Draft, async (req) => {
    try {
        if (firstReadInvoice1) {
            const entries = [];
            const entries1 = [];
            page_no = 3;
            const resp = await c4re.post(`/dev/fetch-invoice?userid=einvoiceportal@gmail.com&tabname=draft&pageno=${page_no}&nooflines=10`);
          
            const spaces = resp.body.invoices;

            // if (spaces.length == 0) {
            //     break;
            // }

            // Loop through the initial data and retrieve additional data for each invoice
            for (let i = 0; i < spaces.length; i++) {
                const space = spaces[i];
                const invoice_no = space.invoice_no;

                // Fetch additional data for the current invoice
                // const resp1 = await c4re.post(`/dev/fetch-invoice-sup?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com`);
                const resp1 = await c4re.get(`/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com&edit=X`);
                
                
                //  if(resp1.body.length == 0){
                //    continue;
                //  }
                // Push the data for Invoice2
                entries.push({
                        invoice_no: `${space.invoice_no}`,
                        Ref_invoice_no : `${space.user_invoice_id}`,
                        supplier_name: `${space.supplier_name || 'NA'}`,
                        Date : `${space.invoice_date}`,
                        modified_by : `${space.working_person}`,
                        modified_date_time : `${space.modified_date}`,
                        INVOICE_FILE: `${space.invoice_files.length || 'NA'}`,
                           
                        
                        irn: `${resp1.body.irn}`,
                        ref_po_num: `${resp1.body.ref_po_num}`,
                        gstin: `${resp1.body.gstin}`,
                        Document_Type : `${resp1.body.doc_type_desc}`,
                        Ref_invoice_no1 : `${resp1.user_invoice_id}`,
                        invoice_date: `${space.invoice_date}`,
                        posting_date: `${resp1.body.posting_date}`,
                        baseline_date: `${resp1.body.baseline_date}`,
                        Vendor_Code : `${resp1.supplier_id}`,
                        payment_terms: `${resp1.body.payment_terms}`,
                        payment_method: `${resp1.body.payment_method}`,
                        company_code: `${resp1.body.company_code}`,
                        currency: `${resp1.body.currency}`,
                        department_name: `${resp1.body.department_name}`,
                        gl_account: `${resp1.body.gl_account}`,
                        cost_center: `${resp1.body.cost_center}`,
                        modified_date_time : `${space.modified_date}`,
                        internal_order: `${resp1.body.internal_order}`,
                        taxable_amount: `${resp1.body.taxable_amount}`,
                        adjustment: `${resp1.body.adjustment}`,
                        amount: `${resp1.body.amount}`,
                        tcs: `${resp1.body.tcs}`,
                        tds_per: `${resp1.body.tds_per}`,
                        tds_tot_amt: `${resp1.body.tds_tot_amt}`,
                        discount_per: `${resp1.body.discount_per}`,
                        total_discount_amount: `${resp1.body.total_discount_amount}`,   
                    // cgst_tot_amt: `${resp1.body.cgst_tot_amt}`,
                    // sgst_tot_amt: `${resp1.body.sgst_tot_amt}`,
                    // igst_tot_amt: `${resp1.body.igst_tot_amt}`,
                        file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,
                    // buttonbool: `${false}`,
                    // bool: (() => {
                    //     if (resp1.body.igst_tot_amt == 0) {
                    //         return 0; // for cgsst
                    //     } else {
                    //         return 1; // for igst
                    //     }
                    // })(),
                    // totaltaxamount: `${(() => {
                    //     if (resp1.body.is_igst == "n") {
                    //         return `CGST: ${resp1.body.cgst_tot_amt}, SGST: ${resp1.body.sgst_tot_amt}`;
                    //     } else {
                    //         return `IGST: ${resp1.body.igst_tot_amt}`;
                    //     }
                    // })()}`,
                    // value1: (() => {
                    //     if (resp1.body.npo == "y") {
                    //         return 7;
                    //     } else {
                    //         return 3;
                    //     }
                    // })(),
                    // is_igst: `${resp1.body.is_igst}`,
                    // npo: `${resp1.body.npo}`,
                    // sup_status: `${resp1.body.sup_status}`

                });
                var spaces1 = resp1.body.items;
            //     if (!resp1.body || (typeof resp1.body === 'string' && resp1.body.includes("'NoneType' object is not subscriptable")) || (!resp1.body || (typeof resp1.body !== 'string' || !resp1.body.includes('Internal Server Error')))) {
            //         console.log(`no items in ${invoice_no}`);

            //     }
            //         else if (
            //        Object.keys(resp1.body).length === 0 && 
            //         resp1.statuscode === 200
            //         )
            //         {
            //             console.log(`no items in ${invoice_no}`);
            //         }
            //         else{

                        
            //          console.log  (`wrong ${invoice_no}`) ;
            //     spaces1.forEach(space => {
                  
            //         entries1.push({

            //             parentrejected2_invoice_no:invoice_no,
            //              invoice_no: invoice_no,
            //             // invoice_no: 12,
            //             // id : 2222,
            //             material: space.material,
            //            material_desc: space.material_desc,
            //            hsn_code: space.hsn_code,
            //            item_no : space.item_no,
            //            quantity: space.quantity,
            //            amt_per_unit: space.amt_per_unit,
            //            discount: space.discount,
            //               gst_per:  space.gst_per,
            //               sgst_per: `SGST:${space.sgst_per}`,
            //               cgst_per: `CGST:${space.cgst_per}`,
            //               igst_per: `IGST:${space.igst_per}`,
            //             taxable_amount: space.taxable_amount,
            //             tax_value_amount:  ((space.taxable_amount*(space.gst_per/100))+(space.taxable_amount)),
            //             sgst_amount: `SGST:${space.sgst_amount}`,
            //             cgst_amount: `CGST:${space.cgst_amount}`,
            //             igst_amount: `IGST:${space.igst_amount}`,
            //             amount: space.amount,
            //             bigst_per : space.sgst_amount == 0 ? true : false ,
            //         });     
            //   });
            // }
            if (
                resp1.body &&
                resp1.statuscode === 200 &&
                resp1.body.invoice_no &&
                resp1.body.invoice_date )
                // Add more conditions for other expected fields 
                 {
                // The response format matches the expected format, proceed to process it
                // ...
                let item_cnt = 1;
                spaces1.forEach(space => {
                    const qty_unit = `${space.quantity} ${space.unit}`;
                const tot = `${space.quantity * space.amt_per_unit}`;
                // const gstLabel = `CGST: ${space.gst_per/2}% 
                // SGST: ${space.gst_per/2}%`;
                const amt = `CGST Amt: ${space.cgst_amount}% 
        SGST Amt: ${space.sgst_amount}%`;
                const materialAndDescription = `${space.material} (${space.material_desc})`;
                let gstLabel, am;
                if (resp.body.is_igst === "y") {
                    gstLabel = `IGST: ${space.gst_per}%`;
                } else {
                    gstLabel = `CGST: ${space.gst_per / 2}% SGST: ${space.gst_per / 2}%`;
                }
                var TA = `${(tot * space.gst_per)/100}`;
                var tot_amt = Number(tot) + Number(TA);
                console.log("taxable amount",tot);
                    entries1.push({
                    invoice: `${invoice_no}`,
                    sl_no: `${item_cnt}`,
                    item_no : 'NA',
                    Material: `${materialAndDescription}`,
                    HSN_Code : `${space.hsn_code || 'NA'}`,
                    Qty: `${qty_unit}`,
                    Unit_Price: `${space.amt_per_unit}`,
                    GL_ACC : `${space.gl_account}`,
                    Plant: `${space.plant}`,
                    Cost_Center: `${space.cost_center}`,
                    Disc_Perc: `${space.discount} Disc.Amt : ${space.discount_amount}`,
                    GST_Per: `${space.gst_per}% ${gstLabel}`,
                    Taxable_Amount : `${tot}`,
                    Tax_Amount : `${TA} CGST AMT : ${TA/2} SGST AMT : ${TA/2}`,
                    Total_Amount : `${tot_amt}`,
                    });
                    item_cnt++;
                });
            } else {
                console.log(`Response format is not as expected for invoice ${invoice_no}. Rejecting it.`);
            }

            
            


             }
        //     page_no++;
        // }

            // Perform database operations
            await cds.tx(req).run(DELETE(Draft));
             await cds.tx(req).run(DELETE(item2));
            await cds.tx(req).run(INSERT.into(Draft).entries(entries));
         await cds.tx(req).run(INSERT.into(item2).entries(entries1));

            firstReadInvoice1 = false;
        }

        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});


this.on('getPdfUrl_draft', async (req) => {debugger
    const fileLinkValue = await SELECT `file_link`.from(New);
    return fileLinkValue;
  });



//================================rejected view========================================

var firstReadInvoice1 = true;
this.before('READ', Rejected , async (req) => {
    try {
        if (firstReadInvoice1) {
            const entries = [];
            const entries1 = [];
            page_no = 3;
            const resp = await c4re.post(`/dev/fetch-invoice?userid=einvoiceportal@gmail.com&tabname=rejected&pageno=${page_no}&nooflines=10`);
          
            const spaces = resp.body.invoices;

            // if (spaces.length == 0) {
            //     break;
            // }

            // Loop through the initial data and retrieve additional data for each invoice
            for (let i = 0; i < spaces.length; i++) {
                const space = spaces[i];
                const invoice_no = space.invoice_no;

                // Fetch additional data for the current invoice
                // const resp1 = await c4re.post(`/dev/fetch-invoice-sup?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com`);
                const resp1 = await c4re.get(`/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com&edit=X`);
                
                
                //  if(resp1.body.length == 0){
                //    continue;
                //  }
                // Push the data for Invoice2
                entries.push({
                        invoice_no: `${space.invoice_no}`,
                        Ref_invoice_no : `${space.user_invoice_id}`,
                        supplier_name: `${space.supplier_name || 'NA'}`,
                        Date : `${space.invoice_date}`,
                        modified_by : `${space.working_person}`,
                        modified_date_time : `${space.modified_date}`,
                        INVOICE_FILE: `${space.invoice_files.length || 'NA'}`,
                           
                        
                        irn: `${resp1.body.irn}`,
                        ref_po_num: `${resp1.body.ref_po_num}`,
                        gstin: `${resp1.body.gstin}`,
                        Document_Type : `${resp1.body.doc_type_desc}`,
                        Ref_invoice_no1 : `${resp1.user_invoice_id}`,
                        invoice_date: `${space.invoice_date}`,
                        posting_date: `${resp1.body.posting_date}`,
                        baseline_date: `${resp1.body.baseline_date}`,
                        Vendor_Code : `${resp1.supplier_id}`,
                        payment_terms: `${resp1.body.payment_terms}`,
                        payment_method: `${resp1.body.payment_method}`,
                        company_code: `${resp1.body.company_code}`,
                        currency: `${resp1.body.currency}`,
                        department_name: `${resp1.body.department_name}`,
                        gl_account: `${resp1.body.gl_account}`,
                        cost_center: `${resp1.body.cost_center}`,
                        modified_date_time : `${space.modified_date}`,
                        internal_order: `${resp1.body.internal_order}`,
                        taxable_amount: `${resp1.body.taxable_amount}`,
                        adjustment: `${resp1.body.adjustment}`,
                        amount: `${resp1.body.amount}`,
                        tcs: `${resp1.body.tcs}`,
                        tds_per: `${resp1.body.tds_per}`,
                        tds_tot_amt: `${resp1.body.tds_tot_amt}`,
                        discount_per: `${resp1.body.discount_per}`,
                        total_discount_amount: `${resp1.body.total_discount_amount}`,   
                    // cgst_tot_amt: `${resp1.body.cgst_tot_amt}`,
                    // sgst_tot_amt: `${resp1.body.sgst_tot_amt}`,
                    // igst_tot_amt: `${resp1.body.igst_tot_amt}`,
                        file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,
                    // buttonbool: `${false}`,
                    // bool: (() => {
                    //     if (resp1.body.igst_tot_amt == 0) {
                    //         return 0; // for cgsst
                    //     } else {
                    //         return 1; // for igst
                    //     }
                    // })(),
                    // totaltaxamount: `${(() => {
                    //     if (resp1.body.is_igst == "n") {
                    //         return `CGST: ${resp1.body.cgst_tot_amt}, SGST: ${resp1.body.sgst_tot_amt}`;
                    //     } else {
                    //         return `IGST: ${resp1.body.igst_tot_amt}`;
                    //     }
                    // })()}`,
                    // value1: (() => {
                    //     if (resp1.body.npo == "y") {
                    //         return 7;
                    //     } else {
                    //         return 3;
                    //     }
                    // })(),
                    // is_igst: `${resp1.body.is_igst}`,
                    // npo: `${resp1.body.npo}`,
                    // sup_status: `${resp1.body.sup_status}`

                });
                var spaces1 = resp1.body.items;
            //     if (!resp1.body || (typeof resp1.body === 'string' && resp1.body.includes("'NoneType' object is not subscriptable")) || (!resp1.body || (typeof resp1.body !== 'string' || !resp1.body.includes('Internal Server Error')))) {
            //         console.log(`no items in ${invoice_no}`);

            //     }
            //         else if (
            //        Object.keys(resp1.body).length === 0 && 
            //         resp1.statuscode === 200
            //         )
            //         {
            //             console.log(`no items in ${invoice_no}`);
            //         }
            //         else{

                        
            //          console.log  (`wrong ${invoice_no}`) ;
            //     spaces1.forEach(space => {
                  
            //         entries1.push({

            //             parentrejected2_invoice_no:invoice_no,
            //              invoice_no: invoice_no,
            //             // invoice_no: 12,
            //             // id : 2222,
            //             material: space.material,
            //            material_desc: space.material_desc,
            //            hsn_code: space.hsn_code,
            //            item_no : space.item_no,
            //            quantity: space.quantity,
            //            amt_per_unit: space.amt_per_unit,
            //            discount: space.discount,
            //               gst_per:  space.gst_per,
            //               sgst_per: `SGST:${space.sgst_per}`,
            //               cgst_per: `CGST:${space.cgst_per}`,
            //               igst_per: `IGST:${space.igst_per}`,
            //             taxable_amount: space.taxable_amount,
            //             tax_value_amount:  ((space.taxable_amount*(space.gst_per/100))+(space.taxable_amount)),
            //             sgst_amount: `SGST:${space.sgst_amount}`,
            //             cgst_amount: `CGST:${space.cgst_amount}`,
            //             igst_amount: `IGST:${space.igst_amount}`,
            //             amount: space.amount,
            //             bigst_per : space.sgst_amount == 0 ? true : false ,
            //         });     
            //   });
            // }
            if (
                resp1.body &&
                resp1.statuscode === 200 &&
                resp1.body.invoice_no &&
                resp1.body.invoice_date )
                // Add more conditions for other expected fields 
                 {
                // The response format matches the expected format, proceed to process it
                // ...
                let item_cnt = 1;
                spaces1.forEach(space => {
                    const qty_unit = `${space.quantity} ${space.unit}`;
                const tot = `${space.quantity * space.amt_per_unit}`;
                // const gstLabel = `CGST: ${space.gst_per/2}% 
                // SGST: ${space.gst_per/2}%`;
                const amt = `CGST Amt: ${space.cgst_amount}% 
        SGST Amt: ${space.sgst_amount}%`;
                const materialAndDescription = `${space.material} (${space.material_desc})`;
                let gstLabel, am;
                if (resp.body.is_igst === "y") {
                    gstLabel = `IGST: ${space.gst_per}%`;
                } else {
                    gstLabel = `CGST: ${space.gst_per / 2}% SGST: ${space.gst_per / 2}%`;
                }
                var TA = `${(tot * space.gst_per)/100}`;
                var tot_amt = Number(tot) + Number(TA);
                console.log("taxable amount",tot);
                    entries1.push({
                    invoice: `${invoice_no}`,
                    sl_no: `${item_cnt}`,
                    item_no : 'NA',
                    Material: `${materialAndDescription}`,
                    HSN_Code : `${space.hsn_code || 'NA'}`,
                    Qty: `${qty_unit}`,
                    Unit_Price: `${space.amt_per_unit}`,
                    GL_ACC : `${space.gl_account}`,
                    Plant: `${space.plant}`,
                    Cost_Center: `${space.cost_center}`,
                    Disc_Perc: `${space.discount} Disc.Amt : ${space.discount_amount}`,
                    GST_Per : `${space.gst_per}% ${gstLabel}`,
                    Taxable_Amount : `${tot}`,
                    Tax_Amount : `${TA} CGST AMT : ${TA/2} SGST AMT : ${TA/2}`,
                    Total_Amount : `${tot_amt}`,
                    });
                    item_cnt++;
                });
            } else {
                console.log(`Response format is not as expected for invoice ${invoice_no}. Rejecting it.`);
            }

            
            


             }
        //     page_no++;
        // }

            // Perform database operations
            await cds.tx(req).run(DELETE(Rejected));
             await cds.tx(req).run(DELETE(item3));
            await cds.tx(req).run(INSERT.into(Rejected).entries(entries));
         await cds.tx(req).run(INSERT.into(item3).entries(entries1));

            firstReadInvoice1 = false;
        }

        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});


this.on('getPdfUrl_rejected', async (req) => {debugger
    const fileLinkValue = await SELECT `file_link`.from(Rejected);
    return fileLinkValue;
  });






// //======================================innaproval view==================================

firstReadInvoice1 = true;
this.before('READ', inapproval, async (req) => {
    firstReadInvoice1 = true;
    try {
        //debugger
        var er = false;
        const data = await SELECT.from(inapproval);
        invoiceNo1 = data[0].invoice;   
            if (req.params[0].invoice != null)  {
                // debugger
                cds.tx(req).run(DELETE(inapproval));
                var er = true;
                // cds.tx(req).run(DELETE(podatatab));
                const invoice_no = req.params[0].invoice;
                const link = `/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com&edit=X`;
                const resp1 = await c4re.get(link);
                const spaces1 = resp1.body;
                const entries1 = [];
                
                    entries1.push({
                        invoice: `${resp1.body.invoice_no}`,
                        Invoice_file: 'Open',
                        Payment_Terms: `${resp1.body.payment_terms}`,
                        irn: `${resp1.body.irn}`,
                        Reference_po_num: `${resp1.body.ref_po_num}`,
                        gstin: `${resp1.body.gstin}`,
                        Document_type: `${resp1.body.doc_type_desc}`,
                        Ref_invoice_no: `${resp1.body.user_invoice_id}`,
                        invoice_date: `${resp1.body.invoice_date}`,
                        posting_date: `${resp1.body.posting_date}`,
                        Baseline_date: `${resp1.body.baseline_date}`,
                        Vendor: `${resp1.body.supplier_id}`,
                        Payment_Terms: `${resp1.body.payment_terms}`,
                        Payment_Method: `${resp1.body.payment_method}`,
                        company_code: `${resp1.body.company_code}`,
                        Currency: `${resp1.body.currency}`,
                        Department: `${resp1.body.department_name}`,
                        GL_account: `${resp1.body.gl_account}`,
                        cost_center: `${resp1.body.cost_center}`,
                        internal_order: `${resp1.body.internal_order}`,
                        taxable_amount: `${resp1.body.taxable_amount}`,
                        Adjustment: `${resp1.body.adjustment}`,
                        Amount: `${resp1.body.amount}`,
                        tcs_amount: `${resp1.body.tcs}`,
                        tds_percent: `${resp1.body.tds_per}`,
                        tds_tot_amt: `${resp1.body.tds_tot_amt}`,
                        Discount_percent: `${resp1.body.discount_per}`,
                        total_discount_amount: `${resp1.body.total_discount_amount}`,
                        cgst_tot_amt: `${resp1.body.cgst_tot_amt}`,
                        sgst_tot_amt: `${resp1.body.sgst_tot_amt}`,
                        igst_tot_amt: `${resp1.body.igst_tot_amt}`,
                            file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,
                    });
                // await cds.tx(req).run(INSERT.into(Newtab).entries(entries1));
                await cds.tx(req).run(INSERT.into(inapproval).entries(entries1));    
            
            }
            // debugger
            
        // }
        var er = false;
        return req;
    } catch (err) {
        if (er) {
           req.error(500, err.message);
        }
        try {
            //debugger
            var er = false;
            const data = await SELECT.from(inapproval);
            invoiceNo1 = data[0].invoice;   
                if (req.query.SELECT.where[2].val != null)  {
                    // debugger
                    cds.tx(req).run(DELETE(inapproval));
                    var er = true;
                    // cds.tx(req).run(DELETE(podatatab));
                    const invoice_no = req.query.SELECT.where[2].val;
                    const link = `/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com&edit=X`;
                    const resp1 = await c4re.get(link);
                    const spaces1 = resp1.body;
                    const entries1 = [];
                    
                        entries1.push({
                            
                            invoice: `${resp1.body.invoice_no}`,
                            Payment_Terms: `${resp1.body.payment_terms}`,
                            irn: `${resp1.body.irn}`,
                            Reference_po_num: `${resp1.body.ref_po_num}`,
                            gstin: `${resp1.body.gstin}`,
                            Document_type: `${resp1.body.doc_type_desc}`,
                            Ref_invoice_no: `${resp1.body.user_invoice_id}`,
                            invoice_date: `${resp1.body.invoice_date}`,
                            posting_date: `${resp1.body.posting_date}`,
                            Baseline_date: `${resp1.body.baseline_date}`,
                            Vendor: `${resp1.body.supplier_id}`,
                            Payment_Terms: `${resp1.body.payment_terms}`,
                            Payment_Method: `${resp1.body.payment_method}`,
                            company_code: `${resp1.body.company_code}`,
                            Currency: `${resp1.body.currency}`,
                            Department: `${resp1.body.department_name}`,
                            GL_account: `${resp1.body.gl_account}`,
                            cost_center: `${resp1.body.cost_center}`,
                            internal_order: `${resp1.body.internal_order}`,
                            taxable_amount: `${resp1.body.taxable_amount}`,
                            Adjustment: `${resp1.body.adjustment}`,
                            Amount: `${resp1.body.amount}`,
                            tcs_amount: `${resp1.body.tcs}`,
                            tds_percent: `${resp1.body.tds_per}`,
                            tds_tot_amt: `${resp1.body.tds_tot_amt}`,
                            Discount_percent: `${resp1.body.discount_per}`,
                            tax_perc: `${resp1.body.tax_perc}`,
                            total_discount_amount: `${resp1.body.total_discount_amount}`,
                            cgst_tot_amt: `${resp1.body.cgst_tot_amt}`,
                            sgst_tot_amt: `${resp1.body.sgst_tot_amt}`,
                            igst_tot_amt: `${resp1.body.igst_tot_amt}`,
                            file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,
                        });
                    // await cds.tx(req).run(INSERT.into(Newtab).entries(entries1));
                    await cds.tx(req).run(INSERT.into(inapproval).entries(entries1));    
                
                }
                // debugger
                
            // }
            var er = false;
            return req;
        } catch (err) {
            if (er) {
               req.error(500, err.message);
            }

        try
        {
        if (firstReadInvoice1) {
            cds.tx(req).run(DELETE(inapproval));
            
            const resp = await c4re.post('/dev/fetch-invoice?userid=einvoiceportal@gmail.com&tabname=inapproval&pageno=1&nooflines=50');
            const spaces = resp.body.invoices;
            const entries = [];
            const child = [];
            spaces.forEach(space=>{
                entries.push({
                    INVOICE_FILE: `${space.invoice_files.length || 'NA'}`,
                    invoice: `${space.invoice_no}`,
                    Ref_invoice: `${space.user_invoice_id}`,
                    suplier_name: `${space.supplier_name || 'NA'}`,
                    Date: `${space.invoice_date}`,
                    modified_by: `${space.working_person}`,
                    Mod_date_time: `${space.modified_date}`,
                });
                space.approvers.forEach(spa => {
                    child.push({
                        invoice:space.invoice_no,
                        Approver : `${spa.name}`,
                    });
                });

            });

            
            await cds.tx(req).run(INSERT.into(inapproval).entries(entries));
            await cds.tx(req).run(INSERT.into(Approver_tab).entries(child));
        }
        return req;
        
    }catch(err){
     req.error(500, err.message);
    }

    }

    }
});

this.on('getPdfUrl_inapp', async (req) => {debugger
    const fileLinkValue = await SELECT `file_link`.from(inapproval);
    return fileLinkValue;
  });






//======================================ITEM_DATA for inapproval=======================================
var itemread4 = true;  
this.before('READ', item4, async (req) => {
    try {
        var invoice_no = req.params[0].invoice;
        var ref_po_num_item = req.params[0].ref_po_num;
        console.log(invoice_no);
        if (itemread4) {
            const entries_item4 = [];     
            const resp = await c4re.post(`/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com&edit=X`);
            cds.tx(req).run(DELETE(item4));
            const spaces = resp.body.items;
            let item_cnt = 1;
            spaces.forEach(space => {
                const qty_unit = `${space.quantity} ${space.unit}`;
            const tot = `${space.quantity * space.amt_per_unit}`;
            // const gstLabel = `CGST: ${space.gst_per/2}% 
            // SGST: ${space.gst_per/2}%`;
            const amt = `CGST Amt: ${space.cgst_amount}% 
    SGST Amt: ${space.sgst_amount}%`;
            const materialAndDescription = `${space.material} (${space.material_desc})`;
            let gstLabel, am;
            if (resp.body.is_igst === "y") {
                gstLabel = `IGST: ${space.gst_per}%`;
            } else {
                gstLabel = `CGST: ${space.gst_per / 2}% SGST: ${space.gst_per / 2}%`;
            }
            var TA = `${(tot * space.gst_per)/100}`;
            var tot_amt = Number(tot) + Number(TA);
            console.log("taxable amount",tot);
            entries_item4.push({
                invoice: `${invoice_no}`,
                sl_no: `${item_cnt}`,
                item_no : 'NA',
                Material: `${materialAndDescription}`,
                HSN_Code : `${space.hsn_code || 'NA'}`,
                Qty: `${qty_unit}`,
                Unit_Price: `${space.amt_per_unit}`,
                GL_ACC : `${space.gl_account}`,
                Plant: `${space.plant}`,
                Cost_Center: `${space.cost_center}`,
                Disc_Perc: `${space.discount} Disc.Amt : ${space.discount_amount}`,
                GST_Per : `${space.gst_per}% ${gstLabel}`,
                Taxable_Amount : `${tot}`,
                Tax_Amount : `${TA} CGST AMT : ${TA/2} SGST AMT : ${TA/2}`,
                Total_Amount : `${tot_amt}`,
                });
                item_cnt++;
            });

         
            await cds.tx(req).run(INSERT.into(item4).entries(entries_item4));
        }
        return req;
    } catch (err) {
        req.error(500, err.message);
    }

});





// //====================================submitted to erp=================================



firstReadInvoice1 = true;
this.before('READ', Submitted_to_ERP, async (req) => {
    firstReadInvoice1 = true;
    try {
        //debugger
        var er = false;
        const data = await SELECT.from(Submitted_to_ERP);
        invoiceNo1 = data[0].invoice;   
            if (req.params[0].invoice != null)  {
                // debugger
                cds.tx(req).run(DELETE(Submitted_to_ERP));
                var er = true;
                // cds.tx(req).run(DELETE(podatatab));
                const invoice_no = req.params[0].invoice;
                const link = `/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com`;
                const resp1 = await c4re.get(link);
                const spaces1 = resp1.body;
                const entries1 = [];
                
                    entries1.push({
                        invoice: `${resp1.body.invoice_no}`,
                        Invoice_file: 'Open',
                        Payment_Terms: `${resp1.body.payment_terms}`,
                        irn: `${resp1.body.irn}`,
                        Reference_po_num: `${resp1.body.ref_po_num}`,
                        gstin: `${resp1.body.gstin}`,
                        Document_type: `${resp1.body.doc_type_desc}`,
                        Ref_invoice_no: `${resp1.body.user_invoice_id}`,
                        invoice_date: `${resp1.body.invoice_date}`,
                        posting_date: `${resp1.body.posting_date}`,
                        Baseline_date: `${resp1.body.baseline_date}`,
                        Vendor: `${resp1.body.supplier_id}`,
                        Payment_Terms: `${resp1.body.payment_terms}`,
                        Payment_Method: `${resp1.body.payment_method}`,
                        company_code: `${resp1.body.company_code}`,
                        Currency: `${resp1.body.currency}`,
                        Department: `${resp1.body.department_name}`,
                        GL_account: `${resp1.body.gl_account}`,
                        cost_center: `${resp1.body.cost_center}`,
                        internal_order: `${resp1.body.internal_order}`,
                        taxable_amount: `${resp1.body.taxable_amount}`,
                        Adjustment: `${resp1.body.adjustment}`,
                        Amount: `${resp1.body.amount}`,
                        tcs_amount: `${resp1.body.tcs}`,
                        tds_percent: `${resp1.body.tds_per}`,
                        tds_tot_amt: `${resp1.body.tds_tot_amt}`,
                        Discount_percent: `${resp1.body.discount_per}`,
                        total_discount_amount: `${resp1.body.total_discount_amount}`,
                        cgst_tot_amt: `${resp1.body.cgst_tot_amt}`,
                        sgst_tot_amt: `${resp1.body.sgst_tot_amt}`,
                        igst_tot_amt: `${resp1.body.igst_tot_amt}`,
                        Gst_percent: `${resp1.body.tax_per}`,
                            file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,
                    });
                // await cds.tx(req).run(INSERT.into(Newtab).entries(entries1));
                await cds.tx(req).run(INSERT.into(Submitted_to_ERP).entries(entries1));    
            
            }
            // debugger
            
        // }
        var er = false;
        return req;
    } catch (err) {
        if (er) {
           req.error(500, err.message);
        }
        try {
            //debugger
            var er = false;
            const data = await SELECT.from(Submitted_to_ERP);
            invoiceNo1 = data[0].invoice;   
                if (req.query.SELECT.where[2].val != null)  {
                    // debugger
                    cds.tx(req).run(DELETE(Submitted_to_ERP));
                    var er = true;
                    // cds.tx(req).run(DELETE(podatatab));
                    const invoice_no = req.query.SELECT.where[2].val;
                    const link = `/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com`;
                    
                    const resp1 = await c4re.get(link);
                    const spaces1 = resp1.body;
                    const entries1 = [];
                    
                        entries1.push({
                            invoice_no: `${resp1.body.invoice_no}`,
                            invoice: `${resp1.body.invoice_no}`,
                            Invoice_file: 'Open',
                            Payment_Terms: `${resp1.body.payment_terms}`,
                            irn: `${resp1.body.irn}`,
                            Reference_po_num: `${resp1.body.ref_po_num}`,
                            gstin: `${resp1.body.gstin}`,
                            Document_type: `${resp1.body.doc_type_desc}`,
                            Ref_invoice_no: `${resp1.body.user_invoice_id}`,
                            invoice_date: `${resp1.body.invoice_date}`,
                            posting_date: `${resp1.body.posting_date}`,
                            Baseline_date: `${resp1.body.baseline_date}`,
                            Vendor: `${resp1.body.supplier_id}`,
                            Payment_Terms: `${resp1.body.payment_terms}`,
                            Payment_Method: `${resp1.body.payment_method}`,
                            company_code: `${resp1.body.company_code}`,
                            Currency: `${resp1.body.currency}`,
                            Department: `${resp1.body.department_name}`,
                            GL_account: `${resp1.body.gl_account}`,
                            cost_center: `${resp1.body.cost_center}`,
                            internal_order: `${resp1.body.internal_order}`,
                            taxable_amount: `${resp1.body.taxable_amount}`,
                            Adjustment: `${resp1.body.adjustment}`,
                            Amount: `${resp1.body.amount}`,
                            tcs_amount: `${resp1.body.tcs}`,
                            tds_percent: `${resp1.body.tds_per}`,
                            tds_tot_amt: `${resp1.body.tds_tot_amt}`,
                            Discount_percent: `${resp1.body.discount_per}`,
                            total_discount_amount: `${resp1.body.total_discount_amount}`,
                            cgst_tot_amt: `${resp1.body.cgst_tot_amt}`,
                            sgst_tot_amt: `${resp1.body.sgst_tot_amt}`,
                            igst_tot_amt: `${resp1.body.igst_tot_amt}`,
                            Gst_percent: `${resp1.body.tax_per}`,
                            file_link: `${(resp1.body && resp1.body.files && resp1.body.files.length > 0) ? resp1.body.files[0].file_link : 'NA'}`,

                        });
                    // await cds.tx(req).run(INSERT.into(Newtab).entries(entries1));
                    await cds.tx(req).run(INSERT.into(Submitted_to_ERP).entries(entries1));    
                
                }
                // debugger
                
            // }
            var er = false;
            return req;
        } catch (err) {
            if (er) {
               req.error(500, err.message);
            }

        try
        {
        if (firstReadInvoice1) {
            cds.tx(req).run(DELETE(Submitted_to_ERP));
            
            const resp = await c4re.post('/dev/fetch-invoice?userid=einvoiceportal@gmail.com&tabname=tosap&pageno=1&nooflines=50');
            
            const spaces = resp.body.invoices;
            const entries = [];
            const child1 = [];
            spaces.forEach(space=>{
                entries.push({
                    Erp_invoiceno: `${space.sap_invoice_no}`,
                    INVOICE_FILE: `${space.invoice_files.length || 'NA'}`,
                    invoice: `${space.invoice_no}`,
                    Ref_invoice: `${space.user_invoice_id}`,
                    suplier_name: `${space.supplier_name || 'NA'}`,
                    Date: `${space.invoice_date}`,
                    Modified_by: `${space.working_person}`,
                    Mod_date_time: `${space.modified_date}`,
                });
                space.sap_approver.forEach(sapApprover => {
                    console.log(sapApprover.name);
                    child1.push({
                        invoice: `${space.invoice_no}`,
                        Approver: `${sapApprover.name}`,
                    })

                    });
            });

            
            await cds.tx(req).run(INSERT.into(Submitted_to_ERP).entries(entries));
            await cds.tx(req).run(INSERT.into(erp_app_tab).entries(child1));
        }
        return req;
        
    }catch(err){
     req.error(500, err.message);
    }

    }

    }
});




//======================================ITEM_DATA for inapproval=======================================
var itemread4 = true;  
this.before('READ', item5, async (req) => {
    try {
        var invoice_no = req.params[0].invoice;
        var ref_po_num_item = req.params[0].ref_po_num;
        console.log(invoice_no);
        if (itemread4) {
            const entries_item4 = [];     
            const resp = await c4re.post(`/dev/fetch-invoice?invoice_no=${invoice_no}&userid=einvoiceportal@gmail.com&edit=X`);
            cds.tx(req).run(DELETE(item5));
            const spaces = resp.body.items;
            let item_cnt = 1;
            let itm_no = 10;
            spaces.forEach(space => {
                const qty_unit = `${space.quantity} ${space.unit}`;
            const tot = `${space.quantity * space.amt_per_unit}`;
            // const gstLabel = `CGST: ${space.gst_per/2}% 
            // SGST: ${space.gst_per/2}%`;
            const amt = `CGST Amt: ${space.cgst_amount}% 
    SGST Amt: ${space.sgst_amount}%`;
            const materialAndDescription = `${space.material} (${space.material_desc})`;
            let gstLabel, am;
            if (resp.body.is_igst === "y") {
                gstLabel = `IGST: ${space.gst_per}%`;
            } else {
                gstLabel = `CGST: ${space.gst_per / 2}% SGST: ${space.gst_per / 2}%`;
            }
            var TA = `${(tot * space.gst_per)/100}`;
            var tot_amt = Number(tot) + Number(TA);
            console.log("taxable amount",tot);
            entries_item4.push({
                invoice: `${invoice_no}`,
                sl_no: `${item_cnt}`,
                item_no : `${itm_no}`,
                Material: `${materialAndDescription}`,
                HSN_Code : `${space.hsn_code || 'NA'}`,
                Qty: `${qty_unit}`,
                Unit_Price: `${space.amt_per_unit}`,
                GL_ACC : `${space.gl_account}`,
                Plant: `${'Hamburg'}`,
                Cost_Center: `${space.cost_center}`,
                Disc_Perc: `${space.discount} Disc.Amt : ${space.discount_amount}`,
                GST_Per : `${space.gst_per}% ${gstLabel}`,
                Taxable_Amount : `${tot}`,
                Tax_Amount : `${TA} CGST AMT : ${TA/2} SGST AMT : ${TA/2}`,
                Total_Amount : `${tot_amt}`,
                });
                item_cnt++;
                itm_no += 10;
            });

         
            await cds.tx(req).run(INSERT.into(item5).entries(entries_item4));
        }
        return req;
    } catch (err) {
        req.error(500, err.message);
    }

});


this.on('getPdfUrl_sub2erp', async (req) => {debugger
    const fileLinkValue = await SELECT `file_link`.from(Submitted_to_ERP);
    return fileLinkValue;
  });




//===================================search help for vendor===================================
var firstReadvendor = true;
this.before('READ', vendor_search_help, async (req) => {
    try {
        if (firstReadvendor) {
            const entries_ven = [];
                const resp = await c4re.get(`/dev/list?refponumber=9200110036&vendorcode=100569`);
                cds.tx(req).run(DELETE(vendor_search_help));
                const spaces = resp.body;
                spaces.forEach(space => {
                    entries_ven.push({
                        vendor_id: `${space.code}`,
                        name: `${space.description}`,       
                    });
                });
            await cds.tx(req).run(INSERT.into(vendor_search_help).entries(entries_ven));
       
            firstReadvendor = false;
        }
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});



//===============================search help for payment terms===============================

var asgn_inv = true;
this.before('READ', Pay_ter, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/dropdown?drop_key=vendor_payment_terms');
            cds.tx(req).run(DELETE(Pay_ter));
            const space1 = resp.body;
            space1.forEach(space => {
                entries.push({
                    value : `${space.value2}`,
                });
            });
            await cds.tx(req).run(INSERT.into(Pay_ter).entries(entries));
            asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});


//===============================search help for payment meth===============================

var asgn_inv = true;
this.before('READ', Payment_Meth, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/dropdown?drop_key=payment_method');
            cds.tx(req).run(DELETE(Payment_Meth));
            const space1 = resp.body;
            space1.forEach(space => {
                entries.push({
                    table_key : `${space.table_key}`,
                });
            });
            await cds.tx(req).run(INSERT.into(Payment_Meth).entries(entries));
            asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});




//===============================search help for company_code===============================

var asgn_inv = true;
this.before('READ', company_code, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/search-help?master_id=1');
            cds.tx(req).run(DELETE(company_code));
            const space1 = resp.body.search_help;
            space1.forEach(space => {
                entries.push({
                    code : `${space.code}`,
                    description : `${space.description}`,
                });
            });
            await cds.tx(req).run(INSERT.into(company_code).entries(entries));
            asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});



//===============================search help for currency===============================

var asgn_inv = true;
this.before('READ', currency, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/search-help?master_id=12');
            cds.tx(req).run(DELETE(currency));
            const space1 = resp.body.search_help;
            space1.forEach(space => {
                entries.push({
                    code : `${space.code}`,
                    description : `${space.description}`,
                });
            });
            await cds.tx(req).run(INSERT.into(currency).entries(entries));
            asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});


//===============================search help for gl_acc===============================

var asgn_inv = true;
this.before('READ', gl_acc, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/search-help?master_id=2');
            cds.tx(req).run(DELETE(gl_acc));
            const space1 = resp.body.search_help;
            space1.forEach(space => {
                entries.push({
                    code : `${space.code}`,
                    description : `${space.description}`,
                });
            });
            await cds.tx(req).run(INSERT.into(gl_acc).entries(entries));
            asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});


//===============================search help for department===============================

var asgn_inv = true;
this.before('READ', department, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/department-master?userid=einvoiceportal@gmail.com');
            console.log(resp);
            cds.tx(req).run(DELETE(department));
            const space1 = resp.body;
            space1.forEach(space => {
                entries.push({
                    name : `${space.department_name}`,
                });
            });
            await cds.tx(req).run(INSERT.into(department).entries(entries));
            asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});


//===============================search help for gst===============================

var asgn_inv = true;
this.before('READ', gst, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/tax-code?companyCode=1000');
            cds.tx(req).run(DELETE(gst));
            const space1 = resp.body;
            space1.forEach(space => {
                entries.push({
                    description : `${space.tax_per} ${space.description}`,
                });
            });
            await cds.tx(req).run(INSERT.into(gst).entries(entries));
            asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});




//===============================search help for cost center===============================

var asgn_inv = true;
this.before('READ', cost_center, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/search-help?master_id=3');
            cds.tx(req).run(DELETE(cost_center));
            const space1 = resp.body.search_help;
            space1.forEach(space => {
                entries.push({
                    code : `${space.code}`,
                    description : `${space.description}`,
                });
            });
            await cds.tx(req).run(INSERT.into(cost_center).entries(entries));
            asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});

//===============================search help for internal order===============================
var asgn_inv = true;
this.before('READ', internal_ord, async (req) => {
    try {
        const entries = [];
        const resp = await c4re.get('/dev/department-master?userid=einvoiceportal@gmail.com');
        cds.tx(req).run(DELETE(internal_ord));
        const space1 = resp.body;

        // Create a Set to store unique code values
        const uniqueCodes = new Set();

        space1.forEach(space => {
            const code = space.internal_order;

            // Check if the code is unique
            if (!uniqueCodes.has(code)) {
                uniqueCodes.add(code);

                entries.push({
                    code: `${code}`, // Add the code to the entry
                });
            }
        });

        // Insert unique entries into internal_ord
        await cds.tx(req).run(INSERT.into(internal_ord).entries(entries));

        asgn_inv = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});



//===============================search help for Document_Type===============================

var d1 = true;
this.before('READ', Document_Type, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get('/dev/report?document_type=invoice');
            cds.tx(req).run(DELETE(Document_Type));
            const space1 = resp.body.search_help;
            space1.forEach(space => {
                entries.push({
                    type : `${space.description}`,
                });
            });
            await cds.tx(req).run(INSERT.into(Document_Type).entries(entries));
            d1 = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});

d1 = true;
this.before('READ', tds, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get(`/dev/dropdown?drop_key=vendor_tds`);
            cds.tx(req).run(DELETE(tds));
            const space1 = resp.body;
            space1.forEach(space => {
                entries.push({
                    value : `${space.value2}-${space.table_key}`,
                });
            });
            await cds.tx(req).run(INSERT.into(tds).entries(entries));
            d1 = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});



d1 = true;
this.before('READ', material, async (req) => {
    try {
            const entries = [];        
            const resp = await c4re.get(`/dev/material-master-searchhelp`);
            cds.tx(req).run(DELETE(material));
            const space1 = resp.body;
            space1.forEach(space => {
                entries.push({
                    mat_no : `${space.material_no}`,
                    mat_name : `${space.material_name}`,
                });
            });
            await cds.tx(req).run(INSERT.into(material).entries(entries));
            d1 = false;
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});



this.on('ShowPo',New.drafts,async req => {
    await cds.update(New.drafts, req.params[0].ID).set({value: 7, value1:false});
});
this.on('HidePo',New.drafts,async req => {
    await cds.update(New.drafts, req.params[0].ID).set({value: 1, value1:true});
});


this.on('ShowPo',Draft.drafts,async req => {
    await cds.update(Draft.drafts, req.params[0].ID).set({value: 7, value1:false});
});
this.on('HidePo',Draft.drafts,async req => {
    await cds.update(Draft.drafts, req.params[0].ID).set({value: 1, value1:true});
});


this.on('ShowPo',Rejected.drafts,async req => {
    await cds.update(Rejected.drafts, req.params[0].ID).set({value: 7, value1:false});
});
this.on('HidePo',Rejected.drafts,async req => {
    await cds.update(Rejected.drafts, req.params[0].ID).set({value: 1, value1:true});
});




//=======================================Supplier Enquires==============================================

var supp_enq = true;
this.before('READ', supplier_enq, async (req) => {
    try {
        if (supp_enq) {
            const entries = [];        
            const resp = await c4re.post('/dev/supplier-enquiry?userid=einvoiceportal@gmail.com');
            cds.tx(req).run(DELETE(supplier_enq));
            const space1 = resp.body;
            space1.forEach(space => {
                entries.push({
                    id: '10',
                    Enquiry_no: `${space.enquirie_no}`,
                    Supplier_name: `${space.supplier_name}`,
                    Description: `${space.description}`,
                    Enq_desc: `${space.description}`,
                    Supplier_Enquiry: `${space.supplier_enquiry}`,
                    Recieved_date: `${space.recieved_date}`,
                    Status: `${space.status}`,
                    last_responded: `${space.last_responded}`,
                    faulty: '1', 
                });
            });
            await cds.tx(req).run(INSERT.into(supplier_enq).entries(entries));
            supp_enq = false;
        }
        return req;
    } catch (err) {
        req.error(500, err.message);
    }

});


var cond = true;
this.before('READ', history, async (req) => {
    try {
        if (cond) {
            const entries = [];
            const no = req.params[0].Enquiry_no;
            const resp = await c4re.get(`/dev/supplier-enquiry?userid=einvoiceportal@gmail.com&enquiry_no=${no}`);
            cds.tx(req).run(DELETE(history));
            const space1 = resp.body.history;
            space1.forEach(space => {
                entries.push({
                    Enquiry_no: `${no}`,
                    Comments: `${space.supplier_enquiry}`,
                    img: 'https://peol-technologies-private-limited-provider-oxb1v9j3-emt39a88c4f.cfapps.us20.hana.ondemand.com/assets/images/User3.png' 
                });
            });
            await cds.tx(req).run(INSERT.into(history).entries(entries));
            cond = false;
        }
        return req;
    } catch (err) {
        req.error(500, err.message);
    }
});



    this.before('CREATE', 'Files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/catalog/Files(${req.data.ID})/content`
    });

    
    this.before('CREATE', 'attachments', req => {
        debugger
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/catalog/attachments(${req.data.ID})/content`;
        
    });



//===========================update invoice assignment===========================================
this.on('UPDATE', New, async (req) => {
    try {
        const selectedName = req.data.assign_inv_to;

        // const assignmentData = fetchAssignmentData(selectedName);
        const data = await cds.tx(req).run(SELECT.from(asgn_inv_to).where({ name: selectedName }).columns(['id', 'name', 'is_group']));

        const payload = {

           
        };

        const externalServiceURL = '/dev/invoice-assignment?userid=einvoiceportal@gmail.com';

        const response = await c4re.post(externalServiceURL, payload);


        return "Assignment completed successfully";
    } catch (err) {
        req.error(500, err.message);
    }
});



this.on('READ', 'New.drafts', async (req, next) => {
    if(req.data.Gst_Perc != null)
    {
    const invo_no = req.params[0].invoice_no;
    const data1 = req.data.Gst_Perc;
    const data2 = data1.split(' ');
    const data3 = data2[0];
    const halfData3 = parseFloat(data3) / 2;
    const combinedString = `${data3} SGST: ${halfData3}% CGST: ${halfData3}%`;
    console.log(combinedString);
    const updatedone = await UPDATE(item_new.drafts).set({GST_Per : combinedString}).where({invoice : invo_no});
    var modifiedparent = await SELECT.from (item_new.drafts).where({invoice : req.data.invoice_no});
    console.log('done');
    }
    return next();
});

this.on('READ','New.drafts', async (req, next) => {
    if(req.data.discount_per != null)
    {   
     const dis_per = req.data.discount_per;
        const modifiedparent1 = await SELECT.from (item_new.drafts).where({invoice : req.data.invoice_no});
        let totalAmount = 0, tot_disc_amt = 0;
        for(var arr of modifiedparent1){
            console.log(arr);
            const qtyArray = arr.Qty.split(/\D+/);
            let accumulatedFinal2 = 0;
            const qty = parseFloat(qtyArray[0] || '0');
            const final1 = arr.Unit_Price * qty;
            const final2 = final1 * (dis_per / 100);
            tot_disc_amt += final2;
            accumulatedFinal2 += final2;
            const concatenatedFinal2 = `(${dis_per}) ${(final2).toFixed(2).toString().replace(/\.?0+$/, '')}`;
            const taxable = final1-final2;
            const gstString = arr.GST_Per;
            const tax_amt1 = parseInt(gstString.match(/\d+/));
            const tax_amt2 = (taxable * (tax_amt1 / 100)).toFixed(2);
            const scgst = `${tax_amt2} sgst : ${(tax_amt2/2).toFixed(2)} cgst : ${(tax_amt2/2).toFixed(2)}`;
            const tot_amt = parseFloat(taxable) + parseFloat(tax_amt2);
            totalAmount += parseFloat(tot_amt);
            console.log();
            await UPDATE(New.drafts).set({amount : totalAmount, taxable_amount : totalAmount, total_discount_amount : tot_disc_amt, tds_tot_amt : tds}).where({invoice_no : req.data.invoice_no});
            await UPDATE(item_new.drafts).set({Disc_Per : concatenatedFinal2, Taxable_Amt : taxable, Total_Amt : taxable, Tax_Amt : tax_amt2,Tax_Amt : scgst}).where({id : arr.id });
            let finmodifiedparent1 = await SELECT.from (item_new.drafts).where({invoice : req.data.invoice_no});
            console.log(modifiedparent1);
        }
    //     console.log(" aa")
    //     const val = req.data.discount_per;
    //     const invo_no = req.params[0].invoice_no;
    //    console.log("started"); 
    //    const discount1 = `(${val}) ${val * 4.04}`;
    //    const updatedone = await UPDATE(New.drafts).set({total_discount_amount : discount1}).where({invoice_no : invo_no});
    //    modifiedparent1 = await SELECT.from (New.drafts).where({invoice_no : req.data.invoice_no});
    //    console.log("done");
    }

    else if(req.data.tds_per != null)
    {
        const modifiedNew = await SELECT.from (New.drafts).where({invoice_no : req.data.invoice_no});
         //value from tds dropdown
         const updateamt = modifiedNew[0].amount
         var tds_val = req.data.tds_per;
         const extractedtds = (tds_val.match(/\d+(\.\d+)?/g) || []).map(Number);
         console.log();
         const tds = (parseFloat(extractedtds) * 3.1);
         //update total amunt after selecting tds dropdown
         const tot_tds = parseFloat(updateamt)-parseFloat(tds);
         console.log(tot_tds);
         await UPDATE(New.drafts).set({amount : tot_tds}).where({invoice_no : req.data.invoice_no});
         const modifiedNew11 = await SELECT.from (New.drafts).where({invoice_no : req.data.invoice_no});
    }
    return next();

});


 


});