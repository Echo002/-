define("common/wx/pagebar.js",["widget/pagination.css","tpl/pagebar.html.js","common/qq/Class.js","common/wx/Tips.js"],function(t,e){
"use strict";
var i,n,s,a=(t("widget/pagination.css"),t("tpl/pagebar.html.js")),r=t("common/qq/Class.js"),h=t("common/wx/Tips.js");
s=template.compile(a),i=e,n={
first:"首页",
last:"末页",
prev:"上页",
next:"下页",
startPage:1,
initShowPage:1,
perPage:10,
startRange:1,
midRange:3,
endRange:1,
totalItemsNum:0,
container:"",
callback:null,
isNavHide:!1,
isSimple:!0
};
var o=function(t,e,i){
var n;
return n=t+(e-1),n=n>i?i:n;
},g=function(t,e,i){
var n;
return n=i%2===0?e-(i/2-1):e-(i-1)/2,n=t>n?t:n;
},u=function(t,e,i){
var n;
return n=e%2===0?parseInt(t)+e/2:parseInt(t)+(e-1)/2,n=n>i?i:n;
},c=function(t,e,i){
var n;
return n=e-(i-1),n=t>n?t:n;
},l=function(t,e){
if(e[t]&&isNaN(e[t]))throw new Error("Invalid arguments: "+t+" should be a number");
},p=function(t){
if(l("perPage",t),l("totalItemsNum",t),l("startPage",t),l("startRange",t),l("midRange",t),
l("endRange",t),l("initShowPage",t),void 0!==t.callback&&null!==t.callback&&!$.isFunction(t.callback))throw new Error("Invalid arguments: callback should be a function");
},d=function(t,e,i){
var n=t.container.find(".page_"+i);
if("string"==typeof e){
var s=$(e);
0!==s.length&&(n=s);
}else{
if(e!==!1)throw new Error("Invalid Paramter: '"+i+"' should be a string or false");
n.hide();
}
return n;
},P=r.declare({
init:function(t){
if(t.totalItemsNum){
var e;
if(p(t),e=$.extend(!0,{},n,t),this._init(e),e.initShowPage<e.startPage)throw new Error("Invalid arguments: initShowPage should be larger than startPage");
if(e.initShowPage>e.endPage)throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
this.paginate();
}
},
_init:function(t){
this.currentPage=t.initShowPage,this._isNextButtonShow=!0,this._isPrevButtonShow=!0,
this.uid="wxPagebar_"+ +new Date,this.initEventCenter(),this.optionsForTemplate={},
$.extend(this,t),this.container=$(t.container),this.optionsForTemplate.isSimple=t.isSimple,
this.optionsForTemplate.firstButtonText=0===$(t.first).length?t.first:n.first,this.optionsForTemplate.lastButtonText=0===$(t.last).length?t.last:n.last,
this.optionsForTemplate.nextButtonText=0===$(t.next).length?t.next:n.next,this.optionsForTemplate.prevButtonText=0===$(t.prev).length?t.prev:n.prev,
this.optionsForTemplate.isNavHide=t.isNavHide,this.generatePages(parseInt(this.totalItemsNum)),
this.gapForStartRange=this.container.find(".gap_prev"),this.gapForEndRange=this.container.find(".gap_next"),
this.firstButton=d(this,t.first,"first"),this.lastButton=d(this,t.last,"last"),this.prevButton=d(this,t.prev,"prev"),
this.nextButton=d(this,t.next,"next"),this.bindEvent();
},
initEventCenter:function(){
this.eventCenter={
eventList:[],
bind:function(t,e){
this.eventList[t]||(this.eventList[t]=[]),this.eventList[t].push(e);
},
trigger:function(t){
var e,i;
this.eventList[t]||(this.eventList[t]=[]),e=this.eventList[t];
for(var n=0;n<e.length;n++)if(i=Array.prototype.slice.call(arguments,1),e[n].apply(this,i)===!1)return!1;
},
unbind:function(t,e){
if(!this.eventList)throw new Error("The eventList was undefined");
if(!this.eventList[t])throw new Error("The event type "+t+" was not found");
if(void 0===e)this.eventList[t]=[];else for(var i=this.eventList[t],n=i.length,s=0;n>s;s++)if(i[s]===e){
i.splice(s,1);
break;
}
}
};
},
generatePages:function(t){
var e,i,n,a,r,h;
for(this.pageNum=Math.ceil(t/this.perPage),this.endPage=this.startPage+this.pageNum-1,
this.gapForStartRange=null,this.gapForEndRange=null,this.optionsForTemplate.startRange=[],
this.optionsForTemplate.midRange=[],this.optionsForTemplate.endRange=[],i=o(this.startPage,this.startRange,this.endPage),
n=g(this.startPage,this.currentPage,this.midRange),a=u(this.currentPage,this.midRange,this.endPage),
r=c(this.startPage,this.endPage,this.endRange),i>=r&&(r=i+1),e=this.startPage;i>=e;e+=1)this.optionsForTemplate.startRange.push(e);
for(var l=0,e=n;l<this.midRange;l+=1,e+=1)this.optionsForTemplate.midRange.push(e);
for(e=r;e<=this.endPage;e+=1)this.optionsForTemplate.endRange.push(e);
this.optionsForTemplate.endPage=this.endPage,this.optionsForTemplate.initShowPage=this.initShowPage,
h=s(this.optionsForTemplate),this.container.html(h),1==this.pageNum?this.container.hide():this.container.show(),
this.pages=this.container.find(".page_nav"),this.midPages=this.container.find(".js_mid"),
this.labels=this.container.find(".page_num label"),this.container.find(".pagination").attr("id",this.uid);
},
paginate:function(){
var t,e,i,n,s,a,r,h,l,p;
if(this.isSimple===!0)for(var d=0,P=this.labels.length;P>d;d++)d%2===0&&$(this.labels[d]).html(this.currentPage);else{
e=o(this.startPage,this.startRange,this.endPage),a=g(this.startPage,this.currentPage,this.midRange),
r=u(this.currentPage,this.midRange,this.endPage),h=c(this.startPage,this.endPage,this.endRange),
e>=h&&(h=e+1),e>=a&&(a=e+1),r>=h&&(r=h-1),this.pages.show(),this.pages.removeClass("current"),
p=parseInt(this.midPages.length/this.midRange);
for(var d=0,P=p;P>d;d++){
for(s=0,t=a;r>=t;t+=1)n=this.midRange*d+(t-a),l=$(this.midPages[n]),l.html(t),s+=1,
t==this.currentPage&&l.addClass("current");
for(n=this.midRange*d+s;s<this.midRange;s+=1)l=$(this.midPages[n]),l.hide(),l.removeClass("current"),
n+=1;
}
for(var d=0,P=this.pages.length;P>=d;d++)i=$(this.pages[d]),t=parseInt(i.html()),
t===parseInt(this.currentPage)&&i.addClass("current");
if(a>e+1?this.gapForStartRange.show():this.gapForStartRange.hide(),h>r+1?this.gapForEndRange.show():this.gapForEndRange.hide(),
this.isNavHide){
for(var d=this.startPage;d<=this.endPage;d+=1)this.pages.hide();
this.gapForStartRange.hide(),this.gapForEndRange.hide();
}
}
this.checkButtonShown();
},
destroy:function(){
this.container.off("click","#"+this.uid+" a.page_nav"),this.container.off("click","#"+this.uid+" a.page_go"),
this.container.off("keydown","#"+this.uid+" .goto_area input"),this.nextButton.off("click"),
this.prevButton.off("click"),this.firstButton.off("click"),this.lastButton.off("click");
},
bindEvent:function(){
this.container.on("click","#"+this.uid+" a.page_nav",this.proxy(function(t){
var e=$(t.target);
return e.hasClass("current")?!1:(this.clickPage(parseInt(e.html())),!1);
},this)),this.nextButton.on("click",this.proxy(function(t){
$(t.target);
return this.nextPage(),!1;
},this)),this.prevButton.on("click",this.proxy(function(t){
$(t.target);
return this.prevPage(),!1;
},this)),this.firstButton.on("click",this.proxy(function(t){
$(t.target);
return this.goFirstPage(),!1;
},this)),this.lastButton.on("click",this.proxy(function(t){
$(t.target);
return this.goLastPage(),!1;
},this)),this.container.on("click","#"+this.uid+" a.page_go",this.proxy(function(t){
var e=$(t.target).prev();
return this.goPage(e.val()),!1;
},this)),this.container.on("keydown","#"+this.uid+" .goto_area input",this.proxy(function(t){
return wx.isHotkey(t,"enter")?(this.container.find("a.page_go").click(),!1):void 0;
},this));
},
on:function(t,e){
this.eventCenter.bind(t,this.proxy(e,this));
},
callbackFunc:function(t){
var e={
currentPage:this.currentPage,
perPage:this.perPage,
count:this.pageNum
};
return $.isFunction(this.callback)&&this.callback(e)===!1?!1:this.eventCenter.trigger(t,e)===!1?!1:void this.paginate();
},
proxy:function(t,e){
return function(){
var i=Array.prototype.slice.call(arguments,0);
return t.apply(e,i);
};
},
nextPage:function(){
this.currentPage!==this.endPage&&(this.currentPage++,this.callbackFunc("next")===!1&&this.currentPage--);
},
prevPage:function(){
this.currentPage!==this.startPage&&(this.currentPage--,this.callbackFunc("prev")===!1&&this.currentPage++);
},
goFirstPage:function(){
var t=this.currentPage;
this.currentPage=this.startPage,this.callbackFunc("goFirst")===!1&&(this.currentPage=t);
},
goLastPage:function(){
var t=this.currentPage;
this.currentPage=this.endPage,this.callbackFunc("goLast")===!1&&(this.currentPage=t);
},
checkButtonShown:function(){
+this.currentPage===+this.startPage?this.hidePrevButton():this.showPrevButton(),
+this.currentPage===+this.endPage?this.hideNextButton():this.showNextButton();
},
goPage:function(t){
var e=this.currentPage,t=Math.round(t);
return t===this.currentPage?!1:isNaN(t)?(h.err("请输入正确的页码"),!1):""===t?!1:t<this.startPage?(h.err("请输入正确的页码"),
!1):t>this.endPage?(h.err("请输入正确的页码"),!1):(this.currentPage=t,void(this.callbackFunc("go")===!1&&(this.currentPage=e)));
},
clickPage:function(t){
var e=this.currentPage;
isNaN(t)&&(t=this.startPage),this.currentPage=t<this.startPage?this.startPage:t>this.endPage?this.endPage:t,
this.callbackFunc("click")===!1&&(this.currentPage=e);
},
showNextButton:function(){
this.nextButton&&this._isNextButtonShow===!1&&(this.nextButton.show(),this._isNextButtonShow=!0);
},
showPrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!1&&(this.prevButton.show(),this._isPrevButtonShow=!0);
},
hideNextButton:function(){
this.nextButton&&this._isNextButtonShow===!0&&(this.nextButton.hide(),this._isNextButtonShow=!1);
},
hidePrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!0&&(this.prevButton.hide(),this._isPrevButtonShow=!1);
}
});
return e=P;
});define("common/wx/cgiRetCode.js",["common/wx/Cgi.js","common/wx/Tips.js"],function(n){
"use strict";
var e=n("common/wx/Cgi.js"),o=n("common/wx/Tips.js"),r={
before:function(){},
after:function(){},
"default":function(){
o.err("系统繁忙，请稍后再试");
},
0:function(){},
32:function(){
o.err("浏览器内核版本过低，请升级");
},
200013:function(){
o.err("访问太频繁，请稍后再试");
},
200003:function(){
o.err("登录超时，请重新登录");
},
200040:function(){
o.err("登录超时，请重新登录");
},
"-7":function(){
o.err("没有权限访问");
},
"-1":function(){
o.err("发生错误，请稍后再试");
},
505001:function(){
o.err("账号异常，请重新登录");
},
505002:function(){
o.err("系统繁忙，请稍后再试");
},
"-9":function(){
o.err("页面不存在");
},
"-19":function(){
o.err("链接已失效，请刷新页面重试");
},
"-10030":function(){
o.err("非开发者，无操作权限");
}
},t=function(n,o){
var r,t;
o&&"object"==typeof o?(r=o.done,t=o.fail):r=o,e.post(n,{
done:i(r),
fail:t
});
},f=function(n,o){
var r,t;
o&&"object"==typeof o?(r=o.done,t=o.fail):r=o,e.get(n,{
done:i(r),
fail:t
});
},i=function(n){
var e=$.extend({},r,n());
return function(n){
e.before(n)!==!1&&(n&&n.base_resp&&"undefined"!=typeof n.base_resp.ret&&"function"==typeof e[n.base_resp.ret+""]?e[n.base_resp.ret+""](n):e["default"](n),
e.after(n));
};
};
return{
post:t,
get:f
};
});define("common/wx/time.js",[],function(){
"use strict";
function e(e){
var t=new Date(1e3*e),r=new Date,g=t.getTime(),a=r.getTime(),u=864e5;
return u>a-g&&r.getDate()==t.getDate()?"%s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):2*u>a-g&&new Date(1*t+u).getDate()==r.getDate()?"昨天 %s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):6*u>=a-g?"%s %s:%s".sprintf(s[t.getDay()],n(t.getHours()),n(t.getMinutes())):t.getFullYear()==r.getFullYear()?"%s月%s日".sprintf(n(t.getMonth()+1),n(t.getDate())):"%s年%s月%s日".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()));
}
function t(e){
var t=new Date(1e3*e);
return"%s-%s-%s %s:%s:%s".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()),n(t.getHours()),n(t.getMinutes()),n(t.getSeconds()));
}
function r(e,t){
var r=["日","一","二","三","四","五","六"],n=t.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,g(e.getFullYear()%100,2)).replace(/mm|MM/,g(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,g(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,g(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,g(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,g(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds()).replace(/w/g,e.getDay()).replace(/W/g,r[e.getDay()]);
return n;
}
function g(e,t){
for(var r=0,g=t-(e+"").length;g>r;r++)e="0"+e;
return e+"";
}
var n=function(e){
return e+="",e.length>=2?e:"0"+e;
},s=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
return{
timeFormat:e,
getFullTime:t,
formatDate:r
};
});define("common/qq/Class.js",[],function(t,n){
"use strict";
n.create=function(t){
var n=function(){
this.construct&&this.construct.apply(this,arguments);
};
return t.apply(n.prototype,arguments),n;
},function(){
function t(t){
for(var n=1,r=arguments.length;r>n;n++)for(var e in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],e)&&(t[e]=arguments[n][e]);
return t;
}
function r(){
return this.__instance__||(this.__instance__=new this(arguments[0],arguments[1],arguments[2]));
}
function e(t){
var n=i.call(this,t);
return n.prototype.parent=this,n;
}
function i(n){
var i="function"==typeof this?this:function(){},o=function(){
function t(n,e){
n.Super&&t(n.Super,e),n.init&&n.init.apply(e,r);
}
var n=this,r=arguments;
n.Root=i.__base__,n.Super=i.prototype,t(n,n);
};
return t(o.prototype,i.prototype||{},n),o.__base__=i.__base__||o.prototype,o.GetStaticInstance=r,
o.Inherit=o.inherit=e,o;
}
n.declare=i;
}();
});define("discussion/detail.js",["common/qq/Class.js","common/wx/Tips.js","common/wx/time.js","common/wx/cgiRetCode.js","common/wx/pagebar.js","common/wx/mpEditor/plugin/filter.js","common/lib/marked.js","common/lib/emojify.js","common/wx/mpEditor/plugin/link.js","common/wx/mpEditor/plugin/source.js","common/wx/mpEditor/plugin/uploadimg.js","common/wx/mpEditor/plugin/insertcode.js","common/wx/mpEditor/plugin/unlink.js","common/wx/mpEditor/editor.js","common/wx/popover.js","common/wx/dialog.js","tpl/mpEditor/comment_layout.html.js","discussion/article_list.js","discussion/editor.container.js","discussion/report.js","common/wx/interpreter.js","common/wx/constants.js","common/vue/vue.js","components/comment-list.js"],function(t){
"use strict";
function e(t,e){
new H({
docid:b.docid,
editor_selector:t,
appmsg_data:b.appmsg_data,
onEditorReady:e
});
}
var o=(t("common/qq/Class.js"),t("common/wx/Tips.js")),n=t("common/wx/time.js"),i=t("common/wx/cgiRetCode.js"),r=(t("common/wx/pagebar.js"),
t("common/wx/mpEditor/plugin/filter.js")),a=t("common/lib/marked.js");
t("common/lib/emojify.js");
var s=t("common/wx/mpEditor/plugin/link.js"),c=t("common/wx/mpEditor/plugin/source.js"),m=t("common/wx/mpEditor/plugin/uploadimg.js"),d=t("common/wx/mpEditor/plugin/insertcode.js"),l=t("common/wx/mpEditor/plugin/unlink.js"),u=t("common/wx/mpEditor/editor.js"),p=t("common/wx/popover.js"),h=t("common/wx/dialog.js"),f=t("tpl/mpEditor/comment_layout.html.js"),g=(t("discussion/article_list.js"),
t("discussion/editor.container.js")),_=(t("discussion/report.js"),{
popover:null,
pagelimit:10,
startPage:1,
currentPage:1,
totalComment:0,
firstInitComment:!0,
maxContentLen:2e4,
default_img:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0?wx_fmt=png"
}),w=t("common/wx/interpreter.js"),v=t("common/wx/constants.js"),y=t("common/vue/vue.js");
t("components/comment-list.js");
var j,b=wx.cgiData;
a.setOptions({
gfm:!0,
tables:!0,
breaks:!0,
pedantic:!1,
sanitize:!0,
smartLists:!0,
smartypants:!1
});
var x;
if($("a[data-author]").each(function(){
var t=$(this);
x=t.data("openid");
try{
var e=b.blog_category;
w.isOfficialBlogCategory(w.blogCategory(e))?(t.siblings("span[data-author]").text("微信团队"),
t.remove()):t.text(t.data("author"));
}catch(o){
t.text(t.data("author"));
}
}),$("[data-ts]").each(function(){
var t=$(this);
t.text(n.timeFormat(Number(t.data("ts"))));
}),$(".js_minicode").each(function(){
var t=$(this),e=t.text().trim();
/^wechatide:\/\/minicode\//.test(e)?t.html('<a href="'+e+'">'+e+"</a>"):/^[a-zA-Z0-9]+$/.test(e)&&t.html('<a href="wechatide://minicode/'+e+'">'+e+"</a>");
}),b.blog_attr)try{
var C=parseInt(b.blog_attr),E=w.blogAttr(C);
E[v.BlogAttr.Top]&&$(".icon_post_tag.top").show(),E[v.BlogAttr.Official]&&$(".icon_post_tag.official").show(),
E[v.BlogAttr.Trending]&&$(".icon_post_tag.hot").show(),E[v.BlogAttr.Featured]&&$(".icon_post_tag.featured").show();
}catch(T){}
var k=document.createElement("div");
k.innerHTML=wx.data.nick_name;
var L=k.innerText||"";
try{
k.innerHTML="",k.remove();
}catch(D){}
k=null;
var R=window.articleApp=new y({
el:".container_box",
data:{
docid:wx.cgiData.docid,
blogCategory:wx.cgiData.blog_category,
loginUserOpenID:wx.cgiData.openid,
loginUserType:wx.user_type,
loginUserNickName:L,
loginUserHeadImg:wx.cgiData.headimg||_.default_img,
loginUserIsOfficial:wx.cgiData.is_official_user,
articleAuthorOpenID:x,
defaultImg:_.default_img,
upvote:wx.cgiData.upvote,
isUpvote:wx.cgiData.is_upvote,
visitNum:wx.cgiData.visit_num,
hasAnswered:wx.cgiData.hasAnswered,
commentType:v.CommentType.Blog,
commentList:[],
currentPage:1,
pageSize:10,
totalComment:0,
totalContentComment:wx.cgiData.totalContentComment,
showEditorInQA:!1,
gettingComment:!1,
contentCommentShow:!1
},
computed:{
commentListDisplay:function(){
return this.commentList;
},
showAnswerBtn:function(){
return 1===this.blogCategory;
},
editorStyle:function(){
return 1===this.blogCategory&&this.hasAnswered?this.showEditorInQA?{}:{
display:"none"
}:{};
}
},
created:function(){
this.render(),this.initDOMEvents();
},
mounted:function(){
var t=this;
setTimeout(function(){
1!=t.blogCategory?e("#js_editor"):t.hasAnswered||e("#js_editor");
});
},
methods:{
render:function(){
var t=r.validInput($("#content_tpl").html(),!0),e=r.datasrc2src(t.content),o=$("#content"),i=document.createElement("div");
i.innerHTML=$("#content_tpl").html();
try{
i.innerHTML=i.innerHTML.replace(/<span data-ideurl="(.+?)">(.+?)<\/span>/g,function(t,e,o){
return'<a href="wechatide://'+e+'">'+o+"</span>";
}),e=e.replace(/<span data-ideurl="(.+?)">(.+?)<\/span>/g,function(t,e,o){
return'<a href="wechatide://'+e+'">'+o+"</span>";
});
}catch(s){}
var c=i.querySelector("p:first-child");
if(c&&$(c).hasClass("markdown")){
var m=a(c.innerHTML);
i.innerHTML=m,i.className="markdown-body",$(i).insertAfter("#content"),window.emojify.run(i,function(t,e){
var o=document.createElement("span");
return o.innerHTML='<img class="emoji" src="https://res.wx.qq.com/wxopenforumres/zh_CN/htmledition/comm_htmledition/images/emoji/'+encodeURIComponent(e)+'.png">',
o.childNodes[0];
});
}else o.html(e);
b.update_time&&$("#update_time").text(n.timeFormat(b.update_time)).parents(".js_updatetime").show(),
b.create_time&&$("#create_time").text(n.timeFormat(b.create_time)).show();
},
initDOMEvents:function(){
$(document).on("click",function(t){
_.popover&&"function"==typeof _.popover.remove&&0==$(t.target).closest(".popover,.js_popover").length&&(_.popover.remove(),
_.popover=null);
});
},
setHideStatus:function(t,e){
_.setHideStatusPending||(_.setHideStatusPending=!0,e&&e.btn(!1),i.post({
url:"/blogdetail?",
data:{
action:"change_status",
docid:b.docid,
scene:10,
status:t?1:2
}
},{
done:function(){
return{
before:function(){
e&&e.btn(!0),_.setHideStatusPending=!1;
},
0:function(){
o.suc(t?"文章已标记为隐藏":"文章已解除隐藏"),window.location.reload();
}
};
},
fail:function(){
e&&e.btn(!0),_.setHideStatusPending=!1,o.err("系统错误，请稍后再试");
}
}));
},
scrollToInput:function(){
var t=this;
this.$nextTick(function(){
var e=$("#editorframe").offset().top;
$("html,body").animate({
scrollTop:e-100
}),t.appmsg&&t.appmsg.ueditor.ueditor.focus();
});
},
onResolve:function(){
var t=this;
_.popover&&"function"==typeof _.popover.remove&&_.popover.remove(),_.popover=new p({
dom:this,
content:"若你的问题已得到解决，可把你的帖子标记为已解决。",
margin:"center",
place:"bottom",
buttons:[{
text:"已解决",
type:"primary",
click:function(){
t._resolveSubmit(this.$pop.find(".btn_primary.jsPopoverBt"));
}
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
},
onHideBlog:function(){
this.setHideStatus(!0);
},
onUnhideBlog:function(){
this.setHideStatus(!1);
},
onDeleteBlog:function(){
h.show({
title:"删除当前帖子",
type:"info",
msg:"删除后帖子内容及评论将一并被删除，且不可恢复。",
buttons:[{
text:"删除",
type:"primary",
click:function(){
i.post({
url:"/blogedit",
data:{
action:"del_doc",
openid:wx.cgiData.openid,
docid:wx.cgiData.docid
}
},{
done:function(){
return{
"default":function(){
o.err("删除帖子失败，请稍后再试");
},
0:function(){
location.href=wx.url("/home")+"#deletePostSuccess";
},
1001:function(){
o.err("您无权删除本帖子");
}
};
},
fail:function(){
o.err("删除评论失败，请稍后再试");
}
});
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
});
},
onCommentFetched:function(t){
t&&t.hasOwnProperty("totalComment")&&(this.totalComment=t.totalComment);
},
contentCommentChange:function(t){
this.totalContentComment=t;
},
handleToggleDisplayContentComment:function(){
this.contentCommentShow=!this.contentCommentShow;
},
onLiked:function(){
this.isUpvote=1,this.upvote=(this.upvote||0)+1;
},
onUnliked:function(){
this.isUpvote=0,this.upvote=(this.upvote||1)-1;
},
handleCommentLinkClick:function(){
window.jQuery&&window.jQuery("html,body").animate({
scrollTop:(window.jQuery("#editorframe")[0]||{}).offsetTop
});
},
handleToggleDetailLike:function(){
var t=this;
if(this._performingLikeRequest)return void console.warn("already performing like request");
if(window.wx&&0==window.wx.user_type)return void(window.location.href="/weloginpage?redirect_url="+encodeURIComponent(location.pathname+location.search));
var e=this.docid,n=this.isUpvote,r=Boolean(n),a=r?3:1,s={
vote_content:2,
vote_type:a,
id:e,
vote_to_openid:this.articleAuthorOpenID,
blog_category:Number(this.blogCategory)
};
this._performingLikeRequest=!0;
var c="/blogedit?action=vote&blogcategory="+this.blogCategory+"&vote_type="+a+"&vote_content=2";
i.post({
url:c,
data:s,
contentType:"application/json"
},{
done:function(){
return{
"default":function(){
t._performingLikeRequest=!1,o.err("赞操作失败");
},
0:function(){
t._performingLikeRequest=!1,r?t.onUnliked():t.onLiked();
},
1001:function(){
t._performingLikeRequest=!1,o.err("无权进行赞操作");
}
};
},
fail:function(){
t._performingLikeRequest=!1,o.err("赞操作失败，请稍后再试");
}
});
},
onStartModifyComment:function(t){
var o=t.component,n=t.comment,i=t.editorWrapperSelector;
this.$nextTick(function(){
var t=this;
this.mainEditorContainer||e(i,function(e){
t.appmsg=e,e.editorContainer&&(e.editorContainer.submitData.commentid=n.comment_detail.commentid,
e.editorContainer.submitURL+="&commentid="+n.comment_detail.commentid,e.editorContainer.setEditorContent(n.comment_detail.comment),
$(i+" .js_cancel_edit").show().click(function(){
o.modifying=!1;
}),setTimeout(function(){
e.ueditor.ueditor.focus();
}));
});
});
},
startWriteAnswer:function(){
0==wx.user_type?location.href="/weloginpage?redirect_url="+encodeURIComponent(location.pathname+location.search):this.scrollToInput();
}
}
}),H=function(){
function t(t){
var e=this;
this.opt=t,$.extend(!0,e,t),this.$editor=$(this.opt.editor_selector),e._initData(),
e._highline(),setTimeout(function(){
(2==wx.user_type||3==wx.user_type)&&e.$editor&&e.$editor.length>0&&e._initUEditor();
},0),R.appmsg=this;
}
return t.prototype._initData=function(){
b.comment_lvl&&(b.startPage=Math.floor(1*b.comment_lvl/_.pagelimit)+1),_.highline=(b.highline||"").html(!1).html(!1);
},t.prototype._highline=function(){
var t=this;
if(_.highline)for(var e=_.highline.split("|&"),o=0,n=e.length;n>o;o++)!function(e){
setTimeout(function(){
t._doHighline(e);
},0);
}(e[o]);
},t.prototype._doHighline=function(t){
var e=this;
if(window.find&&window.getSelection){
document.designMode="on";
var o=window.getSelection();
for(o.collapse(document.body,0);window.find(t);){
if(!_.hadFindFirstDom){
for(var n=o.anchorNode;!n.tagName&&(n=n.parentElement,n!==document&&n!==document.body););
var i=$(n).offset();
i&&i.top&&(_.hadFindFirstDom=!0,e._scrollH(i.top));
}
document.execCommand("foreColor",!1,"#44B549"),o.collapseToEnd();
}
document.designMode="off";
}else if(document.body.createTextRange)for(var r=document.body.createTextRange();r.findText(t);){
if(!_.hadFindFirstDom){
var a=r.getBoundingClientRect();
a&&a.top&&(_.hadFindFirstDom=!0,e._scrollH(a.top));
}
r.execCommand("foreColor",!1,"#44B549"),r.collapse(!1);
}
},t.prototype._scrollH=function(t){
setTimeout(function(){
$("html,body").animate({
scrollTop:t-100
});
},100);
},t.prototype._resolveSubmit=function(t){
_.resolveComment||(_.resolveComment=!0,t.btn(!1),i.post({
url:"/blogdetail?",
data:{
action:"change_status",
docid:b.docid,
scene:3,
status:1
}
},{
done:function(){
return{
before:function(){
t.btn(!0),_.resolveComment=!1;
},
0:function(){
o.suc("文章已标记为已解决"),window.location.reload();
}
};
},
fail:function(){
t.btn(!0),_.resolveComment=!1,o.err("系统错误，请稍后再试");
}
}));
},t.prototype._initEditArea=function(){
var t=this,e=t.$editor;
$("#comment_btn").show();
var o="发表";
switch(wx.cgiData.blog_category){
case 1:
o="发表回答";
break;

default:
o="发表评论";
}
this.$editor.find(".js_submit_edit").text(o),e.find(".js_field").each(function(){
{
var t=$(this).attr("name");
$(this).attr("keyup");
}
$(this).on("keyup",function(){
e.find(".js_%s_error".sprintf(t)).hide();
});
});
},t.prototype._initUEditor=function(){
var t=this,e=this,o=[],n=["source","|","bold","italic","underline","|","justifyleft","justifycenter","justifyright","|","insertorderedlist","insertunorderedlist","|","blockquote","link","unlink","|","uploadimg","insertcode"];
o.push(new s),o.push(new l),o.push(new c),o.push(new d),o.push(new m),j=this.ueditor=new u({
container:e.opt.editor_selector.replace("#",""),
plugins:o,
autoHeightEnabled:!0,
toolbars:[n],
layout:template.compile(f),
minFrameHeight:130
}),j.addListener("catchremotesuccess",function(e,o,n,i){
t.editorContainer.updateRemoteImg({
article:o.article,
type:o.type,
remoteType:"success",
uid:o.uid,
format:i,
img_url:n
}),t._showCatchRemoteErr();
}),j.addListener("catchremoteerror",function(o,n,i){
n&&t.editorContainer.updateRemoteImg({
article:n.article,
type:n.type,
remoteType:"error",
uid:n.uid,
img_url:n.defaultRemoteImg
}),e._showCatchRemoteErr(i);
}),j.addListener("keyup aftersetcontent",function(){
e._showCatchRemoteErr();
}),j.addListener("focus",function(){
j.enableToolbar();
}),j.addListener("showErrMsg",function(t,e,o){
$(e).show().find(".js_msg_content").html(o);
}),j.addListener("hideAllErrMsg",function(){
e.$editor.find(".js_error_msg,.js_tip_mask_msg").hide(),e.$editor.find(".js_tip_mask").removeClass("error_mask").addClass("hover_mask"),
$("#js_labels_error").hide();
}),j.ready(function(){
t._initEditArea(),t._editorEvent(),t.editorContainer=new g({
editorSelector:t.opt.editor_selector,
editType:v.EditType.HTML,
ueditor:t.ueditor,
needDraft:!1,
sendJSON:!0,
docid:b.docid,
blogCategory:b.blog_category,
submitURL:"/blogedit?action=submit_comment&blogcategory="+b.blog_category+"&comment_type="+v.CommentType.Blog,
submitData:{
docid:b.docid,
comment_type:v.CommentType.Blog,
edit_type:v.EditType.HTML,
commentid:"",
parent_commentid:"",
reply_commentid:"",
reply_openid:"",
openid:b.openid,
blog_category:b.blog_category
},
renameContent:"comment",
submitDataGetter:{},
validLimit:{
content:[1,_.maxContentLen]
}
}),R.mainEditorContainer=t.editorContainer,t.$editor.find("input[name=type]").val(b.is_recommend?1:0),
t.opt.onEditorReady&&t.opt.onEditorReady(t);
});
},t.prototype._showCatchRemoteErr=function(t){
var e=this,o=this.ueditor;
if(t)$(".js_catch_tips",e.$editor).show().find(".js_msg_content").html(t);else{
var n=$(o.getDocument()).find(".js_catchremoteimageerror").length;
0==n?$(".js_catch_tips",e.$editor).hide():$(".js_catch_tips",e.$editor).show().find(".js_msg_content").html('正文有%s张图片粘贴失败，点击<a href="javascript:;" class="js_find_img_err">查看</a>'.sprintf(n));
}
},t.prototype._editorEvent=function(){
var t=this,e=t.ueditor;
t.$editor.on("click",".js_msg_close",function(){
$(this).closest(".page_msg").hide();
}),t.$editor.on("click",".js_find_img_err",function(){
e.fireEvent("find_img_err");
}),t.$editor.on("click",".js_find_external_Link",function(){
e.fireEvent("find_external_Link");
}),this.$editor.find(".js_submit_edit").click(function(){
e.fireEvent("hideAllErrMsg"),t.editorContainer.save($(this),function(){
t.editorContainer.draft&&(t.editorContainer.draft.isDropped=!0),o.suc("发表成功"),location.reload();
},!0);
});
},t;
}();
b.is_recommend&&($(".js_tip_host").on("mouseenter",function(){
$(this).find(".js_tip_popup").show();
}).on("mouseleave",function(){
$(this).find(".js_tip_popup").hide();
}),$("#readme").each(function(){
var t=b.readme;
t=t.replace(/&lt;|&gt;|&quot;|&apos;|&#39;|&amp;|&nbsp;/g,function(t){
switch(t){
case"&lt;":
return"<";

case"&gt;":
return">";

case"&quot;":
return'"';

case"&apos;":
case"&#39;":
return"'";

case"&amp;":
return"&";

default:
return t;
}
}),this.innerHTML=a(t),window.emojify.run(this,function(t,e){
var o=document.createElement("span");
return o.innerHTML='<img class="emoji" src="https://res.wx.qq.com/wxopenforumres/zh_CN/htmledition/comm_htmledition/images/emoji/'+encodeURIComponent(e)+'.png">',
o.childNodes[0];
});
var e=$(this),o=b.github_url,n=function(t,e){
return/^([-a-z]+:)?\/\//i.test(e)?e:/^\//.test(e)?"https://github.com"+e:t.slice(0,t.lastIndexOf("/")+1)+e;
};
e.find("a").each(function(){
$(this).attr("href",n(o+"/raw/master/README.md",$(this).attr("href")));
}),e.find("img").each(function(){
$(this).attr("src",n(o+"/raw/master/README.md",$(this).attr("src")));
});
}),$(".js_edit_blog").each(function(){
var t=$(this),e={
githubUrl:t.data("githubUrl"),
recommendType:t.data("type"),
recommendTypeName:["框架","模版","组件","开发工具","第三方工具","其他"][t.data("type")||void 0]
};
t.attr("href",t.data("href")+"#"+encodeURIComponent(JSON.stringify(e)));
}));
});