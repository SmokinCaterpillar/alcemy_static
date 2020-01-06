(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="jogpAbmdfnz/ufdi";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js3').attr('src', (dpi>1) ? 'images/eit-climate-kic-eu-flag-transparent-450.png' : 'images/eit-climate-kic-eu-flag-transparent-225.png');}else{$('.js3').attr('src', (dpi>1) ? 'images/eit-climate-kic-eu-flag-transparent-320.png' : 'images/eit-climate-kic-eu-flag-transparent-160.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.c').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "0.80s", "0.30s", 1, 100);
wl.addAnimation($('.js2')[0], "0.80s", "0.80s", 1, 100);
wl.start();

});