/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('nicomms.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.main',
    menuChange:function(obj, rec){
        if (rec.isLeaf()){
            
            var tabs=obj.up("viewport").down("tabpanel");
            var menuTitle   =rec.get('text');
            var isTabExist  = false;
            var items        = tabs.items.items;
            for (var i = 0; i < items.length ; i++) {
                // alert(items[i].title+"/"+i+"/"+menuTitle);
                if (items[i].title == menuTitle){
                      isTabExist=true;
                      break;
                }else{
                    isTabExist=false;
                }
            }

            // alert(isTabExist+"/"+tabs.items.length);

            if (!isTabExist){
                var dynamictab = tabs.add({
                    xtype:rec.get("page"),
                    closable : true
                });
                tabs.setActiveTab(dynamictab);
            }
        }

    }
});
