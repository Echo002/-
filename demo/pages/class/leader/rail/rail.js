Page({
  data: {
    Height: 0,
    scale: 13,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [{
      id: 1,
      iconPath: '../../../../image/map/suoxiao.png',
      position: {
        left: 280,
        top: 100 - 50,
        width: 25,
        height: 25
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '../../../../image/map/fangda.png',
      position: {
        left: 280,
        top: 130 - 50,
        width: 25,
        height: 25
      },
      clickable: true
    }
    ],
    circles: []

  },

  onLoad: function () {
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        that.setData({
          view: {
            Height: res.windowHeight
          }
        })
      }
    })

    wx.getLocation({
      type: 'wgs84', 
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 20,
            height: 20,
            iconPath: "../../../../image/map/1.png",
            title: "点我借球！"
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 1000,
            strokeWidth: 1
          }]

        })
      }

    })

  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    //点击
  },

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }
  },
})