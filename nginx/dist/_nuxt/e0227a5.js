(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1391:function(e,t,r){"use strict";r.r(t);var n=r(8),o=r(9),c=r(16),f=r(18),l=r(11),d=r(6),y=r(17),h=(r(44),r(5),r(3),r(25),r(4)),O=r(381),v=(r(13),r(12),r(7),r(10),r(14),r(1)),j=(r(27),r(79),r(22),r(150),r(85),r(49)),m=r(296),w=r(1151),P=r(1199),R=r(1197),S=r(1171),k=r(1200),x=r(1201),_=r(1202),C=r(1203);function L(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var I=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},V=function(e){Object(c.a)(f,e);var t,r=B(f);function f(){var e;return Object(n.a)(this,f),(e=r.apply(this,arguments)).sidebarIsOpen=!1,e.latestProducts=[],e}return Object(o.a)(f,[{key:"offcanvas",get:function(){return 3===this.columns?"mobile":"always"}},{key:"productsViewGrid",get:function(){return"grid-".concat(this.columns,"-").concat(this.columns>3?"full":"sidebar")}},{key:"pageTitle",get:function(){return'Search: "'+this.search.trim()+'"'}},{key:"breadcrumb",get:function(){return[{title:"Home",url:this.$url.home()},{title:"Search"}]}},{key:"asyncData",value:(t=Object(d.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("shop/init",{categorySlug:null,options:{},filters:{}});case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"mounted",value:function(){var e=this;"mobile"===this.offcanvas&&this.$shopApi.getLatestProducts({limit:5}).then((function(t){e.latestProducts=t}))}},{key:"onQueryChange",value:function(e){var t=m.stringifyUrl(D(D({},m.parseUrl(window.location.href)),{},{query:m.parse(e)}),{encode:!1});window.history.replaceState(window.history.state,"",t)}}]),f}(h.g);I([Object(h.d)({type:Number,default:function(){return 3}})],V.prototype,"columns",void 0),I([Object(h.d)({type:String,default:function(){return"grid"}})],V.prototype,"viewMode",void 0),I([Object(h.d)({type:String,default:function(){return"start"}})],V.prototype,"sidebarPosition",void 0),I([Object(j.b)("shop/search")],V.prototype,"search",void 0),I([Object(j.b)("shop/isLoading")],V.prototype,"isLoading",void 0),I([Object(h.h)("query")],V.prototype,"onQueryChange",null);var U=V=I([Object(h.a)({components:{PageHeader:w.a,ProductsView:k.a,CategorySidebar:x.a,CategorySidebarItem:_.a,BlockLoader:P.a,CategoryLayout:C.a,WidgetFilters:R.a,WidgetProducts:S.a},head:function(){return{title:this.pageTitle}}})],V),$=r(21),H=Object($.a)(U,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e.isLoading?t("BlockLoader"):e._e(),e._v(" "),e.isLoading?e._e():[t("PageHeader",{attrs:{title:e.pageTitle,breadcrumb:e.breadcrumb}}),e._v(" "),t("CategoryLayout",{attrs:{columns:e.columns,"sidebar-position":e.sidebarPosition},scopedSlots:e._u([{key:"sidebar",fn:function(){return[t("CategorySidebar",{attrs:{"is-open":e.sidebarIsOpen,offcanvas:e.offcanvas},on:{closeSidebar:function(t){e.sidebarIsOpen=!1}}},["always"!==e.offcanvas?t("CategorySidebarItem",{staticClass:"d-none d-lg-block"},[t("WidgetProducts",{attrs:{title:"Latest Products",products:e.latestProducts}})],1):e._e()],1)]},proxy:!0},{key:"productsView",fn:function(){return[t("ProductsView",{attrs:{layout:e.viewMode,grid:e.productsViewGrid,offcanvas:e.offcanvas},on:{openSidebar:function(t){e.sidebarIsOpen=!0}}})]},proxy:!0}],null,!1,652434066)})]],2)}),[],!1,null,null,null).exports,M=r(242);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var W=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c};function E(e){return G.apply(this,arguments)}function G(){return(G=Object(d.a)(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=Object(O.e)(r),o=Object(O.d)(r),e.next=5,t.store.dispatch("shop/init",{search:r.q,categorySlug:null,options:n,filters:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){Object(c.a)(r,e);var t=T(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).init=!0,e}return Object(o.a)(r,[{key:"onUrlChange",value:function(e){this.init?this.init=!1:E(this.$nuxt.context).then()}}]),r}(h.g);W([Object(h.h)("$route",{immediate:!0,deep:!0})],J.prototype,"onUrlChange",null);var Q=J=W([Object(h.a)({components:{ShopPageSearch:H},asyncData:function(e){return Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:e.store.dispatch("shop/setMerchant",{merchant:M.a.merchant});case 3:case"end":return t.stop()}}),t)})))()}})],J),A=Object($.a)(Q,(function(){var e=this._self._c;this._self._setupProxy;return e("ShopPageSearch")}),[],!1,null,null,null);t.default=A.exports}}]);