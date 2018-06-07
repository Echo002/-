define("discussion/article_list.js",["biz_common/jquery.validate.js","common/qq/Class.js","common/wx/Tips.js","common/wx/dialog.js","discussion/blog_cgi.js","discussion/draft.js","discussion/report.js","common/wx/mpEditor/plugin/remoteimg.js","common/wx/mpEditor/plugin/filter.js"],function(t){
"use strict";
function e(t){
return t?($.each(t,function(e,r){
r.html&&(t[e]=r.html(!1));
}),t):null;
}
function r(){}
var n=t("biz_common/jquery.validate.js"),i=n.rules,o=t("common/qq/Class.js"),a=t("common/wx/Tips.js"),s=t("common/wx/dialog.js"),c=t("discussion/blog_cgi.js"),u=t("discussion/draft.js"),l=t("discussion/report.js"),d=(t("common/wx/mpEditor/plugin/remoteimg.js"),
t("common/wx/mpEditor/plugin/filter.js")),f={},h="- 当前 Bug 的表现（可附上截图）- 预期表现- 复现路径- 提供一个最简复现 Demo",m="- 需求的场景描述（希望解决的问题）- 希望提供的能力",_=(Math.random(),
function(t,e,r,n){
if(t===e)return 0!==t||1/t===1/e;
if(null==t||null==e)return t===e;
var i=Object.prototype.toString.call(t);
if(i!==Object.prototype.toString.call(e))return!1;
switch(i){
case"[object RegExp]":
case"[object String]":
return""+t==""+e;

case"[object Number]":
return+t!==+t?+e!==+e:0===+t?1/+t===1/e:+t===+e;

case"[object Date]":
case"[object Boolean]":
return+t===+e;
}
var o="[object Array]"===i;
if(!o&&("object"!=typeof t||"object"!=typeof e))return!1;
r=r||[],n=n||[];
for(var a=r.length;a--;)if(r[a]===t)return n[a]===e;
if(r.push(t),n.push(e),o){
if(a=t.length,a!==e.length)return!1;
for(;a--;)if(!_(t[a],e[a],r,n))return!1;
}else for(var s in t)if(t.hasOwnProperty(s)&&(!e.hasOwnProperty(s)||!_(t[s],e[s],r,n)))return!1;
return r.pop(),n.pop(),!0;
}),g=o.declare({
init:function(t){
var r=this;
$.extend(!0,r,t),r.opt=t,r.$dom=$(t.editor_selector),r.draft=t.needDraft?new u(t.docid+t.blogCategory):null,
r.list=r.draft?r.draft.get()||e(t.appmsg_data):e(t.appmsg_data),t.draftPrepend&&(r.list.content=t.draftPrepend+r.list.content),
r.lastData=r.list,(!r.list.content||!r.list.content.trim())&&wx&&wx.cgiData&&wx.cgiData.blog_category&&1===wx.cgiData.blog_category&&location.href.indexOf("action=new_edit_blog")>0,
r.add(r.list),r._bindEvent();
},
_bindEvent:function(){
var t=this;
if(t.draft){
var e=function(){
$("#js_import_tips,#js_draft_tips").hide(),t.ueditor.removeListener("contentchange",e),
e=null;
};
t.ueditor.addListener("contentchange",e),$("body").on("click","#js_draft_cancel",function(){
return t.draft.clear(),t.draft.isDropped=!0,l.addPvUv("cacelcache"),window.location.reload(),
!1;
}),$("body").on("click","#js_import_draft",function(){
var e=t.draft.getRaw();
list&&t.add(e),t.draft.showTips(),$("#js_import_tips").hide();
}),setInterval(function(){
var e=t.getData();
t.draft.save(e);
},12e4),window.onbeforeunload=function(){
var e=t.getData();
t.lastData&&_(e,t.lastData)||(e&&!t.draft.isDropped?t.draft.save(e):t.draft.clear());
};
}
t.opt.warnBeforeLeave&&$("body").on("click","a",function(e){
var r=$(this).attr("href"),n=$(this).attr("target");
if("_blank"!==n&&"string"==typeof r&&0!==r.indexOf("javascript:")&&0!==r.indexOf("#")){
var i=t.getData();
t.lastData&&_(i,t.lastData)||(e.preventDefault(),s.show({
type:"info",
msg:"是否保存此次修改？",
buttons:[{
text:"保存",
click:function(){
t.save($("#js_submit"),function(){
a.remove(),$("#js_save_success").show(),location.href=r;
}),this.remove();
}
},{
text:"不保存",
type:"normal",
click:function(){
window.onbeforeunload=null,location.href=r,this.remove();
}
}]
}));
}
}),t.ueditor.addListener("get_current_article",function(){
return!0;
}),t.ueditor.ueditor.addListener("beforepaste",function(t,e){
try{
if(e&&e.html)if(/^</.test(e.html.trim())){
var r=$(e.html);
r.contents().filter(function(){
return this.nodeType==Node.TEXT_NODE;
}).each(function(){
var t=$(this);
if(0==t.closest("a").length){
var e=t.text();
if(/http/i.test(e)){
var r=e.replace(/https?:\/\/[a-zA-Z0-9-._~:\/\?#\[\]@!$&'()*+,;=`.]+/gi,function(t){
return d.isLocalDomain(t)?'<a href="'+t+'">'+t+"</a>":t;
});
/<a href=/.test(r.trim())&&t.replaceWith(r);
}
}
});
var n="";
r.each(function(){
n+=this.outerHTML;
}),e.html=n;
}else e.html=e.html.replace(/https?:\/\/[a-zA-Z0-9-._~:\/\?#\[\]@!$&'()*+,;=`.]+/gi,function(t){
return d.isLocalDomain(t)?'<a href="'+t+'">'+t+"</a>":t;
});
}catch(i){}
});
},
_checkRemoteImage:function(t){
function e(){
s.removeListener("remoteimg_all_complete",e);
var t=r.getPostData(o);
return t?void a(t):(f.sumbmiting=!1,void n.btn(!0));
}
var r=this,n=t.btn,i=t.postData,o=t.strict,a=t.callback,s=r.ueditor,c=s.fireEvent("checkRemoteList");
return c?void a(i):(s.addListener("remoteimg_all_complete",e),void s.funcPvUvReport("save_remoting_img"));
},
_FilterOutput:function(t){
var e=this;
if(!t)return!0;
for(var r=["content"],n=0,i=r.length;i>n;n++)if(t[r[n]]){
var o=d.validOutput(t[r[n]],!1);
if(o.valid===!1){
if(0==o.errType){
var a=e.$dom.find(".js_content_error");
e.showErrMsg(a,'正文不能含有非当前域名的链接，点击<a href="javascript:;" class="js_find_external_Link">查看</a>'),
e.scrollIntoView(a,200);
}
return!1;
}
t[r[n]]=o.content;
}
return!0;
},
add:function(t){
for(var e=this,r=e.opt.submitKey,n={},i=0,o=r.length;o>i;i++)n[r[i]]="";
this.data=$.extend(n,t),this.render();
},
render:function(){
var t=this,e=this.data,r=this.$dom;
r.find(".js_field").each(function(){
var t=$(this),r=t.attr("name"),n=t.attr("type");
"checkbox"==n?t.checkbox("checked",!!e[r]):t.val(e[r]||"").trigger("blur").trigger("keydown");
}),t.ueditor&&t.ueditor.fireEvent("renderReady"),r.find("input.js_title").focus(),
this.setEditorContent();
},
setEditorContent:function(){
var t=this,e=this.data;
t.ueditor.ready(function(){
t.ueditor.setContent("");
try{
t.ueditor.setContent(e.content);
}catch(r){}
});
},
updateRemoteImg:function(t){
var e=$(this.ueditor.getDocument()).find("[data-remoteid="+t.uid+"]");
e&&this.changeRemoteImgUrl({
imgDom:e,
type:t.type,
remoteType:t.remoteType,
format:t.format,
img_url:t.img_url
});
},
changeRemoteImgUrl:function(t){
var e=$(t.imgDom),r=t.remoteType,n=t.format,i=t.img_url;
this.ueditor.fireEvent("clearImgCache",e,t.type),e.removeClass("js_catchingremoteimage"),
"img"==t.type?(e.attr({
src:i
}).removeAttr("_src").removeAttr("data-src"),"success"==r&&n?e.attr({
"data-type":n
}):"error"==r&&e.css({
width:"497px",
height:"auto"
}).addClass("js_catchremoteimageerror")):"bg"==t.type&&(e.css({
"background-image":"url("+i+")"
}),"error"==r&&e.addClass("js_catchremoteimageerror")),e.removeAttr("data-remoteid");
},
updateSubmitKey:function(t){
t&&t.length&&(this.opt.submitKey=t);
},
flush:function(){
var t=this,e=t.data,r=t.$dom;
r.find(".js_field").each(function(){
var t=$(this).attr("name"),r=$(this).attr("type"),n=$(this).data("parseint");
e[t]="checkbox"==r?$(this).checkbox("value")?1:0:n?parseInt($.trim($(this).val())):$.trim($(this).val());
}),e=t.ueditor.getEditorData(e);
},
getData:function(t,e){
this.flush();
var r=this,n=r.data,i={},o=r.opt.submitKey;
r.extraPostDataProvider&&r.extraPostDataProvider.provider&&(r.extraPostDataProvider.override?$.extend(n,r.extraPostDataProvider.provider()||{}):$.extend(!0,n,r.extraPostDataProvider.provider()||{})),
$.each(o,function(t,e){
switch(e){
case"append_opt":
n[e]&&(i[e]=n[e]);
break;

default:
i[e]=n[e];
}
});
var a=t?e?r.validateStrictly(i):r.validate(i):$.extend(!0,{},n);
return a;
},
getPostData:function(t){
var e=this,r=e.getData(!0,t);
if(!r)return null;
var n=r;
return n.docid=e.docid||"",n;
},
setExtraPostDataProvider:function(t,e){
var r=this;
r.extraPostDataProvider={
override:t,
provider:e
};
},
validate:function(t){
return this.validateStrictly(t);
},
showErrMsg:function(t,e){
this.ueditor.fireEvent("showErrMsg",t,e);
},
scrollIntoView:function(t,e){
this.ueditor.fireEvent("scrollIntoView",t,e);
},
hideAllErrMsg:function(){
this.ueditor.fireEvent("hideAllErrMsg");
},
validateStrictly:function(t){
var e,r=this,n=r.opt.validLimit,o=r.$dom,a=$("<div>").html(t.content),s=!0,c=null,u=$(a).find(".js_catchremoteimageerror").length;
if(u)return e=o.find(".js_content_error"),this.showErrMsg(e,'正文有%s张图片粘贴失败，点击<a href="javascript:;" class="js_find_img_err">查看</a>'.sprintf(u)),
this.scrollIntoView(e,200),null;
if(n.title&&!i.rangelength(t.title,n.title)&&(this.showErrMsg(o.find(".js_title_error"),"标题不能为空且长度不能超过%s字".sprintf(n.title[1])),
c=c||".js_title_error",s=null),i.rangelength(t.content,[1,1e7])||(this.showErrMsg(o.find(".js_content_error"),"正文总大小不得超过10M字节"),
c=c||".js_content_error",s=null),n.content&&!i.rangelength(t.content.text(),n.content)&&(this.showErrMsg(o.find(".js_content_error"),"正文不能为空且长度不能超过%s字".sprintf(n.content[1])),
c=c||".js_content_error",s=null),!n.content||t.content.text()!==h&&t.content.text()!==m||(this.showErrMsg(o.find(".js_content_error"),"请基于模板详细描述问题后发帖"),
c=c||".js_content_error",s=null),t.content=t.content.replace(/<a href="wechatide:\/\/(minicode\/.+?)".+?>(.+?)<\/a>/g,function(t,e,r){
return"<span data-ideurl="+e+">"+r+"</span>";
}),n.imgs){
var l=(t.content.match(/<img\s/g)||[]).length;
l<n.imgs[0]?(this.showErrMsg($(".js_content_error"),"至少添加%s张图片".sprintf(n.imgs[0])),
c=c||".js_content_error",s=null):l>n.imgs[1]&&(this.showErrMsg($(".js_content_error"),"最多添加%s张图片".sprintf(n.imgs[1])),
c=c||".js_content_error",s=null);
}
if(t.question_category)switch(t.question_category){
case 1:
t.question_attr&&t.question_attr.review_time||(this.showErrMsg($(".js_content_error"),"请填写提交审核的时间"),
c=c||".js_content_error",s=null);
break;

case 2:
t.question_attr&&t.question_attr.component_name&&t.question_attr.client_type||(this.showErrMsg($(".js_content_error"),"请填写组件/API及终端类型"),
c=c||".js_content_error",s=null);
break;

case 4:
t.question_attr&&t.question_attr.appid&&t.question_attr.optime||(this.showErrMsg($(".js_content_error"),"请填写 appid 及操作时间"),
c=c||".js_content_error",s=null);
break;

case 8:
t.question_attr&&t.question_attr.system_for_ide&&t.question_attr.ide_version||(this.showErrMsg($(".js_content_error"),"请填写操作系统及 IDE 版本号"),
c=c||".js_content_error",s=null);
break;

case 16:
t.question_attr&&t.question_attr.system_for_wechat&&t.question_attr.wechat_version||(this.showErrMsg($(".js_content_error"),"请填写客户端操作系统及微信版本号"),
c=c||".js_content_error",s=null);
break;

case 32:}
if(t.ext_link&&(/^https?:\/\//.test(t.ext_link)||(this.showErrMsg($(".js_content_error"),"链接必须以 http 或 https 开头"),
c=c||".js_content_error",s=null)),!s){
var d=o.find(c);
return d&&0!=d.length||(d=$(c)),d&&d.length>0&&this.scrollIntoView(d,150),null;
}
return r.ueditor.checkPlugins(a)?(this.hideAllErrMsg(),t):null;
},
update:function(t){
t&&that.ueditor.setContent(t,!1);
},
save:function(t,e,n){
if(f.sumbmiting!==!0){
var i=0,o=this,s=o.ueditor.getUeditor();
1*s.queryCommandState("source")===1&&s.execCommand("source");
try{
i=3;
var u=o.getData();
i=4;
var l=o.getPostData(n);
if(i=5,!l)return;
f.sumbmiting=!0,t.btn(!1),r(30,.1,"error"),o._checkRemoteImage({
btn:t,
postData:l,
strict:n,
callback:function(n){
if(n=o.filtercharCode(n),o._FilterOutput(n)===!1)return f.sumbmiting=!1,void t.btn(!0);
var i={};
o.opt.sendJSON&&(i.contentType="application/json"),o.opt.renameContent&&(n[o.opt.renameContent]=n.content,
delete n.content),r(31,.1,"error"),c.save(!0,o.pathname||"blogedit",o.submitAction,n,i,function(r){
t.btn(!0),o.draft&&o.draft.clear(),o.docid=r.docid,o.lastData=u,o.update(r.filtered_content_html),
e(r,n);
},function(){
f.sumbmiting=!1,t.btn(!0);
});
}
}),i=6;
}catch(d){
f.sumbmiting=!1,t.btn(!0),a.err("保存失败，请稍后再试");
}
}
},
filtercharCode:function(t){
var e=!1;
for(var r in t)t.hasOwnProperty(r)&&"function"==typeof t[r].replace&&(t[r]=t[r].replace(/[\ud800-\uDFFF]/g,function(t,r,n){
return/[\ud800-\udbff]/.test(t)&&/[\uDC00-\uDFFF]/.test(n.charAt(r+1)||"")?t:/[\ud800-\udbff]/.test(n.charAt(r-1)||"")&&/[\uDC00-\uDFFF]/.test(t)?t:(e=!0,
"");
}));
return t;
}
});
return g;
});define("tpl/mpEditor/comment_layout.html.js",[],function(){
return'<div id="##" class="%%">\n    <!-- 工具栏 -->\n    <div id="##_toolbarbox" class="%%-toolbarbox show-edui-more">\n        {if length}\n        <div id="##_toolbarboxouter" class="%%-toolbarboxouter">\n            <div class="%%-toolbarboxinner">{=toolbarBoxHtml}</div>\n            <div id="##_toolbar_mask" class="edui_toolbar_mask"></div>\n        </div>\n        {/if}\n    </div>\n\n    <input type="hidden" class="js_field" name="type" value="0">\n\n    <!-- 正文 -->\n    <div class="editor_area">\n        <div class="split_line"></div>\n        <!-- 正文报错 -->\n        <div class="page_msg mini with_closed js_catch_tips js_error_msg" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content">粘贴失败</p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        <div class="page_msg mini with_closed js_content_error js_error_msg" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content">评论不能为空</p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        <div id="##_iframeholder" class="%%-iframeholder">\n            <div id="##_contentplaceholder" class="editor_content_placeholder" style="display:none"></div>\n        </div>\n    </div>\n    <!-- 底部 -->\n    <div id="##_bottombar" class="%%-bottomContainer tool_bar tr">\n        <span id="##_wordcount" class="%%-wordcount mini_tips weak_text"></span>\n        <a class="btn btn_default js_cancel_edit" href="javascript:;" style="display: none;">取消</a>\n        <a class="btn btn_primary js_submit_edit" href="javascript:;">回复</a>\n        <span id="##_scale" style="display:none;"></span>\n    </div>\n    <div id="##_scalelayer"></div>\n</div>\n';
});define("common/wx/popover.js",["tpl/popover.html.js"],function(o,t,e){
"use strict";
function i(o){
if(o=$.extend(!0,{},h,o),this.opt=o,this.$dom=$(o.dom),this.$dom.data("popover")){
var t=this.$dom.data("popover");
return p(o,t),t.opt.defaultOpen?t.$pop.show():t.$pop.hide(),t;
}
return o.buttons&&o.buttons&&o.buttons.each(function(o){
o.type=o.type||"default";
}),this.$pop=$(template.compile(s)(o)),o.addCls&&this.$pop.addClass(o.addCls),$("body").append(this.$pop),
n(this,o),p(o,this),this.opt.defaultOpen?this.$pop.show():this.$pop.hide(),this.$dom.data("popover",this),
this.clickIn=!0,this;
}
function n(o,t){
function e(){
clearTimeout(n),o.show();
}
function i(){
n=setTimeout(function(){
o.hide();
},p);
}
if(t.buttons&&t.buttons.length>0&&o.$pop.find(".jsPopoverBt").each(function(e,i){
t.buttons[e]&&"function"==typeof t.buttons[e].click&&$(i).click(function(i){
t.buttons[e].click.call(o,i);
});
}),o.$pop.find(".jsPopoverClose").click(function(){
t.close===!0?o.hide():"function"==typeof t.close&&t.close.call(o);
}),t.hover&&(o.$dom.hover(function(){
o.hoverTime&&clearTimeout(o.hoverTime);
},function(){
o.hoverTime=o.hide.delay(t.delay,o);
}),o.$pop.hover(function(){
o.hoverTime&&clearTimeout(o.hoverTime);
},function(){
o.hoverTime&&clearTimeout(o.hoverTime),o.hoverTime=o.hide.delay(t.delay,o);
})),t.isToggle){
var n=null,p=300;
o.$dom.hover(e,i),o.$pop.hover(e,i);
}
t.hideIfBlur&&(o._onBlur=function(o){
var t=o.data.context,e=o.target,i=t.$dom.get(0),n=t.$pop.get(0);
t.clickIn?t.clickIn=!1:$.contains(i,e)||i===e||$.contains(n,e)||n===e||o.data.context.hide();
},$(document).on("click",{
context:o
},o._onBlur)),o._onResize=function(o){
o.data.context.resetPosition();
},$(window).on("resize",{
context:o
},o._onResize);
}
function p(o,t){
var e=t.$dom.offset();
"left"==o.margin?t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left+t.$dom.outerWidth()/2-42
}).addClass("pos_left"):"right"==o.margin?t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left+t.$dom.outerWidth()/2-t.$pop.width()+42
}).addClass("pos_right"):t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left+t.$dom.outerWidth()/2-t.$pop.width()/2
}).addClass("pos_center");
}
var s=o("tpl/popover.html.js"),h={
dom:"",
content:"",
place:"bottom",
margin:"center",
hideIfBlur:!1,
hover:!1,
addCls:"",
width:"",
isToggle:!1,
defaultOpen:!0,
onHide:!1,
onShow:!1,
onRemove:!1,
delayTime:1
};
i.prototype={
remove:function(){
this.$pop.remove(),this.$dom.removeData("popover"),this._onBlur&&$(document).off("click",this._onBlur),
$(window).off("resize",this._onResize),"function"==typeof this.opt.onRemove&&this.opt.onRemove.call(this);
},
hide:function(){
this.$pop.hide(),"function"==typeof this.opt.onHide&&this.opt.onHide.call(this);
},
show:function(){
this.$pop.show(),"function"==typeof this.opt.onShow&&this.opt.onShow.call(this);
},
resetPosition:function(){
return p(this.opt,this);
}
},e.exports=i;
});define("common/wx/mpEditor/editor.js",["widget/ueditor_new/themes/default/ueditor.css","widget/ueditor_new/themes/default/css/ueditor.css","widget/tooltip.css","common/wx/mpEditor/contextmenu.js","common/wx/mpEditor/plugin/popup.js","common/wx/mpEditor/plugin/remoteimg.js","tpl/tooltip.html.js","tpl/mpEditor/layout.html.js","common/wx/mpEditor/plugin/filter.js","tpl/mpEditor/plugin/externalLink_del_popup.html.js","discussion/report.js"],function(t){
"use strict";
function e(t){
this.__o={
container:"",
domain:/^.*\.qq\.com$/.test(location.hostname)?"qq.com":"",
plugins:[],
onReady:function(){}
},this.__ueditor_config={
layout:template.compile(a),
contextMenu:n,
UEDITOR_HOME_URL:d.URL,
isShow:!0,
initialContent:"",
autoClearinitialContent:!1,
iframeCssUrl:wx.EditorRes["themes/iframe"],
textarea:"editorValue",
focus:!1,
initialFrameWidth:"auto",
initialFrameHeight:0,
minFrameWidth:800,
minFrameHeight:400,
autoClearEmptyNode:!0,
fullscreen:!1,
readonly:!1,
zIndex:999,
imagePopup:!0,
enterTag:"p",
pageBreakTag:"_baidu_page_break_tag_",
customDomain:!0,
lang:d.LANG,
theme:"default",
allHtmlEnabled:!1,
scaleEnabled:!1,
wordCount:!1,
maximumWords:1e4,
wordCountMsg:"",
wordOverFlowMsg:"",
elementPathEnabled:!1,
autoHeightEnabled:!1,
imageUrl:"/cgi-bin/uploadimg2cdn?t=ajax-editor-upload-img&lang="+d.LANG+"&token="+d.TOKEN,
imagePath:"",
compressSide:1,
catchRemoteImageEnable:!0,
catcherUrl:"/uploadimg2cdn?lang="+d.LANG+"&token="+d.TOKEN,
separater:"",
toolbars:[["more","|","fontsize","|","blockquote","horizontal","|","removeformat"],["bold","italic","underline","forecolor","backcolor","|","justifyleft","justifycenter","justifyright","|","rowspacingtop","rowspacingbottom","lineheight","|","insertorderedlist","insertunorderedlist","|","imagenone","imageleft","imageright","imagecenter"]],
labelMap:{
anchor:"",
undo:""
},
topOffset:0
},this.__init(t);
}
t("widget/ueditor_new/themes/default/ueditor.css"),t("widget/ueditor_new/themes/default/css/ueditor.css"),
t("widget/tooltip.css");
var n=t("common/wx/mpEditor/contextmenu.js"),o=t("common/wx/mpEditor/plugin/popup.js"),i=t("common/wx/mpEditor/plugin/remoteimg.js"),r=t("tpl/tooltip.html.js"),a=t("tpl/mpEditor/layout.html.js"),s=t("common/wx/mpEditor/plugin/filter.js"),u=t("tpl/mpEditor/plugin/externalLink_del_popup.html.js"),l=t("discussion/report.js"),d={
LANG:window.wx.data.lang,
TOKEN:window.wx.data.t,
URL:/^dev/.test(location.host)?"/wxopenforumres/htmledition/style/widget/ueditor_new/":"//res.wx.qq.com/wxopenforumres/htmledition/style/widget/ueditor_new/"
};
return e.prototype={
__init:function(t){
this.__g={},this.__extend(t),document.domain=this.__o.domain,this.__registerPlugins(),
this.__createEditor(),this.__initEvent(),new i(this),this.__initReport(),this.__customEventHandle(),
this.__o.container&&this.render(this.__o.container);
},
__initReport:function(){
var t=this;
this.addListener("funcPvUvReport",function(e,n,o){
t.funcPvUvReport(n,o);
});
},
__extend:function(t){
var e=this.__ueditor_config,n=this.__o;
for(var o in t)n.hasOwnProperty(o)&&(n[o]=t[o]),e.hasOwnProperty(o)&&(e[o]=t[o]);
"auto"!=e.initialFrameHeight&&(e.initialFrameHeight=Math.max(e.initialFrameHeight,e.minFrameHeight)),
"auto"!=e.initialFrameWidth&&(e.initialFrameWidth=Math.max(e.initialFrameWidth,e.minFrameWidth));
},
__registerPlugins:function(){
for(var t=this,e=this.__o.plugins,n=0,o=e.length;o>n;n++){
var i=e[n];
!function(e){
var n=e.getName();
UE.plugins[n]=function(){
this.commands[n]={
execCommand:e.getExecCommand(),
noCommandReprot:"function"==typeof e.noCommandReprot?e.noCommandReprot():!1
},"function"==typeof e.getQueryCommandState&&(this.commands[n].queryCommandState=e.getQueryCommandState()),
"function"==typeof e.getQueryCommandValue&&(this.commands[n].queryCommandValue=e.getQueryCommandValue()),
"function"==typeof e.isNotNeedUndo&&e.isNotNeedUndo()===!0&&(this.commands[n].notNeedUndo=1);
},t.__setPluginMenu(e),t.__pluginPerformance(e);
}(i);
}
},
__setPluginMenu:function(t){
var e=this.__ueditor_config.contextMenu;
"function"==typeof t.getContextMenu&&e.push("-",t.getContextMenu());
},
__pluginPerformance:function(t){
var e=0;
switch("function"==typeof t.getType&&(e=t.getType()||0),e){
case 0:
this.__ceateDefaultBtn(t);
break;

case 1:
"function"==typeof t.createToolBarBtn?t.createToolBarBtn(this.getUi()):this.__createToolBarBtn(t);
}
},
__ceateDefaultBtn:function(t){
var e=this;
if("function"==typeof t.getContainer){
var n=$(t.getContainer()),o=t.getName();
n&&n.click(function(){
e.execCommand(o);
});
}
},
__createEditor:function(){
var t=this,e=this.__o,n=this.__ueditor_config;
this.ueditor=new UE.ui.Editor(n),this.ueditor.ready(function(){
t.__initToolbarTips(),t.__initIframeSelect(),new o(t),"function"==typeof e.onReady&&e.onReady.call(t,t.ueditor);
});
},
__initIframeSelect:function(){
var t=this.ueditor;
window.__editorIframeSelect=function(e){
for(var n=t.document.getElementsByTagName("iframe"),o=0,i=n.length;i>o;o++){
var r=n[o];
if(r.contentWindow===e){
var a=new UE.dom.Range(t.document);
a.selectNode(r).select();
break;
}
}
};
},
__initToolbarTips:function(){
var t=this.__g;
t.toolbarsTips=$(template.compile(r)({
content:""
})),t.toolbarsTips.hide(),$("body").append(t.toolbarsTips),$(this.ueditor.container).find("[id*=_toolbarboxouter]").on("mouseover",function(e){
var n,o=$(e.target||e.srcElement);
if(n=o.data("tooltip")?o:o.parents("div[data-tooltip]"),1==n.length){
var i=n.data("tooltip");
if(i){
t.toolbarsTips.find(".tooltip_inner").html(i);
var r=n.offset();
t.toolbarsTips.css({
top:r.top-5-t.toolbarsTips.height(),
left:r.left+n.width()/2-t.toolbarsTips.width()/2
}).show();
}
}
}).on("mouseout",function(e){
0==$(e.toElement).parents("div[data-tooltip]").length&&t.toolbarsTips.hide();
});
},
__initEvent:function(){
for(var t=this,e=this.__o.plugins,n=0,o=e.length;o>n;n++){
var i=e[n];
i.editor=this,"function"==typeof i.addListener&&i.addListener(t);
}
this.addListener("find_external_Link",function(){
var e=t.getDocument(),n=s.findExternalLink(e.body);
n?t.fireEvent("scrollIntoView",n,100,!0,function(){
setTimeout(function(){
var o=new UE.dom.Range(e);
if(o.selectNode(n).select(),/^a$/i.test(n.nodeName))t.fireEvent("selectionchange",!0);else{
var i=wx.T(u,{});
t.fireEvent("show_custom_popup",i,n,!1);
}
},20);
}):t.fireEvent("hideAllErrMsg");
}),this.addListener("scrollIntoView",function(e,n,o,i,r){
var a=$(n);
a&&0!=a.length&&setTimeout(function(){
var e=a.offset().top;
if(i){
var n=$("#ueditor_"+t.getUeditor().uid);
n&&"function"==typeof n.offset&&(e+=n.offset().top);
}
$("body").animate({
scrollTop:e-100
},function(){
"function"==typeof r&&r();
});
},0);
});
},
__createToolBarBtn:function(t){
var e="";
"function"==typeof t.getTitle&&(e=t.getTitle()||"");
var n=t.getName(),o=this.getUi();
o[n]=function(t){
return function(n){
var i=new o.Button({
className:"edui-for-"+t,
title:e,
onclick:function(){
n.execCommand(t);
},
theme:n.options.theme,
showText:!1
});
return o.buttons[t]=i,n.addListener("selectionchange",function(e,o,r){
var a=n.queryCommandState(t);
-1==a?(i.setDisabled(!0),i.setChecked(!1)):r||(i.setDisabled(!1),i.setChecked(a));
}),i;
};
}(n);
},
__customEventHandle:function(){
var t=this;
t.addListener("focus keyup aftersetcontent",function(){
t.getDom("contentplaceholder").style.display="none";
}),t.addListener("blur",function(){
""==t.ueditor.getContent().trim()&&(t.getDom("contentplaceholder").style.display="block");
});
},
_outPutFilter:function(){
for(var t=this.getDocument().getElementsByTagName("p"),e=0,n=t.length;n>e;e++)t[e].firstChild||(t[e].innerHTML="<br />");
},
ready:function(t){
if("function"==typeof t){
{
var e=this;
this.__o;
}
this.ueditor.ready(function(){
t.call(e,e.ueditor),""==e.ueditor.getContent().trim()&&(e.getDom("contentplaceholder").style.display="block");
});
}
},
addListener:function(t,e){
this.ueditor.addListener(t,e);
},
handlerContent:function(t){
for(var e=this.__o.plugins,n=0,o=e.length;o>n;n++){
var i=e[n];
"function"==typeof i.beforeSetContent&&(t=i.beforeSetContent(t));
}
return t=t.replace(/background\-image:\s*url\(https\:\/\/mp\.weixin\.qq\.com\/cgi\-bin\/appmsg(.*?)\)/g,"");
},
setContent:function(t,e){
t=this.handlerContent(t);
var n=this.__o.plugins;
this.ueditor.setContent(t,e);
for(var o=0,i=n.length;i>o;o++){
var r=n[o];
"function"==typeof r.afterSetContent&&(t=r.afterSetContent());
}
},
getEditorData:function(t){
this._outPutFilter();
for(var e=this.__o.plugins,n=0,o=e.length;o>n;n++){
var i=e[n];
"function"==typeof i.beforeGetContent&&i.beforeGetContent();
}
t=t||{},t.content=this.ueditor.getContent();
for(var n=0,o=e.length;o>n;n++){
var i=e[n];
"function"==typeof i.getPluginData&&(t=i.getPluginData(t));
}
return t.content=t.content.replace(/(<\w+[^>]*)\sid=\"([^\">]*)\"([^>]*>)/g,"$1$3"),
t;
},
queryCommandValue:function(t){
return this.ueditor.queryCommandValue(t);
},
getSelection:function(){
return this.ueditor.selection;
},
getSelectionRange:function(){
return this.getSelection().getRange();
},
getSelectionStart:function(){
return this.getSelection().getStart();
},
render:function(t){
this.ueditor.render(t);
},
getUeditor:function(){
return this.ueditor;
},
getWindow:function(){
return this.ueditor.window;
},
getDocument:function(){
return this.getWindow().document;
},
execCommand:function(){
var t=this.ueditor;
t.execCommand.apply(t,arguments);
},
fireEvent:function(){
var t=this.ueditor;
return t.fireEvent.apply(t,arguments);
},
removeListener:function(){
var t=this.ueditor;
return t.removeListener.apply(t,arguments);
},
funcPvUvReport:function(t,e){
l.addPvUv(t,e);
},
getUtils:function(){
return UE.utils;
},
getDomUtils:function(){
return UE.dom.domUtils;
},
getBrowser:function(){
return UE.browser;
},
getUi:function(){
return UE.ui;
},
getDom:function(t){
return this.ueditor.ui.getDom(t);
},
enableToolbar:function(){
this.ueditor.ui.getDom("toolbar_mask").style.display="none";
},
disableToolbar:function(){
this.ueditor.ui.getDom("toolbar_mask").style.display="block";
},
checkPlugins:function(t){
var e=this.__o.plugins,n=!0;
return $.each(e,function(e,o){
return"function"==typeof o.check?n=o.check(t):!0;
}),n;
},
isHighlight:function(){
return this.ueditor.highlight;
},
setHistory:function(t){
var e=this.getUeditor().undoManger;
if(!e)return!1;
if(!t)return e.reset(),!0;
var n=t.list;
if("[object Array]"!==Object.prototype.toString.call(n)||0==n.length)return e.reset(),
!0;
var o=t.index;
return("undefined"==typeof o||0>o||o>n.length-1)&&(o=n.length-1),e.list=n,e.index=o,
e.clearKey(),e.update(),!0;
},
getHistory:function(){
var t=this.getUeditor().undoManger;
return t?{
list:JSON.parse(JSON.stringify2(t.list)),
index:t.index
}:null;
}
},e;
});define("common/wx/mpEditor/plugin/unlink.js",[],function(){
"use strict";
function t(){
this.editor=null,this.__g={
name:"unlink",
title:"取消超链接"
};
}
return t.prototype={
getName:function(){
return this.__g.name;
},
getExecCommand:function(){
var t=this;
return function(){
if(t.editor){
var e,n=t.editor,i=n.getSelectionRange(),r=n.getDomUtils();
(!i.collapsed||r.findParentByTagName(i.startContainer,"a",!0))&&(e=i.createBookmark(),
n.fireEvent("link_optimize",i),i.removeInlineStyle("a").moveToBookmark(e).select());
}
};
},
getType:function(){
return 1;
},
getTitle:function(){
return this.__g.title;
},
getQueryCommandState:function(){
var t=this;
return function(){
var e=t.editor;
return e&&!e.isHighlight()&&e.queryCommandValue("link")?0:-1;
};
},
getContextMenu:function(){
var t=this.__g,e={
label:t.title,
cmdName:t.name
};
return e;
}
},t;
});define("common/wx/mpEditor/plugin/insertcode.js",["common/wx/popup.js","common/lib/shCode.js","common/wx/Tips.js","biz_web/ui/dropdown.js","tpl/mpEditor/plugin/insertcode_dialog.html.js"],function(t){
"use strict";
function e(){
this.editor=null,this.__g={
sourceEditor:null,
notNeedCodeQuery:{
help:1,
undo:1,
redo:1,
source:1,
print:1,
searchreplace:1,
fullscreen:1,
preview:1,
insertparagraph:1,
elementpath:1,
inserthtml:1,
selectall:1
},
syntaxType:{
as3:"ActionScript3",
bash:"Bash/Shell",
cpp:"C/C++",
css:"Css",
cf:"CodeFunction",
"c#":"C#",
delphi:"Delphi",
diff:"Diff",
erlang:"Erlang",
groovy:"Groovy",
html:"Html",
java:"Java",
jfx:"JavaFx",
js:"Javascript",
pl:"Perl",
php:"Php",
plain:"Plain Text",
ps:"PowerShell",
python:"Python",
ruby:"Ruby",
scala:"Scala",
sql:"Sql",
vb:"Vb",
xml:"Xml"
}
};
}
t("common/wx/popup.js");
var n=t("common/lib/shCode.js"),i=t("common/wx/Tips.js"),o=t("biz_web/ui/dropdown.js"),r=t("tpl/mpEditor/plugin/insertcode_dialog.html.js");
return e.prototype={
getName:function(){
return"insertcode";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
var e=t.editor;
e&&t.__openDialog();
};
},
addListener:function(t){
var e=t.getUeditor(),n=(t.getUtils(),t.getBrowser(),t.getDomUtils(),this),i=n.__g,o=e.queryCommandState;
e.queryCommandState=function(t){
var e=this;
return!i.notNeedCodeQuery[t.toLowerCase()]&&e.selection&&e.queryCommandValue("insertcode")?-1:o.apply(this,arguments);
};
},
getType:function(){
return 1;
},
getTitle:function(){
return"插入代码";
},
getQueryCommandValue:function(){
var t=this;
return function(){
var e=t.editor;
if(e){
var n=this.selection.getStartElementPath(),i="";
return e.getUtils().each(n,function(e){
if(/table/i.test(e.nodeName)&&/syntaxhighlighter/.test(e.className)){
var n=e.className,o=n.split(" ");
for(var r in o)if(t.__g.syntaxType[o[r]])return i=o[r],!1;
}
}),i;
}
};
},
__openDialog:function(){
this.__g.selectSyntax=null,this.__initDialog(),this.__initMenu();
},
__initDialog:function(){
var t=this,e=this.__g,o=wx.T(r,{});
e._myDialog=$(o).popup({
title:"插入代码",
width:"600",
buttons:[{
text:"确定",
type:"primary",
click:function(){
var o=this.get().find("textarea").val();
if(o||(t.__resetData(),this.remove()),!e.selectSyntax)return void i.err("请选择代码语言");
var r=$("<div><pre></pre></div>");
r.find("pre").text(o),n.highlight({
light:!0,
toolbar:!1,
brush:e.selectSyntax
},r.find("pre")[0]),t.editor.execCommand("insertHtml",r.html()),t.__resetData(),
this.remove();
}
},{
text:"取消",
click:function(){
t.__resetData(),this.remove();
}
}],
close:function(){
t.__resetData(),this.remove();
}
});
},
__initMenu:function(){
var t=this.__g,e=[];
for(var n in t.syntaxType)e.push({
name:t.syntaxType[n],
value:n
});
t._mydropdown=new o({
container:t._myDialog.find(".js_syntax"),
label:"请选择",
data:e,
callback:function(e){
t.selectSyntax=e;
}
});
},
__resetData:function(){
this.__g._myDialog=null,this.__g._mydropdown=null,this.__g.selectSyntax=null;
}
},e;
});define("common/wx/mpEditor/plugin/uploadimg.js",["tpl/mpEditor/plugin/img_popup.html.js","biz_web/utils/upload.js","common/wx/mpEditor/plugin/filter.js"],function(t){
"use strict";
var e=t("tpl/mpEditor/plugin/img_popup.html.js"),o=t("biz_web/utils/upload.js"),i=t("common/wx/mpEditor/plugin/filter.js"),n=function(){
this.__g={
uploadDom:null,
myuploader:null
};
};
return n.prototype={
getType:function(){
return 1;
},
getTitle:function(){
return"上传图片";
},
getName:function(){
return"uploadimg";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
var e=t.editor;
};
},
doCommand:function(t){
if(t){
if(t=UE.utils.isArray(t)?t:[t],t.length){
for(var e,o=this.editor.getUeditor(),i=[],n="",a=0;e=t[a++];){
var r=e.format?' data-type="'+e.format+'" ':"";
n="<img "+r+' src="'+e.src+'" '+(e.width?'width="'+e.width+'" ':"")+(e._src?' _src="'+e._src+'" ':"")+(e.height?' height="'+e.height+'" ':"")+' style="'+(e.floatStyle&&"center"!=e.floatStyle?"float:"+e.floatStyle+";":"")+(e.border||"")+'" '+(e.title?' title="'+e.title+'"':"")+" /><br/>",
i.push(n);
}
return o.execCommand("insertHtml",i.join(""));
}
}
},
beforeSetContent:function(t){
return i.datasrc2src(t);
},
addListener:function(t){
var e=this,o=t.getUeditor();
t.getBrowser().webkit&&t.addListener("click",function(t,e){
if("IMG"==e.target.tagName&&"false"!=o.body.contentEditable){
var i=new UE.dom.Range(o.document);
i.selectNode(e.target).select();
}
}),this._showPopup(t),t.addListener("insertMaterialImg",function(t,o){
return e.doCommand(o);
}),o.ready(function(){
var o=t.__o.container;
e.__initupload($("#"+o).find(".edui-for-uploadimg"));
});
},
createToolBarBtn:function(t){
var e=this,o=e.__g,i=this.getTitle(),n=this.getName();
t[n]=function(e){
return function(n){
var a=new t.Button({
className:"edui-for-"+e,
title:i,
onclick:function(){
n.execCommand(e);
},
theme:n.options.theme,
showText:!1
});
return t.buttons[e]=a,n.addListener("selectionchange",function(t,i,r){
var d=n.queryCommandState(e);
-1==d?(a.setDisabled(!0),a.setChecked(!1),o.uploadDom&&o.uploadDom.addClass("disabled").find("input").attr("disabled","disabled")):r||(a.setDisabled(!1),
a.setChecked(d),o.uploadDom&&o.uploadDom.removeClass("disabled").find("input").removeAttr("disabled"));
}),a;
};
}(n);
},
__initupload:function(t){
var e=this,i=(this.editor,e.__g.myuploader=o.uploadBbsCdnFile({
container:t,
multi:!0,
type:2,
onSelect:function(){},
onComplete:function(t,o,i,n){
n&&n.base_resp&&0==n.base_resp.ret&&e.doCommand({
src:n.content
});
}
}),+new Date),n=function(){
setTimeout(function(){
e._findUploadDom(),!e.__g.uploadDom&&+new Date-i<=1e4?n():n=null;
},500);
};
n();
},
_findUploadDom:function(){
var t=this.__g.myuploader,e=t._widgets[1].placeholder.getRuid(),o=this.__g.uploadDom=$("#rt_"+e);
o.attr("data-tooltip",this.getTitle()).addClass("edui_icon_fake uploadimg");
},
_showPopup:function(t){
var o=t.getUeditor();
t.addListener("handle_common_popup",function(t,i){
var n=o.selection.getRange().getClosedNode();
if(n&&/^img$/i.test(n.tagName)){
var a=!1;
"100%"==n.style.width&&"auto"==n.style.height&&(a=!0),i.html+=wx.T(e,{
needBreak:i.html?!0:!1,
hasadapt:a
}),i.node=n;
}
});
}
},n;
});define("common/wx/mpEditor/plugin/source.js",["common/lib/codemirror.js"],function(e){
"use strict";
function t(){
this.editor=null,this.__g={
sourceEditor:null,
sourceMode:!1,
sourceType:UE.browser.ie?"textarea":"codemirror",
bakCssText:"",
oldGetContent:"",
bakAddress:"",
orgSetContent:""
};
}
var o=e("common/lib/codemirror.js");
return t.prototype={
getName:function(){
return"source";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var e=this;
return function(){
var t=e.editor;
if(t){
t.fireEvent("hideAllErrMsg");
var o=e.__g.sourceMode=!e.__g.sourceMode,r=e.editor.getUeditor(),n=e.__g;
if(o){
n.bakAddress=r.selection.getRange().createAddress(!1,!0),r.undoManger&&r.undoManger.save(!0),
UE.browser.gecko&&(r.body.contentEditable=!1),n.bakCssText=r.iframe.style.cssText,
r.iframe.style.cssText+="position:absolute;left:-32768px;top:-32768px;",r.fireEvent("beforegetcontent");
var i=UE.htmlparser(r.body.innerHTML);
r.filterOutputRule(i),i.traversal(function(e){
if("element"==e.type)switch(e.tagName){
case"td":
case"th":
case"caption":
e.children&&1==e.children.length&&"br"==e.firstChild().tagName&&e.removeChild(e.firstChild());
break;

case"pre":
e.innerText(e.innerText().replace(/&nbsp;/g," "));
}
}),r.fireEvent("aftergetcontent");
var s=i.toHtml(!0);
n.sourceEditor=e.createSourceEditor(r,r.iframe.parentNode),$(n.sourceEditor.getCodeMirror().getWrapperElement()).find("textarea").on("focus",function(){
t.enableToolbar();
}),n.sourceEditor.setContent(s),n.orgSetContent=r.setContent,r.setContent=function(e){
var t=UE.htmlparser(e);
r.filterInputRule(t),e=t.toHtml(),n.sourceEditor.setContent(e);
},setTimeout(function(){
n.sourceEditor.select(),r.addListener("fullscreenchanged",function(){
try{
n.sourceEditor.getCodeMirror().refresh();
}catch(e){}
});
}),n.oldGetContent=r.getContent,r.getContent=function(){
return n.sourceEditor.getContent()||"<p>"+(UE.browser.ie?"":"<br/>")+"</p>";
};
}else{
r.iframe.style.cssText=n.bakCssText;
var c=n.sourceEditor.getContent()||"<p>"+(UE.browser.ie?"":"<br/>")+"</p>";
c=c.replace(new RegExp("[\\r\\t\\n ]*</?(\\w+)\\s*(?:[^>]*)>","g"),function(e,t){
return t&&!UE.dom.dtd.$inlineWithA[t.toLowerCase()]?e.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g,""):e.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g,"");
}),c=UE.htmlparser(c).toHtml(),r.setContent=n.orgSetContent,r.setContent(c),n.sourceEditor.dispose(),
n.sourceEditor=null,r.getContent=n.oldGetContent;
var u=r.body.firstChild;
if(u||(r.body.innerHTML="<p>"+(UE.browser.ie?"":"<br/>")+"</p>",u=r.body.firstChild),
r.undoManger&&r.undoManger.save(!0),UE.browser.gecko){
var d=document.createElement("input");
d.style.cssText="position:absolute;left:0;top:-32768px",document.body.appendChild(d),
r.body.contentEditable=!1,setTimeout(function(){
domUtils.setViewportOffset(d,{
left:-32768,
top:0
}),d.focus(),setTimeout(function(){
r.body.contentEditable=!0,r.selection.getRange().moveToAddress(n.bakAddress).select(!0),
domUtils.remove(d);
});
});
}else try{
r.selection.getRange().moveToAddress(n.bakAddress).select(!0);
}catch(a){}
}
this.fireEvent("sourcemodechanged",n.sourceMode);
}
};
},
addListener:function(e){
var t=e.getUeditor(),o=this.__g,r=t.queryCommandState;
t.queryCommandState=function(e){
return e=e.toLowerCase(),o.sourceMode?e in{
source:1,
fullscreen:1
}?1:-1:r.apply(this,arguments);
};
},
getType:function(){
return 1;
},
getTitle:function(){
return"源代码";
},
isNotNeedUndo:function(){
return!0;
},
getQueryCommandState:function(){
var e=this;
return function(){
var t=e.editor;
return t?0|e.__g.sourceMode:-1;
};
},
createSourceEditor:function(e,t){
return this[this.__g.sourceType](e,t);
},
textarea:function(e,t){
var o=t.ownerDocument.createElement("textarea");
return o.style.cssText="position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;",
UE.browser.ie&&UE.browser.version<8&&(o.style.width=t.offsetWidth+"px",o.style.height=t.offsetHeight+"px",
t.onresize=function(){
o.style.width=t.offsetWidth+"px",o.style.height=t.offsetHeight+"px";
}),t.appendChild(o),{
setContent:function(e){
o.value=e;
},
getContent:function(){
return o.value;
},
select:function(){
var e;
UE.browser.ie?(e=o.createTextRange(),e.collapse(!0),e.select()):(o.setSelectionRange(0,0),
o.focus());
},
dispose:function(){
t.removeChild(o),t.onresize=null,o=null,t=null;
}
};
},
codemirror:function(e,t){
var r=o(t,{
mode:"text/html",
tabMode:"indent",
lineNumbers:!0,
lineWrapping:!0
}),n=r.getWrapperElement();
return n.style.cssText='position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;',
r.getScrollerElement().style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;",
r.refresh(),{
getCodeMirror:function(){
return r;
},
setContent:function(e){
r.setValue(e);
},
getContent:function(){
return r.getValue();
},
select:function(){
r.focus();
},
dispose:function(){
t.removeChild(n),n=null,r=null;
}
};
}
},t;
});define("common/wx/mpEditor/plugin/link.js",["common/wx/popup.js","biz_common/jquery.validate.js","common/wx/mpEditor/plugin/filter.js","tpl/mpEditor/plugin/link_dialog.html.js","tpl/mpEditor/plugin/link_popup.html.js","common/wx/Tips.js","common/wx/popover.js"],function(t){
"use strict";
function e(){
this.editor=null,this.__g={};
}
t("common/wx/popup.js"),t("biz_common/jquery.validate.js");
{
var n=t("common/wx/mpEditor/plugin/filter.js"),i=t("tpl/mpEditor/plugin/link_dialog.html.js"),o=t("tpl/mpEditor/plugin/link_popup.html.js");
t("common/wx/Tips.js"),t("common/wx/popover.js");
}
return e.prototype={
getName:function(){
return"link";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
t.editor&&t.__openDialog();
};
},
addListener:function(t){
var e=this;
t.addListener("link_optimize",function(t,n){
e.__optimize(n);
}),t.addListener("handle_common_popup",function(e,n){
var i,a=t.queryCommandValue("link");
if(a&&(i=a.getAttribute("_href")||a.getAttribute("href",2))){
var r=i;
n.html+=wx.T(o,{
needBreak:n.html?!0:!1,
url:i,
txt:r
}),n.node=a;
}
});
},
getType:function(){
return 1;
},
getTitle:function(){
return"超链接";
},
getQueryCommandState:function(){
var t=this;
return function(){
var e=t.editor;
if(!e)return 0;
var n=e.getSelectionRange().getClosedNode(),i=n&&"edui-faked-video"==n.className;
return i?-1:0;
};
},
getQueryCommandValue:function(){
var t=this;
return function(){
var e=t.editor;
if(e){
var n,i=e.getSelectionRange(),o=e.getDomUtils();
if(!i.collapsed){
i.shrinkBoundary();
var a=3!=i.startContainer.nodeType&&i.startContainer.childNodes[i.startOffset]?i.startContainer.childNodes[i.startOffset]:i.startContainer,r=3==i.endContainer.nodeType||0==i.endOffset?i.endContainer:i.endContainer.childNodes[i.endOffset-1],l=i.getCommonAncestor();
if(n=o.findParentByTagName(l,"a",!0),!n&&1==l.nodeType)for(var s,d,u,m=l.getElementsByTagName("a"),c=0;u=m[c++];)if(s=o.getPosition(u,a),
d=o.getPosition(u,r),(s&o.POSITION_FOLLOWING||s&o.POSITION_CONTAINS)&&(d&o.POSITION_PRECEDING||d&o.POSITION_CONTAINS)){
n=u;
break;
}
return n;
}
return n=i.startContainer,n=1==n.nodeType?n:n.parentNode,n&&(n=o.findParentByTagName(n,"a",!0))&&!o.isInNodeEndBoundary(i,n)?n:void 0;
}
};
},
__openDialog:function(){
this.__DialogInit(),this.__initDialogData(),this.__DialogEvent();
},
__DialogEvent:function(){
var t=this.__g,e=t._linkDialog;
$.validator.addMethod("isLocalDomain",function(t){
return n.isLocalDomain(t);
},"链接不合法，只能输入当前域名、*.qq.com、github.com 或 wechatide 协议的链接"),$.validator.addMethod("isValidProtocol",function(t){
return n.isLocalDomain(t);
},"链接地址不合法(必须以http://或https://或wechatide://开头)"),t.form=e.find(".js_linkForm").validate({
rules:{
title:{
required:!0
},
href:{
required:!0,
isLocalDomain:!0,
isValidProtocol:!0
}
},
messages:{
title:{
required:"文章标题不能为空"
},
href:{
required:"链接地址不能为空"
}
}
}),e.find("#keyInput").keydown(function(t){
var n="which"in t?t.which:t.keyCode;
13==n&&e.find("#searchBt").trigger("click");
});
},
__initDialogData:function(){
var t=this.__g,e=t._linkDialog,n=this.editor,i=n.getDomUtils(),o=n.getSelectionRange(),a=o.collapsed?n.queryCommandValue("link"):n.getSelectionStart();
a?(i.findParentByTagName(a,"a",!0)&&(a=i.findParentByTagName(a,"a",!0)),e.find(".js_txtTitle").val(a.text||"你已选中了添加链接的文本内容").attr("disabled",!0).parent().addClass("disabled"),
e.find(".js_txtHref").val(a.href||"http://"),t.canWriteBack=!1):t.canWriteBack=!0,
t._linkDialog.popup("show");
},
__DialogInit:function(){
var t=this,e=this.__g;
e.canWriteBack=!1,e.form=null;
var n=wx.T(i,{});
e._linkDialog=$(n).popup({
title:"新增或编辑超链接",
className:"link_dialog",
width:"600",
autoShow:!1,
buttons:[{
text:"确定",
type:"primary",
click:function(){
var n=e._linkDialog;
if(e.form.form()){
var i={
href:n.find(".js_txtHref").val().replace(/^\s+|\s+$/g,""),
target:"_blank",
data_ue_src:n.find(".js_txtHref").val().replace(/^\s+|\s+$/g,"")
};
e.canWriteBack&&(i.textValue=n.find(".js_txtTitle").val().replace(/^\s+|\s+$/g,"")),
t.__insertLink(i),e._linkDialog=null,this.remove(),t._popover&&t._popover.remove();
}
}
},{
text:"取消",
click:function(){
e._linkDialog=null,this.remove();
}
}],
close:function(){
e._linkDialog=null,this.remove();
}
});
},
__insertLink:function(t){
var e,n=this.editor,i=n.getUtils();
n.fireEvent("funcPvUvReport","link"),t._href&&(t._href=i.unhtml(t._href,/[<">]/g)),
t.href&&(t.href=i.unhtml(t.href,/[<">]/g)),t.textValue&&(t.textValue=i.unhtml(t.textValue,/[<">]/g)),
this.__doLink(e=n.getSelectionRange(),t),e.collapse().select(!0);
},
__optimize:function(t){
var e=this.editor.getDomUtils(),n=t.startContainer,i=t.endContainer;
(n=e.findParentByTagName(n,"a",!0))&&t.setStartBefore(n),(i=e.findParentByTagName(i,"a",!0))&&t.setEndAfter(i);
},
__doLink:function(t,e){
var n=this.editor,i=t.cloneRange(),o=n.getBrowser(),a=n.getDomUtils(),r=n.queryCommandValue("link"),l=n.getUtils();
this.__optimize(t=t.adjustmentBoundary());
var s=t.startContainer;
if(1==s.nodeType&&r&&(s=s.childNodes[t.startOffset],s&&1==s.nodeType&&"A"==s.tagName&&/^(?:https?|ftp|file)\s*:\s*\/\//.test(s[o.ie?"innerText":"textContent"])&&(s[o.ie?"innerText":"textContent"]=l.html(e.textValue||e.href))),
(!i.collapsed||r)&&(t.removeInlineStyle("a"),i=t.cloneRange()),i.collapsed){
var d=t.document.createElement("a"),u="";
e.textValue?(u=l.html(e.textValue),delete e.textValue):u=l.html(e.href),a.setAttributes(d,e),
s=a.findParentByTagName(i.startContainer,"a",!0),s&&a.isInNodeEndBoundary(i,s)&&t.setStartAfter(s).collapse(!0),
d[o.ie?"innerText":"textContent"]=u,t.insertNode(d).selectNode(d);
}else t.applyInlineStyle("a",e);
}
},e;
});!function(e,a){
"use strict";
e.emojify=a();
}(this,function(){
"use strict";
var e=function(){
function e(){
var e={
named:/:([a-z0-9A-Z_-]+):/,
smile:/:-?\)/g,
open_mouth:/:o/gi,
scream:/:-o/gi,
smirk:/[:;]-?]/g,
grinning:/[:;]-?d/gi,
stuck_out_tongue_closed_eyes:/x-d/gi,
stuck_out_tongue_winking_eye:/[:;]-?p/gi,
rage:/:-?[\[@]/g,
frowning:/:-?\(/g,
sob:/:['’]-?\(|:&#x27;\(/g,
kissing_heart:/:-?\*/g,
wink:/;-?\)/g,
pensive:/:-?\//g,
confounded:/:-?s/gi,
flushed:/:-?\|/g,
relaxed:/:-?\$/g,
mask:/:-x/gi,
heart:/<3|&lt;3/g,
broken_heart:/<\/3|&lt;&#x2F;3/g,
thumbsup:/:\+1:/g,
thumbsdown:/:\-1:/g
};
return h.ignore_emoticons&&(e={
named:/:([a-z0-9A-Z_-]+):/,
thumbsup:/:\+1:/g,
thumbsdown:/:\-1:/g
}),Object.keys(e).map(function(a){
return[e[a],a];
});
}
function a(){
var e=_.map(function(e){
var a=e[0],o=a.source||a;
return o=o.replace(/(^|[^\[])\^/g,"$1"),"("+o+")";
}).join("|");
return new RegExp(e,"gi");
}
function o(e){
return" "===e||"	"===e||"\r"===e||"\n"===e||""===e||e===String.fromCharCode(160);
}
function r(e){
var a=null;
if(e.replacer)a=e.replacer.apply({
config:h
},[":"+e.emojiName+":",e.emojiName]);else{
var o=h.tag_type||d[h.mode];
a=e.win.document.createElement(o),"img"!==o?a.setAttribute("class","emoji emoji-"+e.emojiName):(a.setAttribute("align","absmiddle"),
a.setAttribute("alt",":"+e.emojiName+":"),a.setAttribute("class","emoji"),a.setAttribute("src",h.img_dir+"/"+e.emojiName+".png")),
a.setAttribute("title",":"+e.emojiName+":");
}
e.node.splitText(e.match.index),e.node.nextSibling.nodeValue=e.node.nextSibling.nodeValue.substr(e.match[0].length,e.node.nextSibling.nodeValue.length),
a.appendChild(e.node.splitText(e.match.index)),e.node.parentNode.insertBefore(a,e.node.nextSibling);
}
function t(e){
if(e[1]&&e[2]){
var a=e[2];
if(m[a])return a;
}else for(var o=3;o<e.length-1;o++)if(e[o])return _[o-2][1];
}
function i(e,a){
var o=this.config.tag_type||d[this.config.mode];
return"img"!==o?"<"+o+" class='emoji emoji-"+a+"' title=':"+a+":'></"+o+">":"<img align='absmiddle' alt=':"+a+":' class='emoji' src='"+this.config.img_dir+"/"+a+".png' title=':"+a+":' />";
}
function n(){
this.lastEmojiTerminatedAt=-1;
}
function s(o,r){
if(!o)return o;
r||(r=i),_=e(),c=a();
var t=new n;
return o.replace(c,function(){
var e=Array.prototype.slice.call(arguments,0,-2),a=arguments[arguments.length-2],o=arguments[arguments.length-1],i=t.validate(e,a,o);
return i?r.apply({
config:h
},[arguments[0],i]):arguments[0];
});
}
function l(o,i){
"undefined"==typeof o&&(o=h.only_crawl_id?document.getElementById(h.only_crawl_id):document.body);
var s=o.ownerDocument,l=s.defaultView||s.parentWindow,u=function(e,a){
var o;
if(e.hasChildNodes())for(o=e.firstChild;o;)a(o)&&u(o,a),o=o.nextSibling;
},g=function(e){
for(var a,o=[],s=new n;null!==(a=c.exec(e.data));)s.validate(a,a.index,a.input)&&o.push(a);
for(var _=o.length;_-->0;){
var u=t(o[_]);
r({
node:e,
match:o[_],
emojiName:u,
replacer:i,
win:l
});
}
};
_=e(),c=a();
var m=[],d=new RegExp(h.blacklist.elements.join("|"),"i"),p=new RegExp(h.blacklist.classes.join("|"),"i");
if("undefined"!=typeof l.document.createTreeWalker)for(var b,f=l.document.createTreeWalker(o,l.NodeFilter.SHOW_TEXT|l.NodeFilter.SHOW_ELEMENT,function(e){
return 1!==e.nodeType?l.NodeFilter.FILTER_ACCEPT:e.tagName.match(d)||"svg"===e.tagName||e.className.match(p)?l.NodeFilter.FILTER_REJECT:l.NodeFilter.FILTER_SKIP;
},!1);null!==(b=f.nextNode());)m.push(b);else u(o,function(e){
return"undefined"!=typeof e.tagName&&e.tagName.match(d)||"undefined"!=typeof e.className&&e.className.match(p)?!1:1===e.nodeType?!0:(m.push(e),
!0);
});
m.forEach(g);
}
var _,c,u="+1,-1,100,1234,8ball,a,ab,abc,abcd,accept,aerial_tramway,airplane,alarm_clock,alien,ambulance,anchor,angel,anger,angry,anguished,ant,apple,aquarius,aries,arrow_backward,arrow_double_down,arrow_double_up,arrow_down,arrow_down_small,arrow_forward,arrow_heading_down,arrow_heading_up,arrow_left,arrow_lower_left,arrow_lower_right,arrow_right,arrow_right_hook,arrow_up,arrow_up_down,arrow_up_small,arrow_upper_left,arrow_upper_right,arrows_clockwise,arrows_counterclockwise,art,articulated_lorry,astonished,atm,b,baby,baby_bottle,baby_chick,baby_symbol,back,baggage_claim,balloon,ballot_box_with_check,bamboo,banana,bangbang,bank,bar_chart,barber,baseball,basketball,bath,bathtub,battery,bear,bee,beer,beers,beetle,beginner,bell,bento,bicyclist,bike,bikini,bird,birthday,black_circle,black_joker,black_medium_small_square,black_medium_square,black_nib,black_small_square,black_square,black_square_button,blossom,blowfish,blue_book,blue_car,blue_heart,blush,boar,boat,bomb,book,bookmark,bookmark_tabs,books,boom,boot,bouquet,bow,bowling,bowtie,boy,bread,bride_with_veil,bridge_at_night,briefcase,broken_heart,bug,bulb,bullettrain_front,bullettrain_side,bus,busstop,bust_in_silhouette,busts_in_silhouette,cactus,cake,calendar,calling,camel,camera,cancer,candy,capital_abcd,capricorn,car,card_index,carousel_horse,cat,cat2,cd,chart,chart_with_downwards_trend,chart_with_upwards_trend,checkered_flag,cherries,cherry_blossom,chestnut,chicken,children_crossing,chocolate_bar,christmas_tree,church,cinema,circus_tent,city_sunrise,city_sunset,cl,clap,clapper,clipboard,clock1,clock10,clock1030,clock11,clock1130,clock12,clock1230,clock130,clock2,clock230,clock3,clock330,clock4,clock430,clock5,clock530,clock6,clock630,clock7,clock730,clock8,clock830,clock9,clock930,closed_book,closed_lock_with_key,closed_umbrella,cloud,clubs,cn,cocktail,coffee,cold_sweat,collision,computer,confetti_ball,confounded,confused,congratulations,construction,construction_worker,convenience_store,cookie,cool,cop,copyright,corn,couple,couple_with_heart,couplekiss,cow,cow2,credit_card,crescent_moon,crocodile,crossed_flags,crown,cry,crying_cat_face,crystal_ball,cupid,curly_loop,currency_exchange,curry,custard,customs,cyclone,dancer,dancers,dango,dart,dash,date,de,deciduous_tree,department_store,diamond_shape_with_a_dot_inside,diamonds,disappointed,disappointed_relieved,dizzy,dizzy_face,do_not_litter,dog,dog2,dollar,dolls,dolphin,donut,door,doughnut,dragon,dragon_face,dress,dromedary_camel,droplet,dvd,e-mail,ear,ear_of_rice,earth_africa,earth_americas,earth_asia,egg,eggplant,eight,eight_pointed_black_star,eight_spoked_asterisk,electric_plug,elephant,email,end,envelope,es,euro,european_castle,european_post_office,evergreen_tree,exclamation,expressionless,eyeglasses,eyes,facepunch,factory,fallen_leaf,family,fast_forward,fax,fearful,feelsgood,feet,ferris_wheel,file_folder,finnadie,fire,fire_engine,fireworks,first_quarter_moon,first_quarter_moon_with_face,fish,fish_cake,fishing_pole_and_fish,fist,five,flags,flashlight,floppy_disk,flower_playing_cards,flushed,foggy,football,fork_and_knife,fountain,four,four_leaf_clover,fr,free,fried_shrimp,fries,frog,frowning,fu,fuelpump,full_moon,full_moon_with_face,game_die,gb,gem,gemini,ghost,gift,gift_heart,girl,globe_with_meridians,goat,goberserk,godmode,golf,grapes,green_apple,green_book,green_heart,grey_exclamation,grey_question,grimacing,grin,grinning,guardsman,guitar,gun,haircut,hamburger,hammer,hamster,hand,handbag,hankey,hash,hatched_chick,hatching_chick,headphones,hear_no_evil,heart,heart_decoration,heart_eyes,heart_eyes_cat,heartbeat,heartpulse,hearts,heavy_check_mark,heavy_division_sign,heavy_dollar_sign,heavy_exclamation_mark,heavy_minus_sign,heavy_multiplication_x,heavy_plus_sign,helicopter,herb,hibiscus,high_brightness,high_heel,hocho,honey_pot,honeybee,horse,horse_racing,hospital,hotel,hotsprings,hourglass,hourglass_flowing_sand,house,house_with_garden,hurtrealbad,hushed,ice_cream,icecream,id,ideograph_advantage,imp,inbox_tray,incoming_envelope,information_desk_person,information_source,innocent,interrobang,iphone,it,izakaya_lantern,jack_o_lantern,japan,japanese_castle,japanese_goblin,japanese_ogre,jeans,joy,joy_cat,jp,key,keycap_ten,kimono,kiss,kissing,kissing_cat,kissing_closed_eyes,kissing_face,kissing_heart,kissing_smiling_eyes,koala,koko,kr,large_blue_circle,large_blue_diamond,large_orange_diamond,last_quarter_moon,last_quarter_moon_with_face,laughing,leaves,ledger,left_luggage,left_right_arrow,leftwards_arrow_with_hook,lemon,leo,leopard,libra,light_rail,link,lips,lipstick,lock,lock_with_ink_pen,lollipop,loop,loudspeaker,love_hotel,love_letter,low_brightness,m,mag,mag_right,mahjong,mailbox,mailbox_closed,mailbox_with_mail,mailbox_with_no_mail,man,man_with_gua_pi_mao,man_with_turban,mans_shoe,maple_leaf,mask,massage,meat_on_bone,mega,melon,memo,mens,metal,metro,microphone,microscope,milky_way,minibus,minidisc,mobile_phone_off,money_with_wings,moneybag,monkey,monkey_face,monorail,mortar_board,mount_fuji,mountain_bicyclist,mountain_cableway,mountain_railway,mouse,mouse2,movie_camera,moyai,muscle,mushroom,musical_keyboard,musical_note,musical_score,mute,nail_care,name_badge,neckbeard,necktie,negative_squared_cross_mark,neutral_face,new,new_moon,new_moon_with_face,newspaper,ng,nine,no_bell,no_bicycles,no_entry,no_entry_sign,no_good,no_mobile_phones,no_mouth,no_pedestrians,no_smoking,non-potable_water,nose,notebook,notebook_with_decorative_cover,notes,nut_and_bolt,o,o2,ocean,octocat,octopus,oden,office,ok,ok_hand,ok_woman,older_man,older_woman,on,oncoming_automobile,oncoming_bus,oncoming_police_car,oncoming_taxi,one,open_file_folder,open_hands,open_mouth,ophiuchus,orange_book,outbox_tray,ox,package,page_facing_up,page_with_curl,pager,palm_tree,panda_face,paperclip,parking,part_alternation_mark,partly_sunny,passport_control,paw_prints,peach,pear,pencil,pencil2,penguin,pensive,performing_arts,persevere,person_frowning,person_with_blond_hair,person_with_pouting_face,phone,pig,pig2,pig_nose,pill,pineapple,pisces,pizza,plus1,point_down,point_left,point_right,point_up,point_up_2,police_car,poodle,poop,post_office,postal_horn,postbox,potable_water,pouch,poultry_leg,pound,pouting_cat,pray,princess,punch,purple_heart,purse,pushpin,put_litter_in_its_place,question,rabbit,rabbit2,racehorse,radio,radio_button,rage,rage1,rage2,rage3,rage4,railway_car,rainbow,raised_hand,raised_hands,raising_hand,ram,ramen,rat,recycle,red_car,red_circle,registered,relaxed,relieved,repeat,repeat_one,restroom,revolving_hearts,rewind,ribbon,rice,rice_ball,rice_cracker,rice_scene,ring,rocket,roller_coaster,rooster,rose,rotating_light,round_pushpin,rowboat,ru,rugby_football,runner,running,running_shirt_with_sash,sa,sagittarius,sailboat,sake,sandal,santa,satellite,satisfied,saxophone,school,school_satchel,scissors,scorpius,scream,scream_cat,scroll,seat,secret,see_no_evil,seedling,seven,shaved_ice,sheep,shell,ship,shipit,shirt,shit,shoe,shower,signal_strength,six,six_pointed_star,ski,skull,sleeping,sleepy,slot_machine,small_blue_diamond,small_orange_diamond,small_red_triangle,small_red_triangle_down,smile,smile_cat,smiley,smiley_cat,smiling_imp,smirk,smirk_cat,smoking,snail,snake,snowboarder,snowflake,snowman,sob,soccer,soon,sos,sound,space_invader,spades,spaghetti,sparkle,sparkler,sparkles,sparkling_heart,speak_no_evil,speaker,speech_balloon,speedboat,squirrel,star,star2,stars,station,statue_of_liberty,steam_locomotive,stew,straight_ruler,strawberry,stuck_out_tongue,stuck_out_tongue_closed_eyes,stuck_out_tongue_winking_eye,sun_with_face,sunflower,sunglasses,sunny,sunrise,sunrise_over_mountains,surfer,sushi,suspect,suspension_railway,sweat,sweat_drops,sweat_smile,sweet_potato,swimmer,symbols,syringe,tada,tanabata_tree,tangerine,taurus,taxi,tea,telephone,telephone_receiver,telescope,tennis,tent,thought_balloon,three,thumbsdown,thumbsup,ticket,tiger,tiger2,tired_face,tm,toilet,tokyo_tower,tomato,tongue,top,tophat,tractor,traffic_light,train,train2,tram,triangular_flag_on_post,triangular_ruler,trident,triumph,trolleybus,trollface,trophy,tropical_drink,tropical_fish,truck,trumpet,tshirt,tulip,turtle,tv,twisted_rightwards_arrows,two,two_hearts,two_men_holding_hands,two_women_holding_hands,u5272,u5408,u55b6,u6307,u6708,u6709,u6e80,u7121,u7533,u7981,u7a7a,uk,umbrella,unamused,underage,unlock,up,us,v,vertical_traffic_light,vhs,vibration_mode,video_camera,video_game,violin,virgo,volcano,vs,walking,waning_crescent_moon,waning_gibbous_moon,warning,watch,water_buffalo,watermelon,wave,wavy_dash,waxing_crescent_moon,waxing_gibbous_moon,wc,weary,wedding,whale,whale2,wheelchair,white_check_mark,white_circle,white_flower,white_large_square,white_medium_small_square,white_medium_square,white_small_square,white_square_button,wind_chime,wine_glass,wink,wolf,woman,womans_clothes,womans_hat,womens,worried,wrench,x,yellow_heart,yen,yum,zap,zero,zzz",g=u.split(/,/),m=g.reduce(function(e,a){
return e[a]=!0,e;
},{}),h={
blacklist:{
ids:[],
classes:["no-emojify"],
elements:["script","textarea","a","pre","code"]
},
tag_type:null,
only_crawl_id:null,
img_dir:"images/emoji",
ignore_emoticons:!1,
mode:"img"
},d={
img:"img",
sprite:"span",
"data-uri":"span"
};
return n.prototype={
validate:function(e,a,r){
function i(){
return n.lastEmojiTerminatedAt=_+a,s;
}
var n=this,s=t(e);
if(s){
var l=e[0],_=l.length;
if(0===a)return i();
if(r.length===l.length+a)return i();
var c=this.lastEmojiTerminatedAt===a;
if(c)return i();
if(o(r.charAt(a-1)))return i();
var u=o(r.charAt(l.length+a));
return u&&c?i():void 0;
}
}
},{
defaultConfig:h,
emojiNames:g,
setConfig:function(e){
Object.keys(h).forEach(function(a){
a in e&&(h[a]=e[a]);
});
},
replace:s,
run:l
};
}();
return e;
});define("common/lib/marked.js",[],function(){
function e(e){
this.tokens=[],this.tokens.links={},this.options=e||a.defaults,this.rules=p.normal,
this.options.gfm&&(this.rules=this.options.tables?p.tables:p.gfm);
}
function t(e,t){
if(this.options=t||a.defaults,this.links=e,this.rules=u.normal,this.renderer=this.options.renderer||new n,
this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");
this.options.gfm?this.rules=this.options.breaks?u.breaks:u.gfm:this.options.pedantic&&(this.rules=u.pedantic);
}
function n(e){
this.options=e||{};
}
function r(e){
this.tokens=[],this.token=null,this.options=e||a.defaults,this.options.renderer=this.options.renderer||new n,
this.renderer=this.options.renderer,this.renderer.options=this.options;
}
function s(e,t){
return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}
function i(e){
return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){
return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?String.fromCharCode("x"===t.charAt(1)?parseInt(t.substring(2),16):+t.substring(1)):"";
});
}
function l(e,t){
return e=e.source,t=t||"",function n(r,s){
return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t);
};
}
function o(){}
function h(e){
for(var t,n,r=1;r<arguments.length;r++){
t=arguments[r];
for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);
}
return e;
}
function a(t,n,i){
if(i||"function"==typeof n){
i||(i=n,n=null),n=h({},a.defaults,n||{});
var l,o,p=n.highlight,u=0;
try{
l=e.lex(t,n);
}catch(c){
return i(c);
}
o=l.length;
var g=function(e){
if(e)return n.highlight=p,i(e);
var t;
try{
t=r.parse(l,n);
}catch(s){
e=s;
}
return n.highlight=p,e?i(e):i(null,t);
};
if(!p||p.length<3)return g();
if(delete n.highlight,!o)return g();
for(;u<l.length;u++)!function(e){
return"code"!==e.type?--o||g():p(e.text,e.lang,function(t,n){
return t?g(t):null==n||n===e.text?--o||g():(e.text=n,e.escaped=!0,void(--o||g()));
});
}(l[u]);
}else try{
return n&&(n=h({},a.defaults,n)),r.parse(e.lex(t,n),n);
}catch(c){
if(c.message+="\nPlease report this to https://github.com/chjj/marked.",(n||a.defaults).silent)return"<p>An error occured:</p><pre>"+s(c.message+"",!0)+"</pre>";
throw c;
}
}
var p={
newline:/^\n+/,
code:/^( {4}[^\n]+\n*)+/,
fences:o,
hr:/^( *[-*_]){3,} *(?:\n+|$)/,
heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
nptable:o,
lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
def:/^ *\[([^\]]+)\]: *[<]?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
table:o,
paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
text:/^[^\n]+/
};
p.bullet=/(?:[*+-]|\d+\.)/,p.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,p.item=l(p.item,"gm")(/bull/g,p.bullet)(),
p.list=l(p.list)(/bull/g,p.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+p.def.source+")")(),
p.blockquote=l(p.blockquote)("def",p.def)(),p._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",
p.html=l(p.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,p._tag)(),
p.paragraph=l(p.paragraph)("hr",p.hr)("heading",p.heading)("lheading",p.lheading)("blockquote",p.blockquote)("tag","<"+p._tag)("def",p.def)(),
p.normal=h({},p),p.gfm=h({},p.normal,{
fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
paragraph:/^/,
heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
}),p.gfm.paragraph=l(p.paragraph)("(?!","(?!"+p.gfm.fences.source.replace("\\1","\\2")+"|"+p.list.source.replace("\\1","\\3")+"|")(),
p.tables=h({},p.gfm,{
nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
}),e.rules=p,e.lex=function(t,n){
var r=new e(n);
return r.lex(t);
},e.prototype.lex=function(e){
return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),
this.token(e,!0);
},e.prototype.token=function(e,t,n){
for(var r,s,i,l,o,h,a,u,c,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),
i[0].length>1&&this.tokens.push({
type:"space"
})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),
this.tokens.push({
type:"code",
text:this.options.pedantic?i:i.replace(/\n+$/,"")
});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({
type:"code",
lang:i[2],
text:i[3]||""
});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({
type:"heading",
depth:i[1].length,
text:i[2]
});else if(t&&(i=this.rules.nptable.exec(e))){
for(e=e.substring(i[0].length),h={
type:"table",
header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),
align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),
cells:i[3].replace(/\n$/,"").split("\n")
},u=0;u<h.align.length;u++)h.align[u]=/^ *-+: *$/.test(h.align[u])?"right":/^ *:-+: *$/.test(h.align[u])?"center":/^ *:-+ *$/.test(h.align[u])?"left":null;
for(u=0;u<h.cells.length;u++)h.cells[u]=h.cells[u].split(/ *\| */);
this.tokens.push(h);
}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({
type:"heading",
depth:"="===i[2]?1:2,
text:i[1]
});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({
type:"hr"
});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({
type:"blockquote_start"
}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({
type:"blockquote_end"
});else if(i=this.rules.list.exec(e)){
for(e=e.substring(i[0].length),l=i[2],this.tokens.push({
type:"list_start",
ordered:l.length>1
}),i=i[0].match(this.rules.item),r=!1,c=i.length,u=0;c>u;u++)h=i[u],a=h.length,h=h.replace(/^ *([*+-]|\d+\.) +/,""),
~h.indexOf("\n ")&&(a-=h.length,h=this.options.pedantic?h.replace(/^ {1,4}/gm,""):h.replace(new RegExp("^ {1,"+a+"}","gm"),"")),
this.options.smartLists&&u!==c-1&&(o=p.bullet.exec(i[u+1])[0],l===o||l.length>1&&o.length>1||(e=i.slice(u+1).join("\n")+e,
u=c-1)),s=r||/\n\n(?!\s*$)/.test(h),u!==c-1&&(r="\n"===h.charAt(h.length-1),s||(s=r)),
this.tokens.push({
type:s?"loose_item_start":"list_item_start"
}),this.token(h,!1,n),this.tokens.push({
type:"list_item_end"
});
this.tokens.push({
type:"list_end"
});
}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({
type:this.options.sanitize?"paragraph":"html",
pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),
text:i[0]
});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={
href:i[2],
title:i[3]
};else if(t&&(i=this.rules.table.exec(e))){
for(e=e.substring(i[0].length),h={
type:"table",
header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),
align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),
cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")
},u=0;u<h.align.length;u++)h.align[u]=/^ *-+: *$/.test(h.align[u])?"right":/^ *:-+: *$/.test(h.align[u])?"center":/^ *:-+ *$/.test(h.align[u])?"left":null;
for(u=0;u<h.cells.length;u++)h.cells[u]=h.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);
this.tokens.push(h);
}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({
type:"paragraph",
text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]
});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({
type:"text",
text:i[0]
});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));
return this.tokens;
};
var u={
escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,
autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,
url:o,
tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
link:/^!?\[(inside)\]\(href\)/,
reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,
nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
br:/^ {2,}\n(?!\s*$)/,
del:o,
text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};
return u._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,u._href=/\s*[<]?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,
u.link=l(u.link)("inside",u._inside)("href",u._href)(),u.reflink=l(u.reflink)("inside",u._inside)(),
u.normal=h({},u),u.pedantic=h({},u.normal,{
strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
}),u.gfm=h({},u.normal,{
escape:l(u.escape)("])","~|])")(),
url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
del:/^~~(?=\S)([\s\S]*?\S)~~/,
text:l(u.text)("]|","~]|")("|","|https?://|")()
}),u.breaks=h({},u.gfm,{
br:l(u.br)("{2,}","*")(),
text:l(u.gfm.text)("{2,}","*")()
}),t.rules=u,t.output=function(e,n,r){
var s=new t(n,r);
return s.output(e);
},t.prototype.output=function(e){
for(var t,n,r,i,l="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),
l+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=this.mangle(":"===i[1].charAt(6)?i[1].substring(7):i[1]),
r=this.mangle("mailto:")+n):(n=s(i[1]),r=n),l+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){
if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),
e=e.substring(i[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):s(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),
this.inLink=!0,l+=this.outputLink(i,{
href:i[2],
title:i[3]
}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){
if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],
!t||!t.href){
l+=i[0].charAt(0),e=i[0].substring(1)+e;
continue;
}
this.inLink=!0,l+=this.outputLink(i,t),this.inLink=!1;
}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),l+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),
l+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),
l+=this.renderer.codespan(s(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),
l+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),
l+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),
l+=this.renderer.text(s(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));
}else e=e.substring(i[0].length),n=s(i[1]),r=n,l+=this.renderer.link(r,null,n);
return l;
},t.prototype.outputLink=function(e,t){
var n=s(t.href),r=t.title?s(t.title):null;
return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,s(e[1]));
},t.prototype.smartypants=function(e){
return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e;
},t.prototype.mangle=function(e){
if(!this.options.mangle)return e;
for(var t,n="",r=e.length,s=0;r>s;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),
n+="&#"+t+";";
return n;
},n.prototype.code=function(e,t,n){
if(this.options.highlight){
var r=this.options.highlight(e,t);
null!=r&&r!==e&&(n=!0,e=r);
}
return t?'<pre><code class="'+this.options.langPrefix+s(t,!0)+'">'+(n?e:s(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:s(e,!0))+"\n</code></pre>";
},n.prototype.blockquote=function(e){
return"<blockquote>\n"+e+"</blockquote>\n";
},n.prototype.html=function(e){
return e;
},n.prototype.heading=function(e,t,n){
return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n";
},n.prototype.hr=function(){
return this.options.xhtml?"<hr/>\n":"<hr>\n";
},n.prototype.list=function(e,t){
var n=t?"ol":"ul";
return"<"+n+">\n"+e+"</"+n+">\n";
},n.prototype.listitem=function(e){
return"<li>"+e+"</li>\n";
},n.prototype.paragraph=function(e){
return"<p>"+e+"</p>\n";
},n.prototype.table=function(e,t){
return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n";
},n.prototype.tablerow=function(e){
return"<tr>\n"+e+"</tr>\n";
},n.prototype.tablecell=function(e,t){
var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";
return r+e+"</"+n+">\n";
},n.prototype.strong=function(e){
return"<strong>"+e+"</strong>";
},n.prototype.em=function(e){
return"<em>"+e+"</em>";
},n.prototype.codespan=function(e){
return"<code>"+e+"</code>";
},n.prototype.br=function(){
return this.options.xhtml?"<br/>":"<br>";
},n.prototype.del=function(e){
return"<del>"+e+"</del>";
},n.prototype.link=function(e,t,n){
if(this.options.sanitize){
try{
var r=decodeURIComponent(i(e)).replace(/[^\w:]/g,"").toLowerCase();
}catch(s){
return"";
}
if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return"";
}
var l='<a href="'+e+'"';
return t&&(l+=' title="'+t+'"'),l+=">"+n+"</a>";
},n.prototype.image=function(e,t,n){
var r='<img src="'+e+'" alt="'+n+'"';
return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">";
},n.prototype.text=function(e){
return e;
},r.parse=function(e,t,n){
var s=new r(t,n);
return s.parse(e);
},r.prototype.parse=function(e){
this.inline=new t(e.links,this.options,this.renderer),this.tokens=e.reverse();
for(var n="";this.next();)n+=this.tok();
return n;
},r.prototype.next=function(){
return this.token=this.tokens.pop();
},r.prototype.peek=function(){
return this.tokens[this.tokens.length-1]||0;
},r.prototype.parseText=function(){
for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;
return this.inline.output(e);
},r.prototype.tok=function(){
switch(this.token.type){
case"space":
return"";

case"hr":
return this.renderer.hr();

case"heading":
return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);

case"code":
return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);

case"table":
var e,t,n,r,s,i="",l="";
for(n="",e=0;e<this.token.header.length;e++)r={
header:!0,
align:this.token.align[e]
},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{
header:!0,
align:this.token.align[e]
});
for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){
for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{
header:!1,
align:this.token.align[s]
});
l+=this.renderer.tablerow(n);
}
return this.renderer.table(i,l);

