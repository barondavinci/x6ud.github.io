(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cac6396"],{"49d7":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"column-1",staticStyle:{width:"360px"}},[a("a-select",{staticStyle:{width:"100%","margin-bottom":"8px"},model:{value:t.model,callback:function(i){t.model=i},expression:"model"}},t._l(t.models,function(i){return a("a-select-option",{key:i.path,attrs:{value:i.path}},[t._v("\n                "+t._s(i.name)+"\n            ")])}),1),a("model-viewer",{attrs:{width:360,height:360,model:t.model,"rotate-x":t.rotateX,"rotate-y":t.rotateY,"rotate-z":t.rotateZ,zoom:t.zoom},on:{"update:rotateX":function(i){t.rotateX=i},"update:rotate-x":function(i){t.rotateX=i},"update:rotateY":function(i){t.rotateY=i},"update:rotate-y":function(i){t.rotateY=i},"update:rotateZ":function(i){t.rotateZ=i},"update:rotate-z":function(i){t.rotateZ=i},"update:zoom":function(i){t.zoom=i}}}),a("div",{staticClass:"slider-wrapper"},[a("span",{staticClass:"prefix"},[t._v("X: "+t._s(t.rotateX)+"; Y: "+t._s(t.rotateY)+"; Z: ")]),a("a-slider",{staticClass:"slider",attrs:{included:!1,min:-180,max:180},model:{value:t.rotateZ,callback:function(i){t.rotateZ=i},expression:"rotateZ"}}),a("div",{staticClass:"postfix"},[a("span",{staticStyle:{width:"2.5em","text-align":"center",display:"inline-block"}},[t._v(t._s(t.rotateZ))]),a("a-button",{attrs:{size:"small"},on:{click:function(i){t.rotateX=t.rotateY=t.rotateZ=0}}},[t._v("Reset")])],1)],1)],1),a("div",{staticClass:"column-2"},[a("div",{staticClass:"toolbar"},[a("a-input",{staticStyle:{"margin-bottom":"8px","margin-right":"8px"},attrs:{placeholder:"Input image url"},model:{value:t.imageUrl,callback:function(i){t.imageUrl=i},expression:"imageUrl"}}),a("a-button",{staticStyle:{"margin-right":"8px"},on:{click:t.getOne}},[t._v("Get One ("+t._s(t.unregistered.length)+")")]),a("a-button",{on:{click:t.save}},[t._v("Save")])],1),a("a-select",{staticStyle:{width:"100%","margin-bottom":"8px"},attrs:{mode:"tags",placeholder:"Input tags"},model:{value:t.tags,callback:function(i){t.tags=i},expression:"tags"}}),a("div",{staticClass:"image-clip",staticStyle:{height:"428px"}},[a("div",{staticClass:"side"},[a("div",{staticClass:"small"},[t.imageUrl?a("img",{style:t.smallImageStyle,attrs:{src:t.imageUrl,alt:""}}):t._e()]),a("div",{staticClass:"slider-wrapper"},[a("span",{staticClass:"prefix"},[t._v("Size")]),a("a-slider",{staticClass:"slider",attrs:{included:!1,min:0,max:t.imageClipMaxSize},model:{value:t.imageClip.size,callback:function(i){t.$set(t.imageClip,"size",i)},expression:"imageClip.size"}})],1)]),a("div",{ref:"imageClipLarge",staticClass:"main"},[a("div",{staticClass:"large",on:{mousemove:t.imageClipDragMove}},[a("a-spin",{attrs:{spinning:t.imageLoading}},[t.imageUrl?a("div",{staticClass:"image",style:t.imageStyle}):t._e()]),t.imageUrl?a("div",{staticClass:"image-clip",style:t.imageClipStyle,on:{mousedown:t.imageClipDragStart}}):t._e()],1),a("div",{staticClass:"slider-wrapper",staticStyle:{width:"100%"}},[a("span",{staticClass:"prefix"},[t._v("Zoom")]),a("a-slider",{staticClass:"slider",attrs:{included:!1,min:10,max:100},model:{value:t.imageZoom,callback:function(i){t.imageZoom=i},expression:"imageZoom"}})],1)])])],1),a("div",{staticClass:"column-3"},[a("div",{staticStyle:{width:"100%","margin-bottom":"8px","text-align":"right"}},[a("span",{staticStyle:{"margin-right":"8px"}},[t._v(t._s(t.data.length))]),a("a-button",{staticStyle:{"margin-right":"8px"},attrs:{size:"small"},on:{click:function(i){return t.importData()}}},[t._v("Import")]),a("a-button",{attrs:{size:"small"},on:{click:function(i){return t.exportData()}}},[t._v("Export")])],1),a("div",{staticClass:"list"},t._l(t.latestRecords,function(i){return a("image-thumb",{key:i.url,staticClass:"item",attrs:{image:i},nativeOn:{click:function(a){return t.load(i)}}},[a("span",{staticClass:"btn-remove",on:{click:function(a){return t.remove(i)}}},[a("a-icon",{attrs:{type:"close"}})],1)])}),1)])])},s=[],o=a("75fc"),n=(a("ac6a"),a("f499")),r=a.n(n),l=(a("20d6"),a("bd86")),m=(a("cadf"),a("551c"),a("f751"),a("097d"),a("441d")),g=a("6b20"),c=a("3242"),d=[],h=a("9982"),p=160,u="ars-data";function f(t){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var i=document.createElement("textarea");i.textContent=t,i.style.position="fixed",document.body.appendChild(i),i.select();try{return document.execCommand("copy")}catch(a){return!1}finally{document.body.removeChild(i)}}}function C(t){return Object(h["a"])(t)||t}var v={components:{ModelViewer:m["a"],ImageThumb:g["a"]},data:function(){return{models:c["a"],model:c["a"][0].path,rotateX:0,rotateY:0,rotateZ:0,zoom:10,imageUrl:"",imageZoom:100,imageWidth:0,imageHeight:0,imageLoading:!1,imageClip:{left:0,top:0,size:0,dragging:!1,dragX:0,dragY:0},tags:[],data:[],unregistered:[]}},computed:{imageStyle:function(){return{background:"url(".concat(this.imageUrl,") 0 0 / 100% 100% no-repeat"),width:this.imageWidth*this.imageZoom/100+"px",height:this.imageHeight*this.imageZoom/100+"px"}},imageClipStyle:function(){return{left:this.imageClip.left*this.imageZoom/100+"px",top:this.imageClip.top*this.imageZoom/100+"px",width:this.imageClip.size*this.imageZoom/100+"px",height:this.imageClip.size*this.imageZoom/100+"px"}},imageClipMaxSize:function(){return Math.min(this.imageWidth,this.imageHeight)},smallImageStyle:function(){var t=1/this.imageClip.size*p;return{position:"absolute",width:this.imageWidth*t+"px",height:this.imageHeight*t+"px",left:-this.imageClip.left*t+"px",top:-this.imageClip.top*t+"px"}},latestRecords:function(){return this.data.length>10?this.data.slice(this.data.length-10):this.data}},watch:Object(l["a"])({imageUrl:{immediate:!0,handler:function(t){var i=this;if(t){this.imageLoading=!0;var a=new Image;a.onload=function(){i.imageLoading=!1,i.imageWidth=a.width,i.imageHeight=a.height,i.imageClip.size=Math.min(a.width,a.height,i.imageClip.size),i.imageZoom=Math.min(a.width,a.height,i.$refs.imageClipLarge.clientWidth-18,i.$refs.imageClipLarge.clientHeight-18-32)/a.width*100|0},a.src=t}}}},"imageClip.size",function(t){this.imageClip.left=Math.min(this.imageClip.left,this.imageWidth-t),this.imageClip.top=Math.min(this.imageClip.top,this.imageHeight-t)}),methods:{imageClipDragStart:function(t){0===t.button&&(this.imageClip.dragging=!0,this.imageClip.dragX=t.clientX,this.imageClip.dragY=t.clientY)},imageClipDragStop:function(){this.imageClip.dragging=!1},imageClipDragMove:function(t){var i=this.imageClip.dragX,a=this.imageClip.dragY,e=t.clientX,s=t.clientY;if(this.imageClip.dragX=e,this.imageClip.dragY=s,this.imageClip.dragging){var o=e-i,n=s-a;this.imageClip.left+=o/(this.imageZoom/100),this.imageClip.left=Math.max(0,Math.min(this.imageWidth-this.imageClip.size,this.imageClip.left)),this.imageClip.top+=n/(this.imageZoom/100),this.imageClip.top=Math.max(0,Math.min(this.imageHeight-this.imageClip.size,this.imageClip.top))}},save:function(){if(this.imageUrl){var t={rx:this.rotateX,ry:this.rotateY,rz:this.rotateZ,url:this.imageUrl,cx:0|this.imageClip.left,cy:0|this.imageClip.top,cs:this.imageClip.size,w:this.imageWidth,h:this.imageHeight,tags:this.tags},i=this.data.findIndex(function(i){return i.url===t.url});i>=0?this.data[i]=t:this.data.push(t),window.localStorage.setItem(u,r()(this.data))}},load:function(t){this.rotateX=t.rx,this.rotateY=t.ry,this.rotateZ=t.rz,this.imageUrl=t.url,this.imageWidth=t.w,this.imageHeight=t.h,this.imageClip.left=t.cx,this.imageClip.top=t.cy,this.imageClip.size=t.cs,this.tags=t.tags},remove:function(t){window.confirm("Are you sure you want to delete ".concat(t.url,"?"))&&(this.data.splice(this.data.findIndex(function(i){return i===t}),1),window.localStorage.setItem(u,r()(this.data)))},importData:function(){var t=window.prompt("Input Data JSON:");t&&(this.data=JSON.parse(t),window.localStorage.setItem(u,t))},exportData:function(){f(r()(this.data))},getOne:function(){this.imageUrl=this.unregistered.shift().url}},mounted:function(){var t=this;window.addEventListener("mouseup",this.imageClipDragStop),a.e("chunk-2d20ee20").then(a.bind(null,"b0ea")).then(function(i){var a=i.default,e=localStorage.getItem(u);e=e&&JSON.parse(e)||[];var s={};[].concat(Object(o["a"])(e),Object(o["a"])(a)).forEach(function(t){return s[C(t.url)]=!0});var n=d.filter(function(t){return!s[C(t.url)]});t.data=e,t.unregistered=n})},beforeDestroy:function(){window.removeEventListener("mouseup",this.imageClipDragStop)}},x=v,w=(a("a01d"),a("2877")),y=Object(w["a"])(x,e,s,!1,null,"0fa776bb",null);i["default"]=y.exports},a01d:function(t,i,a){"use strict";var e=a("cd73"),s=a.n(e);s.a},a21f:function(t,i,a){var e=a("584a"),s=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},cd73:function(t,i,a){},f499:function(t,i,a){t.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-3cac6396.79a2e402.js.map