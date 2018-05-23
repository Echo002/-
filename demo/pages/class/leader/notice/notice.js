var util = require('../../../../utils/util.js'); 
var Bmob = require("bmob.js");
var common = require('getCode.js');
var app = getApp()
var myDate = new Date();
//格式化日期
function formate_data(myDate) {
  let month_add = myDate.getMonth() + 1;
  var formate_result = myDate.getFullYear() + '-'
    + month_add + '-'
    + myDate.getDate()
  return formate_result;
}

Page( {  
  data: {
    formMsgHidden: true,
    disableBtn: false,
    types: ["参观","互动","推广","自由活动","其他"],
    typeIndex: '0',
    address: '点击选择位置',
    longitude: 0, //经度
    latitude: 0,//纬度
    noteMaxLen: 200,//备注最多字数
    content: "",
    noteNowLen: 0,//备注当前字数
    date: formate_data(myDate)
  },  

  onShow: function() {  
  },

  submitForm: function (e) {
    var that = this;
    console.log(e);
    if (e.detail.value.content == '' || e.detail.value.time == '' || e.detail.value.typeIndex == '' || e.detail.value.title == '' || that.data.address == ''){
      wx.showToast({
        title: '请完善活动信息',
        duration: 3000,
        icon: 'none'
      });
      return;
    }else{
      var time = util.formatTime(new Date());
      console.log(e.detail.value.title);
      console.log(e.detail.value.typeIndex);
      var value = e.detail.value.time + "@" + that.data.address + "@" + e.detail.value.content + "@" + that.data.longitude + "@" + that.data.latitude + "@" + e.detail.value.typeIndex;
      console.log(value);
      wx.request({
        url: 'https://api.wxappclub.com/put',
        data: {
          appkey: 'f7kez180klzuhm1w4ewnmjjzc7wwzjb1',
          key: e.detail.value.title,
          value: value,
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
    },

  //改变活动类别
  bindTypeChange: function (e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },

  //改变时间
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  //改变活动类别
  bindTypeChange: function (e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },

  //选择地点
  addressChange: function (e) {
    this.addressChoose(e);
  },

  addressChoose: function (e) {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          address: res.name,
          longitude: res.longitude, //经度
          latitude: res.latitude,//纬度
        })
        if (e.detail && e.detail.value) {
          this.data.address = e.detail.value;
        }
      },
      fail: function (e) {
      },
      complete: function (e) {
      }
    })
  },

  //字数改变触发事件
  bindTextAreaChange: function (e) {
    var that = this
    var value = e.detail.value,
      len = parseInt(value.length);
    if (len > that.data.noteMaxLen)
      return;
    that.setData({
      content: value, noteNowLen: len
    })
  },

  link:function(){
    wx.navigateTo({
      url: '../../visitor/plan/plan',
    })
  }

})

  
