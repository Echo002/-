// pages/class/leader/operate/operate.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    num: 0,
    DeleteHidden:true,
    userName:'',
    userTele:''
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
      url: 'operate',
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
  
  },

  actionSheetTap:function(e){
    var that = this;
    that.setData({
      userName: e.currentTarget.dataset.username,
      userTele: e.currentTarget.dataset.replyPhone
    })
    wx.showActionSheet({
      itemList: ['拨打电话', '删除用户'],
      success: function (e) {
        if(e.tapIndex == 0)
          wx.makePhoneCall({
            phoneNumber: that.data.userTele
            });
        if (e.tapIndex == 1){
          that.setData({
            DeleteHidden: false,
          });
        }
      }
    })
  },

  delete:function(e){
    var that = this;
    that.setData({
      cacheClearHidden: true
    })
    wx.request({
      url: 'https://api.wxappclub.com/del',
      data: {
        appkey: '2tm48ywtju6fiadeqt23ef25u0xuxkkl',
        key: that.data.userName,
        type:'yk'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if(res.data.result == 1)
        wx.showToast({
          title: '删除成功！',
        });
        that.setData({
          DeleteHidden: true
        });
        wx.startPullDownRefresh();
      }
    });
  },

  cancel:function(){
    this.setData({
      DeleteHidden: true
    });
  }
})