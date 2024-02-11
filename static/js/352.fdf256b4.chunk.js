"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[352,477],{1477:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,i,a,s,o,c,d,p=r(5861),x=r(9439),u=r(7757),l=r.n(u),f=r(2791),h=r(168),v=r(5867),g=v.ZP.div(t||(t=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),j=v.ZP.div(i||(i=(0,h.Z)(["\n  display: block;\n\n  button {\n    margin-bottom: 20px;\n  }\n"]))),b=v.ZP.div(a||(a=(0,h.Z)(["\n  width: 400px;\n  border-radius: 10px;\n  background-color: white;\n  padding: 10px;\n\n  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.4),\n    0px 4px 4px rgba(46, 47, 66, 0.4), 0px 6px 6px rgba(46, 47, 66, 0.4);\n\n  img {\n    min-width: 100%;\n    border-radius: 10px;\n  }\n"]))),m=v.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 10px;\n"]))),Z=v.ZP.ul(o||(o=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  list-style: none;\n  font-size: 20px;\n  padding: 10px;\n"]))),w=v.ZP.p(c||(c=(0,h.Z)(["\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border: 1px solid #cecece;\n  background: #f6f6f6;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  margin-top: 40px;\n  width: max-content;\n\n  &:hover {\n    cursor: pointer;\n    background-color: rgb(204, 203, 203);\n  }\n\n  &:active {\n    background-color: rgb(179, 179, 179);\n  }\n"]))),k=r(3836),y=r(7689),P=r(1087),_=r(340),S=function(){var n=(0,p.Z)(l().mark((function n(e){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_.Z.get("".concat(k.x.BASE_URL).concat("movie/").concat(e),{params:{api_key:k.x.API_KEY}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),E=S,U=r(1149),R=r(1434),A=r(8575),L=r(9245),z=v.ZP.div(d||(d=(0,h.Z)(["\n  h3 {\n    font-size: large;\n    font-weight: 600;\n    text-align: center;\n  }\n"]))),C=r(184),B=function(){return(0,C.jsxs)(z,{children:[(0,C.jsx)("h3",{children:"Additional information"}),(0,C.jsxs)(Z,{children:[(0,C.jsx)("li",{children:(0,C.jsx)(P.rU,{to:"cast",children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(P.rU,{to:"reviews",children:"Reviews"})})]})]})},I=r(9847),O=function(){var n,e,r=(0,f.useState)(!1),t=(0,x.Z)(r,2),i=t[0],a=t[1],s=(0,f.useState)(!1),o=(0,x.Z)(s,2),c=o[0],d=o[1],u=(0,y.UO)(),h=u.moviesId,v=(0,f.useState)(u),Z=(0,x.Z)(v,2),_=Z[0],S=Z[1],z=_.poster_path,O=_.title,T=_.vote_average,K=_.overview,Y=_.genres,$=void 0===Y?[]:Y,G=(0,y.TH)(),H=(0,f.useRef)(null!==(n=null===(e=G.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,f.useEffect)((function(){var n=function(){var n=(0,p.Z)(l().mark((function n(){var e,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),d(!1),n.next=5,E(h);case 5:e=n.sent,r=e.data,S(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),d(!0);case 13:return n.prev=13,a(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n(h)}),[h]);var N=k.x.POSTER_URL+z;return(0,C.jsx)("main",{children:(0,C.jsxs)(R.$,{children:[i&&(0,C.jsx)(L.a,{}),c&&(0,C.jsx)(I.Z,{}),z&&(0,C.jsxs)(U.W,{children:[(0,C.jsxs)(j,{children:[(0,C.jsx)(P.rU,{to:H.current,children:(0,C.jsx)(w,{children:"Go Back"})}),(0,C.jsxs)(m,{children:[(0,C.jsx)(b,{children:(0,C.jsx)("img",{src:z?N:A,alt:"films poster",width:300})}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h1",{children:O}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{children:"User Score:"}),(0,C.jsxs)("p",{children:[" ",Math.ceil(10*T),"%"]})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{children:"Overview:"}),(0,C.jsxs)("p",{children:[" ",K]})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{children:"Genres:"}),(0,C.jsx)(g,{children:$.map((function(n){var e=n.name,r=n.id;return(0,C.jsx)("span",{children:e},r)}))})]})]})]})]}),(0,C.jsx)(B,{}),(0,C.jsx)(f.Suspense,{children:(0,C.jsx)(y.j3,{})})]})]})})}},1352:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,i,a=r(2791),s=r(1149),o=r(1434),c=r(1477),d=r(5861),p=r(9439),x=r(7757),u=r.n(x),l=r(5705),f=r(168),h=r(5867),v=(0,h.ZP)(l.gN)(t||(t=(0,f.Z)(["\n  width: 300px;\n  font-size: 13px;\n  padding: 6px 0 4px 10px;\n  border: 1px solid #cecece;\n  background: #f6f6f6;\n  border-radius: 8px;\n"]))),g=h.ZP.button(i||(i=(0,f.Z)(["\n  font-size: 13px;\n  font-weight: 600;\n  padding: 6px 10px 4px 10px;\n  border: 1px solid #cecece;\n  background: #f6f6f6;\n  border-radius: 8px;\n  margin-top: 40px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: rgb(204, 203, 203);\n  }\n\n  &:active {\n    background-color: rgb(179, 179, 179);\n  }\n"]))),j=r(340),b=r(3836),m=function(){var n=(0,d.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.Z.get("".concat(b.x.BASE_URL).concat("search/movie"),{params:{api_key:b.x.API_KEY,query:e}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=m,w=r(1087),k=r(6685),y=r(9245),P=r(9847),_=r(184),S=function(){var n=(0,a.useState)(!1),e=(0,p.Z)(n,2),r=e[0],t=e[1],i=(0,a.useState)(!1),s=(0,p.Z)(i,2),o=s[0],c=s[1],x=(0,a.useState)(),f=(0,p.Z)(x,2),h=f[0],j=f[1],b=(0,w.lr)(),m=(0,p.Z)(b,2),S=m[0],E=m[1];return(0,a.useEffect)((function(){var n=S.get("film"),e=function(){var e=(0,d.Z)(u().mark((function e(){var r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0),c(!1),e.next=5,Z(n);case 5:r=e.sent,i=r.data.results,j(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c(!0);case 13:return e.prev=13,t(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e(n)}),[S]),(0,_.jsxs)("div",{children:[r&&(0,_.jsx)(y.a,{}),o&&(0,_.jsx)(P.Z,{}),(0,_.jsx)(l.J9,{initialValues:{film:""},onSubmit:function(n,e){var r=e.resetForm;E(n),r()},children:(0,_.jsxs)(l.l0,{autoComplete:"off",children:[(0,_.jsx)(g,{type:"submit",children:"Search"}),(0,_.jsx)(v,{type:"text",name:"film",placeholder:"Enter film..."})]})}),h&&(0,_.jsx)(k.Z,{films:h})]})},E=function(){var n;return(0,_.jsx)("main",{children:(0,_.jsx)(o.$,{children:(0,_.jsx)(s.W,{children:null!==(n=(0,_.jsx)(S,{}))&&void 0!==n?n:(0,_.jsx)(c.default,{})})})})}},3836:function(n,e,r){r.d(e,{x:function(){return t}});var t={BASE_URL:"https://api.themoviedb.org/3/",API_KEY:"8151a21e5e94d6656b5dd6100a756468",POSTER_URL:"https://image.tmdb.org/t/p/w500/"}},9847:function(n,e,r){r.d(e,{Z:function(){return o}});r(2791);var t,i=r(168),a=r(5867).ZP.div(t||(t=(0,i.Z)(["\n  text-align: center;\n  margin-top: 100px;\n"]))),s=r(184),o=function(){return(0,s.jsx)(a,{children:"Error, Please reload this page!"})}},6685:function(n,e,r){r.d(e,{Z:function(){return l}});var t,i,a=r(168),s=r(5867),o=s.ZP.ul(t||(t=(0,a.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 0;\n\n  li {\n    border-radius: 10px;\n    background-color: white;\n    padding: 10px;\n    width: 200px;\n    margin-bottom: 10px;\n    font-weight: 600;\n    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.4),\n      0px 4px 4px rgba(46, 47, 66, 0.4), 0px 6px 6px rgba(46, 47, 66, 0.4);\n    justify-content: center;\n  }\n\n  img {\n    border-radius: 10px;\n    margin-bottom: 5px;\n    display: block;\n  }\n"]))),c=s.ZP.div(i||(i=(0,a.Z)(["\n  display: flex;\n  padding: 10px 10px;\n  justify-content: center;\n  align-items: center;\n"]))),d=(r(2791),r(7689)),p=r(1087),x=r(8575),u=r(184),l=function(n){var e=n.films,r={textDecoration:"none",color:"black"},t=(0,d.TH)();return(0,u.jsx)(o,{children:e.map((function(n){var e=n.id,i=n.title,a=n.poster_path;return(0,u.jsx)("li",{children:(0,u.jsxs)(p.rU,{style:r,to:"/movies/".concat(e),state:{from:t.pathname},children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:a?["https://image.tmdb.org/t/p/w500"+a]:x,alt:"poster",width:200})}),(0,u.jsxs)(c,{children:[" ",i]})]})},e)}))})}},9245:function(n,e,r){r.d(e,{a:function(){return x}});var t,i,a=r(8881),s=r(168),o=r(5867),c=o.ZP.div(t||(t=(0,s.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n"]))),d=o.ZP.div(i||(i=(0,s.Z)(["\n  margin-bottom: 10px;\n  font-size: large;\n  font-weight: 500;\n"]))),p=r(184),x=function(){return(0,p.jsxs)(c,{children:[(0,p.jsx)(d,{children:"Loading..."}),(0,p.jsx)(a.Nx,{visible:!0,height:"50",width:"400",ariaLabel:"infinity-spin-loading",wrapperStyle:{},wrapperClass:"",color:"#353538"})]})}},1434:function(n,e,r){r.d(e,{$:function(){return a}});var t,i=r(168),a=r(5867).ZP.section(t||(t=(0,i.Z)(["\n  padding: 20px 0;\n"])))},8575:function(n,e,r){n.exports=r.p+"static/media/noAvailable.d04c7a9d1de3713c9b20.jpg"}}]);
//# sourceMappingURL=352.fdf256b4.chunk.js.map