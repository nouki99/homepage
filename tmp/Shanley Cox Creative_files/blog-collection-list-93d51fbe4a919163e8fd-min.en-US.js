(self.webpackChunkextract_css=self.webpackChunkextract_css||[]).push([[53057],{272210:(i,r,o)=>{"use strict";o.r(r);var c=o(169683),M=o.n(c);YUI.add("squarespace-blog-collection-list",function(a){var s=a.config.win,y=s.document,h=200,n=a.Squarespace.Template.getTweakValue,k=function(e){if(e){for(var t=parseInt(n("tweak-blog-list-columns"),10),d=parseInt(n("tweak-blog-list-spacing"),10),m=parseFloat(s.getComputedStyle(e).width);(m-d*(t-1))/t<h;)t--;e.setAttribute("data-columns",t)}},p=function(e){if(e){var t=e.querySelectorAll(".BlogList-item-image img");if(n("tweak-blog-list-item-image-show")==="true"){var d=n("tweak-blog-list-style").toLowerCase()==="stacked",m=n("tweak-blog-list-item-image-aspect-ratio-stacked").toLowerCase()==="auto";if(d&&m)for(var v=0;v<t.length;v++){var l=t[v];l.style.position=null,l.style.top=null,l.style.right=null,l.style.bottom=null,l.style.left=null,l.style.width=null,l.style.height=null,s.ImageLoader.load(l,{load:!0,mode:null})}else for(var f=0;f<t.length;f++)s.ImageLoader.load(t[f],{load:!0,mode:"fill"})}}},b=function(e){k(e),p(e)},T=100,u=!1,g,E=function(e){u||(u=!0),g&&clearTimeout(g),g=setTimeout(function(){!a||!a.config||!a.config.win||(b(e),u=!1)},T)},I=["tweak-blog-list-columns","tweak-blog-list-spacing"],C=["tweak-blog-list-style","tweak-blog-list-columns","tweak-blog-list-spacing","tweak-blog-list-item-image-aspect-ratio-grid","tweak-blog-list-item-image-aspect-ratio-stacked","tweak-blog-list-item-image-show","tweak-blog-list-item-image-width"],D=function(e){var t=e.getName();I.indexOf(t)>=0&&k(),C.indexOf(t)>=0&&p()};a.Global.on("tweak:change",D);var _,w;a.config.win.Squarespace.onInitialize(a,function(){_=y.querySelector(".BlogList"),_&&(b(_),w=E.bind(s,_),s.addEventListener("resize",w))}),a.config.win.Squarespace.onDestroy(a,function(){s.removeEventListener("resize",w)})},"1.0",{requires:[]})},692131:(i,r,o)=>{"use strict";var c=o(272210)},169683:i=>{i.exports={}}},i=>{var r=c=>i(i.s=c),o=r(692131)}]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/3736b65b11decde86e7eb74dbb380918/blog-collection-list-93d51fbe4a919163e8fd-min.en-US.js.map