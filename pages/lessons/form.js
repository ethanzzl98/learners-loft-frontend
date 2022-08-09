// pages/lessons/form.js
Page({

  /**
   * Page initial data
   */
  data: {
    showIconPicker: false
  },

  bindStartDateChange(e) {
    console.log(e)
    this.setData({startDate: e.detail.value })
  },

  bindEndDateChange(e) {
    console.log(e)
    this.setData({endDate: e.detail.value })
  },

  bindTimeChange(e) {
    console.log(e)
    this.setData({time: e.detail.value })
  },

  chooseIcon() {
    this.setData({
      showIconPicker: true
    })
  },

  // chooseIcon(e) {
  //   console.log("function chooseIcon e", e)
  //   wx.navigateTo({
  //     url: `/pages/lessons/components?icons=${e.currentTarget.dataset.icons}`,
  //   })
  // },


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