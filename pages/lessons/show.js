// pages/lessons/show.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    isStudent: false
  },

  bookLesson() {
    const page = this;
    wx.showModal({
      title: 'Are you sure?',
      confirmText: 'Yes',
      confirmColor: 'green',
      cancelText: 'No',
      cancelColor: 'red',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: `${app.globalData.baseUrl}/lessons/${page.data.id}/bookings`,
            method: 'POST',
            header: app.globalData.header,
            success(res) {
              console.log(res)
              wx.switchTab({
                url: '/pages/bookings/index',
              })
            }
          })
        }
      }
    })
  },

  deleteLesson() {
    const page = this;
    wx.showModal({
      title: 'Are you sure?',
      confirmText: 'Yes',
      confirmColor: 'green',
      cancelText: 'No',
      cancelColor: 'red',
      success(res) {    
        if (res.confirm) {
          page.deleteConfirmed()
        }
      }
    })
  },

  deleteConfirmed() {
    const page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons/${page.data.id}`,
      method: "DELETE",
      header: app.globalData.header,
      success(res) {
        // console.log(res);
        wx.navigateBack();
      }
    })
  },

  editLesson() {
    const page = this;
    app.globalData.lesson = page.data.lesson;
    app.globalData.lessonId = page.data.id;
    wx.switchTab({
      url: '/pages/lessons/form',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons/${options.id}`,
      method: "GET",
      header: app.globalData.header,
      success(res) {
        // console.log({res})
        const lesson = res.data;
        page.setData({
            lesson: lesson,
            id: options.id
        })
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
