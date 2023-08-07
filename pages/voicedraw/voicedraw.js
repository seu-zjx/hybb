// pages/voicedraw/voicedraw.js
const plugin = requirePlugin("WechatSI")
const manager = plugin.getRecordRecognitionManager()
const app = getApp()
var detailinfo = '请说话'
const lessonTmplId = 'r_Y6tZpQIE4ujco4qQuYeHX2Z_Xdvlq5wHLCUZvlkEI'
// const plugin = requirePlugin("WechatSI")

// // 获取**全局唯一**的语音识别管理器**recordRecoManager**
// const manager = plugin.getRecordRecognitionManager()
Page({

  data: {
    list: [],
    module: "",
    currentText: ""
  },
  submit(){
    wx.showLoading({
      title: '转换中...',
    });
    setTimeout(function(){
      wx.hideLoading()
      wx.navigateTo({
        url: '../voice_tr/voice_tr',
      })
    },2000);

  },
  onLoad: function () {
    this.initRecord()
  },
  streamRecord: function () {
    manager.start({
      lang: 'zh_CN',
    })
  },
  streamRecordEnd: function () {
    manager.stop()
  },
  data: {
    currentText: ""
  },
  initRecord: function () {
    //有新的识别内容返回，则会调用此事件
    manager.onRecognize = (res) => {
      let text = res.result
      this.setData({
        currentText: text,
      })
      detailinfo = text
    }
    // 识别结束事件
    manager.onStop = (res) => {
      let text = res.result
      if (text == '') {
        // 用户没有说话，可以做一下提示处理...
        return
      }
      this.setData({
        currentText: text,
      })
      detailinfo = text
      // 得到完整识别内容就可以去翻译了
      this.translateTextAction()
    }
  },
  translateTextAction: function () { },

  //执行点击事件
  formSubmit: function (e) {

    //声明当天执行的
    var that = this;

    //获取表单所有name=keyword的值
    var formData = e.detail.value.keyword;

    //显示搜索中的提示
    wx.showLoading({
      title: '搜索中',
      icon: 'loading'
    })

    //在云数据库中进行搜索：
    let key = formData;
    console.log("查询的内容", key)
    const db = wx.cloud.database();
    const _ = db.command
    db.collection('video').where(_.or([{
      title: db.RegExp({
        regexp: '.*' + key,
        options: 'i',
      })
    },
    {
      address: db.RegExp({
        regexp: '.*' + key,
        options: 'i',
      })
    }
    ])).get({
      success: res => {
        console.log(res)
        that.setData({
          list: res.data
        })
        wx.hideLoading();
      },
      fail: err => {
        console.log(err)
      }
      
    })
  },
})