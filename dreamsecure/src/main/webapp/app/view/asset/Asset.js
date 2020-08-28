Ext.define('nicomms.view.asset.Asset', {
    extend: 'Ext.panel.Panel',
    xtype: 'asset',
    width:500,
    height:500,
    title:'자산관리',
    controller:'asset',
    viewModel:'asset',
    columnLines:true,
    items:[{
        xtype:'button',
        text:'자산관리'
    }]
});
