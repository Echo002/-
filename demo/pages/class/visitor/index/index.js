// pages/class/visitor/map/map.js
var app = getApp()
Page({

  /*
   * 页面的初始数据
   */
  data: {
  },

  map:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  order: function (){
    wx.navigateTo({
      url: '../order/order',
    })
  },
  tools:function(){
    wx.navigateTo({
      url: '../tools/tools',
    })
  }
})
