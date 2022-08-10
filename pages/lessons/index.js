// pages/lessons/index.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },
  onLoad(options) {
    
  },

  getData() {
    let page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons`,
      method: 'GET',
      header: app.globalData.header,
      success(res) {
        const lessons = res.data;
        page.setData({
          data: lessons,
        });
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    const page = this;
    if (app.globalData.header) {
      page.getData()
    } else {
      wx.event.on('loginFinish', page, page.getData)
    }
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  goToLesson(e) {
    // debugger
    wx.navigateTo({
      url: `/pages/lessons/show?id=${e.currentTarget.dataset.id}`,
    })
  }
})
