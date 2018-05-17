// pages/class/leader/operate/operate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.wxappclub.com/list',
      data: {
        appkey: '2tm48ywtju6fiadeqt23ef25u0xuxkkl',
        type: 'yk'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.success) {
          that.setData({
            list: res.data.result,
          })
        };
        that.setData({
          num: that.data.list.length
        });
      }
    });
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  call:function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
    })
  }
})