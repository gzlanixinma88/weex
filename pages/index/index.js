//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      { url: '/images/ban1.png' },
      { url: '/images/ban2.png' },
      { url: '/images/ban3.png' },
      { url: '/images/ban4.png' }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    lists:[
      {
        logo:"/images/ban1.png",
        title:"北京",
        desc:"北京的景色真美宿舍楼不好用hi丁接电话滴 "
      },
      {
        logo: "/images/boy.png",
        title: "上海",
        desc: "上海的帅哥真多"
      },
      {
        logo: "/images/ban3.png",
        title: "武汉",
        desc: "武汉的好吃的真多"
      },
      {
        logo: "/images/mala.png",
        title: "四川",
        desc: "四川的麻辣烫真带劲"
      }
    ]
  },
  onLoad:function(){
    this.setData({
      test:'01',
      list: ['/images/ban1.png', '/images/boy.png', '/images/ban3.png','/images/mala.png']
    })
  },
  toDetail:function(e){
    console.log(e)
    var index = e.currentTarget.dataset.index;
    console.log(index)
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  bigLogo: function (event){
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list   图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  }
})
