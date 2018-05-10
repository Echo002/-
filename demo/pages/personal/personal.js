var app = getApp()
Page({
  data: {
    motto: '请输入您的用户名和密码：',
    userName: '',
    teleNumber: '',
    id_token: '',//方便存在本地的locakStorage  
    response: '',//存取返回数据  
    userType: '',
    teleNumber_check: false,
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
  userteleNumberInput: function (e) {
    this.setData({
      teleNumber: e.detail.value
    })
  },

  radiochange: function (e) {
    this.setData({
      userType: e.detail.value
    })
  },

  logIn: function () {
    //登录按钮按下
    var that = this
    //检查是否提交合理的用户信息
    console.log('登录提交按钮按下');
    if (this.data.userName == '' || this.data.teleNumber == '' || this.data.userType == '') {
      wx.showToast({
        title: '请输入完整信息',
        duration: 3000
      })
      return;
    } else {
      //this.data.submit_data = this.data.name + "@" + this.data.teleNumber;
      //console.log(this.data.submit_data);
      console.log(this.data.userType);
      //判断是否有重复的姓名和密码
        wx.request({
          url: 'https://api.wxappclub.com/match',
          data: {
            appkey: '2tm48ywtju6fiadeqt23ef25u0xuxkkl',
            key: that.data.userName,
            value: that.data.teleNumber,
            type: that.data.userType
          },
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            if (res.data.success) {
              that.setData({
                checked: res.data.result
              });
              console.log(that.data.checked);
              if (that.data.checked == true) {
                wx.showToast({
                  title: '登录成功！',
                  duration: 3000
                })
                app.data.judge = true;
                app.data.userType = that.data.userType;
                app.data.userName = that.data.userName;
                app.data.teleNumber = that.data.teleNumber;
                /*console.log(that.data.userName);
                console.log(app.data.userName);
                console.log(app.data.teleNumber);*/
                //根据用户类别不同来跳转到不同的面板
                if (that.data.userType == 'yk')
                  wx.redirectTo({
                    url: '../class/visitor/index/index',
                  });
                else
                  wx.redirectTo({
                    url: '../class/leader/index/index',
                  })
              } else {
                wx.showToast({
                  title: '查无此人!',
                  duration: 3000
                });
                return;
              }
            }
          }
        });
    }
  },
  signIn:function(){
    wx.redirectTo({
      url: 'signIn/signIn',
    })
  }

})  