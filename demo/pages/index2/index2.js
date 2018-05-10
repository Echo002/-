// pages/index2/index2.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: app.data.userName,
    teleNumber: app.data.teleNumber,
    userType: app.data.userType
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    that.setData({
      userName: app.data.userName,
      teleNumber: app.data.teleNumber
    });
    switch(app.data.userType){
      case 'dy':{
        that.setData({userType: '导游',});
        break;
      }
      case 'yk':{
        that.setData({ userType: '游客', });
        break;
      }
      default:{
        that.setData({ userType: '注册或登陆后可查看', });
      }
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  login:function(){
    if(app.data.judge == true)
    {
      wx.showModal({
        title: '提醒',
        content: '您有了登录记录，确定清除吗？',
        success: function (res) {
          if (res.confirm){
            app.data.userName = '登录或注册后可查看';
            app.data.teleNumber = '登录或注册后可查看';
            app.data.judge = false;
            app.data.userType = '登录或注册后可查看';
            wx.navigateTo({
              url: '../personal/personal',
            })
          }
        }
      })  
    }else{
      wx.navigateTo({
        url: '../personal/personal',
      })
    } 
  },

  register: function(){
    if (app.data.judge == true) {
      wx.showModal({
        title: '提醒',
        content: '您有了登录记录，确定清除吗？',
        success: function (res) {
          if (res.confirm) {
            app.data.userName = '登录或注册后可查看';
            app.data.teleNumber = '登录或注册后可查看';
            app.data.judge = false;
            app.data.userType = '登录或注册后可查看';
            wx.navigateTo({
              url: '../personal/signIn/signIn',
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../personal/signIn/signIn',
      })
    } 
  },

  service:function(){
    var app = getApp()
    if(app.data.judge == false){
      wx.showToast({
        title: '请先登录！',
        duration: 3000
      });
      return;
    }
    //登陆后如何判断用户信息？
    if (app.data.userType == 'yk')
      wx.navigateTo({
        url: '../class/visitor/index/index',
      });
    else if(app.data.userType == 'dy')
      wx.navigateTo({
        url: '../class/leader/index/index',
      })
  },

  out: function(){
    if (app.data.judge == false)
    {
      wx.showToast({
        title: '您还没有登录!',
      })
    }else{
      app.data.userName = '请登录或注册';
      app.data.teleNumber = '请登录或注册';
      app.data.judge = false;
      app.data.userType = '请登录或注册';
      wx.showToast({
        title: '重新打开页面生效!',
      })
    }
  }
})