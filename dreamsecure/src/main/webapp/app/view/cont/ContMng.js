/**
 * Created by bluej on 2020-08-18.
 */
Ext.define('nicomms.view.cont.ContMng', {
    extend: 'Ext.Container',
    xtype: 'contMng',
    width: 500,
    height:500,
    title:'계약관리',
    border:true,
    layout:'fit',
    items: [{
        xtype:'grid',
        plugins:'cellediting',
        columns:[{
        	text:'사번',
        	dataIndex:'id',
        	editor:{
        		xtype:'textfield'
        	}
        },{
        	text:'이름',
        	dataIndex:'empNm',
        	editor:{
        		type:'textfield'
        	}	
        },{
        	text:'핸드폰',
        	dataIndex:'empMob',
        	editor:{
        		type:'textfield'
        	}
        }],
        store:{
        	autoLoad:true,
    		pageSize:5,
        	fields:['id','empNm','empMob'],
        	proxy:{
        		type:'ajax',
        		api:{
        			create:"http://localhost:8087/insert",
        			read:"http://localhost:8087/getEmpPage",
        			update:"http://localhost:8087/update",
        			destroy:"http://localhost:8087/delete"
        		},
        		reader:{
        			type:'json',
        			rootProperty:'data',
        			totalProperty:'totalCount'
        		},
        		writer:{
        			type:'json',
        			rootProperty:'data',
        			writeAllFields:true,
        			encode:true
        		}
        	}
        },
        tbar:[{
        	xtype:'button',
        	text:'등록',
        	handler:function(btn){
        		//1.store찾기
        		//ExtJs -up(컴포넌트 및 or itemId)/ down
        		var store=btn.up("grid").getStore();
        		var newRec={
        				si:'',
        				gungu:'',
        				dong:''
        		}
        		store.add(newRec);
//        		store.insert(0,newRec);
        	}
        },{
        	xtype:'button',
        	text:'삭제',
        	handler:function(btn){
        		var store=btn.up("grid").getStore();
        		var removeRec=btn.up("grid").getSelection();
        		store.remove(removeRec);
        	}
        },{
        	xtype:'button',
        	text:'적용',
        	handler:function(btn){
        		var store=btn.up("grid").getStore();
        		store.sync({
        			callback:function(){
        				store.reload();
        			}
        		});
        	}
        }],
        bbar:{
        	xtype:'pagingtoolbar',
        	displayInfo:true
        }
    }]
});