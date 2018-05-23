//index.js
//获取应用实例

var util = require('../../../../../utils/util.js')

var app = getApp()
Page({   
  data: { 
    userInfo: {},
    curNameList: [
    [
        {
            "ExtensionData": {},
            "amount": 0,
            "cn": "澳门元",
            "country": "澳门元",
            "en": "Macau Pataca",
            "jp": "マカオ パタカ",
            "ko": "마카오 파타카",
            "name": "MOP",
            "order": 0,
            "rate": 86.272
        },
        {
          "ExtensionData": {},
          "amount": 0,
          "cn": "泰铢",
          "country": "泰铢",
          "en": "Thai Baht",
          "jp": "タイ バーツ",
          "ko": "태국 바트",
          "name": "THB",
          "order": 0,
          "rate": 19.451
        },
		{
            "ExtensionData": {},
            "amount": 0,
            "cn": "港元",
            "country": "港元",
            "en": "Hong Kong Dollar",
            "jp": "香港ドル",
            "ko": "홍콩 달러",
            "name": "HKD",
            "order": 0,
            "rate": 88.853
        }
    ],
    [
        {
            "ExtensionData": {},
            "amount": 0,
            "cn": "韩元",
            "country": "韩元",
            "en": "South-Korean Won",
            "jp": "韓国ウォン",
            "ko": "대한민국 원",
            "name": "KRW",
            "order": 0,
            "rate": 0.585
        },
        {
            "ExtensionData": {},
            "amount": 0,
            "cn": "加拿大元",
            "country": "加拿大元",
            "en": "Canadian Dollar",
            "jp": "カナダ ドル",
            "ko": "캐나다 달러",
            "name": "CAD",
            "order": 0,
            "rate": 512.341
        },
		{
            "ExtensionData": {},
            "amount": 0,
            "cn": "美元",
            "country": "美元",
            "en": "US Dollar",
            "jp": "米国ドル",
            "ko": "미국 달러",
            "name": "USD",
            "order": 0,
            "rate": 689.15
        }
    ],
    [
        {
            "ExtensionData": {},
            "amount": 0,
            "cn": "欧元",
            "country": "欧元",
            "en": "Euro",
            "jp": "ユーロ",
            "ko": "유로",
            "name": "EUR",
            "order": 0,
            "rate": 733.45
        },
		{
            "ExtensionData": {},
            "amount": 0,
            "cn": "人民币",
            "country": "人民币",
            "en": "Chinese Yuan Renminbi",
            "jp": "中国 人民元",
            "ko": "중국 위안",
            "name": "CNY",
            "order": 0,
            "rate": 0
        },
        {
            "ExtensionData": {},
            "amount": 0,
            "cn": "日元",
            "country": "日元",
            "en": "Japanese Yen",
            "jp": "日本円",
            "ko": "일본 엔",
            "name": "JPY",
            "order": 0,
            "rate": 6.235
        }
    ],
    [
		{
            "ExtensionData": {},
            "amount": 0,
            "cn": "台币",
            "country": "台币",
            "en": "Taiwan Dollar",
            "jp": "台湾ドル",
            "ko": "대만 위안 달러",
            "name": "TWD",
            "order": 0,
            "rate": 21.536
        },
		{
            "ExtensionData": {},
            "amount": 0,
            "cn": "印度卢比",
            "country": "印度卢比",
            "en": "Indian Rupee",
            "jp": "インド ルピー",
            "ko": "인도 루피",
            "name": "INR",
            "order": 0,
            "rate": 10.12
        },
    {
      "ExtensionData": {},
      "amount": 0,
      "cn": "英镑",
      "country": "英镑",
      "en": "British Pound",
      "jp": "英国ポンド",
      "ko": "영국 파운드",
      "name": "GBP",
      "order": 0,
      "rate": 855.025
    }
    ],
],
    myMainCur: {},
    mySelectCurs: {}
  },

  bindlogoTap: function (event) {
    var that = this
    //获取用户收藏的货币
    wx.getStorage({
    key: 'mySelectCurs',
    success: function(res) {
      var oldMySelectCurs=res.data;
      console.log(res.data);
      console.info(oldMySelectCurs);
      var selectCru;
      const length = that.data.curNameList.length;
      for (let i = 0; i < length; i++) {
        var temps= that.data.curNameList[i]; 
        for (let j = 0; j < 3; j++) {
        if(temps[j].name== event.currentTarget.dataset.id)
        {
           selectCru=temps[j];
           break;
        }
      }
    }
    const length1 = oldMySelectCurs.length;
    var bool=0;
    for (let i = 0; i < length1; i++) {
    if(oldMySelectCurs[i].name==selectCru.name)
    {
      bool=1;
    }
    }
    if(bool==0 || length1==0)
    {   
      var jsonn=util.json2Form({
      "from":that.data.myMainCur.name,
      "to":selectCru.name,
      "amount":that.data.myMainCur.amount
      });
      var urll="https://wapp.talk-easy.cn/currency/getcurrencyrate?"+jsonn;
      console.info( 'urll:'+ urll);   
      wx.request( {  
        url: urll,  
        header: {  
                },  
        method: "GET",  
        success: function( res ) {
          console.log(res);                                
          selectCru.rate=res.data.rate.toFixed(2);  
          selectCru.amount=res.data.amount.toFixed(2);  
          oldMySelectCurs=[selectCru].concat(oldMySelectCurs);
          console.info( oldMySelectCurs);
          wx.setStorage({
                         key:"mySelectCurs",
                         data:oldMySelectCurs
                        }),
          wx.navigateBack({
             delta: 1, // 回退前 delta(默认为1) 页面  .toFixed(2)
             success: function(res){},
               fail: function() {},
               complete: function() {}
        })  
     },
         fail: function( res ) { 
           console.error( '网络请求失败' ); 
           console.error( res );    
          console.error( res.data );    
         },
         complete: function( res ) {  
         if( res == null || res.data == null ) {  
             return;  
             } 
             }  
             }) 
             }   
             else{
                  wx.navigateBack({
                  delta: 1, // 回退前 delta(默认为1) 页面  .toFixed(2)
                  success: function(res){},
                  fail: function() {},
                  complete: function() {}
                  })   
                  }     
            } 

      })
    },

onLoad: function () {
    var that = this
    //获取用户存储的兑换金额
    wx.getStorage({
          key: 'myMainCur',
          success: function(res) {
              that.setData({    
                  myMainCur: res.data    
                }) 
            } 
        });
  },
})