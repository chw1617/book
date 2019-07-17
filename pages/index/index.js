// 导入http模块
import {classicModule} from "../../modules/classicModule.js";
// let http = new HTTP();
let classic = new classicModule
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //可以输出页面数据
    //更新的数据可以在这里先定义
    classicData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classic.getdata((res)=>{
      console.log(res);
      //更新数据
      this.setData({
        classicData:res
      })
    })

    // http.request({
    //   url:"/classic/latest",
    //   success:(res)=>{
    //     console.log(res)
    //     //剥夺return能力，异步
    //   }
    // })
    // wx.request({
    //   url:"http://bl.7yue.pro/v1/classic/latest",
    //   header:{appkey : 'RdshydjBvcYZhMZC'},
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //使用promise来请求数据，但是没有必要，代码没有多个回调嵌套
    // let promise = new Promise((resolve,reject)=>{
    //     wx.request({
    //       url:"http://bl.7yue.pro/v1/classic/latest",
    //       header:{appkey : 'RdshydjBvcYZhMZC'},
    //       success:(res)=>{
    //         resolve(res)
    //       }
    //     })
    // });
    // promise.then((res)=>{
    //   console.log(res)
    // });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})