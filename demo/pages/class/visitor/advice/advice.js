var util = require('../../../../utils/util.js');
var app = getApp()
Page({
  data: {
    formMsgHidden: true,
    disableBtn: false
  },
  onShow: function () {
  },

  formSubmit: function (e) {
    if (e.detail.value == '') {
      wx.showToast({
        title: '还没有输入字符',
        duration: 3000,
        image: 'none'
      });
      return;
    } else {
      var time = util.formatTime(new Date());
      var str = e.detail.value.content + "@" + time;
      console.log(str);
      wx.request({
        url: 'https://api.wxappclub.com/put',
        data: {
          appkey: '3f3cudnklthkqbljj4f6c7s7938k7kli',
          key: app.data.userName,
          value: str,
          type: 'default'
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          wx.showToast({
            title: '提交成功',
          });
        }
      });
    }
  }
})