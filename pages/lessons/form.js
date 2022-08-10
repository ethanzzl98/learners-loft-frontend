// pages/lessons/form.js
const app = getApp();
Page({
  
  data: {
    showIconPicker: false,
    lesson: {
      user_id: 1
    }
  },

  updateData: function (e) {
    let key = e.currentTarget.dataset.name; 
    let value = e.detail.value
    key = `lesson.${key}`
    this.setData({ [key]: value })
  },

  bindStartDateChange(e) {
    this.setData({'lesson.start_date': e.detail.value })
  },

  changeIcon: function (e) {
    this.setData({'lesson.icon': e.detail.icon, showIconPicker: false})
  },

  bindStartTimeChange(e) {
    this.setData({'lesson.start_time': e.detail.value,  })
  },

  bindEndTimeChange(e) {
    this.setData({'lesson.end_time': e.detail.value })
  },

  chooseIcon() {
    this.setData({ showIconPicker: true })
  },

  createLesson: function () {
    wx.request({
      url: `${app.globalData.baseUrl}/lessons`,
      method: 'POST',
      // header: app.globalData.header,
      data: JSON.stringify(this.data.lesson),
      success: (res) => {
        console.log(res);
        wx.switchTab({
          url: '/pages/lessons/index',
        })
      }
    })
  }
})
