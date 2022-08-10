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
    this.setData({'lesson.icon_url': e.detail.icon, showIconPicker: false})
  },

  bindStartTimeChange(e) {
    this.setData({'lesson.start_time': e.detail.value,  })
  },

  bindEndTimeChange(e) {
    this.setData({'lesson.end_time': e.detail.value })
  },

  chooseIcon() {
    this.setData({
      showIconPicker: true
    })
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
      start_time: page.data.startTime,
      end_time: page.data.endTime,
      description: page.data.description,
      icon_url: page.data.iconUrl,
      user_id: app.globalData.user.id
    }
  },

  createLesson: function () {
    const page = this;
    console.log(page.data.lesson)
    wx.request({
      url: `${app.globalData.baseUrl}/lessons`,
      method: 'POST',
      header: app.globalData.header,
      data: page.data.lesson,
      success: (res) => {
        console.log(res);
        wx.switchTab({
          url: '/pages/lessons/index',
        })
      }
    })
  }
})
