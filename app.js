// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const app = this;
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: `${app.globalData.baseUrl}/login`,
          method: 'post',
          data: { code: res.code }, // pass code in request body
          success(loginRes) {
            console.log(loginRes) // { data: { headers: { "X-USER-TOKEN": <User Token> }, user: <User Object> }, ... }
          }
        })
      }
    })
  },
  globalData: {
    header: null,
    user: null,
    baseUrl: 'http://localhost:3000/api/v1',
  }
})
