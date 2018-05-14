// pages/index2/index2.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: app.data.userName,
    teleNumber: app.data.teleNumber,
    userType: app.data.userType,
    condition: true  //判断按钮的显示
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
    if(app.data.judge == true)
    {
      this.setData({
        condition:false
      })
    }else{
      this.setData({
        condition: true
      })
    }
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
      wx.navigateTo({
        url: '../personal/personal',
      })
  },

  register: function(){
      wx.navigateTo({
        url: '../personal/signIn/signIn',
      }) 
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
        title: '重启页面生效!',
      })
    }
  },

  hehe:function(){
    var that = this;
    console.log(that.data.condition);
    console.log(app.data.judge);
  }
})