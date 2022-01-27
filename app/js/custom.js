$(document).ready(function () {

  // header scroll
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".header").addClass("darkHeader");
    } else {
      $(".header").removeClass("darkHeader");
    }
  });

  //go to bottom arrow
  $('.goto_bottom').on('click', function () {
    $(".header").addClass("darkHeader");
  });

  // menu open & close
  $(".hamburger").click(function () {
    if ($(this).hasClass("active")) {
      $(".hamburger").removeClass("active");
      $("html").removeClass("overlay-open");
      $(".menu").removeClass("menu-active");
    } else {
      $(".hamburger").removeClass("active");
      $(this).addClass("active");
      $("html").addClass("overlay-open");
      $(".menu").addClass("menu-active");
    }
  });

  //serch open & close
  $('.search-bar').on('click', function () {
    $('.search-sec').addClass('search-sec-active');
    $('html').addClass('overlay-open search-overlay');
    $('.navbar').addClass('d-none');
  });
  $('.search-close').on('click', function () {
    $('.search-sec').removeClass('search-sec-active');
    $('html').removeClass('overlay-open search-overlay');
    $('.navbar').removeClass('d-none');
  });

  // vertical navigation
  var selector,
    selectorMenu = $(".side-navigation"),
    selectorMenuHeight = selectorMenu.outerHeight() + 15,
    menuItems = selectorMenu.find("a"),
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - selectorMenuHeight + 1;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  $(window).scroll(function () {
    var fromTop = $(this).scrollTop() + selectorMenuHeight;
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (selector !== id) {
      selector = id;
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

  // Main slider
  $('.main-banner__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    appendDots: $('.custom-dots')
  });

  //Lecture Slider with Progress
  var $lecture_slider = $('.lectures-slider');
  var $lecture_progressBar = $('.lecture_progress');

  $lecture_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $lecture_progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
  });

  $lecture_slider.slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $('.prev-lectures'),
    nextArrow: $('.next-lectures'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
 
  // Social Slider with Progress
  var $social_slider = $('.socialBuzz__slider');
  var $social_progressBar = $('.social_progress');

  $social_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $social_progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
  });

  $social_slider.slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $('.prev-social'),
    nextArrow: $('.next-social'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  // Laureates Slider with Nav
  $('.laureates__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    draggable: false,
    asNavFor: '.laureates__slider-nav',
    // responsive: [
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       dots: true
    //     }
    //   }
    // ]
  });

  $('.laureates__slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.laureates__slider',
    dots: false,
    arrows: true,
    vertical: true,
    focusOnSelect: true,
    draggable: false,
  });

  // Jury Slider with Nav
  $('.jury__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    draggable: false,
    asNavFor: '.jury__slider-nav'
  });

  $('.jury__slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.jury__slider',
    dots: false,
    arrows: true,
    vertical: true,
    focusOnSelect: true,
    draggable: false,
  });

  // Stories Slider with Progress
  var $stories_slider = $('.similar-stories__slider');
  var $stories_progressBar = $('.stories_progress');

  $stories_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $stories_progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
  });

  $stories_slider.slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prev-story'),
    nextArrow: $('.next-story'),
  });

  // Categories Slider
  $('.categories-slider__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.prev-categories'),
    nextArrow: $('.next-categories'),
  });

  // Timeline Slider with Nav
  $('.timeline__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    draggable: true,
    centerMode: true,
    asNavFor: '.timeline__slider-nav'
  });

  $('.timeline__slider-nav').slick({
    slidesToShow: 11,
    slidesToScroll: 1,
    asNavFor: '.timeline__slider',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    draggable: false,
    prevArrow: $('.prev-timeline'),
    nextArrow: $('.next-timeline'),
  });

  // Laureates Slider with Progress
  var $laureates_slider = $('.laureates-slider');
  var $laureates_progressBar = $('.laureates_progress');

  $laureates_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $laureates_progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
  });

  $laureates_slider.slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    variableWidth: true,
    prevArrow: $('.prev-laureates'),
    nextArrow: $('.next-laureates'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  // Student Slider with Progress
  var $student_slider = $('.student-slider');
  var $student_progressBar = $('.student_progress');

  $student_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $student_progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
  });

  $student_slider.slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    variableWidth: true,
    prevArrow: $('.prev-laureates'),
    nextArrow: $('.next-laureates'),
  });

  // Homepage Laureates & News Slider for Mobile version
  function LauratesListing() {
    if ($(window).width() > 991) {
      $('.laureates__listing').slick('unslick');
    } else {
      $('.laureates__listing').slick({
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        draggable: false,
        variableWidth: true,
        centerMode: true
      });
    }
  }

  function NewsSlider() {
    if ($(window).width() > 991) {
      $('.in_thenews__slider').slick('unslick');
    } else {
      $('.in_thenews__block').appendTo('.in_thenews__slider');

      var $news_slider = $('.in_thenews__slider');
      var $news_progressBar = $('.news_progress');

      $news_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $news_progressBar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc);
      });

      $news_slider.slick({
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        draggable: false,
        variableWidth: true,
        centerMode: true,
        prevArrow: $('.prev-thenews'),
        nextArrow: $('.next-thenews'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: true,
              arrows: false
            }
          }
        ]
      });
    }
  }

  LauratesListing();
  NewsSlider();

  $(window).resize(function () {
    LauratesListing();
    NewsSlider();
  });


  // Lectures Show More & Show Less
    var $this = $('.lectures .items');
    if ($this.find('.lectures .item').length > 2) {
        $('.lectures .items').append('<div class="view-more"><a href="javascript:;" class="showMore"></a></div>');
    }
    $('.lectures .items .item').slice(0,4).addClass('shown');
    $('.lectures .items .item').not('.shown').hide();
    $('.lectures .items .showMore').on('click',function(){
      $('.lectures .items .item').not('.shown').toggle(300);
      $(this).toggleClass('showLess');
    });

  // Student Resources Show More & Show Less
    var $this = $('.commonBlock .items');
    if ($this.find('.commonBlock .item').length > 2) {
        $('.commonBlock .items').append('<div class="mt-5"><a href="javascript:;" class="link-view showMore"></a></div>');
    }

    $('.commonBlock .items .item').slice(0,3).addClass('shown');
    $('.commonBlock .items .item').not('.shown').hide();
    $('.commonBlock .items .showMore').on('click',function(){
      $('.commonBlock .items .item').not('.shown').toggle(300);
      $(this).toggleClass('showLess');
    });


    // Select custom menu
    $('select').each(function(){
      var $this = $(this), numberOfOptions = $(this).children('option').length;
    
      $this.addClass('select-hidden'); 
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');
  
      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());
    
      var $list = $('<ul />', {
          'class': 'select-options'
      }).insertAfter($styledSelect);
    
      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }
    
      var $listItems = $list.children('li');
    
      $styledSelect.click(function(e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
      });
    
      $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          //console.log($this.val());
      });
    
      $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });
  
  });

  // navbar as a dropdown in mobile mode
  $(".navbar ul").on("click", ".active_page", function() {
    $(this).closest(".navbar ul").children('li:not(.active_page)').toggle();
  });

  var allOptions = $(".navbar ul").children('li:not(.active_page)');
  $(".navbar ul").on("click", "li:not(.active_page)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $(".navbar ul").children('.active_page').html($(this).html());
      allOptions.toggle();
  });
  // navbar as a dropdown in mobile mode end

});
