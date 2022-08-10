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
    this.deleteConfirmed(e)
  },

  deleteConfirmed(e) {
    const page = this;
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    wx.showModal({
      title: 'Are you sure?',
      confirmText: 'Yes',
      confirmColor: 'green',
      cancelText: 'No',
      cancelColor: 'red',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: `${app.globalData.baseUrl}/bookings/${id}`,
            method: 'DELETE',
            header: app.globalData.header,
            success(res) {
              let bookings = page.data.bookings
              bookings.splice(index, 1)
              page.setData({ bookings: bookings})
            }
          })
        }
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