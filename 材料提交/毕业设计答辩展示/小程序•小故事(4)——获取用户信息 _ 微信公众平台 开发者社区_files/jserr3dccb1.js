var BJ_REPORT=function(e){
function r(){
if(o.id!=w.IDS.DEFAULT||o.key!=w.KEY)return{
id:o.id,
key:o.key
};
var e={
_href:location.href,
href:location.href.replace(/https?:\/\/developers\.weixin\.qq\.com\//,"")
};
e.cgi=e.href.indexOf("?")>-1?e.href.match(/.*?\?/g)[0].slice(0,-1):e.href;
var r=(e.href+"&").match(/action\=(.*?)&/);
r&&r[1]&&(e.action=r[1]);
var n=w.IDS.DEFAULT,t=w.KEY;
return"blogdetail"==e.cgi?(n=w.IDS.BLOG_DETAIL,t=2):"blogedit"==e.cgi&&(n=w.IDS.EDIT_BLOG,
t=1),o.id=n,o.key=t,{
id:n,
key:t
};
}
function n(e,r){
return/Mozilla\/5.0.*ipad.*BaiduHD/i.test(r)&&e.indexOf("ReferenceError: Can't find variable: bds")>-1?!1:/Linux; U; Android.*letv/i.test(r)&&e.indexOf("ReferenceError: diableNightMode is not defined")>-1?!1:!0;
}
if(e.BJ_REPORT)return e.BJ_REPORT;
var t=[],o={
uin:0,
url:"https://badjs.weixinbridge.com/badjs",
combo:5,
level:4,
ignore:[],
random:1,
delay:3e3,
submit:null
},i=function(e,r){
return Object.prototype.toString.call(e)==="[object "+(r||"Object")+"]";
},a=function(e){
var r=typeof e;
return"object"===r&&!!e;
},u=function(e){
return null===e?!0:i(e,"Number")?!1:!e;
},c=e.onerror;
e.onerror=function(r,t,o,a,u){
var s=r;
u&&u.stack&&(s=d(u)),i(s,"Event")&&(s+=s.type?"--"+s.type+"--"+(s.target?s.target.tagName+"::"+s.target.src:""):""),
t&&t.length>0&&0==/^https\:\/\/(mp\.weixin\.qq\.com|res\.wx\.qq\.com)/.test(t),0!=n(s,window.navigator.userAgent)&&(w.push({
msg:"[onerror]"+s,
target:t,
rowNum:o,
colNum:a
}),v(),c&&c.apply(e,arguments));
};
var s=function(e){
try{
if(e.stack){
var r=e.stack.match("https?://[^\n]+");
r=r?r[0]:"";
var t=r.match(":(\\d+):(\\d+)");
if(r&&r.lenth>0&&0==/^https?\:\/\/(mp\.weixin\.qq\.com|res\.wx\.qq\.com)/.test(r))return null;
t||(t=[0,0,0]);
var o=d(e).replace(/https?\:\/\/.*?\.js\:/g,"");
return 0==n(o,window.navigator.userAgent)?null:{
msg:o,
rowNum:t[1],
colNum:t[2],
target:r.replace(t[0],"")
};
}
return e;
}catch(i){
return e;
}
},d=function(e){
var r=e.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,""),n=e.toString();
return r.indexOf(n)<0&&(r=n+"@"+r),r;
},l=function(e,r){
var n=[],t=[],i=[];
if(a(e)){
e.level=e.level||o.level;
for(var c in e){
var s=e[c];
if(!u(s)){
if(a(s))try{
s=JSON.stringify(s);
}catch(d){
s="[BJ_REPORT detect value stringify error] "+d.toString();
}
i.push(c+":"+s),n.push(c+"="+encodeURIComponent(s)),t.push(c+"["+r+"]="+encodeURIComponent(s));
}
}
}
return[t.join("&"),i.join(","),n.join("&")];
},f=[],m=[],p=function(e){
var r=e.replace(/\&_t=\d*/,"");
for(var n in m)if(m[n]==r)return;
if(m.push(r),o.submit)o.submit(e);else{
var t=new Image;
f.push(t),t.src=e;
}
},g=[],h=0,v=function(e){
if(o.report){
for(;t.length;){
var r=!1,n=t.shift(),a=l(n,g.length);
if(i(o.ignore,"Array"))for(var u=0,c=o.ignore.length;c>u;u++){
var s=o.ignore[u];
if(i(s,"RegExp")&&s.test(a[1])||i(s,"Function")&&s(n,a[1])){
r=!0;
break;
}
}
r||(o.combo?g.push(a[0]):p(o.report+a[2]+"&_t="+ +new Date),o.onReport&&o.onReport(o.id,n));
}
var d=g.length;
if(d){
var f=function(){
clearTimeout(h),p(o.report+g.join("&")+"&count="+d+"&_t="+ +new Date),h=0,g=[];
var e=new Image;
e.src="https://mp.weixin.qq.com/mp/jsmonitor?id_key=65773_"+(o.key||0)+"_"+d+"&t="+Math.random();
};
e?f():h||(h=setTimeout(f,o.delay));
}
}
},w={
KEY:0,
IDS:{
DEFAULT:"78",
BLOG_DETAIL:"80",
EDIT_BLOG:"79",
LOADERROR:"81"
},
destory:function(){
v=function(){};
},
push:function(e){
if(Math.random()>=o.random)return w;
var r;
return a(e)?(r=s(e),r&&t.push(r)):t.push({
msg:e
}),v(),w;
},
report:function(e){
return e&&w.push(e),v(!0),w;
},
info:function(e){
return e?(a(e)?e.level=2:e={
msg:e,
level:2
},w.push(e),w):w;
},
debug:function(e){
return e?(a(e)?e.level=1:e={
msg:e,
level:1
},w.push(e),w):w;
},
init:function(e){
for(var r in e)o[r]=e[r];
var n=parseInt(o.id,10),r=parseInt(o.key,10);
if(n){
var t=wx&&wx.uin?wx.uin:wx&&wx.data&&wx.data.user_name?wx.data.user_name:"";
o.report=o.url+"?id="+n+"&uin="+t+"&from="+encodeURIComponent(location.href)+"&";
}
return w;
},
monitor:function(e,r,n){
if(e){
r="monitor",n=n||o.id;
var t=new Image,i=wx&&wx.uin?wx.uin:wx&&wx.data&&wx.data.user_name?wx.data.user_name:"";
t.src=o.url+"?id="+n+"&key="+e+"&msg="+encodeURIComponent(r)+"&uin="+i+"&from="+encodeURIComponent(location.href)+"&level=4";
}
},
getConfig:function(){
return o;
},
__onerror__:e.onerror
};
return"undefined"!=typeof console&&console.error&&setTimeout(function(){
var e=((location.hash||"").match(/([#&])BJ_ERROR=([^&$]+)/)||[])[2];
e&&console.error("BJ_ERROR",decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g,"$1\n"));
},0),o.id=w.IDS.DEFAULT,o.key=w.KEY,r(),w.init(),w;
}(window);
window.wx_loaderror=function(e){
var r=new Image;
e&&e.tagName&&"script"==e.tagName.toLowerCase()&&BJ_REPORT.destory();
var n=wx&&wx.uin?wx.uin:wx&&wx.data&&wx.data.user_name?wx.data.user_name:"";
r.src="https://badjs.weixinbridge.com/badjs?id="+BJ_REPORT.IDS.LOADERROR+"&uin="+n+"&msg="+encodeURIComponent("link_error:"+(e&&(e.href||e.src)))+"|link&from="+encodeURIComponent(location.href)+"&level=4&_t="+ +new Date;
var t=new Image;
t.src="https://mp.weixin.qq.com/mp/jsmonitor?id_key=65773_3_1&t="+Math.random();
};