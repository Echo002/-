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
    wx.navigateTo({
      url: '../class/visitor/map/map',
    })
  },
  signIn:function(){
    wx.redirectTo({
      url: 'signIn/signIn',
    })
  }
})  