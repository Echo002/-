//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    voice:"",
    list: [],
    titclass:"scene1",
    a_btn: ['../../../../../images/src/play_scene.png'],
    last:0,
    pause:false
  },
  //事件处理函数
  bindTextTap: function(e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../detail/detail?id='+id
    })
  },
  bindViewTap: function(e){
    var that = this
    var voice = e.currentTarget.dataset.voice;
    var id = e.currentTarget.dataset.id;
    that.audioPlay(voice,id);
  },
  getSceneList: function(id){
    var that = this
    wx.request({
      url: "https://qcloud.bmy.com.cn/api/voices/list?&id="+id,
      success: function(data){
        console.log(data.data);
        that.setData({
          list:data.data,
          titclass:'scene'+id
        })
        that.setAudio(data.data)
      },
      fail: function () {
        wx.showLoading({
          title: '数据加载错误，请刷新再试！'
        })
      }
    });
  },
  setAudio: function(data){
    var that = this;
    that.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function(voice,id){
    var that = this;
    var tmp = that.data.a_btn;
    var pause;
    if(id == that.data.last&&that.data.pause==false){
      that.audioCtx.pause();
      tmp[id] = '../../../../../image/src/play_scene.png'
      pause = true
    }else{
      if(id != that.data.last){
        that.audioCtx.setSrc(voice)
      }
      that.audioCtx.play();
      tmp[that.data.last] = '../../../../../image/src/play_scene.png'
      tmp[id] = '../../../../../image/src/pause_scene.png'
      pause = false
    }
    that.setData({
      a_btn: tmp,
      last:id,
      pause:pause
    })
  },
  audioEnd:function(){
    var that = this;
    var tmp = that.data.a_btn;
    tmp[that.data.last] = '../../../../../image/src/play_scene.png'
    that.setData({
      a_btn: tmp
    })
  },
  onLoad: function (option) {
    var that = this;
    that.getSceneList(option.id);
    wx.showLoading({
      title: '加载中'
    })
  },
  onReady:function(){
    setTimeout(function(){
      wx.hideLoading();
    },500)
    
  }
})
