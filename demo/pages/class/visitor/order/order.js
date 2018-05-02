//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list: [],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../order/scene/scene?id='+id
    })
  },
  getSceneLists: function () {
    var that = this;
    wx.request({
      url: "https://qcloud.bmy.com.cn/api/voices/classify",
      success: function (data) {
        console.log(data.data);
        that.setData({
          list: data.data
        })
      },
      fail: function () {
        wx.showLoading({
          title: '数据加载错误，请刷新再试！'
        })
      }
    });
  },
  onLoad: function () {
    var that = this;
    this.getSceneLists();
    wx.showLoading({
      title: '加载中'
    })
  },
  onReady: function () {
    setTimeout(function () {
      wx.hideLoading();
    }, 500)

  }
})
