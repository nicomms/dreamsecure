/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('nicomms.view.sample.Main5_rowediting', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    width: 500,
    height: 500,
    layout:'fit',
    items:[{
    	xtype:'grid',
    	plugins:'cellediting',
    	columns:[{ 
	    	text:'사번', 
	    	flex:1,
	    	dataIndex:'empId'
    	},{
    		text:'사원명',
    		flex:1,
    		dataIndex:'empNm',
    		editor:{
    			xtype:'textfield',
    			allowBlank:false
    		}
    	},{
    		text:'연락처',
    		flex:1,
    		dataIndex:'empMob',
    		editor:{
    			xtype:'textfield',
    			allowBlank:false
    		}
    	}],
  	
    	store:{
    		autoLoad:true,
    		pageSize:5,
    		fields:['empId','empNm','empMob'],
    		proxy:{
    			type:'ajax',
    			url: "http://localhost:8080/getEmpPage",
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
