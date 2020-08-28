/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('nicomms.view.sample.Main6_update', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    width: 500,
    height: 500,
    layout:'fit',
    items:[{
    	xtype:'grid',
    	plugins:'rowediting',
    	columns:[{ 
	    	text:'사번', 
	    	flex:1,
	    	dataIndex:'id'
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
    		autoSync:true,
    		pageSize:5,
    		fields:['id','empNm','empMob'],
    		proxy:{
    			type:'ajax',
    			//url: "http://localhost:8080/getEmpPage",
    			api:{
    				read:"http://localhost:8080/getEmpPage",
    				update:"http://localhost:8080/updateEmp"
    			},
    			reader:{
    				type:'json',
    				rootProperty:'data',
    				totalProperty:'totalcount'   				
    			},
    			writer:{
    				type:'json',
    				rootProperty:'data',
    				writeAllFields:true,
    				encode:true
    			}
    		}
    	},
    	bbar:{
    		xtype:'pagingtoolbar',
    		displayInfo:true
    	}
  	
    }]

});
