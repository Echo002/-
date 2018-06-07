define("tpl/popover.html.js",[],function(){
return'<div class="popover {className}" style="{if width}width:{width}px;{/if}">\n    <div class="popover_inner">\n        <div class="popover_content jsPopOverContent">{=content}</div>\n		<!--#0001#-->\n        {if close}<a href="javascript:;" class="popover_close icon16_common close_flat jsPopoverClose">关闭</a>{/if}\n        <!--%0001%-->\n\n        <div class="popover_bar">{each buttons as bt index}<a href="javascript:;" class="btn btn_{bt.type} jsPopoverBt">{bt.text}</a>{if index < buttons.length-1}&nbsp;{/if}{/each}</div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i> \n</div>\n';
});define("tpl/mpEditor/plugin/externalLink_del_popup.html.js",[],function(){
return'<div class="js_img_popup edui_mask_edit_group">\n	<div class="edui-clickable edui_mask_edit_meta primary no_extra" onclick="$$._delRange()">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_del"></i>\n            {if type=="img"}\n            删除图片            {else if type=="link"}\n            删除链接            {else}\n            删除            {/if}\n        </div>\n	</div>\n</div>\n\n\n';
});define("tpl/mpEditor/layout.html.js",[],function(){
return'<div id="##" class="%%">\n    <!-- 工具栏 -->\n    <div id="##_toolbarbox" class="%%-toolbarbox show-edui-more">\n        {if length}\n        <div id="##_toolbarboxouter" class="%%-toolbarboxouter">\n            <div class="%%-toolbarboxinner">{=toolbarBoxHtml}</div>\n            <div id="##_toolbar_mask" class="edui_toolbar_mask"></div>\n        </div>\n        {/if}\n\n        <div class="mpeditor_global_tips">\n            <!-- <span id="##_quote_tips" class="edui_quote_tips" style="display:none;">引用中</span>-->\n            <span id="js_autosave" class="mini_tips icon_after weak_text" style="display:none;">\n                自动保存<i class="icon16_common waiting_gray"></i>\n            </span>\n        </div>\n    </div>\n\n    <!-- 载入草稿提示 -->\n    <div id="js_draft_tips" class="page_msg mini with_closed" style="display:none;">\n        <div class="inner">\n            <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n            <div class="msg_content">\n                <p class="js_msg_content"><span><span class="link_global" id="js_draft_cancel">撤消</span></span></p>\n            </div>\n        </div>\n        <span class="msg_closed js_msg_close">关闭</span>\n    </div>\n    <!-- 有旧草稿，提示下还要不要 -->\n    <div id="js_import_tips" class="page_msg mini with_closed" style="display:none;">\n        <div class="inner">\n            <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n            <div class="msg_content">\n                <p  class="js_msg_content"><span><span class="link_global" id="js_import_draft">导入</span></span></p>\n            </div>\n        </div>\n        <span class="msg_closed js_msg_close">关闭</span>\n    </div>\n    <!-- 标题报错 -->\n    <div class="page_msg mini with_closed js_title_error js_error_msg" style="display:none;">\n        <div class="inner">\n            <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n            <div class="msg_content">\n                <p class="js_msg_content">标题不能为空且长度不能超过40字</p>\n            </div>\n        </div>\n        <span class="msg_closed js_msg_close">关闭</span>\n    </div>\n\n    <!-- 标题 -->\n    <div class="appmsg_edit_item title frm_input_box" style="display: none"> <!-- 需要标题的地方单独显示 -->\n        <label for="title" class="tips_global placeholder_tips" style="display:none">请在这里输入标题</label>\n        <input id="title" type="text" autocomplete="off" placeholder="请在这里输入标题" class="frm_input js_title js_counter js_field" name="title" max-length="40">\n    </div>\n\n    <input type="hidden" class="js_field" name="labels" value=""> <!-- deprecated -->\n    <input type="hidden" class="js_field" name="recommend_type" value="" data-parseint="true"> <!-- 推荐贴 -->\n    <input type="hidden" class="js_field" name="github_url" value=""> <!-- 推荐贴 -->\n\n\n\n    <!-- 正文 -->\n    <div class="editor_area">\n        <div class="split_line"></div>\n        <!-- 正文报错 -->\n        <div class="page_msg mini with_closed js_catch_tips js_error_msg" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content">粘贴失败</p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        <div class="page_msg mini with_closed js_content_error js_error_msg" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content">正文不能为空</p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        <div id="##_iframeholder" class="%%-iframeholder">\n            <div id="##_contentplaceholder" class="editor_content_placeholder" style="display:none">从这里开始写正文</div>\n        </div>\n    </div>\n    <!-- 底部 -->\n    <div id="##_bottombar" class="%%-bottomContainer" style="display:none;">\n        <table>\n            <tr>\n                <td id="##_elementpath" class="%%-bottombar"></td>\n                <td id="##_wordcount" class="%%-wordcount"></td>\n                <td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td>\n            </tr>\n        </table>\n    </div>\n    <div id="##_scalelayer"></div>\n</div>\n';
});define("tpl/tooltip.html.js",[],function(){
return'<div class="tooltip">\n    <div class="tooltip_inner">{content}</div>\n    <i class="tooltip_arrow"></i>\n</div>\n';
});define("common/wx/mpEditor/plugin/remoteimg.js",["common/wx/mpEditor/plugin/filter.js","tpl/mpEditor/plugin/externalLink_del_popup.html.js"],function(require,exports,module){
"use strict";
function Remoteimg(e){
this.init(e),this.addEvent();
}
var Filter=require("common/wx/mpEditor/plugin/filter.js"),err_remote_del_tpl=require("tpl/mpEditor/plugin/externalLink_del_popup.html.js"),g={
defaultRemoteImg:"http://mmbiz.qpic.cn/mmbiz/G1lssUsxJOsVVJNUIuKfUP7bLm5EVWxXl5znicMum6Os0CMJHPdeHicicZ4W5MGOVa8ooSXYuE61Ek/0"
};
return Remoteimg.prototype.init=function(e){
var t=this;
this.uploadUrl="/filetransfer?action=upload_cdn&f=json&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time,
this.uploadUrl=wx.url(this.uploadUrl),this.mpeditor=e,this.editor=e.getUeditor(),
this.domUtils=UE.dom.domUtils,this.ajax=UE.ajax,this.localDomain=["127.0.0.1","localhost","mmbiz.qpic.cn","mmbiz.qlogo.cn","m.qpic.cn",/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g,"mmsns.qpic.cn"],
this.catcherUrl=this.editor.options.catcherUrl,this.catchFieldName="imgurl",this.separater="ue_separate_ue",
this.id=+new Date,this.remoteList={},this.Blob_obj_support=function(){
try{
return!!window.Blob&&Boolean(new Blob);
}catch(e){
return!1;
}
}(),this.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,
this.dataURLtoBlobSupport=function(){
return(t.BlobBuilder||t.Blob_obj_support)&&window.atob&&window.ArrayBuffer&&window.Uint8Array?!0:!1;
}(),this.Blob_Uint8Array_support=function(){
try{
return!!t.Blob_obj_support&&!!window.Uint8Array&&100===new Blob([new Uint8Array(100)]).size;
}catch(e){
return!1;
}
}();
},Remoteimg.prototype.addEvent=function(){
var _t=this,me=this.editor,mpeditor=this.mpeditor;
me.addListener("find_img_err",function(){
var e=_t.mpeditor,t=e.getDocument(),r=$(t).find(".js_catchremoteimageerror");
r=r&&r.length>0?r[0]:null,r?e.fireEvent("scrollIntoView",r,100,!0,function(){
setTimeout(function(){
var i=new UE.dom.Range(t);
if(i.selectNode(r).select(),/^img$/i.test(r.nodeName))e.fireEvent("selectionchange",!0);else{
var o=wx.T(err_remote_del_tpl,{
type:"img"
});
e.fireEvent("show_custom_popup",o,r,!1);
}
},20);
}):e.fireEvent("hideAllErrMsg");
}),me.addListener("onpasting",function(e,t){
var r=null,i=t.clipboardData?t.clipboardData:t.originalEvent&&t.originalEvent.clipboardData?t.originalEvent.clipboardData:{},o=i.items;
if(o&&1==o.length)for(var a=0;a<o.length;a++)if(/image/i.test(o[a].type)){
r=o[a].getAsFile();
break;
}
var n=!1;
if(null!==r&&(n=_t.filterImgSize(r)),null!==r&&n!==!0)return _t.pasteImageError({
msg:n.msg?n.msg:"图片粘贴失败",
dom:null
}),!0;
if(null!==r&&n===!0){
var m,s=r.type.split("/")[1]||"";
if(m=me.window.URL||me.window.webkitURL){
var c=m.createObjectURL(r);
if("string"==typeof c)return _t.pasteImageInserted({
image:c,
blob:r,
type:s
}),!0;
_t.clearImgCache(c);
}
if("function"!=typeof FileReader)return!1;
var l=new FileReader;
return l.onload=function(e){
e.target&&2==e.target.readyState&&_t.pasteImageInserted({
image:e.target.result,
blob:r,
type:s
});
},l.readAsDataURL(r),!0;
}
}),me.addListener("afterpaste aftersetcontent",function(e,t,r){
for(var i,o,a,n,m=[],s=0;n=r[s++];)if(n.tagName){
i="img"==n.tagName.toLowerCase()?[n]:_t.domUtils.getElementsByTagName(n,"img");
for(var c,l=0;c=i[l++];)if(_t.handleDataSrc(c),_t.http2https("img",c),a=c.getAttribute("_src")||c.src||"",
/^(https?|ftp):/i.test(a)&&!_t.isLocalDomain(a))me.fireEvent("catchRemoteImage",c,"img",a);else if(/^data:image/i.test(a)){
var u=_t.dataURLtoBlob(a),d=!1;
if(u&&!_t.validImg(u)&&(u=null),u)if(d=_t.filterImgSize(u),d===!0){
var p=u.type.split("/")[1]||"";
_t.uploadPasteImg({
image:a,
blob:u,
dom:c,
type:p
});
}else _t.pasteImageError({
msg:d.msg?d.msg:"图片粘贴失败",
dom:c
});
}
for(m=[n],m.push.apply(m,_t.domUtils.getElementsByTagName(n,"*")),l=0;c=m[l++];)if(o=c.getAttribute("style")||c.style.cssText||"",
o=o.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),o&&o[2]){
a=o[2].replace(/^['"]|['"]$/g,"");
var f=_t.http2https("bg",c,a);
a=f&&f.url?f.url:a,/^(https?|ftp):/i.test(a)&&!_t.isLocalDomain(a)&&me.fireEvent("catchRemoteImage",c,"bg",a);
}
for(l=0;c=m[l++];)c.style&&(c.style.borderImage="",c.style.borderImageSource="");
}
}),me.addListener("catchRemoteImage",function(cmd,ci,type,url){
var remoteObj;
_t.domUtils.removeClasses(ci,"js_catchingremoteimage");
var curArticle=me.fireEvent("get_current_article");
if(curArticle){
var uid=ci.getAttribute("data-remoteid");
if(!uid||!_t.remoteList[uid]){
"bg"==type?me.fireEvent("funcPvUvReport","remoteimg_style"):"img"==type&&me.fireEvent("funcPvUvReport","remoteimg_img"),
uid||(uid="c"+_t.getuid());
var remoteObj=_t.remoteList[uid]={
article:curArticle,
oldUrl:url,
uid:uid,
type:type,
defaultRemoteImg:g.defaultRemoteImg
};
_t.domUtils.addClass(ci,"js_catchingremoteimage"),_t.domUtils.setAttributes(ci,{
"data-remoteid":uid
}),_t.catchremoteimage([url],{
success:function(xhr){
!!_t.remoteList[uid]&&delete _t.remoteList[uid];
try{
var info=eval("("+xhr.responseText+")");
}catch(e){
return me.fireEvent("funcPvUvReport","remoteimgerr"),me.fireEvent("catchremoteerror",remoteObj,""),
void _t.checkRemoteList(!0);
}
info&&0==info.errcode&&info.url?(me.fireEvent("funcPvUvReport","remoteimgsuc"),me.fireEvent("catchremotesuccess",remoteObj,info.url,info.img_format)):(me.fireEvent("funcPvUvReport","remoteimgerr"),
me.fireEvent("catchremoteerror",remoteObj,"")),_t.checkRemoteList(!0);
},
error:function(){
!!_t.remoteList[uid]&&delete _t.remoteList[uid],me.fireEvent("funcPvUvReport","remoteimgerr"),
me.fireEvent("catchremoteerror",remoteObj,""),_t.checkRemoteList(!0);
}
});
}
}
}),me.addListener("checkRemoteList",function(e,t){
return _t.checkRemoteList(t===!0?!0:!1);
}),me.addListener("clearImgCache",function(e,t,r){
return _t.clearImgCache(t,r);
});
},Remoteimg.prototype.pasteImageError=function(e){
var t=this.editor;
if(!e.dom)return void t.fireEvent("catchremoteerror",null,e.msg||"");
var r=t.fireEvent("get_current_article");
if(r){
var i=e.dom.getAttribute("data-remoteid");
i||(i="p_"+this.getuid()),this.domUtils.setAttributes(e.dom,{
"data-remoteid":i
});
var o={
article:r,
uid:i,
type:"img",
defaultRemoteImg:g.defaultRemoteImg
};
t.fireEvent("catchremoteerror",o,e.msg||"");
}
},Remoteimg.prototype.pasteImageInserted=function(e){
var t=this,r=this.editor,i=r.fireEvent("insertMaterialImg",[{
format:e.type,
src:e.image
}]);
e.dom=i[0],t.uploadPasteImg(e);
},Remoteimg.prototype.dataURLtoBlob=function(e){
if(!this.dataURLtoBlobSupport)return!1;
try{
var t,r=e.split(",");
t=r[0].indexOf("base64")>=0?window.atob(r[1]):decodeURIComponent(r[1]);
for(var i=new ArrayBuffer(t.length),o=new Uint8Array(i),a=0,n=t.length;n>a;a++)o[a]=t.charCodeAt(a);
var m=r[0].split(":")[1].split(";")[0];
if(this.Blob_obj_support)return this.Blob_Uint8Array_support?new Blob([o],{
type:m
}):new Blob([i],{
type:m
});
var s=new BlobBuilder;
return s.append(i),s.getBlob(m);
}catch(c){
return!1;
}
},Remoteimg.prototype.uploadPasteImg=function(opt){
if("function"!=typeof FormData)return!1;
var _t=this,me=this.editor,curArticle=me.fireEvent("get_current_article");
if(curArticle){
var form=new FormData,extensions=opt.blob.type.split("/")[1]||"",id=this.getuid(),url=this.uploadUrl+"&seq="+id,filename="粘贴图片_"+this.formatDate(new Date,"YYYYMMDDHHIISS")+(extensions?"."+extensions:""),uid=opt.dom.getAttribute("data-remoteid");
if(!uid||!_t.remoteList[uid]){
uid||(uid="p_"+id);
var remoteObj=_t.remoteList[uid]={
article:curArticle,
uid:uid,
type:"img",
defaultRemoteImg:g.defaultRemoteImg
};
_t.domUtils.setAttributes(opt.dom,{
"data-remoteid":uid
}),form.append("id",id),form.append("name",filename),form.append("type",opt.blob.type),
form.append("lastModifiedDate",new Date),form.append("size",opt.blob.size),form.append("file",opt.blob,filename);
var xhr=new XMLHttpRequest;
xhr.addEventListener("error",function(){
!!_t.remoteList[uid]&&delete _t.remoteList[uid],_t.checkRemoteList(!0);
}),xhr.addEventListener("readystatechange",function(error){
if(4===xhr.readyState)if(xhr.upload.onprogress=null,xhr.onreadystatechange=null,
!!_t.remoteList[uid]&&delete _t.remoteList[uid],xhr.status>=200&&xhr.status<300){
try{
var info=eval("("+xhr.responseText+")");
}catch(e){
return me.fireEvent("funcPvUvReport","screen_shot_fail"),me.fireEvent("catchremoteerror",remoteObj,""),
void _t.checkRemoteList(!0);
}
if(info&&info.base_resp&&0==info.base_resp.ret&&info.content){
var cdnUrl=info.content.http2https();
me.fireEvent("funcPvUvReport","screen_shot_suc"),me.fireEvent("catchremotesuccess",remoteObj,cdnUrl,extensions);
}else me.fireEvent("funcPvUvReport","screen_shot_fail"),me.fireEvent("catchremoteerror",remoteObj,"");
_t.checkRemoteList(!0);
}else me.fireEvent("funcPvUvReport","screen_shot_fail"),me.fireEvent("catchremoteerror",remoteObj,""),
_t.checkRemoteList(!0);
}),xhr.open("POST",url),xhr.send(form);
}
}
},Remoteimg.prototype.validImg=function(e){
return e.size<1024?!1:!0;
},Remoteimg.prototype.filterImgSize=function(e){
var t=5242880,r=",bmp,png,jpeg,jpg,gif,",i=","+(e.type.split("/")[1]||"")+",";
return e.size>t?{
type:1,
msg:"截图的图片大小不能超过5M"
}:-1==r.indexOf(i)?{
type:2,
msg:"截图的图片必须为以下格式：bmp,png,jpeg,jpg,gif"
}:!0;
},Remoteimg.prototype.checkRemoteList=function(e){
var t=0;
for(var r in this.remoteList)this.remoteList.hasOwnProperty(r)&&t++;
return t>0?!1:(!!e&&this.editor.fireEvent("remoteimg_all_complete"),!0);
},Remoteimg.prototype.clearImgCache=function(e,t){
try{
var r=this.editor;
if("string"!=typeof e&&"string"==typeof t)if("img"==t)e=$(e).attr("src");else if("bg"==t){
e=$(e)[0];
var i=e.getAttribute("style")||e.style.cssText||"";
i=i.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),i&&i[2]&&(e=i[2].replace(/^['"]|['"]$/g,""));
}
if(!e||/^data/i.test(e))return;
var o=r.window.URL||r.window.webkitURL;
o.revokeObjectURL(e);
}catch(a){
return;
}
},Remoteimg.prototype.handleDataSrc=function(e){
var t=e.getAttribute("src")||"",r=e.getAttribute("data-src")||"";
/^data:image/i.test(t)&&(/^http:\/\/mmbiz\.qpic\.cn/.test(r)||/^https:\/\/mmbiz\.qlogo\.cn/.test(r))&&(e.setAttribute("src",r),
e.removeAttribute("data-src"));
},Remoteimg.prototype.http2https=function(e,t,r){
if("img"==e){
var i=t.getAttribute("src")||"";
if(!/^http:\/\/mmbiz\.qpic\.cn/.test(i))return;
var o=this.formatUrl(i);
return t.setAttribute("src",o.url),!!o.format&&t.setAttribute("data-type",o.format),
t.removeAttribute("_src"),t.removeAttribute("data-src"),o;
}
if("bg"==e&&r&&/^http:\/\/mmbiz.qpic.cn/.test(r)){
var o=this.formatUrl(r);
return t.style.backgroundImage=o.url,o;
}
return null;
},Remoteimg.prototype.formatUrl=function(e){
e=e||"";
var t=e.match(/[?|&]wx_fmt=(.*?)[&|$]/)||[];
return t=t[1]||"",e=e.http2https().replace(/\?.*$/,"?"),t&&e&&(e=e+"wx_fmt="+t),
{
url:e,
format:t
};
},Remoteimg.prototype.catchremoteimage=function(e,t){
var r=e.join(this.separater),i=(this.editor,{
timeout:6e4,
onsuccess:function(){
"function"==typeof t.success&&t.success.apply(this,arguments);
},
onerror:function(){
"function"==typeof t.error&&t.error.apply(this,arguments);
}
});
try{
var o=decodeURIComponent(r);
i[this.catchFieldName]=encodeURI(o);
}catch(a){
i[this.catchFieldName]=r;
}
i.t="ajax-editor-upload-img";
var n=this;
setTimeout(function(){
n.ajax.request(n.catcherUrl,i);
},2e3);
},Remoteimg.prototype.getuid=function(){
return this.id++;
},Remoteimg.prototype.isLocalDomain=function(e){
return Filter.isLocalDomain(e);
},Remoteimg.prototype.formatDate=function(e,t){
var r=t.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,this.addZero(e.getFullYear()%100,2)).replace(/mm|MM/,this.addZero(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,this.addZero(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,this.addZero(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,this.addZero(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,this.addZero(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds());
return r;
},Remoteimg.prototype.addZero=function(e,t){
for(var r=0,i=t-(e+"").length;i>r;r++)e="0"+e;
return e+"";
},Remoteimg;
});define("common/wx/mpEditor/plugin/popup.js",[],function(){
"use strict";
function t(t){
this.mpeditor=t,this.editor=t.getUeditor(),this.uiUtils=baidu.editor.ui.uiUtils,
this.domUtils=UE.dom.domUtils,this.init(),this.addEvent();
}
return t.prototype.init=function(){
var t=this,e=t.editor,i=t.mpeditor;
this.popup=new baidu.editor.ui.Popup({
editor:e,
content:"",
className:"edui-bubble",
_execCommand:function(){
e.execCommand.apply(e,arguments),t.showpopup();
},
_execCommandAndHide:function(){
e.execCommand.apply(e,arguments),this.hide();
},
_delRange:function(){
e.fireEvent("saveScene");
var t=$(this._anchorEl),o=t.parent("a");
o.length>0&&(t=o),e.selection.getRange().collapse(!1),t.remove(),this.hide(),e.focus(),
e.fireEvent("saveScene"),i.funcPvUvReport("del_img");
},
_imgAutoWidth:function(t){
e.fireEvent("saveScene");
var o=$(this.getDom("content")),n=o.find(".js_adapt"),p=o.find(".js_canceladapt");
t===!0?(this._anchorEl.style.width="100%",n.hide(),p.show(),i.funcPvUvReport("autowidth")):(this._anchorEl.style.width="auto",
n.show(),p.hide(),i.funcPvUvReport("cancel_autowidth")),this._anchorEl.style.height="auto",
e.focus(),e.fireEvent("saveScene");
},
getHtmlTpl:function(){
return'<div id="##" class="edui-popup edui_mask_edit_bar %%"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">'+this.getContentHtmlTpl()+"  </div> </div></div>";
},
showAnchorRect:function(e){
this._doAutoRender();
var i=t.uiUtils.getViewportRect();
this._show();
var o,n,p,d,s=this.fitSize(),r=t.uiUtils.getClientRect(this._anchorEl);
if(o=this.canSideLeft&&r.right+s.width>i.right&&r.left>s.width,n=this.canSideUp&&r.top+s.height>i.bottom&&r.bottom>s.height,
p=o?r.right-s.width:r.left,d=n?r.top-s.height:r.bottom,e){
var h=$(".js_main_title").height(),u=$(".edui-editor-toolbarbox").height();
d=Math.max(r.top,i.top+h+u);
}
var a=this.getDom();
t.uiUtils.setViewportOffset(a,{
left:p,
top:d
}),this.editor&&(a.style.zIndex=1*this.editor.container.style.zIndex+10,t.uiUtils.getFixedLayer().style.zIndex=a.style.zIndex-1);
},
queryAutoHide:function(i){
return i&&i.ownerDocument==e.document&&("img"==i.tagName.toLowerCase()||t.domUtils.findParentByTagName(i,"a",!0))?i!==t.popup.anchorEl:baidu.editor.ui.Popup.prototype.queryAutoHide.call(this,i);
}
}),this.popup.render();
},t.prototype.addEvent=function(){
var t=this,e=t.editor;
e.addListener("selectionchange",function(e,i){
i&&t.showpopup();
}),e.addListener("hide_common_popup",function(){
t.popup.hide();
}),e.addListener("show_custom_popup",function(e,i,o,n){
t.popup.getDom("content").innerHTML=t.popup.formatHtml(i),t.popup._anchorEl=o,t.popup.showAnchorRect(n);
});
},t.prototype.showpopup=function(){
var t={
html:"",
node:null
},e=this,i=e.editor;
if(i.fireEvent("handle_common_popup",t),t.html&&t.node){
e.popup.getDom("content").innerHTML=e.popup.formatHtml(t.html);
var o=$(t.node).find("img");
o.length>0&&(t.node=o[0]),e.popup._anchorEl=t.node,/^img$/i.test(t.node.tagName)?e.popup.showAnchorRect(!0):e.popup.showAnchorRect(),
/js_img_popup/i.test(t.html)&&i.fireEvent("funcPvUvReport","img_popup"),/js_link_popup/i.test(t.html)&&i.fireEvent("funcPvUvReport","link_popup");
}else e.popup.hide();
},t;
});define("common/wx/mpEditor/contextmenu.js",["common/wx/mpEditor/zh_CN.js"],function(e){
"use strict";
e("common/wx/mpEditor/zh_CN.js");
var t=baidu.editor.browser,l=UE.I18N.zh_CN.contextMenu,a=[{
label:l.selectall,
cmdName:"selectall"
},{
label:l.cleardoc,
cmdName:"cleardoc",
exec:function(){
confirm(l.confirmclear)&&this.execCommand("cleardoc");
}
},"-",{
group:l.paragraph,
icon:"justifyjustify",
subMenu:[{
label:l.justifyleft,
cmdName:"justify",
value:"left"
},{
label:l.justifyright,
cmdName:"justify",
value:"right"
},{
label:l.justifycenter,
cmdName:"justify",
value:"center"
},{
label:l.justifyjustify,
cmdName:"justify",
value:"justify"
}]
},"-",{
group:l.table,
icon:"table",
subMenu:[{
label:l.inserttable,
cmdName:"inserttable"
},{
label:l.deletetable,
cmdName:"deletetable"
},"-",{
label:l.deleterow,
cmdName:"deleterow"
},{
label:l.deletecol,
cmdName:"deletecol"
},{
label:l.insertcol,
cmdName:"insertcol"
},{
label:l.insertcolnext,
cmdName:"insertcolnext"
},{
label:l.insertrow,
cmdName:"insertrow"
},{
label:l.insertrownext,
cmdName:"insertrownext"
},"-",{
label:l.insertcaption,
cmdName:"insertcaption"
},{
label:l.deletecaption,
cmdName:"deletecaption"
},{
label:l.inserttitle,
cmdName:"inserttitle"
},{
label:l.deletetitle,
cmdName:"deletetitle"
},"-",{
label:l.mergecells,
cmdName:"mergecells"
},{
label:l.mergeright,
cmdName:"mergeright"
},{
label:l.mergedown,
cmdName:"mergedown"
},"-",{
label:l.splittorows,
cmdName:"splittorows"
},{
label:l.splittocols,
cmdName:"splittocols"
},{
label:l.splittocells,
cmdName:"splittocells"
},"-",{
label:l.averageDiseRow,
cmdName:"averagedistributerow"
},{
label:l.averageDisCol,
cmdName:"averagedistributecol"
},"-",{
label:l.edittd,
cmdName:"edittd",
exec:function(){
UE.ui.edittd&&new UE.ui.edittd(this),this.getDialog("edittd").open();
}
},{
label:l.edittable,
cmdName:"edittable",
exec:function(){
UE.ui.edittable&&new UE.ui.edittable(this),this.getDialog("edittable").open();
}
}]
},{
group:l.tablesort,
icon:"tablesort",
subMenu:[{
label:l.reversecurrent,
cmdName:"sorttable",
value:1
},{
label:l.orderbyasc,
cmdName:"sorttable"
},{
label:l.reversebyasc,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,t){
var l=e.innerHTML,a=t.innerHTML;
return a.localeCompare(l);
});
}
},{
label:l.orderbynum,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,l){
var a=e[t.ie?"innerText":"textContent"].match(/\d+/),n=l[t.ie?"innerText":"textContent"].match(/\d+/);
return a&&(a=+a[0]),n&&(n=+n[0]),(a||0)-(n||0);
});
}
},{
label:l.reversebynum,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,l){
var a=e[t.ie?"innerText":"textContent"].match(/\d+/),n=l[t.ie?"innerText":"textContent"].match(/\d+/);
return a&&(a=+a[0]),n&&(n=+n[0]),(n||0)-(a||0);
});
}
}]
},{
group:l.borderbk,
icon:"borderBack",
subMenu:[{
label:l.setcolor,
cmdName:"interlacetable",
exec:function(){
this.execCommand("interlacetable");
}
},{
label:l.unsetcolor,
cmdName:"uninterlacetable",
exec:function(){
this.execCommand("uninterlacetable");
}
},{
label:l.setbackground,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["#bbb","#ccc"]
});
}
},{
label:l.unsetbackground,
cmdName:"cleartablebackground",
exec:function(){
this.execCommand("cleartablebackground");
}
},{
label:l.redandblue,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["red","blue"]
});
}
},{
label:l.threecolorgradient,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["#aaa","#bbb","#ccc"]
});
}
}]
},{
group:l.aligntd,
icon:"aligntd",
subMenu:[{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"bottom"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"bottom"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"bottom"
}
}]
},{
group:l.aligntable,
icon:"aligntable",
subMenu:[{
cmdName:"tablealignment",
className:"left",
label:l.tableleft,
value:"left"
},{
cmdName:"tablealignment",
className:"center",
label:l.tablecenter,
value:"center"
},{
cmdName:"tablealignment",
className:"right",
label:l.tableright,
value:"right"
}]
},"-",{
label:l.insertparagraphbefore,
cmdName:"insertparagraph",
value:!0
},{
label:l.insertparagraphafter,
cmdName:"insertparagraph"
},{
label:l.copy,
cmdName:"copy",
exec:function(){
alert(l.copymsg);
},
query:function(){
return 0;
}
},{
label:l.paste,
cmdName:"paste",
exec:function(){
alert(l.pastemsg);
},
query:function(){
return 0;
}
}];
return a;
});define("tpl/mpEditor/plugin/insertcode_dialog.html.js",[],function(){
return'<div>\n    <div class="frm_control_group">\n        <label for="" class="frm_label">请选择语言</label>\n        <div class="frm_controls">\n            <div  class="dropdown_menu js_syntax">\n            </div>\n        </div>\n    </div>\n    <div class="frm_control_group">\n        <label for="" class="frm_label">插入代码</label>\n        <div class="frm_controls">\n            <span class="frm_textarea_box">\n                <textarea  class="frm_textarea frm_msg_content"></textarea>\n            </span>\n        </div>\n    </div>\n</div>\n';
});define("biz_web/ui/dropdown.js",["biz_web/widget/dropdown.css","tpl/biz_web/ui/dropdown.html.js"],function(e){
"use strict";
function t(e){
e.render&&(e.renderHtml="",$.each(e.data,function(t,a){
e.renderHtml+=e.render(a);
})),e=$.extend(!0,{},d,e);
var t=this;
t.container=$(e.container),t.container.addClass(e.search?o+" search":o),this.isDisabled=e.disabled,
e.disabled&&t.container.addClass("disabled"),t.opt=e,t.container.html(template.compile(n)(e)).find(".jsDropdownList").hide(),
t.bt=t.container.find(".jsDropdownBt"),t.dropdown=t.container.find(".jsDropdownList"),
$.each(e.data,function(e,a){
$.data(t.dropdown.find(".jsDropdownItem")[e],"value",a.value),$.data(t.dropdown.find(".jsDropdownItem")[e],"name",a.name),
$.data(t.dropdown.find(".jsDropdownItem")[e],"item",a);
}),"undefined"!=typeof e.index&&0!==e.data.length&&(t.bt.find(".jsBtLabel").html(e.data[e.index].name||e.label),
t.value=e.data[e.index].value),t.bt.on("click",function(){
return a(),e.disabled||(t.dropdown.show(),t.container.addClass("open")),!1;
}),e.search&&t.bt.find(".jsBtLabel").on("keyup",function(e){
if(!t.disabled){
var a=$(this);
if(13==e.keyCode)t.value?(a.html(a.data("name")).removeClass("error"),t.dropdown.hide()):a.find("div").remove();else{
var n=a.html().trim(),d=[];
t.value=null,t.dropdown.show().find(".jsDropdownItem").each(function(){
var e=$(this);
e.hasClass("js_empty")||(e.data("name").indexOf(n)>-1?(e.parent().show(),d.push({
name:e.data("name"),
value:e.data("value")
})):e.parent().hide());
}),0==d.length?0==t.dropdown.find(".js_empty").length&&t.dropdown.append('<li class="jsDropdownItem js_empty empty">未找到"'+n+'"</li>'):(t.dropdown.find(".js_empty").remove(),
1==d.length&&(d[0].name==n?a.removeClass("error"):a.data("name",d[0].name),t.value=d[0].value));
}
}
}).on("blur",function(){
if(!t.disabled){
var a=$(this);
t.value?$(this).html()!=$(this).data("name")&&(a.addClass("error"),t.value=null):""!=a.html()?a.addClass("error"):(a.html(e.label).removeClass("error"),
t.value=null);
}
}).on("focus",function(){
if(!t.disabled){
var a=$(this),n=$(this).html().trim();
n==e.label&&a.html("").removeClass("error"),""==n&&a.removeClass("error"),t.dropdown.show(),
t.container.addClass("open");
}
}),$(document).on("click",a),t.dropdown.on("click",".jsDropdownItem",function(){
var a=$(this).data("value"),n=$(this).data("name"),d=$(this).data("index");
if((!t.value||t.value&&t.value!=a)&&(t.value=a,t.name=n,e.callback&&"function"==typeof e.callback)){
var o=e.callback(a,n,d,$(this).data("item"))||n;
e.search?t.bt.find(".jsBtLabel").html(o).data("name",o).removeClass("error"):t.bt.find(".jsBtLabel").html(o);
}
t.dropdown.hide();
});
}
function a(){
$(".jsDropdownList").hide(),$(".dropdown_menu").each(function(){
!$(this).hasClass("dropdown_checkbox")&&$(this).removeClass("open");
});
}
e("biz_web/widget/dropdown.css");
var n=e("tpl/biz_web/ui/dropdown.html.js"),d={
label:"请选择",
data:[],
callback:$.noop,
render:$.noop,
delay:500,
disabled:!1,
search:!1
},o="dropdown_menu";
return t.prototype={
selected:function(e,t){
var a=this;
if("number"==typeof e){
if(this.opt.data&&this.opt.data[e]){
var n=this.opt.data[e].name,d=this.opt.data[e].value;
0==t||this.dropdown.find(".jsDropdownItem:eq("+e+")").trigger("click",d),this.bt.find(".jsBtLabel").html(n);
}
}else $.each(this.opt.data,function(n,o){
return e==o.value||e==o.name?(0==t||a.dropdown.find(".jsDropdownItem:eq("+n+")").trigger("click",d),
a.bt.find(".jsBtLabel").html(o.name),!1):void 0;
});
return this;
},
reset:function(){
return this.bt.find(".jsBtLabel").html(this.opt.label),this.value=null,this;
},
hidegreater:function(e){
var t=this;
return"number"==typeof e&&t.opt.data&&t.opt.data[e]&&(t.dropdown.find(".jsDropdownItem").show(),
t.dropdown.find(".jsDropdownItem:gt("+e+")").hide()),this;
},
destroy:function(){
return this.isDisabled&&this.container.removeClass("disabled"),this.container.children().remove(),
this.container.off(),this;
},
enable:function(){
return this.opt.disabled=!1,this.container.removeClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!0),
this;
},
disable:function(){
return this.opt.disabled=!0,this.container.addClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!1),
this;
}
},t;
});define("common/lib/shCode.js",[],function(e,t){
var r;
if(r)throw Error("can't load XRegExp twice in the same frame");
if(function(e){
function t(e,t){
if(!r.isRegExp(e))throw TypeError("type RegExp expected");
var i=e._xregexp;
return e=r(e.source,s(e)+(t||"")),i&&(e._xregexp={
source:i.source,
captureNames:i.captureNames?i.captureNames.slice(0):null
}),e;
}
function s(e){
return(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":"");
}
function i(e,t,r,s){
var i,n,a,o=g.length;
c=!0;
try{
for(;o--;)if(a=g[o],r&a.scope&&(!a.trigger||a.trigger.call(s))&&(a.pattern.lastIndex=t,
n=a.pattern.exec(e),n&&n.index===t)){
i={
output:a.handler.call(s,n,r),
match:n
};
break;
}
}catch(l){
throw l;
}finally{
c=!1;
}
return i;
}
function n(e,t,r){
if(Array.prototype.indexOf)return e.indexOf(t,r);
for(var s=r||0;s<e.length;s++)if(e[s]===t)return s;
return-1;
}
r=function(s,n){
var a,l,g,d,p,m=[],h=r.OUTSIDE_CLASS,b=0;
if(r.isRegExp(s)){
if(n!==e)throw TypeError("can't supply flags when constructing one RegExp from another");
return t(s);
}
if(c)throw Error("can't call the XRegExp constructor within token definition functions");
for(n=n||"",a={
hasNamedCapture:!1,
captureNames:[],
hasFlag:function(e){
return n.indexOf(e)>-1;
},
setFlag:function(e){
n+=e;
}
};b<s.length;)l=i(s,b,h,a),l?(m.push(l.output),b+=l.match[0].length||1):(g=u.exec.call(f[h],s.slice(b)))?(m.push(g[0]),
b+=g[0].length):(d=s.charAt(b),"["===d?h=r.INSIDE_CLASS:"]"===d&&(h=r.OUTSIDE_CLASS),
m.push(d),b++);
return p=RegExp(m.join(""),u.replace.call(n,o,"")),p._xregexp={
source:s,
captureNames:a.hasNamedCapture?a.captureNames:null
},p;
},r.version="1.5.1",r.INSIDE_CLASS=1,r.OUTSIDE_CLASS=2;
var a=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,o=/[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,l=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,c=!1,g=[],u={
exec:RegExp.prototype.exec,
test:RegExp.prototype.test,
match:String.prototype.match,
replace:String.prototype.replace,
split:String.prototype.split
},d=u.exec.call(/()??/,"")[1]===e,p=function(){
var e=/^/g;
return u.test.call(e,""),!e.lastIndex;
}(),m=RegExp.prototype.sticky!==e,f={};
f[r.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/,
f[r.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,
r.addToken=function(e,s,i,n){
g.push({
pattern:t(e,"g"+(m?"y":"")),
handler:s,
scope:i||r.OUTSIDE_CLASS,
trigger:n||null
});
},r.cache=function(e,t){
var s=e+"/"+(t||"");
return r.cache[s]||(r.cache[s]=r(e,t));
},r.copyAsGlobal=function(e){
return t(e,"g");
},r.escape=function(e){
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");
},r.execAt=function(e,r,s,i){
var n,a=t(r,"g"+(i&&m?"y":""));
return a.lastIndex=s=s||0,n=a.exec(e),i&&n&&n.index!==s&&(n=null),r.global&&(r.lastIndex=n?a.lastIndex:0),
n;
},r.freezeTokens=function(){
r.addToken=function(){
throw Error("can't run addToken after freezeTokens");
};
},r.isRegExp=function(e){
return"[object RegExp]"===Object.prototype.toString.call(e);
},r.iterate=function(e,r,s,i){
for(var n,a=t(r,"g"),o=-1;n=a.exec(e);)r.global&&(r.lastIndex=a.lastIndex),s.call(i,n,++o,e,r),
a.lastIndex===n.index&&a.lastIndex++;
r.global&&(r.lastIndex=0);
},r.matchChain=function(e,s){
return function i(e,n){
var a,o=s[n].regex?s[n]:{
regex:s[n]
},l=t(o.regex,"g"),c=[];
for(a=0;a<e.length;a++)r.iterate(e[a],l,function(e){
c.push(o.backref?e[o.backref]||"":e[0]);
});
return n!==s.length-1&&c.length?i(c,n+1):c;
}([e],0);
},RegExp.prototype.apply=function(e,t){
return this.exec(t[0]);
},RegExp.prototype.call=function(e,t){
return this.exec(t);
},RegExp.prototype.exec=function(t){
var r,i,a,o;
if(this.global||(o=this.lastIndex),r=u.exec.apply(this,arguments)){
if(!d&&r.length>1&&n(r,"")>-1&&(a=RegExp(this.source,u.replace.call(s(this),"g","")),
u.replace.call((t+"").slice(r.index),a,function(){
for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(r[t]=e);
})),this._xregexp&&this._xregexp.captureNames)for(var l=1;l<r.length;l++)i=this._xregexp.captureNames[l-1],
i&&(r[i]=r[l]);
!p&&this.global&&!r[0].length&&this.lastIndex>r.index&&this.lastIndex--;
}
return this.global||(this.lastIndex=o),r;
},RegExp.prototype.test=function(e){
var t,r;
return this.global||(r=this.lastIndex),t=u.exec.call(this,e),t&&!p&&this.global&&!t[0].length&&this.lastIndex>t.index&&this.lastIndex--,
this.global||(this.lastIndex=r),!!t;
},String.prototype.match=function(e){
if(r.isRegExp(e)||(e=RegExp(e)),e.global){
var t=u.match.apply(this,arguments);
return e.lastIndex=0,t;
}
return e.exec(this);
},String.prototype.replace=function(e,t){
var s,i,o,l,c=r.isRegExp(e);
return c?(e._xregexp&&(s=e._xregexp.captureNames),e.global||(l=e.lastIndex)):e+="",
"[object Function]"===Object.prototype.toString.call(t)?i=u.replace.call(this+"",e,function(){
if(s){
arguments[0]=new String(arguments[0]);
for(var r=0;r<s.length;r++)s[r]&&(arguments[0][s[r]]=arguments[r+1]);
}
return c&&e.global&&(e.lastIndex=arguments[arguments.length-2]+arguments[0].length),
t.apply(null,arguments);
}):(o=this+"",i=u.replace.call(o,e,function(){
var e=arguments;
return u.replace.call(t+"",a,function(t,r,i){
if(!r){
var a=+i;
return a<=e.length-3?e[a]:(a=s?n(s,i):-1,a>-1?e[a+1]:t);
}
switch(r){
case"$":
return"$";

case"&":
return e[0];

case"`":
return e[e.length-1].slice(0,e[e.length-2]);

case"'":
return e[e.length-1].slice(e[e.length-2]+e[0].length);

default:
var o="";
if(r=+r,!r)return t;
for(;r>e.length-3;)o=String.prototype.slice.call(r,-1)+o,r=Math.floor(r/10);
return(r?e[r]||"":"$")+o;
}
});
})),c&&(e.lastIndex=e.global?0:l),i;
},String.prototype.split=function(t,s){
if(!r.isRegExp(t))return u.split.apply(this,arguments);
var i,n,a=this+"",o=[],l=0;
if(s===e||0>+s)s=1/0;else if(s=Math.floor(+s),!s)return[];
for(t=r.copyAsGlobal(t);(i=t.exec(a))&&!(t.lastIndex>l&&(o.push(a.slice(l,i.index)),
i.length>1&&i.index<a.length&&Array.prototype.push.apply(o,i.slice(1)),n=i[0].length,
l=t.lastIndex,o.length>=s));)t.lastIndex===i.index&&t.lastIndex++;
return l===a.length?(!u.test.call(t,"")||n)&&o.push(""):o.push(a.slice(l)),o.length>s?o.slice(0,s):o;
},r.addToken(/\(\?#[^)]*\)/,function(e){
return u.test.call(l,e.input.slice(e.index+e[0].length))?"":"(?:)";
}),r.addToken(/\((?!\?)/,function(){
return this.captureNames.push(null),"(";
}),r.addToken(/\(\?<([$\w]+)>/,function(e){
return this.captureNames.push(e[1]),this.hasNamedCapture=!0,"(";
}),r.addToken(/\\k<([\w$]+)>/,function(e){
var t=n(this.captureNames,e[1]);
return t>-1?"\\"+(t+1)+(isNaN(e.input.charAt(e.index+e[0].length))?"":"(?:)"):e[0];
}),r.addToken(/\[\^?]/,function(e){
return"[]"===e[0]?"\\b\\B":"[\\s\\S]";
}),r.addToken(/^\(\?([imsx]+)\)/,function(e){
return this.setFlag(e[1]),"";
}),r.addToken(/(?:\s+|#.*)+/,function(e){
return u.test.call(l,e.input.slice(e.index+e[0].length))?"":"(?:)";
},r.OUTSIDE_CLASS,function(){
return this.hasFlag("x");
}),r.addToken(/\./,function(){
return"[\\s\\S]";
},r.OUTSIDE_CLASS,function(){
return this.hasFlag("s");
});
}(),"undefined"==typeof s)var s=function(){
function e(e,t){
return-1!=e.className.indexOf(t);
}
function t(t,r){
e(t,r)||(t.className+=" "+r);
}
function s(e,t){
e.className=e.className.replace(t,"");
}
function i(e){
for(var t=[],r=0;r<e.length;r++)t.push(e[r]);
return t;
}
function n(e){
return e.split(/\r?\n/);
}
function a(e){
var t="highlighter_";
return 0==e.indexOf(t)?e:t+e;
}
function o(e){
return H.vars.highlighters[a(e)];
}
function l(e){
return document.getElementById(a(e));
}
function c(e){
H.vars.highlighters[a(e.id)]=e;
}
function g(e,t,r){
if(null==e)return null;
var s,i,n=1!=r?e.childNodes:[e.parentNode],a={
"#":"id",
".":"className"
}[t.substr(0,1)]||"nodeName";
if(s="nodeName"!=a?t.substr(1):t.toUpperCase(),-1!=(e[a]||"").indexOf(s))return e;
for(var o=0;n&&o<n.length&&null==i;o++)i=g(n[o],t,r);
return i;
}
function u(e,t){
return g(e,t,!0);
}
function d(e,t,r){
r=Math.max(r||0,0);
for(var s=r;s<e.length;s++)if(e[s]==t)return s;
return-1;
}
function p(e){
return(e||"")+Math.round(1e6*Math.random()).toString();
}
function m(e,t){
var r,s={};
for(r in e)s[r]=e[r];
for(r in t)s[r]=t[r];
return s;
}
function f(e){
var t={
"true":!0,
"false":!1
}[e];
return null==t?e:t;
}
function h(e,t,r,s,i){
var n=(screen.width-r)/2,a=(screen.height-s)/2;
i+=", left="+n+", top="+a+", width="+r+", height="+s,i=i.replace(/^,/,"");
var o=window.open(e,t,i);
return o.focus(),o;
}
function b(e,t,r,s){
function i(e){
e=e||window.event,e.target||(e.target=e.srcElement,e.preventDefault=function(){
this.returnValue=!1;
}),r.call(s||window,e);
}
e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i,!1);
}
function x(e){
window.alert(H.config.strings.alert+e);
}
function y(e,t){
var r=H.vars.discoveredBrushes,s=null;
if(null==r){
r={};
for(var i in H.brushes){
var n=H.brushes[i],a=n.aliases;
if(null!=a){
n.brushName=i.toLowerCase();
for(var o=0;o<a.length;o++)r[a[o]]=i;
}
}
H.vars.discoveredBrushes=r;
}
return s=H.brushes[r[e]],null==s&&t&&x(H.config.strings.noBrush+e),s;
}
function w(e,t){
for(var r=n(e),s=0;s<r.length;s++)r[s]=t(r[s],s);
return r.join("\r\n");
}
function v(e){
return e.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,"");
}
function S(e){
for(var t,s={},i=new r("^\\[(?<values>(.*?))\\]$"),n=new r("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w-%#]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?","g");null!=(t=n.exec(e));){
var a=t.value.replace(/^['"]|['"]$/g,"");
if(null!=a&&i.test(a)){
var o=i.exec(a);
a=o.values.length>0?o.values.split(/\s*,\s*/):[];
}
s[t.name]=a;
}
return s;
}
function L(e,t){
return null==e||0==e.length||"\n"==e?e:(e=e.replace(/</g,"&lt;"),e=e.replace(/ {2,}/g,function(e){
for(var t="",r=0;r<e.length-1;r++)t+=H.config.space;
return t+" ";
}),null!=t&&(e=w(e,function(e){
if(0==e.length)return"";
var r="";
return e=e.replace(/^(&nbsp;| )+/,function(e){
return r=e,"";
}),0==e.length?r:r+'<code class="'+t+'">'+e+"</code>";
})),e);
}
function _(e,t){
for(var r=e.toString();r.length<t;)r="0"+r;
return r;
}
function k(e,t){
for(var r="",s=0;t>s;s++)r+=" ";
return e.replace(/\t/g,r);
}
function C(e,t){
function r(e,t,r){
return e.substr(0,t)+i.substr(0,r)+e.substr(t+1,e.length);
}
for(var s=(n(e),"	"),i="",a=0;50>a;a++)i+="                    ";
return e=w(e,function(e){
if(-1==e.indexOf(s))return e;
for(var i=0;-1!=(i=e.indexOf(s));){
var n=t-i%t;
e=r(e,i,n);
}
return e;
});
}
function I(e){
var t=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi;
return 1==H.config.bloggerMode&&(e=e.replace(t,"\n")),1==H.config.stripBrs&&(e=e.replace(t,"")),
e;
}
function R(e){
return e.replace(/^\s+|\s+$/g,"");
}
function E(e){
for(var t=n(I(e)),r=(new Array,/^\s*/),s=1e3,i=0;i<t.length&&s>0;i++){
var a=t[i];
if(0!=R(a).length){
var o=r.exec(a);
if(null==o)return e;
s=Math.min(o[0].length,s);
}
}
if(s>0)for(var i=0;i<t.length;i++)t[i]=t[i].substr(s);
return t.join("\n");
}
function T(e,t){
return e.index<t.index?-1:e.index>t.index?1:e.length<t.length?-1:e.length>t.length?1:0;
}
function N(e,t){
function r(e){
return e[0];
}
for(var s=null,i=[],n=t.func?t.func:r;null!=(s=t.regex.exec(e));){
var a=n(s,t);
"string"==typeof a&&(a=[new H.Match(a,s.index,t.css)]),i=i.concat(a);
}
return i;
}
function P(e){
var t=/(.*)((&gt;|&lt;).*)/;
return e.replace(H.regexLib.url,function(e){
var r="",s=null;
return(s=t.exec(e))&&(e=s[1],r=s[2]),'<a href="'+e+'">'+e+"</a>"+r;
});
}
function A(){
for(var e=document.getElementsByTagName("script"),t=[],r=0;r<e.length;r++)"syntaxhighlighter"==e[r].type&&t.push(e[r]);
return t;
}
function D(e){
var t="<![CDATA[",r="]]>",s=R(e),i=!1,n=t.length,a=r.length;
0==s.indexOf(t)&&(s=s.substring(n),i=!0);
var o=s.length;
return s.indexOf(r)==o-a&&(s=s.substring(0,o-a),i=!0),i?s:e;
}
function O(e){
var r,i=e.target,n=u(i,".syntaxhighlighter"),a=u(i,".container"),l=document.createElement("textarea");
if(a&&n&&!g(a,"textarea")){
r=o(n.id),t(n,"source");
for(var c=a.childNodes,d=[],p=0;p<c.length;p++)d.push(c[p].innerText||c[p].textContent);
d=d.join("\r"),d=d.replace(/\u00a0/g," "),l.appendChild(document.createTextNode(d)),
a.appendChild(l),l.focus(),l.select(),b(l,"blur",function(){
l.parentNode.removeChild(l),s(n,"source");
});
}
}
var H={
defaults:{
"class-name":"",
"first-line":1,
"pad-line-numbers":!1,
highlight:!1,
title:null,
"smart-tabs":!0,
"tab-size":4,
gutter:!0,
toolbar:!0,
"quick-code":!0,
collapse:!1,
"auto-links":!1,
light:!1,
unindent:!0,
"html-script":!1
},
config:{
space:"&nbsp;",
useScriptTags:!0,
bloggerMode:!1,
stripBrs:!1,
tagName:"pre",
strings:{
expandSource:"expand source",
help:"?",
alert:"SyntaxHighlighter\n\n",
noBrush:"Can't find brush for: ",
brushNotHtmlScript:"Brush wasn't configured for html-script option: ",
aboutDialog:"@ABOUT@"
}
},
vars:{
discoveredBrushes:null,
highlighters:{}
},
brushes:{},
regexLib:{
multiLineCComments:/\/\*[\s\S]*?\*\//gm,
singleLineCComments:/\/\/.*$/gm,
singleLinePerlComments:/#.*$/gm,
doubleQuotedString:/"([^\\"\n]|\\.)*"/g,
singleQuotedString:/'([^\\'\n]|\\.)*'/g,
multiLineDoubleQuotedString:new r('"([^\\\\"]|\\\\.)*"',"gs"),
multiLineSingleQuotedString:new r("'([^\\\\']|\\\\.)*'","gs"),
xmlComments:/(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,
url:/\w+:\/\/[\w-.\/?%&=:@;#]*/g,
phpScriptTags:{
left:/(&lt;|<)\?(?:=|php)?/g,
right:/\?(&gt;|>)/g,
eof:!0
},
aspScriptTags:{
left:/(&lt;|<)%=?/g,
right:/%(&gt;|>)/g
},
scriptScriptTags:{
left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,
right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi
}
},
toolbar:{
getHtml:function(e){
function t(e,t){
return H.toolbar.getButtonHtml(e,t,H.config.strings[t]);
}
for(var r='<div class="toolbar">',s=H.toolbar.items,i=s.list,n=0;n<i.length;n++)r+=(s[i[n]].getHtml||t)(e,i[n]);
return r+="</div>";
},
getButtonHtml:function(e,t,r){
return'<span><a href="#" class="toolbar_item command_'+t+" "+t+'">'+r+"</a></span>";
},
handler:function(e){
function t(e){
var t=new RegExp(e+"_(\\w+)"),r=t.exec(s);
return r?r[1]:null;
}
var r=e.target,s=r.className||"",i=o(u(r,".syntaxhighlighter").id),n=t("command");
i&&n&&H.toolbar.items[n].execute(i),e.preventDefault();
},
items:{
list:["expandSource","help"],
expandSource:{
getHtml:function(e){
if(1!=e.getParam("collapse"))return"";
var t=e.getParam("title");
return H.toolbar.getButtonHtml(e,"expandSource",t?t:H.config.strings.expandSource);
},
execute:function(e){
var t=l(e.id);
s(t,"collapsed");
}
},
help:{
execute:function(){
var e=h("","_blank",500,250,"scrollbars=0"),t=e.document;
t.write(H.config.strings.aboutDialog),t.close(),e.focus();
}
}
}
},
findElements:function(e,t){
var r=t?[t]:i(document.getElementsByTagName(H.config.tagName)),s=H.config,n=[];
if(s.useScriptTags&&(r=r.concat(A())),0===r.length)return n;
for(var a=0;a<r.length;a++){
var o={
target:r[a],
params:m(e,S(r[a].className))
};
null!=o.params.brush&&n.push(o);
}
return n;
},
highlight:function(e,t){
var r=this.findElements(e,t),s="innerHTML",i=null,n=H.config;
if(0!==r.length)for(var a=0;a<r.length;a++){
var o,t=r[a],l=t.target,c=t.params,g=c.brush;
if(null!=g){
if("true"==c["html-script"]||1==H.defaults["html-script"])i=new H.HtmlScript(g),
g="htmlscript";else{
var u=y(g);
if(!u)continue;
i=new u;
}
o=l[s],n.useScriptTags&&(o=D(o)),""!=(l.title||"")&&(c.title=l.title),c.brush=g,
i.init(c),t=i.getDiv(o),""!=(l.id||"")&&(t.id=l.id);
var d=t.firstChild.firstChild;
d.className=t.firstChild.className,l.parentNode.replaceChild(d,l);
}
}
},
all:function(e){
b(window,"load",function(){
H.highlight(e);
});
}
};
return H.Match=function(e,t,r){
this.value=e,this.index=t,this.length=e.length,this.css=r,this.brushName=null;
},H.Match.prototype.toString=function(){
return this.value;
},H.HtmlScript=function(e){
function t(e,t){
for(var r=0;r<e.length;r++)e[r].index+=t;
}
function r(e){
for(var r,n=e.code,a=[],o=s.regexList,l=e.index+e.left.length,c=s.htmlScript,g=0;g<o.length;g++)r=N(n,o[g]),
t(r,l),a=a.concat(r);
null!=c.left&&null!=e.left&&(r=N(e.left,c.left),t(r,e.index),a=a.concat(r)),null!=c.right&&null!=e.right&&(r=N(e.right,c.right),
t(r,e.index+e[0].lastIndexOf(e.right)),a=a.concat(r));
for(var u=0;u<a.length;u++)a[u].brushName=i.brushName;
return a;
}
var s,i=y(e),n=new H.brushes.Xml,a=this,o="getDiv getHtml init".split(" ");
if(null!=i){
s=new i;
for(var l=0;l<o.length;l++)(function(){
var e=o[l];
a[e]=function(){
return n[e].apply(n,arguments);
};
})();
return null==s.htmlScript?void x(H.config.strings.brushNotHtmlScript+e):void n.regexList.push({
regex:s.htmlScript.code,
func:r
});
}
},H.Highlighter=function(){},H.Highlighter.prototype={
getParam:function(e,t){
var r=this.params[e];
return f(null==r?t:r);
},
create:function(e){
return document.createElement(e);
},
findMatches:function(e,t){
var r=[];
if(null!=e)for(var s=0;s<e.length;s++)"object"==typeof e[s]&&(r=r.concat(N(t,e[s])));
return this.removeNestedMatches(r.sort(T));
},
removeNestedMatches:function(e){
for(var t=0;t<e.length;t++)if(null!==e[t])for(var r=e[t],s=r.index+r.length,i=t+1;i<e.length&&null!==e[t];i++){
var n=e[i];
if(null!==n){
if(n.index>s)break;
n.index==r.index&&n.length>r.length?e[t]=null:n.index>=r.index&&n.index<s&&(e[i]=null);
}
}
return e;
},
figureOutLineNumbers:function(e){
var t=[],r=parseInt(this.getParam("first-line"));
return w(e,function(e,s){
t.push(s+r);
}),t;
},
isLineHighlighted:function(e){
var t=this.getParam("highlight",[]);
return"object"!=typeof t&&null==t.push&&(t=[t]),-1!=d(t,e.toString());
},
getLineHtml:function(e,t,r){
var s=["line","number"+t,"index"+e,"alt"+(t%2==0?1:2).toString()];
return this.isLineHighlighted(t)&&s.push("highlighted"),0==t&&s.push("break"),'<div class="'+s.join(" ")+'">'+r+"</div>";
},
getLineNumbersHtml:function(e,t){
var r="",s=n(e).length,i=parseInt(this.getParam("first-line")),a=this.getParam("pad-line-numbers");
1==a?a=(i+s-1).toString().length:1==isNaN(a)&&(a=0);
for(var o=0;s>o;o++){
var l=t?t[o]:i+o,e=0==l?H.config.space:_(l,a);
r+=this.getLineHtml(o,l,e);
}
return r;
},
getCodeLinesHtml:function(e,t){
e=R(e);
for(var r=n(e),s=(this.getParam("pad-line-numbers"),parseInt(this.getParam("first-line"))),e="",i=this.getParam("brush"),a=0;a<r.length;a++){
var o=r[a],l=/^(&nbsp;|\s)+/.exec(o),c=null,g=t?t[a]:s+a;
null!=l&&(c=l[0].toString(),o=o.substr(c.length),c=c.replace(" ",H.config.space)),
o=R(o),0==o.length&&(o=H.config.space),e+=this.getLineHtml(a,g,(null!=c?'<code class="'+i+' spaces">'+c+"</code>":"")+o);
}
return e;
},
getTitleHtml:function(e){
return e?"<caption>"+e+"</caption>":"";
},
getMatchesHtml:function(e,t){
function r(e){
var t=e?e.brushName||n:n;
return t?t+" ":"";
}
for(var s=0,i="",n=this.getParam("brush",""),a=0;a<t.length;a++){
var o,l=t[a];
null!==l&&0!==l.length&&(o=r(l),i+=L(e.substr(s,l.index-s),o+"plain")+L(l.value,o+l.css),
s=l.index+l.length+(l.offset||0));
}
return i+=L(e.substr(s),r()+"plain");
},
getHtml:function(e){
var t,r,s,i="",n=["syntaxhighlighter"];
return 1==this.getParam("light")&&(this.params.toolbar=this.params.gutter=!1),className="syntaxhighlighter",
1==this.getParam("collapse")&&n.push("collapsed"),0==(gutter=this.getParam("gutter"))&&n.push("nogutter"),
n.push(this.getParam("class-name")),n.push(this.getParam("brush")),e=v(e).replace(/\r/g," "),
t=this.getParam("tab-size"),e=1==this.getParam("smart-tabs")?C(e,t):k(e,t),this.getParam("unindent")&&(e=E(e)),
gutter&&(s=this.figureOutLineNumbers(e)),r=this.findMatches(this.regexList,e),i=this.getMatchesHtml(e,r),
i=this.getCodeLinesHtml(i,s),this.getParam("auto-links")&&(i=P(i)),"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.match(/MSIE/)&&n.push("ie"),
i='<div id="'+a(this.id)+'" class="'+n.join(" ")+'">'+(this.getParam("toolbar")?H.toolbar.getHtml(this):"")+'<table border="0" cellpadding="0" cellspacing="0">'+this.getTitleHtml(this.getParam("title"))+"<tbody><tr>"+(gutter?'<td class="gutter">'+this.getLineNumbersHtml(e)+"</td>":"")+'<td class="code"><div class="container">'+i+"</div></td></tr></tbody></table></div>";
},
getDiv:function(e){
null===e&&(e=""),this.code=e;
var t=this.create("div");
return t.innerHTML=this.getHtml(e),this.getParam("toolbar")&&b(g(t,".toolbar"),"click",H.toolbar.handler),
this.getParam("quick-code")&&b(g(t,".code"),"dblclick",O),t;
},
init:function(e){
this.id=p(),c(this),this.params=m(H.defaults,e||{}),1==this.getParam("light")&&(this.params.toolbar=this.params.gutter=!1);
},
getKeywords:function(e){
return e=e.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"|"),"\\b(?:"+e+")\\b";
},
forHtmlScript:function(e){
var t={
end:e.right.source
};
e.eof&&(t.end="(?:(?:"+t.end+")|$)"),this.htmlScript={
left:{
regex:e.left,
css:"script"
},
right:{
regex:e.right,
css:"script"
},
code:new r("(?<left>"+e.left.source+")(?<code>.*?)(?<right>"+t.end+")","sgi")
};
}
},H;
}();
return"undefined"!=typeof t?t.SyntaxHighlighter=s:null,function(){
function e(){
var e="class interface function package",t="-Infinity ...rest Array as AS3 Boolean break case catch const continue Date decodeURI decodeURIComponent default delete do dynamic each else encodeURI encodeURIComponent escape extends false final finally flash_proxy for get if implements import in include Infinity instanceof int internal is isFinite isNaN isXMLName label namespace NaN native new null Null Number Object object_proxy override parseFloat parseInt private protected public return set static String super switch this throw true try typeof uint undefined unescape use void while with";
this.regexList=[{
regex:s.regexLib.singleLineCComments,
css:"comments"
},{
regex:s.regexLib.multiLineCComments,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,
css:"value"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"color3"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"keyword"
},{
regex:new RegExp("var","gm"),
css:"variable"
},{
regex:new RegExp("trace","gm"),
css:"color1"
}],this.forHtmlScript(s.regexLib.scriptScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["actionscript3","as3"],s.brushes.AS3=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="after before beginning continue copy each end every from return get global in local named of set some that the then times to where whose with without",t="first second third fourth fifth sixth seventh eighth ninth tenth last front back middle",r="activate add alias AppleScript ask attachment boolean class constant delete duplicate empty exists false id integer list make message modal modified new no paragraph pi properties quit real record remove rest result reveal reverse run running save string true word yes";
this.regexList=[{
regex:/(--|#).*$/gm,
css:"comments"
},{
regex:/\(\*(?:[\s\S]*?\(\*[\s\S]*?\*\))*[\s\S]*?\*\)/gm,
css:"comments"
},{
regex:/"[\s\S]*?"/gm,
css:"string"
},{
regex:/(?:,|:|¬|'s\b|\(|\)|\{|\}|«|\b\w*»)/g,
css:"color1"
},{
regex:/(-)?(\d)+(\.(\d)?)?(E\+(\d)+)?/g,
css:"color1"
},{
regex:/(?:&(amp;|gt;|lt;)?|=|� |>|<|≥|>=|≤|<=|\*|\+|-|\/|÷|\^)/g,
css:"color2"
},{
regex:/\b(?:and|as|div|mod|not|or|return(?!\s&)(ing)?|equals|(is(n't| not)? )?equal( to)?|does(n't| not) equal|(is(n't| not)? )?(greater|less) than( or equal( to)?)?|(comes|does(n't| not) come) (after|before)|is(n't| not)?( in)? (back|front) of|is(n't| not)? behind|is(n't| not)?( (in|contained by))?|does(n't| not) contain|contain(s)?|(start|begin|end)(s)? with|((but|end) )?(consider|ignor)ing|prop(erty)?|(a )?ref(erence)?( to)?|repeat (until|while|with)|((end|exit) )?repeat|((else|end) )?if|else|(end )?(script|tell|try)|(on )?error|(put )?into|(of )?(it|me)|its|my|with (timeout( of)?|transaction)|end (timeout|transaction))\b/g,
css:"keyword"
},{
regex:/\b\d+(st|nd|rd|th)\b/g,
css:"keyword"
},{
regex:/\b(?:about|above|against|around|at|below|beneath|beside|between|by|(apart|aside) from|(instead|out) of|into|on(to)?|over|since|thr(ough|u)|under)\b/g,
css:"color3"
},{
regex:/\b(?:adding folder items to|after receiving|choose( ((remote )?application|color|folder|from list|URL))?|clipboard info|set the clipboard to|(the )?clipboard|entire contents|display(ing| (alert|dialog|mode))?|document( (edited|file|nib name))?|file( (name|type))?|(info )?for|giving up after|(name )?extension|quoted form|return(ed)?|second(?! item)(s)?|list (disks|folder)|text item(s| delimiters)?|(Unicode )?text|(disk )?item(s)?|((current|list) )?view|((container|key) )?window|with (data|icon( (caution|note|stop))?|parameter(s)?|prompt|properties|seed|title)|case|diacriticals|hyphens|numeric strings|punctuation|white space|folder creation|application(s( folder)?| (processes|scripts position|support))?|((desktop )?(pictures )?|(documents|downloads|favorites|home|keychain|library|movies|music|public|scripts|sites|system|users|utilities|workflows) )folder|desktop|Folder Action scripts|font(s| panel)?|help|internet plugins|modem scripts|(system )?preferences|printer descriptions|scripting (additions|components)|shared (documents|libraries)|startup (disk|items)|temporary items|trash|on server|in AppleTalk zone|((as|long|short) )?user name|user (ID|locale)|(with )?password|in (bundle( with identifier)?|directory)|(close|open for) access|read|write( permission)?|(g|s)et eof|using( delimiters)?|starting at|default (answer|button|color|country code|entr(y|ies)|identifiers|items|name|location|script editor)|hidden( answer)?|open(ed| (location|untitled))?|error (handling|reporting)|(do( shell)?|load|run|store) script|administrator privileges|altering line endings|get volume settings|(alert|boot|input|mount|output|set) volume|output muted|(fax|random )?number|round(ing)?|up|down|toward zero|to nearest|as taught in school|system (attribute|info)|((AppleScript( Studio)?|system) )?version|(home )?directory|(IPv4|primary Ethernet) address|CPU (type|speed)|physical memory|time (stamp|to GMT)|replacing|ASCII (character|number)|localized string|from table|offset|summarize|beep|delay|say|(empty|multiple) selections allowed|(of|preferred) type|invisibles|showing( package contents)?|editable URL|(File|FTP|News|Media|Web) [Ss]ervers|Telnet hosts|Directory services|Remote applications|waiting until completion|saving( (in|to))?|path (for|to( (((current|frontmost) )?application|resource))?)|POSIX (file|path)|(background|RGB) color|(OK|cancel) button name|cancel button|button(s)?|cubic ((centi)?met(re|er)s|yards|feet|inches)|square ((kilo)?met(re|er)s|miles|yards|feet)|(centi|kilo)?met(re|er)s|miles|yards|feet|inches|lit(re|er)s|gallons|quarts|(kilo)?grams|ounces|pounds|degrees (Celsius|Fahrenheit|Kelvin)|print( (dialog|settings))?|clos(e(able)?|ing)|(de)?miniaturized|miniaturizable|zoom(ed|able)|attribute run|action (method|property|title)|phone|email|((start|end)ing|home) page|((birth|creation|current|custom|modification) )?date|((((phonetic )?(first|last|middle))|computer|host|maiden|related) |nick)?name|aim|icq|jabber|msn|yahoo|address(es)?|save addressbook|should enable action|city|country( code)?|formatte(r|d address)|(palette )?label|state|street|zip|AIM [Hh]andle(s)?|my card|select(ion| all)?|unsaved|(alpha )?value|entr(y|ies)|group|(ICQ|Jabber|MSN) handle|person|people|company|department|icon image|job title|note|organization|suffix|vcard|url|copies|collating|pages (across|down)|request print time|target( printer)?|((GUI Scripting|Script menu) )?enabled|show Computer scripts|(de)?activated|awake from nib|became (key|main)|call method|of (class|object)|center|clicked toolbar item|closed|for document|exposed|(can )?hide|idle|keyboard (down|up)|event( (number|type))?|launch(ed)?|load (image|movie|nib|sound)|owner|log|mouse (down|dragged|entered|exited|moved|up)|move|column|localization|resource|script|register|drag (info|types)|resigned (active|key|main)|resiz(e(d)?|able)|right mouse (down|dragged|up)|scroll wheel|(at )?index|should (close|open( untitled)?|quit( after last window closed)?|zoom)|((proposed|screen) )?bounds|show(n)?|behind|in front of|size (mode|to fit)|update(d| toolbar item)?|was (hidden|miniaturized)|will (become active|close|finish launching|hide|miniaturize|move|open|quit|(resign )?active|((maximum|minimum|proposed) )?size|show|zoom)|bundle|data source|movie|pasteboard|sound|tool(bar| tip)|(color|open|save) panel|coordinate system|frontmost|main( (bundle|menu|window))?|((services|(excluded from )?windows) )?menu|((executable|frameworks|resource|scripts|shared (frameworks|support)) )?path|(selected item )?identifier|data|content(s| view)?|character(s)?|click count|(command|control|option|shift) key down|context|delta (x|y|z)|key( code)?|location|pressure|unmodified characters|types|(first )?responder|playing|(allowed|selectable) identifiers|allows customization|(auto saves )?configuration|visible|image( name)?|menu form representation|tag|user(-| )defaults|associated file name|(auto|needs) display|current field editor|floating|has (resize indicator|shadow)|hides when deactivated|level|minimized (image|title)|opaque|position|release when closed|sheet|title(d)?)\b/g,
css:"color3"
},{
regex:new RegExp(this.getKeywords(r),"gm"),
css:"color3"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"keyword"
}];
}
e.prototype=new s.Highlighter,e.aliases=["applescript"],s.brushes.AppleScript=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="if fi then elif else for do done until while break continue case esac function return in eq ne ge le",t="alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chrootcksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig import install join kill less let ln local locate logname logout look lpc lpr lprint lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir vi watch wc whereis which who whoami Wget xargs yes";
this.regexList=[{
regex:/^#!.*$/gm,
css:"preprocessor bold"
},{
regex:/\/[\w-\/]+/gm,
css:"plain"
},{
regex:s.regexLib.singleLinePerlComments,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"functions"
}];
}
e.prototype=new s.Highlighter,e.aliases=["bash","shell","sh"],s.brushes.Bash=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="Abs ACos AddSOAPRequestHeader AddSOAPResponseHeader AjaxLink AjaxOnLoad ArrayAppend ArrayAvg ArrayClear ArrayDeleteAt ArrayInsertAt ArrayIsDefined ArrayIsEmpty ArrayLen ArrayMax ArrayMin ArraySet ArraySort ArraySum ArraySwap ArrayToList Asc ASin Atn BinaryDecode BinaryEncode BitAnd BitMaskClear BitMaskRead BitMaskSet BitNot BitOr BitSHLN BitSHRN BitXor Ceiling CharsetDecode CharsetEncode Chr CJustify Compare CompareNoCase Cos CreateDate CreateDateTime CreateObject CreateODBCDate CreateODBCDateTime CreateODBCTime CreateTime CreateTimeSpan CreateUUID DateAdd DateCompare DateConvert DateDiff DateFormat DatePart Day DayOfWeek DayOfWeekAsString DayOfYear DaysInMonth DaysInYear DE DecimalFormat DecrementValue Decrypt DecryptBinary DeleteClientVariable DeserializeJSON DirectoryExists DollarFormat DotNetToCFType Duplicate Encrypt EncryptBinary Evaluate Exp ExpandPath FileClose FileCopy FileDelete FileExists FileIsEOF FileMove FileOpen FileRead FileReadBinary FileReadLine FileSetAccessMode FileSetAttribute FileSetLastModified FileWrite Find FindNoCase FindOneOf FirstDayOfMonth Fix FormatBaseN GenerateSecretKey GetAuthUser GetBaseTagData GetBaseTagList GetBaseTemplatePath GetClientVariablesList GetComponentMetaData GetContextRoot GetCurrentTemplatePath GetDirectoryFromPath GetEncoding GetException GetFileFromPath GetFileInfo GetFunctionList GetGatewayHelper GetHttpRequestData GetHttpTimeString GetK2ServerDocCount GetK2ServerDocCountLimit GetLocale GetLocaleDisplayName GetLocalHostIP GetMetaData GetMetricData GetPageContext GetPrinterInfo GetProfileSections GetProfileString GetReadableImageFormats GetSOAPRequest GetSOAPRequestHeader GetSOAPResponse GetSOAPResponseHeader GetTempDirectory GetTempFile GetTemplatePath GetTickCount GetTimeZoneInfo GetToken GetUserRoles GetWriteableImageFormats Hash Hour HTMLCodeFormat HTMLEditFormat IIf ImageAddBorder ImageBlur ImageClearRect ImageCopy ImageCrop ImageDrawArc ImageDrawBeveledRect ImageDrawCubicCurve ImageDrawLine ImageDrawLines ImageDrawOval ImageDrawPoint ImageDrawQuadraticCurve ImageDrawRect ImageDrawRoundRect ImageDrawText ImageFlip ImageGetBlob ImageGetBufferedImage ImageGetEXIFTag ImageGetHeight ImageGetIPTCTag ImageGetWidth ImageGrayscale ImageInfo ImageNegative ImageNew ImageOverlay ImagePaste ImageRead ImageReadBase64 ImageResize ImageRotate ImageRotateDrawingAxis ImageScaleToFit ImageSetAntialiasing ImageSetBackgroundColor ImageSetDrawingColor ImageSetDrawingStroke ImageSetDrawingTransparency ImageSharpen ImageShear ImageShearDrawingAxis ImageTranslate ImageTranslateDrawingAxis ImageWrite ImageWriteBase64 ImageXORDrawingMode IncrementValue InputBaseN Insert Int IsArray IsBinary IsBoolean IsCustomFunction IsDate IsDDX IsDebugMode IsDefined IsImage IsImageFile IsInstanceOf IsJSON IsLeapYear IsLocalHost IsNumeric IsNumericDate IsObject IsPDFFile IsPDFObject IsQuery IsSimpleValue IsSOAPRequest IsStruct IsUserInAnyRole IsUserInRole IsUserLoggedIn IsValid IsWDDX IsXML IsXmlAttribute IsXmlDoc IsXmlElem IsXmlNode IsXmlRoot JavaCast JSStringFormat LCase Left Len ListAppend ListChangeDelims ListContains ListContainsNoCase ListDeleteAt ListFind ListFindNoCase ListFirst ListGetAt ListInsertAt ListLast ListLen ListPrepend ListQualify ListRest ListSetAt ListSort ListToArray ListValueCount ListValueCountNoCase LJustify Log Log10 LSCurrencyFormat LSDateFormat LSEuroCurrencyFormat LSIsCurrency LSIsDate LSIsNumeric LSNumberFormat LSParseCurrency LSParseDateTime LSParseEuroCurrency LSParseNumber LSTimeFormat LTrim Max Mid Min Minute Month MonthAsString Now NumberFormat ParagraphFormat ParseDateTime Pi PrecisionEvaluate PreserveSingleQuotes Quarter QueryAddColumn QueryAddRow QueryConvertForGrid QueryNew QuerySetCell QuotedValueList Rand Randomize RandRange REFind REFindNoCase ReleaseComObject REMatch REMatchNoCase RemoveChars RepeatString Replace ReplaceList ReplaceNoCase REReplace REReplaceNoCase Reverse Right RJustify Round RTrim Second SendGatewayMessage SerializeJSON SetEncoding SetLocale SetProfileString SetVariable Sgn Sin Sleep SpanExcluding SpanIncluding Sqr StripCR StructAppend StructClear StructCopy StructCount StructDelete StructFind StructFindKey StructFindValue StructGet StructInsert StructIsEmpty StructKeyArray StructKeyExists StructKeyList StructKeyList StructNew StructSort StructUpdate Tan TimeFormat ToBase64 ToBinary ToScript ToString Trim UCase URLDecode URLEncodedFormat URLSessionFormat Val ValueList VerifyClient Week Wrap Wrap WriteOutput XmlChildPos XmlElemNew XmlFormat XmlGetNodeType XmlNew XmlParse XmlSearch XmlTransform XmlValidate Year YesNoFormat",t="cfabort cfajaximport cfajaxproxy cfapplet cfapplication cfargument cfassociate cfbreak cfcache cfcalendar cfcase cfcatch cfchart cfchartdata cfchartseries cfcol cfcollection cfcomponent cfcontent cfcookie cfdbinfo cfdefaultcase cfdirectory cfdiv cfdocument cfdocumentitem cfdocumentsection cfdump cfelse cfelseif cferror cfexchangecalendar cfexchangeconnection cfexchangecontact cfexchangefilter cfexchangemail cfexchangetask cfexecute cfexit cffeed cffile cfflush cfform cfformgroup cfformitem cfftp cffunction cfgrid cfgridcolumn cfgridrow cfgridupdate cfheader cfhtmlhead cfhttp cfhttpparam cfif cfimage cfimport cfinclude cfindex cfinput cfinsert cfinterface cfinvoke cfinvokeargument cflayout cflayoutarea cfldap cflocation cflock cflog cflogin cfloginuser cflogout cfloop cfmail cfmailparam cfmailpart cfmenu cfmenuitem cfmodule cfNTauthenticate cfobject cfobjectcache cfoutput cfparam cfpdf cfpdfform cfpdfformparam cfpdfparam cfpdfsubform cfpod cfpop cfpresentation cfpresentationslide cfpresenter cfprint cfprocessingdirective cfprocparam cfprocresult cfproperty cfquery cfqueryparam cfregistry cfreport cfreportparam cfrethrow cfreturn cfsavecontent cfschedule cfscript cfsearch cfselect cfset cfsetting cfsilent cfslider cfsprydataset cfstoredproc cfswitch cftable cftextarea cfthread cfthrow cftimer cftooltip cftrace cftransaction cftree cftreeitem cftry cfupdate cfwddx cfwindow cfxml cfzip cfzipparam",r="all and any between cross in join like not null or outer some";
this.regexList=[{
regex:new RegExp("--(.*)$","gm"),
css:"comments"
},{
regex:s.regexLib.xmlComments,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:new RegExp(this.getKeywords(e),"gmi"),
css:"functions"
},{
regex:new RegExp(this.getKeywords(r),"gmi"),
css:"color1"
},{
regex:new RegExp(this.getKeywords(t),"gmi"),
css:"keyword"
}];
}
e.prototype=new s.Highlighter,e.aliases=["coldfusion","cf"],s.brushes.ColdFusion=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t __wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler sig_atomic_t size_t _stat __stat64 _stati64 terminate_function time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf va_list wchar_t wctrans_t wctype_t wint_t signed",t="auto break case catch class const decltype __finally __exception __try const_cast continue private public protected __declspec default delete deprecated dllexport dllimport do dynamic_cast else enum explicit extern if for friend goto inline mutable naked namespace new noinline noreturn nothrow register reinterpret_cast return selectany sizeof static static_cast struct switch template this thread throw true false try typedef typeid typename union using uuid virtual void volatile whcar_t while",r="assert isalnum isalpha iscntrl isdigit isgraph islower isprintispunct isspace isupper isxdigit tolower toupper errno localeconv setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell fwrite getc getchar gets perror printf putc putchar puts remove rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs mbtowc qsort rand realloc srand strtod strtol strtoul system wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr strcmp strcoll strcpy strcspn strerror strlen strncat strncmp strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime clock ctime difftime gmtime localtime mktime strftime time";
this.regexList=[{
regex:s.regexLib.singleLineCComments,
css:"comments"
},{
regex:s.regexLib.multiLineCComments,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/^ *#.*/gm,
css:"preprocessor"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"color1 bold"
},{
regex:new RegExp(this.getKeywords(r),"gm"),
css:"functions bold"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"keyword bold"
}];
}
e.prototype=new s.Highlighter,e.aliases=["cpp","c"],s.brushes.Cpp=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
function e(e){
var t=0==e[0].indexOf("///")?"color1":"comments";
return[new s.Match(e[0],e.index,t)];
}
var t="abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit volatile extern false finally fixed float for foreach get goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed set short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void while var from group by into select let where orderby join on equals ascending descending";
this.regexList=[{
regex:s.regexLib.singleLineCComments,
func:e
},{
regex:s.regexLib.multiLineCComments,
css:"comments"
},{
regex:/@"(?:[^"]|"")*"/g,
css:"string"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/^\s*#.*/gm,
css:"preprocessor"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"keyword"
},{
regex:/\bpartial(?=\s+(?:class|interface|struct)\b)/g,
css:"keyword"
},{
regex:/\byield(?=\s+(?:return|break)\b)/g,
css:"keyword"
}],this.forHtmlScript(s.regexLib.aspScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["c#","c-sharp","csharp"],s.brushes.CSharp=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
function e(e){
return"\\b([a-z_]|)"+e.replace(/ /g,"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b";
}
function t(e){
return"\\b"+e.replace(/ /g,"(?!-)(?!:)\\b|\\b()")+":\\b";
}
var r="ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index",i="above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow",n="[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif";
this.regexList=[{
regex:s.regexLib.multiLineCComments,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/\#[a-fA-F0-9]{3,6}/g,
css:"value"
},{
regex:/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,
css:"value"
},{
regex:/!important/g,
css:"color3"
},{
regex:new RegExp(e(r),"gm"),
css:"keyword"
},{
regex:new RegExp(t(i),"g"),
css:"value"
},{
regex:new RegExp(this.getKeywords(n),"g"),
css:"color1"
}],this.forHtmlScript({
left:/(&lt;|<)\s*style.*?(&gt;|>)/gi,
right:/(&lt;|<)\/\s*style\s*(&gt;|>)/gi
});
}
e.prototype=new s.Highlighter,e.aliases=["css"],s.brushes.CSS=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="abs addr and ansichar ansistring array as asm begin boolean byte cardinal case char class comp const constructor currency destructor div do double downto else end except exports extended false file finalization finally for function goto if implementation in inherited int64 initialization integer interface is label library longint longword mod nil not object of on or packed pansichar pansistring pchar pcurrency pdatetime pextended pint64 pointer private procedure program property pshortstring pstring pvariant pwidechar pwidestring protected public published raise real real48 record repeat set shl shortint shortstring shr single smallint string then threadvar to true try type unit until uses val var varirnt while widechar widestring with word write writeln xor";
this.regexList=[{
regex:/\(\*[\s\S]*?\*\)/gm,
css:"comments"
},{
regex:/{(?!\$)[\s\S]*?}/gm,
css:"comments"
},{
regex:s.regexLib.singleLineCComments,
css:"comments"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/\{\$[a-zA-Z]+ .+\}/g,
css:"color1"
},{
regex:/\b[\d\.]+\b/g,
css:"value"
},{
regex:/\$[a-zA-Z0-9]+\b/g,
css:"value"
},{
regex:new RegExp(this.getKeywords(e),"gmi"),
css:"keyword"
}];
}
e.prototype=new s.Highlighter,e.aliases=["delphi","pascal","pas"],s.brushes.Delphi=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
this.regexList=[{
regex:/^\+\+\+ .*$/gm,
css:"color2"
},{
regex:/^\-\-\- .*$/gm,
css:"color2"
},{
regex:/^\s.*$/gm,
css:"color1"
},{
regex:/^@@.*@@.*$/gm,
css:"variable"
},{
regex:/^\+.*$/gm,
css:"string"
},{
regex:/^\-.*$/gm,
css:"color3"
}];
}
e.prototype=new s.Highlighter,e.aliases=["diff","patch"],s.brushes.Diff=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="after and andalso band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse query receive rem try when xor module export import define";
this.regexList=[{
regex:new RegExp("[A-Z][A-Za-z0-9_]+","g"),
css:"constants"
},{
regex:new RegExp("\\%.+","gm"),
css:"comments"
},{
regex:new RegExp("\\?[A-Za-z0-9_]+","g"),
css:"preprocessor"
},{
regex:new RegExp("[a-z0-9_]+:[a-z0-9_]+","g"),
css:"functions"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
}];
}
e.prototype=new s.Highlighter,e.aliases=["erl","erlang"],s.brushes.Erland=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="as assert break case catch class continue def default do else extends finally if in implements import instanceof interface new package property return switch throw throws try while public protected private static",t="void boolean byte char short int long float double",r="null",i="allProperties count get size collect each eachProperty eachPropertyName eachWithIndex find findAll findIndexOf grep inject max min reverseEach sort asImmutable asSynchronized flatten intersect join pop reverse subMap toList padRight padLeft contains eachMatch toCharacter toLong toUrl tokenize eachFile eachFileRecurse eachB yte eachLine readBytes readLine getText splitEachLine withReader append encodeBase64 decodeBase64 filterLine transformChar transformLine withOutputStream withPrintWriter withStream withStreams withWriter withWriterAppend write writeLine dump inspect invokeMethod print println step times upto use waitForOrKill getText";
this.regexList=[{
regex:s.regexLib.singleLineCComments,
css:"comments"
},{
regex:s.regexLib.multiLineCComments,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/""".*"""/g,
css:"string"
},{
regex:new RegExp("\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b","gi"),
css:"value"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"color1"
},{
regex:new RegExp(this.getKeywords(r),"gm"),
css:"constants"
},{
regex:new RegExp(this.getKeywords(i),"gm"),
css:"functions"
}],this.forHtmlScript(s.regexLib.aspScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["groovy"],s.brushes.Groovy=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="abstract assert boolean break byte case catch char class const continue default do double else enum extends false final finally float for goto if implements import instanceof int interface long native new null package private protected public return short static strictfp super switch synchronized this throw throws true transient try void volatile while";
this.regexList=[{
regex:s.regexLib.singleLineCComments,
css:"comments"
},{
regex:/\/\*([^\*][\s\S]*)?\*\//gm,
css:"comments"
},{
regex:/\/\*(?!\*\/)\*[\s\S]*?\*\//gm,
css:"preprocessor"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,
css:"value"
},{
regex:/(?!\@interface\b)\@[\$\w]+\b/g,
css:"color1"
},{
regex:/\@interface\b/g,
css:"color2"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
}],this.forHtmlScript({
left:/(&lt;|<)%[@!=]?/g,
right:/%(&gt;|>)/g
});
}
e.prototype=new s.Highlighter,e.aliases=["java"],s.brushes.Java=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="Boolean Byte Character Double Duration Float Integer Long Number Short String Void",t="abstract after and as assert at before bind bound break catch class continue def delete else exclusive extends false finally first for from function if import in indexof init insert instanceof into inverse last lazy mixin mod nativearray new not null on or override package postinit protected public public-init public-read replace return reverse sizeof step super then this throw true try tween typeof var where while with attribute let private readonly static trigger";
this.regexList=[{
regex:s.regexLib.singleLineCComments,
css:"comments"
},{
regex:s.regexLib.multiLineCComments,
css:"comments"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:/(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi,
css:"color2"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"variable"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"keyword"
}],this.forHtmlScript(s.regexLib.aspScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["jfx","javafx"],s.brushes.JavaFX=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with",t=s.regexLib;
this.regexList=[{
regex:t.multiLineDoubleQuotedString,
css:"string"
},{
regex:t.multiLineSingleQuotedString,
css:"string"
},{
regex:t.singleLineCComments,
css:"comments"
},{
regex:t.multiLineCComments,
css:"comments"
},{
regex:/\s*#.*/gm,
css:"preprocessor"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
}],this.forHtmlScript(t.scriptScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["js","jscript","javascript"],s.brushes.JScript=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr chroot close closedir connect cos crypt defined delete each endgrent endhostent endnetent endprotoent endpwent endservent eof exec exists exp fcntl fileno flock fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getppid getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt glob gmtime grep hex index int ioctl join keys kill lc lcfirst length link listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd oct open opendir ord pack pipe pop pos print printf prototype push quotemeta rand read readdir readline readlink readpipe recv rename reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat study substr symlink syscall sysopen sysread sysseek system syswrite tell telldir time times tr truncate uc ucfirst umask undef unlink unpack unshift utime values vec wait waitpid warn write say",t="bless caller continue dbmclose dbmopen die do dump else elsif eval exit for foreach goto if import last local my next no our package redo ref require return sub tie tied unless untie until use wantarray while given when default try catch finally has extends with before after around override augment";
this.regexList=[{
regex:/(<<|&lt;&lt;)((\w+)|(['"])(.+?)\4)[\s\S]+?\n\3\5\n/g,
css:"string"
},{
regex:/#.*$/gm,
css:"comments"
},{
regex:/^#!.*\n/g,
css:"preprocessor"
},{
regex:/-?\w+(?=\s*=(>|&gt;))/g,
css:"string"
},{
regex:/\bq[qwxr]?\([\s\S]*?\)/g,
css:"string"
},{
regex:/\bq[qwxr]?\{[\s\S]*?\}/g,
css:"string"
},{
regex:/\bq[qwxr]?\[[\s\S]*?\]/g,
css:"string"
},{
regex:/\bq[qwxr]?(<|&lt;)[\s\S]*?(>|&gt;)/g,
css:"string"
},{
regex:/\bq[qwxr]?([^\w({<[])[\s\S]*?\1/g,
css:"string"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/(?:&amp;|[$@%*]|\$#)[a-zA-Z_](\w+|::)*/g,
css:"variable"
},{
regex:/\b__(?:END|DATA)__\b[\s\S]*$/g,
css:"comments"
},{
regex:/(^|\n)=\w[\s\S]*?(\n=cut\s*\n|$)/g,
css:"comments"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"functions"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"keyword"
}],this.forHtmlScript(s.regexLib.phpScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["perl","Perl","pl"],s.brushes.Perl=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="abs acos acosh addcslashes addslashes array_change_key_case array_chunk array_combine array_count_values array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill array_filter array_flip array_intersect array_intersect_assoc array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map array_merge array_merge_recursive array_multisort array_pad array_pop array_product array_push array_rand array_reduce array_reverse array_search array_shift array_slice array_splice array_sum array_udiff array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc array_uintersect_uassoc array_unique array_unshift array_values array_walk array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists closedir closelog copy cos cosh count count_chars date decbin dechex decoct deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime strtoupper strtr strval substr substr_compare",t="abstract and array as break case catch cfunction class clone const continue declare default die do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements include include_once interface instanceof insteadof namespace new old_function or private protected public return require require_once static switch trait throw try use var while xor ",r="__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__";
this.regexList=[{
regex:s.regexLib.singleLineCComments,
css:"comments"
},{
regex:s.regexLib.multiLineCComments,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/\$\w+/g,
css:"variable"
},{
regex:new RegExp(this.getKeywords(e),"gmi"),
css:"functions"
},{
regex:new RegExp(this.getKeywords(r),"gmi"),
css:"constants"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"keyword"
}],this.forHtmlScript(s.regexLib.phpScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["php"],s.brushes.Php=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){}
e.prototype=new s.Highlighter,e.aliases=["text","plain"],s.brushes.Plain=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="while validateset validaterange validatepattern validatelength validatecount until trap switch return ref process param parameter in if global: function foreach for finally filter end elseif else dynamicparam do default continue cmdletbinding break begin alias \\? % #script #private #local #global mandatory parametersetname position valuefrompipeline valuefrompipelinebypropertyname valuefromremainingarguments helpmessage ",t=" and as band bnot bor bxor casesensitive ccontains ceq cge cgt cle clike clt cmatch cne cnotcontains cnotlike cnotmatch contains creplace eq exact f file ge gt icontains ieq ige igt ile ilike ilt imatch ine inotcontains inotlike inotmatch ireplace is isnot le like lt match ne not notcontains notlike notmatch or regex replace wildcard",r="write where wait use update unregister undo trace test tee take suspend stop start split sort skip show set send select scroll resume restore restart resolve resize reset rename remove register receive read push pop ping out new move measure limit join invoke import group get format foreach export expand exit enter enable disconnect disable debug cxnew copy convertto convertfrom convert connect complete compare clear checkpoint aggregate add",i=" component description example externalhelp forwardhelpcategory forwardhelptargetname forwardhelptargetname functionality inputs link notes outputs parameter remotehelprunspace role synopsis";
this.regexList=[{
regex:new RegExp("^\\s*#[#\\s]*\\.("+this.getKeywords(i)+").*$","gim"),
css:"preprocessor help bold"
},{
regex:s.regexLib.singleLinePerlComments,
css:"comments"
},{
regex:/(&lt;|<)#[\s\S]*?#(&gt;|>)/gm,
css:"comments here"
},{
regex:new RegExp('@"\\n[\\s\\S]*?\\n"@',"gm"),
css:"script string here"
},{
regex:new RegExp("@'\\n[\\s\\S]*?\\n'@","gm"),
css:"script string single here"
},{
regex:new RegExp('"(?:\\$\\([^\\)]*\\)|[^"]|`"|"")*[^`]"',"g"),
css:"string"
},{
regex:new RegExp("'(?:[^']|'')*'","g"),
css:"string single"
},{
regex:new RegExp("[\\$|@|@@](?:(?:global|script|private|env):)?[A-Z0-9_]+","gi"),
css:"variable"
},{
regex:new RegExp("(?:\\b"+r.replace(/ /g,"\\b|\\b")+")-[a-zA-Z_][a-zA-Z0-9_]*","gmi"),
css:"functions"
},{
regex:new RegExp(this.getKeywords(e),"gmi"),
css:"keyword"
},{
regex:new RegExp("-"+this.getKeywords(t),"gmi"),
css:"operator value"
},{
regex:new RegExp("\\[[A-Z_\\[][A-Z0-9_. `,\\[\\]]*\\]","gi"),
css:"constants"
},{
regex:new RegExp("\\s+-(?!"+this.getKeywords(t)+")[a-zA-Z_][a-zA-Z0-9_]*","gmi"),
css:"color1"
}];
}
e.prototype=new s.Highlighter,e.aliases=["powershell","ps","posh"],s.brushes.PowerShell=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="and assert break class continue def del elif else except exec finally for from global if import in is lambda not or pass print raise return try yield while",t="__import__ abs all any apply basestring bin bool buffer callable chr classmethod cmp coerce compile complex delattr dict dir divmod enumerate eval execfile file filter float format frozenset getattr globals hasattr hash help hex id input int intern isinstance issubclass iter len list locals long map max min next object oct open ord pow print property range raw_input reduce reload repr reversed round set setattr slice sorted staticmethod str sum super tuple type type unichr unicode vars xrange zip",r="None True False self cls class_";
this.regexList=[{
regex:s.regexLib.singleLinePerlComments,
css:"comments"
},{
regex:/^\s*@\w+/gm,
css:"decorator"
},{
regex:/(['\"]{3})([^\1])*?\1/gm,
css:"comments"
},{
regex:/"(?!")(?:\.|\\\"|[^\""\n])*"/gm,
css:"string"
},{
regex:/'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,
css:"string"
},{
regex:/\+|\-|\*|\/|\%|=|==/gm,
css:"keyword"
},{
regex:/\b\d+\.?\w*/g,
css:"value"
},{
regex:new RegExp(this.getKeywords(t),"gmi"),
css:"functions"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
},{
regex:new RegExp(this.getKeywords(r),"gm"),
css:"color1"
}],this.forHtmlScript(s.regexLib.aspScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["py","python"],s.brushes.Python=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="alias and BEGIN begin break case class def define_method defined do each else elsif END end ensure false for if in module new next nil not or raise redo rescue retry return self super then throw true undef unless until when while yield",t="Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ThreadGroup Thread Time TrueClass";
this.regexList=[{
regex:s.regexLib.singleLinePerlComments,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/\b[A-Z0-9_]+\b/g,
css:"constants"
},{
regex:/:[a-z][A-Za-z0-9_]*/g,
css:"color2"
},{
regex:/(\$|@@|@)\w+/g,
css:"variable bold"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
},{
regex:new RegExp(this.getKeywords(t),"gm"),
css:"color1"
}],this.forHtmlScript(s.regexLib.aspScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["ruby","rails","ror","rb"],s.brushes.Ruby=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
function e(e){
return"\\b([a-z_]|)"+e.replace(/ /g,"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b";
}
function t(e){
return"\\b"+e.replace(/ /g,"(?!-)(?!:)\\b|\\b()")+":\\b";
}
var r="ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index",i="above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow",n="[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif",a="!important !default",o="@import @extend @debug @warn @if @for @while @mixin @include",l=s.regexLib;
this.regexList=[{
regex:l.multiLineCComments,
css:"comments"
},{
regex:l.singleLineCComments,
css:"comments"
},{
regex:l.doubleQuotedString,
css:"string"
},{
regex:l.singleQuotedString,
css:"string"
},{
regex:/\#[a-fA-F0-9]{3,6}/g,
css:"value"
},{
regex:/\b(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)\b/g,
css:"value"
},{
regex:/\$\w+/g,
css:"variable"
},{
regex:new RegExp(this.getKeywords(a),"g"),
css:"color3"
},{
regex:new RegExp(this.getKeywords(o),"g"),
css:"preprocessor"
},{
regex:new RegExp(e(r),"gm"),
css:"keyword"
},{
regex:new RegExp(t(i),"g"),
css:"value"
},{
regex:new RegExp(this.getKeywords(n),"g"),
css:"color1"
}];
}
e.prototype=new s.Highlighter,e.aliases=["sass","scss"],s.brushes.Sass=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="val sealed case def true trait implicit forSome import match object null finally super override try lazy for var catch throw type extends class while with new final yield abstract else do if return protected private this package false",t="[_:=><%#@]+";
this.regexList=[{
regex:s.regexLib.singleLineCComments,
css:"comments"
},{
regex:s.regexLib.multiLineCComments,
css:"comments"
},{
regex:s.regexLib.multiLineSingleQuotedString,
css:"string"
},{
regex:s.regexLib.multiLineDoubleQuotedString,
css:"string"
},{
regex:s.regexLib.singleQuotedString,
css:"string"
},{
regex:/0x[a-f0-9]+|\d+(\.\d+)?/gi,
css:"value"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
},{
regex:new RegExp(t,"gm"),
css:"keyword"
}];
}
e.prototype=new s.Highlighter,e.aliases=["scala"],s.brushes.Scala=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="abs avg case cast coalesce convert count current_timestamp current_user day isnull left lower month nullif replace right session_user space substring sum system_user upper user year",t="absolute action add after alter as asc at authorization begin bigint binary bit by cascade char character check checkpoint close collate column commit committed connect connection constraint contains continue create cube current current_date current_time cursor database date deallocate dec decimal declare default delete desc distinct double drop dynamic else end end-exec escape except exec execute false fetch first float for force foreign forward free from full function global goto grant group grouping having hour ignore index inner insensitive insert instead int integer intersect into is isolation key last level load local max min minute modify move name national nchar next no numeric of off on only open option order out output partial password precision prepare primary prior privileges procedure public read real references relative repeatable restrict return returns revoke rollback rollup rows rule schema scroll second section select sequence serializable set size smallint static statistics table temp temporary then time timestamp to top transaction translation trigger true truncate uncommitted union unique update values varchar varying view when where with work",r="all and any between cross in join like not null or outer some";
this.regexList=[{
regex:/--(.*)$/gm,
css:"comments"
},{
regex:s.regexLib.multiLineDoubleQuotedString,
css:"string"
},{
regex:s.regexLib.multiLineSingleQuotedString,
css:"string"
},{
regex:new RegExp(this.getKeywords(e),"gmi"),
css:"color2"
},{
regex:new RegExp(this.getKeywords(r),"gmi"),
css:"color1"
},{
regex:new RegExp(this.getKeywords(t),"gmi"),
css:"keyword"
}];
}
e.prototype=new s.Highlighter,e.aliases=["sql"],s.brushes.Sql=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
var e="AddHandler AddressOf AndAlso Alias And Ansi As Assembly Auto Boolean ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate CDec CDbl Char CInt Class CLng CObj Const CShort CSng CStr CType Date Decimal Declare Default Delegate Dim DirectCast Do Double Each Else ElseIf End Enum Erase Error Event Exit False Finally For Friend Function Get GetType GoSub GoTo Handles If Implements Imports In Inherits Integer Interface Is Let Lib Like Long Loop Me Mod Module MustInherit MustOverride MyBase MyClass Namespace New Next Not Nothing NotInheritable NotOverridable Object On Option Optional Or OrElse Overloads Overridable Overrides ParamArray Preserve Private Property Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume Return Select Set Shadows Shared Short Single Static Step Stop String Structure Sub SyncLock Then Throw To True Try TypeOf Unicode Until Variant When While With WithEvents WriteOnly Xor";
this.regexList=[{
regex:/'.*$/gm,
css:"comments"
},{
regex:s.regexLib.doubleQuotedString,
css:"string"
},{
regex:/^\s*#.*$/gm,
css:"preprocessor"
},{
regex:new RegExp(this.getKeywords(e),"gm"),
css:"keyword"
}],this.forHtmlScript(s.regexLib.aspScriptTags);
}
e.prototype=new s.Highlighter,e.aliases=["vb","vbnet"],s.brushes.Vb=e,"undefined"!=typeof t?t.Brush=e:null;
}(),function(){
function e(){
function e(e){
var t=s.Match,i=e[0],n=new r("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(i),a=[];
if(null!=e.attributes)for(var o,l=new r("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");null!=(o=l.exec(i));)a.push(new t(o.name,e.index+o.index,"color1")),
a.push(new t(o.value,e.index+o.index+o[0].indexOf(o.value),"string"));
return null!=n&&a.push(new t(n.name,e.index+n[0].indexOf(n.name),"keyword")),a;
}
this.regexList=[{
regex:new r("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),
css:"color2"
},{
regex:s.regexLib.xmlComments,
css:"comments"
},{
regex:new r("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),
func:e
}];
}
e.prototype=new s.Highlighter,e.aliases=["xml","xhtml","xslt","html"],s.brushes.Xml=e,
"undefined"!=typeof t?t.Brush=e:null;
}(),s;
});define("biz_web/utils/upload.js",["widget/upload.css","biz_web/lib/webuploader.js","common/wx/dialog.js","common/wx/Tips.js","tpl/uploader.html.js"],function(e){
"use strict";
function i(e){
f.src="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7839&flag2=4&flag3=5&1="+e;
}
e("widget/upload.css");
var n=e("biz_web/lib/webuploader.js"),a=e("common/wx/dialog.js"),t=e("common/wx/Tips.js"),o=e("tpl/uploader.html.js"),r=wx.T,s=wx.path.webuploader,l=~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"",p={
2:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:5242880
},
3:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:5242880
},
4:{
accept:{
extensions:"rm,rmvb,wmv,avi,mpg,mpeg,mp4",
mimeTypes:"video/rm,video/rmvb,video/wmv,video/avi,video/mpg,video/mpeg,video/mp4"
},
fileSingleSizeLimit:20971520
},
5:{
accept:{
extensions:"pdf",
mimeTypes:"application/pdf"
},
fileSingleSizeLimit:10485760
},
6:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif,pdf",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif,application/pdf"
},
fileSingleSizeLimit:5242880
},
7:{
accept:{
extensions:"bmp,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:5242880
},
8:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg"
},
fileSingleSizeLimit:5242880
},
9:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:204800
},
10:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:5242880
},
11:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg"
},
fileSingleSizeLimit:5242880
},
12:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:31457280
}
};
p[15]=p[4];
var m=function(e){
a.show({
type:"warn",
msg:"警告|"+e,
mask:!0,
buttons:[{
text:"确定",
click:function(){
this.remove();
}
}]
});
},c=function(e){
var i=n.Uploader;
0==i.support("flash")?m("<p>未安装或未正确配置flash插件，请检查后重试。<br><a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>到adobe去下载flash插件</a></p>"):0==i.support()?m("<p>您的浏览器不支持上传</p>"):e.refresh();
},d=function(e){
e&&wx.jslog({
src:"common/wx/upload.js"
},null,e);
},u={
swf:s,
auto:!0,
pick:{
multiple:!0
},
fileNumLimit:20,
threads:3,
sendAsBinary:!1,
runtimeOrder:"html5,flash",
compress:{
width:1280,
height:1e8,
quality:90,
afterCompressSizeLimit:2097152,
compressSize:0,
resizeSize:2097152,
maxResolution:6e6,
noCompressIfLarger:!0
},
imageSize:!0,
chunked:!1,
duplicate:!0
},f=new Image,g={},h=function(e){
if(!e.url)throw"missing url";
var a,s,l,m=$('<ul class="upload_file_box" style="display:none"></ul>'),f=$(e.container);
f.on("click",function(){
Math.random()<.1&&d(12),c(a);
}).parent().append(m),function(){
0==n.Uploader.support("html5")&&0==n.Uploader.support("flash")&&((new Image).src="/misc/jslog?level=error&id=36&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]");
}(),e.only_cdn&&(e.url+="&only_cdn=1"),s={
server:wx.url(e.url+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time),
pick:{
id:f,
multiple:e.multi
},
fileNumLimit:e.queueSizeLimit
},l=p[e.type]||p[2],e=$.extend(!0,{},u,s,l,e);
e.server;
0==n.Uploader.support("html5")&&e.compress&&(e.compress.quality=70);
try{
a=n.create(e);
}catch(h){
if(!a)return;
}
return m.on("click",".js_cancel",function(){
var e=$(this).data("id");
a.cancelFile(e),$(this).hide();
}),a.on("beforeFileQueued",function(i){
return Math.random()<.1&&d(13),e.canContinueUpload&&!e.canContinueUpload()?!1:!(e.onSelect&&e.onSelect(null,i.id,i)===!1);
}),a.on("fileQueued",function(e){
var i={
id:e.id,
fileName:e.name,
size:n.formatSize(e.size)
};
m.append(r(o,i)).show();
}),a.on("fileDequeued",function(){
Math.random()<.1&&d(14),e.onCancel&&e.onCancel();
}),a.on("uploadProgress",function(i,n){
var a="#uploadItem%s".sprintf(i.id),t=m.find(a).find(".progress_bar_thumb");
t.width("%s%".sprintf(100*n)),1==n&&m.find(a).find(".js_cancel").remove(),e.onProgress&&e.onProgress(null,i.id,i,{
percentage:n
});
}),a.on("uploadStart",function(e){
g[e.id]=+new Date;
}),a.on("uploadSuccess",function(n,a,o){
if(Math.random()<.1&&d(16),a&&a.base_resp){
var r=+a.base_resp.ret;
if(0==r)Math.random()<.1&&(d(17),g[n.id]&&i(+new Date-g[n.id]));else switch(n.setStatus("invalid"),
r){
case-18:
case 200018:
t.err("页面停留时间过久，请刷新页面后重试！");
break;

case-20:
case 200020:
t.err("无法解释该图片，请使用另一图片或截图另存");
break;

case-13:
case 200013:
t.err("上传文件过于频繁，请稍后再试");
break;

case-10:
case 200010:
t.err("上传文件过大");
break;

case-22:
case 200022:
t.err("上传音频文件不能超过60秒");
break;

case-39:
case 200039:
t.err("上传图片高度（像素）与宽度（像素）的乘积不能超过600万");
break;

case 220001:
t.err('"素材管理"中的存储数量已达到上限，请删除后再操作。');
break;

case 220002:
t.err("你的图片库已达到存储上限，请进行清理。");
break;

default:
t.err("上传文件发送出错，请刷新页面后重试！");
}
}
e.onComplete&&e.onComplete(null,n.id,n,a,{
fileCount:o.numOfProgress+o.numOfQueue
});
}),a.on("uploadFinished",function(i){
this.reset(),m.fadeOut().html(""),g={},0==i.numOfInvalid&&i.numOfSuccess>0&&e.onAllComplete&&e.onAllComplete(null,{
errors:i.numOfCancel+i.numOfInvalid+i.numOfUploadFailed+i.numofDeleted+i.numofInterrupt,
filesUploaded:i.numOfSuccess
});
}),a.on("uploadError",function(){
Math.random()<.1&&d(15),e.onError&&e.onError();
}),a.on("error",function(i,a,o){
switch("object"==typeof a&&(o=a),i){
case"Q_EXCEED_NUM_LIMIT":
t.err("一次上传最多只能上传%s个文件".sprintf(a));
break;

case"F_EXCEED_SIZE":
t.err("文件大小不能超过%s".sprintf(n.formatSize(a,"0")));
break;

case"F_EXCEED_COMPRESS_SIZE":
t.err("图片尺寸太大，压缩后不能超过%s，请缩小图片尺寸再试".sprintf(e.compress.afterCompressSizeLimit?e.compress.afterCompressSizeLimit/1048576+"M":"2M")),
d(42);
break;

case"Q_TYPE_DENIED":
t.err(e.errTypeMsg||"文件必须为以下格式：%s".sprintf(e.accept.extensions).replace(/,/g,", "));
}
}),a;
},b=function(e){
return function(i){
return i.url=e,h(i);
};
},w=function(e){
return function(i){
return wx.url(e+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&id="+i);
};
};
return{
uploadFile:h,
uploadBizFile:b(l+"/cgi-bin/filetransfer?action=upload_material&f=json"),
uploadTmpFile:b(l+"/cgi-bin/filetransfer?action=preview&f=json"),
uploadCdnFile:b(l+"/cgi-bin/filetransfer?action=upload_cdn&f=json"),
uploadShopFile:b(l+"/merchant/goodsimage?action=uploadimage"),
uploadShopUnsaveFile:b(l+"/merchant/goodsimage?action=uploadimage&save=0"),
uploadVideoCdnFile:b(l+"/cgi-bin/filetransfer?action=upload_video_cdn&f=json"),
uploadRegisterFile:b(l+"/acct/realnamesubmit?type=2&action=file_set"),
uploadUpgradeFile:b(l+"/acct/servicetypeupgrade?type=2&action=file_set"),
uploadPoiFile:b(l+"/misc/setlocation?action=upload"),
mediaFile:b(l+"/cgi-bin/filetransfer?action=bizmedia"),
uploadBbsCdnFile:b(l+"/filetransfer?action=upload_cdn&f=json"),
uploadCdnFileFromAd:function(e){
return b(l+"/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width="+e.w+"&height="+e.h+"&limit_size="+e.size);
},
uploadImageLibFile:function(e){
return e.url=l+"/cgi-bin/filetransfer?action=upload_material&f=json","undefined"!=typeof e.scene&&(e.url+="&scene="+e.scene),
1==e.doublewrite&&(e.url+="&writetype=doublewrite&groupid="+(e.groupid||1)),h(e);
},
uploadCdnFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));
return b(l+"/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json&"+n.join("&"),"tmpfile");
},
uploadTmpFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));
return b(l+"/cgi-bin/filetransfer?action=preview_check_range&f=json&"+n.join("&"));
},
tmpFileUrl:w(l+"/cgi-bin/filetransfer?action=preview"),
mediaFileUrl:w(l+"/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl:w(l+"/cgi-bin/filetransfer?action=multimedia")
};
});define("tpl/mpEditor/plugin/img_popup.html.js",[],function(){
return'<div class="js_img_popup edui_mask_edit_group">\n    \n	<div class="js_canceladapt edui-clickable edui_mask_edit_meta first_child tips_global" onclick="$$._imgAutoWidth(false)" style="{if !hasadapt}display:none;{/if}">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_canceladapt"></i>\n            取消自适应        </div>\n    </div>\n	<div class="js_adapt edui-clickable edui_mask_edit_meta first_child" onclick="$$._imgAutoWidth(true)" style="{if hasadapt}display:none;{/if}">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_adapt"></i>\n            自适应屏幕宽度        </div>\n    </div>\n	<div class="edui-clickable edui_mask_edit_meta primary no_extra" onclick="$$._delRange()">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_del"></i>\n            {if needBreak}\n            删除图片            {else}\n            删除            {/if}\n        </div>\n	</div>\n</div>\n\n\n';
});