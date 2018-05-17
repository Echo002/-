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
    condition: true,  //判断按钮的显示
    avatarUrl: "",
    nickName: "",
    winWidth: "",
    cacheClearHidden: true,
    userTypeImg: "../../images/userImg/01.png"
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
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth
        });
      }
    });

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
        that.setData({ userTypeImg: "../../images/userImg/03.png"});
        break;
      }
      case 'yk':{
        that.setData({ userType: '游客', });
        that.setData({ userTypeImg: "../../images/userImg/02.png" });
        break;
      }
      default:{
        that.setData({ userType: '空', });
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
      app.data.teleNumber = '空';
      app.data.judge = false;
      app.data.userType = '请登录或注册';
      wx.showToast({
        title: '重启页面生效!',
      })
    }
  },

  //clear
  clearCache: function () {
    this.setData({
      cacheClearHidden: false
    })
  },
  cancel: function () {
    this.setData({
      cacheClearHidden: true
    })
  },
  beginClear: function () {
    this.setData({
      cacheClearHidden: true
    })
    wx.showLoading({
      title: '清理中',
      mask: true
    })

    var cacheHubNum = -1
    var cacheHubIndex = -1
    var cacheHubNumObj = wx.getStorageSync("cacheHubNum")
    if (typeof (cacheHubNumObj) == 'number') {
      cacheHubNum = cacheHubNumObj
    }
    var cacheHubIndexObj = wx.getStorageSync("cacheHubIndex")
    if (typeof (cacheHubIndexObj) == 'number') {
      cacheHubIndex = cacheHubIndexObj
    }
    if (cacheHubNum > -1) {
      for (var i = 0; i <= cacheHubNum; i++) {
        wx.removeStorageSync('oldMsgs_' + i)
      }
    }
    wx.setStorageSync('cacheHubNum', -1)
    wx.setStorageSync('cacheHubIndex', -1)

    // 设置全局清理标识
    app.globalData.isCleaned = true

    wx.hideLoading()
    wx.showToast({
      title: '清理完成',
      icon: 'success',
      duration: 1000
    })
  },

  police:function(){
    wx.makePhoneCall({
      phoneNumber: '110',
    })
  }
})