// pages/lessons/show.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    lesson: {
      id: 1 
    }
  },

  bookLesson() {
    const page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons/${page.data.lesson.id}/bookings`,
      method: 'POST',
      header: app.globalData.header,
      body: {
        user_id: app.globalData.user.id
      },
      success(res) {
        console.log(res)
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

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

  }
})