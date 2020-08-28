Ext.define('nicomms.view.emp.EmpList', {
    extend: 'Ext.grid.Panel',
    xtype:'empList',
    title:'사원현황',
    controller: 'empList',
    viewModel: 'empList',
    plugins : 'cellediting',
    columnLines : true,
    tbar : [{
        xtype : 'combo',
        editable : false,
        displayField : 'key',
        valueField : 'value',
        queryMode : 'local',
        value : 'memberId',
        store : {
            fields : ['key','value'],
            data : [{
                key : '사원번호',
                value : 'memberId'
            },{
                key : '이름',
                value : 'memberNm'
            }]
        }
    },{
        xtype : 'textfield',
        emptyText : '검색어를 입력하세요'
    },{
        xtype : 'button',
        text : '검색'
    }],
    columns : [{
        xtype : 'rownumberer'
    },{
        text : '아이디',
        flex : 1,
        dataIndex : 'memberId'
    },{
        text : '이름',
        flex : 1,
        dataIndex : 'memberNm',
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '주소',
        flex : 1,
        dataIndex : 'memberAddr',
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '연락처',
        flex : 1,
        dataIndex : 'memberPhone',
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '가입일',
        flex : 1,
        dataIndex : 'memberRgstrDt'
    }],
    bind : {
        store : '{memberList}'
    },
    listeners : {
        boxready : function(){
            alert('boxready');
        },
        celldblclick : 'cdbc',
        beforeedit : function(f, c){
            //편집 전 수행하는 이벤트
            alert('beforeedit');
        }
    }
});