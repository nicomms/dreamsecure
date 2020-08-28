/**
 * Created by bluej on 2020-08-18.
 */
Ext.define('nicomms.view.emp.EmpListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.empList',
    stores : {
        memberList : {
            fields : ['memberId','memberNm','memberAddr','memberPhone','memberRgstrDt'],
            data : [{
                memberId : 'hong',
                memberNm : '홍길동',
                memberAddr : '경기도 성남시 분당구 판교역로 160',
                memberPhone  : '010-1234-5678',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs',
                memberNm : '김철수',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs2',
                memberNm : '김철수2',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs3',
                memberNm : '김철수3',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs4',
                memberNm : '김철수4',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs5',
                memberNm : '김철수5',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs6',
                memberNm : '김철수6',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs7',
                memberNm : '김철수7',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs8',
                memberNm : '김철수8',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs9',
                memberNm : '김철수9',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'kimcs10',
                memberNm : '김철수10',
                memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
                memberPhone  : '010-1313-9999',
                memberRgstrDt : new Date()
            },{
                memberId : 'leejs',
                memberNm : '이진수',
                memberAddr : '도로명주소 서울특별시 관악구 관악로30길 12 봉천우성',
                memberPhone  : '010-9876-4646',
                memberRgstrDt : new Date()
            }]
        }
    }
});