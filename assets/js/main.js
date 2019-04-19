
$(document).ready(function () {
  // M.AutoInit();
  console.log("on");

  // $('input#input_text, textarea#textarea2').characterCounter();
  const cursor = document.querySelector('.cursor');


   

  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;");
  });

  document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });

  $(document).delegate('.open', 'click', function (event) {
    $(this).addClass('oppenned');
    event.stopPropagation();
  });
  $(document).delegate('body', 'click', function (event) {
    $('.open').removeClass('oppenned');
  });
  $(document).delegate('.cls', 'click', function (event) {
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });



  // $("#menu").on('click', function() {
  //   $("#semi-circle-menu").add('class',' closed');
  // });



  // console.log("mautoinit");
  // var left = $(document).outerWidth() - $(window).width();
  // $('body, html').scrollLeft(left);

  // $("#intro-img").on("click", function () {
  //   console.log("click");
  // });
  // $('.tap-target').tapTarget('open');
  // setTimeout(function(){ $('.tap-target').tapTarget('close'); }, 2000);

  // function to open/close nav
  function toggleNav() {
    // if nav is open, close it
    if ($("nav").is(":visible")) {
      $("nav").fadeOut();
      $("button").removeClass("menu");
    }
    // if nav is closed, open it
    else {
      $("button").addClass("menu");
      $("nav").fadeIn().css('display', 'flex');
    }
  }

  // when clicking + or ☰ button
  $("button").click(function () {
    // when clicking ☰ button, open nav
    if ($("header").hasClass("open")) {
      toggleNav();
    }
    // when clicking + button, open header
    else {
      $("header").addClass("open");
    }
  });

  // close nav
  $("#nav-close").click(function () {
    toggleNav();
  });

  // scroll to sections
  $("nav li").click(function () {
    // get index of clicked li and select according section
    var index = $(this).index();
    var target = $("content section").eq(index);

    toggleNav();

    $('html,body').delay(300).animate({
      scrollTop: target.offset().top
    }, 500);
  });
});
