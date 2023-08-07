// index.js

var app = getApp();//引入全局配置
Page({
  data: {
    
  },
  onTap(){
    var that = this;
    console.log("微信授权登录被点击");

    wx.getUserProfile(
      {
        desc: "完善用户资料",
        success: (res) => {
          console.log(res)
          // console.log("授权成功");
          wx.showToast({
            title: '授权成功',
            icon:'success'
          })
          wx.redirectTo(
            {
              url: "../guide/guide",
            }
            )
            },
        fail: (res) => 
        {
          console.log("授权失败")
        }
        })
  },
  onLoad() {

  },
  
});
