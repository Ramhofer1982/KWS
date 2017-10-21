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
            targetPosition = $('#areaproduct').offset().top - 200;
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
    var productTop = $('#areaproduct').offset().top - 210;
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

showVideo = function() {
    var kdp = document.getElementById( "kalturaplayer" );
    kdp.sendNotfication( "doPlay" );
}

var swa = {
    pubToken: 'a7579dd8-dec0-1d4e-8500-487b05bd1e58',
    baseUrl: 'https://trackerwebanalytics.hana.ondemand.com/tracker/',
    visitorCookieTimeout: 63113852,
    dntLevel: 1,
    bannerEnabled: false
};
(function(){
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.defer=true; g.async=true; g.src=swa.baseUrl+'js/privacy.js';
    s.parentNode.insertBefore(g,s);
 })();

$(document).ready(function(){
    kWidget.thumbEmbed({
      "targetId": "kalturaplayer",
      "wid": "_1921661",
      "uiconf_id": "35919811",
      "flashvars": {
        "leadWithHTML5": "true",
        "sideBarContainer": {
          "plugin": "true",
          "position": "left",
          "clickToClose": "true"
        },
        "chapters": {
          "plugin": "true",
          "layout": "vertical",
          "thumbnailRotator": "false"
        },
        "streamSelector": {
          "plugin": "true"
        },
        "EmbedPlayer": {
          "SpinnerTarget": "videoHolder"
        },
        "dualScreen": {
          "plugin": "true"
        }
      },
      "entry_id": "0_5j4a6vkv"
    });
});

kWidget.addReadyCallback( function( playerId ){
	var kdp = document.getElementById( playerId );
	kdp.kBind( 'mediaReady', function(){

        $('button.mobile-play-video, button.video-player').click(function(){
            var kdp = document.getElementById( 'kalturaplayer' );
    		kdp.sendNotfication( "doPlay");
            console.log("PLAYING");
    	});

	})
});
