(this["webpackJsonpepic-react"]=this["webpackJsonpepic-react"]||[]).push([[12],{267:function(e,t,r){"use strict";r.r(t);var n,c,i,a,s,l,d=r(0),j=r(79),o=(r(126),r(129)),u=r(134),b=(r(66),r(18)),h=r(34),p=(r(262),r(259)),g=r(77),x=r(13),O=r(269),f=r(35),m=r(136),v=r.n(m),w=r(3),S=p.a.Dragger,F=f.a.div(n||(n=Object(h.a)(["\n  padding: 20px;\n  margin-top: 30px;\n  border: 1px dashed #ccc;\n"]))),U=f.a.h1(c||(c=Object(h.a)(["\n  margin: 20px 0;\n  text-align: center;\n  font-size: 16px;\n"]))),k=Object(f.a)(v.a)(i||(i=Object(h.a)(["\n  max-width: 30%;\n"]))),$=f.a.input(a||(a=Object(h.a)(["\n  outline-style: none;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 2px 4px;\n  &:focus {\n    border-color: #66afe9;\n    outline: 0;\n  }\n"]))),y=f.a.p(s||(s=Object(h.a)(["\n  svg {\n    fill: #91d5ff;\n  }\n"]))),N=function(){var e=Object(g.a)(),t=e.ImageStore,r=e.UserStore,n={showUploadList:!1,beforeUpload:function(e){return t.setFile(e),t.setFilename(e.name),null===r.currentUser?(b.b.warning("\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20\uff0c\u8c22\u8c22\uff01",3),!1):/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)?e.size>5242880?(b.b.error("\u56fe\u7247\u6700\u5927\u4e3a 5M"),!1):(t.upload().then((function(e){console.log("\u4e0a\u4f20\u6210\u529f")})).catch((function(e){console.log("\u4e0a\u4f20\u5931\u8d25"),console.log(e)})),!1):(b.b.error("\u53ea\u80fd\u4e0a\u4f20 png/svg/jpg/gif \u683c\u5f0f\u7684\u56fe\u7247"),!1)}},c=Object(d.useRef)(),i=Object(d.useRef)(),a=Object(x.d)((function(){return{width:"",setWidth:function(e){a.width=e},get widthStr(){return a.width?"/w/".concat(a.width):""},height:"",setHeight:function(e){a.height=e},get heightStr(){return a.height?"/h/".concat(a.height):""},get fullStr(){return t.serverFile.attributes.url.attributes.url+"?imageView2/0"+a.widthStr+a.heightStr}}})),s=function(){a.setWidth(c.current.value.trim())},l=function(){a.setHeight(i.current.value.trim())};return Object(w.jsx)(x.a,{children:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(o.a,{tip:"\u4e0a\u4f20\u4e2d",spinning:t.isUploading,children:Object(w.jsxs)(S,Object(u.a)(Object(u.a)({},n),{},{multiple:!0,accept:"image/*",capture:"camera",children:[Object(w.jsx)(y,{className:"ant-upload-drag-icon",children:Object(w.jsx)(O.a,{})}),Object(w.jsx)("p",{className:"ant-upload-text",children:"\u70b9\u51fb\u6216\u62d6\u62fd\u4e0a\u4f20\u56fe\u7247"}),Object(w.jsx)("p",{className:"ant-upload-hint px-2",children:"\u56fe\u7247\u4ec5\u652f\u6301 .png/.gif/.jpg/.jpeg/.svg \u56fe\u7247\u7684\u683c\u5f0f\uff0c\u4e14\u5927\u5c0f\u4e0d\u53ef\u5927\u4e8e 5M"})]}))}),t.serverFile?Object(w.jsxs)(F,{children:[Object(w.jsx)(U,{children:"\u4e0a\u4f20\u7ed3\u679c"}),Object(w.jsxs)("dl",{children:[Object(w.jsx)("dt",{children:"\u7ebf\u4e0a\u5730\u5740"}),Object(w.jsx)("dd",{children:Object(w.jsx)("a",{target:"_blank",href:t.serverFile.attributes.url.attributes.url,rel:"noreferrer noopener",children:t.serverFile.attributes.url.attributes.url})}),Object(w.jsx)("dt",{children:"\u6587\u4ef6\u540d"}),Object(w.jsx)("dd",{children:t.filename}),Object(w.jsx)("dt",{children:"\u6587\u4ef6\u9884\u89c8"}),Object(w.jsx)("dd",{children:Object(w.jsx)(k,{src:t.serverFile.attributes.url.attributes.url,alt:""})}),Object(w.jsx)("dt",{children:"\u66f4\u591a\u5c3a\u5bf8"}),Object(w.jsxs)("dd",{children:[Object(w.jsx)($,{type:"text",onChange:s,ref:c,placeholder:"\u6700\u5927\u5bbd\u5ea6\uff08\u53ef\u9009\uff09"}),Object(w.jsx)($,{className:"input2",type:"text",onChange:l,ref:i,placeholder:"\u6700\u5927\u9ad8\u5ea6\uff08\u53ef\u9009\uff09"})]}),Object(w.jsx)("dd",{children:Object(w.jsx)("a",{target:"_blank",href:a.fullStr,rel:"noreferrer noopener",children:a.fullStr})})]})]}):null]})}})},z=f.a.div(l||(l=Object(h.a)(["\n  padding: 10px;\n  margin: 30px 0;\n  color: #fff;\n  border-radius: 4px;\n  background-color: #91d5ff;\n"]))),C=Object(j.a)((function(e){var t=e.children,r=Object(g.a)().UserStore;return Object(w.jsx)(w.Fragment,{children:r.currentUser?null:Object(w.jsx)(z,{children:t})})})),H=Object(j.a)((function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{children:"\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20\uff01\uff01\uff01"}),Object(w.jsx)(N,{})]})}));t.default=H}}]);
//# sourceMappingURL=12.37c738c3.chunk.js.map