Ext.define('nicomms.view.emp.EmpListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empList',
    empListRowChange : function(btn){
        var grid = btn.up("grid");
        var row = grid.getSelection()[0]; //선택한 행 객체
        var thisdidx = btn.lastFocused.rowIdx;
        var idx = row.get("IDX");
        var tabs=grid.up("viewport").down("tabpanel");
        var menuTitle   ='사원등록';
        var isTabExist  = false;
        var items       = tabs.items.items;

        for (var i = 0; i < items.length ; i++) {
            // alert(items[i].title+"/"+i+"/"+menuTitle);
            if (items[i].title == menuTitle){
                isTabExist=true;
                break;
            }else{
                isTabExist=false;
            }
        }

        if (!isTabExist){
            var dynamictab = tabs.add({
                xtype: 'empReg',
                itemId:'empReg',
                closable : true
            });
            tabs.setActiveTab(dynamictab);
        }else{

            tabs.setActiveTab(tabs.child('#empReg'));
        }
    },
    cdbc: function(obj, td, cellIndex, rec, tr, rowIndex, e, eOpt){
        alert('cdbc');

        var me=this;
        // var view = me.getValue();
        var viewModel = me.getViewModel();


        var row = obj.getSelection()[0]; //선택한 행 객체
        var tabs= obj.up("viewport").down("tabpanel");
        var menuTitle   ='사원등록';
        var isTabExist  = false;
        var items       = tabs.items.items;

        for (var i = 0; i < items.length ; i++) {
            // alert(items[i].title+"/"+i+"/"+menuTitle);
            if (items[i].title == menuTitle){
                isTabExist=true;
                break;
            }else{
                isTabExist=false;
            }
        }

        if (!isTabExist){
            var dynamictab = tabs.add({
                xtype: 'empReg',
                itemId:'empReg',
                closable : true
            });
            tabs.setActiveTab(dynamictab);
        }else{

            tabs.setActiveTab(tabs.child('empReg'));
        }
    }

});