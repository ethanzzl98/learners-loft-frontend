// pages/bookings/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    showListName: "bookings"
  },

  switchList(e) {
    this.setData({
      showListName: e.currentTarget.dataset.name
    })
    console.log(this.data.showListName);
  },

  onShow() {
    this.getMyLearning();
    this.getMyTeaching();
  },

  getMyLearning() {
    let page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/bookings`,
      method: 'GET',
      header: app.globalData.header,
      success(res) {
        page.setData({
          bookings: res.data.bookings
        })
        console.log("learning:", page.data.bookings)
      }
    })
  },

  getMyTeaching() {
    let page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons/mylessons`,
      method: 'GET',
      header: app.globalData.header,
      success(res) {
        page.setData({
          teachings: res.data.lessons,
        });
        console.log("lessons:", page.data.teachings)
      }
    })
  },

  deleteConfirm(e) {
    const page = this;
    wx.showModal({
      title: 'Are you sure?',
      confirmText: 'Yes',
      confirmColor: 'green',
      cancelText: 'No',
      cancelColor: 'red',
      success(res) {
        if (res.confirm) {
          page.deleteBooking(e)
        }
      }
    })
  },

  deleteBooking(e) {
    const page = this;
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    wx.request({
      url: `${app.globalData.baseUrl}/bookings/${id}`,
      method: 'DELETE',
      header: app.globalData.header,
      success(res) {
        let bookings = page.data.bookings
        bookings.splice(index, 1)
        page.setData({ bookings: bookings })
      }
    })
  },

  goToLesson(e) {
    wx.navigateTo({
      url: `/pages/lessons/show?id=${e.currentTarget.dataset.id}`,
    })
  }
})