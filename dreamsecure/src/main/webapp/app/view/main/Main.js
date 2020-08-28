/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('nicomms.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    layout:'border',
    controller:'main',
    style:'background:#d3e1f1;',
    items:[{
        xtype:'panel',
        region:'north',
        style:'background:#d3e1f1;',
        border:true,
        title:'',
        header:false,
        tbar:{
        	height:50,
        	style:'background:#d3e1f1;'
        },
        items:[{
        	xtype:'toolbar',
        	items:[{
        		xtype:'label',
                html:'<h2>  Rental  </h2>'
        	},'->',{
        		xtype:'button',
        		text:'~고객님',
        		menu:[{
        			text:'비밀번호변경'
        		},{
        			text:'로그아웃'
        		}]
        	}]	
        }]      
    },{
        xtype:'panel',
        style:'background:#d3e1f1;',
        border:true,
        split:true,
        width:200,
        region:'west',
        layout:'fit',
        items:[{
            xtype:'treelist',
            listeners:{
                selectionchange:'menuChange',
                itemclick:function(btn){
                    console.log('itemClick');
                    // alert("itemclick");
                }
            },
            store:{
                root:{
                    expanded:true,
                    children:[{
                            text:'게시판',
                            //page:'board',
                            // iconCls:'x-fa fa-product-hunt',
                            leaf:true
                    },{
                            text:'인사관리',
                            // iconCls:'x-fa fa-users',
                            expanded:true,
                            slectable:false,
                            children:[{
                                text:'사원현황',
                                page:'empList',
                                leaf:true
                            },{
                                text:'사원등록',
                                page:'empReg',
                                leaf:true
                            }]
                    },{
                        text:'자산관리',
                        page:'asset',
                        // iconCls:'x-fa fa-gift',
                        leaf:true
                    },{
                        text:'청구수납',
                        page:'chargePaymt',
                        // iconCls:'x-fa fa-product-hunt',
                        leaf:true
                    },{
                        text:'계약관리',
                        page:'contMng',
                        leaf:true
                    },{
                        text:'시스템',
                        page:'system',
                        leaf:true
                    },{
                        text:'건설장비',
                        page:'eqmt',
                        leaf:true
                    }]
                }
            }
        }],
        fbar:{
        	height:30,
        	style:'background:#d3e1f1;'
        }
    },{
        xtype:'tabpanel',
        style:'background:#d3e1f1;',
        border:true,
        region:'center',
        flex:1,
        layout:'fit',
        items:[{
            xtype:'board'
        }],
        fbar:{
        	height:30,
        	style:'background:#d3e1f1;'
        }
    }],

});