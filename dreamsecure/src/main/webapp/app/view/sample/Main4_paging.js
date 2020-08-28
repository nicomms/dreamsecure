/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('nicomms.view.sample.Main4_paging', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    width: 500,
    height: 500,
    layout:'fit',
    items:[{
    	xtype:'grid',
    	columns:[{ 
	    	text:'a', 
	    	flex:1,
	    	dataIndex:'si'
    	},{
    		text:'b',
    		flex:1,
    		dataIndex:'gungu'
    	},{
    		text:'c',
    		flex:1,
    		dataIndex:'dong'
    	}],
  	
    	store:{
    		autoLoad:true,
    		pageSize:5,
    		fields:['si','gungu','dong'],
    		proxy:{
    			type:'ajax',
    			url: "http://localhost:8080/getAddressPage",
    			reader:{
    				type:'json',
    				rootProperty:'data',
    				totalProperty:'totalcount'   				
    			}
    		}
    	},
    	bbar:{
    		xtype:'pagingtoolbar',
    		displayInfo:true
    	}
  	
    }]

});
