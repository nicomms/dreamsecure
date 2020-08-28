/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('nicomms.view.board.Board', {
    extend: 'Ext.panel.Panel',
    xtype: 'board',
    width:500,
    height:500,
    title:'게시판',
    items:[{
        xtype:'button',
        text:'게시판관리'
    }]
});