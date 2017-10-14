var demoUrl = 'https://go.kwstrial-sap.cfapps.eu10.hana.ondemand.com/';
var contactMail = 'knowledge_workspace@sap.com';

tryDemo = function() {
    window.open(demoUrl, '_blank');
}

contactUs = function() {
    location.href =  "mailto:"+contactMail;
}

downloadInfoSheet = function(name) {
    var finalUrl = './infosheets/' + name + '.pdf';
    window.open(finalUrl, '_blank');
}

jumpToArea = function(name) {
    var targetPosition = 0;
    switch(name) {
        case 'contact':
            targetPosition = $(document).height();
            break;
        case 'product':
            targetPosition = $('#areaproduct').offset().top - 80;
            break;
    }

    $("html, body").animate({ scrollTop: targetPosition }, 1000);
}

highlightNavMenuPoint = function(name) {
    $('#navmenu li').removeClass('active');
    $('#menu' + name).addClass('active');
}

highlightNavigationButton = function(event) {
    var windowTop = $(window).scrollTop();
    var areaIntroTop = $('#areaintro').offset().top;
    var productTop = $('#areaproduct').offset().top;
    var isAtEndOfPage = $(window).scrollTop() + $(window).height() > $(document).height() - 300;
    var targetToggleElement = undefined;

    if (isAtEndOfPage) {
        targetToggleElement = 'contact';
    } else if (windowTop > productTop) {
        targetToggleElement = 'product';
    } else {
        targetToggleElement = 'intro';
    }

    highlightNavMenuPoint(targetToggleElement);
}

$(document).ready(function(){
    $('div.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(window).scroll(highlightNavigationButton);
});
