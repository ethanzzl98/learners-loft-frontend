// pages/bookings/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    let page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/bookings`,
      method: 'GET',
      header: app.globalData.header,
      success(res) {
        page.setData({bookings: res.data.bookings})
      }
    })
  },

  deleteBooking(e) {
    const id = e.currentTarget.dataset.id;
    this.deleteConfirmed(id)
  },

  deleteConfirmed(id) {
    // wx.request({
    //   url: `${app.globalData.baseUrl}/booking/${id}`
    // })
    wx.request({
      url: `${app.globalData.baseUrl}/bookings/${id}`,
      method: 'DELETE',
      header: app.globalData.header,
      success(res) {
        console.log(res)
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