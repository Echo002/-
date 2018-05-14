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
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  data:{
    userName:'请登录或注册',
    teleNumber: '请登录或注册',
    judge:false,
    userType: '请登录或注册',
    condition: true  //判断按钮的显示
  }
})