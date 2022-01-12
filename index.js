
// window.o
// import {createRequire} from 'moudle';
// const require=createRequire(import.meta.url);
// import  {app} from './node_modules/mailtoui/dist/mailtoui-min.js';
// const MailtoUI = require('mailtoui-min.js');


var main_content = new Vue({
  el: "#app",
  data: {
    open: true,
    email: 'supergirl@example.com',
  },

  methods: {
 
  },

  computed: {
    mailtoHref: function() {
      return 'mailto:' + this.email;
  }
  },

  mounted() {
    MailtoUI.run();
    document.addEventListener("click", () => {});
  },
});



  $(document).ready(function(){
    var small_img;
    var big_img;
    var has_once=0;
    $(".common-lightbox .lightbox-close").on('click',function (e) {
        $(".common-lightbox").fadeOut(300);
        $("body").removeClass("no-scroll");
      });
    // 關閉跳窗，清掉swiper
      $(".album-lightbox .lightbox-close").on('click',function () {
        closeAlbums();
      });
    
      $(window).on('scroll',function(){
        var scrollVal = $(this).scrollTop();
        if(scrollVal>30&&has_once=='0'){
            // $('.mailtoui').addClass('mailtoui');
            var body=$('body'); 
var script= '<script src="mailtoui.js" data-options="{"title":"開啟信箱方式","buttonText1":"開啟Gmail信箱","buttonText2":"開啟Outlook信箱","buttonText3":"開啟Yahoo信箱","buttonText4":"開啟預設信箱"}"></script>'; 
body.append(script);
  //要載入的js
// head.appendChild(script); 
              // 點擊活動，跳出相簿跳窗
      $(".this-album").on("click", function () {
        $("body").addClass("no-scroll");
        // 套版人員帶入資料用變數
        // 取得該活動相片
        var albums = [
          "images/saga1.jpg",
          "images/saga2.jpg",
          "images/saga3.jpg",
          "images/saga4.jpg",
          "images/saga5.jpg",
          "images/saga6.jpg",
          "images/saga7.jpg",
          "images/saga8.jpg",
          "images/saga9.jpg",
          "images/saga10.jpg",
          "images/saga11.jpg",
          "images/saga12.jpg",
          "images/saga13.png",
          "images/saga14.jpg",
          "images/saga15.jpg",
          "images/saga16.jpg",
          "images/saga17.jpg",
          "images/saga18.jpg",
          "images/saga19.jpg",
          "images/saga20.jpg",
          "images/saga21.jpg",
          "images/saga22.jpg",
          "images/saga23.jpg",
          "images/saga24.jpg",
          "images/saga25.jpg",
          "images/saga26.jpg",
          "images/saga27.jpg",
          "images/saga28.jpg",
          "images/saga29.jpg",
          "images/saga30.jpg",
          "images/saga31.jpg",
          "images/saga32.jpg",
          "images/saga33.jpg",
          "images/saga34.jpg",
          "images/saga35.jpg",
          "images/saga36.jpg",
          "images/saga37.jpg",
          "images/saga38.jpg",
          "images/saga39.jpg",
          "images/saga40.jpg",
          "images/saga41.jpg",
          "images/saga42.jpg",
          "images/saga43.jpg",
          "images/saga44.jpg",
          "images/saga45.jpg",
          "images/saga46.jpg",
          "images/saga47.jpg",
          "images/saga48.jpg",
          "images/saga49.jpg",
          "images/saga50.jpg",
          "images/saga51.jpg",
          "images/saga52.jpg",
          "images/saga53.jpg",
          "images/saga54.jpg",
          "images/saga55.jpg",
          "images/saga56.jpg",
          "images/saga57.jpg",
          "images/saga58.jpg",
          "images/saga59.jpg",
          "images/saga60.jpg",
          "images/saga61.jpg",
          "images/saga62.jpg",
          "images/saga63.jpg",
          "images/saga64.jpg",
          "images/saga65.jpg",
          "images/saga66.jpg",
          "images/saga67.jpg",
          "images/saga68.jpg",
          "images/saga69.jpg",
          "images/saga70.jpg",
          "images/saga71.jpg",
          "images/saga72.jpg",
          "images/saga73.jpg",
          "images/saga74.jpg",
          "images/saga75.jpg",
          "images/saga76.jpg",
          "images/saga77.jpg",
          "images/saga78.jpg",
          "images/saga79.jpg",
          "images/saga80.jpg",
          "images/saga81.jpg",
          "images/saga82.jpg",
          "images/saga83.jpg",
          "images/saga84.jpg",
          "images/saga85.jpg",
          "images/saga86.jpg",
          "images/saga87.jpg",
          "images/saga88.jpg",
          "images/saga89.jpg",
          "images/saga90.jpg",
          "images/saga91.jpg",
          "images/saga92.jpg",
          "images/saga93.jpg",
          "images/saga94.jpg",
          "images/saga95.jpg",
          "images/saga96.jpg",
          "images/saga97.jpg",
          "images/saga98.jpg",
          "images/saga99.jpg",
          "images/saga100.jpg", 
          "images/saga101.jpg",
          "images/saga102.jpg",
          "images/saga103.jpg",
          "images/saga104.jpg",
          "images/saga105.jpg",
          "images/saga106.jpg",
          "images/saga107.jpg",
          "images/saga108.jpg",
          "images/saga109.jpg",
          "images/saga110.jpg",
          "images/saga111.jpg",
          "images/saga112.jpg",
          "images/saga113.jpg",
          "images/saga114.jpg",
          "images/saga115.jpg",
          "images/saga116.jpg",
          "images/saga117.jpg",
          "images/saga118.jpg",
          "images/saga119.jpg",
          "images/saga120.jpg",
          "images/saga121.jpg",
          "images/saga122.jpg",
          "images/saga123.jpg",
          "images/saga124.jpg",
          "images/saga125.jpg",
          "images/saga126.jpg",
          "images/saga127.jpg",
          "images/saga128.jpg",
          "images/saga129.jpg"
        ];
  
        // 將相片帶入swiper結構中
        var one_img_html = "";
        var big_img_html = "";
        // swiper
        // 複製上下方swiper架構
        for (var i = 0; i < albums.length; i++) {
          one_img_html = $(".top-swiper-template").clone();
          one_img_html.find("img").attr("src", albums[i]);
          // console.log(one_img_html.html())
  
          big_img.appendSlide([one_img_html.html().toString()]);
  
          big_img_html = $(".bottom-swiper-template").clone();
          big_img_html.find("img").attr("src", albums[i]);
          small_img.appendSlide([big_img_html.html().toString()]);
        }
        big_img.slideTo(0);
  
        var total_image = $(".one-img-swiper .swiper-slide").length;
        $(".total-image").text(total_image);
  
        $("#albums_list").fadeIn(300);
      
      });
      $('.zunko').on("click", function () {
        $("#idol").fadeIn(300);
      });
      has_once=1;

        }
    
    
      })
   
  
      function closeAlbums() {
        // 清空原資料
  
        big_img.removeAllSlides();
  
        small_img.removeAllSlides();
  
        // 初始化圖片編號
        $(".total-image").text("");
        $(".this-image").text("1");
      }
  
      // swiper
  
      small_img = new Swiper(".small-img-swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        mousewheel: false,
        keyboard: false,
        watchSlidesVisibility: true,
        centerInsufficientSlides: true,
        allowTouchMove: true,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
      });
      big_img = new Swiper(".one-img-swiper", {
        slidesPerView: "1",
        // preventClicksPropagation: true,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs",
        allowTouchMove: false,
        observer: true,
        observeParents: true,
        thumbs: {
          swiper: small_img,
        },
        navigation: {
          nextEl: ".album-next",
          prevEl: ".album-prev",
        },
      });

      // 當滑動時，計算目前圖片編號
      big_img.on("realIndexChange", function () {
        $(".this-image").text(big_img.realIndex + 1);
      });
    
 })
  