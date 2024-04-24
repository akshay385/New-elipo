using { namee } from '../db/schema';

service CatalogService
{
    function getPdfUrl() returns LargeString;
    function getPdfUrl1() returns LargeString;
     function getPdfUrl_new() returns LargeString;
     function getPdfUrl_draft() returns LargeString;
     function getPdfUrl_rejected() returns LargeString;
      function getPdfUrl_inapp() returns LargeString;
      function getPdfUrl_sub2erp() returns LargeString;
    @odata.draft.enabled
    entity inv_assg as projection on namee.inv_assg;
    // @odata.draft.enabled
    entity item_data_for_invassign as projection on namee.item_data_for_invassign;
    entity asgn_inv_to as projection on namee.asgn_inv_to;
     @odata.draft.enabled 
    entity comments_temp as projection on namee.comments_temp;
    entity track_invoices as projection on namee.track_invoices;
    entity item_data_for_track as projection on namee.item_data_for_track;
     @odata.draft.enabled
    entity New as projection on namee.New actions
    {
      @cds.odata.bindingparameter.name : '_it'
      @Core.OperationAvailable : {$edmJson : { $Eq: [{ $Path: '_it/value1'},true]}}
      @Common.SideEffects :
      {
        TargetProperties :
        [
          '_it/ref_po_num',
          '_it/value1',
          '_it/value',
        ]
      }
      action ShowPo
      (

      );


        @cds.odata.bindingparameter.name : '_it'
              @Core.OperationAvailable : { $edmJson: { $Eq: [{ $Path: '_it/value1'},false]}}
            @Common.SideEffects : 
            {
                TargetProperties :
                [
                    '_it/ref_po_num',
                    '_it/value1',
                    '_it/value'
                ]
            }
            action HidePo
            (
            );
    };
    entity item_new as projection on namee.item_new;
     @odata.draft.enabled
    entity Draft as projection on namee.Draft actions
    {
      @cds.odata.bindingparameter.name : '_it'
      @Core.OperationAvailable : {$edmJson : { $Eq: [{ $Path: '_it/value1'},true]}}
      @Common.SideEffects :
      {
        TargetProperties :
        [
          '_it/ref_po_num',
          '_it/value1',
          '_it/value',
        ]
      }
      action ShowPo
      (

      );


        @cds.odata.bindingparameter.name : '_it'
              @Core.OperationAvailable : { $edmJson: { $Eq: [{ $Path: '_it/value1'},false]}}
            @Common.SideEffects : 
            {
                TargetProperties :
                [
                    '_it/ref_po_num',
                    '_it/value1',
                    '_it/value'
                ]
            }
            action HidePo
            (
            );
    };
    entity item2 as projection on namee.item2;
     @odata.draft.enabled
    entity Rejected as projection on namee.Rejected actions
    {
      @cds.odata.bindingparameter.name : '_it'
      @Core.OperationAvailable : {$edmJson : { $Eq: [{ $Path: '_it/value1'},true]}}
      @Common.SideEffects :
      {
        TargetProperties :
        [
          '_it/ref_po_num',
          '_it/value1',
          '_it/value',
        ]
      }
      action ShowPo
      (

      );


        @cds.odata.bindingparameter.name : '_it'
              @Core.OperationAvailable : { $edmJson: { $Eq: [{ $Path: '_it/value1'},false]}}
            @Common.SideEffects : 
            {
                TargetProperties :
                [
                    '_it/ref_po_num',
                    '_it/value1',
                    '_it/value'
                ]
            }
            action HidePo
            (
            );
    };
    entity item3 as projection on namee.item3;
    entity inapproval as projection on namee.inapproval;
    entity Approver_tab as projection on namee.Approver_tab;
    entity item4 as projection on namee.item4;
    entity Submitted_to_ERP as projection on namee.Submitted_to_ERP;
    entity erp_app_tab as projection on namee.erp_app_tab;
    entity item5 as projection on namee.item5;

    //====================search helps===============================
    entity vendor_search_help as projection on namee.vendor_search_help;
    entity Pay_ter as projection on namee.Pay_ter;
    entity Payment_Meth as projection on namee.Payment_Meth;
    entity Document_Type as projection on namee.Document_Type;
    entity company_code as projection on namee.company_code;
    entity currency as projection on namee.currency;
    entity department as projection on namee.department;
    entity gl_acc as projection on namee.gl_acc;
    entity cost_center as projection on namee.cost_center;
    entity internal_ord as projection on namee.internal_ord;
    entity tds as projection on namee.tds;
    entity gst as projection on namee.gst;
    entity material as projection on namee.material;
    @odata.draft.enabled
    entity supplier_enq as projection on namee.supplier_enq;
    entity history as projection on namee.history;
    // entity Attachments as projection on namee.Attachments;
    entity attachments as projection on namee.attachments;

    entity Files as projection on namee.Files;
    entity my_inbox as projection on namee.my_inbox;
    
}