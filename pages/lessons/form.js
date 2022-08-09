// pages/lessons/form.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {

  },

  testPost() {
    const data = this.getFormData();
    console.log(data);
  },

  getFormData() {
    const page = this;
    console.log(page)
    return {
      subject: page.data.subject,
      title: page.data.title,
      start_date: page.data.startDate,
      end_date: page.data.endDate,
      description: page.data.description,
      user_id: app.globalData.user.id
    }
  },

  createLesson() {
    const page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons`,
      method: 'POST',
      header: app.globalData.header,
      data: this.getFormData(),
      success(res) {
        console.log(res);
        wx.switchTab({
          url: '/pages/lessons/index',
        })
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
