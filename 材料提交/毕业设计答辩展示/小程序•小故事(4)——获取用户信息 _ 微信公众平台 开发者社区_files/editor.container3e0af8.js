define("common/lib/codemirror.js",["widget/ueditor_new/codemirror/codemirror.css"],function(t){
t("widget/ueditor_new/codemirror/codemirror.css");
var e=function(){
function t(o,u){
function v(t){
return t>=0&&t<Zn.size;
}
function k(t){
return h(Zn,t);
}
function L(t,e){
sr=!0;
for(var n=e-t.height,r=t;r;r=r.parent)r.height+=n;
}
function A(t){
var e={
line:0,
ch:0
};
le(e,{
line:Zn.size-1,
ch:k(Zn.size-1).text.length
},X(t),e,e),nr=!0;
}
function P(){
var t=[];
return Zn.iter(0,Zn.size,function(e){
t.push(e.text);
}),t.join("\n");
}
function U(t){
function e(t){
var n=gn(t,!0);
if(n&&!E(n,l)){
qn||ie(),l=n,We(r,n),nr=!1;
var i=Se();
(n.line>=i.to||n.line<i.from)&&(o=setTimeout(An(function(){
e(t);
}),150));
}
}
Ee(t.shiftKey);
for(var n=w(t);n!=Nn;n=n.parentNode)if(n.parentNode==On&&n!=Rn)return;
for(var n=w(t);n!=Nn;n=n.parentNode)if(n.parentNode==Un)return zn.onGutterClick&&zn.onGutterClick(wr,I(Un.childNodes,n)+pr,t),
y(t);
var r=gn(t);
switch(b(t)){
case 3:
return void(j&&!R&&vn(t));

case 2:
return void(r&&He(r.line,r.ch,!0));
}
if(!r)return void(w(t)==In&&y(t));
qn||ie();
var i=+new Date;
if(tr&&tr.time>i-400&&E(tr.pos,r))return y(t),setTimeout(ke,20),Ke(r.line);
if(Qn&&Qn.time>i-400&&E(Qn.pos,r))return tr={
time:i,
pos:r
},y(t),Ve(r);
Qn={
time:i,
pos:r
};
var o,l=r;
if(F&&!E(hr.from,hr.to)&&!W(r,hr.from)&&!W(hr.to,r)){
Y&&(Bn.draggable=!0);
var a=S(Wn,"mouseup",An(function(e){
Y&&(Bn.draggable=!1),er=!1,a(),Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)<10&&(y(e),
He(r.line,r.ch,!0),ke());
}),!0);
return void(er=!0);
}
y(t),He(r.line,r.ch,!0);
var s=S(Wn,"mousemove",An(function(t){
clearTimeout(o),y(t),e(t);
}),!0),a=S(Wn,"mouseup",An(function(t){
clearTimeout(o);
var e=gn(t);
e&&We(r,e),y(t),ke(),nr=!0,s(),a();
}),!0);
}
function _(t){
for(var e=w(t);e!=Nn;e=e.parentNode)if(e.parentNode==Un)return y(t);
var n=gn(t);
n&&(tr={
time:+new Date,
pos:n
},y(t),Ve(n));
}
function J(t){
function e(t,e){
var r=new FileReader;
r.onload=function(){
o[e]=r.result,++l==i&&(n=Oe(n),An(function(){
var t=ce(o.join(""),n,n);
We(n,t);
})());
},r.readAsText(t);
}
t.preventDefault();
var n=gn(t,!0),r=t.dataTransfer.files;
if(n&&!zn.readOnly)if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),l=0,a=0;i>a;++a)e(r[a],a);else try{
var o=t.dataTransfer.getData("Text");
if(o){
var s=ce(o,n,n),u=hr.from,f=hr.to;
We(n,s),er&&ce("",u,f),ke();
}
}catch(t){}
}
function Q(t){
var e=pe();
D(e),t.dataTransfer.setDragImage(q,0,0),t.dataTransfer.setData("Text",e);
}
function te(t){
var r,i,o=Z[t.keyCode],l=K[zn.keyMap].auto;
if(null==o||t.altGraphKey)return l&&(zn.keyMap=l),null;
if(t.altKey&&(o="Alt-"+o),t.ctrlKey&&(o="Ctrl-"+o),t.metaKey&&(o="Cmd-"+o),t.shiftKey&&(r=e("Shift-"+o,zn.extraKeys,zn.keyMap))?i=!0:r=e(o,zn.extraKeys,zn.keyMap),
"string"==typeof r&&(r=V.propertyIsEnumerable(r)?V[r]:null),!l||!r&&n(t)||(zn.keyMap=l),
!r)return!1;
if(i){
var a=Jn;
Jn=null,r(wr),Jn=a;
}else r(wr);
return y(t),!0;
}
function ee(t){
qn||ie();
var e=t.keyCode;
if(G&&27==e&&(t.returnValue=!1),Ee(16==e||t.shiftKey),!zn.onKeyEvent||!zn.onKeyEvent(wr,x(t))){
var n=te(t);
window.opera&&(br=n?t.keyCode:null,!n&&(R?t.metaKey:t.ctrlKey)&&88==t.keyCode&&he(""));
}
}
function ne(t){
if(window.opera&&t.keyCode==br)return br=null,void y(t);
if(!(zn.onKeyEvent&&zn.onKeyEvent(wr,x(t))||window.opera&&!t.which&&te(t))){
if(zn.electricChars&&Yn.electricChars){
var e=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode);
Yn.electricChars.indexOf(e)>-1&&setTimeout(An(function(){
je(hr.to.line,"smart");
}),75);
}
ve();
}
}
function re(t){
zn.onKeyEvent&&zn.onKeyEvent(wr,x(t))||16==t.keyCode&&(Jn=null);
}
function ie(){
zn.readOnly||(qn||(zn.onFocus&&zn.onFocus(wr),qn=!0,-1==Nn.className.search(/\bCodeMirror-focused\b/)&&(Nn.className+=" CodeMirror-focused"),
ar||ye(!0)),ge(),xn());
}
function oe(){
qn&&(zn.onBlur&&zn.onBlur(wr),qn=!1,Nn.className=Nn.className.replace(" CodeMirror-focused","")),
clearInterval(Gn),setTimeout(function(){
qn||(Jn=null);
},150);
}
function le(t,e,n,r,i){
if(kr){
var o=[];
for(Zn.iter(t.line,e.line+1,function(t){
o.push(t.text);
}),kr.addChange(t.line,n.length,o);kr.done.length>zn.undoDepth;)kr.done.shift();
}
fe(t,e,n,r,i);
}
function ae(t,e){
var n=t.pop();
if(n){
var r=[],i=n.start+n.added;
Zn.iter(n.start,i,function(t){
r.push(t.text);
}),e.push({
start:n.start,
added:n.old.length,
old:r
});
var o=Oe({
line:n.start+n.old.length-1,
ch:H(r[r.length-1],n.old[n.old.length-1])
});
fe({
line:n.start,
ch:0
},{
line:i-1,
ch:k(i-1).text.length
},n.old,o,o),nr=!0;
}
}
function se(){
ae(kr.done,kr.undone);
}
function ue(){
ae(kr.undone,kr.done);
}
function fe(t,e,n,r,i){
function o(t){
return t<=Math.min(e.line,e.line+x)?t:t+x;
}
var l=!1,a=xr.length;
zn.lineWrapping||Zn.iter(t.line,e.line,function(t){
return t.text.length==a?(l=!0,!0):void 0;
}),(t.line!=e.line||n.length>1)&&(sr=!0);
var u=e.line-t.line,f=k(t.line),c=k(e.line);
if(0==t.ch&&0==e.ch&&""==n[n.length-1]){
var h=[],d=null;
t.line?(d=k(t.line-1),d.fixMarkEnds(c)):c.fixMarkStarts();
for(var m=0,p=n.length-1;p>m;++m)h.push(s.inheritMarks(n[m],d));
u&&Zn.remove(t.line,u,ur),h.length&&Zn.insert(t.line,h);
}else if(f==c)if(1==n.length)f.replace(t.ch,e.ch,n[0]);else{
c=f.split(e.ch,n[n.length-1]),f.replace(t.ch,null,n[0]),f.fixMarkEnds(c);
for(var h=[],m=1,p=n.length-1;p>m;++m)h.push(s.inheritMarks(n[m],f));
h.push(c),Zn.insert(t.line+1,h);
}else if(1==n.length)f.replace(t.ch,null,n[0]),c.replace(null,e.ch,""),f.append(c),
Zn.remove(t.line+1,u,ur);else{
var h=[];
f.replace(t.ch,null,n[0]),c.replace(null,e.ch,n[n.length-1]),f.fixMarkEnds(c);
for(var m=1,p=n.length-1;p>m;++m)h.push(s.inheritMarks(n[m],f));
u>1&&Zn.remove(t.line+1,u-1,ur),Zn.insert(t.line+1,h);
}
if(zn.lineWrapping){
var g=In.clientWidth/dn()-3;
Zn.iter(t.line,t.line+n.length,function(t){
if(!t.hidden){
var e=Math.ceil(t.text.length/g)||1;
e!=t.height&&L(t,e);
}
});
}else Zn.iter(t.line,m+n.length,function(t){
var e=t.text;
e.length>a&&(xr=e,a=e.length,cr=null,l=!1);
}),l&&(a=0,xr="",cr=null,Zn.iter(0,Zn.size,function(t){
var e=t.text;
e.length>a&&(a=e.length,xr=e);
}));
for(var v=[],x=n.length-u-1,m=0,y=_n.length;y>m;++m){
var C=_n[m];
C<t.line?v.push(C):C>e.line&&v.push(C+x);
}
var w=t.line+Math.min(n.length,500);
wn(t.line,w),v.push(w),_n=v,Sn(100),ir.push({
from:t.line,
to:e.line+1,
diff:x
});
var b={
from:t,
to:e,
text:n
};
if(or){
for(var S=or;S.next;S=S.next);
S.next=b;
}else or=b;
Ne(r,i,o(hr.from.line),o(hr.to.line)),On.style.height=Zn.height*hn()+2*mn()+"px";
}
function ce(t,e,n){
function r(r){
if(W(r,e))return r;
if(!W(n,r))return i;
var o=r.line+t.length-(n.line-e.line)-1,l=r.ch;
return r.line==n.line&&(l+=t[t.length-1].length-(n.ch-(n.line==e.line?e.ch:0))),
{
line:o,
ch:l
};
}
e=Oe(e),n=n?Oe(n):e,t=X(t);
var i;
return de(t,e,n,function(t){
return i=t,{
from:r(hr.from),
to:r(hr.to)
};
}),i;
}
function he(t,e){
de(X(t),hr.from,hr.to,function(t){
return"end"==e?{
from:t,
to:t
}:"start"==e?{
from:hr.from,
to:hr.from
}:{
from:hr.from,
to:t
};
});
}
function de(t,e,n,r){
var i=1==t.length?t[0].length+e.ch:t[t.length-1].length,o=r({
line:e.line+t.length-1,
ch:i
});
le(e,n,t,o.from,o.to);
}
function me(t,e){
var n=t.line,r=e.line;
if(n==r)return k(n).text.slice(t.ch,e.ch);
var i=[k(n).text.slice(t.ch)];
return Zn.iter(n+1,r,function(t){
i.push(t.text);
}),i.push(k(r).text.slice(0,e.ch)),i.join("\n");
}
function pe(){
return me(hr.from,hr.to);
}
function ge(){
Sr||Xn.set(zn.pollInterval,function(){
Mn(),xe(),qn&&ge(),Ln();
});
}
function ve(){
function t(){
Mn();
var n=xe();
n||e?(Sr=!1,ge()):(e=!0,Xn.set(60,t)),Ln();
}
var e=!1;
Sr=!0,Xn.set(20,t);
}
function xe(){
if(ar||!qn||$(Hn))return!1;
var t=Hn.value;
if(t==Mr)return!1;
Jn=null;
for(var e=0,n=Math.min(Mr.length,t.length);n>e&&Mr[e]==t[e];)++e;
return e<Mr.length?hr.from={
line:hr.from.line,
ch:hr.from.ch-(Mr.length-e)
}:dr&&E(hr.from,hr.to)&&(hr.to={
line:hr.to.line,
ch:Math.min(k(hr.to.line).text.length,hr.to.ch+(t.length-e))
}),he(t.slice(e),"end"),Mr=t,!0;
}
function ye(t){
E(hr.from,hr.to)?t&&(Mr=Hn.value=""):(Mr="",Hn.value=pe(),Hn.select());
}
function ke(){
zn.readOnly||Hn.focus();
}
function Ce(){
if(Kn.getBoundingClientRect){
var t=Kn.getBoundingClientRect();
if(!G||t.top!=t.bottom){
var e=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);
(t.top<0||t.bottom>e)&&Kn.scrollIntoView();
}
}
}
function we(){
var t=un(hr.inverted?hr.from:hr.to),e=zn.lineWrapping?Math.min(t.x,Bn.offsetWidth):t.x;
return be(e,t.y,e,t.yBot);
}
function be(t,e,n,r){
var i=pn(),o=mn(),l=hn();
e+=o,r+=o,t+=i,n+=i;
var a=In.clientHeight,s=In.scrollTop,u=!1,f=!0;
s>e?(In.scrollTop=Math.max(0,e-2*l),u=!0):r>s+a&&(In.scrollTop=r+l-a,u=!0);
var c=In.clientWidth,h=In.scrollLeft,d=zn.fixedGutter?Pn.clientWidth:0;
return h+d>t?(50>t&&(t=0),In.scrollLeft=Math.max(0,t-10-d),u=!0):n>c+h-3&&(In.scrollLeft=n+10-c,
u=!0,n>On.clientWidth&&(f=!1)),u&&zn.onScroll&&zn.onScroll(wr),f;
}
function Se(){
var t=hn(),e=In.scrollTop-mn(),n=Math.max(0,Math.floor(e/t)),r=Math.ceil((e+In.clientHeight)/t);
return{
from:m(Zn,n),
to:m(Zn,r)
};
}
function Me(t,e){
if(!In.clientWidth)return void(pr=gr=mr=0);
var n=Se();
if(!(t!==!0&&0==t.length&&n.from>=pr&&n.to<=gr)){
var r=Math.max(n.from-100,0),i=Math.min(Zn.size,n.to+100);
r>pr&&20>r-pr&&(r=pr),gr>i&&20>gr-i&&(i=Math.min(Zn.size,gr));
for(var o=t===!0?[]:Le([{
from:pr,
to:gr,
domStart:0
}],t),l=0,a=0;a<o.length;++a){
var s=o[a];
s.from<r&&(s.domStart+=r-s.from,s.from=r),s.to>i&&(s.to=i),s.from>=s.to?o.splice(a--,1):l+=s.to-s.from;
}
if(l!=i-r){
o.sort(function(t,e){
return t.domStart-e.domStart;
});
var u=hn(),f=Pn.style.display;
Fn.style.display=Pn.style.display="none",Ae(r,i,o),Fn.style.display="";
var c=r!=pr||i!=gr||vr!=In.clientHeight+u;
if(c&&(vr=In.clientHeight+u),pr=r,gr=i,mr=p(Zn,r),Rn.style.top=mr*u+"px",On.style.height=Zn.height*u+2*mn()+"px",
Fn.childNodes.length!=gr-pr)throw new Error("BAD PATCH! "+JSON.stringify(o)+" size="+(gr-pr)+" nodes="+Fn.childNodes.length);
if(zn.lineWrapping){
cr=In.clientWidth;
var h=Fn.firstChild;
Zn.iter(pr,gr,function(t){
if(!t.hidden){
var e=Math.round(h.offsetHeight/u)||1;
t.height!=e&&(L(t,e),sr=!0);
}
h=h.nextSibling;
});
}else null==cr&&(cr=an(xr)),cr>In.clientWidth?(Bn.style.width=cr+"px",On.style.width="",
On.style.width=In.scrollWidth+"px"):Bn.style.width=On.style.width="";
return Pn.style.display=f,(c||sr)&&ze(),Te(),!e&&zn.onUpdate&&zn.onUpdate(wr),!0;
}
}
}
function Le(t,e){
for(var n=0,r=e.length||0;r>n;++n){
for(var i=e[n],o=[],l=i.diff||0,a=0,s=t.length;s>a;++a){
var u=t[a];
i.to<=u.from&&i.diff?o.push({
from:u.from+l,
to:u.to+l,
domStart:u.domStart
}):i.to<=u.from||i.from>=u.to?o.push(u):(i.from>u.from&&o.push({
from:u.from,
to:i.from,
domStart:u.domStart
}),i.to<u.to&&o.push({
from:i.to+l,
to:u.to+l,
domStart:u.domStart+(i.to-u.from)
}));
}
t=o;
}
return t;
}
function Ae(t,e,n){
function r(t){
var e=t.nextSibling;
return t.parentNode.removeChild(t),e;
}
if(n.length){
for(var i=0,o=Fn.firstChild,l=0;l<n.length;++l){
for(var a=n[l];a.domStart>i;)o=r(o),i++;
for(var s=0,u=a.to-a.from;u>s;++s)o=o.nextSibling,i++;
}
for(;o;)o=r(o);
}else Fn.innerHTML="";
var f=n.shift(),o=Fn.firstChild,s=t,c=hr.from.line,h=hr.to.line,d=t>c&&h>=t,m=Wn.createElement("div");
Zn.iter(t,e,function(t){
var e=null,r=null;
d?(e=0,h==s&&(d=!1,r=hr.to.ch)):c==s&&(h==s?(e=hr.from.ch,r=hr.to.ch):(d=!0,e=hr.from.ch)),
f&&f.to==s&&(f=n.shift()),!f||f.from>s?(m.innerHTML=t.hidden?"<pre></pre>":t.getHTML(e,r,!0,yr),
Fn.insertBefore(m.firstChild,o)):o=o.nextSibling,++s;
});
}
function ze(){
if(zn.gutter||zn.lineNumbers){
var t=Rn.offsetHeight,e=In.clientHeight;
Pn.style.height=(2>t-e?e:t)+"px";
var n=[],r=pr;
Zn.iter(pr,Math.max(gr,pr+1),function(t){
if(t.hidden)n.push("<pre></pre>");else{
var e=t.gutterMarker,i=zn.lineNumbers?r+zn.firstLineNumber:null;
e&&e.text?i=e.text.replace("%N%",null!=i?i:""):null==i&&(i=" "),n.push(e&&e.style?'<pre class="'+e.style+'">':"<pre>",i);
for(var o=1;o<t.height;++o)n.push("<br/>&#160;");
n.push("</pre>");
}
++r;
}),Pn.style.display="none",Un.innerHTML=n.join("");
for(var i=String(Zn.size).length,o=Un.firstChild,l=T(o),a="";l.length+a.length<i;)a+=" ";
a&&o.insertBefore(Wn.createTextNode(a),o.firstChild),Pn.style.display="",Bn.style.marginLeft=Pn.offsetWidth+"px",
sr=!1;
}
}
function Te(){
var t=hr.inverted?hr.from:hr.to,e=(hn(),un(t,!0)),n=z(Nn),r=z(Fn);
Dn.style.top=e.y+r.top-n.top+"px",Dn.style.left=e.x+r.left-n.left+"px",E(hr.from,hr.to)?(Kn.style.top=e.y+"px",
Kn.style.left=(zn.lineWrapping?Math.min(e.x,Bn.offsetWidth):e.x)+"px",Kn.style.display=""):Kn.style.display="none";
}
function Ee(t){
Jn=t?Jn||(hr.inverted?hr.to:hr.from):null;
}
function We(t,e){
var n=Jn&&Oe(Jn);
n&&(W(n,t)?t=n:W(e,n)&&(e=n)),Ne(t,e),rr=!0;
}
function Ne(t,e,n,r){
if(Lr=null,null==n&&(n=hr.from.line,r=hr.to.line),!E(hr.from,t)||!E(hr.to,e)){
if(W(e,t)){
var i=e;
e=t,t=i;
}
t.line!=n&&(t=De(t,n,hr.from.ch)),e.line!=r&&(e=De(e,r,hr.to.ch)),E(t,e)?hr.inverted=!1:E(t,hr.to)?hr.inverted=!1:E(e,hr.from)&&(hr.inverted=!0),
E(t,e)?E(hr.from,hr.to)||ir.push({
from:n,
to:r+1
}):E(hr.from,hr.to)?ir.push({
from:t.line,
to:e.line+1
}):(E(t,hr.from)||ir.push(t.line<n?{
from:t.line,
to:Math.min(e.line,n)+1
}:{
from:n,
to:Math.min(r,t.line)+1
}),E(e,hr.to)||ir.push(e.line<r?{
from:Math.max(n,t.line),
to:r+1
}:{
from:Math.max(t.line,r),
to:e.line+1
})),hr.from=t,hr.to=e,lr=!0;
}
}
function De(t,e,n){
function r(e){
for(var r=t.line+e,i=1==e?Zn.size:-1;r!=i;){
var o=k(r);
if(!o.hidden){
var l=t.ch;
return(l>n||l>o.text.length)&&(l=o.text.length),{
line:r,
ch:l
};
}
r+=e;
}
}
var i=k(t.line);
return i.hidden?t.line>=e?r(1)||r(-1):r(-1)||r(1):t;
}
function He(t,e,n){
var r=Oe({
line:t,
ch:e||0
});
(n?We:Ne)(r,r);
}
function Ie(t){
return Math.max(0,Math.min(t,Zn.size-1));
}
function Oe(t){
if(t.line<0)return{
line:0,
ch:0
};
if(t.line>=Zn.size)return{
line:Zn.size-1,
ch:k(Zn.size-1).text.length
};
var e=t.ch,n=k(t.line).text.length;
return null==e||e>n?{
line:t.line,
ch:n
}:0>e?{
line:t.line,
ch:0
}:t;
}
function Re(t,e){
function n(){
for(var e=o+t,n=0>t?-1:Zn.size;e!=n;e+=t){
var r=k(e);
if(!r.hidden)return o=e,a=r,!0;
}
}
function r(e){
if(l==(0>t?0:a.text.length)){
if(e||!n())return!1;
l=0>t?a.text.length:0;
}else l+=t;
return!0;
}
var i=hr.inverted?hr.from:hr.to,o=i.line,l=i.ch,a=k(o);
if("char"==e)r();else if("column"==e)r(!0);else if("word"==e)for(var s=!1;!(0>t)||r();){
if(O(a.text.charAt(l)))s=!0;else if(s){
0>t&&(t=1,r());
break;
}
if(t>0&&!r())break;
}
return{
line:o,
ch:l
};
}
function Pe(t,e){
var n=0>t?hr.from:hr.to;
(Jn||E(hr.from,hr.to))&&(n=Re(t,e)),He(n.line,n.ch,!0);
}
function Ue(t,e){
E(hr.from,hr.to)?0>t?ce("",Re(t,e),hr.to):ce("",hr.from,Re(t,e)):ce("",hr.from,hr.to),
rr=!0;
}
function Be(t,e){
var n=0,r=un(hr.inverted?hr.from:hr.to,!0);
null!=Lr&&(r.x=Lr),"page"==e?n=In.clientHeight:"line"==e&&(n=hn());
var i=fn(r.x,r.y+n*t+2);
He(i.line,i.ch,!0),Lr=r.x;
}
function Ve(t){
for(var e=k(t.line).text,n=t.ch,r=t.ch;n>0&&O(e.charAt(n-1));)--n;
for(;r<e.length&&O(e.charAt(r));)++r;
We({
line:t.line,
ch:n
},{
line:t.line,
ch:r
});
}
function Ke(t){
We({
line:t,
ch:0
},{
line:t,
ch:k(t).text.length
});
}
function Fe(t){
if(E(hr.from,hr.to))return je(hr.from.line,t);
for(var e=hr.to.line-(hr.to.ch?0:1),n=hr.from.line;e>=n;++n)je(n,t);
}
function je(t,e){
if(e||(e="add"),"smart"==e)if(Yn.indent)var n=Cn(t);else e="prev";
var r,i=k(t),o=i.indentation(zn.tabSize),l=i.text.match(/^\s*/)[0];
"prev"==e?r=t?k(t-1).indentation(zn.tabSize):0:"smart"==e?r=Yn.indent(n,i.text.slice(l.length),i.text):"add"==e?r=o+zn.indentUnit:"subtract"==e&&(r=o-zn.indentUnit),
r=Math.max(0,r);
var a=r-o;
if(a){
var s="",u=0;
if(zn.indentWithTabs)for(var f=Math.floor(r/zn.tabSize);f;--f)u+=zn.tabSize,s+="	";
for(;r>u;)++u,s+=" ";
}else{
if(hr.from.line!=t&&hr.to.line!=t)return;
var s=l;
}
ce(s,{
line:t,
ch:0
},{
line:t,
ch:l.length
});
}
function Ge(){
Yn=t.getMode(zn,zn.mode),Zn.iter(0,Zn.size,function(t){
t.stateAfter=null;
}),_n=[0],Sn();
}
function Ye(){
var t=zn.gutter||zn.lineNumbers;
Pn.style.display=t?"":"none",t?sr=!0:Fn.parentNode.style.marginLeft=0;
}
function _e(){
if(zn.lineWrapping){
Nn.className+=" CodeMirror-wrap";
var t=In.clientWidth/dn()-3;
Zn.iter(0,Zn.size,function(e){
if(!e.hidden){
var n=Math.ceil(e.text.length/t)||1;
1!=n&&L(e,n);
}
}),Bn.style.width=On.style.width="";
}else Nn.className=Nn.className.replace(" CodeMirror-wrap",""),cr=null,xr="",Zn.iter(0,Zn.size,function(t){
1==t.height||t.hidden||L(t,1),t.text.length>xr.length&&(xr=t.text);
});
ir.push({
from:0,
to:Zn.size
});
}
function qe(){
for(var t='<span class="cm-tab">',e=0;e<zn.tabSize;++e)t+=" ";
return t+"</span>";
}
function Xe(){
yr=qe(),Me(!0);
}
function $e(){
In.className=In.className.replace(/\s*cm-s-\w+/g,"")+zn.theme.replace(/(^|\s)\s*/g," cm-s-");
}
function Ze(){
this.set=[];
}
function Je(t,e,n){
function r(t,e,n,r){
k(t).addMark(new l(e,n,r,i.set));
}
t=Oe(t),e=Oe(e);
var i=new Ze;
if(t.line==e.line)r(t.line,t.ch,e.ch,n);else{
r(t.line,t.ch,null,n);
for(var o=t.line+1,a=e.line;a>o;++o)r(o,null,null,n);
r(e.line,null,e.ch,n);
}
return ir.push({
from:t.line,
to:e.line+1
}),i;
}
function Qe(t){
t=Oe(t);
var e=new a(t.ch);
return k(t.line).addMark(e),e;
}
function tn(t,e,n){
return"number"==typeof t&&(t=k(Ie(t))),t.gutterMarker={
text:e,
style:n
},sr=!0,t;
}
function en(t){
"number"==typeof t&&(t=k(Ie(t))),t.gutterMarker=null,sr=!0;
}
function nn(t,e){
var n=t,r=t;
return"number"==typeof t?r=k(Ie(t)):n=d(t),null==n?null:e(r,n)?(ir.push({
from:n,
to:n+1
}),r):null;
}
function rn(t,e){
return nn(t,function(t){
return t.className!=e?(t.className=e,!0):void 0;
});
}
function on(t,e){
return nn(t,function(t,n){
return t.hidden!=e?(t.hidden=e,L(t,e?0:1),!e||hr.from.line!=n&&hr.to.line!=n||Ne(De(hr.from,hr.from.line,hr.from.ch),De(hr.to,hr.to.line,hr.to.ch)),
sr=!0):void 0;
});
}
function ln(t){
if("number"==typeof t){
if(!v(t))return null;
var e=t;
if(t=k(t),!t)return null;
}else{
var e=d(t);
if(null==e)return null;
}
var n=t.gutterMarker;
return{
line:e,
handle:t,
text:t.text,
markerText:n&&n.text,
markerClass:n&&n.style,
lineClass:t.className
};
}
function an(t){
return Vn.innerHTML="<pre><span>x</span></pre>",Vn.firstChild.firstChild.firstChild.nodeValue=t,
Vn.firstChild.firstChild.offsetWidth||10;
}
function sn(t,e){
var n="";
if(zn.lineWrapping){
var r=t.text.indexOf(" ",e+2);
n=D(t.text.slice(e+1,0>r?t.text.length:r+(G?5:0)));
}
Vn.innerHTML="<pre>"+t.getHTML(null,null,!1,yr,e)+'<span id="CodeMirror-temp-'+Wr+'">'+D(t.text.charAt(e)||" ")+"</span>"+n+"</pre>";
var i=document.getElementById("CodeMirror-temp-"+Wr),o=i.offsetTop,l=i.offsetLeft;
if(G&&e&&0==o&&0==l){
var a=document.createElement("span");
a.innerHTML="x",i.parentNode.insertBefore(a,i.nextSibling),o=a.offsetTop;
}
return{
top:o,
left:l
};
}
function un(t,e){
var n,r=hn(),i=r*(p(Zn,t.line)-(e?mr:0));
if(0==t.ch)n=0;else{
var o=sn(k(t.line),t.ch);
n=o.left,zn.lineWrapping&&(i+=Math.max(0,o.top));
}
return{
x:n,
y:i,
yBot:i+r
};
}
function fn(t,e){
function n(t){
var e=sn(a,t);
if(u){
var n=Math.round(e.top/r);
return Math.max(0,e.left+(n-f)*In.clientWidth);
}
return e.left;
}
0>e&&(e=0);
var r=hn(),i=dn(),o=mr+Math.floor(e/r),l=m(Zn,o);
if(l>=Zn.size)return{
line:Zn.size-1,
ch:k(Zn.size-1).text.length
};
var a=k(l),s=a.text,u=zn.lineWrapping,f=u?o-p(Zn,l):0;
if(0>=t&&0==f)return{
line:l,
ch:0
};
for(var c,h=0,d=0,g=s.length,v=Math.min(g,Math.ceil((t+f*In.clientWidth*.9)/i));;){
var x=n(v);
if(!(t>=x&&g>v)){
c=x,g=v;
break;
}
v=Math.min(g,Math.ceil(1.2*v));
}
if(t>c)return{
line:l,
ch:g
};
for(v=Math.floor(.8*g),x=n(v),t>x&&(h=v,d=x);;){
if(1>=g-h)return{
line:l,
ch:c-t>t-d?h:g
};
var y=Math.ceil((h+g)/2),C=n(y);
C>t?(g=y,c=C):(h=y,d=C);
}
}
function cn(t){
var e=un(t,!0),n=z(Bn);
return{
x:n.left+e.x,
y:n.top+e.y,
yBot:n.top+e.yBot
};
}
function hn(){
if(null==Tr){
Tr="<pre>";
for(var t=0;49>t;++t)Tr+="x<br/>";
Tr+="x</pre>";
}
var e=Fn.clientHeight;
return e==zr?Ar:(zr=e,Vn.innerHTML=Tr,Ar=Vn.firstChild.offsetHeight/50||1,Vn.innerHTML="",
Ar);
}
function dn(){
return In.clientWidth==Nr?Er:(Nr=In.clientWidth,Er=an("x"));
}
function mn(){
return Bn.offsetTop;
}
function pn(){
return Bn.offsetLeft;
}
function gn(t,e){
var n,r,i=z(In,!0);
try{
n=t.clientX,r=t.clientY;
}catch(t){
return null;
}
if(!e&&(n-i.left>In.clientWidth||r-i.top>In.clientHeight))return null;
var o=z(Bn,!0);
return fn(n-o.left,r-o.top);
}
function vn(t){
function e(){
var t=X(Hn.value).join("\n");
t!=i&&An(he)(t,"end"),Dn.style.position="relative",Hn.style.cssText=r,ar=!1,ye(!0),
ge();
}
var n=gn(t);
if(n&&!window.opera){
(E(hr.from,hr.to)||W(n,hr.from)||!W(n,hr.to))&&An(He)(n.line,n.ch);
var r=Hn.style.cssText;
Dn.style.position="absolute",Hn.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(t.clientY-5)+"px; left: "+(t.clientX-5)+"px; z-index: 1000; background: white; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
ar=!0;
var i=Hn.value=pe();
if(ke(),Hn.select(),j){
C(t);
var o=S(window,"mouseup",function(){
o(),setTimeout(e,20);
},!0);
}else setTimeout(e,50);
}
}
function xn(){
clearInterval(Gn);
var t=!0;
Kn.style.visibility="",Gn=setInterval(function(){
Kn.style.visibility=(t=!t)?"":"hidden";
},650);
}
function yn(t){
function e(t,e,n){
if(t.text)for(var r,i=t.styles,o=l?0:t.text.length-1,s=l?0:i.length-2,u=l?i.length:-2;s!=u;s+=2*a){
var f=i[s];
if(null==i[s+1]||i[s+1]==h){
for(var c=l?0:f.length-1,p=l?f.length:-1;c!=p;c+=a,o+=a)if(o>=e&&n>o&&m.test(r=f.charAt(c))){
var g=Dr[r];
if(">"==g.charAt(1)==l)d.push(r);else{
if(d.pop()!=g.charAt(0))return{
pos:o,
match:!1
};
if(!d.length)return{
pos:o,
match:!0
};
}
}
}else o+=a*f.length;
}
}
var n=hr.inverted?hr.from:hr.to,r=k(n.line),i=n.ch-1,o=i>=0&&Dr[r.text.charAt(i)]||Dr[r.text.charAt(++i)];
if(o){
for(var l=(o.charAt(0),">"==o.charAt(1)),a=l?1:-1,s=r.styles,u=i+1,f=0,c=s.length;c>f;f+=2)if((u-=s[f].length)<=0){
var h=s[f+1];
break;
}
for(var d=[r.text.charAt(i)],m=/[(){}[\]]/,f=n.line,c=l?Math.min(f+100,Zn.size):Math.max(-1,f-100);f!=c;f+=a){
var r=k(f),p=f==n.line,g=e(r,p&&l?i+1:0,p&&!l?i:r.text.length);
if(g)break;
}
g||(g={
pos:null,
match:!1
});
var h=g.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket",v=Je({
line:n.line,
ch:i
},{
line:n.line,
ch:i+1
},h),x=null!=g.pos&&Je({
line:f,
ch:g.pos
},{
line:f,
ch:g.pos+1
},h),y=An(function(){
v.clear(),x&&x.clear();
});
t?setTimeout(y,800):fr=y;
}
}
function kn(t){
for(var e,n,r=t,i=t-40;r>i;--r){
if(0==r)return 0;
var o=k(r-1);
if(o.stateAfter)return r;
var l=o.indentation(zn.tabSize);
(null==n||e>l)&&(n=r-1,e=l);
}
return n;
}
function Cn(t){
var e=kn(t),n=e&&k(e-1).stateAfter;
return n=n?r(Yn,n):i(Yn),Zn.iter(e,t,function(t){
t.highlight(Yn,n,zn.tabSize),t.stateAfter=r(Yn,n);
}),t>e&&ir.push({
from:e,
to:t
}),t<Zn.size&&!k(t).stateAfter&&_n.push(t),n;
}
function wn(t,e){
var n=Cn(t);
Zn.iter(t,e,function(t){
t.highlight(Yn,n,zn.tabSize),t.stateAfter=r(Yn,n);
});
}
function bn(){
for(var t=+new Date+zn.workTime,e=_n.length;_n.length;){
if(k(pr).stateAfter)var n=_n.pop();else var n=pr;
if(!(n>=Zn.size)){
var o=kn(n),l=o&&k(o-1).stateAfter;
l=l?r(Yn,l):i(Yn);
var a=0,s=Yn.compareStates,u=!1,f=o,c=!1;
if(Zn.iter(f,Zn.size,function(e){
var i=e.stateAfter;
if(+new Date>t)return _n.push(f),Sn(zn.workDelay),u&&ir.push({
from:n,
to:f+1
}),c=!0;
var o=e.highlight(Yn,l,zn.tabSize);
if(o&&(u=!0),e.stateAfter=r(Yn,l),s){
if(i&&s(i,l))return!0;
}else if(o===!1&&i){
if(++a>3&&(!Yn.indent||Yn.indent(i,"")==Yn.indent(l,"")))return!0;
}else a=0;
++f;
}),c)return;
u&&ir.push({
from:n,
to:f+1
});
}
}
e&&zn.onHighlightComplete&&zn.onHighlightComplete(wr);
}
function Sn(t){
_n.length&&$n.set(t,An(bn));
}
function Mn(){
nr=rr=or=null,ir=[],lr=!1,ur=[];
}
function Ln(){
var t,e=!1;
lr&&(e=!we()),ir.length?t=Me(ir,!0):(lr&&Te(),sr&&ze()),e&&we(),lr&&(Ce(),xn()),
qn&&!ar&&(nr===!0||nr!==!1&&lr)&&ye(rr),lr&&zn.matchBrackets&&setTimeout(An(function(){
fr&&(fr(),fr=null),E(hr.from,hr.to)&&yn(!1);
}),20);
var n=or,r=ur;
lr&&zn.onCursorActivity&&zn.onCursorActivity(wr),n&&zn.onChange&&wr&&zn.onChange(wr,n);
for(var i=0;i<r.length;++i)r[i](wr);
t&&zn.onUpdate&&zn.onUpdate(wr);
}
function An(t){
return function(){
Hr++||Mn();
try{
var e=t.apply(this,arguments);
}finally{
--Hr||Ln();
}
return e;
};
}
var zn={},Tn=t.defaults;
for(var En in Tn)Tn.hasOwnProperty(En)&&(zn[En]=(u&&u.hasOwnProperty(En)?u:Tn)[En]);
var Wn=zn.document,Nn=Wn.createElement("div");
Nn.className="CodeMirror"+(zn.lineWrapping?" CodeMirror-wrap":""),Nn.innerHTML='<div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea style="position: absolute; padding: 0; width: 1px;" wrap="off" autocorrect="off" autocapitalize="off"></textarea></div><div class="CodeMirror-scroll" tabindex="-1"><div style="position: relative"><div style="position: relative"><div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div><div class="CodeMirror-lines"><div style="position: relative"><div style="position: absolute; width: 100%; height: 0; overflow: hidden; visibility: hidden"></div><pre class="CodeMirror-cursor">&#160;</pre><div></div></div></div></div></div></div>',
o.appendChild?o.appendChild(Nn):o(Nn);
var Dn=Nn.firstChild,Hn=Dn.firstChild,In=Nn.lastChild,On=In.firstChild,Rn=On.firstChild,Pn=Rn.firstChild,Un=Pn.firstChild,Bn=Pn.nextSibling.firstChild,Vn=Bn.firstChild,Kn=Vn.nextSibling,Fn=Kn.nextSibling;
$e(),/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent)&&(Hn.style.width="0px"),
Y||(Bn.draggable=!0),null!=zn.tabindex&&(Hn.tabIndex=zn.tabindex),zn.gutter||zn.lineNumbers||(Pn.style.display="none");
try{
an("x");
}catch(jn){
throw jn.message.match(/runtime/i)&&(jn=new Error("A CodeMirror inside a P-style element does not work in Internet Explorer. (innerHTML bug)")),
jn;
}
var Gn,Yn,_n,qn,Xn=new M,$n=new M,Zn=new c([new f([new s("")])]);
Ge();
var Jn,Qn,tr,er,nr,rr,ir,or,lr,ar,sr,ur,fr,cr,hr={
from:{
line:0,
ch:0
},
to:{
line:0,
ch:0
},
inverted:!1
},dr=!1,mr=0,pr=0,gr=0,vr=0,xr="",yr=qe();
An(function(){
A(zn.value||""),nr=!1;
})();
var kr=new g;
S(In,"mousedown",An(U)),S(In,"dblclick",An(_)),S(Bn,"dragstart",Q),S(Bn,"selectstart",y),
j||S(In,"contextmenu",vn),S(In,"scroll",function(){
Me([]),zn.fixedGutter&&(Pn.style.left=In.scrollLeft+"px"),zn.onScroll&&zn.onScroll(wr);
}),S(window,"resize",function(){
Me(!0);
}),S(Hn,"keyup",An(re)),S(Hn,"input",ve),S(Hn,"keydown",An(ee)),S(Hn,"keypress",An(ne)),
S(Hn,"focus",ie),S(Hn,"blur",oe),S(In,"dragenter",C),S(In,"dragover",C),S(In,"drop",An(J)),
S(In,"paste",function(){
ke(),ve();
}),S(Hn,"paste",ve),S(Hn,"cut",An(function(){
he("");
}));
var Cr;
try{
Cr=Wn.activeElement==Hn;
}catch(jn){}
Cr?setTimeout(ie,20):oe();
var wr=Nn.CodeMirror={
getValue:P,
setValue:An(A),
getSelection:pe,
replaceSelection:An(he),
focus:function(){
ke(),ie(),ve();
},
setOption:function(t,e){
var n=zn[t];
zn[t]=e,"mode"==t||"indentUnit"==t?Ge():"readOnly"==t&&e?(oe(),Hn.blur()):"theme"==t?$e():"lineWrapping"==t&&n!=e?An(_e)():"tabSize"==t&&An(Xe)(),
("lineNumbers"==t||"gutter"==t||"firstLineNumber"==t||"theme"==t)&&An(Ye)();
},
getOption:function(t){
return zn[t];
},
undo:An(se),
redo:An(ue),
indentLine:An(function(t,e){
v(t)&&je(t,null==e?"smart":e?"add":"subtract");
}),
indentSelection:An(Fe),
historySize:function(){
return{
undo:kr.done.length,
redo:kr.undone.length
};
},
clearHistory:function(){
kr=new g;
},
matchBrackets:An(function(){
yn(!0);
}),
getTokenAt:An(function(t){
return t=Oe(t),k(t.line).getTokenAt(Yn,Cn(t.line),t.ch);
}),
getStateAfter:function(t){
return t=Ie(null==t?Zn.size-1:t),Cn(t+1);
},
cursorCoords:function(t){
return null==t&&(t=hr.inverted),cn(t?hr.from:hr.to);
},
charCoords:function(t){
return cn(Oe(t));
},
coordsChar:function(t){
var e=z(Bn);
return fn(t.x-e.left,t.y-e.top);
},
markText:An(Je),
setBookmark:Qe,
setMarker:An(tn),
clearMarker:An(en),
setLineClass:An(rn),
hideLine:An(function(t){
return on(t,!0);
}),
showLine:An(function(t){
return on(t,!1);
}),
onDeleteLine:function(t,e){
if("number"==typeof t){
if(!v(t))return null;
t=k(t);
}
return(t.handlers||(t.handlers=[])).push(e),t;
},
lineInfo:ln,
addWidget:function(t,e,n,r,i){
t=un(Oe(t));
var o=t.yBot,l=t.x;
if(e.style.position="absolute",On.appendChild(e),"over"==r)o=t.y;else if("near"==r){
var a=Math.max(In.offsetHeight,Zn.height*hn()),s=Math.max(On.clientWidth,Bn.clientWidth)-pn();
t.yBot+e.offsetHeight>a&&t.y>e.offsetHeight&&(o=t.y-e.offsetHeight),l+e.offsetWidth>s&&(l=s-e.offsetWidth);
}
e.style.top=o+mn()+"px",e.style.left=e.style.right="","right"==i?(l=On.clientWidth-e.offsetWidth,
e.style.right="0px"):("left"==i?l=0:"middle"==i&&(l=(On.clientWidth-e.offsetWidth)/2),
e.style.left=l+pn()+"px"),n&&be(l,o,l+e.offsetWidth,o+e.offsetHeight);
},
lineCount:function(){
return Zn.size;
},
clipPos:Oe,
getCursor:function(t){
return null==t&&(t=hr.inverted),N(t?hr.from:hr.to);
},
somethingSelected:function(){
return!E(hr.from,hr.to);
},
setCursor:An(function(t,e,n){
null==e&&"number"==typeof t.line?He(t.line,t.ch,n):He(t,e,n);
}),
setSelection:An(function(t,e,n){
(n?We:Ne)(Oe(t),Oe(e||t));
}),
getLine:function(t){
return v(t)?k(t).text:void 0;
},
getLineHandle:function(t){
return v(t)?k(t):void 0;
},
setLine:An(function(t,e){
v(t)&&ce(e,{
line:t,
ch:0
},{
line:t,
ch:k(t).text.length
});
}),
removeLine:An(function(t){
v(t)&&ce("",{
line:t,
ch:0
},Oe({
line:t+1,
ch:0
}));
}),
replaceRange:An(ce),
getRange:function(t,e){
return me(Oe(t),Oe(e));
},
execCommand:function(t){
return V[t](wr);
},
moveH:An(Pe),
deleteH:An(Ue),
moveV:An(Be),
toggleOverwrite:function(){
dr=!dr;
},
posFromIndex:function(t){
var e,n=0;
return Zn.iter(0,Zn.size,function(r){
var i=r.text.length+1;
return i>t?(e=t,!0):(t-=i,void++n);
}),Oe({
line:n,
ch:e
});
},
indexFromPos:function(t){
if(t.line<0||t.ch<0)return 0;
var e=t.ch;
return Zn.iter(0,t.line,function(t){
e+=t.text.length+1;
}),e;
},
operation:function(t){
return An(t)();
},
refresh:function(){
Me(!0);
},
getInputField:function(){
return Hn;
},
getWrapperElement:function(){
return Nn;
},
getScrollerElement:function(){
return In;
},
getGutterElement:function(){
return Pn;
}
},br=null,Sr=!1,Mr="",Lr=null;
Ze.prototype.clear=An(function(){
for(var t=1/0,e=-1/0,n=0,r=this.set.length;r>n;++n){
var i=this.set[n],o=i.marked;
if(o&&i.parent){
var l=d(i);
t=Math.min(t,l),e=Math.max(e,l);
for(var a=0;a<o.length;++a)o[a].set==this.set&&o.splice(a--,1);
}
}
1/0!=t&&ir.push({
from:t,
to:e+1
});
}),Ze.prototype.find=function(){
for(var t,e,n=0,r=this.set.length;r>n;++n)for(var i=this.set[n],o=i.marked,l=0;l<o.length;++l){
var a=o[l];
if(a.set==this.set&&(null!=a.from||null!=a.to)){
var s=d(i);
null!=s&&(null!=a.from&&(t={
line:s,
ch:a.from
}),null!=a.to&&(e={
line:s,
ch:a.to
}));
}
}
return{
from:t,
to:e
};
};
var Ar,zr,Tr,Er,Wr=Math.floor(16777215*Math.random()).toString(16),Nr=0,Dr={
"(":")>",
")":"(<",
"[":"]>",
"]":"[<",
"{":"}>",
"}":"{<"
},Hr=0;
for(var Ir in B)B.propertyIsEnumerable(Ir)&&!wr.propertyIsEnumerable(Ir)&&(wr[Ir]=B[Ir]);
return wr;
}
function e(t,e,n){
function r(t,e,n){
var i=e[t];
if(null!=i)return i;
if(null==n&&(n=e.fallthrough),null==n)return e.catchall;
if("string"==typeof n)return r(t,K[n]);
for(var o=0,l=n.length;l>o;++o)if(i=r(t,K[n[o]]),null!=i)return i;
return null;
}
return e?r(t,e,n):r(t,K[n]);
}
function n(t){
var e=Z[t.keyCode];
return"Ctrl"==e||"Alt"==e||"Shift"==e||"Mod"==e;
}
function r(t,e){
if(e===!0)return e;
if(t.copyState)return t.copyState(e);
var n={};
for(var r in e){
var i=e[r];
i instanceof Array&&(i=i.concat([])),n[r]=i;
}
return n;
}
function i(t,e,n){
return t.startState?t.startState(e,n):!0;
}
function o(t,e){
this.pos=this.start=0,this.string=t,this.tabSize=e||8;
}
function l(t,e,n,r){
this.from=t,this.to=e,this.style=n,this.set=r;
}
function a(t){
this.from=t,this.to=t,this.line=null;
}
function s(t,e){
this.styles=e||[t,null],this.text=t,this.height=1,this.marked=this.gutterMarker=this.className=this.handlers=null,
this.stateAfter=this.parent=this.hidden=null;
}
function u(t,e,n,r){
for(var i=0,o=0,l=0;e>o;i+=2){
var a=n[i],s=o+a.length;
0==l?(s>t&&r.push(a.slice(t-o,Math.min(a.length,e-o)),n[i+1]),s>=t&&(l=1)):1==l&&(s>e?r.push(a.slice(0,e-o),n[i+1]):r.push(a,n[i+1])),
o=s;
}
}
function f(t){
this.lines=t,this.parent=null;
for(var e=0,n=t.length,r=0;n>e;++e)t[e].parent=this,r+=t[e].height;
this.height=r;
}
function c(t){
this.children=t;
for(var e=0,n=0,r=0,i=t.length;i>r;++r){
var o=t[r];
e+=o.chunkSize(),n+=o.height,o.parent=this;
}
this.size=e,this.height=n,this.parent=null;
}
function h(t,e){
for(;!t.lines;)for(var n=0;;++n){
var r=t.children[n],i=r.chunkSize();
if(i>e){
t=r;
break;
}
e-=i;
}
return t.lines[e];
}
function d(t){
if(null==t.parent)return null;
for(var e=t.parent,n=I(e.lines,t),r=e.parent;r;e=r,r=r.parent){
var i=0;
for(r.children.length;r.children[i]!=e;++i)n+=r.children[i].chunkSize();
}
return n;
}
function m(t,e){
var n=0;
t:do{
for(var r=0,i=t.children.length;i>r;++r){
var o=t.children[r],l=o.height;
if(l>e){
t=o;
continue t;
}
e-=l,n+=o.chunkSize();
}
return n;
}while(!t.lines);
for(var r=0,i=t.lines.length;i>r;++r){
var a=t.lines[r],s=a.height;
if(s>e)break;
e-=s;
}
return n+r;
}
function p(t,e){
var n=0;
t:do{
for(var r=0,i=t.children.length;i>r;++r){
var o=t.children[r],l=o.chunkSize();
if(l>e){
t=o;
continue t;
}
e-=l,n+=o.height;
}
return n;
}while(!t.lines);
for(var r=0;e>r;++r)n+=t.lines[r].height;
return n;
}
function g(){
this.time=0,this.done=[],this.undone=[];
}
function v(){
C(this);
}
function x(t){
return t.stop||(t.stop=v),t;
}
function y(t){
t.preventDefault?t.preventDefault():t.returnValue=!1;
}
function k(t){
t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;
}
function C(t){
y(t),k(t);
}
function w(t){
return t.target||t.srcElement;
}
function b(t){
return t.which?t.which:1&t.button?1:2&t.button?3:4&t.button?2:void 0;
}
function S(t,e,n,r){
if("function"==typeof t.addEventListener){
if(t.addEventListener(e,n,!1),r)return function(){
t.removeEventListener(e,n,!1);
};
}else{
var i=function(t){
n(t||window.event);
};
if(t.attachEvent("on"+e,i),r)return function(){
t.detachEvent("on"+e,i);
};
}
}
function M(){
this.id=null;
}
function L(t,e,n){
null==e&&(e=t.search(/[^\s\u00a0]/),-1==e&&(e=t.length));
for(var r=0,i=0;e>r;++r)"	"==t.charAt(r)?i+=n-i%n:++i;
return i;
}
function A(t){
return t.currentStyle?t.currentStyle:window.getComputedStyle(t,null);
}
function z(t,e){
for(var n=t.ownerDocument.body,r=0,i=0,o=!1,l=t;l;l=l.offsetParent){
var a=l.offsetLeft,s=l.offsetTop;
l==n?(r+=Math.abs(a),i+=Math.abs(s)):(r+=a,i+=s),e&&"fixed"==A(l).position&&(o=!0);
}
for(var u=e&&!o?null:n,l=t.parentNode;l!=u;l=l.parentNode)null!=l.scrollLeft&&(r-=l.scrollLeft,
i-=l.scrollTop);
return{
left:r,
top:i
};
}
function T(t){
return t.textContent||t.innerText||t.nodeValue||"";
}
function E(t,e){
return t.line==e.line&&t.ch==e.ch;
}
function W(t,e){
return t.line<e.line||t.line==e.line&&t.ch<e.ch;
}
function N(t){
return{
line:t.line,
ch:t.ch
};
}
function D(t){
return q.textContent=t,q.innerHTML;
}
function H(t,e){
if(!e)return t?t.length:0;
if(!t)return e.length;
for(var n=t.length,r=e.length;n>=0&&r>=0&&t.charAt(n)==e.charAt(r);--n,--r);
return r+1;
}
function I(t,e){
if(t.indexOf)return t.indexOf(e);
for(var n=0,r=t.length;r>n;++n)if(t[n]==e)return n;
return-1;
}
function O(t){
return/\w/.test(t)||t.toUpperCase()!=t.toLowerCase();
}
t.defaults={
value:"",
mode:null,
theme:"default",
indentUnit:2,
indentWithTabs:!1,
tabSize:4,
keyMap:"default",
extraKeys:null,
electricChars:!0,
onKeyEvent:null,
lineWrapping:!1,
lineNumbers:!1,
gutter:!1,
fixedGutter:!1,
firstLineNumber:1,
readOnly:!1,
onChange:null,
onCursorActivity:null,
onGutterClick:null,
onHighlightComplete:null,
onUpdate:null,
onFocus:null,
onBlur:null,
onScroll:null,
matchBrackets:!1,
workTime:100,
workDelay:200,
pollInterval:100,
undoDepth:40,
tabindex:null,
document:window.document
};
var R=/Mac/.test(navigator.platform),P=(/Win/.test(navigator.platform),{}),U={};
t.defineMode=function(e,n){
t.defaults.mode||"null"==e||(t.defaults.mode=e),P[e]=n;
},t.defineMIME=function(t,e){
U[t]=e;
},t.getMode=function(e,n){
if("string"==typeof n&&U.hasOwnProperty(n)&&(n=U[n]),"string"==typeof n)var r=n,i={};else if(null!=n)var r=n.name,i=n;
var o=P[r];
return o?o(e,i||{}):(window.console&&console.warn("No mode "+r+" found, falling back to plain text."),
t.getMode(e,"text/plain"));
},t.listModes=function(){
var t=[];
for(var e in P)P.propertyIsEnumerable(e)&&t.push(e);
return t;
},t.listMIMEs=function(){
var t=[];
for(var e in U)U.propertyIsEnumerable(e)&&t.push({
mime:e,
mode:U[e]
});
return t;
};
var B=t.extensions={};
t.defineExtension=function(t,e){
B[t]=e;
};
var V=t.commands={
selectAll:function(t){
t.setSelection({
line:0,
ch:0
},{
line:t.lineCount()-1
});
},
killLine:function(t){
var e=t.getCursor(!0),n=t.getCursor(!1),r=!E(e,n);
r||t.getLine(e.line).length!=e.ch?t.replaceRange("",e,r?n:{
line:e.line
}):t.replaceRange("",e,{
line:e.line+1,
ch:0
});
},
deleteLine:function(t){
var e=t.getCursor().line;
t.replaceRange("",{
line:e,
ch:0
},{
line:e
});
},
undo:function(t){
t.undo();
},
redo:function(t){
t.redo();
},
goDocStart:function(t){
t.setCursor(0,0,!0);
},
goDocEnd:function(t){
t.setSelection({
line:t.lineCount()-1
},null,!0);
},
goLineStart:function(t){
t.setCursor(t.getCursor().line,0,!0);
},
goLineStartSmart:function(t){
var e=t.getCursor(),n=t.getLine(e.line),r=Math.max(0,n.search(/\S/));
t.setCursor(e.line,e.ch<=r&&e.ch?0:r,!0);
},
goLineEnd:function(t){
t.setSelection({
line:t.getCursor().line
},null,!0);
},
goLineUp:function(t){
t.moveV(-1,"line");
},
goLineDown:function(t){
t.moveV(1,"line");
},
goPageUp:function(t){
t.moveV(-1,"page");
},
goPageDown:function(t){
t.moveV(1,"page");
},
goCharLeft:function(t){
t.moveH(-1,"char");
},
goCharRight:function(t){
t.moveH(1,"char");
},
goColumnLeft:function(t){
t.moveH(-1,"column");
},
goColumnRight:function(t){
t.moveH(1,"column");
},
goWordLeft:function(t){
t.moveH(-1,"word");
},
goWordRight:function(t){
t.moveH(1,"word");
},
delCharLeft:function(t){
t.deleteH(-1,"char");
},
delCharRight:function(t){
t.deleteH(1,"char");
},
delWordLeft:function(t){
t.deleteH(-1,"word");
},
delWordRight:function(t){
t.deleteH(1,"word");
},
indentAuto:function(t){
t.indentSelection("smart");
},
indentMore:function(t){
t.indentSelection("add");
},
indentLess:function(t){
t.indentSelection("subtract");
},
insertTab:function(t){
t.replaceSelection("	","end");
},
transposeChars:function(t){
var e=t.getCursor(),n=t.getLine(e.line);
e.ch>0&&e.ch<n.length-1&&t.replaceRange(n.charAt(e.ch)+n.charAt(e.ch-1),{
line:e.line,
ch:e.ch-1
},{
line:e.line,
ch:e.ch+1
});
},
newlineAndIndent:function(t){
t.replaceSelection("\n","end"),t.indentLine(t.getCursor().line);
},
toggleOverwrite:function(t){
t.toggleOverwrite();
}
},K=t.keyMap={};
K.basic={
Left:"goCharLeft",
Right:"goCharRight",
Up:"goLineUp",
Down:"goLineDown",
End:"goLineEnd",
Home:"goLineStartSmart",
PageUp:"goPageUp",
PageDown:"goPageDown",
Delete:"delCharRight",
Backspace:"delCharLeft",
Tab:"indentMore",
"Shift-Tab":"indentLess",
Enter:"newlineAndIndent",
Insert:"toggleOverwrite"
},K.pcDefault={
"Ctrl-A":"selectAll",
"Ctrl-D":"deleteLine",
"Ctrl-Z":"undo",
"Shift-Ctrl-Z":"redo",
"Ctrl-Y":"redo",
"Ctrl-Home":"goDocStart",
"Alt-Up":"goDocStart",
"Ctrl-End":"goDocEnd",
"Ctrl-Down":"goDocEnd",
"Ctrl-Left":"goWordLeft",
"Ctrl-Right":"goWordRight",
"Alt-Left":"goLineStart",
"Alt-Right":"goLineEnd",
"Ctrl-Backspace":"delWordLeft",
"Ctrl-Delete":"delWordRight",
"Ctrl-S":"save",
"Ctrl-F":"find",
"Ctrl-G":"findNext",
"Shift-Ctrl-G":"findPrev",
"Shift-Ctrl-F":"replace",
"Shift-Ctrl-R":"replaceAll",
fallthrough:"basic"
},K.macDefault={
"Cmd-A":"selectAll",
"Cmd-D":"deleteLine",
"Cmd-Z":"undo",
"Shift-Cmd-Z":"redo",
"Cmd-Y":"redo",
"Cmd-Up":"goDocStart",
"Cmd-End":"goDocEnd",
"Cmd-Down":"goDocEnd",
"Alt-Left":"goWordLeft",
"Alt-Right":"goWordRight",
"Cmd-Left":"goLineStart",
"Cmd-Right":"goLineEnd",
"Alt-Backspace":"delWordLeft",
"Ctrl-Alt-Backspace":"delWordRight",
"Alt-Delete":"delWordRight",
"Cmd-S":"save",
"Cmd-F":"find",
"Cmd-G":"findNext",
"Shift-Cmd-G":"findPrev",
"Cmd-Alt-F":"replace",
"Shift-Cmd-Alt-F":"replaceAll",
fallthrough:["basic","emacsy"]
},K["default"]=R?K.macDefault:K.pcDefault,K.emacsy={
"Ctrl-F":"goCharRight",
"Ctrl-B":"goCharLeft",
"Ctrl-P":"goLineUp",
"Ctrl-N":"goLineDown",
"Alt-F":"goWordRight",
"Alt-B":"goWordLeft",
"Ctrl-A":"goLineStart",
"Ctrl-E":"goLineEnd",
"Ctrl-V":"goPageUp",
"Shift-Ctrl-V":"goPageDown",
"Ctrl-D":"delCharRight",
"Ctrl-H":"delCharLeft",
"Alt-D":"delWordRight",
"Alt-Backspace":"delWordLeft",
"Ctrl-K":"killLine",
"Ctrl-T":"transposeChars"
},t.fromTextArea=function(e,n){
function r(){
e.value=a.getValue();
}
function i(){
r(),e.form.submit=l,e.form.submit(),e.form.submit=i;
}
if(n||(n={}),n.value=e.value,!n.tabindex&&e.tabindex&&(n.tabindex=e.tabindex),e.form){
var o=S(e.form,"submit",r,!0);
if("function"==typeof e.form.submit){
var l=e.form.submit;
e.form.submit=i;
}
}
e.style.display="none";
var a=t(function(t){
e.parentNode.insertBefore(t,e.nextSibling);
},n);
return a.save=r,a.getTextArea=function(){
return e;
},a.toTextArea=function(){
r(),e.parentNode.removeChild(a.getWrapperElement()),e.style.display="",e.form&&(o(),
"function"==typeof e.form.submit&&(e.form.submit=l));
},a;
},t.copyState=r,t.startState=i,o.prototype={
eol:function(){
return this.pos>=this.string.length;
},
sol:function(){
return 0==this.pos;
},
peek:function(){
return this.string.charAt(this.pos);
},
next:function(){
return this.pos<this.string.length?this.string.charAt(this.pos++):void 0;
},
eat:function(t){
var e=this.string.charAt(this.pos);
if("string"==typeof t)var n=e==t;else var n=e&&(t.test?t.test(e):t(e));
return n?(++this.pos,e):void 0;
},
eatWhile:function(t){
for(var e=this.pos;this.eat(t););
return this.pos>e;
},
eatSpace:function(){
for(var t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
return this.pos>t;
},
skipToEnd:function(){
this.pos=this.string.length;
},
skipTo:function(t){
var e=this.string.indexOf(t,this.pos);
return e>-1?(this.pos=e,!0):void 0;
},
backUp:function(t){
this.pos-=t;
},
column:function(){
return L(this.string,this.start,this.tabSize);
},
indentation:function(){
return L(this.string,null,this.tabSize);
},
match:function(t,e,n){
function r(t){
return n?t.toLowerCase():t;
}
if("string"!=typeof t){
var i=this.string.slice(this.pos).match(t);
return i&&e!==!1&&(this.pos+=i[0].length),i;
}
return r(this.string).indexOf(r(t),this.pos)==this.pos?(e!==!1&&(this.pos+=t.length),
!0):void 0;
},
current:function(){
return this.string.slice(this.start,this.pos);
}
},t.StringStream=o,l.prototype={
attach:function(t){
this.set.push(t);
},
detach:function(t){
var e=I(this.set,t);
e>-1&&this.set.splice(e,1);
},
split:function(t,e){
if(this.to<=t&&null!=this.to)return null;
var n=this.from<t||null==this.from?null:this.from-t+e,r=null==this.to?null:this.to-t+e;
return new l(n,r,this.style,this.set);
},
dup:function(){
return new l(null,null,this.style,this.set);
},
clipTo:function(t,e,n,r,i){
null!=this.from&&this.from>=e&&(this.from=Math.max(r,this.from)+i),null!=this.to&&this.to>e&&(this.to=r<this.to?this.to+i:e),
t&&r>this.from&&(r<this.to||null==this.to)&&(this.from=null),n&&(e<this.to||null==this.to)&&(e>this.from||null==this.from)&&(this.to=null);
},
isDead:function(){
return null!=this.from&&null!=this.to&&this.from>=this.to;
},
sameSet:function(t){
return this.set==t.set;
}
},a.prototype={
attach:function(t){
this.line=t;
},
detach:function(t){
this.line==t&&(this.line=null);
},
split:function(t,e){
return t<this.from?(this.from=this.to=this.from-t+e,this):void 0;
},
isDead:function(){
return this.from>this.to;
},
clipTo:function(t,e,n,r,i){
(t||e<this.from)&&(n||r>this.to)?(this.from=0,this.to=-1):this.from>e&&(this.from=this.to=Math.max(r,this.from)+i);
},
sameSet:function(){
return!1;
},
find:function(){
return this.line&&this.line.parent?{
line:d(this.line),
ch:this.from
}:null;
},
clear:function(){
if(this.line){
var t=I(this.line.marked,this);
-1!=t&&this.line.marked.splice(t,1),this.line=null;
}
}
},s.inheritMarks=function(t,e){
var n=new s(t),r=e&&e.marked;
if(r)for(var i=0;i<r.length;++i)if(null==r[i].to&&r[i].style){
var o=n.marked||(n.marked=[]),l=r[i],a=l.dup();
o.push(a),a.attach(n);
}
return n;
},s.prototype={
replace:function(t,e,n){
var r=[],i=this.marked,o=null==e?this.text.length:e;
if(u(0,t,this.styles,r),n&&r.push(n,null),u(o,this.text.length,this.styles,r),this.styles=r,
this.text=this.text.slice(0,t)+n+this.text.slice(o),this.stateAfter=null,i)for(var l=n.length-(o-t),a=0,s=i[a];a<i.length;++a)s.clipTo(null==t,t||0,null==e,o,l),
s.isDead()&&(s.detach(this),i.splice(a--,1));
},
split:function(t,e){
var n=[e,null],r=this.marked;
u(t,this.text.length,this.styles,n);
var i=new s(e+this.text.slice(t),n);
if(r)for(var o=0;o<r.length;++o){
var l=r[o],a=l.split(t,e.length);
a&&(i.marked||(i.marked=[]),i.marked.push(a),a.attach(i));
}
return i;
},
append:function(t){
var e=this.text.length,n=t.marked,r=this.marked;
if(this.text+=t.text,u(0,t.text.length,t.styles,this.styles),r)for(var i=0;i<r.length;++i)null==r[i].to&&(r[i].to=e);
if(n&&n.length){
r||(this.marked=r=[]);
t:for(var i=0;i<n.length;++i){
var o=n[i];
if(!o.from)for(var l=0;l<r.length;++l){
var a=r[l];
if(a.to==e&&a.sameSet(o)){
a.to=null==o.to?null:o.to+e,a.isDead()&&(a.detach(this),n.splice(i--,1));
continue t;
}
}
r.push(o),o.attach(this),o.from+=e,null!=o.to&&(o.to+=e);
}
}
},
fixMarkEnds:function(t){
var e=this.marked,n=t.marked;
if(e)for(var r=0;r<e.length;++r){
var i=e[r],o=null==i.to;
if(o&&n)for(var l=0;l<n.length;++l)if(n[l].sameSet(i)){
o=!1;
break;
}
o&&(i.to=this.text.length);
}
},
fixMarkStarts:function(){
var t=this.marked;
if(t)for(var e=0;e<t.length;++e)null==t[e].from&&(t[e].from=0);
},
addMark:function(t){
t.attach(this),null==this.marked&&(this.marked=[]),this.marked.push(t),this.marked.sort(function(t,e){
return(t.from||0)-(e.from||0);
});
},
highlight:function(t,e,n){
var r,i=new o(this.text,n),l=this.styles,a=0,s=!1,u=l[0];
for(""==this.text&&t.blankLine&&t.blankLine(e);!i.eol();){
var f=t.token(i,e),c=this.text.slice(i.start,i.pos);
if(i.start=i.pos,a&&l[a-1]==f?l[a-2]+=c:c&&(!s&&(l[a+1]!=f||a&&l[a-2]!=r)&&(s=!0),
l[a++]=c,l[a++]=f,r=u,u=l[a]),i.pos>5e3){
l[a++]=this.text.slice(i.pos),l[a++]=null;
break;
}
}
return l.length!=a&&(l.length=a,s=!0),a&&l[a-2]!=r&&(s=!0),s||(l.length<5&&this.text.length<10?null:!1);
},
getTokenAt:function(t,e,n){
for(var r=this.text,i=new o(r);i.pos<n&&!i.eol();){
i.start=i.pos;
var l=t.token(i,e);
}
return{
start:i.start,
end:i.pos,
string:i.current(),
className:l||null,
state:e
};
},
indentation:function(t){
return L(this.text,null,t);
},
getHTML:function(t,e,n,r,i){
function o(t,e){
t&&(s&&G&&" "==t.charAt(0)&&(t=" "+t.slice(1)),s=!1,e?a.push('<span class="',e,'">',D(t).replace(/\t/g,r),"</span>"):a.push(D(t).replace(/\t/g,r)));
}
function l(){
c&&(v+=1,x=v<c.length?c[v]:null);
}
var a=[],s=!0;
n&&a.push(this.className?'<pre class="'+this.className+'">':"<pre>");
var u=this.styles,f=this.text,c=this.marked;
t==e&&(t=null);
var h=f.length;
if(null!=i&&(h=Math.min(i,h)),f||null!=i)if(c||null!=t){
var d,m=0,p=0,g="",v=-1,x=null;
for(l();h>m;){
var y=h,k="";
for(null!=t&&(t>m?y=t:(null==e||e>m)&&(k=" CodeMirror-selected",null!=e&&(y=Math.min(y,e))));x&&null!=x.to&&x.to<=m;)l();
for(x&&(x.from>m?y=Math.min(y,x.from):(k+=" "+x.style,null!=x.to&&(y=Math.min(y,x.to))));;){
var C=m+g.length,w=d;
if(k&&(w=d?d+k:k),o(C>y?g.slice(0,y-m):g,w),C>=y){
g=g.slice(y-m),m=y;
break;
}
m=C,g=u[p++],d="cm-"+u[p++];
}
}
null!=t&&null==e&&o(" ","CodeMirror-selected");
}else for(var p=0,b=0;h>b;p+=2){
var S=u[p],d=u[p+1],M=S.length;
b+M>h&&(S=S.slice(0,h-b)),b+=M,o(S,d&&"cm-"+d);
}else o(" ",null!=t&&null==e?"CodeMirror-selected":null);
return n&&a.push("</pre>"),a.join("");
},
cleanUp:function(){
if(this.parent=null,this.marked)for(var t=0,e=this.marked.length;e>t;++t)this.marked[t].detach(this);
}
},f.prototype={
chunkSize:function(){
return this.lines.length;
},
remove:function(t,e,n){
for(var r=t,i=t+e;i>r;++r){
var o=this.lines[r];
if(this.height-=o.height,o.cleanUp(),o.handlers)for(var l=0;l<o.handlers.length;++l)n.push(o.handlers[l]);
}
this.lines.splice(t,e);
},
collapse:function(t){
t.splice.apply(t,[t.length,0].concat(this.lines));
},
insertHeight:function(t,e,n){
this.height+=n,this.lines.splice.apply(this.lines,[t,0].concat(e));
for(var r=0,i=e.length;i>r;++r)e[r].parent=this;
},
iterN:function(t,e,n){
for(var r=t+e;r>t;++t)if(n(this.lines[t]))return!0;
}
},c.prototype={
chunkSize:function(){
return this.size;
},
remove:function(t,e,n){
this.size-=e;
for(var r=0;r<this.children.length;++r){
var i=this.children[r],o=i.chunkSize();
if(o>t){
var l=Math.min(e,o-t),a=i.height;
if(i.remove(t,l,n),this.height-=a-i.height,o==l&&(this.children.splice(r--,1),i.parent=null),
0==(e-=l))break;
t=0;
}else t-=o;
}
if(this.size-e<25){
var s=[];
this.collapse(s),this.children=[new f(s)];
}
},
collapse:function(t){
for(var e=0,n=this.children.length;n>e;++e)this.children[e].collapse(t);
},
insert:function(t,e){
for(var n=0,r=0,i=e.length;i>r;++r)n+=e[r].height;
this.insertHeight(t,e,n);
},
insertHeight:function(t,e,n){
this.size+=e.length,this.height+=n;
for(var r=0,i=this.children.length;i>r;++r){
var o=this.children[r],l=o.chunkSize();
if(l>=t){
if(o.insertHeight(t,e,n),o.lines&&o.lines.length>50){
for(;o.lines.length>50;){
var a=o.lines.splice(o.lines.length-25,25),s=new f(a);
o.height-=s.height,this.children.splice(r+1,0,s),s.parent=this;
}
this.maybeSpill();
}
break;
}
t-=l;
}
},
maybeSpill:function(){
if(!(this.children.length<=10)){
var t=this;
do{
var e=t.children.splice(t.children.length-5,5),n=new c(e);
if(t.parent){
t.size-=n.size,t.height-=n.height;
var r=I(t.parent.children,t);
t.parent.children.splice(r+1,0,n);
}else{
var i=new c(t.children);
i.parent=t,t.children=[i,n],t=i;
}
n.parent=t.parent;
}while(t.children.length>10);
t.parent.maybeSpill();
}
},
iter:function(t,e,n){
this.iterN(t,e-t,n);
},
iterN:function(t,e,n){
for(var r=0,i=this.children.length;i>r;++r){
var o=this.children[r],l=o.chunkSize();
if(l>t){
var a=Math.min(e,l-t);
if(o.iterN(t,a,n))return!0;
if(0==(e-=a))break;
t=0;
}else t-=l;
}
}
},g.prototype={
addChange:function(t,e,n){
this.undone.length=0;
var r=+new Date,i=this.done[this.done.length-1];
if(r-this.time>400||!i||i.start>t+e||i.start+i.added<t-i.added+i.old.length)this.done.push({
start:t,
added:e,
old:n
});else{
var o=0;
if(t<i.start){
for(var l=i.start-t-1;l>=0;--l)i.old.unshift(n[l]);
i.added+=i.start-t,i.start=t;
}else i.start<t&&(o=t-i.start,e+=o);
for(var l=i.added-o,a=n.length;a>l;++l)i.old.push(n[l]);
i.added<e&&(i.added=e);
}
this.time=r;
}
},t.e_stop=C,t.e_preventDefault=y,t.e_stopPropagation=k,t.connect=S,M.prototype={
set:function(t,e){
clearTimeout(this.id),this.id=setTimeout(e,t);
}
};
var F=function(){
if(/MSIE [1-8]\b/.test(navigator.userAgent))return!1;
var t=document.createElement("div");
return"draggable"in t;
}(),j=/gecko\/\d{7}/i.test(navigator.userAgent),G=/MSIE \d/.test(navigator.userAgent),Y=/WebKit\//.test(navigator.userAgent),_="\n";
!function(){
var t=document.createElement("textarea");
t.value="foo\nbar",t.value.indexOf("\r")>-1&&(_="\r\n");
}(),null!=document.documentElement.getBoundingClientRect&&(z=function(t,e){
try{
var n=t.getBoundingClientRect();
n={
top:n.top,
left:n.left
};
}catch(r){
n={
top:0,
left:0
};
}
if(!e)if(null==window.pageYOffset){
var i=document.documentElement||document.body.parentNode;
null==i.scrollTop&&(i=document.body),n.top+=i.scrollTop,n.left+=i.scrollLeft;
}else n.top+=window.pageYOffset,n.left+=window.pageXOffset;
return n;
});
var q=document.createElement("pre");
"\na"==D("a")?D=function(t){
return q.textContent=t,q.innerHTML.slice(1);
}:"	"!=D("	")&&(D=function(t){
return q.innerHTML="",q.appendChild(document.createTextNode(t)),q.innerHTML;
}),t.htmlEscape=D;
var X=3!="\n\nb".split(/\n/).length?function(t){
for(var e,n=0,r=[];(e=t.indexOf("\n",n))>-1;)r.push(t.slice(n,"\r"==t.charAt(e-1)?e-1:e)),
n=e+1;
return r.push(t.slice(n)),r;
}:function(t){
return t.split(/\r?\n/);
};
t.splitLines=X;
var $=window.getSelection?function(t){
try{
return t.selectionStart!=t.selectionEnd;
}catch(e){
return!1;
}
}:function(t){
try{
var e=t.ownerDocument.selection.createRange();
}catch(n){}
return e&&e.parentElement()==t?0!=e.compareEndPoints("StartToEnd",e):!1;
};
t.defineMode("null",function(){
return{
token:function(t){
t.skipToEnd();
}
};
}),t.defineMIME("text/plain","null");
var Z={
3:"Enter",
8:"Backspace",
9:"Tab",
13:"Enter",
16:"Shift",
17:"Ctrl",
18:"Alt",
19:"Pause",
20:"CapsLock",
27:"Esc",
32:"Space",
33:"PageUp",
34:"PageDown",
35:"End",
36:"Home",
37:"Left",
38:"Up",
39:"Right",
40:"Down",
44:"PrintScrn",
45:"Insert",
46:"Delete",
59:";",
91:"Mod",
92:"Mod",
93:"Mod",
186:";",
187:"=",
188:",",
189:"-",
190:".",
191:"/",
192:"`",
219:"[",
220:"\\",
221:"]",
222:"'",
63276:"PageUp",
63277:"PageDown",
63275:"End",
63273:"Home",
63234:"Left",
63232:"Up",
63235:"Right",
63233:"Down",
63302:"Insert",
63272:"Delete"
};
return t.keyNames=Z,function(){
for(var t=0;10>t;t++)Z[t+48]=String(t);
for(var t=65;90>=t;t++)Z[t]=String.fromCharCode(t);
for(var t=1;12>=t;t++)Z[t+111]=Z[t+63235]="F"+t;
}(),t;
}();
return e.defineMode("xml",function(t,e){
function n(t,e){
function n(n){
return e.tokenize=n,n(t,e);
}
var i=t.next();
if("<"==i){
if(t.eat("!"))return t.eat("[")?t.match("CDATA[")?n(o("atom","]]>")):null:t.match("--")?n(o("comment","-->")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),
n(l(1))):null;
if(t.eat("?"))return t.eatWhile(/[\w\._\-]/),e.tokenize=o("meta","?>"),"meta";
x=t.eat("/")?"closeTag":"openTag",t.eatSpace(),v="";
for(var a;a=t.eat(/[^\s\u00a0=<>\"\'\/?]/);)v+=a;
return e.tokenize=r,"tag";
}
return"&"==i?(t.eatWhile(/[^;]/),t.eat(";"),"atom"):(t.eatWhile(/[^&<]/),null);
}
function r(t,e){
var r=t.next();
return">"==r||"/"==r&&t.eat(">")?(e.tokenize=n,x=">"==r?"endTag":"selfcloseTag",
"tag"):"="==r?(x="equals",null):/[\'\"]/.test(r)?(e.tokenize=i(r),e.tokenize(t,e)):(t.eatWhile(/[^\s\u00a0=<>\"\'\/?]/),
"word");
}
function i(t){
return function(e,n){
for(;!e.eol();)if(e.next()==t){
n.tokenize=r;
break;
}
return"string";
};
}
function o(t,e){
return function(r,i){
for(;!r.eol();){
if(r.match(e)){
i.tokenize=n;
break;
}
r.next();
}
return t;
};
}
function l(t){
return function(e,r){
for(var i;null!=(i=e.next());){
if("<"==i)return r.tokenize=l(t+1),r.tokenize(e,r);
if(">"==i){
if(1==t){
r.tokenize=n;
break;
}
return r.tokenize=l(t-1),r.tokenize(e,r);
}
}
return"meta";
};
}
function a(){
for(var t=arguments.length-1;t>=0;t--)y.cc.push(arguments[t]);
}
function s(){
return a.apply(null,arguments),!0;
}
function u(t,e){
var n=w.doNotIndent.hasOwnProperty(t)||y.context&&y.context.noIndent;
y.context={
prev:y.context,
tagName:t,
indent:y.indented,
startOfLine:e,
noIndent:n
};
}
function f(){
y.context&&(y.context=y.context.prev);
}
function c(t){
if("openTag"==t)return y.tagName=v,s(m,h(y.startOfLine));
if("closeTag"==t){
var e=!1;
return e=y.context?y.context.tagName!=v:!0,e&&(k="error"),s(d(e));
}
return s();
}
function h(t){
return function(e){
return"selfcloseTag"==e||"endTag"==e&&w.autoSelfClosers.hasOwnProperty(y.tagName.toLowerCase())?s():"endTag"==e?(u(y.tagName,t),
s()):s();
};
}
function d(t){
return function(e){
return t&&(k="error"),"endTag"==e?(f(),s()):(k="error",s(arguments.callee));
};
}
function m(t){
return"word"==t?(k="attribute",s(m)):"equals"==t?s(p,m):"string"==t?(k="error",s(m)):a();
}
function p(t){
return"word"==t&&w.allowUnquoted?(k="string",s()):"string"==t?s(g):a();
}
function g(t){
return"string"==t?s(g):a();
}
var v,x,y,k,C=t.indentUnit,w=e.htmlMode?{
autoSelfClosers:{
br:!0,
img:!0,
hr:!0,
link:!0,
input:!0,
meta:!0,
col:!0,
frame:!0,
base:!0,
area:!0
},
doNotIndent:{
pre:!0
},
allowUnquoted:!0
}:{
autoSelfClosers:{},
doNotIndent:{},
allowUnquoted:!1
},b=e.alignCDATA;
return{
startState:function(){
return{
tokenize:n,
cc:[],
indented:0,
startOfLine:!0,
tagName:null,
context:null
};
},
token:function(t,e){
if(t.sol()&&(e.startOfLine=!0,e.indented=t.indentation()),t.eatSpace())return null;
k=x=v=null;
var n=e.tokenize(t,e);
if(e.type=x,(n||x)&&"comment"!=n)for(y=e;;){
var r=e.cc.pop()||c;
if(r(x||n))break;
}
return e.startOfLine=!1,k||n;
},
indent:function(t,e,i){
var o=t.context;
if(t.tokenize!=r&&t.tokenize!=n||o&&o.noIndent)return i?i.match(/^(\s*)/)[0].length:0;
if(b&&/<!\[CDATA\[/.test(e))return 0;
for(o&&/^<\//.test(e)&&(o=o.prev);o&&!o.startOfLine;)o=o.prev;
return o?o.indent+C:0;
},
compareStates:function(t,e){
if(t.indented!=e.indented||t.tokenize!=e.tokenize)return!1;
for(var n=t.context,r=e.context;;n=n.prev,r=r.prev){
if(!n||!r)return n==r;
if(n.tagName!=r.tagName)return!1;
}
},
electricChars:"/"
};
}),e.defineMIME("application/xml","xml"),e.defineMIME("text/html",{
name:"xml",
htmlMode:!0
}),e.defineMode("javascript",function(t,e){
function n(t,e,n){
return e.tokenize=n,n(t,e);
}
function r(t,e){
for(var n,r=!1;null!=(n=t.next());){
if(n==e&&!r)return!1;
r=!r&&"\\"==n;
}
return r;
}
function i(t,e,n){
return O=t,R=n,e;
}
function o(t,e){
var o=t.next();
if('"'==o||"'"==o)return n(t,e,l(o));
if(/[\[\]{}\(\),;\:\.]/.test(o))return i(o);
if("0"==o&&t.eat(/x/i))return t.eatWhile(/[\da-f]/i),i("number","number");
if(/\d/.test(o))return t.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),i("number","number");
if("/"==o)return t.eat("*")?n(t,e,a):t.eat("/")?(t.skipToEnd(),i("comment","comment")):e.reAllowed?(r(t,"/"),
t.eatWhile(/[gimy]/),i("regexp","string")):(t.eatWhile(V),i("operator",null,t.current()));
if("#"==o)return t.skipToEnd(),i("error","error");
if(V.test(o))return t.eatWhile(V),i("operator",null,t.current());
t.eatWhile(/[\w\$_]/);
var s=t.current(),u=B.propertyIsEnumerable(s)&&B[s];
return u&&e.kwAllowed?i(u.type,u.style,s):i("variable","variable",s);
}
function l(t){
return function(e,n){
return r(e,t)||(n.tokenize=o),i("string","string");
};
}
function a(t,e){
for(var n,r=!1;n=t.next();){
if("/"==n&&r){
e.tokenize=o;
break;
}
r="*"==n;
}
return i("comment","comment");
}
function s(t,e,n,r,i,o){
this.indented=t,this.column=e,this.type=n,this.prev=i,this.info=o,null!=r&&(this.align=r);
}
function u(t,e){
for(var n=t.localVars;n;n=n.next)if(n.name==e)return!0;
}
function f(t,e,n,r,i){
var o=t.cc;
for(F.state=t,F.stream=i,F.marked=null,F.cc=o,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);;){
var l=o.length?o.pop():U?k:y;
if(l(n,r)){
for(;o.length&&o[o.length-1].lex;)o.pop()();
return F.marked?F.marked:"variable"==n&&u(t,r)?"variable-2":e;
}
}
}
function c(){
for(var t=arguments.length-1;t>=0;t--)F.cc.push(arguments[t]);
}
function h(){
return c.apply(null,arguments),!0;
}
function d(t){
var e=F.state;
if(e.context){
F.marked="def";
for(var n=e.localVars;n;n=n.next)if(n.name==t)return;
e.localVars={
name:t,
next:e.localVars
};
}
}
function m(){
F.state.context||(F.state.localVars=j),F.state.context={
prev:F.state.context,
vars:F.state.localVars
};
}
function p(){
F.state.localVars=F.state.context.vars,F.state.context=F.state.context.prev;
}
function g(t,e){
var n=function(){
var n=F.state;
n.lexical=new s(n.indented,F.stream.column(),t,null,n.lexical,e);
};
return n.lex=!0,n;
}
function v(){
var t=F.state;
t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev);
}
function x(t){
return function(e){
return e==t?h():";"==t?c():h(arguments.callee);
};
}
function y(t){
return"var"==t?h(g("vardef"),z,x(";"),v):"keyword a"==t?h(g("form"),k,y,v):"keyword b"==t?h(g("form"),y,v):"{"==t?h(g("}"),A,v):";"==t?h():"function"==t?h(H):"for"==t?h(g("form"),x("("),g(")"),E,x(")"),v,y,v):"variable"==t?h(g("stat"),b):"switch"==t?h(g("form"),k,g("}","switch"),x("{"),A,v,v):"case"==t?h(k,x(":")):"default"==t?h(x(":")):"catch"==t?h(g("form"),m,x("("),I,x(")"),y,v,p):c(g("stat"),k,x(";"),v);
}
function k(t){
return K.hasOwnProperty(t)?h(w):"function"==t?h(H):"keyword c"==t?h(C):"("==t?h(g(")"),k,x(")"),v,w):"operator"==t?h(k):"["==t?h(g("]"),L(k,"]"),v,w):"{"==t?h(g("}"),L(M,"}"),v,w):h();
}
function C(t){
return t.match(/[;\}\)\],]/)?c():c(k);
}
function w(t,e){
if("operator"==t&&/\+\+|--/.test(e))return h(w);
if("operator"==t)return h(k);
if(";"!=t)return"("==t?h(g(")"),L(k,")"),v,w):"."==t?h(S,w):"["==t?h(g("]"),k,x("]"),v,w):void 0;
}
function b(t){
return":"==t?h(v,y):c(w,x(";"),v);
}
function S(t){
return"variable"==t?(F.marked="property",h()):void 0;
}
function M(t){
return"variable"==t&&(F.marked="property"),K.hasOwnProperty(t)?h(x(":"),k):void 0;
}
function L(t,e){
function n(r){
return","==r?h(t,n):r==e?h():h(x(e));
}
return function(r){
return r==e?h():c(t,n);
};
}
function A(t){
return"}"==t?h():c(y,A);
}
function z(t,e){
return"variable"==t?(d(e),h(T)):h();
}
function T(t,e){
return"="==e?h(k,T):","==t?h(z):void 0;
}
function E(t){
return"var"==t?h(z,N):";"==t?c(N):"variable"==t?h(W):c(N);
}
function W(t,e){
return"in"==e?h(k):h(w,N);
}
function N(t,e){
return";"==t?h(D):"in"==e?h(k):h(k,x(";"),D);
}
function D(t){
")"!=t&&h(k);
}
function H(t,e){
return"variable"==t?(d(e),h(H)):"("==t?h(g(")"),m,L(I,")"),v,y,p):void 0;
}
function I(t,e){
return"variable"==t?(d(e),h()):void 0;
}
var O,R,P=t.indentUnit,U=e.json,B=function(){
function t(t){
return{
type:t,
style:"keyword"
};
}
var e=t("keyword a"),n=t("keyword b"),r=t("keyword c"),i=t("operator"),o={
type:"atom",
style:"atom"
};
return{
"if":e,
"while":e,
"with":e,
"else":n,
"do":n,
"try":n,
"finally":n,
"return":r,
"break":r,
"continue":r,
"new":r,
"delete":r,
"throw":r,
"var":t("var"),
"const":t("var"),
let:t("var"),
"function":t("function"),
"catch":t("catch"),
"for":t("for"),
"switch":t("switch"),
"case":t("case"),
"default":t("default"),
"in":i,
"typeof":i,
"instanceof":i,
"true":o,
"false":o,
"null":o,
undefined:o,
NaN:o,
Infinity:o
};
}(),V=/[+\-*&%=<>!?|]/,K={
atom:!0,
number:!0,
variable:!0,
string:!0,
regexp:!0
},F={
state:null,
column:null,
marked:null,
cc:null
},j={
name:"this",
next:{
name:"arguments"
}
};
return v.lex=!0,{
startState:function(t){
return{
tokenize:o,
reAllowed:!0,
kwAllowed:!0,
cc:[],
lexical:new s((t||0)-P,0,"block",!1),
localVars:null,
context:null,
indented:0
};
},
token:function(t,e){
if(t.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=t.indentation()),
t.eatSpace())return null;
var n=e.tokenize(t,e);
return"comment"==O?n:(e.reAllowed="operator"==O||"keyword c"==O||O.match(/^[\[{}\(,;:]$/),
e.kwAllowed="."!=O,f(e,n,O,R,t));
},
indent:function(t,e){
if(t.tokenize!=o)return 0;
var n=e&&e.charAt(0),r=t.lexical,i=r.type,l=n==i;
return"vardef"==i?r.indented+4:"form"==i&&"{"==n?r.indented:"stat"==i||"form"==i?r.indented+P:"switch"!=r.info||l?r.align?r.column+(l?0:1):r.indented+(l?0:P):r.indented+(/^(?:case|default)\b/.test(e)?P:2*P);
},
electricChars:":{}"
};
}),e.defineMIME("text/javascript","javascript"),e.defineMIME("application/json",{
name:"javascript",
json:!0
}),e.defineMode("css",function(t){
function e(t,e){
return l=e,t;
}
function n(t,n){
var l=t.next();
return"@"==l?(t.eatWhile(/[\w\\\-]/),e("meta",t.current())):"/"==l&&t.eat("*")?(n.tokenize=r,
r(t,n)):"<"==l&&t.eat("!")?(n.tokenize=i,i(t,n)):"="!=l?"~"!=l&&"|"!=l||!t.eat("=")?'"'==l||"'"==l?(n.tokenize=o(l),
n.tokenize(t,n)):"#"==l?(t.eatWhile(/[\w\\\-]/),e("atom","hash")):"!"==l?(t.match(/^\s*\w*/),
e("keyword","important")):/\d/.test(l)?(t.eatWhile(/[\w.%]/),e("number","unit")):/[,.+>*\/]/.test(l)?e(null,"select-op"):/[;{}:\[\]]/.test(l)?e(null,l):(t.eatWhile(/[\w\\\-]/),
e("variable","variable")):e(null,"compare"):void e(null,"compare");
}
function r(t,r){
for(var i,o=!1;null!=(i=t.next());){
if(o&&"/"==i){
r.tokenize=n;
break;
}
o="*"==i;
}
return e("comment","comment");
}
function i(t,r){
for(var i,o=0;null!=(i=t.next());){
if(o>=2&&">"==i){
r.tokenize=n;
break;
}
o="-"==i?o+1:0;
}
return e("comment","comment");
}
function o(t){
return function(r,i){
for(var o,l=!1;null!=(o=r.next())&&(o!=t||l);)l=!l&&"\\"==o;
return l||(i.tokenize=n),e("string","string");
};
}
var l,a=t.indentUnit;
return{
startState:function(t){
return{
tokenize:n,
baseIndent:t||0,
stack:[]
};
},
token:function(t,e){
if(t.eatSpace())return null;
var n=e.tokenize(t,e),r=e.stack[e.stack.length-1];
return"hash"==l&&"rule"==r?n="atom":"variable"==n&&("rule"==r?n="number":r&&"@media{"!=r||(n="tag")),
"rule"==r&&/^[\{\};]$/.test(l)&&e.stack.pop(),"{"==l?"@media"==r?e.stack[e.stack.length-1]="@media{":e.stack.push("{"):"}"==l?e.stack.pop():"@media"==l?e.stack.push("@media"):"{"==r&&"comment"!=l&&e.stack.push("rule"),
n;
},
indent:function(t,e){
var n=t.stack.length;
return/^\}/.test(e)&&(n-="rule"==t.stack[t.stack.length-1]?2:1),t.baseIndent+n*a;
},
electricChars:"}"
};
}),e.defineMIME("text/css","css"),e.defineMode("htmlmixed",function(t){
function n(t,e){
var n=l.token(t,e.htmlState);
return"tag"==n&&">"==t.current()&&e.htmlState.context&&(/^script$/i.test(e.htmlState.context.tagName)?(e.token=i,
e.localState=a.startState(l.indent(e.htmlState,"")),e.mode="javascript"):/^style$/i.test(e.htmlState.context.tagName)&&(e.token=o,
e.localState=s.startState(l.indent(e.htmlState,"")),e.mode="css")),n;
}
function r(t,e,n){
var r=t.current(),i=r.search(e);
return i>-1&&t.backUp(r.length-i),n;
}
function i(t,e){
return t.match(/^<\/\s*script\s*>/i,!1)?(e.token=n,e.curState=null,e.mode="html",
n(t,e)):r(t,/<\/\s*script\s*>/,a.token(t,e.localState));
}
function o(t,e){
return t.match(/^<\/\s*style\s*>/i,!1)?(e.token=n,e.localState=null,e.mode="html",
n(t,e)):r(t,/<\/\s*style\s*>/,s.token(t,e.localState));
}
var l=e.getMode(t,{
name:"xml",
htmlMode:!0
}),a=e.getMode(t,"javascript"),s=e.getMode(t,"css");
return{
startState:function(){
var t=l.startState();
return{
token:n,
localState:null,
mode:"html",
htmlState:t
};
},
copyState:function(t){
if(t.localState)var n=e.copyState(t.token==o?s:a,t.localState);
return{
token:t.token,
localState:n,
mode:t.mode,
htmlState:e.copyState(l,t.htmlState)
};
},
token:function(t,e){
return e.token(t,e);
},
indent:function(t,e){
return t.token==n||/^\s*<\//.test(e)?l.indent(t.htmlState,e):t.token==i?a.indent(t.localState,e):s.indent(t.localState,e);
},
compareStates:function(t,e){
return l.compareStates(t.htmlState,e.htmlState);
},
electricChars:"/{}:"
};
}),e.defineMIME("text/html","htmlmixed"),e;
});define("tpl/mpEditor/plugin/link_popup.html.js",[],function(){
return'{if needBreak}\n<div style="height:5px;display:none"></div>\n{/if}\n<div class="js_link_popup edui_mask_edit_group with_line">\n	<a class="edui_mask_edit_meta edui_popup_link" target="_blank" href="{url}" title="{url}" >{txt}</a>\n	<div class="primary edui_mask_edit_meta no_extra edui-clickable" onclick="$$._execCommandAndHide(\'link\');">\n        <div class="edui_mask_edit_meta_inner">\n        修改        </div>\n    </div>\n	<div class="primary edui_mask_edit_meta edui-clickable" onclick="$$._execCommandAndHide(\'unlink\');">\n        <div class="edui_mask_edit_meta_inner">\n        清除        </div>\n    </div>\n</div>\n';
});define("tpl/mpEditor/plugin/link_dialog.html.js",[],function(){
return'<form class="js_linkForm">\n    <div class="frm_control_group">\n        <label for="" class="frm_label">文本内容</label>\n        <div class="frm_controls">\n            <span class="frm_input_box">\n                <input type="text" name="title" class="js_txtTitle frm_input js_input" placeholder="请填写被点击的文字内容">\n            </span>\n            <!-- <p class="frm_msg fail">\n                <span class="frm_msg_content">表单验证消息 失败</span>\n            </p> -->\n        </div>\n    </div>\n    <div class="frm_control_group" >\n        <label for="" class="frm_label">链接地址</label>\n        <div class="frm_controls">\n            <span class="frm_input_box">\n                <input type="text" name="href" class="js_txtHref frm_input" placeholder="" value="http://">\n            </span>\n        </div>\n    </div>\n</form>\n';
});define("biz_common/jquery.validate.js",[],function(){
!function(t){
t.extend(t.fn,{
validate:function(e){
if(!this.length)return void(e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));
var i=t.data(this[0],"validator");
return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),
i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){
i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),
void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0);
}),this.submit(function(e){
function r(){
var r;
return i.settings.submitHandler?(i.submitButton&&(r=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),
i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&r.remove(),!1):!0;
}
return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,r()):i.form()?i.pendingRequest?(i.formSubmitted=!0,
!1):r():(i.focusInvalid(),!1);
})),i);
},
valid:function(){
if(t(this[0]).is("form"))return this.validate().form();
var e=!0,i=t(this[0].form).validate();
return this.each(function(){
e=e&&i.element(this);
}),e;
},
removeAttrs:function(e){
var i={},r=this;
return t.each(e.split(/\s/),function(t,e){
i[e]=r.attr(e),r.removeAttr(e);
}),i;
},
rules:function(e,i){
var r=this[0];
if(e){
var n=t.data(r.form,"validator").settings,s=n.rules,a=t.validator.staticRules(r);
switch(e){
case"add":
t.extend(a,t.validator.normalizeRule(i)),delete a.messages,s[r.name]=a,i.messages&&(n.messages[r.name]=t.extend(n.messages[r.name],i.messages));
break;

case"remove":
if(!i)return delete s[r.name],a;
var o={};
return t.each(i.split(/\s/),function(t,e){
o[e]=a[e],delete a[e];
}),o;
}
}
var u=t.validator.normalizeRules(t.extend({},t.validator.classRules(r),t.validator.attributeRules(r),t.validator.dataRules(r),t.validator.staticRules(r)),r);
if(u.required){
var l=u.required;
delete u.required,u=t.extend({
required:l
},u);
}
return u;
}
}),t.extend(t.expr[":"],{
blank:function(e){
return!t.trim(""+t(e).val());
},
filled:function(e){
return!!t.trim(""+t(e).val());
},
unchecked:function(e){
return!t(e).prop("checked");
}
}),t.validator=function(e,i){
this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init();
},t.validator.format=function(e,i){
return 1===arguments.length?function(){
var i=t.makeArray(arguments);
return i.unshift(e),t.validator.format.apply(this,i);
}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),
i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){
e=e.replace(new RegExp("\\{"+t+"\\}","g"),function(){
return i;
});
}),e);
},t.extend(t.validator,{
defaults:{
messages:{},
groups:{},
rules:{},
errorClass:"error",
validClass:"valid",
errorElement:"label",
focusInvalid:!0,
errorContainer:t([]),
errorLabelContainer:t([]),
onsubmit:!0,
ignore:":hidden",
ignoreTitle:!1,
onfocusin:function(t){
this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),
this.addWrapper(this.errorsFor(t)).hide());
},
onfocusout:function(t){
this.checkable(t)||this.element(t);
},
onkeyup:function(t,e){
(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t);
},
onclick:function(t){
t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode);
},
highlight:function(e,i,r){
"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(r):t(e).addClass(i).removeClass(r);
},
unhighlight:function(e,i,r){
"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(r):t(e).removeClass(i).addClass(r);
}
},
setDefaults:function(e){
t.extend(t.validator.defaults,e);
},
messages:{
required:"This field is required.",
remote:"Please fix this field.",
email:"Please enter a valid email address.",
url:"Please enter a valid URL.",
date:"Please enter a valid date.",
dateISO:"Please enter a valid date (ISO).",
number:"Please enter a valid number.",
digits:"Please enter only digits.",
creditcard:"Please enter a valid credit card number.",
equalTo:"Please enter the same value again.",
maxlength:t.validator.format("Please enter no more than {0} characters."),
minlength:t.validator.format("Please enter at least {0} characters."),
rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),
range:t.validator.format("Please enter a value between {0} and {1}."),
max:t.validator.format("Please enter a value less than or equal to {0}."),
min:t.validator.format("Please enter a value greater than or equal to {0}.")
},
autoCreateRanges:!1,
prototype:{
init:function(){
function e(e){
var i=t.data(this[0].form,"validator"),r="on"+e.type.replace(/^validate/,"");
i.settings[r]&&i.settings[r].call(i,this[0],e);
}
this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),
this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},
this.reset();
var i=this.groups={};
t.each(this.settings.groups,function(e,r){
"string"==typeof r&&(r=r.split(/\s/)),t.each(r,function(t,r){
i[r]=e;
});
});
var r=this.settings.rules;
t.each(r,function(e,i){
r[e]=t.validator.normalizeRule(i);
}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),
this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);
},
form:function(){
return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),
this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),
this.valid();
},
checkForm:function(){
this.prepareForm();
for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);
return this.valid();
},
element:function(e){
e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),
this.currentElements=t(e);
var i=this.check(e)!==!1;
return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),
this.showErrors(),i;
},
showErrors:function(e){
if(e){
t.extend(this.errorMap,e),this.errorList=[];
for(var i in e)this.errorList.push({
message:e[i],
element:this.findByName(i)[0]
});
this.successList=t.grep(this.successList,function(t){
return!(t.name in e);
});
}
this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();
},
resetForm:function(){
t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,
this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
},
numberOfInvalids:function(){
return this.objectLength(this.invalid);
},
objectLength:function(t){
var e=0;
for(var i in t)e++;
return e;
},
hideErrors:function(){
this.addWrapper(this.toHide).hide();
},
valid:function(){
return 0===this.size();
},
size:function(){
return this.errorList.length;
},
focusInvalid:function(){
if(this.settings.focusInvalid)try{
t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");
}catch(e){}
},
findLastActive:function(){
var e=this.lastActive;
return e&&1===t.grep(this.errorList,function(t){
return t.element.name===e.name;
}).length&&e;
},
elements:function(){
var e=this,i={};
return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){
return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),
this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0);
});
},
clean:function(e){
return t(e)[0];
},
errors:function(){
var e=this.settings.errorClass.replace(" ",".");
return t(this.settings.errorElement+"."+e,this.errorContext);
},
reset:function(){
this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),
this.currentElements=t([]);
},
prepareForm:function(){
this.reset(),this.toHide=this.errors().add(this.containers);
},
prepareElement:function(t){
this.reset(),this.toHide=this.errorsFor(t);
},
elementValue:function(e){
var i=t(e).attr("type"),r=t(e).val();
return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof r?r.replace(/\r/g,""):r;
},
check:function(e){
e=this.validationTargetFor(this.clean(e));
var i,r=t(e).rules(),n=!1,s=this.elementValue(e);
for(var a in r){
var o={
method:a,
parameters:r[a]
};
try{
if(i=t.validator.methods[a].call(this,s,e,o.parameters),"dependency-mismatch"===i){
n=!0;
continue;
}
if(n=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));
if(!i)return this.formatAndAdd(e,o),!1;
}catch(u){
throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+o.method+"' method.",u),
u;
}
}
return n?void 0:(this.objectLength(r)&&this.successList.push(e),!0);
},
customDataMessage:function(e,i){
return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase());
},
customMessage:function(t,e){
var i=this.settings.messages[t];
return i&&(i.constructor===String?i:i[e]);
},
findDefined:function(){
for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t];
return void 0;
},
defaultMessage:function(e,i){
return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>");
},
formatAndAdd:function(e,i){
var r=this.defaultMessage(e,i.method),n=/\$?\{(\d+)\}/g;
"function"==typeof r?r=r.call(this,i.parameters,e):n.test(r)&&(r=t.validator.format(r.replace(n,"{$1}"),i.parameters)),
this.errorList.push({
message:r,
element:e
}),this.errorMap[e.name]=r,this.submitted[e.name]=r;
},
addWrapper:function(t){
return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t;
},
defaultShowErrors:function(){
var t,e;
for(t=0;this.errorList[t];t++){
var i=this.errorList[t];
this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),
this.showLabel(i.element,i.message);
}
if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);
if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);
this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show();
},
validElements:function(){
return this.currentElements.not(this.invalidElements());
},
invalidElements:function(){
return t(this.errorList).map(function(){
return this.element;
});
},
showLabel:function(e,i){
var r=this.errorsFor(e);
r.length?(r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
r.html(i)):(r=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),
this.settings.wrapper&&(r=r.hide().show().wrap("<"+this.settings.wrapper+" class='frm_msg fail'/>").parent()),
this.labelContainer.append(r).length||(this.settings.errorPlacement?this.settings.errorPlacement(r,t(e)):r.insertAfter(e))),
!i&&this.settings.success&&(r.text(""),"string"==typeof this.settings.success?r.addClass(this.settings.success):this.settings.success(r,e)),
this.toShow=this.toShow.add(r);
},
errorsFor:function(e){
var i=this.idOrName(e);
return this.errors().filter(function(){
return t(this).attr("for")===i;
});
},
idOrName:function(t){
return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name);
},
validationTargetFor:function(t){
return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),
t;
},
checkable:function(t){
return/radio|checkbox/i.test(t.type);
},
findByName:function(e){
return t(this.currentForm).find("[name='"+e+"']");
},
getLength:function(e,i){
switch(i.nodeName.toLowerCase()){
case"select":
return t("option:selected",i).length;

case"input":
if(this.checkable(i))return this.findByName(i.name).filter(":checked").length;
}
return e.length;
},
depend:function(t,e){
return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0;
},
dependTypes:{
"boolean":function(t){
return t;
},
string:function(e,i){
return!!t(e,i.form).length;
},
"function":function(t,e){
return t(e);
}
},
optional:function(e){
var i=this.elementValue(e);
return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch";
},
startRequest:function(t){
this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0);
},
stopRequest:function(e,i){
this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],
i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),
this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),
this.formSubmitted=!1);
},
previousValue:function(e){
return t.data(e,"previousValue")||t.data(e,"previousValue",{
old:null,
valid:!0,
message:this.defaultMessage(e,"remote")
});
}
},
classRuleSettings:{
required:{
required:!0
},
email:{
email:!0
},
url:{
url:!0
},
date:{
date:!0
},
dateISO:{
dateISO:!0
},
number:{
number:!0
},
digits:{
digits:!0
},
creditcard:{
creditcard:!0
}
},
addClassRules:function(e,i){
e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e);
},
classRules:function(e){
var i={},r=t(e).attr("class");
return r&&t.each(r.split(" "),function(){
this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this]);
}),i;
},
attributeRules:function(e){
var i={},r=t(e),n=r[0].getAttribute("type");
for(var s in t.validator.methods){
var a;
"required"===s?(a=r.get(0).getAttribute(s),""===a&&(a=!0),a=!!a):a=r.attr(s),/min|max/.test(s)&&(null===n||/number|range|text/.test(n))&&(a=Number(a)),
a?i[s]=a:n===s&&"range"!==n&&(i[s]=!0);
}
return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,
i;
},
dataRules:function(e){
var i,r,n={},s=t(e);
for(i in t.validator.methods)r=s.data("rule-"+i.toLowerCase()),void 0!==r&&(n[i]=r);
return n;
},
staticRules:function(e){
var i={},r=t.data(e.form,"validator");
return r.settings.rules&&(i=t.validator.normalizeRule(r.settings.rules[e.name])||{}),
i;
},
normalizeRules:function(e,i){
return t.each(e,function(r,n){
if(n===!1)return void delete e[r];
if(n.param||n.depends){
var s=!0;
switch(typeof n.depends){
case"string":
s=!!t(n.depends,i.form).length;
break;

case"function":
s=n.depends.call(i,i);
}
s?"string"!=typeof n&&(e[r]=void 0!==n.param?n.param:!0):delete e[r];
}
}),t.each(e,function(r,n){
e[r]=t.isFunction(n)?n(i):n;
}),t.each(["minlength","maxlength"],function(){
e[this]&&(e[this]=Number(e[this]));
}),t.each(["rangelength","range"],function(){
var i;
e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),
e[this]=[Number(i[0]),Number(i[1])]));
}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,
delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],
delete e.minlength,delete e.maxlength)),e;
},
normalizeRule:function(e){
if("string"==typeof e){
var i={};
t.each(e.split(/\s/),function(){
i[this]=!0;
}),e=i;
}
return e;
},
addMethod:function(e,i,r){
t.validator.methods[e]=i,t.validator.messages[e]=void 0!==r?r:t.validator.messages[e],
i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e));
},
methods:{
required:function(e,i,r){
if(!this.depend(r,i))return"dependency-mismatch";
if("select"===i.nodeName.toLowerCase()){
var n=t(i).val();
return n&&n.length>0;
}
return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0;
},
email:function(t,e){
return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);
},
url:function(t,e){
return this.optional(e)||/^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);
},
date:function(t,e){
return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString());
},
dateISO:function(t,e){
return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
},
number:function(t,e){
return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
},
digits:function(t,e){
return this.optional(e)||/^\d+$/.test(t);
},
creditcard:function(t,e){
if(this.optional(e))return"dependency-mismatch";
if(/[^0-9 \-]+/.test(t))return!1;
var i=0,r=0,n=!1;
t=t.replace(/\D/g,"");
for(var s=t.length-1;s>=0;s--){
var a=t.charAt(s);
r=parseInt(a,10),n&&(r*=2)>9&&(r-=9),i+=r,n=!n;
}
return i%10===0;
},
minlength:function(e,i,r){
var n=t.isArray(e)?e.length:this.getLength(t.trim(e),i);
return this.optional(i)||n>=r;
},
maxlength:function(e,i,r){
var n=t.isArray(e)?e.length:this.getLength(t.trim(e),i);
return this.optional(i)||r>=n;
},
rangelength:function(e,i,r){
var n=t.isArray(e)?e.length:this.getLength(t.trim(e),i);
return this.optional(i)||n>=r[0]&&n<=r[1];
},
min:function(t,e,i){
return this.optional(e)||t>=i;
},
max:function(t,e,i){
return this.optional(e)||i>=t;
},
range:function(t,e,i){
return this.optional(e)||t>=i[0]&&t<=i[1];
},
equalTo:function(e,i,r){
var n=t(r);
return this.settings.onfocusout&&n.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){
t(i).valid();
}),e===n.val();
},
remote:function(e,i,r){
if(this.optional(i))return"dependency-mismatch";
var n=this.previousValue(i);
if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),n.originalMessage=this.settings.messages[i.name].remote,
this.settings.messages[i.name].remote=n.message,r="string"==typeof r&&{
url:r
}||r,n.old===e)return n.valid;
n.old=e;
var s=this;
this.startRequest(i);
var a={};
return a[i.name]=e,t.ajax(t.extend(!0,{
url:r,
mode:"abort",
port:"validate"+i.name,
dataType:"json",
data:a,
success:function(r){
s.settings.messages[i.name].remote=n.originalMessage;
var a=r===!0||"true"===r;
if(a){
var o=s.formSubmitted;
s.prepareElement(i),s.formSubmitted=o,s.successList.push(i),delete s.invalid[i.name],
s.showErrors();
}else{
var u={},l=r||s.defaultMessage(i,"remote");
u[i.name]=n.message=t.isFunction(l)?l(e):l,s.invalid[i.name]=!0,s.showErrors(u);
}
n.valid=a,s.stopRequest(i,a);
}
},r)),"pending";
}
}
}),t.format=t.validator.format;
}(jQuery),function(t){
var e={};
if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,r){
var n=t.port;
"abort"===t.mode&&(e[n]&&e[n].abort(),e[n]=r);
});else{
var i=t.ajax;
t.ajax=function(r){
var n=("mode"in r?r:t.ajaxSettings).mode,s=("port"in r?r:t.ajaxSettings).port;
return"abort"===n?(e[s]&&e[s].abort(),e[s]=i.apply(this,arguments),e[s]):i.apply(this,arguments);
};
}
}(jQuery),function(t){
t.extend(t.fn,{
validateDelegate:function(e,i,r){
return this.bind(i,function(i){
var n=t(i.target);
return n.is(e)?r.apply(n,arguments):void 0;
});
}
});
}(jQuery),function(t){
t.validator.defaults.errorClass="frm_msg_content",t.validator.defaults.errorElement="span",
t.validator.defaults.errorPlacement=function(t,e){
e.parent().after(t);
},t.validator.defaults.wrapper="p",t.validator.messages={
required:"必选字段",
remote:"请修正该字段",
email:"请输入正确格式的电子邮件",
url:"请输入合法的网址",
date:"请输入合法的日期",
dateISO:"请输入合法的日期 (ISO).",
number:"请输入合法的数字",
digits:"只能输入整数",
creditcard:"请输入合法的信用卡号",
equalTo:"请再次输入相同的值",
accept:"请输入拥有合法后缀名的字符串",
maxlength:t.validator.format("请输入一个长度最多是 {0} 的字符串"),
minlength:t.validator.format("请输入一个长度最少是 {0} 的字符串"),
rangelength:t.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
range:t.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
max:t.validator.format("请输入一个最大为 {0} 的值"),
min:t.validator.format("请输入一个最小为 {0} 的值")
},function(){
function e(t){
var e,i=0;
"x"==t[17].toLowerCase()&&(t[17]=10);
for(var r=0;17>r;r++)i+=n[r]*t[r];
return e=i%11,t[17]==s[e]?!0:!1;
}
function i(t){
var e=t.substring(6,10),i=t.substring(10,12),r=t.substring(12,14),n=new Date(e,parseFloat(i)-1,parseFloat(r));
return(new Date).getFullYear()-parseInt(e)<18?!1:n.getFullYear()!=parseFloat(e)||n.getMonth()!=parseFloat(i)-1||n.getDate()!=parseFloat(r)?!1:!0;
}
function r(r){
if(r=t.trim(r.replace(/ /g,"")),15==r.length)return!1;
if(18==r.length){
var n=r.split("");
return i(r)&&e(n)?!0:!1;
}
return!1;
}
var n=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],s=[1,0,10,9,8,7,6,5,4,3,2];
t.validator.addMethod("idcard",function(t){
return r(t);
},"身份证格式不正确，或者年龄未满18周岁，请重新填写"),t.validator.addMethod("mobile",function(e){
return e=t.trim(e),/^1\d{10}$/.test(e);
},"请输入正确的手机号码"),t.validator.addMethod("telephone",function(e){
return e=t.trim(e),/^\d{1,4}(-\d{1,12})+$/.test(e);
},"请输入正确的座机号码，如020-12345678"),t.validator.addMethod("verifycode",function(e){
return e=t.trim(e),/^\d{6}$/.test(e);
},"验证码应为6位数字"),t.validator.addMethod("byteRangeLength",function(t,e,i){
return this.optional(e)||t.len()<=i[1]&&t.len()>=i[0];
},"_(必须为{0}到{1}个字节之间)");
}();
}(jQuery);
var t={
optional:function(){
return!1;
},
getLength:function(t){
return t?t.length:0;
}
},e=$.validator;
return e.rules={},$.each(e.methods,function(i,r){
e.rules[i]=function(e,i){
return r.call(t,e,null,i);
};
}),e;
});define("tpl/pagebar.html.js",[],function(){
return'<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});define("common/wx/Cgi.js",["common/qq/mask.js","common/wx/dialog.js","common/wx/Tips.js","common/wx/cgiReport.js","common/lib/MockJax.js","common/qq/events.js"],function(o,a){
"use strict";
function e(o,a,e){
var n,r;
e&&"object"==typeof e?(n=e.done,r=e.fail):n=e,"string"==typeof a&&a.length>0&&(a={
url:a
});
var d=$.extend(!0,{},c.data,{
random:Math.random().toString()
});
if(a=$.extend(!0,{},c,{
type:o,
data:{
random:Math.random().toString()
}
},a),a.mock&&(a.mock===!0?a.mock={
responseText:{
ret:0,
data:{},
url:a.url,
param:a.data
}
}:!a.mock||a.mock.responseText||a.mock.response||(a.mock={
responseText:a.mock
}),a.mock.url=a.mock.url||a.url,$.mockjax(a.mock)),a.mask&&($.isPlainObject(a.mask)?t.show(a.mask):t.show()),
a.data&&"application/json"===a.contentType){
a.url+="&token="+a.data.token;
for(var i in d)a.url+="&"+i+"="+d[i],delete a.data[i];
a.data.token&&(a.data.token=parseInt(a.data.token)),a.data.random&&(a.data.random=Number(a.data.random)),
a.data=JSON.stringify(a.data);
}
var l=$.ajax(a);
return l.callback=l.done,l.done(function(o){
window.__moonsafe_must_transform_var&&window.wx&&wx.moonsafe_report_var&&"object"==typeof o&&"json"==a.dataType&&(o.__url__=a.url.indexOf("action=")<0&&a.data&&a.data.action?a.url+(a.url.indexOf("?")>=0?"&":"?")+"action="+a.data.action:a.url,
wx.moonsafe_report_var(o)),n&&n(o);
}).fail(function(o,e,t){
r&&r(e),s.error(e,a),m.trigger("xhrError",o,e,t,a);
}).always(function(){
a.mask&&t.hide();
}),l;
}
var t=o("common/qq/mask.js"),n=o("common/wx/dialog.js"),r=o("common/wx/Tips.js"),s=o("common/wx/cgiReport.js");
o("common/lib/MockJax.js");
var m=o("common/qq/events.js")(!0),c={
dataType:"json",
mask:!1,
timeout:45e3,
error:$.noop,
mock:!1,
data:{
token:wx.data.t,
lang:wx.data.lang,
f:"json",
ajax:"1"
}
};
a.get=function(o,a){
return e("get",o,a);
},a.post=function(o,a){
return e("post",o,a);
};
var d={
0:"恭喜你，操作成功！",
"-1":"系统错误，请稍后尝试。",
200002:"参数错误，请核对参数后重试。",
200003:"登录超时，请重新登录。",
200004:"请求页面的域名没有授权。",
200005:"请求方式错误，请确认请求方式后重试。",
200006:"表单名称验证出错，请核对表单名称后重试。",
200007:"对不起，你没有权限访问目标请求。"
};
a.show=function(o,a){
var e=d[o.base_resp.ret]||"系统繁忙，请稍后尝试！";
return 0==o.base_resp.ret?void(a?n.show({
type:"succ",
msg:"系统提示|"+e
}):r.suc(e)):void(a?n.show("系统错误|"+e):r.err(e));
},a.handleRet=function(o,a){
o=o||{},a=$.extend(!0,{},{
id:"64430",
key:"30",
showMsg:!0,
msg:"系统繁忙，请稍后尝试"
},a);
var e=o.base_resp?o.base_resp.ret:"undefined",t=d[e];
if(t)a.showMsg&&r.err(t);else{
var n=new Image;
n.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+a.id+"_"+a.key+"&lc=1&log0=handleRet_"+e,
a.showMsg&&r.err(a.msg);
}
};
});var __assign=this&&this.__assign||Object.assign||function(t){
for(var e,n=1,o=arguments.length;o>n;n++){
e=arguments[n];
for(var m in e)Object.prototype.hasOwnProperty.call(e,m)&&(t[m]=e[m]);
}
return t;
};
define("components/comment-list.js",["common/vue/vue.js","common/wx/Tips.js","common/wx/cgiRetCode.js","discussion/blog_cgi.js","common/wx/time.js","common/wx/popover.js","common/wx/mpEditor/plugin/filter.js","common/lib/marked.js","common/wx/constants.js","tpl/components/comment-list.html.js","common/wx/utils.js","common/wx/appMsg.js","components/comment.js","components/pagination.js"],function(t){
"use strict";
function e(t,e){
for(var n=0;n<t.length;){
var o=t[n];
if(e(o))return n;
n+=1;
}
return-1;
}
var n=t("common/vue/vue.js"),o=t("common/wx/Tips.js"),m=t("common/wx/cgiRetCode.js"),i=t("discussion/blog_cgi.js"),s=t("common/wx/time.js"),c=(t("common/wx/popover.js"),
t("common/wx/mpEditor/plugin/filter.js"),t("common/lib/marked.js"),t("common/wx/constants.js")),a=t("tpl/components/comment-list.html.js"),r=t("common/wx/utils.js"),l=t("common/wx/appMsg.js");
t("components/comment.js"),t("components/pagination.js");
var d,p=function(){};
!function(t){
t.HTML="html",t.PlainText="plaintext";
}(d||(d={}));
var h;
!function(t){
t.Comment="comment",t.Reply="reply",t.Modify="modify";
}(h||(h={}));
var u;
!function(t){
t.Comment="评论",t.Reply="回复",t.Modify="修改";
}(u||(u={}));
var g;
!function(t){
t.Generic="展示更多",t.Comment="更多评论",t.Reply="更多回复";
}(g||(g={})),n.component("wx-comment-list",{
props:{
docid:{
type:String,
"default":""
},
blogCategory:{
type:Number,
"default":1
},
commentType:{
type:Number,
"default":c.CommentType.Blog
},
loginUserOpenId:{
type:String,
"default":""
},
loginUserNickName:{
type:String,
"default":""
},
loginUserType:{
type:Number,
"default":0
},
loginUserHeadImg:{
type:String,
"default":""
},
loginUserIsOfficial:{
type:Boolean,
"default":!1
},
articleAuthorOpenId:{
type:String,
"default":""
},
parentComment:{
type:Object,
"default":null
},
defaultImg:{
type:String,
"default":""
},
level:{
type:Number,
"default":1
},
pageSize:{
type:Number,
"default":10
},
contentCommentShow:{
type:Boolean,
"default":!1
}
},
data:function(){
return{
commentList:[],
currentPage:1,
totalComment:0,
editorId:"",
mode:h.Comment,
editMode:d.HTML,
commentTarget:null,
gettingComment:!1,
showCommentInput:!0,
_fetched:!1,
appendedComments:[]
};
},
watch:{
commentList:function(){},
contentCommentShow:function(t){
t&&!this._fetched&&this.getComments({
page:1
},{
scroll:!1
});
}
},
computed:{
isReplying:function(){
return this.mode===h.Reply;
},
submitBtnWording:function(){
if(1!=this.blogCategory)return u.Reply;
switch(this.mode){
case h.Comment:
return u.Comment;

case h.Reply:
return u.Reply;

case h.Modify:
return u.Modify;
}
},
loadMoreWording:function(){
switch(this.commentType){
case c.CommentType.Content:
return g.Generic;

case c.CommentType.Blog:
return g.Comment;

default:
return g.Generic;
}
},
commentListDisplay:function(){
var t=this;
return(this.commentList||[]).map(1===this.level?function(e,n){
return __assign({},e,{
show:e.comment_detail.flag<8&&n>=(t.currentPage-1)*t.pageSize&&n<t.currentPage*t.pageSize
});
}:function(t){
return __assign({},t,{
show:!0
});
});
},
toggleCommentBtnWording:function(){
return this.showCommentInput?"收起"+this.submitBtnWording+"框":this.submitBtnWording;
},
canShowLoadMoreComments:function(){
var t=this,e=function(){
return t.totalComment?t.totalComment?t.totalComment>t.commentListDisplay.length:!0:!1;
};
return 2===this.level&&e();
}
},
created:function(){
var t=this;
this.editorId=+new Date+"_"+Math.floor(1e3*Math.random());
var e=function(){
t.commentList.length&&(t.showCommentInput=!1);
};
1===this.level?this.getComments({
page:1
},{
scroll:!1,
onSuccess:e
}):2!==this.level||this.parentComment?this.parentComment.comment_list&&this.parentComment.comment_list.length?(this.commentList=this.parentComment.comment_list,
this.totalComment=this.parentComment.comment_detail.reply_count,this.commentList.length&&(this.showCommentInput=!1)):this.parentComment.comment_detail.reply_count&&this.getComments({
page:1
},{
scroll:!1,
onSuccess:e
}):this.contentCommentShow&&this.getComments({
page:1
},{
scroll:!1,
onSuccess:e
});
},
mounted:function(){
var t=this,e="#"+this.editorId;
this.submitBtnSelector=e+" .js_submit_edit";
var n={
docid:this.docid,
blog_category:this.blogCategory,
comment_type:this.commentType,
openid:this.loginUserOpenId,
commentid:"",
parent_commentid:"",
reply_commentid:"",
reply_openid:"",
max_content_length:2e4,
editor_selector:e,
submit_btn_selector:this.submitBtnSelector,
noReloadAfterSubmit:!0,
appmsg_data:{
docid:this.docid
},
onEditorReady:function(e){
t.editor=e;
},
onBeforeSave:function(e,n){
return t.submitComment(e,function(){
n&&n();
}),!1;
}
};
this.appmsg=new l(n);
},
methods:{
getComments:function(t,n){
var i=this,s=void 0===t?{}:t,c=s.page,a=void 0===c?this.currentPage:c,r=s.limit,l=void 0===r?this.pageSize:r,d=void 0===n?{}:n,h=d.scroll,u=void 0===h?!0:h,g=d.autoRender,f=void 0===g?!0:g,_=d.onSuccess,C=void 0===_?p:_,y=d.onError,v=void 0===y?p:y;
if(!this.gettingComment){
this.gettingComment=!0,this._fetched=!0;
var w="/blogdetail?";
this.parentComment&&(w+="&parent_commentid="+this.parentComment.comment_detail.commentid),
this.commentType&&(w+="&comment_type="+this.commentType),m.get({
url:w,
data:{
action:"get_post_comment",
docid:this.docid,
page:a,
limit:l
}
},{
done:function(){
return{
before:function(){
i.gettingComment=!1;
},
"default":function(){
o.err("加载评论失败，请稍后再试"),v();
},
0:function(t){
if(t.new_comment_list&&t.new_comment_list.length>=0){
var n=i.formatComment(t.new_comment_list);
if(f){
for(var m=i.commentList.slice(),s=0,c=n.length;c>s;s++)m[(a-1)*l+s]=n[s];
if(i.commentList=m,i.currentPage=a,i.appendedComments.length>0){
for(var r=i.appendedComments,d=[],p=function(t){
e(m,function(e){
return e.comment_detail.commentid===t.comment_detail.commentid;
})<0&&d.push(t);
},h=0,g=r;h<g.length;h++){
var _=g[h];
p(_);
}
i.appendedComments=d;
}
i.parentComment?i.totalComment=t.total_reply_comment:(i.totalComment=t.total_content_comment||t.total_blog_comment,
2==i.commentType&&i.$emit("content-comment-change",i.totalComment)),u&&$("html,body").animate({
scrollTop:i.$el.offsetTop
});
}
var y={
page:a,
commentList:n,
totalComment:i.totalComment
};
2!=i.commentType&&i.$emit("comment-fetched",y),C(y);
}else o.err(1===i.blogCategory&&1===i.level?"没有更多回答":"没有更多评论"),C();
}
};
},
fail:function(){
i.gettingComment=!1,o.err("加载评论失败，请稍后再试"),v();
}
});
}
},
onJumpToPage:function(t){
this.getComments({
page:t
});
},
loadMore:function(){
this.commentList.length%this.pageSize===0?this.getComments({
page:this.currentPage+1
},{
scroll:!1
}):this.getComments({
page:this.currentPage,
limit:10
},{
scroll:!1
});
},
onCommentDeleted:function(t){
var e=t.comment_detail.commentid;
this.commentList=this.commentList.filter(function(t){
return t.comment_detail.commentid!==e;
}),this.appendedComments=this.appendedComments.filter(function(t){
return t.comment_detail.commentid!==e;
}),this.totalComment>0&&2!=this.commentType&&this.totalComment--,2==this.commentType&&1==t.comment_detail.audit_status&&this.totalComment--,
this.$emit("comment-deleted",t),2==this.commentType&&1==t.comment_detail.audit_status&&this.$emit("content-comment-change",this.totalComment);
},
onCommentAttrUpdated:function(t){
this.commentList=this.commentList.map(function(e){
return e.comment_detail.commentid===t.comment.comment_detail.commentid?__assign({},e,{
comment_detail:__assign({},e.comment_detail,{
comment_attr:t.value||0
})
}):e;
});
},
onToggleCommentBtnClick:function(){
!this.showCommentInput,this.showCommentInput=!this.showCommentInput,this.showCommentInput&&this.focusEditor();
},
onStartComment:function(t){
var e=this;
1===this.level||(this.mode=h.Comment,this.commentTarget=t,this.showCommentInput=!0,
this.$nextTick(function(){
e.scrollToInput();
}),this.appMsg&&$(this.submitBtnSelector).text(u.Comment));
},
onStartReply:function(t){
var e=this;
this.mode=h.Reply,this.commentTarget=t,this.showCommentInput=!0,this.$nextTick(function(){
e.scrollToInput();
}),this.appMsg&&$(this.submitBtnSelector).text(u.Reply);
},
onStartModifyComment:function(t){
1===this.level?this.$emit("modify-comment",t):(this.setEditorContent(t.comment_detail.comment),
this.mode=h.Modify,this.commentTarget=t,this.showCommentInput=!0);
},
scrollToInput:function(){
var t=this.$refs.commentInputWrapper.getBoundingClientRect(),e=t.top+window.scrollY;
window.innerHeight-t.height>0&&(e-=(window.innerHeight-t.height)/2),$("html,body").animate({
scrollTop:e
}),this.focusEditor();
},
submitComment:function(t,e){
var n=this;
if(void 0===t&&(t={}),0==wx.user_type)return void(location.href="/weloginpage?redirect_url="+encodeURIComponent(location.pathname+location.search));
var m="";
if(this.editMode===d.PlainText){
m=this.$refs.commentInput&&this.$refs.commentInput.value||"";
var s=this.validateInputContent(m);
if(!s.valid)return void o.err(s.reason);
m=r.minimalEncode(m);
}
var a="/blogedit?action=submit_comment&blogcategory="+this.blogCategory+"&comment_type="+this.commentType+"&docid="+this.docid,l=__assign({
docid:this.docid,
comment_type:this.commentType,
edit_type:c.EditType.PlainText,
comment:m,
blog_category:this.blogCategory
},t);
switch(this.mode){
case h.Comment:
l.parent_commentid=this.parentComment&&this.parentComment.comment_detail.commentid||this.commentTarget&&this.commentTarget.comment_detail.commentid;
break;

case h.Reply:
l.parent_commentid=this.parentComment&&this.parentComment.comment_detail.commentid||this.commentTarget&&this.commentTarget.comment_detail.commentid,
l.reply_commentid=this.commentTarget.comment_detail.commentid,l.reply_openid=this.commentTarget.comment_detail.openid;
break;

case h.Modify:
l.commentid=this.commentTarget.comment_detail.commentid;
}
l.parent_commentid&&(a+="&parent_commentid="+l.parent_commentid);
var p=$(this.$refs.submitBtn);
p.btn(!1),i.save(!0,a,"",l,{
contentType:"application/json"
},function(t){
p.btn(!0),n.appendComment(t),n.showCommentInput=!1,n.mode=h.Comment,n.setEditorContent(""),
e&&e();
},function(){
p.btn(!0);
});
},
validateInputContent:function(t){
return!t||t.length>2e4?{
valid:!1,
reason:"正文不能为空且长度不能超过 20000 字"
}:{
valid:!0
};
},
formatComment:function(t){
for(var e=0,n=t.length;n>e;e++)t[e].comment_detail.create_time_str=s.timeFormat(1*t[e].comment_detail.create_time),
t[e].comment_detail.head_img||(t[e].comment_detail.head_img=this.defaultImg),1*t[e].comment_detail.flag!==1&&(t[e].comment_detail.comment=t[e].comment_detail.comment_noencode,
t[e].comment_list&&t[e].comment_list.length&&(t[e].comment_list=this.formatComment(t[e].comment_list)));
return t.filter(function(t){
return 1*t.comment_detail.flag!==1;
});
},
refreshComment:function(){
this.commentList.length%this.pageSize===0?this.loadMore():this.getComments({
page:this.currentPage,
limit:10
},{
scroll:!1
});
},
appendComment:function(t){
console.log(t);
var e=t.comment;
return e&&e.comment_detail?(e.show=!0,void this.appendedComments.push(this.formatComment([e])[0])):(console.warn("no comments"),
void location.reload());
},
focusEditor:function(){
var t=this;
this.$nextTick(function(){
t.$refs.commentInput?t.$refs.commentInput.focus():t.appMsg&&t.appMsg.ueditor.ueditor.focus();
});
},
setEditorContent:function(t){
this.$refs.commentInput?this.$refs.commentInput.value=t:this.appMsg&&this.appMsg.editorContainer.update(t);
}
},
template:a
});
});define("common/vue/vue.js",[],function(){
"use strict";
function e(e){
return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e);
}
function t(e){
var t=parseFloat(e);
return isNaN(t)?e:t;
}
function n(e,t){
for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;
return t?function(e){
return n[e.toLowerCase()];
}:function(e){
return n[e];
};
}
function r(e,t){
if(e.length){
var n=e.indexOf(t);
if(n>-1)return e.splice(n,1);
}
}
function i(e,t){
return Bo.call(e,t);
}
function o(e){
return"string"==typeof e||"number"==typeof e;
}
function a(e){
var t=Object.create(null);
return function(n){
var r=t[n];
return r||(t[n]=e(n));
};
}
function s(e,t){
function n(n){
var r=arguments.length;
return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t);
}
return n._length=e.length,n;
}
function c(e,t){
t=t||0;
for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];
return r;
}
function u(e,t){
for(var n in t)e[n]=t[n];
return e;
}
function l(e){
return null!==e&&"object"==typeof e;
}
function f(e){
return Wo.call(e)===Zo;
}
function p(e){
for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);
return t;
}
function d(){}
function v(e){
return e.reduce(function(e,t){
return e.concat(t.staticKeys||[]);
},[]).join(",");
}
function h(e,t){
var n=l(e),r=l(t);
if(!n||!r)return n||r?!1:String(e)===String(t);
try{
return JSON.stringify(e)===JSON.stringify(t);
}catch(i){
return e===t;
}
}
function m(e,t){
for(var n=0;n<e.length;n++)if(h(e[n],t))return n;
return-1;
}
function g(e){
var t=!1;
return function(){
t||(t=!0,e());
};
}
function y(e){
return/native code/.test(e.toString());
}
function _(e){
var t=(e+"").charCodeAt(0);
return 36===t||95===t;
}
function b(e,t,n,r){
Object.defineProperty(e,t,{
value:n,
enumerable:!!r,
writable:!0,
configurable:!0
});
}
function $(e){
if(!ha.test(e)){
var t=e.split(".");
return function(e){
for(var n=0;n<t.length;n++){
if(!e)return;
e=e[t[n]];
}
return e;
};
}
}
function w(e){
xa.target&&Ca.push(xa.target),xa.target=e;
}
function x(){
xa.target=Ca.pop();
}
function C(e,t){
e.__proto__=t;
}
function k(e,t,n){
for(var r=0,i=n.length;i>r;r++){
var o=n[r];
b(e,o,t[o]);
}
}
function A(e,t){
if(l(e)){
var n;
return i(e,"__ob__")&&e.__ob__ instanceof Ta?n=e.__ob__:Sa.shouldConvert&&!ca()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Ta(e)),
t&&n&&n.vmCount++,n;
}
}
function O(e,t,n,r){
var i=new xa,o=Object.getOwnPropertyDescriptor(e,t);
if(!o||o.configurable!==!1){
var a=o&&o.get,s=o&&o.set,c=A(n);
Object.defineProperty(e,t,{
enumerable:!0,
configurable:!0,
get:function(){
var t=a?a.call(e):n;
return xa.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&E(t)),t;
},
set:function(t){
var r=a?a.call(e):n;
t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=A(t),i.notify());
}
});
}
}
function S(e,t,n){
if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;
if(i(e,t))return e[t]=n,n;
var r=e.__ob__;
return e._isVue||r&&r.vmCount?n:r?(O(r.value,t,n),r.dep.notify(),n):(e[t]=n,n);
}
function T(e,t){
if(Array.isArray(e))return void e.splice(t,1);
var n=e.__ob__;
e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify());
}
function E(e){
for(var t=void 0,n=0,r=e.length;r>n;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),
Array.isArray(t)&&E(t);
}
function I(e,t){
if(!t)return e;
for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&I(r,o):S(e,n,o);
return e;
}
function j(e,t){
return t?e?e.concat(t):Array.isArray(t)?t:[t]:e;
}
function N(e,t){
var n=Object.create(e||null);
return t?u(n,t):n;
}
function M(e){
for(var t in e.components){
var n=t.toLowerCase();
(Ho(n)||Qo.isReservedTag(n))&&ma("Do not use built-in or reserved HTML elements as component id: "+t);
}
}
function D(e){
var t=e.props;
if(t){
var n,r,i,o={};
if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r?(i=zo(r),o[i]={
type:null
}):ma("props must be strings when using array syntax.");else if(f(t))for(var a in t)r=t[a],
i=zo(a),o[i]=f(r)?r:{
type:r
};
e.props=o;
}
}
function L(e){
var t=e.directives;
if(t)for(var n in t){
var r=t[n];
"function"==typeof r&&(t[n]={
bind:r,
update:r
});
}
}
function P(e,t,n){
function r(r){
var i=Ea[r]||ja;
l[r]=i(e[r],t[r],n,r);
}
M(t),D(t),L(t);
var o=t.extends;
if(o&&(e="function"==typeof o?P(e,o.options,n):P(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;s>a;a++){
var c=t.mixins[a];
c.prototype instanceof hn&&(c=c.options),e=P(e,c,n);
}
var u,l={};
for(u in e)r(u);
for(u in t)i(e,u)||r(u);
return l;
}
function R(e,t,n,r){
if("string"==typeof n){
var o=e[t];
if(i(o,n))return o[n];
var a=zo(n);
if(i(o,a))return o[a];
var s=qo(a);
if(i(o,s))return o[s];
var c=o[n]||o[a]||o[s];
return c;
}
}
function F(e,t,n,r){
var o=t[e],a=!i(n,e),s=n[e];
if(z(Boolean,o.type)&&(a&&!i(o,"default")?s=!1:z(String,o.type)||""!==s&&s!==Ko(e)||(s=!0)),
void 0===s){
s=U(r,o,e);
var c=Sa.shouldConvert;
Sa.shouldConvert=!0,A(s),Sa.shouldConvert=c;
}
return H(o,e,s,r,a),s;
}
function U(e,t,n){
if(!i(t,"default"))return void 0;
var r=t.default;
return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==V(t.type)?r.call(e):r;
}
function H(e,t,n,r,i){
if(e.required&&i)return void ma('Missing required prop: "'+t+'"',r);
if(null!=n||e.required){
var o=e.type,a=!o||o===!0,s=[];
if(o){
Array.isArray(o)||(o=[o]);
for(var c=0;c<o.length&&!a;c++){
var u=B(n,o[c]);
s.push(u.expectedType||""),a=u.valid;
}
}
if(!a)return void ma('Invalid prop: type check failed for prop "'+t+'". Expected '+s.map(qo).join(", ")+", got "+Object.prototype.toString.call(n).slice(8,-1)+".",r);
var l=e.validator;
l&&(l(n)||ma('Invalid prop: custom validator check failed for prop "'+t+'".',r));
}
}
function B(e,t){
var n,r=V(t);
return n="String"===r?typeof e==(r="string"):"Number"===r?typeof e==(r="number"):"Boolean"===r?typeof e==(r="boolean"):"Function"===r?typeof e==(r="function"):"Object"===r?f(e):"Array"===r?Array.isArray(e):e instanceof t,
{
valid:n,
expectedType:r
};
}
function V(e){
var t=e&&e.toString().match(/^\s*function (\w+)/);
return t&&t[1];
}
function z(e,t){
if(!Array.isArray(t))return V(t)===V(e);
for(var n=0,r=t.length;r>n;n++)if(V(t[n])===V(e))return!0;
return!1;
}
function q(e,t,n){
if(Qo.errorHandler)Qo.errorHandler.call(null,e,t,n);else{
if(ma("Error in "+n+":",t),!ea||"undefined"==typeof console)throw e;
console.error(e);
}
}
function J(e){
return new Fa(void 0,void 0,void 0,String(e));
}
function K(e){
var t=new Fa(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);
return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t;
}
function W(e){
for(var t=e.length,n=new Array(t),r=0;t>r;r++)n[r]=K(e[r]);
return n;
}
function Z(e){
function t(){
var e=arguments,n=t.fns;
if(!Array.isArray(n))return n.apply(null,arguments);
for(var r=0;r<n.length;r++)n[r].apply(null,e);
}
return t.fns=e,t;
}
function G(e,t,n,r,i){
var o,a,s,c;
for(o in e)a=e[o],s=t[o],c=Va(o),a&&(s?a!==s&&(s.fns=a,e[o]=s):(a.fns||(a=e[o]=Z(a)),
n(c.name,a,c.once,c.capture)));
for(o in t)e[o]||(c=Va(o),r(c.name,t[o],c.capture));
}
function Y(e,t,n){
function i(){
n.apply(this,arguments),r(o.fns,i);
}
var o,a=e[t];
a?a.fns&&a.merged?(o=a,o.fns.push(i)):o=Z([a,i]):o=Z([i]),o.merged=!0,e[t]=o;
}
function Q(e){
for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);
return e;
}
function X(e){
return o(e)?[J(e)]:Array.isArray(e)?et(e):void 0;
}
function et(e,t){
var n,r,i,a=[];
for(n=0;n<e.length;n++)r=e[n],null!=r&&"boolean"!=typeof r&&(i=a[a.length-1],Array.isArray(r)?a.push.apply(a,et(r,(t||"")+"_"+n)):o(r)?i&&i.text?i.text+=String(r):""!==r&&a.push(J(r)):r.text&&i&&i.text?a[a.length-1]=J(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),
a.push(r)));
return a;
}
function tt(e){
return e&&e.filter(function(e){
return e&&e.componentOptions;
})[0];
}
function nt(e){
e._events=Object.create(null),e._hasHookEvent=!1;
var t=e.$options._parentListeners;
t&&ot(e,t);
}
function rt(e,t,n){
n?Ha.$once(e,t):Ha.$on(e,t);
}
function it(e,t){
Ha.$off(e,t);
}
function ot(e,t,n){
Ha=e,G(t,n||{},rt,it,e);
}
function at(e){
var t=/^hook:/;
e.prototype.$on=function(e,n){
var r=this,i=this;
if(Array.isArray(e))for(var o=0,a=e.length;a>o;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),
t.test(e)&&(i._hasHookEvent=!0);
return i;
},e.prototype.$once=function(e,t){
function n(){
r.$off(e,n),t.apply(r,arguments);
}
var r=this;
return n.fn=t,r.$on(e,n),r;
},e.prototype.$off=function(e,t){
var n=this,r=this;
if(!arguments.length)return r._events=Object.create(null),r;
if(Array.isArray(e)){
for(var i=0,o=e.length;o>i;i++)n.$off(e[i],t);
return r;
}
var a=r._events[e];
if(!a)return r;
if(1===arguments.length)return r._events[e]=null,r;
for(var s,c=a.length;c--;)if(s=a[c],s===t||s.fn===t){
a.splice(c,1);
break;
}
return r;
},e.prototype.$emit=function(e){
var t=this,n=t._events[e];
if(n){
n=n.length>1?c(n):n;
for(var r=c(arguments,1),i=0,o=n.length;o>i;i++)n[i].apply(t,r);
}
return t;
};
}
function st(e,t){
var n={};
if(!e)return n;
for(var r,i,o=[],a=0,s=e.length;s>a;a++)if(i=e[a],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){
var c=n[r]||(n[r]=[]);
"template"===i.tag?c.push.apply(c,i.children):c.push(i);
}else o.push(i);
return o.every(ct)||(n.default=o),n;
}
function ct(e){
return e.isComment||" "===e.text;
}
function ut(e){
for(var t={},n=0;n<e.length;n++)t[e[n][0]]=e[n][1];
return t;
}
function lt(e){
var t=e.$options,n=t.parent;
if(n&&!t.abstract){
for(;n.$options.abstract&&n.$parent;)n=n.$parent;
n.$children.push(e);
}
e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,
e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1;
}
function ft(e){
e.prototype._update=function(e,t){
var n=this;
n._isMounted&&gt(n,"beforeUpdate");
var r=n.$el,i=n._vnode,o=za;
za=n,n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),
za=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el);
},e.prototype.$forceUpdate=function(){
var e=this;
e._watcher&&e._watcher.update();
},e.prototype.$destroy=function(){
var e=this;
if(!e._isBeingDestroyed){
gt(e,"beforeDestroy"),e._isBeingDestroyed=!0;
var t=e.$parent;
!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();
for(var n=e._watchers.length;n--;)e._watchers[n].teardown();
e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,gt(e,"destroyed"),e.$off(),
e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null);
}
};
}
function pt(e,t,n){
e.$el=t,e.$options.render||(e.$options.render=Ba,e.$options.template&&"#"!==e.$options.template.charAt(0)||e.$options.el||t?ma("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",e):ma("Failed to mount component: template or render function not defined.",e)),
gt(e,"beforeMount");
var r;
return r=function(){
e._update(e._render(),n);
},e._watcher=new Qa(e,r,d),n=!1,null==e.$vnode&&(e._isMounted=!0,gt(e,"mounted")),
e;
}
function dt(e,t,n,r,i){
var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==va);
if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,
t&&e.$options.props){
Sa.shouldConvert=!1,Sa.isSettingProps=!0;
for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){
var u=s[c];
a[u]=F(u,e.$options.props,t,e);
}
Sa.shouldConvert=!0,Sa.isSettingProps=!1,e.$options.propsData=t;
}
if(n){
var l=e.$options._parentListeners;
e.$options._parentListeners=n,ot(e,n,l);
}
o&&(e.$slots=st(i,r.context),e.$forceUpdate());
}
function vt(e){
for(;e&&(e=e.$parent);)if(e._inactive)return!0;
return!1;
}
function ht(e,t){
if(t){
if(e._directInactive=!1,vt(e))return;
}else if(e._directInactive)return;
if(e._inactive||null==e._inactive){
e._inactive=!1;
for(var n=0;n<e.$children.length;n++)ht(e.$children[n]);
gt(e,"activated");
}
}
function mt(e,t){
if(!(t&&(e._directInactive=!0,vt(e))||e._inactive)){
e._inactive=!0;
for(var n=0;n<e.$children.length;n++)mt(e.$children[n]);
gt(e,"deactivated");
}
}
function gt(e,t){
var n=e.$options[t];
if(n)for(var r=0,i=n.length;i>r;r++)try{
n[r].call(e);
}catch(o){
q(o,e,t+" hook");
}
e._hasHookEvent&&e.$emit("hook:"+t);
}
function yt(){
qa.length=0,Ja={},Ka={},Wa=Za=!1;
}
function _t(){
Za=!0;
var e,t,n;
for(qa.sort(function(e,t){
return e.id-t.id;
}),Ga=0;Ga<qa.length;Ga++)e=qa[Ga],t=e.id,Ja[t]=null,e.run();
for(Ga=qa.length;Ga--;)e=qa[Ga],n=e.vm,n._watcher===e&&n._isMounted&&gt(n,"updated");
ua&&Qo.devtools&&ua.emit("flush"),yt();
}
function bt(e){
var t=e.id;
if(null==Ja[t]){
if(Ja[t]=!0,Za){
for(var n=qa.length-1;n>=0&&qa[n].id>e.id;)n--;
qa.splice(Math.max(n,Ga)+1,0,e);
}else qa.push(e);
Wa||(Wa=!0,fa(_t));
}
}
function $t(e){
Xa.clear(),wt(e,Xa);
}
function wt(e,t){
var n,r,i=Array.isArray(e);
if((i||l(e))&&Object.isExtensible(e)){
if(e.__ob__){
var o=e.__ob__.dep.id;
if(t.has(o))return;
t.add(o);
}
if(i)for(n=e.length;n--;)wt(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)wt(e[r[n]],t);
}
}
function xt(e,t,n){
es.get=function(){
return this[t][n];
},es.set=function(e){
this[t][n]=e;
},Object.defineProperty(e,n,es);
}
function Ct(e){
e._watchers=[];
var t=e.$options;
t.props&&kt(e,t.props),t.methods&&Et(e,t.methods),t.data?At(e):A(e._data={},!0),
t.computed&&Ot(e,t.computed),t.watch&&It(e,t.watch);
}
function kt(e,t){
var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;
Sa.shouldConvert=o;
var a=function(o){
i.push(o);
var a=F(o,t,n,e);
ts[o]&&ma('"'+o+'" is a reserved attribute and cannot be used as component prop.',e),
O(r,o,a,function(){
e.$parent&&!Sa.isSettingProps&&ma("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \""+o+'"',e);
}),o in e||xt(e,"_props",o);
};
for(var s in t)a(s);
Sa.shouldConvert=!0;
}
function At(e){
var t=e.$options.data;
t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});
for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||_(n[o])||xt(e,"_data",n[o]);
A(t,!0);
}
function Ot(e,t){
var n=e._computedWatchers=Object.create(null);
for(var r in t){
var i=t[r],o="function"==typeof i?i:i.get;
n[r]=new Qa(e,o,d,ns),r in e||St(e,r,i);
}
}
function St(e,t,n){
"function"==typeof n?(es.get=Tt(t),es.set=d):(es.get=n.get?n.cache!==!1?Tt(t):n.get:d,
es.set=n.set?n.set:d),Object.defineProperty(e,t,es);
}
function Tt(e){
return function(){
var t=this._computedWatchers&&this._computedWatchers[e];
return t?(t.dirty&&t.evaluate(),xa.target&&t.depend(),t.value):void 0;
};
}
function Et(e,t){
var n=e.$options.props;
for(var r in t)e[r]=null==t[r]?d:s(t[r],e),null==t[r]&&ma('method "'+r+'" has an undefined value in the component definition. Did you reference the function correctly?',e),
n&&i(n,r)&&ma('method "'+r+'" has already been defined as a prop.',e);
}
function It(e,t){
for(var n in t){
var r=t[n];
if(Array.isArray(r))for(var i=0;i<r.length;i++)jt(e,n,r[i]);else jt(e,n,r);
}
}
function jt(e,t,n){
var r;
f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r);
}
function Nt(e){
var t={};
t.get=function(){
return this._data;
};
var n={};
n.get=function(){
return this._props;
},t.set=function(){
ma("Avoid replacing instance root $data. Use nested data properties instead.",this);
},n.set=function(){
ma("$props is readonly.",this);
},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),
e.prototype.$set=S,e.prototype.$delete=T,e.prototype.$watch=function(e,t,n){
var r=this;
n=n||{},n.user=!0;
var i=new Qa(r,e,t,n);
return n.immediate&&t.call(r,i.value),function(){
i.teardown();
};
};
}
function Mt(e,t,n,r,i){
if(e){
var o=n.$options._base;
if(l(e)&&(e=o.extend(e)),"function"!=typeof e)return void ma("Invalid Component definition: "+String(e),n);
if(!e.cid)if(e.resolved)e=e.resolved;else if(e=Ht(e,o,function(){
n.$forceUpdate();
}),!e)return;
pn(e),t=t||{},t.model&&Jt(e.options,t);
var a=Bt(t,e);
if(e.options.functional)return Dt(e,a,t,n,r);
var s=t.on;
t.on=t.nativeOn,e.options.abstract&&(t={}),zt(t);
var c=e.options.name||i,u=new Fa("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{
Ctor:e,
propsData:a,
listeners:s,
tag:i,
children:r
});
return u;
}
}
function Dt(e,t,n,r,i){
var o={},a=e.options.props;
if(a)for(var s in a)o[s]=F(s,a,t);
var c=Object.create(r),u=function(e,t,n,r){
return Kt(c,e,t,n,r,!0);
},l=e.options.render.call(null,u,{
props:o,
data:n,
parent:r,
children:i,
slots:function(){
return st(i,r);
}
});
return l instanceof Fa&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),
l;
}
function Lt(e,t,n,r){
var i=e.componentOptions,o={
_isComponent:!0,
parent:t,
propsData:i.propsData,
_componentTag:i.tag,
_parentVnode:e,
_parentListeners:i.listeners,
_renderChildren:i.children,
_parentElm:n||null,
_refElm:r||null
},a=e.data.inlineTemplate;
return a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new i.Ctor(o);
}
function Pt(e,t,n,r){
if(!e.componentInstance||e.componentInstance._isDestroyed){
var i=e.componentInstance=Lt(e,za,n,r);
i.$mount(t?e.elm:void 0,t);
}else if(e.data.keepAlive){
var o=e;
Rt(o,o);
}
}
function Rt(e,t){
var n=t.componentOptions,r=t.componentInstance=e.componentInstance;
dt(r,n.propsData,n.listeners,t,n.children);
}
function Ft(e){
e.componentInstance._isMounted||(e.componentInstance._isMounted=!0,gt(e.componentInstance,"mounted")),
e.data.keepAlive&&ht(e.componentInstance,!0);
}
function Ut(e){
e.componentInstance._isDestroyed||(e.data.keepAlive?mt(e.componentInstance,!0):e.componentInstance.$destroy());
}
function Ht(e,t,n){
if(!e.requested){
e.requested=!0;
var r=e.pendingCallbacks=[n],i=!0,o=function(n){
if(l(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;a>o;o++)r[o](n);
},a=function(e){},s=e(o,a);
return s&&"function"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved;
}
e.pendingCallbacks.push(n);
}
function Bt(e,t){
var n=t.options.props;
if(n){
var r={},i=e.attrs,o=e.props,a=e.domProps;
if(i||o||a)for(var s in n){
var c=Ko(s);
Vt(r,o,s,c,!0)||Vt(r,i,s,c)||Vt(r,a,s,c);
}
return r;
}
}
function Vt(e,t,n,r,o){
if(t){
if(i(t,n))return e[n]=t[n],o||delete t[n],!0;
if(i(t,r))return e[n]=t[r],o||delete t[r],!0;
}
return!1;
}
function zt(e){
e.hook||(e.hook={});
for(var t=0;t<is.length;t++){
var n=is[t],r=e.hook[n],i=rs[n];
e.hook[n]=r?qt(i,r):i;
}
}
function qt(e,t){
return function(n,r,i,o){
e(n,r,i,o),t(n,r,i,o);
};
}
function Jt(e,t){
var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";
(t.props||(t.props={}))[n]=t.model.value;
var i=t.on||(t.on={});
i[r]=i[r]?[t.model.callback].concat(i[r]):t.model.callback;
}
function Kt(e,t,n,r,i,a){
return(Array.isArray(n)||o(n))&&(i=r,r=n,n=void 0),a&&(i=as),Wt(e,t,n,r,i);
}
function Wt(e,t,n,r,i){
if(n&&n.__ob__)return Ba();
if(!t)return Ba();
Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={
"default":r[0]
},r.length=0),i===as?r=X(r):i===os&&(r=Q(r));
var o,a;
if("string"==typeof t){
var s;
a=Qo.getTagNamespace(t),o=Qo.isReservedTag(t)?new Fa(Qo.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=R(e.$options,"components",t))?Mt(s,n,e,r,t):new Fa(t,n,r,void 0,void 0,e);
}else o=Mt(t,n,e,r);
return o?(a&&Zt(o,a),o):Ba();
}
function Zt(e,t){
if(e.ns=t,"foreignObject"!==e.tag&&e.children)for(var n=0,r=e.children.length;r>n;n++){
var i=e.children[n];
i.tag&&!i.ns&&Zt(i,t);
}
}
function Gt(e,t){
var n,r,i,o,a;
if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;i>r;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),
r=0;e>r;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),
r=0,i=o.length;i>r;r++)a=o[r],n[r]=t(e[a],a,r);
return n;
}
function Yt(e,t,n,r){
var i=this.$scopedSlots[e];
if(i)return n=n||{},r&&u(n,r),i(n)||t;
var o=this.$slots[e];
return o||t;
}
function Qt(e){
return R(this.$options,"filters",e,!0)||Yo;
}
function Xt(e,t,n){
var r=Qo.keyCodes[t]||n;
return Array.isArray(r)?-1===r.indexOf(e):r!==e;
}
function en(e,t,n,r){
if(n)if(l(n)){
Array.isArray(n)&&(n=p(n));
for(var i in n)if("class"===i||"style"===i)e[i]=n[i];else{
var o=e.attrs&&e.attrs.type,a=r||Qo.mustUseProp(t,o,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});
a[i]=n[i];
}
}else;
return e;
}
function tn(e,t){
var n=this._staticTrees[e];
return n&&!t?Array.isArray(n)?W(n):K(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),
rn(n,"__static__"+e,!1),n);
}
function nn(e,t,n){
return rn(e,"__once__"+t+(n?"_"+n:""),!0),e;
}
function rn(e,t,n){
if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&on(e[r],t+"_"+r,n);else on(e,t,n);
}
function on(e,t,n){
e.isStatic=!0,e.key=t,e.isOnce=n;
}
function an(e){
e.$vnode=null,e._vnode=null,e._staticTrees=null;
var t=e.$options._parentVnode,n=t&&t.context;
e.$slots=st(e.$options._renderChildren,n),e.$scopedSlots=va,e._c=function(t,n,r,i){
return Kt(e,t,n,r,i,!1);
},e.$createElement=function(t,n,r,i){
return Kt(e,t,n,r,i,!0);
};
}
function sn(n){
n.prototype.$nextTick=function(e){
return fa(e,this);
},n.prototype._render=function(){
var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;
if(e._isMounted)for(var o in e.$slots)e.$slots[o]=W(e.$slots[o]);
e.$scopedSlots=i&&i.data.scopedSlots||va,r&&!e._staticTrees&&(e._staticTrees=[]),
e.$vnode=i;
var a;
try{
a=n.call(e._renderProxy,e.$createElement);
}catch(s){
q(s,e,"render function"),a=e.$options.renderError?e.$options.renderError.call(e._renderProxy,e.$createElement,s):e._vnode;
}
return a instanceof Fa||(a=Ba()),a.parent=i,a;
},n.prototype._o=nn,n.prototype._n=t,n.prototype._s=e,n.prototype._l=Gt,n.prototype._t=Yt,
n.prototype._q=h,n.prototype._i=m,n.prototype._m=tn,n.prototype._f=Qt,n.prototype._k=Xt,
n.prototype._b=en,n.prototype._v=J,n.prototype._e=Ba,n.prototype._u=ut;
}
function cn(e){
var t=e.$options.provide;
t&&(e._provided="function"==typeof t?t.call(e):t);
}
function un(e){
var t=e.$options.inject;
if(t)for(var n=Array.isArray(t),r=n?t:la?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++)for(var o=r[i],a=n?o:t[o],s=e;s;){
if(s._provided&&a in s._provided){
e[o]=s._provided[a];
break;
}
s=s.$parent;
}
}
function ln(e){
e.prototype._init=function(e){
var t=this;
t._uid=ss++,t._isVue=!0,e&&e._isComponent?fn(t,e):t.$options=P(pn(t.constructor),e||{},t),
Ia(t),t._self=t,lt(t),nt(t),an(t),gt(t,"beforeCreate"),un(t),Ct(t),cn(t),gt(t,"created"),
t.$options.el&&t.$mount(t.$options.el);
};
}
function fn(e,t){
var n=e.$options=Object.create(e.constructor.options);
n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,
n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,
n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns);
}
function pn(e){
var t=e.options;
if(e.super){
var n=pn(e.super),r=e.superOptions;
if(n!==r){
e.superOptions=n;
var i=dn(e);
i&&u(e.extendOptions,i),t=e.options=P(n,e.extendOptions),t.name&&(t.components[t.name]=e);
}
}
return t;
}
function dn(e){
var t,n=e.options,r=e.sealedOptions;
for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=vn(n[i],r[i]));
return t;
}
function vn(e,t){
if(Array.isArray(e)){
var n=[];
t=Array.isArray(t)?t:[t];
for(var r=0;r<e.length;r++)t.indexOf(e[r])<0&&n.push(e[r]);
return n;
}
return e;
}
function hn(e){
this._init(e);
}
function mn(e){
e.use=function(e){
if(!e.installed){
var t=c(arguments,1);
return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):"function"==typeof e&&e.apply(null,t),
e.installed=!0,this;
}
};
}
function gn(e){
e.mixin=function(e){
this.options=P(this.options,e);
};
}
function yn(e){
e.cid=0;
var t=1;
e.extend=function(e){
e=e||{};
var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});
if(i[r])return i[r];
var o=e.name||n.options.name;
/^[a-zA-Z][\w-]*$/.test(o)||ma('Invalid component name: "'+o+'". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.');
var a=function(e){
this._init(e);
};
return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,
a.options=P(n.options,e),a["super"]=n,a.options.props&&_n(a),a.options.computed&&bn(a),
a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Qo._assetTypes.forEach(function(e){
a[e]=n[e];
}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=u({},a.options),
i[r]=a,a;
};
}
function _n(e){
var t=e.options.props;
for(var n in t)xt(e.prototype,"_props",n);
}
function bn(e){
var t=e.options.computed;
for(var n in t)St(e.prototype,n,t[n]);
}
function $n(e){
Qo._assetTypes.forEach(function(t){
e[t]=function(e,n){
return n?("component"===t&&Qo.isReservedTag(e)&&ma("Do not use built-in or reserved HTML elements as component id: "+e),
"component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={
bind:n,
update:n
}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e];
};
});
}
function wn(e){
return e&&(e.Ctor.options.name||e.tag);
}
function xn(e,t){
return"string"==typeof e?e.split(",").indexOf(t)>-1:e instanceof RegExp?e.test(t):!1;
}
function Cn(e,t){
for(var n in e){
var r=e[n];
if(r){
var i=wn(r.componentOptions);
i&&!t(i)&&(kn(r),e[n]=null);
}
}
}
function kn(e){
e&&(e.componentInstance._inactive||gt(e.componentInstance,"deactivated"),e.componentInstance.$destroy());
}
function An(e){
var t={};
t.get=function(){
return Qo;
},t.set=function(){
ma("Do not replace the Vue.config object, set individual fields instead.");
},Object.defineProperty(e,"config",t),e.util={
warn:ma,
extend:u,
mergeOptions:P,
defineReactive:O
},e.set=S,e.delete=T,e.nextTick=fa,e.options=Object.create(null),Qo._assetTypes.forEach(function(t){
e.options[t+"s"]=Object.create(null);
}),e.options._base=e,u(e.options.components,ls),mn(e),gn(e),yn(e),$n(e);
}
function On(e){
for(var t=e.data,n=e,r=e;r.componentInstance;)r=r.componentInstance._vnode,r.data&&(t=Sn(r.data,t));
for(;n=n.parent;)n.data&&(t=Sn(t,n.data));
return Tn(t);
}
function Sn(e,t){
return{
staticClass:En(e.staticClass,t.staticClass),
"class":e.class?[e.class,t.class]:t.class
};
}
function Tn(e){
var t=e.class,n=e.staticClass;
return n||t?En(n,In(t)):"";
}
function En(e,t){
return e?t?e+" "+t:e:t||"";
}
function In(e){
var t="";
if(!e)return t;
if("string"==typeof e)return e;
if(Array.isArray(e)){
for(var n,r=0,i=e.length;i>r;r++)e[r]&&(n=In(e[r]))&&(t+=n+" ");
return t.slice(0,-1);
}
if(l(e)){
for(var o in e)e[o]&&(t+=o+" ");
return t.slice(0,-1);
}
return t;
}
function jn(e){
return Es(e)?"svg":"math"===e?"math":void 0;
}
function Nn(e){
if(!ea)return!0;
if(js(e))return!1;
if(e=e.toLowerCase(),null!=Ns[e])return Ns[e];
var t=document.createElement(e);
return Ns[e]=e.indexOf("-")>-1?t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:/HTMLUnknownElement/.test(t.toString());
}
function Mn(e){
if("string"==typeof e){
var t=document.querySelector(e);
return t?t:document.createElement("div");
}
return e;
}
function Dn(e,t){
var n=document.createElement(e);
return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),
n);
}
function Ln(e,t){
return document.createElementNS(Ss[e],t);
}
function Pn(e){
return document.createTextNode(e);
}
function Rn(e){
return document.createComment(e);
}
function Fn(e,t,n){
e.insertBefore(t,n);
}
function Un(e,t){
e.removeChild(t);
}
function Hn(e,t){
e.appendChild(t);
}
function Bn(e){
return e.parentNode;
}
function Vn(e){
return e.nextSibling;
}
function zn(e){
return e.tagName;
}
function qn(e,t){
e.textContent=t;
}
function Jn(e,t,n){
e.setAttribute(t,n);
}
function Kn(e,t){
var n=e.data.ref;
if(n){
var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;
t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o;
}
}
function Wn(e){
return null==e;
}
function Zn(e){
return null!=e;
}
function Gn(e,t){
return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data;
}
function Yn(e,t,n){
var r,i,o={};
for(r=t;n>=r;++r)i=e[r].key,Zn(i)&&(o[i]=r);
return o;
}
function Qn(e){
function t(e){
return new Fa(S.tagName(e).toLowerCase(),{},[],void 0,e);
}
function r(e,t){
function n(){
0===--n.listeners&&i(e);
}
return n.listeners=t,n;
}
function i(e){
var t=S.parentNode(e);
t&&S.removeChild(t,e);
}
function a(e,t,n,r,i){
if(e.isRootInsert=!i,!s(e,t,n,r)){
var o=e.data,a=e.children,c=e.tag;
Zn(c)?(o&&o.pre&&T++,T||e.ns||Qo.ignoredElements.length&&Qo.ignoredElements.indexOf(c)>-1||!Qo.isUnknownElement(c)||ma("Unknown custom element: <"+c+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',e.context),
e.elm=e.ns?S.createElementNS(e.ns,c):S.createElement(c,e),v(e),f(e,a,t),Zn(o)&&d(e,t),
l(n,e.elm,r)):e.isComment?(e.elm=S.createComment(e.text),l(n,e.elm,r)):(e.elm=S.createTextNode(e.text),
l(n,e.elm,r));
}
}
function s(e,t,n,r){
var i=e.data;
if(Zn(i)){
var o=Zn(e.componentInstance)&&i.keepAlive;
if(Zn(i=i.hook)&&Zn(i=i.init)&&i(e,!1,n,r),Zn(e.componentInstance))return c(e,t),
o&&u(e,t,n,r),!0;
}
}
function c(e,t){
e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.componentInstance.$el,
p(e)?(d(e,t),v(e)):(Kn(e),t.push(e));
}
function u(e,t,n,r){
for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,Zn(i=o.data)&&Zn(i=i.transition)){
for(i=0;i<A.activate.length;++i)A.activate[i](Ls,o);
t.push(o);
break;
}
l(n,e.elm,r);
}
function l(e,t,n){
e&&(n?S.insertBefore(e,t,n):S.appendChild(e,t));
}
function f(e,t,n){
if(Array.isArray(t))for(var r=0;r<t.length;++r)a(t[r],n,e.elm,null,!0);else o(e.text)&&S.appendChild(e.elm,S.createTextNode(e.text));
}
function p(e){
for(;e.componentInstance;)e=e.componentInstance._vnode;
return Zn(e.tag);
}
function d(e,t){
for(var n=0;n<A.create.length;++n)A.create[n](Ls,e);
C=e.data.hook,Zn(C)&&(C.create&&C.create(Ls,e),C.insert&&t.push(e));
}
function v(e){
for(var t,n=e;n;)Zn(t=n.context)&&Zn(t=t.$options._scopeId)&&S.setAttribute(e.elm,t,""),
n=n.parent;
Zn(t=za)&&t!==e.context&&Zn(t=t.$options._scopeId)&&S.setAttribute(e.elm,t,"");
}
function h(e,t,n,r,i,o){
for(;i>=r;++r)a(n[r],o,e,t);
}
function m(e){
var t,n,r=e.data;
if(Zn(r))for(Zn(t=r.hook)&&Zn(t=t.destroy)&&t(e),t=0;t<A.destroy.length;++t)A.destroy[t](e);
if(Zn(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n]);
}
function g(e,t,n,r){
for(;r>=n;++n){
var o=t[n];
Zn(o)&&(Zn(o.tag)?(y(o),m(o)):i(o.elm));
}
}
function y(e,t){
if(t||Zn(e.data)){
var n=A.remove.length+1;
for(t?t.listeners+=n:t=r(e.elm,n),Zn(C=e.componentInstance)&&Zn(C=C._vnode)&&Zn(C.data)&&y(C,t),
C=0;C<A.remove.length;++C)A.remove[C](e,t);
Zn(C=e.data.hook)&&Zn(C=C.remove)?C(e,t):t();
}else i(e.elm);
}
function _(e,t,n,r,i){
for(var o,s,c,u,l=0,f=0,p=t.length-1,d=t[0],v=t[p],m=n.length-1,y=n[0],_=n[m],$=!i;p>=l&&m>=f;)Wn(d)?d=t[++l]:Wn(v)?v=t[--p]:Gn(d,y)?(b(d,y,r),
d=t[++l],y=n[++f]):Gn(v,_)?(b(v,_,r),v=t[--p],_=n[--m]):Gn(d,_)?(b(d,_,r),$&&S.insertBefore(e,d.elm,S.nextSibling(v.elm)),
d=t[++l],_=n[--m]):Gn(v,y)?(b(v,y,r),$&&S.insertBefore(e,v.elm,d.elm),v=t[--p],y=n[++f]):(Wn(o)&&(o=Yn(t,l,p)),
s=Zn(y.key)?o[y.key]:null,Wn(s)?(a(y,r,e,d.elm),y=n[++f]):(c=t[s],Gn(c,y)?(b(c,y,r),
t[s]=void 0,$&&S.insertBefore(e,y.elm,d.elm),y=n[++f]):(a(y,r,e,d.elm),y=n[++f])));
l>p?(u=Wn(n[m+1])?null:n[m+1].elm,h(e,u,n,f,m,r)):f>m&&g(e,t,l,p);
}
function b(e,t,n,r){
if(e!==t){
if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,
void(t.componentInstance=e.componentInstance);
var i,o=t.data,a=Zn(o);
a&&Zn(i=o.hook)&&Zn(i=i.prepatch)&&i(e,t);
var s=t.elm=e.elm,c=e.children,u=t.children;
if(a&&p(t)){
for(i=0;i<A.update.length;++i)A.update[i](e,t);
Zn(i=o.hook)&&Zn(i=i.update)&&i(e,t);
}
Wn(t.text)?Zn(c)&&Zn(u)?c!==u&&_(s,c,u,n,r):Zn(u)?(Zn(e.text)&&S.setTextContent(s,""),
h(s,null,u,0,u.length-1,n)):Zn(c)?g(s,c,0,c.length-1):Zn(e.text)&&S.setTextContent(s,""):e.text!==t.text&&S.setTextContent(s,t.text),
a&&Zn(i=o.hook)&&Zn(i=i.postpatch)&&i(e,t);
}
}
function $(e,t,n){
if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r]);
}
function w(e,t,n){
if(!x(e,t))return!1;
t.elm=e;
var r=t.tag,i=t.data,o=t.children;
if(Zn(i)&&(Zn(C=i.hook)&&Zn(C=C.init)&&C(t,!0),Zn(C=t.componentInstance)))return c(t,n),
!0;
if(Zn(r)){
if(Zn(o))if(e.hasChildNodes()){
for(var a=!0,s=e.firstChild,u=0;u<o.length;u++){
if(!s||!w(s,o[u],n)){
a=!1;
break;
}
s=s.nextSibling;
}
if(!a||s)return!1;
}else f(t,o,n);
if(Zn(i))for(var l in i)if(!E(l)){
d(t,n);
break;
}
}else e.data!==t.text&&(e.data=t.text);
return!0;
}
function x(e,t){
return t.tag?0===t.tag.indexOf("vue-component")||t.tag.toLowerCase()===(e.tagName&&e.tagName.toLowerCase()):e.nodeType===(t.isComment?8:3);
}
var C,k,A={},O=e.modules,S=e.nodeOps;
for(C=0;C<Ps.length;++C)for(A[Ps[C]]=[],k=0;k<O.length;++k)void 0!==O[k][Ps[C]]&&A[Ps[C]].push(O[k][Ps[C]]);
var T=0,E=n("attrs,style,class,staticClass,staticStyle,key");
return function(e,n,r,i,o,s){
if(!n)return void(e&&m(e));
var c=!1,u=[];
if(e){
var l=Zn(e.nodeType);
if(!l&&Gn(e,n))b(e,n,u,i);else{
if(l){
if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),
r=!0),r){
if(w(e,n,u))return $(n,u,!0),e;
ma("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
}
e=t(e);
}
var f=e.elm,d=S.parentNode(f);
if(a(n,u,f._leaveCb?null:d,S.nextSibling(f)),n.parent){
for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;
if(p(n))for(var h=0;h<A.create.length;++h)A.create[h](Ls,n.parent);
}
null!==d?g(d,[e],0,0):Zn(e.tag)&&m(e);
}
}else c=!0,a(n,u,o,s);
return $(n,u,c),n.elm;
};
}
function Xn(e,t){
(e.data.directives||t.data.directives)&&er(e,t);
}
function er(e,t){
var n,r,i,o=e===Ls,a=t===Ls,s=tr(e.data.directives,e.context),c=tr(t.data.directives,t.context),u=[],l=[];
for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,rr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(rr(i,"bind",t,e),
i.def&&i.def.inserted&&u.push(i));
if(u.length){
var f=function(){
for(var n=0;n<u.length;n++)rr(u[n],"inserted",t,e);
};
o?Y(t.data.hook||(t.data.hook={}),"insert",f):f();
}
if(l.length&&Y(t.data.hook||(t.data.hook={}),"postpatch",function(){
for(var n=0;n<l.length;n++)rr(l[n],"componentUpdated",t,e);
}),!o)for(n in s)c[n]||rr(s[n],"unbind",e,e,a);
}
function tr(e,t){
var n=Object.create(null);
if(!e)return n;
var r,i;
for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=Fs),n[nr(i)]=i,i.def=R(t.$options,"directives",i.name,!0);
return n;
}
function nr(e){
return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".");
}
function rr(e,t,n,r,i){
var o=e.def&&e.def[t];
o&&o(n.elm,e,n,r,i);
}
function ir(e,t){
if(e.data.attrs||t.data.attrs){
var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};
s.__ob__&&(s=t.data.attrs=u({},s));
for(n in s)r=s[n],i=a[n],i!==r&&or(o,n,r);
ra&&s.value!==a.value&&or(o,"value",s.value);
for(n in a)null==s[n]&&(ks(n)?o.removeAttributeNS(Cs,As(n)):ws(n)||o.removeAttribute(n));
}
}
function or(e,t,n){
xs(t)?Os(n)?e.removeAttribute(t):e.setAttribute(t,t):ws(t)?e.setAttribute(t,Os(n)||"false"===n?"false":"true"):ks(t)?Os(n)?e.removeAttributeNS(Cs,As(t)):e.setAttributeNS(Cs,t,n):Os(n)?e.removeAttribute(t):e.setAttribute(t,n);
}
function ar(e,t){
var n=t.elm,r=t.data,i=e.data;
if(r.staticClass||r.class||i&&(i.staticClass||i.class)){
var o=On(t),a=n._transitionClasses;
a&&(o=En(o,In(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o);
}
}
function sr(e){
function t(){
(a||(a=[])).push(e.slice(v,i).trim()),v=i+1;
}
var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;
for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||p||d){
switch(n){
case 34:
c=!0;
break;

case 39:
s=!0;
break;

case 96:
u=!0;
break;

case 40:
d++;
break;

case 41:
d--;
break;

case 91:
p++;
break;

case 93:
p--;
break;

case 123:
f++;
break;

case 125:
f--;
}
if(47===n){
for(var h=i-1,m=void 0;h>=0&&(m=e.charAt(h)," "===m);h--);
m&&Vs.test(m)||(l=!0);
}
}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();
if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=cr(o,a[i]);
return o;
}
function cr(e,t){
var n=t.indexOf("(");
if(0>n)return'_f("'+t+'")('+e+")";
var r=t.slice(0,n),i=t.slice(n+1);
return'_f("'+r+'")('+e+","+i;
}
function ur(e){
console.error("[Vue compiler]: "+e);
}
function lr(e,t){
return e?e.map(function(e){
return e[t];
}).filter(function(e){
return e;
}):[];
}
function fr(e,t,n){
(e.props||(e.props=[])).push({
name:t,
value:n
});
}
function pr(e,t,n){
(e.attrs||(e.attrs=[])).push({
name:t,
value:n
});
}
function dr(e,t,n,r,i,o){
(e.directives||(e.directives=[])).push({
name:t,
rawName:n,
value:r,
arg:i,
modifiers:o
});
}
function vr(e,t,n,r,i){
r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);
var o;
r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});
var a={
value:n,
modifiers:r
},s=o[t];
Array.isArray(s)?i?s.unshift(a):s.push(a):o[t]=s?i?[a,s]:[s,a]:a;
}
function hr(e,t,n){
var r=mr(e,":"+t)||mr(e,"v-bind:"+t);
if(null!=r)return sr(r);
if(n!==!1){
var i=mr(e,t);
if(null!=i)return JSON.stringify(i);
}
}
function mr(e,t){
var n;
if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;o>i;i++)if(r[i].name===t){
r.splice(i,1);
break;
}
return n;
}
function gr(e,t,n){
var r=n||{},i=r.number,o=r.trim,a="$$v",s=a;
o&&(s="(typeof "+a+" === 'string'? "+a+".trim(): "+a+")"),i&&(s="_n("+s+")");
var c=yr(t,s);
e.model={
value:"("+t+")",
expression:'"'+t+'"',
callback:"function ("+a+") {"+c+"}"
};
}
function yr(e,t){
var n=_r(e);
return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}";
}
function _r(e){
if(ps=e,fs=ps.length,vs=hs=ms=0,e.indexOf("[")<0||e.lastIndexOf("]")<fs-1)return{
exp:e,
idx:null
};
for(;!$r();)ds=br(),wr(ds)?Cr(ds):91===ds&&xr(ds);
return{
exp:e.substring(0,hs),
idx:e.substring(hs+1,ms)
};
}
function br(){
return ps.charCodeAt(++vs);
}
function $r(){
return vs>=fs;
}
function wr(e){
return 34===e||39===e;
}
function xr(e){
var t=1;
for(hs=vs;!$r();)if(e=br(),wr(e))Cr(e);else if(91===e&&t++,93===e&&t--,0===t){
ms=vs;
break;
}
}
function Cr(e){
for(var t=e;!$r()&&(e=br(),e!==t););
}
function kr(e,t,n){
gs=n;
var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type,s=e.attrsMap["v-bind:type"]||e.attrsMap[":type"];
if("input"===o&&s&&gs('<input :type="'+s+'" v-model="'+r+'">:\nv-model does not support dynamic input types. Use v-if branches instead.'),
"input"===o&&"file"===a&&gs("<"+e.tag+' v-model="'+r+'" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'),
"select"===o)Sr(e,r,i);else if("input"===o&&"checkbox"===a)Ar(e,r,i);else if("input"===o&&"radio"===a)Or(e,r,i);else if("input"===o||"textarea"===o)Tr(e,r,i);else{
if(!Qo.isReservedTag(o))return gr(e,r,i),!1;
gs("<"+e.tag+' v-model="'+r+"\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.");
}
return!0;
}
function Ar(e,t,n){
var r=n&&n.number,i=hr(e,"value")||"null",o=hr(e,"true-value")||"true",a=hr(e,"false-value")||"false";
fr(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),
vr(e,qs,"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0);
}
function Or(e,t,n){
var r=n&&n.number,i=hr(e,"value")||"null";
i=r?"_n("+i+")":i,fr(e,"checked","_q("+t+","+i+")"),vr(e,qs,yr(t,i),null,!0);
}
function Sr(e,t,n){
var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",a="var $$selectedVal = "+i+";";
a=a+" "+yr(t,o),vr(e,"change",a,null,!0);
}
function Tr(e,t,n){
var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?zs:"input",l="$event.target.value";
s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");
var f=yr(t,l);
c&&(f="if($event.target.composing)return;"+f),fr(e,"value","("+t+")"),vr(e,u,f,null,!0),
(s||a||"number"===r)&&vr(e,"blur","$forceUpdate()");
}
function Er(e){
var t;
e[zs]&&(t=na?"change":"input",e[t]=[].concat(e[zs],e[t]||[]),delete e[zs]),e[qs]&&(t=sa?"click":"change",
e[t]=[].concat(e[qs],e[t]||[]),delete e[qs]);
}
function Ir(e,t,n,r){
if(n){
var i=t,o=ys;
t=function(n){
var a=1===arguments.length?i(n):i.apply(null,arguments);
null!==a&&jr(e,t,r,o);
};
}
ys.addEventListener(e,t,r);
}
function jr(e,t,n,r){
(r||ys).removeEventListener(e,t,n);
}
function Nr(e,t){
if(e.data.on||t.data.on){
var n=t.data.on||{},r=e.data.on||{};
ys=t.elm,Er(n),G(n,r,Ir,jr,t.context);
}
}
function Mr(e,t){
if(e.data.domProps||t.data.domProps){
var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};
a.__ob__&&(a=t.data.domProps=u({},a));
for(n in o)null==a[n]&&(i[n]="");
for(n in a)if(r=a[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),
r!==o[n]))if("value"===n){
i._value=r;
var s=null==r?"":String(r);
Dr(i,t,s)&&(i.value=s);
}else i[n]=r;
}
}
function Dr(e,t,n){
return!e.composing&&("option"===t.tag||Lr(e,n)||Pr(e,n));
}
function Lr(e,t){
return document.activeElement!==e&&e.value!==t;
}
function Pr(e,n){
var r=e.value,i=e._vModifiers;
return i&&i.number||"number"===e.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n;
}
function Rr(e){
var t=Fr(e.style);
return e.staticStyle?u(e.staticStyle,t):t;
}
function Fr(e){
return Array.isArray(e)?p(e):"string"==typeof e?Ws(e):e;
}
function Ur(e,t){
var n,r={};
if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=Rr(i.data))&&u(r,n);
(n=Rr(e.data))&&u(r,n);
for(var o=e;o=o.parent;)o.data&&(n=Rr(o.data))&&u(r,n);
return r;
}
function Hr(e,t){
var n=t.data,r=e.data;
if(n.staticStyle||n.style||r.staticStyle||r.style){
var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},l=s||c,f=Fr(t.data.style)||{};
t.data.style=f.__ob__?u({},f):f;
var p=Ur(t,!0);
for(o in l)null==p[o]&&Ys(a,o,"");
for(o in p)i=p[o],i!==l[o]&&Ys(a,o,null==i?"":i);
}
}
function Br(e,t){
if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){
return e.classList.add(t);
}):e.classList.add(t);else{
var n=" "+(e.getAttribute("class")||"")+" ";
n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim());
}
}
function Vr(e,t){
if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){
return e.classList.remove(t);
}):e.classList.remove(t);else{
for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");
e.setAttribute("class",n.trim());
}
}
function zr(e){
if(e){
if("object"==typeof e){
var t={};
return e.css!==!1&&u(t,tc(e.name||"v")),u(t,e),t;
}
return"string"==typeof e?tc(e):void 0;
}
}
function qr(e){
uc(function(){
uc(e);
});
}
function Jr(e,t){
(e._transitionClasses||(e._transitionClasses=[])).push(t),Br(e,t);
}
function Kr(e,t){
e._transitionClasses&&r(e._transitionClasses,t),Vr(e,t);
}
function Wr(e,t,n){
var r=Zr(e,t),i=r.type,o=r.timeout,a=r.propCount;
if(!i)return n();
var s=i===rc?ac:cc,c=0,u=function(){
e.removeEventListener(s,l),n();
},l=function(t){
t.target===e&&++c>=a&&u();
};
setTimeout(function(){
a>c&&u();
},o+1),e.addEventListener(s,l);
}
function Zr(e,t){
var n,r=window.getComputedStyle(e),i=r[oc+"Delay"].split(", "),o=r[oc+"Duration"].split(", "),a=Gr(i,o),s=r[sc+"Delay"].split(", "),c=r[sc+"Duration"].split(", "),u=Gr(s,c),l=0,f=0;
t===rc?a>0&&(n=rc,l=a,f=o.length):t===ic?u>0&&(n=ic,l=u,f=c.length):(l=Math.max(a,u),
n=l>0?a>u?rc:ic:null,f=n?n===rc?o.length:c.length:0);
var p=n===rc&&lc.test(r[oc+"Property"]);
return{
type:n,
timeout:l,
propCount:f,
hasTransform:p
};
}
function Gr(e,t){
for(;e.length<t.length;)e=e.concat(e);
return Math.max.apply(null,t.map(function(t,n){
return Yr(t)+Yr(e[n]);
}));
}
function Yr(e){
return 1e3*Number(e.slice(0,-1));
}
function Qr(e,n){
var r=e.elm;
r._leaveCb&&(r._leaveCb.cancelled=!0,r._leaveCb());
var i=zr(e.data.transition);
if(i&&!r._enterCb&&1===r.nodeType){
for(var o=i.css,a=i.type,s=i.enterClass,c=i.enterToClass,u=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,d=i.appearActiveClass,v=i.beforeEnter,h=i.enter,m=i.afterEnter,y=i.enterCancelled,_=i.beforeAppear,b=i.appear,$=i.afterAppear,w=i.appearCancelled,x=i.duration,C=za,k=za.$vnode;k&&k.parent;)k=k.parent,
C=k.context;
var A=!C._isMounted||!e.isRootInsert;
if(!A||b||""===b){
var O=A&&f?f:s,S=A&&d?d:u,T=A&&p?p:c,E=A?_||v:v,I=A&&"function"==typeof b?b:h,j=A?$||m:m,N=A?w||y:y,M=t(l(x)?x.enter:x),D=o!==!1&&!ra,L=ti(I),P=r._enterCb=g(function(){
D&&(Kr(r,T),Kr(r,S)),P.cancelled?(D&&Kr(r,O),N&&N(r)):j&&j(r),r._enterCb=null;
});
e.data.show||Y(e.data.hook||(e.data.hook={}),"insert",function(){
var t=r.parentNode,n=t&&t._pending&&t._pending[e.key];
n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),I&&I(r,P);
}),E&&E(r),D&&(Jr(r,O),Jr(r,S),qr(function(){
Jr(r,T),Kr(r,O),P.cancelled||L||(ei(M)?setTimeout(P,M):Wr(r,a,P));
})),e.data.show&&(n&&n(),I&&I(r,P)),D||L||P();
}
}
}
function Xr(e,n){
function r(){
w.cancelled||(e.data.show||((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),
p&&p(i),_&&(Jr(i,c),Jr(i,f),qr(function(){
Jr(i,u),Kr(i,c),w.cancelled||b||(ei($)?setTimeout(w,$):Wr(i,s,w));
})),d&&d(i,w),_||b||w());
}
var i=e.elm;
i._enterCb&&(i._enterCb.cancelled=!0,i._enterCb());
var o=zr(e.data.transition);
if(!o)return n();
if(!i._leaveCb&&1===i.nodeType){
var a=o.css,s=o.type,c=o.leaveClass,u=o.leaveToClass,f=o.leaveActiveClass,p=o.beforeLeave,d=o.leave,v=o.afterLeave,h=o.leaveCancelled,m=o.delayLeave,y=o.duration,_=a!==!1&&!ra,b=ti(d),$=t(l(y)?y.leave:y),w=i._leaveCb=g(function(){
i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Kr(i,u),
Kr(i,f)),w.cancelled?(_&&Kr(i,c),h&&h(i)):(n(),v&&v(i)),i._leaveCb=null;
});
m?m(r):r();
}
}
function ei(e){
return"number"==typeof e&&!isNaN(e);
}
function ti(e){
if(!e)return!1;
var t=e.fns;
return t?ti(Array.isArray(t)?t[0]:t):(e._length||e.length)>1;
}
function ni(e,t){
t.data.show||Qr(t);
}
function ri(e,t,n){
var r=t.value,i=e.multiple;
if(!i||Array.isArray(r)){
for(var o,a,s=0,c=e.options.length;c>s;s++)if(a=e.options[s],i)o=m(r,oi(a))>-1,a.selected!==o&&(a.selected=o);else if(h(oi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));
i||(e.selectedIndex=-1);
}
}
function ii(e,t){
for(var n=0,r=t.length;r>n;n++)if(h(oi(t[n]),e))return!1;
return!0;
}
function oi(e){
return"_value"in e?e._value:e.value;
}
function ai(e){
e.target.composing=!0;
}
function si(e){
e.target.composing=!1,ci(e.target,"input");
}
function ci(e,t){
var n=document.createEvent("HTMLEvents");
n.initEvent(t,!0,!0),e.dispatchEvent(n);
}
function ui(e){
return!e.componentInstance||e.data&&e.data.transition?e:ui(e.componentInstance._vnode);
}
function li(e){
var t=e&&e.componentOptions;
return t&&t.Ctor.options.abstract?li(tt(t.children)):e;
}
function fi(e){
var t={},n=e.$options;
for(var r in n.propsData)t[r]=e[r];
var i=n._parentListeners;
for(var o in i)t[zo(o)]=i[o];
return t;
}
function pi(e,t){
return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null;
}
function di(e){
for(;e=e.parent;)if(e.data.transition)return!0;
}
function vi(e,t){
return t.key===e.key&&t.tag===e.tag;
}
function hi(e){
e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb();
}
function mi(e){
e.data.newPos=e.elm.getBoundingClientRect();
}
function gi(e){
var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;
if(r||i){
e.data.moved=!0;
var o=e.elm.style;
o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s";
}
}
function yi(e,t){
var n=document.createElement("div");
return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0;
}
function _i(e){
return xc=xc||document.createElement("div"),xc.innerHTML=e,xc.textContent;
}
function bi(e,t){
var n=t?uu:cu;
return e.replace(n,function(e){
return su[e];
});
}
function $i(e,t){
function n(t){
f+=t,e=e.substring(t);
}
function r(){
var t=e.match(Mc);
if(t){
var r={
tagName:t[1],
attrs:[],
start:f
};
n(t[0].length);
for(var i,o;!(i=e.match(Dc))&&(o=e.match(Ic));)n(o[0].length),r.attrs.push(o);
if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r;
}
}
function i(e){
var n=e.tagName,r=e.unarySlash;
u&&("p"===s&&Oc(n)&&o(s),Ac(n)&&s===n&&o(n));
for(var i=l(n)||"html"===n&&"head"===s||!!r,a=e.attrs.length,f=new Array(a),p=0;a>p;p++){
var d=e.attrs[p];
Uc&&-1===d[0].indexOf('""')&&(""===d[3]&&delete d[3],""===d[4]&&delete d[4],""===d[5]&&delete d[5]);
var v=d[3]||d[4]||d[5]||"";
f[p]={
name:d[1],
value:bi(v,t.shouldDecodeNewlines)
};
}
i||(c.push({
tag:n,
lowerCasedTag:n.toLowerCase(),
attrs:f
}),s=n),t.start&&t.start(n,f,i,e.start,e.end);
}
function o(e,n,r){
var i,o;
if(null==n&&(n=f),null==r&&(r=f),e&&(o=e.toLowerCase()),e)for(i=c.length-1;i>=0&&c[i].lowerCasedTag!==o;i--);else i=0;
if(i>=0){
for(var a=c.length-1;a>=i;a--)t.end&&t.end(c[a].tag,n,r);
c.length=i,s=i&&c[i-1].tag;
}else"br"===o?t.start&&t.start(e,[],!0,n,r):"p"===o&&(t.start&&t.start(e,[],!1,n,r),
t.end&&t.end(e,n,r));
}
for(var a,s,c=[],u=t.expectHTML,l=t.isUnaryTag||Go,f=0;e;){
if(a=e,s&&ou(s)){
var p=s.toLowerCase(),d=au[p]||(au[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),v=0,h=e.replace(d,function(e,n,r){
return v=r.length,"script"!==p&&"style"!==p&&"noscript"!==p&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),
t.chars&&t.chars(n),"";
});
f+=e.length-h.length,e=h,o(p,f-v,f);
}else{
var m=e.indexOf("<");
if(0===m){
if(Rc.test(e)){
var g=e.indexOf("-->");
if(g>=0){
n(g+3);
continue;
}
}
if(Fc.test(e)){
var y=e.indexOf("]>");
if(y>=0){
n(y+2);
continue;
}
}
var _=e.match(Pc);
if(_){
n(_[0].length);
continue;
}
var b=e.match(Lc);
if(b){
var $=f;
n(b[0].length),o(b[1],$,f);
continue;
}
var w=r();
if(w){
i(w);
continue;
}
}
var x=void 0,C=void 0,k=void 0;
if(m>=0){
for(C=e.slice(m);!(Lc.test(C)||Mc.test(C)||Rc.test(C)||Fc.test(C)||(k=C.indexOf("<",1),
0>k));)m+=k,C=e.slice(m);
x=e.substring(0,m),n(m);
}
0>m&&(x=e,e=""),t.chars&&x&&t.chars(x);
}
if(e===a){
t.chars&&t.chars(e);
break;
}
}
o();
}
function wi(e,t){
var n=t?pu(t):lu;
if(n.test(e)){
for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){
i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));
var s=sr(r[1].trim());
o.push("_s("+s+")"),a=i+r[0].length;
}
return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+");
}
}
function xi(e,t){
function n(e){
e.pre&&(s=!1),zc(e.tag)&&(c=!1);
}
Hc=t.warn||ur,Bc=t.getTagNamespace||Go,Vc=t.mustUseProp||Go,zc=t.isPreTag||Go,qc=lr(t.modules,"preTransformNode"),
Jc=lr(t.modules,"transformNode"),Kc=lr(t.modules,"postTransformNode"),Wc=t.delimiters;
var r,i,o=[],a=t.preserveWhitespace!==!1,s=!1,c=!1;
return $i(e,{
warn:Hc,
expectHTML:t.expectHTML,
isUnaryTag:t.isUnaryTag,
shouldDecodeNewlines:t.shouldDecodeNewlines,
start:function(e,a,u){
function l(e){}
var f=i&&i.ns||Bc(e);
na&&"svg"===f&&(a=Hi(a));
var p={
type:1,
tag:e,
attrsList:a,
attrsMap:Fi(a),
parent:i,
children:[]
};
f&&(p.ns=f),Ui(p)&&!ca()&&(p.forbidden=!0);
for(var d=0;d<qc.length;d++)qc[d](p,t);
if(s||(Ci(p),p.pre&&(s=!0)),zc(p.tag)&&(c=!0),s)ki(p);else{
Si(p),Ti(p),Ni(p),Ai(p),p.plain=!p.key&&!a.length,Oi(p),Mi(p),Di(p);
for(var v=0;v<Jc.length;v++)Jc[v](p,t);
Li(p);
}
if(r?o.length||r.if&&(p.elseif||p.else)&&(l(p),ji(r,{
exp:p.elseif,
block:p
})):(r=p,l(r)),i&&!p.forbidden)if(p.elseif||p.else)Ei(p,i);else if(p.slotScope){
i.plain=!1;
var h=p.slotTarget||'"default"';
(i.scopedSlots||(i.scopedSlots={}))[h]=p;
}else i.children.push(p),p.parent=i;
u?n(p):(i=p,o.push(p));
for(var m=0;m<Kc.length;m++)Kc[m](p,t);
},
end:function(){
var e=o[o.length-1],t=e.children[e.children.length-1];
t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e);
},
chars:function(e){
if(i&&(!na||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){
var t=i.children;
if(e=c||e.trim()?bu(e):a&&t.length?" ":""){
var n;
!s&&" "!==e&&(n=wi(e,Wc))?t.push({
type:2,
expression:n,
text:e
}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({
type:3,
text:e
});
}
}
}
}),r;
}
function Ci(e){
null!=mr(e,"v-pre")&&(e.pre=!0);
}
function ki(e){
var t=e.attrsList.length;
if(t)for(var n=e.attrs=new Array(t),r=0;t>r;r++)n[r]={
name:e.attrsList[r].name,
value:JSON.stringify(e.attrsList[r].value)
};else e.pre||(e.plain=!0);
}
function Ai(e){
var t=hr(e,"key");
t&&(e.key=t);
}
function Oi(e){
var t=hr(e,"ref");
t&&(e.ref=t,e.refInFor=Pi(e));
}
function Si(e){
var t;
if(t=mr(e,"v-for")){
var n=t.match(hu);
if(!n)return;
e.for=n[2].trim();
var r=n[1].trim(),i=r.match(mu);
i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r;
}
}
function Ti(e){
var t=mr(e,"v-if");
if(t)e.if=t,ji(e,{
exp:t,
block:e
});else{
null!=mr(e,"v-else")&&(e.else=!0);
var n=mr(e,"v-else-if");
n&&(e.elseif=n);
}
}
function Ei(e,t){
var n=Ii(t.children);
n&&n.if?ji(n,{
exp:e.elseif,
block:e
}):Hc("v-"+(e.elseif?'else-if="'+e.elseif+'"':"else")+" used on element <"+e.tag+"> without corresponding v-if.");
}
function Ii(e){
for(var t=e.length;t--;){
if(1===e[t].type)return e[t];
e.pop();
}
}
function ji(e,t){
e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t);
}
function Ni(e){
var t=mr(e,"v-once");
null!=t&&(e.once=!0);
}
function Mi(e){
if("slot"===e.tag)e.slotName=hr(e,"name");else{
var t=hr(e,"slot");
t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=mr(e,"scope"));
}
}
function Di(e){
var t;
(t=hr(e,"is"))&&(e.component=t),null!=mr(e,"inline-template")&&(e.inlineTemplate=!0);
}
function Li(e){
var t,n,r,i,o,a,s,c,u=e.attrsList;
for(t=0,n=u.length;n>t;t++)if(r=i=u[t].name,o=u[t].value,du.test(r))if(e.hasBindings=!0,
s=Ri(r),s&&(r=r.replace(_u,"")),gu.test(r))r=r.replace(gu,""),o=sr(o),c=!1,s&&(s.prop&&(c=!0,
r=zo(r),"innerHtml"===r&&(r="innerHTML")),s.camel&&(r=zo(r))),c||Vc(e.tag,e.attrsMap.type,r)?fr(e,r,o):pr(e,r,o);else if(vu.test(r))r=r.replace(vu,""),
vr(e,r,o,s);else{
r=r.replace(du,"");
var l=r.match(yu);
l&&(a=l[1])&&(r=r.slice(0,-(a.length+1))),dr(e,r,i,o,a,s);
}else{
var f=wi(o,Wc);
f&&Hc(r+'="'+o+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.'),
pr(e,r,JSON.stringify(o));
}
}
function Pi(e){
for(var t=e;t;){
if(void 0!==t.for)return!0;
t=t.parent;
}
return!1;
}
function Ri(e){
var t=e.match(_u);
if(t){
var n={};
return t.forEach(function(e){
n[e.slice(1)]=!0;
}),n;
}
}
function Fi(e){
for(var t={},n=0,r=e.length;r>n;n++)t[e[n].name]=e[n].value;
return t;
}
function Ui(e){
return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type);
}
function Hi(e){
for(var t=[],n=0;n<e.length;n++){
var r=e[n];
$u.test(r.name)||(r.name=r.name.replace(wu,""),t.push(r));
}
return t;
}
function Bi(e,t){
e&&(Zc=xu(t.staticKeys||""),Gc=t.isReservedTag||Go,zi(e),qi(e,!1));
}
function Vi(e){
return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""));
}
function zi(e){
if(e.static=Ki(e),1===e.type){
if(!Gc(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;
for(var t=0,n=e.children.length;n>t;t++){
var r=e.children[t];
zi(r),r.static||(e.static=!1);
}
}
}
function qi(e,t){
if(1===e.type){
if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);
if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;r>n;n++)qi(e.children[n],t||!!e.for);
e.ifConditions&&Ji(e.ifConditions,t);
}
}
function Ji(e,t){
for(var n=1,r=e.length;r>n;n++)qi(e[n].block,t);
}
function Ki(e){
return 2===e.type?!1:3===e.type?!0:!(!e.pre&&(e.hasBindings||e.if||e.for||Ho(e.tag)||!Gc(e.tag)||Wi(e)||!Object.keys(e).every(Zc)));
}
function Wi(e){
for(;e.parent;){
if(e=e.parent,"template"!==e.tag)return!1;
if(e.for)return!0;
}
return!1;
}
function Zi(e,t){
var n=t?"nativeOn:{":"on:{";
for(var r in e)n+='"'+r+'":'+Gi(r,e[r])+",";
return n.slice(0,-1)+"}";
}
function Gi(e,t){
if(!t)return"function(){}";
if(Array.isArray(t))return"["+t.map(function(t){
return Gi(e,t);
}).join(",")+"]";
var n=ku.test(t.value),r=Cu.test(t.value);
if(t.modifiers){
var i="",o=[];
for(var a in t.modifiers)Su[a]?(i+=Su[a],Au[a]&&o.push(a)):o.push(a);
o.length&&(i+=Yi(o));
var s=n?t.value+"($event)":r?"("+t.value+")($event)":t.value;
return"function($event){"+i+s+"}";
}
return n||r?t.value:"function($event){"+t.value+"}";
}
function Yi(e){
return"if(!('button' in $event)&&"+e.map(Qi).join("&&")+")return null;";
}
function Qi(e){
var t=parseInt(e,10);
if(t)return"$event.keyCode!=="+t;
var n=Au[e];
return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")";
}
function Xi(e,t){
e.wrapData=function(n){
return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")";
};
}
function eo(e,t){
var n=nu,r=nu=[],i=ru;
ru=0,iu=t,Yc=t.warn||ur,Qc=lr(t.modules,"transformCode"),Xc=lr(t.modules,"genData"),
eu=t.directives||{},tu=t.isReservedTag||Go;
var o=e?to(e):'_c("div")';
return nu=n,ru=i,{
render:"with(this){return "+o+"}",
staticRenderFns:r
};
}
function to(e){
if(e.staticRoot&&!e.staticProcessed)return no(e);
if(e.once&&!e.onceProcessed)return ro(e);
if(e.for&&!e.forProcessed)return ao(e);
if(e.if&&!e.ifProcessed)return io(e);
if("template"!==e.tag||e.slotTarget){
if("slot"===e.tag)return _o(e);
var t;
if(e.component)t=bo(e.component,e);else{
var n=e.plain?void 0:so(e),r=e.inlineTemplate?null:po(e,!0);
t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")";
}
for(var i=0;i<Qc.length;i++)t=Qc[i](e,t);
return t;
}
return po(e)||"void 0";
}
function no(e){
return e.staticProcessed=!0,nu.push("with(this){return "+to(e)+"}"),"_m("+(nu.length-1)+(e.staticInFor?",true":"")+")";
}
function ro(e){
if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return io(e);
if(e.staticInFor){
for(var t="",n=e.parent;n;){
if(n.for){
t=n.key;
break;
}
n=n.parent;
}
return t?"_o("+to(e)+","+ru++ +(t?","+t:"")+")":to(e);
}
return no(e);
}
function io(e){
return e.ifProcessed=!0,oo(e.ifConditions.slice());
}
function oo(e){
function t(e){
return e.once?ro(e):to(e);
}
if(!e.length)return"_e()";
var n=e.shift();
return n.exp?"("+n.exp+")?"+t(n.block)+":"+oo(e):""+t(n.block);
}
function ao(e){
var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";
return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+to(e)+"})";
}
function so(e){
var t="{",n=co(e);
n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),
e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');
for(var r=0;r<Xc.length;r++)t+=Xc[r](e);
if(e.attrs&&(t+="attrs:{"+$o(e.attrs)+"},"),e.props&&(t+="domProps:{"+$o(e.props)+"},"),
e.events&&(t+=Zi(e.events)+","),e.nativeEvents&&(t+=Zi(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),
e.scopedSlots&&(t+=lo(e.scopedSlots)+","),e.model&&(t+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),
e.inlineTemplate){
var i=uo(e);
i&&(t+=i+",");
}
return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t;
}
function co(e){
var t=e.directives;
if(t){
var n,r,i,o,a="directives:[",s=!1;
for(n=0,r=t.length;r>n;n++){
i=t[n],o=!0;
var c=eu[i.name]||Tu[i.name];
c&&(o=!!c(e,i,Yc)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},");
}
return s?a.slice(0,-1)+"]":void 0;
}
}
function uo(e){
var t=e.children[0];
if(1===t.type){
var n=eo(t,iu);
return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){
return"function(){"+e+"}";
}).join(",")+"]}";
}
}
function lo(e){
return"scopedSlots:_u(["+Object.keys(e).map(function(t){
return fo(t,e[t]);
}).join(",")+"])";
}
function fo(e,t){
return"["+e+",function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?po(t)||"void 0":to(t))+"}]";
}
function po(e,t){
var n=e.children;
if(n.length){
var r=n[0];
if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return to(r);
var i=t?vo(n):0;
return"["+n.map(go).join(",")+"]"+(i?","+i:"");
}
}
function vo(e){
for(var t=0,n=0;n<e.length;n++){
var r=e[n];
if(1===r.type){
if(ho(r)||r.ifConditions&&r.ifConditions.some(function(e){
return ho(e.block);
})){
t=2;
break;
}
(mo(r)||r.ifConditions&&r.ifConditions.some(function(e){
return mo(e.block);
}))&&(t=1);
}
}
return t;
}
function ho(e){
return void 0!==e.for||"template"===e.tag||"slot"===e.tag;
}
function mo(e){
return!tu(e.tag);
}
function go(e){
return 1===e.type?to(e):yo(e);
}
function yo(e){
return"_v("+(2===e.type?e.expression:wo(JSON.stringify(e.text)))+")";
}
function _o(e){
var t=e.slotName||'"default"',n=po(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){
return zo(e.name)+":"+e.value;
}).join(",")+"}",o=e.attrsMap["v-bind"];
return!i&&!o||n||(r+=",null"),i&&(r+=","+i),o&&(r+=(i?"":",null")+","+o),r+")";
}
function bo(e,t){
var n=t.inlineTemplate?null:po(t,!0);
return"_c("+e+","+so(t)+(n?","+n:"")+")";
}
function $o(e){
for(var t="",n=0;n<e.length;n++){
var r=e[n];
t+='"'+r.name+'":'+wo(r.value)+",";
}
return t.slice(0,-1);
}
function wo(e){
return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");
}
function xo(e){
var t=[];
return e&&Co(e,t),t;
}
function Co(e,t){
if(1===e.type){
for(var n in e.attrsMap)if(du.test(n)){
var r=e.attrsMap[n];
r&&("v-for"===n?Ao(e,'v-for="'+r+'"',t):vu.test(n)?ko(r,n+'="'+r+'"',t):So(r,n+'="'+r+'"',t));
}
if(e.children)for(var i=0;i<e.children.length;i++)Co(e.children[i],t);
}else 2===e.type&&So(e.expression,e.text,t);
}
function ko(e,t,n){
var r=e.replace(Nu,"").match(Iu);
r&&n.push('avoid using JavaScript unary operator as property name: "'+r[0]+'" in expression '+t.trim()),
So(e,t,n);
}
function Ao(e,t,n){
So(e.for||"",t,n),Oo(e.alias,"v-for alias",t,n),Oo(e.iterator1,"v-for iterator",t,n),
Oo(e.iterator2,"v-for iterator",t,n);
}
function Oo(e,t,n,r){
"string"!=typeof e||ju.test(e)||r.push("invalid "+t+' "'+e+'" in expression: '+n.trim());
}
function So(e,t,n){
try{
new Function("return "+e);
}catch(r){
var i=e.replace(Nu,"").match(Eu);
n.push(i?'avoid using JavaScript keyword as property name: "'+i[0]+'" in expression '+t.trim():"invalid expression: "+t.trim());
}
}
function To(e,t){
var n=xi(e.trim(),t);
Bi(n,t);
var r=eo(n,t);
return{
ast:n,
render:r.render,
staticRenderFns:r.staticRenderFns
};
}
function Eo(e,t){
try{
return new Function(e);
}catch(n){
return t.push({
err:n,
code:e
}),d;
}
}
function Io(e){
function t(t,n){
var r=Object.create(e),i=[],o=[];
if(r.warn=function(e,t){
(t?o:i).push(e);
},n){
n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=u(Object.create(e.directives),n.directives));
for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);
}
var s=To(t,r);
return i.push.apply(i,xo(s.ast)),s.errors=i,s.tips=o,s;
}
function n(e,n,i){
n=n||{};
try{
new Function("return 1");
}catch(o){
o.toString().match(/unsafe-eval|CSP/)&&ma("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.");
}
var a=n.delimiters?String(n.delimiters)+e:e;
if(r[a])return r[a];
var s=t(e,n);
s.errors&&s.errors.length&&ma("Error compiling template:\n\n"+e+"\n\n"+s.errors.map(function(e){
return"- "+e;
}).join("\n")+"\n",i),s.tips&&s.tips.length&&s.tips.forEach(function(e){
return ga(e,i);
});
var c={},u=[];
c.render=Eo(s.render,u);
var l=s.staticRenderFns.length;
c.staticRenderFns=new Array(l);
for(var f=0;l>f;f++)c.staticRenderFns[f]=Eo(s.staticRenderFns[f],u);
return s.errors&&s.errors.length||!u.length||ma("Failed to generate render function:\n\n"+u.map(function(e){
var t=e.err,n=e.code;
return t.toString()+" in\n\n"+n+"\n";
}).join("\n"),i),r[a]=c;
}
var r=Object.create(null);
return{
compile:t,
compileToFunctions:n
};
}
function jo(e,t){
var n=(t.warn||ur,mr(e,"class"));
n&&(e.staticClass=JSON.stringify(n));
var r=hr(e,"class",!1);
r&&(e.classBinding=r);
}
function No(e){
var t="";
return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),
t;
}
function Mo(e,t){
var n=t.warn||ur,r=mr(e,"style");
if(r){
var i=wi(r,t.delimiters);
i&&n('style="'+r+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'),
e.staticStyle=JSON.stringify(Ws(r));
}
var o=hr(e,"style",!1);
o&&(e.styleBinding=o);
}
function Do(e){
var t="";
return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),
t;
}
function Lo(e,t){
t.value&&fr(e,"textContent","_s("+t.value+")");
}
function Po(e,t){
t.value&&fr(e,"innerHTML","_s("+t.value+")");
}
function Ro(e){
if(e.outerHTML)return e.outerHTML;
var t=document.createElement("div");
return t.appendChild(e.cloneNode(!0)),t.innerHTML;
}
var Fo,Uo,Ho=n("slot,component",!0),Bo=Object.prototype.hasOwnProperty,Vo=/-(\w)/g,zo=a(function(e){
return e.replace(Vo,function(e,t){
return t?t.toUpperCase():"";
});
}),qo=a(function(e){
return e.charAt(0).toUpperCase()+e.slice(1);
}),Jo=/([^-])([A-Z])/g,Ko=a(function(e){
return e.replace(Jo,"$1-$2").replace(Jo,"$1-$2").toLowerCase();
}),Wo=Object.prototype.toString,Zo="[object Object]",Go=function(){
return!1;
},Yo=function(e){
return e;
},Qo={
optionMergeStrategies:Object.create(null),
silent:!1,
productionTip:!1,
devtools:!1,
performance:!1,
errorHandler:null,
ignoredElements:[],
keyCodes:Object.create(null),
isReservedTag:Go,
isUnknownElement:Go,
getTagNamespace:d,
parsePlatformTagName:Yo,
mustUseProp:Go,
_assetTypes:["component","directive","filter"],
_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],
_maxUpdateCount:100
},Xo="__proto__"in{},ea="undefined"!=typeof window,ta=ea&&window.navigator.userAgent.toLowerCase(),na=ta&&/msie|trident/.test(ta),ra=ta&&ta.indexOf("msie 9.0")>0,ia=ta&&ta.indexOf("edge/")>0,oa=ta&&ta.indexOf("android")>0,aa=ta&&/iphone|ipad|ipod|ios/.test(ta),sa=ta&&/chrome\/\d+/.test(ta)&&!ia,ca=function(){
return void 0===Fo&&(Fo=ea||"undefined"==typeof global?!1:"server"===global.process.env.VUE_ENV),
Fo;
},ua=ea&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,la="undefined"!=typeof Symbol&&y(Symbol)&&"undefined"!=typeof Reflect&&y(Reflect.ownKeys),fa=function(){
function e(){
r=!1;
var e=n.slice(0);
n.length=0;
for(var t=0;t<e.length;t++)e[t]();
}
var t,n=[],r=!1;
if("undefined"!=typeof Promise&&y(Promise)){
var i=Promise.resolve(),o=function(e){
console.error(e);
};
t=function(){
i.then(e).catch(o),aa&&setTimeout(d);
};
}else if("undefined"==typeof MutationObserver||!y(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){
setTimeout(e,0);
};else{
var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));
s.observe(c,{
characterData:!0
}),t=function(){
a=(a+1)%2,c.data=String(a);
};
}
return function(e,i){
var o;
return n.push(function(){
e&&e.call(i),o&&o(i);
}),r||(r=!0,t()),e||"undefined"==typeof Promise?void 0:new Promise(function(e){
o=e;
});
};
}();
Uo="undefined"!=typeof Set&&y(Set)?Set:function(){
function e(){
this.set=Object.create(null);
}
return e.prototype.has=function(e){
return this.set[e]===!0;
},e.prototype.add=function(e){
this.set[e]=!0;
},e.prototype.clear=function(){
this.set=Object.create(null);
},e;
}();
var pa;
pa=ea&&window.performance,!pa||pa.mark&&pa.measure||(pa=void 0);
var da,va=Object.freeze({}),ha=/[^\w.$]/,ma=d,ga=d,ya="undefined"!=typeof console,_a=/(?:^|[-_])(\w)/g,ba=function(e){
return e.replace(_a,function(e){
return e.toUpperCase();
}).replace(/[-_]/g,"");
};
ma=function(e,t){
ya&&!Qo.silent&&console.error("[Vue warn]: "+e+" "+(t?$a(da(t)):""));
},ga=function(e,t){
ya&&!Qo.silent&&console.warn("[Vue tip]: "+e+" "+(t?$a(da(t)):""));
},da=function(e,t){
if(e.$root===e)return"<Root>";
var n=e._isVue?e.$options.name||e.$options._componentTag:e.name,r=e._isVue&&e.$options.__file;
if(!n&&r){
var i=r.match(/([^\/\\]+)\.vue$/);
n=i&&i[1];
}
return(n?"<"+ba(n)+">":"<Anonymous>")+(r&&t!==!1?" at "+r:"");
};
var $a=function(e){
return"<Anonymous>"===e&&(e+=' - use the "name" option for better debugging messages.'),
"\n(found in "+e+")";
},wa=0,xa=function(){
this.id=wa++,this.subs=[];
};
xa.prototype.addSub=function(e){
this.subs.push(e);
},xa.prototype.removeSub=function(e){
r(this.subs,e);
},xa.prototype.depend=function(){
xa.target&&xa.target.addDep(this);
},xa.prototype.notify=function(){
for(var e=this.subs.slice(),t=0,n=e.length;n>t;t++)e[t].update();
},xa.target=null;
var Ca=[],ka=Array.prototype,Aa=Object.create(ka);
["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){
var t=ka[e];
b(Aa,e,function(){
for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];
var o,a=t.apply(this,i),s=this.__ob__;
switch(e){
case"push":
o=i;
break;

case"unshift":
o=i;
break;

case"splice":
o=i.slice(2);
}
return o&&s.observeArray(o),s.dep.notify(),a;
});
});
var Oa=Object.getOwnPropertyNames(Aa),Sa={
shouldConvert:!0,
isSettingProps:!1
},Ta=function(e){
if(this.value=e,this.dep=new xa,this.vmCount=0,b(e,"__ob__",this),Array.isArray(e)){
var t=Xo?C:k;
t(e,Aa,Oa),this.observeArray(e);
}else this.walk(e);
};
Ta.prototype.walk=function(e){
for(var t=Object.keys(e),n=0;n<t.length;n++)O(e,t[n],e[t[n]]);
},Ta.prototype.observeArray=function(e){
for(var t=0,n=e.length;n>t;t++)A(e[t]);
};
var Ea=Qo.optionMergeStrategies;
Ea.el=Ea.propsData=function(e,t,n,r){
return n||ma('option "'+r+'" can only be used during instance creation with the `new` keyword.'),
ja(e,t);
},Ea.data=function(e,t,n){
return n?e||t?function(){
var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;
return r?I(r,i):i;
}:void 0:t?"function"!=typeof t?e:e?function(){
return I(t.call(this),e.call(this));
}:t:e;
},Qo._lifecycleHooks.forEach(function(e){
Ea[e]=j;
}),Qo._assetTypes.forEach(function(e){
Ea[e+"s"]=N;
}),Ea.watch=function(e,t){
if(!t)return Object.create(e||null);
if(!e)return t;
var n={};
u(n,e);
for(var r in t){
var i=n[r],o=t[r];
i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o];
}
return n;
},Ea.props=Ea.methods=Ea.computed=function(e,t){
if(!t)return Object.create(e||null);
if(!e)return t;
var n=Object.create(null);
return u(n,e),u(n,t),n;
};
var Ia,ja=function(e,t){
return void 0===t?e:t;
},Na=n("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),Ma=function(e,t){
ma('Property or method "'+t+'" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.',e);
},Da="undefined"!=typeof Proxy&&Proxy.toString().match(/native code/);
if(Da){
var La=n("stop,prevent,self,ctrl,shift,alt,meta");
Qo.keyCodes=new Proxy(Qo.keyCodes,{
set:function(e,t,n){
return La(t)?(ma("Avoid overwriting built-in modifier in config.keyCodes: ."+t),
!1):(e[t]=n,!0);
}
});
}
var Pa={
has:function Vu(e,t){
var Vu=t in e,n=Na(t)||"_"===t.charAt(0);
return Vu||n||Ma(e,t),Vu||!n;
}
},Ra={
get:function(e,t){
return"string"!=typeof t||t in e||Ma(e,t),e[t];
}
};
Ia=function(e){
if(Da){
var t=e.$options,n=t.render&&t.render._withStripped?Ra:Pa;
e._renderProxy=new Proxy(e,n);
}else e._renderProxy=e;
};
var Fa=function(e,t,n,r,i,o,a){
this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,
this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,
this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,
this.isCloned=!1,this.isOnce=!1;
},Ua={
child:{}
};
Ua.child.get=function(){
return this.componentInstance;
},Object.defineProperties(Fa.prototype,Ua);
var Ha,Ba=function(){
var e=new Fa;
return e.text="",e.isComment=!0,e;
},Va=a(function(e){
var t="~"===e.charAt(0);
e=t?e.slice(1):e;
var n="!"===e.charAt(0);
return e=n?e.slice(1):e,{
name:e,
once:t,
capture:n
};
}),za=null,qa=[],Ja={},Ka={},Wa=!1,Za=!1,Ga=0,Ya=0,Qa=function(e,t,n,r){
this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,
this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ya,
this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Uo,
this.newDepIds=new Uo,this.expression=t.toString(),"function"==typeof t?this.getter=t:(this.getter=$(t),
this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get();
};
Qa.prototype.get=function(){
w(this);
var e,t=this.vm;
if(this.user)try{
e=this.getter.call(t,t);
}catch(n){
q(n,t,'getter for watcher "'+this.expression+'"');
}else e=this.getter.call(t,t);
return this.deep&&$t(e),x(),this.cleanupDeps(),e;
},Qa.prototype.addDep=function(e){
var t=e.id;
this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this));
},Qa.prototype.cleanupDeps=function(){
for(var e=this,t=this.deps.length;t--;){
var n=e.deps[t];
e.newDepIds.has(n.id)||n.removeSub(e);
}
var r=this.depIds;
this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,
this.newDeps=r,this.newDeps.length=0;
},Qa.prototype.update=function(){
this.lazy?this.dirty=!0:this.sync?this.run():bt(this);
},Qa.prototype.run=function(){
if(this.active){
var e=this.get();
if(e!==this.value||l(e)||this.deep){
var t=this.value;
if(this.value=e,this.user)try{
this.cb.call(this.vm,e,t);
}catch(n){
q(n,this.vm,'callback for watcher "'+this.expression+'"');
}else this.cb.call(this.vm,e,t);
}
}
},Qa.prototype.evaluate=function(){
this.value=this.get(),this.dirty=!1;
},Qa.prototype.depend=function(){
for(var e=this,t=this.deps.length;t--;)e.deps[t].depend();
},Qa.prototype.teardown=function(){
var e=this;
if(this.active){
this.vm._isBeingDestroyed||r(this.vm._watchers,this);
for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);
this.active=!1;
}
};
var Xa=new Uo,es={
enumerable:!0,
configurable:!0,
get:d,
set:d
},ts={
key:1,
ref:1,
slot:1
},ns={
lazy:!0
},rs={
init:Pt,
prepatch:Rt,
insert:Ft,
destroy:Ut
},is=Object.keys(rs),os=1,as=2,ss=0;
ln(hn),Nt(hn),at(hn),ft(hn),sn(hn);
var cs=[String,RegExp],us={
name:"keep-alive",
"abstract":!0,
props:{
include:cs,
exclude:cs
},
created:function(){
this.cache=Object.create(null);
},
destroyed:function(){
var e=this;
for(var t in e.cache)kn(e.cache[t]);
},
watch:{
include:function(e){
Cn(this.cache,function(t){
return xn(e,t);
});
},
exclude:function(e){
Cn(this.cache,function(t){
return!xn(e,t);
});
}
},
render:function(){
var e=tt(this.$slots.default),t=e&&e.componentOptions;
if(t){
var n=wn(t);
if(n&&(this.include&&!xn(this.include,n)||this.exclude&&xn(this.exclude,n)))return e;
var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;
this.cache[r]?e.componentInstance=this.cache[r].componentInstance:this.cache[r]=e,
e.data.keepAlive=!0;
}
return e;
}
},ls={
KeepAlive:us
};
An(hn),Object.defineProperty(hn.prototype,"$isServer",{
get:ca
}),hn.version="2.2.2";
var fs,ps,ds,vs,hs,ms,gs,ys,_s,bs=n("input,textarea,option,select"),$s=function(e,t,n){
return"value"===n&&bs(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e;
},ws=n("contenteditable,draggable,spellcheck"),xs=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Cs="http://www.w3.org/1999/xlink",ks=function(e){
return":"===e.charAt(5)&&"xlink"===e.slice(0,5);
},As=function(e){
return ks(e)?e.slice(6,e.length):"";
},Os=function(e){
return null==e||e===!1;
},Ss={
svg:"http://www.w3.org/2000/svg",
math:"http://www.w3.org/1998/Math/MathML"
},Ts=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),Es=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Is=function(e){
return"pre"===e;
},js=function(e){
return Ts(e)||Es(e);
},Ns=Object.create(null),Ms=Object.freeze({
createElement:Dn,
createElementNS:Ln,
createTextNode:Pn,
createComment:Rn,
insertBefore:Fn,
removeChild:Un,
appendChild:Hn,
parentNode:Bn,
nextSibling:Vn,
tagName:zn,
setTextContent:qn,
setAttribute:Jn
}),Ds={
create:function(e,t){
Kn(t);
},
update:function(e,t){
e.data.ref!==t.data.ref&&(Kn(e,!0),Kn(t));
},
destroy:function(e){
Kn(e,!0);
}
},Ls=new Fa("",{},[]),Ps=["create","activate","update","remove","destroy"],Rs={
create:Xn,
update:Xn,
destroy:function(e){
Xn(e,Ls);
}
},Fs=Object.create(null),Us=[Ds,Rs],Hs={
create:ir,
update:ir
},Bs={
create:ar,
update:ar
},Vs=/[\w).+\-_$\]]/,zs="__r",qs="__c",Js={
create:Nr,
update:Nr
},Ks={
create:Mr,
update:Mr
},Ws=a(function(e){
var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;
return e.split(n).forEach(function(e){
if(e){
var n=e.split(r);
n.length>1&&(t[n[0].trim()]=n[1].trim());
}
}),t;
}),Zs=/^--/,Gs=/\s*!important$/,Ys=function(e,t,n){
Zs.test(t)?e.style.setProperty(t,n):Gs.test(n)?e.style.setProperty(t,n.replace(Gs,""),"important"):e.style[Xs(t)]=n;
},Qs=["Webkit","Moz","ms"],Xs=a(function(e){
if(_s=_s||document.createElement("div"),e=zo(e),"filter"!==e&&e in _s.style)return e;
for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Qs.length;n++){
var r=Qs[n]+t;
if(r in _s.style)return r;
}
}),ec={
create:Hr,
update:Hr
},tc=a(function(e){
return{
enterClass:e+"-enter",
enterToClass:e+"-enter-to",
enterActiveClass:e+"-enter-active",
leaveClass:e+"-leave",
leaveToClass:e+"-leave-to",
leaveActiveClass:e+"-leave-active"
};
}),nc=ea&&!ra,rc="transition",ic="animation",oc="transition",ac="transitionend",sc="animation",cc="animationend";
nc&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(oc="WebkitTransition",
ac="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(sc="WebkitAnimation",
cc="webkitAnimationEnd"));
var uc=ea&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,lc=/\b(transform|all)(,|$)/,fc=ea?{
create:ni,
activate:ni,
remove:function(e,t){
e.data.show?t():Xr(e,t);
}
}:{},pc=[Hs,Bs,Js,Ks,ec,fc],dc=pc.concat(Us),vc=Qn({
nodeOps:Ms,
modules:dc
});
ra&&document.addEventListener("selectionchange",function(){
var e=document.activeElement;
e&&e.vmodel&&ci(e,"input");
});
var hc={
inserted:function(e,t,n){
if("select"===n.tag){
var r=function(){
ri(e,t,n.context);
};
r(),(na||ia)&&setTimeout(r,0);
}else("textarea"===n.tag||"text"===e.type)&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(oa||(e.addEventListener("compositionstart",ai),
e.addEventListener("compositionend",si)),ra&&(e.vmodel=!0)));
},
componentUpdated:function(e,t,n){
if("select"===n.tag){
ri(e,t,n.context);
var r=e.multiple?t.value.some(function(t){
return ii(t,e.options);
}):t.value!==t.oldValue&&ii(t.value,e.options);
r&&ci(e,"change");
}
}
},mc={
bind:function(e,t,n){
var r=t.value;
n=ui(n);
var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;
r&&i&&!ra?(n.data.show=!0,Qr(n,function(){
e.style.display=o;
})):e.style.display=r?o:"none";
},
update:function(e,t,n){
var r=t.value,i=t.oldValue;
if(r!==i){
n=ui(n);
var o=n.data&&n.data.transition;
o&&!ra?(n.data.show=!0,r?Qr(n,function(){
e.style.display=e.__vOriginalDisplay;
}):Xr(n,function(){
e.style.display="none";
})):e.style.display=r?e.__vOriginalDisplay:"none";
}
},
unbind:function(e,t,n,r,i){
i||(e.style.display=e.__vOriginalDisplay);
}
},gc={
model:hc,
show:mc
},yc={
name:String,
appear:Boolean,
css:Boolean,
mode:String,
type:String,
enterClass:String,
leaveClass:String,
enterToClass:String,
leaveToClass:String,
enterActiveClass:String,
leaveActiveClass:String,
appearClass:String,
appearActiveClass:String,
appearToClass:String,
duration:[Number,String,Object]
},_c={
name:"transition",
props:yc,
"abstract":!0,
render:function(e){
var t=this,n=this.$slots.default;
if(n&&(n=n.filter(function(e){
return e.tag;
}),n.length)){
var r=this.mode,i=n[0];
if(di(this.$vnode))return i;
var a=li(i);
if(!a)return i;
if(this._leaving)return pi(e,i);
var s="__transition-"+this._uid+"-";
a.key=null==a.key?s+a.tag:o(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;
var c=(a.data||(a.data={})).transition=fi(this),l=this._vnode,f=li(l);
if(a.data.directives&&a.data.directives.some(function(e){
return"show"===e.name;
})&&(a.data.show=!0),f&&f.data&&!vi(a,f)){
var p=f&&(f.data.transition=u({},c));
if("out-in"===r)return this._leaving=!0,Y(p,"afterLeave",function(){
t._leaving=!1,t.$forceUpdate();
}),pi(e,i);
if("in-out"===r){
var d,v=function(){
d();
};
Y(c,"afterEnter",v),Y(c,"enterCancelled",v),Y(p,"delayLeave",function(e){
d=e;
});
}
}
return i;
}
}
},bc=u({
tag:String,
moveClass:String
},yc);
delete bc.mode;
var $c={
props:bc,
render:function(e){
for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=fi(this),s=0;s<i.length;s++){
var c=i[s];
if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,
(c.data||(c.data={})).transition=a;else{
var u=c.componentOptions,l=u?u.Ctor.options.name||u.tag||"":c.tag;
ma("<transition-group> children must be keyed: <"+l+">");
}
}
if(r){
for(var f=[],p=[],d=0;d<r.length;d++){
var v=r[d];
v.data.transition=a,v.data.pos=v.elm.getBoundingClientRect(),n[v.key]?f.push(v):p.push(v);
}
this.kept=e(t,null,f),this.removed=p;
}
return e(t,null,o);
},
beforeUpdate:function(){
this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept;
},
updated:function(){
var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";
if(e.length&&this.hasMove(e[0].elm,t)){
e.forEach(hi),e.forEach(mi),e.forEach(gi);
{
var n=document.body;
n.offsetHeight;
}
e.forEach(function(e){
if(e.data.moved){
var n=e.elm,r=n.style;
Jr(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ac,n._moveCb=function i(e){
(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener(ac,i),n._moveCb=null,
Kr(n,t));
});
}
});
}
},
methods:{
hasMove:function(e,t){
if(!nc)return!1;
if(null!=this._hasMove)return this._hasMove;
var n=e.cloneNode();
e._transitionClasses&&e._transitionClasses.forEach(function(e){
Vr(n,e);
}),Br(n,t),n.style.display="none",this.$el.appendChild(n);
var r=Zr(n);
return this.$el.removeChild(n),this._hasMove=r.hasTransform;
}
}
},wc={
Transition:_c,
TransitionGroup:$c
};
hn.config.mustUseProp=$s,hn.config.isReservedTag=js,hn.config.getTagNamespace=jn,
hn.config.isUnknownElement=Nn,u(hn.options.directives,gc),u(hn.options.components,wc),
hn.prototype.__patch__=ea?vc:d,hn.prototype.$mount=function(e,t){
return e=e&&ea?Mn(e):void 0,pt(this,e,t);
},setTimeout(function(){
Qo.devtools&&ua&&ua.emit("init",hn);
},0);
var xc,Cc=ea?yi("\n","&#10;"):!1,kc=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Ac=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Oc=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Sc=/([^\s"'<>\/=]+)/,Tc=/(?:=)/,Ec=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],Ic=new RegExp("^\\s*"+Sc.source+"(?:\\s*("+Tc.source+")\\s*(?:"+Ec.join("|")+"))?"),jc="[a-zA-Z_][\\w\\-\\.]*",Nc="((?:"+jc+"\\:)?"+jc+")",Mc=new RegExp("^<"+Nc),Dc=/^\s*(\/?)>/,Lc=new RegExp("^<\\/"+Nc+"[^>]*>"),Pc=/^<!DOCTYPE [^>]+>/i,Rc=/^<!--/,Fc=/^<!\[/,Uc=!1;
"x".replace(/x(.)?/g,function(e,t){
Uc=""===t;
});
var Hc,Bc,Vc,zc,qc,Jc,Kc,Wc,Zc,Gc,Yc,Qc,Xc,eu,tu,nu,ru,iu,ou=n("script,style",!0),au={},su={
"&lt;":"<",
"&gt;":">",
"&quot;":'"',
"&amp;":"&",
"&#10;":"\n"
},cu=/&(?:lt|gt|quot|amp);/g,uu=/&(?:lt|gt|quot|amp|#10);/g,lu=/\{\{((?:.|\n)+?)\}\}/g,fu=/[-.*+?^${}()|[\]\/\\]/g,pu=a(function(e){
var t=e[0].replace(fu,"\\$&"),n=e[1].replace(fu,"\\$&");
return new RegExp(t+"((?:.|\\n)+?)"+n,"g");
}),du=/^v-|^@|^:/,vu=/^@|^v-on:/,hu=/(.*?)\s+(?:in|of)\s+(.*)/,mu=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,gu=/^:|^v-bind:/,yu=/:(.*)$/,_u=/\.[^.]+/g,bu=a(_i),$u=/^xmlns:NS\d+/,wu=/^NS\d+:/,xu=a(Vi),Cu=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ku=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Au={
esc:27,
tab:9,
enter:13,
space:32,
up:38,
left:37,
right:39,
down:40,
"delete":[8,46]
},Ou=function(e){
return"if("+e+")return null;";
},Su={
stop:"$event.stopPropagation();",
prevent:"$event.preventDefault();",
self:Ou("$event.target !== $event.currentTarget"),
ctrl:Ou("!$event.ctrlKey"),
shift:Ou("!$event.shiftKey"),
alt:Ou("!$event.altKey"),
meta:Ou("!$event.metaKey"),
left:Ou("'button' in $event && $event.button !== 0"),
middle:Ou("'button' in $event && $event.button !== 1"),
right:Ou("'button' in $event && $event.button !== 2")
},Tu={
bind:Xi,
cloak:d
},Eu=new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),Iu=new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),ju=/[A-Za-z_$][\w$]*/,Nu=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g,Mu={
staticKeys:["staticClass"],
transformNode:jo,
genData:No
},Du={
staticKeys:["staticStyle"],
transformNode:Mo,
genData:Do
},Lu=[Mu,Du],Pu={
model:kr,
text:Lo,
html:Po
},Ru={
expectHTML:!0,
modules:Lu,
directives:Pu,
isPreTag:Is,
isUnaryTag:kc,
mustUseProp:$s,
isReservedTag:js,
getTagNamespace:jn,
staticKeys:v(Lu)
},Fu=Io(Ru),Uu=Fu.compileToFunctions,Hu=a(function(e){
var t=Mn(e);
return t&&t.innerHTML;
}),Bu=hn.prototype.$mount;
return hn.prototype.$mount=function(e,t){
if(e=e&&Mn(e),e===document.body||e===document.documentElement)return this;
var n=this.$options;
if(!n.render){
var r=n.template;
if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Hu(r));else{
if(!r.nodeType)return ma("invalid template option:"+r,this),this;
r=r.innerHTML;
}else e&&(r=Ro(e));
if(r){
var i=Uu(r,{
shouldDecodeNewlines:Cc,
delimiters:n.delimiters
},this),o=i.render,a=i.staticRenderFns;
n.render=o,n.staticRenderFns=a;
}
}
return Bu.call(this,e,t);
},hn.compile=Uu,hn;
});define("common/wx/constants.js",[],function(e,t){
"use strict";
t.CommentType={
Blog:1,
Content:2
},t.EditType={
HTML:0,
Markdown:1,
PlainText:2
},t.BlogAttr={
Normal:"Normal",
Top:"Top",
Official:"Official",
Trending:"Trending",
Featured:"Featured",
NEW:"New"
},t.BlogAttrBit={
Normal:1,
Top:2,
Official:4,
Trending:8,
Featured:16,
NEW:32
},t.CommentAttr={
Top:"top",
Featured:"featured"
},t.CommentAttrBit={
Top:1,
Featured:2
},t.BlogCategory={
Question:"Question",
Official:"Official",
Tutorial:"Tutorial",
Buglist:"Buglist",
Experience:"Experience",
Trending:"Trending",
Recommend:"Recommend",
Activities:"Activities",
QA:"QA",
APIGuide:"APIGuide",
EBOOK:"EBOOK"
},t.BlogCategoryBit={
Question:1,
Official:2,
Tutorial:4,
Buglist:8,
Experience:16,
Trending:32,
Recommend:64,
Activities:128,
QA:256,
APIGuide:512,
EBOOK:1024
},t.BlogCategoryHomePageNum={
Question:911,
Experience:926,
Trending:942,
Recommend:974
},t.QuestionCategory={
Verification:"Verification",
API:"API",
FRAMEWORK:"Framework",
Backend:"Backend",
IDE:"IDE",
CLIENT:"CLIENT",
OTHER:"OTHER",
DOC:"DOC"
},t.QuestionCategoryBit={
Verification:1,
API:2,
Backend:4,
IDE:8,
CLIENT:16,
OTHER:32,
FRAMEWORK:64,
DOC:128
},t.STORAGE_KEY={
RESIDENT_NOTICE:"RESIDENT_NOTICE",
DOC_READ:"DOC_READ",
EBOOK:"EBOOK"
},t.REPORT_KEY={
click_new_post_btn:"click_new_post_btn",
home_tab_activities:"home_tab_activities",
home_tab_apiguide:"home_tab_apiguide",
home_tab_tutorial:"home_tab_tutorial",
home_tab_qa:"home_tab_qa",
home_tab_buglist:"home_tab_buglist",
buglist_content:"buglist_content",
fixlog_content:"fixlog_content",
home_official_article:"home_official_article"
},t.QuestionTemplate="<p>你想反馈一个 Bug 还是 提一个需求？</p><br><p>如果是 Bug：</p><br><p>* Bug 表现是什么？预期表现是什么？</p><br><p>* 如何复现？</p><br><p>* 提供一个最简复现 Demo</p><br><p>如果是需求：</p><br><p>* 你希望有什么能力？</p><br><p>* 你需要这个能力的场景是 ? </p><br>",
t.QuestionTemplateText="你想反馈一个 Bug 还是 提一个需求？如果是 Bug：* Bug 表现是什么？预期表现是什么？* 如何复现？* 提供一个最简复现 Demo如果是需求：* 你希望有什么能力？* 你需要这个能力的场景是 ?",
t.BugQuestionTemplate="<p>- 当前 Bug 的表现（可附上截图）</p><br><p>- 预期表现</p><br><p>- 复现路径</p><br><p>- 提供一个最简复现 Demo</p><br>",
t.BugQuestionTemplateText="- 当前 Bug 的表现（可附上截图）- 预期表现- 复现路径- 提供一个最简复现 Demo",t.RequestQuestionTemplate="<p>- 需求的场景描述（希望解决的问题）</p><br><p>- 希望提供的能力</p><br>",
t.RequestQuestionTemplateText="- 需求的场景描述（希望解决的问题）- 希望提供的能力";
});define("common/wx/interpreter.js",["common/wx/constants.js"],function(e,r){
"use strict";
var t=e("common/wx/constants.js"),n=t.BlogAttr,i=t.BlogCategory,u=t.QuestionCategory,o=t.QuestionCategoryBit,a=1,s=2,c=4,g=8,f=16,I=32,l=128,m=256,A=512;
r.blogAttr=function(e){
if(e=parseInt(e),Number.isInteger&&!Number.isInteger(e))return{};
var r={};
return r[n.Normal]=e&a,r[n.Top]=e&s,r[n.Official]=e&c,r[n.Trending]=e&g,r[n.Featured]=e&f,
r;
},r.blogCategory=function(e){
if(e=parseInt(e),Number.isInteger&&!Number.isInteger(e))return{};
var r={};
return r[i.Question]=e&a,r[i.Official]=e&s,r[i.Tutorial]=e&c,r[i.Buglist]=e&g,r[i.Experience]=e&f,
r[i.Activities]=e&l,r[i.QA]=e&m,r[i.APIGuide]=e&A,r;
},r.isOfficialBlogCategory=function(e){
return e[i.Official]||e[i.Tutorial]||e[i.Buglist]||e[i.Activities]||e[i.QA]||e[i.APIGuide]?!0:!1;
},r.questionCategory=function(e){
if(e=parseInt(e),Number.isInteger&&!Number.isInteger(e))return{};
var r={};
return r[u.Verification]=e&a,r[u.API]=e&s,r[u.Backend]=e&c,r[u.IDE]=e&g,r[u.CLIENT]=e&f,
r[u.OTHER]=e&I,r;
},r.getQuestionCategoryIntro=function(e){
switch(e){
case o.API:
return"指小程序提供的wx命名空间下的接口和内置组件，此类问题，请选择这个标签";

case o.FRAMEWORK:
return"指小程序整体框架，包括配置、程序和页面、WXML等，此类问题，请选择这个标签";

case o.Verification:
return"指小程序的名称审核、类目审核、代码审核，此类问题，请选择这个标签";

case o.Backend:
return"指在mp.weixin.qq.com登录小程序的PC端管理后台，此类问题，请选择这个标签";

case o.IDE:
return"指小程序开发者开发小程序使用的工具，此类问题，请选择这个标签";

case o.CLIENT:
return"指微信客户端问题，分为IOS客户端和安卓客户端，此类问题，请选择这个标签";

case o.OTHER:
return"";

case o.DOC:
return"指在官方教程中遇到的问题反馈，此类问题，请选择这个标签";

default:
return"";
}
};
});define("discussion/report.js",["biz_common/utils/monitor.js","common/wx/cgiRetCode.js"],function(e){
"use strict";
function n(e,n){
s.pv[e]&&(n=n||1,s.pv[e].count+=n,console.log("addpv:"+e+" count:"+s.pv[e].count));
}
function t(e){
s.uv[e]&&(s.uv[e].count=1,window.location.href.indexOf("&_debug=1")>-1&&console.log("addUv:"+e+" count:"+s.uv[e].count));
}
function o(e,o){
n(e,o),t(e);
}
function i(e){
var n=s.id[e]||s.id[0];
for(var t in s.pv){
var o=s.pv[t];
o.count>0&&r.setSum(n,o.key,o.count);
}
for(var t in s.uv){
var o=s.uv[t];
o.count>0&&r.setSum(n,o.key,o.count);
}
r.send();
}
function u(e){
c.get({
url:"/report?scene="+e
},function(){
return{
"default":function(){},
0:function(){}
};
});
}
var r=e("biz_common/utils/monitor.js"),c=e("common/wx/cgiRetCode.js"),s={
id:["28146","28305"],
keyConf:["autowidth","fontsize","blockquote","horizontal","removeformat","link","unlink","mpvideo","qqvideo","wxvideo","insertimage","insertvote","insertmusic","insertaudio","insertcard","bold","italic","underline","forecolor","backcolor","justifyleft","justifycenter","justifyright","rowspacingtop","rowspacingbottom","lineheight","insertorderedlist","insertunorderedlist","imagefloatnone","imagefloatleft","imagefloatright","imagefloatcenter","usecache","cacelcache","showlink","hidelink","remoteimgsuc","remoteimgerr","cancel_autowidth","paste","formatmatch","contextmenu","menu_selectall","menu_cleardoc","menu_justifyleft","menu_justifyright","menu_justifycenter","menu_justifyjustify","menu_inserttable","menu_copy","menu_paste","menu_unlink","insertshop","menu_insertparagraphtrue","menu_insertparagraph","img_popup","link_popup","del_img","remoteimg_img","remoteimg_style","screen_shot_suc","screen_shot_fail","not_cur_img_count","save_remoting_img"],
pv:{},
uv:{}
};
return function(){
for(var e=0,n=s.keyConf.length;n>e;e++){
var t=2*e,o=2*e+1,i=s.keyConf[e];
s.pv[i]={
key:t,
count:0
},s.uv[i]={
key:o,
count:0
};
}
}(),{
addPv:n,
addUv:t,
addPvUv:o,
send:i,
stringReport:u
};
});var __assign=this&&this.__assign||Object.assign||function(t){
for(var e,r=1,n=arguments.length;n>r;r++){
e=arguments[r];
for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);
}
return t;
};
define("discussion/editor.container.js",["biz_common/jquery.validate.js","common/qq/Class.js","common/wx/Tips.js","common/wx/dialog.js","discussion/blog_cgi.js","discussion/draft.js","discussion/report.js","common/wx/mpEditor/plugin/remoteimg.js","common/wx/mpEditor/plugin/filter.js","common/wx/constants.js"],function(t){
"use strict";
function e(t){
return t?($.each(t,function(e,r){
r.html&&(t[e]=r.html(!1));
}),t):null;
}
var r=t("biz_common/jquery.validate.js"),n=r.rules,i=(t("common/qq/Class.js"),t("common/wx/Tips.js")),o=t("common/wx/dialog.js"),s=t("discussion/blog_cgi.js"),a=t("discussion/draft.js"),c=t("discussion/report.js"),u=(t("common/wx/mpEditor/plugin/remoteimg.js"),
t("common/wx/mpEditor/plugin/filter.js")),l=t("common/wx/constants.js"),d={},h=l.BugQuestionTemplateText,f=l.RequestQuestionTemplateText,m=function(t,e,r,n){
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
for(var s=r.length;s--;)if(r[s]===t)return n[s]===e;
if(r.push(t),n.push(e),o){
if(s=t.length,s!==e.length)return!1;
for(;s--;)if(!m(t[s],e[s],r,n))return!1;
}else for(var a in t)if(t.hasOwnProperty(a)&&(!e.hasOwnProperty(a)||!m(t[a],e[a],r,n)))return!1;
return r.pop(),n.pop(),!0;
},p=function(){
function t(t){
this.opt=t,this.$dom=$(t.editorSelector),this.submitData=t.submitData,this.submitURL=t.submitURL,
this.ueditor=t.ueditor,this.draft=t.needDraft?new a(t.docid+t.blogCategory):null,
this.list=this.draft?this.draft.get()||e(t.appmsg_data):e(t.appmsg_data),t.draftPrepend&&(this.list.content=t.draftPrepend+this.list.content),
this.lastData=this.list,this.list&&(this.content=this.list.content,this.render()),
this._bindEvent();
}
return t.prototype._bindEvent=function(){
var t=this,e=this;
if(e.draft){
var r=function(){
$("#js_import_tips,#js_draft_tips").hide(),e.ueditor.removeListener("contentchange",r),
r=null;
};
e.ueditor.addListener("contentchange",r),$("body").on("click","#js_draft_cancel",function(){
return e.draft.clear(),e.draft.isDropped=!0,c.addPvUv("cacelcache"),window.location.reload(),
!1;
}),$("body").on("click","#js_import_draft",function(){
var r=e.draft.getRaw();
r&&(t.content=r,t.render()),e.draft.showTips(),$("#js_import_tips").hide();
}),setInterval(function(){
var t=e.getData();
e.draft.save(t);
},12e4),window.onbeforeunload=function(){
var t=e.getData();
e.lastData&&m(t,e.lastData)||(t&&!e.draft.isDropped?e.draft.save(t):e.draft.clear());
};
}
e.opt.warnBeforeLeave&&$("body").on("click","a",function(t){
var r=$(this).attr("href"),n=$(this).attr("target");
if("_blank"!==n&&"string"==typeof r&&0!==r.indexOf("javascript:")&&0!==r.indexOf("#")){
var s=e.getData();
e.lastData&&m(s,e.lastData)||(t.preventDefault(),o.show({
type:"info",
msg:"是否保存此次修改？",
buttons:[{
text:"保存",
click:function(){
e.save($("#js_submit"),function(){
i.remove(),$("#js_save_success").show(),location.href=r;
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
}),e.ueditor.addListener("get_current_article",function(){
return!0;
}),e.ueditor.ueditor.addListener("beforepaste",function(t,e){
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
return u.isLocalDomain(t)?'<a href="'+t+'">'+t+"</a>":t;
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
return u.isLocalDomain(t)?'<a href="'+t+'">'+t+"</a>":t;
});
}catch(i){}
});
},t.prototype._checkRemoteImage=function(t){
function e(){
a.removeListener("remoteimg_all_complete",e);
var t=r.getPostData(o);
return t?void s(t):(d.sumbmiting=!1,void n.btn(!0));
}
var r=this,n=t.btn,i=t.postData,o=t.strict,s=t.callback,a=r.ueditor,c=a.fireEvent("checkRemoteList");
return c?void s(i):(a.addListener("remoteimg_all_complete",e),void a.funcPvUvReport("save_remoting_img"));
},t.prototype._FilterOutput=function(t){
var e=this;
if(!t)return!0;
for(var r=["content"],n=0,i=r.length;i>n;n++)if(t[r[n]]){
var o=u.validOutput(t[r[n]],!1);
if(o.valid===!1){
if(0==o.errType){
var s=e.$dom.find(".js_content_error");
e.showErrMsg(s,'正文不能含有非当前域名的链接，点击<a href="javascript:;" class="js_find_external_Link">查看</a>'),
e.scrollIntoView(s,200);
}
return!1;
}
t[r[n]]=o.content;
}
return!0;
},t.prototype.render=function(){
var t=this,e=this.submitData,r=this.$dom;
r.find(".js_field").each(function(){
var t=$(this),r=t.attr("name"),n=t.attr("type");
"checkbox"==n?t.checkbox("checked",!!e[r]):t.val(e[r]||"").trigger("blur").trigger("keydown");
}),t.ueditor&&t.ueditor.fireEvent("renderReady"),r.find("input.js_title").focus(),
this.setEditorContent();
},t.prototype.setEditorContent=function(t){
var e=this;
if(!t){
var r=this.submitData;
t=r.content;
}
this.ueditor.ready(function(){
e.ueditor.setContent("");
try{
e.ueditor.setContent(t);
}catch(r){}
});
},t.prototype.updateRemoteImg=function(t){
var e=$(this.ueditor.getDocument()).find("[data-remoteid="+t.uid+"]");
e&&this.changeRemoteImgUrl({
imgDom:e,
type:t.type,
remoteType:t.remoteType,
format:t.format,
img_url:t.img_url
});
},t.prototype.changeRemoteImgUrl=function(t){
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
},t.prototype.updateSubmitKey=function(t){
t&&t.length&&(this.opt.submitKey=t);
},t.prototype.flush=function(){
var t=this.submitData;
t=this.ueditor.getEditorData(t);
},t.prototype.getData=function(t,e){
this.flush();
var r=this.submitData;
for(var n in this.submitDataGetter)this.submitData[n]=this.submitDataGetter[n](this);
this.extraPostDataProvider&&this.extraPostDataProvider.provider&&(this.submitData=this.extraPostDataProvider.override?__assign({},this.submitData,this.extraPostDataProvider.provider()):__assign({},this.submitData,this.extraPostDataProvider.provider()));
var i=t?e?this.validateStrictly(this.submitData):this.validate(this.submitData):$.extend(!0,{},r);
return i;
},t.prototype.getPostData=function(t){
var e=this.getData(!0,t);
if(!e)return null;
var r=e;
for(var n in e)""===e[n]&&delete e[n];
return r;
},t.prototype.setExtraPostDataProvider=function(t,e){
this.extraPostDataProvider={
override:t,
provider:e
};
},t.prototype.validate=function(t){
return this.validateStrictly(t);
},t.prototype.showErrMsg=function(t,e){
this.ueditor.fireEvent("showErrMsg",t,e);
},t.prototype.scrollIntoView=function(t,e){
this.ueditor.fireEvent("scrollIntoView",t,e);
},t.prototype.hideAllErrMsg=function(){
this.ueditor.fireEvent("hideAllErrMsg");
},t.prototype.validateStrictly=function(t){
var e,r=this,i=r.opt.validLimit,o=r.$dom,s=$("<div>").html(t.content),a=!0,c=null,u=$(s).find(".js_catchremoteimageerror").length;
if(u)return e=o.find(".js_content_error"),this.showErrMsg(e,'正文有%s张图片粘贴失败，点击<a href="javascript:;" class="js_find_img_err">查看</a>'.sprintf(u)),
this.scrollIntoView(e,200),null;
if(i.title&&!n.rangelength(t.title,i.title)&&(this.showErrMsg(o.find(".js_title_error"),"标题不能为空且长度不能超过%s字".sprintf(i.title[1])),
c=c||".js_title_error",a=null),n.rangelength(t.content,[1,1e7])||(this.showErrMsg(o.find(".js_content_error"),"正文总大小不得超过10M字节"),
c=c||".js_content_error",a=null),i.content&&!n.rangelength(t.content.text(),i.content)&&0==$(t.content.trim()).find("img").length){
var l="正文不能为空且长度不能超过%s字".sprintf(i.content[1]);
this.showErrMsg(o.find(".js_content_error"),l),c=c||".js_content_error",a=null;
}
if(!i.content||t.content.text()!==h&&t.content.text()!==f||(this.showErrMsg(o.find(".js_content_error"),"请基于模板详细描述问题后发帖"),
c=c||".js_content_error",a=null),t.content=t.content.replace(/<a href="wechatide:\/\/(minicode\/.+?)".+?>(.+?)<\/a>/g,function(t,e,r){
return"<span data-ideurl="+e+">"+r+"</span>";
}),i.imgs){
var d=(t.content.match(/<img\s/g)||[]).length;
d<i.imgs[0]?(this.showErrMsg($(".js_content_error"),"至少添加%s张图片".sprintf(i.imgs[0])),
c=c||".js_content_error",a=null):d>i.imgs[1]&&(this.showErrMsg($(".js_content_error"),"最多添加%s张图片".sprintf(i.imgs[1])),
c=c||".js_content_error",a=null);
}
if(t.question_category)switch(t.question_category){
case 1:
t.question_attr&&t.question_attr.review_time||(this.showErrMsg($(".js_content_error"),"请填写提交审核的时间"),
c=c||".js_content_error",a=null);
break;

case 2:
t.question_attr&&t.question_attr.component_name&&t.question_attr.client_type||(this.showErrMsg($(".js_content_error"),"请填写组件/API及终端类型"),
c=c||".js_content_error",a=null);
break;

case 4:
t.question_attr&&t.question_attr.appid&&t.question_attr.optime||(this.showErrMsg($(".js_content_error"),"请填写 appid 及操作时间"),
c=c||".js_content_error",a=null);
break;

case 8:
t.question_attr&&t.question_attr.system_for_ide&&t.question_attr.ide_version||(this.showErrMsg($(".js_content_error"),"请填写操作系统及 IDE 版本号"),
c=c||".js_content_error",a=null);
break;

case 16:
t.question_attr&&t.question_attr.system_for_wechat&&t.question_attr.wechat_version||(this.showErrMsg($(".js_content_error"),"请填写客户端操作系统及微信版本号"),
c=c||".js_content_error",a=null);
break;

case 32:}
if(t.ext_link&&(/^https?:\/\//.test(t.ext_link)||(this.showErrMsg($(".js_content_error"),"链接必须以 http 或 https 开头"),
c=c||".js_content_error",a=null)),!a){
var m=o.find(c);
return m&&0!=m.length||(m=$(c)),m&&m.length>0&&this.scrollIntoView(m,150),null;
}
return r.ueditor.checkPlugins(s)?(this.hideAllErrMsg(),t):null;
},t.prototype.update=function(t){
t&&that.ueditor.setContent(t,!1);
},t.prototype.save=function(t,e,r){
var n=this;
if(d.sumbmiting!==!0){
var o=this,a=o.ueditor.getUeditor();
1*a.queryCommandState("source")===1&&a.execCommand("source");
try{
var c=o.getData(),u=o.getPostData(r);
if(!u)return;
d.sumbmiting=!0,t.btn(!1),o._checkRemoteImage({
btn:t,
postData:u,
strict:r,
callback:function(r){
if(r=o.filtercharCode(r),o._FilterOutput(r)===!1)return d.sumbmiting=!1,void t.btn(!0);
var i={};
if(o.opt.sendJSON&&(i.contentType="application/json"),o.opt.renameContent&&(r[o.opt.renameContent]=r.content,
delete r.content),o.opt.onBeforeSave){
var a=o.opt.onBeforeSave(r,function(){
t.btn(!0),d.sumbmiting=!1,o.draft&&o.draft.clear();
});
if(a===!1)return;
}
s.save(!0,n.submitURL,"",r,i,function(n){
t.btn(!0),o.draft&&o.draft.clear(),o.docid=n.docid,o.lastData=c,o.update(n.filtered_content_html),
e(n,r);
},function(){
d.sumbmiting=!1,t.btn(!0);
});
}
});
}catch(l){
d.sumbmiting=!1,t.btn(!0),i.err("保存失败，请稍后再试");
}
}
},t.prototype.filtercharCode=function(t){
var e=!1;
for(var r in t)t.hasOwnProperty(r)&&"function"==typeof t[r].replace&&(t[r]=t[r].replace(/[\ud800-\uDFFF]/g,function(t,r,n){
return/[\ud800-\udbff]/.test(t)&&/[\uDC00-\uDFFF]/.test(n.charAt(r+1)||"")?t:/[\ud800-\udbff]/.test(n.charAt(r-1)||"")&&/[\uDC00-\uDFFF]/.test(t)?t:(e=!0,
"");
}));
return t;
},t;
}();
return p;
});