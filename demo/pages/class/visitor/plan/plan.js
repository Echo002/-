
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    num: 0,             //活动数量
    actionName:'',      //活动名称（删除用）
    userName: '',
    userTele: '',
    DeleteHidden: true,
    mapdis:true
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
    if(app.data.userType == 'dy')
    {
      that.setData({
        mapdis:false
      })
    }
    wx.request({
      url: 'https://api.wxappclub.com/list',
      data: {
        appkey: 'f7kez180klzuhm1w4ewnmjjzc7wwzjb1',
        type: 'default'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.success) {
          that.setData({
            list: res.data.result
          });
          that.setData({
            num: that.data.list.length
          });  
          for(var i =  0;i < that.data.num;i++)
          {
            var strs = res.data.result[i].value.split("@");
            console.log(strs);
            res.data.result[i].time = strs[0];
            res.data.result[i].place = strs[1];
            res.data.result[i].content = strs[2];
            res.data.result[i].longitude = strs[3];
            res.data.result[i].latitude = strs[4];
            switch (strs[5])
            {
              case "0": res.data.result[i].atype = '参观';break;
              case "1": res.data.result[i].atype = '互动'; break;
              case "2": res.data.result[i].atype = '推广'; break;
              case "3": res.data.result[i].atype = '自由活动'; break;
              case "4": res.data.result[i].atype = '其他'; break;
            }
          }
          that.setData({
            list: res.data.result
          });
        }
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
      url: 'plan',
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

  action: function (e) {
    var that = this;
    if(app.data.userType == 'dy')
    {
      that.setData({
        actionName: e.currentTarget.dataset.actionname,
      })
      that.setData({
        DeleteHidden: false,
      });
    }else{
      return;
    }
  },

  delete: function (e) {
    var that = this;
    that.setData({
      cacheClearHidden: true
    })
    wx.request({
      url: 'https://api.wxappclub.com/del',
      data: {
        appkey: 'f7kez180klzuhm1w4ewnmjjzc7wwzjb1',
        key: that.data.actionName,
        type:'default'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.result == 1)
          wx.showToast({
            title: '删除成功！',
          });
        that.setData({
          DeleteHidden: true
        });
        wx.startPullDownRefresh();
      },
      fail:function(){
        console.log('删除失败');
      }
    });
  },

  cancel: function () {
    this.setData({
      DeleteHidden: true
    });
  }
})