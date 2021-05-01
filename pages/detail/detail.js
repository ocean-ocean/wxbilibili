// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    // 推荐列表
    othersList: []
  },

  /**
   *  获取视频详情
   */
  getCurrentVideo(videoId) {
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id=' + videoId,
      success(response) {
        if (response.data.code === 0) {
          // console.log(response);
          // console.log(response.data.data.videoInfo.videoTitle);
          that.setData({
            videoInfo: response.data.data.videoInfo
          })
        }
      }
    })
  },
  getOthersList(videoId) {
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList?' + videoId,
      success(response) {
        // console.log(response);
        if (response.data.code === 0) {
          console.log(response);
          that.setData({
            othersList: response.data.data.otherList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
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