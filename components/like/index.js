// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
      value:false
    },
    count:{
      type:Number,
      value:9
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // like:true,
    // 数据绑定
    // count:9,
    //绑定属性{{}}"
    //哪些数据是公开的，哪些数据是固定封装的
    yesImg:"../images/heart.png",
    noImg: "../images/noheart.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like;
      let count = this.properties.count;
      //更新数据
      count=like?count-1:count+1;
      this.setData({
        count:count,
        like:!like
      })
    }
  }
})