case"blockquote_start":
for(var l="";"blockquote_end"!==this.next().type;)l+=this.tok();
return this.renderer.blockquote(l);

case"list_start":
for(var l="",o=this.token.ordered;"list_end"!==this.next().type;)l+=this.tok();
return this.renderer.list(l,o);

case"list_item_start":
for(var l="";"list_item_end"!==this.next().type;)l+="text"===this.token.type?this.parseText():this.tok();
return this.renderer.listitem(l);

case"loose_item_start":
for(var l="";"list_item_end"!==this.next().type;)l+=this.tok();
return this.renderer.listitem(l);

case"html":
var h=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);
return this.renderer.html(h);

case"paragraph":
return this.renderer.paragraph(this.inline.output(this.token.text));

case"text":
return this.renderer.paragraph(this.parseText());
}
},o.exec=o,a.options=a.setOptions=function(e){
return h(a.defaults,e),a;
},a.defaults={
gfm:!0,
tables:!0,
breaks:!1,
pedantic:!1,
sanitize:!1,
sanitizer:null,
mangle:!0,
smartLists:!1,
silent:!1,
highlight:null,
langPrefix:"lang-",
smartypants:!1,
headerPrefix:"",
renderer:new n,
xhtml:!1
},a.Parser=r,a.parser=r.parse,a.Renderer=n,a.Lexer=e,a.lexer=e.lex,a.InlineLexer=t,
a.inlineLexer=t.output,a.parse=a,a;
});define("common/wx/mpEditor/plugin/filter.js",[],function(){
"use strict";
function t(t,n){
return e({
content:t,
isFilter:n,
type:"input"
});
}
function n(t,n){
return e({
content:t,
isFilter:n,
type:"output"
});
}
function e(t){
var n={
content:"",
valid:!0,
errType:-1
};
return t&&t.content?n=r(t):n;
}
function r(t){
var n={
content:"",
valid:!0,
errType:-1
},e={
content:t.content,
valid:!0
};
return e=l(e.content,t.isFilter),e.valid===!1&&t.isFilter!==!0?(n.valid=!1,n.errType=0,
n.content=e.content,n):(e=a(e.content),e=c(e.content),n.content=e.content,n.valid=e.valid,
n);
}
function i(t){
for(var n,e=[/^http(s)?:\/\/([a-zA-Z0-9.]+\.|\.)?qq\.com([\/?].*)?$/i,/^http(s)?:\/\/([a-zA-Z0-9.]+\.|\.)?qcloud\.com([\/?].*)?$/i,/^http(s)?:\/\/servicewechat\.com([\/?].*)?$/i,/^http(s)?:\/\/developers\.weixin\.qq\.com([\/?].*)?$/i,/^http(s)?:\/\/mmbiz\.qpic\.(cn|com)([\/?].*)?$/i,/^http(s)?:\/\/mmbiz\.qlogo\.(cn|com)([\/?].*)?$/i,/^http(s)?:\/\/m\.qpic\.(cn|com)([\/?].*)?$/i,/^http(s)?:\/\/mmsns\.qpic\.(cn|com)([\/?].*)?$/i,/^http(s)?:\/\/github\.com([\/?].*)?$/i,/^http(s)?:\/\/security\.googleblog\.com([\/?].*)?$/i,/^wechatide:\/\/(.*)/i],r=0;n=e[r++];)if(n.test(t))return!0;
return!1;
}
function a(t){
for(var n={
content:t,
valid:!0
},e=["script","link","math"],r=0,i=e.length;i>r;r++){
var a=new RegExp("<"+e[r]+">","g"),c=new RegExp("</"+e[r]+">","g");
n.content=n.content.replace(a,"&lt;"+e[r]+"&gt;"),n.content=n.content.replace(c,"&lt;/"+e[r]+"&gt;");
}
return n;
}
function c(t){
for(var n={
content:t,
valid:!0
},e=[["*","id"],["*","onerror"],["*","onload"],["*","contenteditable"],["*","ping"]],r="(<#tagName#[^<>]*?) #attribute#=(?:(?:\"([^\"]*?)\")|(?:'([^']*?)')|([^'\"\\s=<>]*?))([\\s\\/>])",i="$1 $5",a=0,c=e.length;c>a;a++){
var o=e[a],l=o[0],u=o[1],s="";
s="*"===l?r.replace("#tagName#",""):r.replace("#tagName#",l);
var p=new RegExp(s.replace("#attribute#",u),"g");
n.content=n.content.replace(p,i);
}
return n;
}
function o(t){
var n,e=p;
return $(t).find("*").each(function(){
for(var t=$(this),r=0,a=e.length;a>r;r++){
var c=e[r],o=c[0],l=c[1];
if("*"==o||this.nodeName.toLowerCase()==o){
var u=t.attr(l)||"";
if(u&&!i(u))return n=this,!1;
}
}
}),n;
}
function l(t,n){
for(var e={
content:t,
valid:!0
},r=p,a="(<#tagName#[^<>]*?) #attribute#=(?:(?:\"([^\"]*?)\")|(?:'([^']*?)')|([^'\"\\s=<>]*?))([\\s\\/>])",c=0,o=r.length;o>c;c++){
var l=r[c],u=l[0],s=l[1],v="";
v="*"===u?a.replace("#tagName#",""):a.replace("#tagName#",u);
var d=new RegExp(v.replace("#attribute#",s),"g");
if(e.content=e.content.replace(d,function(t,r,a,c,o,l){
var u=a||c||o||"";
return u&&!i(u)?(e.valid=!1,n===!0?r+" "+s+"=''"+l:t):t;
}),e.valid===!1&&n!==!0)return e;
}
return e;
}
function u(t){
var n=$("<div></div>").html(t||"");
return n.find("img").each(function(){
var t=$(this),n=t.data("src")||t.attr("data-src")||"",e=t.attr("src")||"";
!e&&n&&i(n)&&(t.attr("src",n.http2https()),t.removeAttr("data-src"));
}),n.html();
}
function s(t){
for(var n,e=[/^http(s)?:\/\/(.*)?$/i,/^wechatide:\/\/(.*)/i],r=0;n=e[r++];)if(n.test(t))return!0;
return!1;
}
var p=[["form","action"],["*","src"],["a","href"]];
return{
validInput:t,
validOutput:n,
findExternalLink:o,
isLocalDomain:i,
isValidProtocol:s,
datasrc2src:u
};
});