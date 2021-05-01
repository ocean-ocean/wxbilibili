Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList: [],
    // 被点击的菜单索引
    currentIndexNav: 0,
    // 轮播图数据
    swiperList: [],
    // 视频列表数据
    videosList: []
  },
  /**
   * 点击首页导航栏按键触发的函数
   */
  activeNav(e) {
    console.log("test");
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success(response) {
        if (response.data.code === 0) {
          // console.log(response.data.data.swiperList[0].imgSrc);
          that.setData({
            swiperList: response.data.data.swiperList
          })
        }
      }
    })
  },
  /**
   * 获取首页导航数据
   */
  getNavList() {
    let that = this;
    // 利用小程序内置的发送请求的方法
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList',
      success(response) {
        // 接收成功
        if (response.data.code === 0) {
          // console.log(response.data.data.navList[0].text);
          that.setData({
            navList: response.data.data.navList
          })
        }
      }
    })
  },

  /**
   *  获取视频列表
   */
  getVideosList() {
    let that = this;
    wx.request({
      url: 'https://www.bilibili.com/index/ding.json',
      success(response) {
        if (response.data.code === 0) {
          // console.log(response);
          that.setData({
            videosList: response.data.dance
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图数据
    this.getSwiperList();
    // 获取视频数据
    this.getVideosList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取首页导航数据
    this.getNavList();
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
    this.getVideosList();
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