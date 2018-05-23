var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    num: 0,
    DeleteHidden: true,
    userName: '',
    userTele: ''
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
    var that = this;
    wx.request({
      url: 'https://api.wxappclub.com/list',
      data: {
        appkey: '3f3cudnklthkqbljj4f6c7s7938k7kli',
        type: 'default'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.success) {
          that.setData({
            list: res.data.result,
          })
        that.setData({
          num: that.data.list.length
        });
        console.log(res.data);
        console.log(that.data.num);
        for (var i = 0; i < that.data.num; i++) {
          var strs = res.data.result[i].value.split("@");
          console.log(strs);
          res.data.result[i].content = strs[0];
          res.data.result[i].time = strs[1];
        }
          that.setData({
            list: res.data.result,
          })
        };
      }
    });
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
    wx.redirectTo({
      url: 'feedback',
    })
  },

  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
        wx.hideToast()
        console.log(res, new Date())
      }
    })
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

  }
})