Page({
  data: {
    detailInfo : {},
    content:"",
    audioCtx: null,
    a_btn: '../../../../../images/src/play_detail.png',
    playorpause:true
  },
  getSceneDetail: function(id){
    var that = this;
    wx.request({
      url: "https://qcloud.bmy.com.cn/api/voices/show?&id=" + id + "&r=" + new Date(),
      success: function(data){
        var content = data.data.content.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').replace(/“/g, '"').replace(/”/g,'"');
        console.log(content);
        that.setData({
          detailInfo:data.data,
          content:content
        })
        that.setAudio(data.data)
      },
      fail:function(){
        wx.showLoading({
          title: '数据加载错误，请刷新再试！'
        })
      }
    });
  },
  setAudio: function(data){
    var that = this;
    that.audioCtx = wx.createAudioContext('myAudio')
    that.audioCtx.setSrc(data.voice)
  },
  audioPlay: function(){
    var that = this;
    if(that.data.playorpause){
      that.audioCtx.play();
      that.setData({
        a_btn: '../../../../../images/src/pause_detail.png',
        playorpause:false
      })
    }else{
      that.audioCtx.pause();
      that.setData({
        a_btn: '../../../../../images/src/play_detail.png',
        playorpause:true
      })
    }
  },
  onLoad: function (option) {
    var that = this;
    that.getSceneDetail(option.id);
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
