$(document).ready(function(){$(".main_content_nav_m").addClass("hide");$(".main_content_nav_m").addClass("hide").before('<div class="nav_small_m"><span class="icon-list"></span></div>');$(".nav_small_m").click(function(){$(".main_content_nav_m").slideToggle(750)});$(window).resize(function(){window.innerWidth>480&&$(".main_content_nav_m").removeAttr("style")});Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")});var e=$(".pagination");e.find(".older").on("click",function(t){t.preventDefault();var n=$(this);$.ajax(n.attr("href")).done(function(t){var r=$("<div></div>").html(t),i=r.find(".post-excerpt"),s=r.find(".pagination .older");i.insertBefore(e);n.attr("href",s.attr("href"));s.length||n.remove()})})});