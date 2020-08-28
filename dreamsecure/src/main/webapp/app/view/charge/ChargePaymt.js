/**
 * Created by bluej on 2020-08-18.
 */
Ext.define('nicomms.view.charge.ChargePaymt', {
    extend: 'Ext.panel.Panel',
    xtype: 'chargePaymt',
    width:500,
    height:500,
    title:'청구수납',
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
    			api:{
    				read:"/getEmpPage",
    				update:"/updateEmp"
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