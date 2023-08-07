// pages/transform/transform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },
  //保存canvas图片
  saveCanvas: function (e) {
    wx.showToast({
      title: '保存成功',
    })
    // wx.showLoading({
    //   title: '图片保存完毕',
    // });

    //去掉临摹图
    if(this.copyFlag){
      this.clearCanvas();
      this.reDrawActions();
    }
    
    // this.context.drawImage("../../images/code.png", 0, 0, 258, 258, this.data.screenWidth - 63, this.data.screenHeight - 63, 60, 60); 
    this.context.fillText('AI日记画本', this.data.screenWidth - 150, this.data.screenHeight - 6)
    this.context.draw(true,drawRes =>{
      //画图
      this.drawImageShowForSave(res => {
        this.setData({
          hiddenCanvas: true
        });
        this.data.imagePath = res.tempFilePath;
        this._saveImageAlbum();
      });
    });

  },

  /**
   * 保存图片
   */
  _saveImageAlbum: function () {
    var filePath = this.data.imagePath;
    wx.saveImageToPhotosAlbum({
      filePath: filePath,
      success: res => {
        wx.showToast({
          title: '已保存到相册',
          icon: 'success',
          duration: 1000
        });
      },
      complete: function (res) {
        //图片保存完成
        setTimeout(function () {
          wx.hideLoading();
        }.bind(this), 2000)
      }
    });
  },

  drawImageShowForSave: function (cb) {
    var destWidth = this.data.canvasWidth;
    var destHeight = this.data.canvasHeight;
    
    wx.canvasToTempFilePath({
      destWidth: destWidth,
      destHeight: destHeight,
      width: destWidth,
      height: destHeight,
      canvasId: 'myCanvas',
      success: function (res) {
        if (cb) {
          cb(res);
        }
      },
      complete: function (res) {

      }
    });
  },

})