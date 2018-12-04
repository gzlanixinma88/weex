// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_hook: false,//是否打钩
    items:[
      {
        name:"上海",
        value:"222",
        checked:"true"
      },
      {
        name: "上海",
        value: "222",
        checked: "true"
      },
      {
        name: "上海",
        value: "222",
        checked: "false"
      }
    ],
    change_hook:function(data){
      this.setData({
        is_hook: !this.data.is_hook
      });
      console.log(is_hook)
    }
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

  }
})