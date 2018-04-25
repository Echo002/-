var app = getApp()
Page({
  data: {
    motto: '请输入您的用户名和密码：',
    userName: '',
    userPassword: '',
    id_token: '',//方便存在本地的locakStorage  
    response: '',//存取返回数据  
    items: [
      { name: 'dy', value: '我是导游' },
      { name: 'yk', value: '我是游客' },
    ]
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
  },
  logIn: function () {
    wx.showToast({
      title: '登录功能待完善！',
      duration: 2000
      /*
      var that = this
      wx.request({
      url: 'http://localhost:8000/admin',
      data: {
        username: this.data.userName,
        password: this.data.userPassword,
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          id_token: res.data.id_token,
          response:res
        })
        try {
          wx.setStorageSync('id_token', res.data.id_token)
        } catch (e) {
        }
        wx.navigateTo({
          url: '../components/welcome/welcome'
        })
        console.log(res.data);
      },
      fail: function (res) {
        console.log(res.data);
        console.log('is failed')
      }
      })
      */
    }),
    wx.navigateTo({
      url: '../class/visitor/map/map',
    })
  },
  signIn:function(){
    wx.navigateTo({
      url: 'signIn/signIn',
    })
  }
})  