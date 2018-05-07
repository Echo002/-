// pages/personal/signIn/signIn.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {name:'dy', value:'我是导游'},
      {name:'yk',value:'我是游客'},
    ],
    name: '',
    teleNumber: '',
    teleNumber_check: '',
    userType:'',            //判断用户类别
    //submit_data: 'demo',     //整合的用户信息
    checked: true            //是否重名
  },

  userNameInput:function(e){
    this.setData({
      name: e.detail.value
    })
  },

  userTeleInput:function(e){
    this.setData({
      teleNumber: e.detail.value
    })
  },

  userTeleInpuSure:function(e){
    //teleNumber_check
    this.setData({
      teleNumber_check: e.detail.value
    })  
  },

  //用来判断注册用户的类型
  radiochange:function(e){
    this.setData({
      userType: e.detail.value
    })
  },
  logIn:function(){
    var that = this
    //检查是否提交合理的用户信息
    console.log('注册提交按钮按下');
    if(this.data.name == '' || this.data.teleNumber == '' || this.data.userType =='' || this.data.teleNumber_check == '')
    {
      wx.showToast({
        title: '请输入完整信息！',
        duration: 3000
      })
      return;
    }else{
      //检查两次输入的电话号码是否一致
      if (this.data.teleNumber != this.data.teleNumber_check)
      {
        wx.showToast({
          title: '电话输入不一致！',
          duration: 3000
        })
        return;
      }else{
        //this.data.submit_data = this.data.name + "@" + this.data.teleNumber;
        //console.log(this.data.submit_data);
        console.log(this.data.userType);
        //判断是否有重复的姓名和密码
        wx.request({
          url: 'https://api.wxappclub.com/match',
          data: {
            appkey: '2tm48ywtju6fiadeqt23ef25u0xuxkkl',
            key: that.data.name,
            value: that.data.teleNumber,
            type: that.data.userType
          },
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            if (res.data.success) {
                that.setData({
                  checked:res.data.result
                });
                console.log(that.data.checked);
                if (that.data.checked == false) {
                  wx.request({
                    url: 'https://api.wxappclub.com/put',
                    data: {
                      appkey: '2tm48ywtju6fiadeqt23ef25u0xuxkkl',
                      key: that.data.name,
                      value: that.data.teleNumber,
                      type: that.data.userType
                    },
                    header: {
                      'Content-Type': 'application/json'
                    },
                    success: function (res) {
                      wx.showToast({
                        title: '注册成功！',
                        duration: 3000
                      })
                    }
                  });
                  //根据用户类别不同来跳转到不同的面板
                  if (that.data.userType == 'yk')
                    wx.redirectTo({
                      url: '../../class/visitor/map/map',
                    });
                    else
                    wx.redirectTo({
                      url: '../../class/leader/index/index',
                    })
                } else {
                  wx.showToast({
                    title: '有重名条目！',
                    duration: 3000
                  });
                  return;
                }
            }
          }
        });
      }
    }
  }
})