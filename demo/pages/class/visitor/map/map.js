// pages/class/visitor/map/map.js
var app = getApp()
Page({

  /*
   * 页面的初始数据
   */
  data: {
    markers:[{
      latitude:36.9139570000,
      longitude:116.4040560000,
      name:'天安门',
      desc:'tam'
      }]
  },

  map:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28
        })
      }
    })
  }
})
