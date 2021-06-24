(function(g){var window=this;var F9=function(a,b){g.T(a).experiments.g("player_gel_logging")&&a.app.ba.nc("onLogToGel",{payload_name:"thumbnailLoaded",payload:b})},G9=function(a,b,c,d){var e=b.Sb();
g.Md(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.Ih();d=b.Zc(c,d?d:"mqdefault.jpg");var k=b instanceof g.kz?g.Uj(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.Gz(f).type;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.P("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.rk(c),is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.Jz&&(c.playlist_length=b.B);a.update(c)},H9=function(a){var b=
g.T(a),c=b.experiments.g("video_wall_moving_thumbnails_hover"),c=b.experiments.g("video_wall_moving_thumbnails_autoplay")||c;
this.C=b.C&&!b.F;b={K:"img",Y:"ytp-videowall-moving-thumbnail",X:{src:"{{moving_thumbnail}}"}};g.R.call(this,{K:"a",Y:"ytp-videowall-still",X:{href:"{{url}}",target:this.C?"_blank":null,"aria-label":"{{watch}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},R:[{K:"div",Y:"ytp-videowall-still-image",X:{style:"{{background}}"}},c?b:null,{K:"span",Y:"ytp-videowall-still-info",R:[{K:"span",Y:"ytp-videowall-still-info-bg",R:[{K:"span",Y:"ytp-videowall-still-info-content",X:g.Qh||g.lc?{style:"will-change: opacity"}:
null,R:[{K:"span",Y:"ytp-videowall-still-info-title",R:["{{title}}"]},{K:"span",Y:"ytp-videowall-still-info-author",R:["{{author_and_views}}"]},{K:"span",Y:"ytp-videowall-still-info-duration",R:["{{duration}}"]}]}]}]},{K:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],R:[{K:"span",Y:"ytp-videowall-still-listlabel-icon"},g.P("YTP_PLAYLIST"),{K:"span",Y:"ytp-videowall-still-listlabel-length",R:[" (",{K:"span",R:["{{playlist_length}}"]},")"]}]},{K:"span",ea:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],R:[{K:"span",Y:"ytp-videowall-still-listlabel-mix-icon"},g.P("YTP_MIX"),{K:"span",Y:"ytp-videowall-still-listlabel-length",R:[" (50+)"]}]}]});this.o=a;this.A=null;this.D=0;this.P("click",this.$K);this.P("keypress",this.aL);c&&this.T(this.ua["ytp-videowall-moving-thumbnail"],"load",this.cL);g.T(a).experiments.g("player_interaction_logging")&&(a=a.app.ca,g.db(a.B,this),b=String(a.G++),this.element.setAttribute("data-visual-id",b),g.Bb(this,(0,g.w)(a.D,a,this)))},I9=
function(a){if(5E5<g.iw(a.o.app.la)){var b=a.A.kk();
b&&(a.D=(0,g.Aj)(),a.update({moving_thumbnail:b}))}},J9=function(a){g.Sz.call(this,a,{K:"div",
ea:["ytp-thumbnail-overlay","ytp-channel-overlay"],R:[{K:"div",Y:"ytp-thumbnail-overlay-image",X:{style:"{{background}}"}},{K:"div",Y:"ytp-thumbnail-overlay-curtain"}]})},K9=function(a){var b=g.T(a).experiments.g("moving_thumbnails_autonav"),c={K:"img",
Y:"ytp-upnext-moving-thumbnail",X:{src:"{{moving_thumbnail}}"}},c={K:"div",Y:"ytp-upnext",X:{"aria-label":"{{watch}}"},R:[{K:"div",Y:"ytp-thumbnail-overlay-image",X:{style:"{{background}}"}},b?c:null,{K:"div",Y:"ytp-thumbnail-overlay-curtain"},{K:"span",Y:"ytp-upnext-top",R:[{K:"span",Y:"ytp-upnext-header",R:[g.P("YTP_PLAYLIST_UP_NEXT")]},{K:"span",Y:"ytp-upnext-title",R:["{{title}}"]},{K:"span",Y:"ytp-upnext-author",R:["{{author}}"]}]},{K:"a",Y:"ytp-upnext-autoplay-icon",X:{href:"{{url}}"},R:[{K:"svg",
X:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},R:[{K:"circle",Y:"ytp-svg-autoplay-circle",X:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{K:"circle",Y:"ytp-svg-autoplay-ring",X:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{K:"polygon",Y:"ytp-svg-autoplay-triangle",X:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{K:"span",Y:"ytp-upnext-bottom",R:[{K:"span",
Y:"ytp-upnext-cancel"},{K:"span",Y:"ytp-upnext-paused",R:[g.P("YTP_AUTOPLAY_PAUSED_2")]}]},{K:"span",Y:"ytp-upnext-close"}]};g.R.call(this,c);this.D=null;var d=this.ua["ytp-upnext-cancel"],c=this.ua["ytp-upnext-close"];this.D=new g.R({K:"button",ea:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:0,"aria-label":g.P("YTP_AUTOPLAY_CANCEL")},R:[g.P("YTP_CANCEL")]});g.K(this,this.D);this.D.P("click",this.eu,this);this.D.Ea(d);d=new g.R({K:"button",ea:["ytp-upnext-close-button","ytp-button"]});g.K(this,
d);d.P("click",this.eu,this);d.Ea(c);this.o=a;this.L=this.ua["ytp-svg-autoplay-ring"];this.F=this.C=this.A=this.B=null;this.G=new g.Dd(this.Xj,5E3,this);g.K(this,this.G);this.H=0;this.T(this.ua["ytp-upnext-autoplay-icon"],"click",this.eG);this.bu();this.T(a,"autonavvisibility",this.bu);this.T(a,"mdxnowautoplaying",this.wF);this.T(a,"mdxautoplaycanceled",this.xF);this.T(a,"mdxautoplayupnext",this.aw);3==this.o.Ya()&&(a=(a=g.Hi(this.o).D)?a.loaded?a.C.suggestion:null:null)&&this.aw(a);b&&(this.J=0,
this.T(this.ua["ytp-upnext-moving-thumbnail"],"load",this.CM))},L9=function(a,b){a.B=b;
G9(a,b,g.T(a.o),"hqdefault.jpg");g.Kd(a.element,"ytp-moving-thumbnail-loaded");a.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});if(5E5<g.iw(a.o.app.la)){var c=a.B.kk();c&&(a.J=(0,g.Aj)(),a.update({moving_thumbnail:c}))}},M9=function(a,b){a.A||(g.bi("a11y-announce",g.P("YTP_PLAYLIST_UP_NEXT")+" "+a.B.title),a.H=(0,g.Aj)(),a.A=new g.Dd((0,g.w)(a.um,a,b),25),a.um(b));
g.Kd(a.element,"ytp-upnext-autoplay-paused")},O9=function(a){N9(a);
a.H=(0,g.Aj)();a.um();g.M(a.element,"ytp-upnext-autoplay-paused")},N9=function(a){a.A&&(a.A.dispose(),a.A=null)},P9=function(a,b){g.Qz.call(this,{K:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.O=!1},Q9=function(a){a=g.T(a);
return a.Kb&&!a.wa},R9=function(a,b){P9.call(this,a,"videowall-endscreen");
this.ca=a;this.aa=b;this.G=0;this.A=[];this.H=this.D=this.C=null;this.J=this.W=!1;this.F=new g.om(this);g.K(this,this.F);this.L=new g.Dd(g.y(g.M,this.element,"ytp-show-tiles"),0);g.K(this,this.L);var c=new g.R({K:"button",ea:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":g.P("YTP_PREVIOUS")},R:[g.xg()]});g.K(this,c);c.Ea(this.element);c.P("click",this.YK,this);this.M=new g.Mj({K:"div",Y:"ytp-endscreen-content"});g.K(this,this.M);this.M.Ea(this.element);c=new g.R({K:"button",ea:["ytp-button",
"ytp-endscreen-next"],X:{"aria-label":g.P("YTP_NEXT")},R:[g.yg()]});g.K(this,c);c.Ea(this.element);c.P("click",this.XK,this);this.B=new K9(a);g.K(this,this.B);g.xs(this.o,this.B.element,5);this.oa()},S9=function(a){return(0,g.S)(a.U,function(a){return g.Rz(a)})},T9=function(a,b,c){return 0==b&&a.C.length&&(b=c/R9.g,2<=c/R9.g&&2<=b&&g.T(a.o).experiments.g("video_wall_emphasize_first"))?2*R9.g:R9.g},U9=function(a){var b=a.aa.up();
b!=a.W&&(a.W=b,a.o.Sa("autonavvisibility"))},V9=function(a){P9.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.A=new J9(a);g.K(this,this.A);g.xs(this.o,this.A.element,5);this.B=new g.R(["div","ytp-subscribe-card",["img","ytp-author-image",{src:b.profilePicture}],["div","ytp-subscribe-card-right",["div","ytp-author-name",b.author],["div","html5-subscribe-button-container"]]]);g.K(this,this.B);this.B.Ea(this.element);this.C=new g.Hs(g.P("YTP_SUBSCRIBE"),g.P("YTP_UNSUBSCRIBE"),!0,b.Mq,b.subscribed,"trailer-endscreen",null,a);g.K(this,this.C);this.C.Ea(this.B.ua["html5-subscribe-button-container"]);
this.oa()},W9=function(a){g.jm.call(this,a);
g.ch({});this.o=null;this.isAvailable=!0;this.A=new g.om(this);g.K(this,this.A);this.B=g.T(a);Q9(a)?this.o=new R9(this.g,this):this.B.wa?this.o=new V9(this.g):this.o=new P9(this.g);g.K(this,this.o);g.xs(this.g,this.o.element,5);this.fv();this.A.T(a,"videodatachange",this.fv,this);this.A.T(a,"crn_endscreen",this.JK,this);this.A.T(a,"crx_endscreen",this.KK,this)};
g.A(H9,g.R);g.h=H9.prototype;g.h.wh=function(){var a=this.A.Sb().videoId;g.r7(this.o.app,a,this.A.ad,this.A.Ih(),void 0,void 0)};
g.h.$K=function(a){g.Lv(this.o,this);g.Qk(a,this.o,!this.o.isFullscreen()&&this.C,this.A.ad)&&this.wh()};
g.h.bL=function(){this.Ba(this.B);this.B=null;I9(this)};
g.h.aL=function(a){switch(a.keyCode){case 13:case 32:g.Yi(a)||(this.wh(),g.Xi(a))}};
g.h.cL=function(a){120<g.Ti(a).naturalWidth&&(g.M(this.element,"ytp-videowall-moving-thumbnail-loaded"),F9(this.o,{isMovingThumbnail:!0,durationLoadingMs:(0,g.Aj)()-this.D,videoId:this.A.videoId}))};
g.A(J9,g.Sz);J9.prototype.Ab=function(a){a?this.B.show():g.Tr(this.B)};
g.A(K9,g.R);g.h=K9.prototype;g.h.Xj=function(){this.C&&(this.G.stop(),this.Ba(this.F),this.F=null,this.C.close(),this.C=null)};
g.h.bu=function(){this.Ab(g.jv(this.o))};
g.h.VF=function(){window.focus();this.Xj()};
g.h.um=function(a){a=a||g.T(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min((0,g.Aj)()-this.H,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Ya()?this.select(!0):this.A&&this.A.start()};
g.h.select=function(a){var b=g.T(this.o);if(b.experiments.g("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.rr(this.o,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.B.Sb(),this.Xj(),this.C=new window.Notification(g.P("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.Zc(b)}),this.F=this.T(this.C,"click",this.VF),this.G.start())}N9(this);this.o.kj(!1,
a)};
g.h.eG=function(a){!g.Xe(this.D.element,g.Ti(a))&&g.Qk(a,this.o)&&this.select()};
g.h.eu=function(){g.xv(this.o,"autonavcancel");g.lv(this.o,!0)};
g.h.CM=function(a){120<g.Ti(a).naturalWidth&&(g.M(this.element,"ytp-moving-thumbnail-loaded"),F9(this.o,{isMovingThumbnail:!0,durationLoadingMs:(0,g.Aj)()-this.J,videoId:this.B.Sb().videoId}))};
g.h.wF=function(a){this.show();M9(this,a)};
g.h.aw=function(a){this.B&&this.B.Sb().videoId==a.Sb().videoId||L9(this,a)};
g.h.xF=function(){N9(this);this.oa()};
g.h.S=function(){N9(this);this.Xj();K9.N.S.call(this)};
g.A(P9,g.Qz);P9.prototype.create=function(){this.O=!0};
P9.prototype.destroy=function(){this.O=!1};
P9.prototype.Am=function(){return!1};
g.A(R9,P9);R9.g=2;g.h=R9.prototype;g.h.create=function(){R9.N.create.call(this);var a=this.o.getVideoData();a&&(this.C=S9(a),this.D=a);this.$f();this.F.T(this.o,"appresize",this.$f);this.F.T(this.o,"videodatachange",this.ZK);this.F.T(this.o,"autonavchange",this.jx);this.F.T(this.o,"autonavcancel",this.WK);this.F.T(this.element,"transitionend",this.lH)};
g.h.destroy=function(){g.qm(this.F);g.Db(this.A);this.A=[];this.C=null;R9.N.destroy.call(this);g.Kd(this.element,"ytp-show-tiles");this.L.stop()};
g.h.Am=function(){return 1!=this.D.autonavState};
g.h.Wi=function(){return g.Iv(this.o)&&this.Am()&&!this.H};
g.h.show=function(){R9.N.show.call(this);g.Kd(this.element,"ytp-show-tiles");g.T(this.o).isMobile?g.Ed(this.L):this.L.start();(this.J||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.lv(this.o,!1);var a=this.Wi();g.Iv(this.o)&&g.T(this.o).experiments.g("ui_logging")&&this.aa.log({cancelButtonShow:a?"1":"0",state:this.Am()?"enabled":"disabled"});a?(U9(this),2==this.D.autonavState?g.T(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.Rw()?this.B.select(!0):M9(this.B):3==this.D.autonavState&&
O9(this.B)):(g.lv(this.o,!0),U9(this))};
g.h.oa=function(){R9.N.oa.call(this);O9(this.B);U9(this)};
g.h.lH=function(a){g.Ti(a)==this.element&&this.$f()};
g.h.$f=function(){if(this.C&&this.C.length){var a=g.T(this.o).experiments.g("video_wall_moving_thumbnails_hover");g.M(this.element,"ytp-endscreen-paginate");var b=g.Nl(this.element),c=b.width/b.height,d=96/54,e=R9.g,f=R9.g,k=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=this.C.length,n=Math.pow(R9.g,2),r,u=T9(this,0,l),x=T9(this,1,l);r=m*n+(Math.pow(u,2)-n);r+=Math.pow(x,2)-n;for(r-=n;0<r&&(e<k||f<l);){var z=e/R9.g,C=f/R9.g,G=e<=k-R9.g&&r>=C*n,J=f<=l-R9.g&&r>=z*n;if((z+1)/C*d/c>c/(z/(C+1)*d)&&
J)r-=z*n,f+=R9.g;else if(G)r-=C*n,e+=R9.g;else if(J)r-=z*n,f+=R9.g;else break}d=!1;k=R9.g+u;r>=3*n&&6>=m*n-r&&(f>=k||e>=k)&&x<=R9.g&&(d=!0);r=96*e;n=54*f;c=r/n<c?b.height/n:b.width/r;c=Math.min(c,2);r*=c;n*=c;r*=g.ne(b.width/r||1,1,1.21);n*=g.ne(b.height/n||1,1,1.21);r=Math.floor(Math.min(b.width,r));n=Math.floor(Math.min(b.height,n));b=this.M.element;g.Ml(b,r,n);g.wl(b,{marginLeft:r/-2+"px",marginTop:n/-2+"px"});L9(this.B,this.C[0]);g.Md(this.element,"ytp-endscreen-takeover",this.Wi());U9(this);
c=r+4;r=n+4;n=0;k=!this.Wi();l=!1;for(z=0;z<e;z++)for(C=0;C<f;C++){var J=x>R9.g&&1<=n&&!l?n+1:n,O=0;d&&z>=e-R9.g&&C>=f-R9.g?O=1:0==C%R9.g&&0==z%R9.g&&(C<u&&z<u?0==C&&0==z&&(O=u):x>R9.g&&C>=f-x&&z>=e-x?C==f-x&&z==e-x&&(l=!0,J=1,O=x):O=R9.g);J=g.oe(J+this.G,m);if(0!=O){G=this.A[n];G||(G=new H9(this.o),this.A[n]=G,b.appendChild(G.element));var Ra=Math.floor(r*C/f),bb=Math.floor(c*z/e),rb=Math.floor(r*(C+O)/f)-Ra-4,Zc=Math.floor(c*(z+O)/e)-bb-4;g.Cl(G.element,bb,Ra);g.Ml(G.element,Zc,rb);g.wl(G.element,
"transitionDelay",(C+z)/20+"s");g.Md(G.element,"ytp-videowall-still-mini",1==O);g.Md(G.element,"ytp-videowall-still-large",2<O);J=this.C[J];O=k&&!a;G.A=J;Ra=g.T(G.o);G9(G,J,Ra,g.Hd(G.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");g.Kd(G.element,"ytp-videowall-moving-thumbnail-loaded");G.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});O?(g.M(G.element,"ytp-videowall-active"),I9(G)):Ra.experiments.g("video_wall_moving_thumbnails_hover")&&
!G.B&&(G.B=G.P("mouseover",G.bL));O=J.ad;J=G.o;g.T(J).experiments.g("player_interaction_logging")&&(J=J.app.ca,O=O&&O.itct,G=G.element.getAttribute("data-visual-id"),g.Jv(J,"onLogServerVeCreated",{id:G,tracking_params:O}));n++}}g.Md(this.element,"ytp-endscreen-paginate",n<m);for(a=this.A.length-1;a>=n;a--)G=this.A[a],g.Re(G.element),g.Cb(G);this.A.length=n}};
R9.A=2;R9.o=1.21;g.h=R9.prototype;g.h.ZK=function(){var a=this.o.getVideoData();this.D!=a&&(this.G=0,this.C=S9(a),this.D=a,this.$f())};
g.h.XK=function(){this.G+=this.A.length;this.$f()};
g.h.YK=function(){this.G-=this.A.length;this.$f()};
g.h.gD=function(){return!!this.B.A};
g.h.jx=function(a){1==a?(this.J=!1,this.H=this.D.clientPlaybackNonce,N9(this.B),this.g&&this.$f()):(this.J=!0,this.g&&this.Wi()&&(2==a?M9(this.B):3==a&&O9(this.B)))};
g.h.WK=function(a){if(a){for(a=0;a<this.A.length;a++)g.Mv(this.ca,this.A[a],!0);this.jx(1)}else this.H=null,this.J=!1;this.$f()};
g.A(V9,P9);V9.prototype.show=function(){V9.N.show.call(this);this.A.Ab(!0)};
V9.prototype.oa=function(){V9.N.oa.call(this);this.A.Ab(!1)};
g.A(W9,g.jm);g.h=W9.prototype;g.h.fx=function(){var a=this.g.getVideoData(),b=!Q9(this.g)||!(!a.U||!a.U.length),a=g.hm(a,"ypc_module"),c=g.X3(this.g.app);return(b||!1)&&!a&&!c};
g.h.up=function(){return(this.o instanceof R9||!1)&&this.o.g&&this.o.Wi()};
g.h.eD=function(){return this.up()?this.o.gD():!1};
g.h.S=function(){g.Ci(this.g,"endscreen");W9.N.S.call(this)};
g.h.load=function(){W9.N.load.call(this);this.o.show();g.T(this.g).wa&&.01>Math.random()&&this.log({trailerEndscreenShow:1})};
g.h.log=function(a){g.rr(this.g,"end",a)};
g.h.unload=function(){W9.N.unload.call(this);this.o.oa();this.o.destroy();this.isAvailable=!1};
g.h.JK=function(a){this.fx()&&(this.o.O||this.o.create(),"load"==a.getId()&&this.load())};
g.h.KK=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.fv=function(){g.Ci(this.g,"endscreen");var a=Math.max(1E3*(this.g.getVideoData().lengthSeconds-10),0),a=new g.wi(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.wi(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.Ai(this.g,[a,b])};
window._exportCheck==g.xa&&g.la("ytmod.player.endscreen",W9,void 0);})(_yt_player);
