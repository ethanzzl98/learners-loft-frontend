// pages/lessons/form.js
const app = getApp();
Page({
  
  data: {
    showIconPicker: false,
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

  createLesson: function () {
    const page = this;
    if (page.data.isEdit) {
      this.makeUpdateLessonRequest()
    } else {
      this.makeCreateLessonRequest()
    }
  },

  makeUpdateLessonRequest() {
    const page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons/${page.data.id}`,
      method: 'PATCH',
      header: app.globalData.header,
      data: page.data.lesson,
      success: (res) => {
        // console.log(res);
        wx.switchTab({
          url: '/pages/lessons/index',
        })
      }
    })
  },

  makeCreateLessonRequest() {
    const page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/lessons`,
      method: 'POST',
      header: app.globalData.header,
      data: page.data.lesson,
      success: (res) => {
        // console.log(res);
        wx.switchTab({
          url: '/pages/lessons/index',
        })
      }
    })
  },

  onShow() {
    const page = this;
    const data = {
      isEdit: false,
      lesson: {},
      id: null,
    };
    if (app.globalData.lessonId !== null && app.globalData.lessonId !== undefined) {
      data.isEdit = true;
      data.lesson = app.globalData.lesson;
      data.id = app.globalData.lessonId;
      app.globalData.lesson = undefined;
      app.globalData.lessonId = undefined;
    } 
    page.setData(data);
    page.setData({
      'lesson.user_id': app.globalData.user.id
    })
  }
})
