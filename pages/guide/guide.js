// pages/guide/guide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tap1(){
    wx.navigateTo({
      url: '../voicedraw/voicedraw',
    })
  },
  tap2(){
    wx.navigateTo({
      url: '../draw/draw',
    })
  },
  tap3(){
    wx.navigateTo({
      url: '../see_saying/see_saying',
    })
  },
  tap4(){
    wx.navigateTo({
      url: '../my_photos/my_photos',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showToast({
      title: '授权成功',
      icon:'success'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})