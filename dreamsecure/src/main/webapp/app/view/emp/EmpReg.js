Ext.define('nicomms.view.emp.EmpReg', {
    extend: 'Ext.form.Panel',
    xtype:'empReg',
    requires: [
        'Ext.layout.container.HBox'
    ],
    title:'사원등록',
    controller: 'empReg',
    viewModel: 'empReg',
    margin : 15,
    items : [{
        xtype:'toolbar',
        border:true,
        items:[{
            xtype:'button',
            glyph:'f15b@FontAwesome'
        },{
            xtype:'button',
            glyph:'xf002@FontAwesome'
        },{
            xtype:'button',
            glyph:'f0c7@FontAwesome'
        }]
    },{
        xtype : 'toolbar',
        border:true,
        // style:{
        //     borderColor:'blue',
        //     borderStyle:'solid'
        // },
        margin: '5px',
        items : [{
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
        }]
    }, {
            xtype:'panel',
            itemId:'horizonPanel',
            border:true,
            margin:'5px',
            layout:{
                type: 'hbox',
                align: 'stretch'
            },
            items:[{
            xtype:'panel',
                itemId:'panel1',
            flex:1,
                align:'stretch',
                margin:'10px',
            items:[{
                xtype:'textfield',
                fieldLabel:'사원번호',
                labelAlign: 'right'
            },{
                xtype:'combobox',
                fieldLabel:'성',
                labelAlign: 'right'
            },{
                xtype:'datefield',
                fieldLabel:'생년월일',
                format:'Y-m-d',
                submitFormat:'Y-m-d',
                renderer : Ext.util.Format.date(new Date('2020-08-19'), "Y-m-d"),
                labelAlign: 'right'
            },{
                xtype:'textfield',
                width:'80%',
                fieldLabel:'전화',
                labelAlign: 'right'
            },{
                xtype:'textfield',
                fieldLabel:'이메일',
                width:'100%',
                labelAlign: 'right'
            },{
                xtype:'textarea',
                fieldLabel:'주소',
                width:'100%',
                height:'30px',
                labelAlign: 'right'
            },{
                xtype:'combobox',
                fieldLabel:'사원구분',
                labelAlign: 'right'
            },{
                xtype:'datefield',
                fieldLabel:'계약만료일',
                format:'Y-m-d',
                submitFormat:'Y-m-d',
                renderer : Ext.util.Format.date(new Date('2020-08-19'), "Y-m-d"),
                labelAlign: 'right',
                editable: false,
                enableKeyEvents: false,
            }, {
                xtype: 'datefield',
                fieldLabel: '입사일',
                format: 'Y-m-d',
                submitFormat: 'Y-m-d',
                renderer: Ext.util.Format.date(new Date('2020-08-19'), "Y-m-d"),
                labelAlign: 'right'
            },{
                xtype:'textfield',
                fieldLabel:'소속업체명',
                labelAlign: 'right'
            },{
                xtype:'combobox',
                fieldLabel:'직급',
                labelAlign: 'right'
            },{
                xtype:'combobox',
                fieldLabel:'직책',
                labelAlign: 'right'
            },{
                xtype:'textfield',
                fieldLabel:'최종학력',
                labelAlign: 'right'
            },{
                xtype:'numberfield',
                fieldLabel:'정규시간임금',
                labelAlign: 'right'
            },{
                xtype:'numberfield',
                fieldLabel:'시간외임금',
                labelAlign: 'right'
            }]
        },

            {
                xtype:'panel',
                flex:1,
                margin:'10px',
                items:[{
                    xtype:'textfield',
                    fieldLabel:'이름',
                    labelAlign: 'right',
                    alias:'name',
                    itemId:'name',
                    value:'이숙배'
                },{
                    xtype:'textfield',
                    fieldLabel:'종교',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'핸드폰',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'비상전화',
                    labelAlign: 'right'
                },{
                    xtype:'combobox',
                    fieldLabel:'계약형태',
                    labelAlign: 'right'
                },{
                    xtype:'combobox',
                    fieldLabel:'재계약여부',
                    labelAlign: 'right'
                },{
                    xtype:'panel',
                    layout:{
                        type: 'hbox'
                    },
                    items:[{
                        xtype: 'datefield',
                        fieldLabel: '퇴사일',
                        format: 'Y-m-d',
                        submitFormat: 'Y-m-d',
                        value: Ext.Date.add(new Date(), Ext.Date.DAY, -1),
                        // renderer: Ext.util.Format.date(new Date('2020-08-19'), "Y-m-d"),
                        labelAlign: 'right'
                    },{
                        xtype:'button',
                        text:'퇴사처리',
                        handler: function(){
                            alert('퇴사처리');
                        }
                    }]

                },{
                    xtype:'textfield',
                    fieldLabel:'소속업체담당',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'소속부서',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'담당업무',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'학교명',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'근무시작시간',
                    labelAlign: 'right'
                },{
                    xtype:'numberfield',
                    fieldLabel:'휴일근무임금',
                    labelAlign: 'right'
                }]
            },

            {
                xtype:'panel',
                flex:1,
                margin:'10px',
                items:[{
                    xtype:'combobox',
                    fieldLabel:'팀명',
                    labelAlign: 'right'
                },{
                    xtype:'combobox',
                    fieldLabel:'국적',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'팩스',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'소속업체연락처',
                    labelAlign: 'right'
                },{
                    xtype:'combobox',
                    fieldLabel:'근무상태',
                    labelAlign: 'right'
                },{
                    xtype:'combobox',
                    fieldLabel:'근무종료시간',
                    labelAlign: 'right'
                },{
                    xtype:'textfield',
                    fieldLabel:'일요근무임금',
                    labelAlign: 'right'
                }]
            }]
    }]
});
