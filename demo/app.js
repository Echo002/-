//app.js
App({
  onLaunch: function () {
    var temp = []
    const self = this;
    wx.getSystemInfo({
      success(res) {
        self.systemInfo = res;
      },
    });
    wx.setStorage({
      key: "mySelectCurs",
      data: temp
    }),

    wx.setStorage({
      key: "myMainCur",
      data: {
          "name": "CNY",
          "country": "中国",
          "rate": 0.0,
          "amount": 100.0,
          "en": "RMB",
          "cn": "人民币",
          "jp": "香港ドル",
          "ko": "홍콩 달러"
      }
    });

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  
  globalData: {
    
  },
  
  data:{
    userName:'用户名空',
    teleNumber: '请登录或注册',
    userType: '用户类别空',
    judge:false,
    condition: true,  //判断按钮的显示
    isCleaned: false
  }
})