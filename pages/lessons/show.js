// pages/lessons/show.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    isTeacher: false
  },

  bookLesson() {
    const page = this;
    wx.showModal({
      title: 'Continue to book?',
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

  onLoad: function (options) {
    let page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons/${options.id}`,
      method: "GET",
      header: app.globalData.header,
      success(res) {
        const lesson = res.data;
        page.setData({
            lesson: lesson,
            id: options.id,
            isTeacher: lesson.user_id === app.globalData.user.id
        })
        // console.log(page.data.lesson)
        // console.log(app.globalData.user.id)
      }
    })
  }
})
