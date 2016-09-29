//index.js
// 拿到全局应用程序实例
const app = getApp()
const API_URL = 'http://java.liaozhiwei.com/weixin/med/getCache'
Page({
  data:{
    title:'加载中...',
    medicines:[],
    loading:true,
    pageNum : 1,
    pageSize:20
  },
  onLoad:function(options){
        //调用应用实例的方法获取全局数据
    app.fetchApi(API_URL,'POST',{'pageNum':this.data.pageNum,'pageSize':this.data.pageSize},(err, data) => {
      //更新数据
      this.setData({ title: '药名大全', medicines: data, loading: false })
    })
  },
  nextPage :function(){  
    this.setData({
      pageNum : this.data.pageNum+1,
      loading:true
    })
    console.log(this.data.pageNum)
    app.fetchApi(API_URL,'POST' ,{'pageNum':this.data.pageNum,'pageSize':this.data.pageSize},(err, data) => {
      if(data){
      var array = this.data.medicines
      data.forEach(function(d){
        array.push(d)
      })
      //更新数据
      this.setData({medicines: array, loading: false })
      }
    //尚未处理最后一页时的逻辑
    })
  }
})





//获取应用实例
// var random = require('../../utils/random.js')
// var utile = require('../../utils/util.js')
// var app = getApp();
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     testarray:[
//       {name:'第一小学',city:'广州'},{name:'第二小学',city:'河南'},{name:'第三小学',city:'四川'}
//     ]
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     console.log(random.randomNum())
//     this.setData({
//       'userInfo.nickName':this.data.array[random.randomNum()]
//     })
//   },
//   bindNextPage : function(){
//   var testb = this.data.testarray
//   testb.push({name:'第四小学',city:'云南'})
//   this.setData({
//      testarray : testb
//   })
//   },
//   onLoad: function () {
//     var that = this
//     //调用应用实例的方法获取全局数据    
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       console.log(userInfo)
//       that.setData({
//         userInfo:userInfo
//       })
//     }),
//     this.setData({
//       array : ['黎子豪','哩子豪','里子豪']
//     })
//   },
//   onShow: function(){
//     console.log('页面显示')
//   }
// })
