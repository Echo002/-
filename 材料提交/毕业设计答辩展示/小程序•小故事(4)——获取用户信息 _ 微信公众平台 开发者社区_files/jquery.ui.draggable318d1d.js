define("common/lib/MockJax.js",[],function(){
!function(e){
function t(t){
void 0==window.DOMParser&&window.ActiveXObject&&(DOMParser=function(){},DOMParser.prototype.parseFromString=function(e){
var t=new ActiveXObject("Microsoft.XMLDOM");
return t.async="false",t.loadXML(e),t;
});
try{
var n=(new DOMParser).parseFromString(t,"text/xml");
if(!e.isXMLDoc(n))throw"Unable to parse XML";
var s=e("parsererror",n);
if(1==s.length)throw"Error: "+e(n).text();
return n;
}catch(o){
var r=void 0==o.name?o:o.name+": "+o.message;
return void e(document).trigger("xmlParseError",[r]);
}
}
function n(t,n,s){
(t.context?e(t.context):e.event).trigger(n,s);
}
function s(t,n){
var o=!0;
return"string"==typeof n?e.isFunction(t.test)?t.test(n):t==n:(e.each(t,function(r){
return void 0===n[r]?o=!1:void(o="object"==typeof n[r]?o&&s(t[r],n[r]):e.isFunction(t[r].test)?o&&t[r].test(n[r]):o&&t[r]==n[r]);
}),o);
}
function o(t,n){
if(e.isFunction(t))return t(n);
if(e.isFunction(t.url.test)){
if(!t.url.test(n.url))return null;
}else{
var o=t.url.indexOf("*");
if(t.url!==n.url&&-1===o||!new RegExp(t.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace(/\*/g,".+")).test(n.url))return null;
}
return t.data&&n.data&&!s(t.data,n.data)?null:t&&t.type&&t.type.toLowerCase()!=n.type.toLowerCase()?null:t;
}
function r(n,s,o){
var r=function(r){
return function(){
return function(){
var r;
this.status=n.status,this.statusText=n.statusText,this.readyState=4,e.isFunction(n.response)&&n.response(o),
"json"==s.dataType&&"object"==typeof n.responseText?this.responseText=JSON.stringify(n.responseText):"xml"==s.dataType?"string"==typeof n.responseXML?(this.responseXML=t(n.responseXML),
this.responseText=n.responseXML):this.responseXML=n.responseXML:this.responseText=n.responseText,
("number"==typeof n.status||"string"==typeof n.status)&&(this.status=n.status),"string"==typeof n.statusText&&(this.statusText=n.statusText),
r=this.onreadystatechange||this.onload,e.isFunction(r)?(n.isTimeout&&(this.status=-1),
r.call(this,n.isTimeout?"timeout":void 0)):n.isTimeout&&(this.status=-1);
}.apply(r);
};
}(this);
n.proxy?g({
global:!1,
url:n.proxy,
type:n.proxyType,
data:n.data,
dataType:"script"===s.dataType?"text/plain":s.dataType,
complete:function(e){
n.responseXML=e.responseXML,n.responseText=e.responseText,n.status=e.status,n.statusText=e.statusText,
this.responseTimer=setTimeout(r,n.responseTime||0);
}
}):s.async===!1?r():this.responseTimer=setTimeout(r,n.responseTime||50);
}
function a(t,n,s,o){
return t=e.extend(!0,{},e.mockjaxSettings,t),"undefined"==typeof t.headers&&(t.headers={}),
t.contentType&&(t.headers["content-type"]=t.contentType),{
status:t.status,
statusText:t.statusText,
readyState:1,
open:function(){},
send:function(){
o.fired=!0,r.call(this,t,n,s);
},
abort:function(){
clearTimeout(this.responseTimer);
},
setRequestHeader:function(e,n){
t.headers[e]=n;
},
getResponseHeader:function(e){
return t.headers&&t.headers[e]?t.headers[e]:"last-modified"==e.toLowerCase()?t.lastModified||(new Date).toString():"etag"==e.toLowerCase()?t.etag||"":"content-type"==e.toLowerCase()?t.contentType||"text/plain":void 0;
},
getAllResponseHeaders:function(){
var n="";
return e.each(t.headers,function(e,t){
n+=e+": "+t+"\n";
}),n;
}
};
}
function i(e,t,n){
if(u(e),e.dataType="json",e.data&&T.test(e.data)||T.test(e.url)){
c(e,t,n);
var s=/^(\w+:)?\/\/([^\/?#]+)/,o=s.exec(e.url),r=o&&(o[1]&&o[1]!==location.protocol||o[2]!==location.host);
if(e.dataType="script","GET"===e.type.toUpperCase()&&r){
var a=l(e,t,n);
return a?a:!0;
}
}
return null;
}
function u(e){
"GET"===e.type.toUpperCase()?T.test(e.url)||(e.url+=(/\?/.test(e.url)?"&":"?")+(e.jsonp||"callback")+"=?"):e.data&&T.test(e.data)||(e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?");
}
function l(t,n,s){
var o=s&&s.context||t,r=null;
return n.response&&e.isFunction(n.response)?n.response(s):e.globalEval("object"==typeof n.responseText?"("+JSON.stringify(n.responseText)+")":"("+n.responseText+")"),
p(t,o,n),d(t,o,n),e.Deferred&&(r=new e.Deferred,"object"==typeof n.responseText?r.resolveWith(o,[n.responseText]):r.resolveWith(o,[e.parseJSON(n.responseText)])),
r;
}
function c(e,t,n){
var s=n&&n.context||e,o=e.jsonpCallback||"jsonp"+m++;
e.data&&(e.data=(e.data+"").replace(T,"="+o+"$1")),e.url=e.url.replace(T,"="+o+"$1"),
window[o]=window[o]||function(n){
data=n,p(e,s,t),d(e,s,t),window[o]=void 0;
try{
delete window[o];
}catch(r){}
head&&head.removeChild(script);
};
}
function p(e,t,s){
e.success&&e.success.call(t,s.responseText||"",status,{}),e.global&&n(e,"ajaxSuccess",[{},e]);
}
function d(t,s){
t.complete&&t.complete.call(s,{},status),t.global&&n("ajaxComplete",[{},t]),t.global&&!--e.active&&e.event.trigger("ajaxStop");
}
function f(t,n){
var s,r,u;
"object"==typeof t?(n=t,t=void 0):n.url=t,r=e.extend(!0,{},e.ajaxSettings,n);
for(var l=0;l<h.length;l++)if(h[l]&&(u=o(h[l],r)))return y.push(r),e.mockjaxSettings.log(u,r),
"jsonp"===r.dataType&&(s=i(r,u,n))?s:(u.cache=r.cache,u.timeout=r.timeout,u.global=r.global,
x(u,n),function(t,n,o,r){
s=g.call(e,e.extend(!0,{},o,{
xhr:function(){
return a(t,n,o,r);
}
}));
}(u,r,n,h[l]),s);
return g.apply(e,[n]);
}
function x(e,t){
if(e.url instanceof RegExp&&e.hasOwnProperty("urlParams")){
var n=e.url.exec(t.url);
if(1!==n.length){
n.shift();
var s=0,o=n.length,r=e.urlParams.length,a=Math.min(o,r),i={};
for(s;a>s;s++){
var u=e.urlParams[s];
i[u]=n[s];
}
t.urlParams=i;
}
}
}
var g=e.ajax,h=[],y=[],T=/=\?(&|$)/,m=(new Date).getTime();
e.extend({
ajax:f
}),e.mockjaxSettings={
log:function(t,n){
if(t.logging!==!1&&("undefined"!=typeof t.logging||e.mockjaxSettings.logging!==!1)&&window.console&&console.log){
var s="MOCK "+n.type.toUpperCase()+": "+n.url,o=e.extend({},n);
if("function"==typeof console.log)console.log(s,o);else try{
console.log(s+" "+JSON.stringify(o));
}catch(r){
console.log(s);
}
}
},
logging:!0,
status:200,
statusText:"OK",
responseTime:500,
isTimeout:!1,
contentType:"text/plain",
response:"",
responseText:"",
responseXML:"",
proxy:"",
proxyType:"GET",
lastModified:null,
etag:"",
headers:{
etag:"IJF@H#@923uf8023hFO@I#H#",
"content-type":"text/plain"
}
},e.mockjax=function(e){
var t=h.length;
return h[t]=e,t;
},e.mockjaxClear=function(e){
1==arguments.length?h[e]=null:h=[],y=[];
},e.mockjax.handler=function(e){
return 1==arguments.length?h[e]:void 0;
},e.mockjax.mockedAjaxCalls=function(){
return y;
};
}(jQuery);
});define("common/wx/cgiReport.js",["common/wx/Tips.js"],function(r,e){
"use strict";
var a=r("common/wx/Tips.js");
e.error=function(r){
var e=11;
switch(r){
case"timeout":
e=7;
break;

case"error":
e=8;
break;

case"notmodified":
e=9;
break;

case"parsererror":
e=10;
}
$.ajax({
url:"/mp/jsmonitor?id_key=64167_"+e+"_1",
data:{
t:Math.random()
},
type:"POST"
}),$.ajax({
url:"/mp/jsmonitor?id_key=64167_6_1",
data:{
t:Math.random()
},
type:"POST"
}),"timeout"==r&&a.err("你的网络环境较差，请稍后重试");
};
});define("common/qq/mask.js",["biz_web/lib/spin.js"],function(s,i){
"use strict";
function n(s){
if(this.mask)this.mask.show();else{
var i="body";
s&&s.parent&&(i=$(s.parent)),this.mask=$(t).appendTo(i),this.mask.id="wxMask_"+ ++e,
this.mask.spin("flower");
}
if(s){
if(s.spin===!1)return this;
this.mask.spin(s.spin||"flower");
}
return this;
}
s("biz_web/lib/spin.js");
var e=0,t='<div class="mask"></div>';
n.prototype={
show:function(){
this.mask.show();
},
hide:function(){
this.mask.hide();
},
remove:function(){
this.mask.remove();
}
},i.show=function(s){
return new n(s);
},i.hide=function(){
$(".mask").hide();
},i.remove=function(){
$(".mask").remove();
};
});define("components/pagination.js",["common/vue/vue.js","common/wx/pagebar.js"],function(t){
"use strict";
var e=t("common/vue/vue.js"),a=t("common/wx/pagebar.js");
e.component("wx-pagination",{
props:["pageSize","currentPage","totalItemsCount"],
data:{},
watch:{
currentPage:function(){
this.updatePageBar();
},
pageSize:function(){
this.updatePageBar();
},
totalItemsCount:function(){
this.updatePageBar();
}
},
methods:{
updatePageBar:function(){
var t=this;
new a({
container:this.$refs.container,
perPage:this.pageSize,
first:!1,
last:!1,
isSimple:!0,
initShowPage:this.currentPage,
totalItemsNum:this.totalItemsCount,
callback:function(e){
var a=e.currentPage;
if(a!=t.currentPage)return t.$emit("jump-to-page",a),!1;
}
});
}
},
created:function(){},
template:'<div class="pagination_wrp" ref="container"></div>'
});
});define("components/comment.js",["common/vue/vue.js","common/wx/Tips.js","common/wx/cgiRetCode.js","discussion/blog_cgi.js","common/wx/time.js","common/wx/popover.js","common/wx/mpEditor/plugin/filter.js","common/lib/marked.js","common/wx/constants.js","tpl/components/comment.html.js","common/wx/utils.js","components/pagination.js"],function(t){
"use strict";
var e=t("common/vue/vue.js"),o=t("common/wx/Tips.js"),n=t("common/wx/cgiRetCode.js"),i=(t("discussion/blog_cgi.js"),
t("common/wx/time.js"),t("common/wx/popover.js")),m=t("common/wx/mpEditor/plugin/filter.js"),r=(t("common/lib/marked.js"),
t("common/wx/constants.js")),c=t("tpl/components/comment.html.js"),s=t("common/wx/utils.js");
t("components/pagination.js");
var a;
!function(t){
t.Comment="评论",t.Reply="回复";
}(a||(a={})),e.component("wx-comment",{
props:["docid","blogCategory","comment","commentType","parentComment","loginUserOpenId","loginUserNickName","loginUserHeadImg","loginUserType","loginUserIsOfficial","articleAuthorOpenId","defaultImg","level"],
data:function(){
return{
currentPage:1,
pageSize:10,
totalComment:0,
showCommentList:!1,
modifying:!1
};
},
computed:{
commentDetail:function(){
return this.comment.comment_detail;
},
replyCount:function(){
return this.commentType===r.CommentType.Content?"":this.comment.comment_detail.reply_count||"";
},
isTop:function(){
return this.comment.comment_detail.comment_attr&r.CommentAttrBit.Top;
},
isFeatured:function(){
return this.comment.comment_detail.comment_attr&r.CommentAttrBit.Featured;
},
topWording:function(){
return this.isTop?"取消置顶":"置顶";
},
featureWording:function(){
return this.isFeatured?"取消优质":"优质";
},
topCommentWording:function(){
return 1===this.blogCategory?"置顶回答":"置顶评论";
},
featuredCommentWording:function(){
return 1===this.blogCategory?"优质回答":"优质评论";
},
commentBtnWording:function(){
return 1===this.blogCategory&&1===this.level?a.Comment:a.Reply;
},
editorWrapperId:function(){
return"js_editor_"+this.comment.comment_detail.commentid;
}
},
mounted:function(){
this.renderContent(),1===this.level&&(this.comment.comment_detail||{}).reply_count&&(this.showCommentList=!0);
},
methods:{
renderContent:function(){
var t=this.comment.comment_detail.comment||this.comment.comment_detail.comment_noencode;
switch(this.comment.comment_detail.edit_type){
case r.EditType.PlainText:
this.$refs.content.innerText=s.minimalDecode(t);
break;

case r.EditType.Markdown:
this.$refs.content.innerText=t;
break;

default:
this.$refs.content.innerHTML=this.filterHTML(t);
}
},
deleteComment:function(t){
var e,i=this;
try{
e=this.parentComment?this.parentComment.comment_detail.commentid:"";
}catch(m){
e="";
}
var r=this.docid||((wx||{}).cgiData||{}).docid,c="/blogedit?action=del_comment&blogcategory="+this.blogCategory+"&parent_commentid="+e+"&comment_type="+this.commentType+"&openid="+this.loginUserOpenId+"&commentid="+t+"&docid="+r;
n.post({
url:c,
data:{
action:"del_comment",
openid:this.loginUserOpenId,
commentid:t,
docid:r
}
},{
done:function(){
return{
"default":function(){
o.err(1===i.blogCategory&&1===i.level?"删除回答失败，请稍后再试":"删除评论失败，请稍后再试");
},
0:function(){
1===i.blogCategory&&1===i.level?(o.suc("删除回答成功"),i.$emit("comment-deleted",i.comment),
location.reload()):(o.suc("删除评论成功"),i.$emit("comment-deleted",i.comment));
},
1001:function(){
o.err("您无权删除本评论");
}
};
}
});
},
updateCommentAttr:function(t){
var e=this;
n.post({
url:"/blogedit?action=update_comment_attr",
contentType:"application/json",
data:{
docid:this.docid,
commentid:this.comment.comment_detail.commentid,
comment_attr:t,
blog_category:this.blogCategory
}
},{
done:function(){
return{
"default":function(){
o.err("操作失败，请稍后再试");
},
0:function(){
o.suc("操作成功"),e.$emit("comment-attr-updated",{
comment:e.comment,
value:t
});
},
1001:function(){
o.err("您无权操作本评论");
}
};
},
fail:function(){
o.err("更新操作失败，请稍后再试");
}
});
},
onCommentLiked:function(){
var t=this.comment.comment_detail;
t.is_upvote=1,t.upvote=(t.upvote||0)+1,t.is_downvote&&this.onCommentUndisliked();
},
onCommentUnliked:function(){
var t=this.comment.comment_detail;
t.is_upvote=0,t.upvote=(t.upvote||1)-1;
},
onCommentUndisliked:function(){
var t=this.comment.comment_detail;
t.is_downvote=0,t.downvote=(t.downvote||1)-1;
},
onCommentDisliked:function(){
var t=this.comment.comment_detail;
t.is_downvote=1,t.downvote=(t.downvote||0)+1,t.is_upvote&&this.onCommentUnliked();
},
onToggleDislikeComment:function(t){
var e=this;
if(this._performingDislikeRequest)return void console.warn("already performing dislike request");
if(window.wx&&0==window.wx.user_type)return void(window.location.href="/weloginpage?redirect_url="+encodeURIComponent(location.pathname+location.search));
var i=this.comment.comment_detail;
if(i.commentid!==t)return void console.warn("comment id does not match");
var m=Boolean(i.is_downvote),r=m?4:2,c=1;
2==this.commentType?c=3:2==this.level&&(c=4);
var s={
vote_content:c,
vote_type:r,
id:t,
vote_to_openid:i.openid,
blog_category:Number(this.blogCategory)
};
this._performingDislikeRequest=!0;
var a,d=function(){
e._performingDislikeRequest=!1;
};
try{
a=this.parentComment?this.parentComment.comment_detail.commentid:"";
}catch(l){
a="";
}
var u="/blogedit?action=vote&parent_commentid="+a+"&blogcategory="+this.blogCategory+"&vote_type="+r+"&vote_content="+c;
n.post({
url:u,
data:s,
contentType:"application/json"
},{
done:function(){
return{
"default":function(){
d(),o.err("没有帮助操作失败");
},
0:function(){
d(),m?e.onCommentUndisliked():e.onCommentDisliked();
},
1001:function(){
d(),o.err("无权进行没有帮助操作");
},
1010:function(){
d(),o.err("不能重复该操作");
},
1011:function(){
d(),o.err("已经取消此操作");
}
};
},
fail:function(){
e._performingDislikeRequest=!1,o.err("没有帮助操作失败，请稍后再试");
}
});
},
onToggleLikeComment:function(t){
var e=this;
if(this._performingLikeRequest)return void console.warn("already performing like request");
if(window.wx&&0==window.wx.user_type)return void(window.location.href="/weloginpage?redirect_url="+encodeURIComponent(location.pathname+location.search));
var i=this.comment.comment_detail;
if(i.commentid!==t)return void console.warn("comment id does not match");
var m=Boolean(i.is_upvote),r=m?3:1,c=1;
2==this.commentType?c=3:2==this.level&&(c=4);
var s={
vote_content:c,
vote_type:r,
id:t,
vote_to_openid:i.openid,
blog_category:Number(this.blogCategory)
};
this._performingLikeRequest=!0;
var a,d=function(){
e._performingLikeRequest=!1;
};
try{
a=this.parentComment?this.parentComment.comment_detail.commentid:"";
}catch(l){
a="";
}
var u="/blogedit?action=vote&parent_commentid="+a+"&blogcategory="+this.blogCategory+"&vote_type="+r+"&vote_content="+c;
n.post({
url:u,
data:s,
contentType:"application/json"
},{
done:function(){
return{
"default":function(){
d(),o.err("赞操作失败");
},
0:function(){
d(),m?e.onCommentUnliked():e.onCommentLiked();
},
1001:function(){
d(),o.err("无权进行赞操作");
},
1010:function(){
d(),o.err("不能重复赞同操作");
},
1011:function(){
d(),o.err("已经取消赞同");
}
};
},
fail:function(){
d(),o.err("赞操作失败，请稍后再试");
}
});
},
onCommentClick:function(){
this.popover&&this.popover.remove();
},
onDeleteComment:function(t){
var e=this,o=this.popover=new i({
dom:this.$refs.deleteBtn,
content:"删除该评论吗？评论删除后将不可恢复。",
margin:"right",
buttons:[{
text:"删除",
type:"primary",
click:function(){
e.deleteComment(t),this.remove(),e.popover=null;
}
},{
text:"取消",
click:function(){
this.remove(),e.popover=null;
}
}]
});
o.show();
},
toggleCommentList:function(){
this.showCommentList=!this.showCommentList;
},
onStartReply:function(){
var t=this;
1==this.level?(this.showCommentList=!this.showCommentList,this.showCommentList&&0==this.comment.comment_detail.reply_count&&this.$refs.commentListComponent&&this.$refs.commentListComponent.showCommentInput&&this.$nextTick(function(){
try{
t.$refs.commentListComponent.focusEditor();
}catch(e){}
})):this.$emit("start-reply",this.comment);
},
onStartModifyComment:function(){
this.showCommentList=!1,this.modifying=!0,this.$emit("modify-comment",{
component:this,
comment:this.comment,
editorWrapperSelector:"#"+this.editorWrapperId
});
},
onCommentFetched:function(){},
onChildCommentDeleted:function(t){
1==t.comment_detail.audit_status&&this.comment.comment_detail.reply_count>0&&this.comment.comment_detail.reply_count--;
},
onToggleTopPost:function(){
if(confirm("仅官方有权限操作，是否确认操作？")){
var t=this.comment.comment_detail.comment_attr;
if(this.isTop){
if(t&r.CommentAttrBit.Top){
var e=t-r.CommentAttrBit.Top;
this.updateCommentAttr(e);
}
}else{
var e=t|r.CommentAttrBit.Top;
e!==t&&this.updateCommentAttr(e);
}
}
},
onToggleFeaturePost:function(){
if(confirm("仅官方有权限操作，是否确认操作？")){
var t=this.comment.comment_detail.comment_attr;
if(this.isFeatured){
if(t&r.CommentAttrBit.Featured){
var e=t-r.CommentAttrBit.Featured;
this.updateCommentAttr(e);
}
}else{
var e=t|r.CommentAttrBit.Featured;
e!==t&&this.updateCommentAttr(e);
}
}
},
filterHTML:function(t){
function e(t,i){
var m,r="",c=t.nodeType;
if(c){
if(3===c||4===m)return o(t.nodeValue+" ");
if(/^script/i.test(t.tagName))return"";
if(t.style&&t.style.length)for(var s=t.style.length-1;s>=0;s--)n(t.style[s])||(t.style[t.style[s]]="");
var a=void 0;
for(a=t.firstChild;a;a=a.nextSibling)r+=e(a,i);
return t.innerHTML=r,t.outerHTML;
}
for(var d=0;m=t[d++];)r+=e(m,i);
return r;
}
function o(t){
return(t||"").replace(/<|>|&/g,function(t){
switch(t){
case"<":
return"&lt;";

case">":
return"&gt;";

case"&":
return"&amp;";

default:
return t;
}
});
}
function n(t){
return/^font|^text|^color|^align|^border|^display|^justify|^list|^padding/.test(t)?!0:!1;
}
var i=m.validInput(t,!0);
t=m.datasrc2src(i.content);
var r=document.createElement("div");
return r.innerHTML=t,r.innerHTML=e(r),t=r.innerHTML;
}
},
template:c
});
});define("common/wx/appMsg.js",["common/wx/Tips.js","common/wx/mpEditor/plugin/link.js","common/wx/mpEditor/plugin/source.js","common/wx/mpEditor/plugin/uploadimg.js","common/wx/mpEditor/plugin/insertcode.js","common/wx/mpEditor/plugin/unlink.js","common/wx/mpEditor/editor.js","common/wx/popover.js","common/wx/dialog.js","tpl/mpEditor/comment_layout.html.js","discussion/article_list.js","discussion/editor.container.js","common/wx/constants.js"],function(t){
"use strict";
var o=t("common/wx/Tips.js"),e=t("common/wx/mpEditor/plugin/link.js"),i=t("common/wx/mpEditor/plugin/source.js"),n=t("common/wx/mpEditor/plugin/uploadimg.js"),r=t("common/wx/mpEditor/plugin/insertcode.js"),s=t("common/wx/mpEditor/plugin/unlink.js"),d=t("common/wx/mpEditor/editor.js"),m=(t("common/wx/popover.js"),
t("common/wx/dialog.js"),t("tpl/mpEditor/comment_layout.html.js")),c=(t("discussion/article_list.js"),
t("discussion/editor.container.js")),p=t("common/wx/constants.js"),a=function(){
function t(t){
var o=this;
this.opt=t,$.extend(!0,o,t),this.$editor=$(this.opt.editor_selector),setTimeout(function(){
(2==wx.user_type||3==wx.user_type)&&o.$editor&&o.$editor.length>0&&o._initUEditor();
},0);
}
return t.prototype._scrollH=function(t){
setTimeout(function(){
$("html,body").animate({
scrollTop:t-100
});
},100);
},t.prototype._initEditArea=function(){
var t=this,o=t.$editor;
o.find(".js_field").each(function(){
{
var t=$(this).attr("name");
$(this).attr("keyup");
}
$(this).on("keyup",function(){
o.find(".js_%s_error".sprintf(t)).hide();
});
});
},t.prototype._initUEditor=function(){
var t=this,o=this,a=[],l=["source","|","bold","italic","underline","|","justifyleft","justifycenter","justifyright","|","insertorderedlist","insertunorderedlist","|","blockquote","link","unlink","|","uploadimg","insertcode"];
a.push(new e),a.push(new s),a.push(new i),a.push(new r),a.push(new n);
var u=this.ueditor=new d({
container:o.opt.editor_selector.replace("#",""),
plugins:a,
autoHeightEnabled:!0,
toolbars:[l],
layout:template.compile(m),
minFrameHeight:130
});
u.addListener("catchremotesuccess",function(o,e,i,n){
t.editorContainer.updateRemoteImg({
article:e.article,
type:e.type,
remoteType:"success",
uid:e.uid,
format:n,
img_url:i
}),t._showCatchRemoteErr();
}),u.addListener("catchremoteerror",function(e,i,n){
i&&t.editorContainer.updateRemoteImg({
article:i.article,
type:i.type,
remoteType:"error",
uid:i.uid,
img_url:i.defaultRemoteImg
}),o._showCatchRemoteErr(n);
}),u.addListener("keyup aftersetcontent",function(){
o._showCatchRemoteErr();
}),u.addListener("focus",function(){
u.enableToolbar();
}),u.addListener("showErrMsg",function(t,o,e){
$(o).show().find(".js_msg_content").html(e);
}),u.addListener("hideAllErrMsg",function(){
o.$editor.find(".js_error_msg,.js_tip_mask_msg").hide(),o.$editor.find(".js_tip_mask").removeClass("error_mask").addClass("hover_mask"),
$("#js_labels_error").hide();
}),u.ready(function(){
t._initEditArea(),t._editorEvent(),t.editorContainer=new c({
editorSelector:t.opt.editor_selector,
editType:p.EditType.HTML,
ueditor:t.ueditor,
needDraft:!1,
sendJSON:!0,
docid:t.opt.docid,
blogCategory:t.opt.blog_category,
submitURL:"/blogedit?action=submit_comment&blogcategory="+t.opt.blog_category+"&comment_type="+t.opt.comment_type,
submitData:{
docid:t.opt.docid,
comment_type:t.opt.comment_type,
edit_type:p.EditType.HTML,
commentid:t.opt.commentid,
parent_commentid:t.opt.parent_commentid,
reply_commentid:t.opt.reply_commentid,
reply_openid:t.opt.reply_openid,
openid:t.opt.openid,
blog_category:t.opt.blog_category
},
renameContent:"comment",
submitDataGetter:{},
validLimit:{
content:[1,t.opt.max_content_length]
},
onBeforeSave:o.opt.onBeforeSave
}),t.opt.onEditorReady&&t.opt.onEditorReady(t);
});
},t.prototype._showCatchRemoteErr=function(t){
var o=this,e=this.ueditor;
if(t)$(".js_catch_tips",o.$editor).show().find(".js_msg_content").html(t);else{
var i=$(e.getDocument()).find(".js_catchremoteimageerror").length;
0==i?$(".js_catch_tips",o.$editor).hide():$(".js_catch_tips",o.$editor).show().find(".js_msg_content").html('正文有%s张图片粘贴失败，点击<a href="javascript:;" class="js_find_img_err">查看</a>'.sprintf(i));
}
},t.prototype._editorEvent=function(){
var t=this,e=t.ueditor;
t.$editor.on("click",".js_msg_close",function(){
$(this).closest(".page_msg").hide();
}),t.$editor.on("click",".js_find_img_err",function(){
e.fireEvent("find_img_err");
}),t.$editor.on("click",".js_find_external_Link",function(){
e.fireEvent("find_external_Link");
}),$(t.opt.submit_btn_selector).click(function(){
if(e.fireEvent("hideAllErrMsg"),t.opt.onSubmit){
var i=t.opt.onSubmit(t.editorContainer.submitData);
if(i===!1)return;
}
t.editorContainer.save($(this),function(){
t.editorContainer.draft&&(t.editorContainer.draft.isDropped=!0),o.suc("发表成功"),t.opt.noReloadAfterSubmit||location.reload();
},!0);
});
},t;
}();
return a;
});define("common/wx/utils.js",[],function(){
"use strict";
function e(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function n(e){
return e.replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&");
}
return{
minimalEncode:e,
minimalDecode:n
};
});define("tpl/components/comment-list.html.js",[],function(){
return'<div class="post_comment_area">\n  <ul class="post_comment_list">\n    <wx-comment\n      v-for="comment in commentListDisplay"\n      v-show="comment.show"\n      :key="comment.comment_detail.commentid"\n      :docid="docid"\n      :blog-category="blogCategory"\n      :comment="comment"\n      :comment-type="commentType"\n      :parent-comment="parentComment"\n      :login-user-open-id="loginUserOpenId"\n      :login-user-type="loginUserType"\n      :login-user-nick-name="loginUserNickName"\n      :login-user-head-img="loginUserHeadImg"\n      :login-user-is-official="loginUserIsOfficial"\n      :article-author-openID="articleAuthorOpenId"\n      :default-img="defaultImg"\n      :level="level"\n      @comment-deleted="onCommentDeleted"\n      @start-comment="onStartComment"\n      @start-reply="onStartReply"\n      @modify-comment="onStartModifyComment"\n      @comment-attr-updated="onCommentAttrUpdated"\n    ></wx-comment>\n\n\n  </ul>\n\n  <!-- 一级评论的分页 -->\n  <wx-pagination v-if="level == 1" :page-size="pageSize" :current-page="currentPage" :total-items-count="totalComment" @jump-to-page="onJumpToPage"></wx-pagination>\n\n  <!-- 二级评论的 "更多评论"按钮 -->\n  <div v-if="level > 1 && canShowLoadMoreComments" class="post_reply_fold_opr">\n    <a v-if="canShowLoadMoreComments" href="javascript:;" class="l" @click="loadMore">{{loadMoreWording}}</a>\n  </div>\n\n  <!-- 临时加上的评论 -->\n  <!-- @坤力 -->\n  <ul class="post_comment_list post_comment_list_temp" v-if="appendedComments && appendedComments.length > 0">\n    <wx-comment\n      v-for="comment in appendedComments"\n      v-show="comment.show"\n      :key="comment.comment_detail.commentid"\n      :docid="docid"\n      :blog-category="blogCategory"\n      :comment="comment"\n      :comment-type="commentType"\n      :parent-comment="parentComment"\n      :login-user-open-id="loginUserOpenId"\n      :login-user-type="loginUserType"\n      :login-user-nick-name="loginUserNickName"\n      :login-user-head-img="loginUserHeadImg"\n      :login-user-is-official="loginUserIsOfficial"\n      :article-author-openID="articleAuthorOpenId"\n      :default-img="defaultImg"\n      :level="level"\n      @comment-deleted="onCommentDeleted"\n      @start-comment="onStartComment"\n      @start-reply="onStartReply"\n      @modify-comment="onStartModifyComment"\n    ></wx-comment>\n  </ul>\n  \n  <!-- 二级评论的 "评论" 按钮 -->\n  <div v-if="level > 1" class="post_reply_fold_opr">\n    <a v-show="!(showCommentInput && !commentListDisplay.length)" href="javascript:;" class="btn btn_default r" :class="{ r: showCommentInput }"\n      @click="onToggleCommentBtnClick">{{toggleCommentBtnWording}}</a>\n  </div>\n\n  <!-- 纯文本输入框 -->\n  <div v-show="showCommentInput && level > 1"\n       ref="commentInputWrapper"\n       class="post_comment_editor_area post_comment_item with_post_editor">\n    <a class="post_comment_owner" href="javascript:;">\n      <img class="post_comment_owner_avatar" :src="loginUserHeadImg">\n        <strong class="post_comment_owner_nickname" data-component-identifier="commentlist__nick_name">{{loginUserNickName}}</strong>\n\n    </a>\n    <!-- 如果有回复的对象 -->\n    <span class="reply-comment" v-if="isReplying">\n      <span class="relpy-tips">回复</span>\n      <a href="javascript:;" class="post_comment_owner_nickname" data-component-identifier="commentlist__reply_nick_name">{{commentTarget && commentTarget.comment_detail.nick_name || \'\'}}</a>\n    </span>\n    <div class="post_comment_content post_editor_box">\n      <div :id="editorId" class="post_comment_editor_wrp" ref="mpEditorContainer">\n        <!-- 这里放编辑器 -->\n      </div>\n      <!--\n      <div class="frm_textarea_box">\n        <textarea class="frm_textarea" placeholder="" ref="commentInput"></textarea>\n        <div class="frm_textarea_opr">\n          <a ref="submitBtn" href="javascript:;" class="btn btn_default" @click="submitComment">{{submitBtnWording}}</a>\n        </div>\n      </div>\n      -->\n    </div>\n  </div>\n\n</div>';
});define("biz_common/utils/monitor.js",[],function(){
var n=[],t={};
return t.setAvg=function(i,e,o){
return n.push(i+"_"+e+"_"+o),n.push(i+"_"+(e-1)+"_1"),t;
},t.setSum=function(i,e,o){
return n.push(i+"_"+e+"_"+o),t;
},t.send=function(){
if(0!=n.length){
var t=new Image;
t.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";")+"&t="+Math.random(),n=[];
}
},t;
});define("discussion/draft.js",["common/qq/Class.js","biz_web/lib/store.js","biz_common/moment.js"],function(t){
"use strict";
var e=t("common/qq/Class.js"),s=t("biz_web/lib/store.js"),a=t("biz_common/moment.js"),i=e.declare({
init:function(t){
var e=this;
if(!e._supportUserData()&&"undefined"==typeof localStorage)return!1;
e.app_id=t,e.draftId=wx.data.uin+(t?t:""),e.timeKey="Time"+e.draftId,e.appKey="App"+e.draftId,
e.isDropped=!1;
var i=Math.floor(wx.cgiData.svr_time-new Date/1e3);
s.get(e.timeKey)&&Number(wx.cgiData.updateTime)>a(s.get(e.timeKey),"YYYY-MM-DD HH:mm:ss").unix()+i&&this._showImportDraft();
},
_supportUserData:function(){
try{
var t=document.createElement("input");
t.addBehavior("#default#userData");
}catch(e){
return!1;
}
return!0;
},
_getSaveTime:function(){
return s.get(this.timeKey);
},
_showTips:function(t){
$("#js_autosave").attr("title",t+" 已自动保存").show(),$("#js_draft_tips").show().find(".js_msg_content").html("已从本地读取"+t+"的草稿");
},
_showImportDraft:function(){
$("#js_import_tips").show().find(".js_msg_content").html('<span>如果文章内容不是上次编辑的，可尝试<span class="link_global" id="js_import_draft">导入</span>旧草稿。</span>');
},
showTips:function(){
$("#js_draft_tips").show().find(".js_msg_content").html('<span class="js_msg_content">点击<span class="link_global" id="js_draft_cancel">撤消</span>刚刚的导入操作。</span>');
},
clear:function(){
s.remove(this.timeKey),s.remove(this.appKey);
},
save:function(t){
var e=this;
e.clear(),s.set(e.timeKey,a().format("YYYY-MM-DD HH:mm:ss")),s.set(e.appKey,t),$("#js_autosave").attr("title",s.get(e.timeKey)+" 已自动保存").fadeIn(500);
},
get:function(){
var t=this,e=Math.floor(wx.cgiData.svr_time-new Date/1e3);
if(s.get(t.timeKey)&&Number(wx.cgiData.updateTime)>a(s.get(t.timeKey),"YYYY-MM-DD HH:mm:ss").unix()+e)return!1;
var i=s.get(this.appKey);
return i?i:!1;
},
getRaw:function(){
var t=s.get(this.appKey);
return t?t:!1;
}
});
return i;
});define("discussion/blog_cgi.js",["common/wx/Tips.js","common/wx/cgiRetCode.js"],function(n){
"use strict";
var o=n("common/wx/Tips.js"),t=n("common/wx/cgiRetCode.js"),r=function(n,r,e,c,i,u,f,s){
"function"==typeof i&&(s=f,f=u,u=i);
var a=(r.startsWith("/")?"":"/")+r+(e?"?action="+e:"");
c.blog_category&&(a+="&blogcategory="+c.blog_category),c.ajax=1,t.post($.extend({
url:a,
data:c,
dataType:"json",
error:function(n,t){
"timeout"!=t&&o.err("保存失败"),f&&f();
},
complete:s
},i||{}),function(n){
return{
"default":function(n){
o.err("保存失败"),f&&f(n);
},
0:function(n){
o.suc("保存成功"),u&&u(n);
},
"-1":function(){
o.err("发生错误，请稍后再试"),f&&f(n);
},
"-10001":function(){
o.err("操作太频繁，请稍后再试"),f&&f(n);
},
1002:function(){
o.err("因违犯社区管理条例，已被禁言"),f&&f(n);
},
"-10002":function(){
o.err("保存失败,内容含有非法链接"),f&&f(n);
},
"-10011":function(){
o.err("操作太频繁，请稍后再试"),f&&f(n);
},
"-10012":function(){
o.err("保存失败,内容含有非法链接"),f&&f(n);
},
1000:function(){
o.err("可能含有不合适的用语或内容，请修改后提交"),f&&f(n);
},
1011:function(){
o.err("你已回答该问题，请刷新查看，可在原回答上修改"),f&&f(n);
}
};
});
};
return{
save:r
};
});define("tpl/dialog.html.js",[],function(){
return'<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      {if !hideClose}\n      <!--#0001#-->\n      <a href="javascript:;" class="pop_closed" onclick="return false;">关闭</a>\n      <!--%0001%-->\n      {/if}\n    </div>\n    <div class="dialog_bd">\n      <div class="page_msg large simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if}\n          </div>\n        </div>\n      </div>\n    </div> \n    <div class="dialog_ft">\n  	{if !hideClose}\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn" onclick="return false;">{bt.text}</a>\n      {/each}\n  	{/if}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n';
});define("biz_common/jquery.ui/jquery.ui.draggable.js",[],function(){
!function(t,e){
function i(e,i){
var o,n,r,a=e.nodeName.toLowerCase();
return"area"===a?(o=e.parentNode,n=o.name,e.href&&n&&"map"===o.nodeName.toLowerCase()?(r=t("img[usemap=#"+n+"]")[0],
!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(a)?!e.disabled:"a"===a?e.href||i:i)&&s(e);
}
function s(e){
return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){
return"hidden"===t.css(this,"visibility");
}).length;
}
var o=0,n=/^ui-id-\d+$/;
t.ui=t.ui||{},t.extend(t.ui,{
version:"1.10.3"
}),t.fn.extend({
focus:function(e){
return function(i,s){
return"number"==typeof i?this.each(function(){
var e=this;
setTimeout(function(){
t(e).focus(),s&&s.call(e);
},i);
}):e.apply(this,arguments);
};
}(t.fn.focus),
scrollParent:function(){
var e;
return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){
return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"));
}).eq(0):this.parents().filter(function(){
return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"));
}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e;
},
zIndex:function(i){
if(i!==e)return this.css("zIndex",i);
if(this.length)for(var s,o,n=t(this[0]);n.length&&n[0]!==document;){
if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(o=parseInt(n.css("zIndex"),10),
!isNaN(o)&&0!==o))return o;
n=n.parent();
}
return 0;
},
uniqueId:function(){
return this.each(function(){
this.id||(this.id="ui-id-"+ ++o);
});
},
removeUniqueId:function(){
return this.each(function(){
n.test(this.id)&&t(this).removeAttr("id");
});
}
}),t.extend(t.expr[":"],{
data:t.expr.createPseudo?t.expr.createPseudo(function(e){
return function(i){
return!!t.data(i,e);
};
}):function(e,i,s){
return!!t.data(e,s[3]);
},
focusable:function(e){
return i(e,!isNaN(t.attr(e,"tabindex")));
},
tabbable:function(e){
var s=t.attr(e,"tabindex"),o=isNaN(s);
return(o||s>=0)&&i(e,!o);
}
}),t.extend(t.ui,{
plugin:{
add:function(e,i,s){
var o,n=t.ui[e].prototype;
for(o in s)n.plugins[o]=n.plugins[o]||[],n.plugins[o].push([i,s[o]]);
},
call:function(t,e,i){
var s,o=t.plugins[e];
if(o&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;s<o.length;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i);
}
},
hasScroll:function(e,i){
if("hidden"===t(e).css("overflow"))return!1;
var s=i&&"left"===i?"scrollLeft":"scrollTop",o=!1;
return e[s]>0?!0:(e[s]=1,o=e[s]>0,e[s]=0,o);
}
});
}(jQuery),function(t,e){
var i=0,s=Array.prototype.slice,o=t.cleanData;
t.cleanData=function(e){
for(var i,s=0;null!=(i=e[s]);s++)try{
t(i).triggerHandler("remove");
}catch(n){}
o(e);
},t.widget=function(e,i,s){
var o,n,r,a,l={},h=e.split(".")[0];
e=e.split(".")[1],o=h+"-"+e,s||(s=i,i=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){
return!!t.data(e,o);
},t[h]=t[h]||{},n=t[h][e],r=t[h][e]=function(t,e){
return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e);
},t.extend(r,n,{
version:s.version,
_proto:t.extend({},s),
_childConstructors:[]
}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){
return t.isFunction(s)?void(l[e]=function(){
var t=function(){
return i.prototype[e].apply(this,arguments);
},o=function(t){
return i.prototype[e].apply(this,t);
};
return function(){
var e,i=this._super,n=this._superApply;
return this._super=t,this._superApply=o,e=s.apply(this,arguments),this._super=i,
this._superApply=n,e;
};
}()):void(l[e]=s);
}),r.prototype=t.widget.extend(a,{
widgetEventPrefix:n?a.widgetEventPrefix:e
},l,{
constructor:r,
namespace:h,
widgetName:e,
widgetFullName:o
}),n?(t.each(n._childConstructors,function(e,i){
var s=i.prototype;
t.widget(s.namespace+"."+s.widgetName,r,i._proto);
}),delete n._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r);
},t.widget.extend=function(i){
for(var o,n,r=s.call(arguments,1),a=0,l=r.length;l>a;a++)for(o in r[a])n=r[a][o],
r[a].hasOwnProperty(o)&&n!==e&&(i[o]=t.isPlainObject(n)?t.isPlainObject(i[o])?t.widget.extend({},i[o],n):t.widget.extend({},n):n);
return i;
},t.widget.bridge=function(i,o){
var n=o.prototype.widgetFullName||i;
t.fn[i]=function(r){
var a="string"==typeof r,l=s.call(arguments,1),h=this;
return r=!a&&l.length?t.widget.extend.apply(null,[r].concat(l)):r,this.each(a?function(){
var s,o=t.data(this,n);
return o?t.isFunction(o[r])&&"_"!==r.charAt(0)?(s=o[r].apply(o,l),s!==o&&s!==e?(h=s&&s.jquery?h.pushStack(s.get()):s,
!1):void 0):t.error("no such method '"+r+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'");
}:function(){
var e=t.data(this,n);
e?e.option(r||{})._init():t.data(this,n,new o(r,this));
}),h;
};
},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={
widgetName:"widget",
widgetEventPrefix:"",
defaultElement:"<div>",
options:{
disabled:!1,
create:null
},
_createWidget:function(e,s){
s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,
this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),
this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),
this._on(!0,this.element,{
remove:function(t){
t.target===s&&this.destroy();
}
}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),
this._create(),this._trigger("create",null,this._getCreateEventData()),this._init();
},
_getCreateOptions:t.noop,
_getCreateEventData:t.noop,
_create:t.noop,
_init:t.noop,
destroy:function(){
this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),
this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),
this.focusable.removeClass("ui-state-focus");
},
_destroy:t.noop,
widget:function(){
return this.element;
},
option:function(i,s){
var o,n,r,a=i;
if(0===arguments.length)return t.widget.extend({},this.options);
if("string"==typeof i)if(a={},o=i.split("."),i=o.shift(),o.length){
for(n=a[i]=t.widget.extend({},this.options[i]),r=0;r<o.length-1;r++)n[o[r]]=n[o[r]]||{},
n=n[o[r]];
if(i=o.pop(),s===e)return n[i]===e?null:n[i];
n[i]=s;
}else{
if(s===e)return this.options[i]===e?null:this.options[i];
a[i]=s;
}
return this._setOptions(a),this;
},
_setOptions:function(t){
var e;
for(e in t)this._setOption(e,t[e]);
return this;
},
_setOption:function(t,e){
return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),
this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),
this;
},
enable:function(){
return this._setOption("disabled",!1);
},
disable:function(){
return this._setOption("disabled",!0);
},
_on:function(e,i,s){
var o,n=this;
"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=o=t(i),this.bindings=this.bindings.add(i)):(s=i,
i=this.element,o=this.widget()),t.each(s,function(s,r){
function a(){
return e||n.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?n[r]:r).apply(n,arguments):void 0;
}
"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);
var l=s.match(/^(\w+)\s*(.*)$/),h=l[1]+n.eventNamespace,c=l[2];
c?o.delegate(c,h,a):i.bind(h,a);
});
},
_off:function(t,e){
e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e);
},
_delay:function(t,e){
function i(){
return("string"==typeof t?s[t]:t).apply(s,arguments);
}
var s=this;
return setTimeout(i,e||0);
},
_hoverable:function(e){
this.hoverable=this.hoverable.add(e),this._on(e,{
mouseenter:function(e){
t(e.currentTarget).addClass("ui-state-hover");
},
mouseleave:function(e){
t(e.currentTarget).removeClass("ui-state-hover");
}
});
},
_focusable:function(e){
this.focusable=this.focusable.add(e),this._on(e,{
focusin:function(e){
t(e.currentTarget).addClass("ui-state-focus");
},
focusout:function(e){
t(e.currentTarget).removeClass("ui-state-focus");
}
});
},
_trigger:function(e,i,s){
var o,n,r=this.options[e];
if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),
i.target=this.element[0],n=i.originalEvent)for(o in n)o in i||(i[o]=n[o]);
return this.element.trigger(i,s),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented());
}
},t.each({
show:"fadeIn",
hide:"fadeOut"
},function(e,i){
t.Widget.prototype["_"+e]=function(s,o,n){
"string"==typeof o&&(o={
effect:o
});
var r,a=o?o===!0||"number"==typeof o?i:o.effect||i:e;
o=o||{},"number"==typeof o&&(o={
duration:o
}),r=!t.isEmptyObject(o),o.complete=n,o.delay&&s.delay(o.delay),r&&t.effects&&t.effects.effect[a]?s[e](o):a!==e&&s[a]?s[a](o.duration,o.easing,n):s.queue(function(i){
t(this)[e](),n&&n.call(s[0]),i();
});
};
});
}(jQuery),function(t){
var e=!1;
t(document).mouseup(function(){
e=!1;
}),t.widget("ui.mouse",{
version:"1.10.3",
options:{
cancel:"input,textarea,button,select,option",
distance:1,
delay:0
},
_mouseInit:function(){
var e=this;
this.element.bind("mousedown."+this.widgetName,function(t){
return e._mouseDown(t);
}).bind("click."+this.widgetName,function(i){
return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),
i.stopImmediatePropagation(),!1):void 0;
}),this.started=!1;
},
_mouseDestroy:function(){
this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
},
_mouseDown:function(i){
if(!e){
this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;
var s=this,o=1===i.which,n="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;
return o&&!n&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){
s.mouseDelayMet=!0;
},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,
!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),
this._mouseMoveDelegate=function(t){
return s._mouseMove(t);
},this._mouseUpDelegate=function(t){
return s._mouseUp(t);
},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),
i.preventDefault(),e=!0,!0)):!0;
}
},
_mouseMove:function(e){
return t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),
e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,
this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted);
},
_mouseUp:function(e){
return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),
this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),
this._mouseStop(e)),!1;
},
_mouseDistanceMet:function(t){
return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance;
},
_mouseDelayMet:function(){
return this.mouseDelayMet;
},
_mouseStart:function(){},
_mouseDrag:function(){},
_mouseStop:function(){},
_mouseCapture:function(){
return!0;
}
});
}(jQuery),function(t){
t.widget("ui.draggable",t.ui.mouse,{
version:"1.10.3",
widgetEventPrefix:"drag",
options:{
addClasses:!0,
appendTo:"parent",
axis:!1,
connectToSortable:!1,
containment:!1,
cursor:"auto",
cursorAt:!1,
grid:!1,
handle:!1,
helper:"original",
iframeFix:!1,
opacity:!1,
refreshPositions:!1,
revert:!1,
revertDuration:500,
scope:"default",
scroll:!0,
scrollSensitivity:20,
scrollSpeed:20,
snap:!1,
snapMode:"both",
snapTolerance:20,
stack:!1,
zIndex:!1,
drag:null,
start:null,
stop:null
},
_create:function(){
"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),
this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),
this._mouseInit();
},
_destroy:function(){
this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
this._mouseDestroy();
},
_mouseCapture:function(e){
var i=this.options;
return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),
this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){
t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
width:this.offsetWidth+"px",
height:this.offsetHeight+"px",
position:"absolute",
opacity:"0.001",
zIndex:1e3
}).css(t(this).offset()).appendTo("body");
}),!0):!1);
},
_mouseStart:function(e){
var i=this.options;
return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),
this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),
this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),
this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),
this.offset=this.positionAbs=this.element.offset(),this.offset={
top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left
},this.offset.scroll=!1,t.extend(this.offset,{
click:{
left:e.pageX-this.offset.left,
top:e.pageY-this.offset.top
},
parent:this._getParentOffset(),
relative:this._getRelativeOffset()
}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,
this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),
this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),
t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),
t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0);
},
_mouseDrag:function(e,i){
if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),
this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),
!i){
var s=this._uiHash();
if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;
this.position=s.position;
}
return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),
this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),
t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1;
},
_mouseStop:function(e){
var i=this,s=!1;
return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),
this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){
i._trigger("stop",e)!==!1&&i._clear();
}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1;
},
_mouseUp:function(e){
return t("div.ui-draggable-iframeFix").each(function(){
this.parentNode.removeChild(this);
}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e);
},
cancel:function(){
return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),
this;
},
_getHandle:function(e){
return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0;
},
_createHelper:function(e){
var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;
return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),
s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),
s;
},
_adjustOffsetFromHelper:function(e){
"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={
left:+e[0],
top:+e[1]||0
}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),
"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top);
},
_getParentOffset:function(){
var e=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),
e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={
top:0,
left:0
}),{
top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
};
},
_getRelativeOffset:function(){
if("relative"===this.cssPosition){
var t=this.element.position();
return{
top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
};
}
return{
top:0,
left:0
};
},
_cacheMargins:function(){
this.margins={
left:parseInt(this.element.css("marginLeft"),10)||0,
top:parseInt(this.element.css("marginTop"),10)||0,
right:parseInt(this.element.css("marginRight"),10)||0,
bottom:parseInt(this.element.css("marginBottom"),10)||0
};
},
_cacheHelperProportions:function(){
this.helperProportions={
width:this.helper.outerWidth(),
height:this.helper.outerHeight()
};
},
_setContainment:function(){
var e,i,s,o=this.options;
return o.containment?"window"===o.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===o.containment?void(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):o.containment.constructor===Array?void(this.containment=o.containment):("parent"===o.containment&&(o.containment=this.helper[0].parentNode),
i=t(o.containment),s=i[0],void(s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],
this.relative_container=i))):void(this.containment=null);
},
_convertPositionTo:function(e,i){
i||(i=this.position);
var s="absolute"===e?1:-1,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
return this.offset.scroll||(this.offset.scroll={
top:o.scrollTop(),
left:o.scrollLeft()
}),{
top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,
left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s
};
},
_generatePosition:function(e){
var i,s,o,n,r=this.options,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=e.pageX,h=e.pageY;
return this.offset.scroll||(this.offset.scroll={
top:a.scrollTop(),
left:a.scrollLeft()
}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),
i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,
e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),
e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),
r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,
h=i?o-this.offset.click.top>=i[1]||o-this.offset.click.top>i[3]?o:o-this.offset.click.top>=i[1]?o-r.grid[1]:o+r.grid[1]:o,
n=r.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,
l=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-r.grid[0]:n+r.grid[0]:n)),
{
top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),
left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)
};
},
_clear:function(){
this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),
this.helper=null,this.cancelHelperRemoval=!1;
},
_trigger:function(e,i,s){
return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),
t.Widget.prototype._trigger.call(this,e,i,s);
},
plugins:{},
_uiHash:function(){
return{
helper:this.helper,
position:this.position,
originalPosition:this.originalPosition,
offset:this.positionAbs
};
}
}),t.ui.plugin.add("draggable","connectToSortable",{
start:function(e,i){
var s=t(this).data("ui-draggable"),o=s.options,n=t.extend({},i,{
item:s.element
});
s.sortables=[],t(o.connectToSortable).each(function(){
var i=t.data(this,"ui-sortable");
i&&!i.options.disabled&&(s.sortables.push({
instance:i,
shouldRevert:i.options.revert
}),i.refreshPositions(),i._trigger("activate",e,n));
});
},
stop:function(e,i){
var s=t(this).data("ui-draggable"),o=t.extend({},i,{
item:s.element
});
t.each(s.sortables,function(){
this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,
this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),
this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({
top:"auto",
left:"auto"
})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,o));
});
},
drag:function(e,i){
var s=t(this).data("ui-draggable"),o=this;
t.each(s.sortables,function(){
var n=!1,r=this;
this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,
this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(n=!0,
t.each(s.sortables,function(){
return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,
this.instance.offset.click=s.offset.click,this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(r.instance.element[0],this.instance.element[0])&&(n=!1),
n;
})),n?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),
this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){
return i.helper[0];
},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),
this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,
this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,
this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,
s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,
this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,
this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),
this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,
this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),
s._trigger("fromSortable",e),s.dropped=!1);
});
}
}),t.ui.plugin.add("draggable","cursor",{
start:function(){
var e=t("body"),i=t(this).data("ui-draggable").options;
e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor);
},
stop:function(){
var e=t(this).data("ui-draggable").options;
e._cursor&&t("body").css("cursor",e._cursor);
}
}),t.ui.plugin.add("draggable","opacity",{
start:function(e,i){
var s=t(i.helper),o=t(this).data("ui-draggable").options;
s.css("opacity")&&(o._opacity=s.css("opacity")),s.css("opacity",o.opacity);
},
stop:function(e,i){
var s=t(this).data("ui-draggable").options;
s._opacity&&t(i.helper).css("opacity",s._opacity);
}
}),t.ui.plugin.add("draggable","scroll",{
start:function(){
var e=t(this).data("ui-draggable");
e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset());
},
drag:function(e){
var i=t(this).data("ui-draggable"),s=i.options,o=!1;
i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=o=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=o=i.scrollParent[0].scrollTop-s.scrollSpeed)),
s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=o=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=o=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?o=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(o=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),
s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?o=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(o=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),
o!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e);
}
}),t.ui.plugin.add("draggable","snap",{
start:function(){
var e=t(this).data("ui-draggable"),i=e.options;
e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){
var i=t(this),s=i.offset();
this!==e.element[0]&&e.snapElements.push({
item:this,
width:i.outerWidth(),
height:i.outerHeight(),
top:s.top,
left:s.left
});
});
},
drag:function(e,i){
var s,o,n,r,a,l,h,c,p,u,f=t(this).data("ui-draggable"),d=f.options,g=d.snapTolerance,m=i.offset.left,v=m+f.helperProportions.width,_=i.offset.top,b=_+f.helperProportions.height;
for(p=f.snapElements.length-1;p>=0;p--)a=f.snapElements[p].left,l=a+f.snapElements[p].width,
h=f.snapElements[p].top,c=h+f.snapElements[p].height,a-g>v||m>l+g||h-g>b||_>c+g||!t.contains(f.snapElements[p].item.ownerDocument,f.snapElements[p].item)?(f.snapElements[p].snapping&&f.options.snap.release&&f.options.snap.release.call(f.element,e,t.extend(f._uiHash(),{
snapItem:f.snapElements[p].item
})),f.snapElements[p].snapping=!1):("inner"!==d.snapMode&&(s=Math.abs(h-b)<=g,o=Math.abs(c-_)<=g,
n=Math.abs(a-v)<=g,r=Math.abs(l-m)<=g,s&&(i.position.top=f._convertPositionTo("relative",{
top:h-f.helperProportions.height,
left:0
}).top-f.margins.top),o&&(i.position.top=f._convertPositionTo("relative",{
top:c,
left:0
}).top-f.margins.top),n&&(i.position.left=f._convertPositionTo("relative",{
top:0,
left:a-f.helperProportions.width
}).left-f.margins.left),r&&(i.position.left=f._convertPositionTo("relative",{
top:0,
left:l
}).left-f.margins.left)),u=s||o||n||r,"outer"!==d.snapMode&&(s=Math.abs(h-_)<=g,
o=Math.abs(c-b)<=g,n=Math.abs(a-m)<=g,r=Math.abs(l-v)<=g,s&&(i.position.top=f._convertPositionTo("relative",{
top:h,
left:0
}).top-f.margins.top),o&&(i.position.top=f._convertPositionTo("relative",{
top:c-f.helperProportions.height,
left:0
}).top-f.margins.top),n&&(i.position.left=f._convertPositionTo("relative",{
top:0,
left:a
}).left-f.margins.left),r&&(i.position.left=f._convertPositionTo("relative",{
top:0,
left:l-f.helperProportions.width
}).left-f.margins.left)),!f.snapElements[p].snapping&&(s||o||n||r||u)&&f.options.snap.snap&&f.options.snap.snap.call(f.element,e,t.extend(f._uiHash(),{
snapItem:f.snapElements[p].item
})),f.snapElements[p].snapping=s||o||n||r||u);
}
}),t.ui.plugin.add("draggable","stack",{
start:function(){
var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){
return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0);
});
s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){
t(this).css("zIndex",e+i);
}),this.css("zIndex",e+s.length));
}
}),t.ui.plugin.add("draggable","zIndex",{
start:function(e,i){
var s=t(i.helper),o=t(this).data("ui-draggable").options;
s.css("zIndex")&&(o._zIndex=s.css("zIndex")),s.css("zIndex",o.zIndex);
},
stop:function(e,i){
var s=t(this).data("ui-draggable").options;
s._zIndex&&t(i.helper).css("zIndex",s._zIndex);
}
});
}(jQuery);
});