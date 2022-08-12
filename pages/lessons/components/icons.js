// pages/lessons/components/icons.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    icons: ['https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039159/Learners%27%20Loft/music_owlene.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039158/Learners%27%20Loft/sports-icon_wnwpaj.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039158/Learners%27%20Loft/languages_fh9zqs.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039158/Learners%27%20Loft/photography_bn9yzf.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039157/Learners%27%20Loft/training_zwi04j.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039157/Learners%27%20Loft/philosophy_ryobmb.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039157/Learners%27%20Loft/math_ctcvn5.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039157/Learners%27%20Loft/history_hmm2sx.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039157/Learners%27%20Loft/geography_gmyepp.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039156/Learners%27%20Loft/biology_f0omda.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660039156/Learners%27%20Loft/coding_ymslc3.png', 
    'https://res.cloudinary.com/jerrytongshanghailewagon/image/upload/v1660099309/Learners%27%20Loft/cooking_dqc6vv.png',
    ]
  },

  /**
   * Component methods
   */
  methods: {
    chooseIcon: function (e) {
      console.log(e);
      let index = e.currentTarget.dataset.index;
      let icon = this.data.icons[index]
      this.triggerEvent('changeIcon', {index, icon})
      this.setData({index, icon})
    },
    
      closeIconPicker(e){
        this.triggerEvent('closeIconPicker')
      },
  },

})
