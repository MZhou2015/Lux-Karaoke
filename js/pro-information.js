/*******************************************************************************************************************/
/***********                             Component   Product Informations      Sept.27 , 2020                *******/
/*******************************************************************************************************************/
var  detail = Vue.component('detail' , 
 { 
  props: ['bacd'] ,
  template:  ` <div class="flexb2" >
            <div class="imgs">
            <div class="det1"> <img v-bind:src="pdata.pict" /> </div>
            <div class="det2"> {{pdata.brief}}
                 <div class= "content1"> 
                      <li v-for='(lt, index) in pdata.description'> {{lt}} </li>
                    </div>
             </div>
            <div class="det3">In Stock <br> Call for Price </div>
             </div>
            <div> {{pdata.description}} </div>
            <div> {{pdata.note}} </div>
           
     </div> `  ,
  data() {
      return {  
          checked: false,
          dt_s:'',
          dt_e:'',
          pdata:'' 
      }
    } ,
 created: function(){
          this.pdata = {pict:"http://www.gecontech.com/magento/myadmin/docs/image/products/kv-v5pro-2019032016.jpg",brief:"InAndon KV-V5 Pro Karaoke Player, Intelligent Voice Keying Machine Real-time score The newest model (KV-V5 Pro + 4TB HDD )",
                           description:["High Definition 4K Output","Built-in wireless,With Chinese Cantonese Taiwanese English Chiuchow Songs in","Update songs from Cloud with a huge song Database",
                                         "Own reverb function , rising-falling tone function ","Package Includes: KV-V5 Pro karaoke player,Power adpter 12V/2A,Audio/Video RCA Cable,User Manual"],note:"495x400x152"}
            console.log( this.checked ) ; 
  },
mounted: function(){
      let mx = this.dt_s 
      
  }
})
/***************************************************************************************/