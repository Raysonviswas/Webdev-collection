function __CodePenIFrameAddedToPage(){csstricks.makeCodePenEmbedsResizeable()}function BSACallback(){$(".single-ad").each(function(e,t){-1!=t.innerHTML.indexOf("<!-- no ad -->")&&$(t).remove()})}function CSSTRICKSAdsinsertAd(e){var t=e.ads[0];if(t.statlink){var a=t.text?t.text:t.description,n=$("<a />",{class:"launchbit-in-article",href:t.statlink,target:"_blank",text:t.description});if(t.pixel&&"http"==t.pixel.substring(0,4))for(var r=t.pixel.split("||"),i=0|Math.round(Date.now()/1e4),s=0;s<r.length;s++){var o=document.createElement("img");o.src=r[s].replace("[timestamp]",i),o.border="0",o.height="1",o.width="1",o.style.display="none",n.append(o)}if(t.image){var l=$("<img />",{src:t.image,alt:"",class:"launchbit-img"});n.prepend(l)}$("#bsa-ad-1").append(n)}}!function(e,t){"use strict";function a(a,n,r,s,o){function l(){A=e.devicePixelRatio>1,c(r),n.delay>=0&&setTimeout(function(){u(!0)},n.delay),(n.delay<0||n.combined)&&(s.e=v(n.throttle,function(e){"resize"===e.type&&(k=P=-1),u(e.all)}),s.a=function(e){c(e),r.push.apply(r,e)},s.g=function(){return r=$(r).filter(function(){return!$(this).data(n.loadedName)})},s.f=function(e){for(var t=0;t<e.length;t++){var a=r.filter(e[t]);a.length&&u(!1,a)}},u(),$(n.appendScroll).on("scroll."+o+" resize."+o,s.e))}function c(e){var r=n.defaultImage,i=n.placeholder,s=n.imageBase,o=n.srcsetAttribute,l=n.loaderAttribute,c=n._f||{};e=$(e).filter(function(){var e=$(this),a=m(this);return!e.data(n.handledName)&&(e.attr(n.attribute)||e.attr(o)||e.attr(l)||c[a]!==t)}).data("plugin_"+n.name,a);for(var u=0,d=e.length;u<d;u++){var g=$(e[u]),p=m(e[u]),h=g.attr(n.imageBaseAttribute)||s;p==j&&h&&g.attr(o)&&g.attr(o,f(g.attr(o),h)),c[p]===t||g.attr(l)||g.attr(l,c[p]),p==j&&r&&!g.attr(z)?g.attr(z,r):p==j||!i||g.css(_)&&"none"!=g.css(_)||g.css(_,"url('"+i+"')")}}function u(e,t){if(!r.length)return void(n.autoDestroy&&a.destroy());for(var i=t||r,s=!1,o=n.imageBase||"",l=n.srcsetAttribute,c=n.handledName,u=0;u<i.length;u++)if(e||t||g(i[u])){var p=$(i[u]),h=m(i[u]),f=p.attr(n.attribute),v=p.attr(n.imageBaseAttribute)||o,b=p.attr(n.loaderAttribute);p.data(c)||n.visibleOnly&&!p.is(":visible")||!((f||p.attr(l))&&(h==j&&(v+f!=p.attr(z)||p.attr(l)!=p.attr(T))||h!=j&&v+f!=p.css(_))||b)||(s=!0,p.data(c,!0),d(p,h,v,b))}s&&(r=$(r).filter(function(){return!$(this).data(c)}))}function d(e,t,a,r){++w;var i=function(){y("onError",e),b(),i=$.noop};y("beforeLoad",e);var s=n.attribute,o=n.srcsetAttribute,l=n.sizesAttribute,c=n.retinaAttribute,u=n.removeAttribute,d=n.loadedName,g=e.attr(c);if(r){var p=function(){u&&e.removeAttr(n.loaderAttribute),e.data(d,!0),y(C,e),setTimeout(b,1),p=$.noop};e.off(S).one(S,i).one(x,p),y(r,e,function(t){t?(e.off(x),p()):(e.off(S),i())})||e.trigger(S)}else{var h=$(new Image);h.one(S,i).one(x,function(){e.hide(),t==j?e.attr(N,h.attr(N)).attr(T,h.attr(T)).attr(z,h.attr(z)):e.css(_,"url('"+h.attr(z)+"')"),e[n.effect](n.effectTime),u&&(e.removeAttr(s+" "+o+" "+c+" "+n.imageBaseAttribute),l!==N&&e.removeAttr(l)),e.data(d,!0),y(C,e),h.remove(),b()});var m=(A&&g?g:e.attr(s))||"";h.attr(N,e.attr(l)).attr(T,e.attr(o)).attr(z,m?a+m:null),h.complete&&h.trigger(x)}}function g(e){var t=e.getBoundingClientRect(),a=n.scrollDirection,r=n.threshold,i=h()+r>t.top&&-r<t.bottom,s=p()+r>t.left&&-r<t.right;return"vertical"==a?i:"horizontal"==a?s:i&&s}function p(){return k>=0?k:k=$(e).width()}function h(){return P>=0?P:P=$(e).height()}function m(e){return e.tagName.toLowerCase()}function f(e,t){if(t){var a=e.split(",");e="";for(var n=0,r=a.length;n<r;n++)e+=t+a[n].trim()+(n!==r-1?",":"")}return e}function v(e,t){var r,i=0;return function(s,o){function l(){i=+new Date,t.call(a,s)}var c=+new Date-i;r&&clearTimeout(r),c>e||!n.enableThrottle||o?l():r=setTimeout(l,e-c)}}function b(){--w,r.length||w||y("onFinishedAll")}function y(e,t,r){return!!(e=n[e])&&(e.apply(a,[].slice.call(arguments,1)),!0)}var w=0,k=-1,P=-1,A=!1,C="afterLoad",x="load",S="error",j="img",z="src",T="srcset",N="sizes",_="background-image";"event"==n.bind||i?l():$(e).on(x+"."+o,l)}function n(n,i){var s=this,o=$.extend({},s.config,i),l={},c=o.name+"-"+ ++r;return s.config=function(e,a){return a===t?o[e]:(o[e]=a,s)},s.addItems=function(e){return l.a&&l.a("string"===$.type(e)?$(e):e),s},s.getItems=function(){return l.g?l.g():{}},s.update=function(e){return l.e&&l.e({},!e),s},s.force=function(e){return l.f&&l.f("string"===$.type(e)?$(e):e),s},s.loadAll=function(){return l.e&&l.e({all:!0},!0),s},s.destroy=function(){return $(o.appendScroll).off("."+c,l.e),$(e).off("."+c),l={},t},a(s,o,n,l,c),o.chainable?n:s}var $=e.jQuery||e.Zepto,r=0,i=!1;$.fn.Lazy=$.fn.lazy=function(e){return new n(this,e)},$.Lazy=$.lazy=function(e,a,r){if($.isFunction(a)&&(r=a,a=[]),$.isFunction(r)){e=$.isArray(e)?e:[e],a=$.isArray(a)?a:[a];for(var i=n.prototype.config,s=i._f||(i._f={}),o=0,l=e.length;o<l;o++)(i[e[o]]===t||$.isFunction(i[e[o]]))&&(i[e[o]]=r);for(var c=0,u=a.length;c<u;c++)s[a[c]]=e[0]}},n.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:e,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:t,afterLoad:t,onError:t,onFinishedAll:t},$(e).on("load",function(){i=!0})}(window),function($){"use strict";$.fn.fitVids=function(e){var t={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">'+".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed, .fluid-width-video-wrapper video {position:absolute;top:0;left:0;width:100%;height:100%;}"+"</style>",a.appendChild(n.childNodes[1])}return e&&$.extend(t,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];t.customSelector&&e.push(t.customSelector);var a=".fitvidsignore";t.ignore&&(a=a+", "+t.ignore);var n=$(this).find(e.join(","));n=n.not("object object"),n=n.not(a),n.each(function(){var e=$(this);if(!(e.parents(a).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var t="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),n=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),r=t/n;if(!e.attr("name")){var i="fitvid"+$.fn.fitVids._count;e.attr("name",i),$.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),e.removeAttr("height").removeAttr("width")}})})},$.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e,t){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery")):e(jQuery)}(function($,e){function t(e,t){return e&&">"===e.trim()[0]?(e=e.trim().replace(/^>\s*/,""),t.find(e)):e?$(e):t}$.fn.resizable||($.fn.resizable=function e(a){var n={handleSelector:null,resizeWidth:!0,resizeHeight:!0,resizeWidthFrom:"right",resizeHeightFrom:"bottom",onDragStart:null,onDragEnd:null,onDrag:null,touchActionNone:!0};return"object"==typeof a&&(n=$.extend(n,a)),this.each(function(){function e(e){e.stopPropagation(),e.preventDefault()}function a(t){t.preventDefault&&t.preventDefault(),o=s(t),o.width=parseInt(c.width(),10),o.height=parseInt(c.height(),10),l=c.css("transition"),c.css("transition","none"),n.onDragStart&&!1===n.onDragStart(t,c,n)||(n.dragFunc=r,$(document).bind("mousemove.rsz",n.dragFunc),$(document).bind("mouseup.rsz",i),(window.Touch||navigator.maxTouchPoints)&&($(document).bind("touchmove.rsz",n.dragFunc),$(document).bind("touchend.rsz",i)),$(document).bind("selectstart.rsz",e))}function r(e){var t=s(e),a,r;a="left"===n.resizeWidthFrom?o.width-t.x+o.x:o.width+t.x-o.x,r="top"===n.resizeHeightFrom?o.height-t.y+o.y:o.height+t.y-o.y,n.onDrag&&!1===n.onDrag(e,c,a,r,n)||(n.resizeHeight&&c.height(r),n.resizeWidth&&c.width(a))}function i(t){return t.stopPropagation(),t.preventDefault(),$(document).unbind("mousemove.rsz",n.dragFunc),$(document).unbind("mouseup.rsz",i),(window.Touch||navigator.maxTouchPoints)&&($(document).unbind("touchmove.rsz",n.dragFunc),$(document).unbind("touchend.rsz",i)),$(document).unbind("selectstart.rsz",e),c.css("transition",l),n.onDragEnd&&n.onDragEnd(t,c,n),!1}function s(e){var t={x:0,y:0,width:0,height:0};if("number"==typeof e.clientX)t.x=e.clientX,t.y=e.clientY;else{if(!e.originalEvent.touches)return null;t.x=e.originalEvent.touches[0].clientX,t.y=e.originalEvent.touches[0].clientY}return t}var o,l,c=$(this),u=t(n.handleSelector,c);n.touchActionNone&&u.css("touch-action","none"),c.addClass("resizable"),u.bind("mousedown.rsz touchstart.rsz",a)})})}),$("pre.lang-html, pre[rel=HTML]").find("code").addClass("language-markup"),$("code.html, code.lang-html").removeClass().addClass("language-markup").parent().attr("rel","HTML"),$("code.javascript").removeClass().addClass("language-javascript").attr("rel","JavaScript"),$("pre[rel=JavaScript], pre.lang-js, pre.JavaScript").attr("rel","JavaScript").find("code").removeClass().addClass("language-javascript"),$("pre[rel=jQuery]").find("code").removeClass().addClass("language-javascript"),$("pre[rel='CSS'], pre[rel='LESS']").find("code").removeClass().addClass("language-css"),$("code.css, code.lang-css").removeClass().addClass("language-css").parent().attr("rel","CSS"),$("pre[rel='Sass'], pre[rel='SASS'], pre[rel='SCSS']").removeClass().addClass("language-scss"),$("pre[rel=PHP]").attr("rel","PHP").find("code").removeClass().addClass("language-javascript"),$("code.php").removeClass().addClass("language-javascript").parent().attr("rel","PHP");var csstricks={el:{videoWrappers:$("article, .photo-grid, .single-video-wrapper, .gallery-grid .grid-5-6"),body:$("body")},searchOpen:!1,init:function(){csstricks.getAds(),csstricks.bindUIActions(),csstricks.makeVideosFluidWidth(),csstricks.linkHeaders(),csstricks.mobilizeBrowserSupportTables(),csstricks.commentTogggle()},bindUIActions:function(){$("#comments").on("click",".comment.buried",csstricks.revealComment),$("#search-opener").on("click",csstricks.searchOpener),$("#mobile-menu-toggle").on("click",csstricks.mobileMenuToggle)},mobileMenuToggle:function(){$("#main-nav").toggleClass("open")},searchOpener:function(e){csstricks.searchOpen=!csstricks.searchOpen,$("body").toggleClass("search-is-open"),csstricks.searchOpen&&setTimeout(function(){$("#q").focus()},1)},makeVideosFluidWidth:function(){csstricks.el.videoWrappers.fitVids({customSelector:'video, iframe[src^="https://noti.st/"]'})},makeCodePenEmbedsResizeable:function(){if(window.innerWidth>625){var e=1e3,t=320,a=150,n=$(".article-content"),r=$(".page-wrap");$(".cp_embed_wrapper").each(function(){var t=$(this),a=t.find("iframe");t.append("<div class='win-size-grip'></div>");var n=a.outerHeight();t.css("height",n),a.css("height","100%"),t.resizable({handleSelector:"> .win-size-grip",onDragStart:function(t,a,n){a.addClass("dragging"),e=r.width()},onDragEnd:function(e,t,a){t.removeClass("dragging")},onDrag:function(t,a,n,r,i){return n>e&&(n=e),n<320&&(n=320),r<150&&(r=150),a.width(n),a.height(r),!1}})})}},revealComment:function(e){$(e.currentTarget).removeClass("buried")},linkHeaders:function(){$("article h3, article h4").each(function(e){var t=$(this);if(0==t.has("a").length){var a="";void 0===t.attr("id")?(a="article-header-id-"+e,t.attr("id",a)):a=t.attr("id");var n=$("<a />",{html:"#",class:"article-headline-link",href:"#"+a});t.addClass("has-header-link").prepend(n)}})},mobilizeBrowserSupportTables:function(){$(".browser-support-table").each(function(){var e=[];$(this).find("th").each(function(){e.push($(this).text())}).end().find("td").each(function(t,a){$(a).attr("data-browser-name",e[t])})})},getAds:function(){var e=$("#all-ads");if(e.length)$.ajax({url:"/wp-content/themes/CSS-Tricks-16/ads/ads.php",cache:!1}).done(function(t){var a=$(t),n=a.find(".single-ad"),r=function(e){return Math.floor(Math.random()*e)},i=$.map(n,function(){var e=r(n.length),t=$(n[e]).clone(!0).addClass("ad-"+n.length)[0];return n.splice(e,1),t});e.html(i);var s=document.createElement("script");s.async=!0,s.src="//s3.buysellads.com/ac/bsa.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(s)});else{var t=document.createElement("script");t.async=!0,t.src="//s3.buysellads.com/ac/bsa.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}},commentTogggle:function(){($("body").hasClass("single")||$("body").hasClass("page"))&&(__should_toggle_comments?($("#show-comments-wrap").removeClass("hide"),$("#commentlist").addClass("hide"),$("#show-comments-button").on("click",function(){$("#commentlist").removeClass("hide"),$("#show-comments-wrap").addClass("hide"),$("img.lazyload-gravatar").each(function(){$(this).attr("src",$(this).data("src"))})})):$("img.lazyload-gravatar").Lazy())}};csstricks.init();var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(a.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=a.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||a.languages;var i=r[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);o[l]=i[l]}return a.languages.DFS(a.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,n,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r=n.elements||document.querySelectorAll(n.selector),i=0,s;s=r[i++];)a.highlightElement(s,!0===e,n.callback)},highlightElement:function(t,n,r){for(var i,s,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1],s=a.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var l=t.textContent,c={element:t,language:i,grammar:s,code:l};if(!l||!s)return void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),n&&_self.Worker){var u=new Worker(a.filename);u.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},highlight:function(e,t,r){var i=a.tokenize(e,t);return n.stringify(a.util.encode(i),r)},tokenize:function(e,t,n){var r=a.Token,i=[e],s=t.rest;if(s){for(var o in s)t[o]=s[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var l=t[o];l="Array"===a.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],d=u.inside,g=!!u.lookbehind,p=!!u.greedy,h=0,m=u.alias;u=u.pattern||u;for(var f=0;f<i.length;f++){var v=i[f];if(i.length>e.length)break e;if(!(v instanceof r)){u.lastIndex=0;var b=u.exec(v),y=1;if(!b&&p&&f!=i.length-1){var w=i[f+1].matchedStr||i[f+1],k=v+w;if(f<i.length-2&&(k+=i[f+2].matchedStr||i[f+2]),u.lastIndex=0,!(b=u.exec(k)))continue;var P=b.index+(g?b[1].length:0);if(P>=v.length)continue;var A=b.index+b[0].length,C=v.length+w.length;if(y=3,A<=C){if(i[f+1].greedy)continue;y=2,k=k.slice(0,C)}v=k}if(b){g&&(h=b[1].length);var P=b.index+h,b=b[0].slice(h),A=P+b.length,x=v.slice(0,P),S=v.slice(A),j=[f,y];x&&j.push(x);var z=new r(o,d?a.tokenize(b,d):b,m,b,p);j.push(z),S&&j.push(S),Array.prototype.splice.apply(i,j)}}}}}return i},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r=0,i;i=n[r++];)i(t)}}},n=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.matchedStr=n||null,this.greedy=!!r};if(n.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return n.stringify(a,t,e)}).join("");var i={type:e.type,content:n.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}a.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=(o?" ":"")+l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+o+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,i=t.immediateClose;_self.postMessage(a.highlight(r,a.languages[n],n)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",a.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,class:/\.[-:\.\w]+/,id:/#[-:\.\w]+/}},Prism.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,6}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%\.]+/}),Prism.languages.json={property:/".*?"(?=\s*:)/gi,string:/"(?!:)(\\?[^"])*?"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,boolean:/\b(true|false)\b/gi,null:/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json,Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(t){return e.tokenStack.push(t),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var t=0,a;a=e.tokenStack[t];t++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(t+1)+"}}}",Prism.highlight(a,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;var a=e.util.clone(e.languages.jsx);delete a.punctuation,a=e.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:a}),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:a,alias:"language-javascript"}},e.languages.jsx.tag)}(Prism),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{placeholder:/%[-_\w]+/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","property",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:/\B!(?:default|optional)\b/i,boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss),function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function a(e,a,n){for(var i=a.replace(/\s+/g,"").split(","),s=+e.getAttribute("data-line-offset")||0,o=r()?parseInt:parseFloat,l=o(getComputedStyle(e).lineHeight),c=0,u;u=i[c++];){u=u.split("-");var d=+u[0],g=+u[1]||d,p=document.createElement("div");p.textContent=Array(g-d+2).join(" \n"),p.className=(n||"")+" line-highlight",t(e,"line-numbers")||(p.setAttribute("data-start",d),g>d&&p.setAttribute("data-end",g)),p.style.top=(d-s-1)*l+"px",t(e,"line-numbers")?e.appendChild(p):(e.querySelector("code")||e).appendChild(p)}}function n(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var n=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(n&&!document.getElementById(t)){var r=t.slice(0,t.lastIndexOf(".")),i=document.getElementById(r);i&&(i.hasAttribute("data-line")||i.setAttribute("data-line",""),a(i,n,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var r=function(){var e;return function(){if(void 0===e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),i=0;Prism.hooks.add("complete",function(t){var r=t.element.parentNode,s=r&&r.getAttribute("data-line");r&&s&&/pre/i.test(r.nodeName)&&(clearTimeout(i),e(".line-highlight",r).forEach(function(e){e.parentNode.removeChild(e)}),a(r,s),i=setTimeout(n,1))}),window.addEventListener&&window.addEventListener("hashchange",n)}}(),function(){function e(){t()}function t(){$.ajax({url:"//srv.buysellads.com/ads/CVAITKQ7.json?callback=CSSTRICKSAdsinsertAd&forcenads=1",dataType:"jsonp"})}e()}();