// pages/class/leader/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  operate: function(){
    wx.navigateTo({
      url: '../operate/operate',
    })
  },

  rail: function () {
    wx.navigateTo({
      url: '../rail/rail',
    })
  },

  notice: function(){
    wx.navigateTo({
      url: '../notice/notice',
    })
  },

  save: function () {
    wx.navigateTo({
      url: '../../save/tutorial/tutorial',
    })
  },

  feedback: function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  }
})