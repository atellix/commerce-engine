(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1392:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(9),c=r(8),l=r(16),f=r(18),d=r(11),y=r(17),h=(r(44),r(5),r(3),r(25),r(4)),O=r(381),v=(r(13),r(12),r(7),r(14),r(1)),j=(r(27),r(31),r(10),r(85),r(49)),m=r(296),w=r(1151),P=r(1199),R=r(1197),S=r(1171),k=r(1200),_=r(1201),x=r(1202),C=r(1203);function L(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var I=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},V=function(t){Object(l.a)(f,t);var e,r=B(f);function f(){var t;return Object(c.a)(this,f),(t=r.apply(this,arguments)).sidebarIsOpen=!1,t.latestProducts=[],t}return Object(o.a)(f,[{key:"offcanvas",get:function(){return 3===this.columns?"mobile":"always"}},{key:"productsViewGrid",get:function(){return"grid-".concat(this.columns,"-").concat(this.columns>3?"full":"sidebar")}},{key:"pageTitle",get:function(){return this.category?this.category.name:"Shop"}},{key:"breadcrumb",get:function(){var t=this,e=[{title:"Home",url:this.$url.home()},{title:"Shop",url:this.$url.catalog()}];return this.category&&(Object(O.b)(this.category).forEach((function(r){e.push({title:r.name,url:t.$url.category(r)})})),e.push({title:this.category.name,url:this.$url.category(this.category)})),e}},{key:"asyncData",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("shop/init",{categorySlug:null,options:{},filters:{}});case 3:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"mounted",value:function(){var t=this;"mobile"===this.offcanvas&&this.$shopApi.getLatestProducts({limit:5}).then((function(e){t.latestProducts=e}))}},{key:"onQueryChange",value:function(t){var e=m.stringifyUrl(D(D({},m.parseUrl(window.location.href)),{},{query:m.parse(t)}),{encode:!1});window.history.replaceState(window.history.state,"",e)}}]),f}(h.g);I([Object(h.d)({type:Number,default:function(){return 3}})],V.prototype,"columns",void 0),I([Object(h.d)({type:String,default:function(){return"grid"}})],V.prototype,"viewMode",void 0),I([Object(h.d)({type:String,default:function(){return"start"}})],V.prototype,"sidebarPosition",void 0),I([Object(j.b)("shop/query")],V.prototype,"query",void 0),I([Object(j.b)("shop/category")],V.prototype,"category",void 0),I([Object(j.b)("shop/isLoading")],V.prototype,"isLoading",void 0),I([Object(h.h)("query")],V.prototype,"onQueryChange",null);var $=V=I([Object(h.a)({components:{PageHeader:w.a,ProductsView:k.a,CategorySidebar:_.a,CategorySidebarItem:x.a,BlockLoader:P.a,CategoryLayout:C.a,WidgetFilters:R.a,WidgetProducts:S.a},head:function(){return{title:this.pageTitle}}})],V),E=r(21),H=Object(E.a)($,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t.isLoading?e("BlockLoader"):t._e(),t._v(" "),t.isLoading?t._e():[e("PageHeader",{attrs:{title:t.pageTitle,breadcrumb:t.breadcrumb}}),t._v(" "),e("CategoryLayout",{attrs:{columns:t.columns,"sidebar-position":t.sidebarPosition},scopedSlots:t._u([{key:"sidebar",fn:function(){return[e("CategorySidebar",{attrs:{"is-open":t.sidebarIsOpen,offcanvas:t.offcanvas},on:{closeSidebar:function(e){t.sidebarIsOpen=!1}}},["always"!==t.offcanvas?e("CategorySidebarItem",{staticClass:"d-none d-lg-block"},[e("WidgetProducts",{attrs:{title:"Latest Products",products:t.latestProducts}})],1):t._e()],1)]},proxy:!0},{key:"productsView",fn:function(){return[e("ProductsView",{attrs:{layout:t.viewMode,grid:t.productsViewGrid,offcanvas:t.offcanvas},on:{openSidebar:function(e){t.sidebarIsOpen=!0}}})]},proxy:!0}],null,!1,652434066)})]],2)}),[],!1,null,null,null).exports,M=r(242);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var W=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},G=function(t){Object(l.a)(r,t);var e=T(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r)}(h.g),J=G=W([Object(h.a)({components:{ShopPageCategory:H},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.params,o=t.query,c=Object(O.e)(o),l=Object(O.d)(o),e.next=5,r.dispatch("shop/init",{categorySlug:n.slug||null,options:c,filters:l});case 5:r.dispatch("shop/setMerchant",{merchant:M.a.merchant});case 6:case"end":return e.stop()}}),e)})))()}})],G),Q=Object(E.a)(J,(function(){var t=this._self._c;this._self._setupProxy;return t("ShopPageCategory")}),[],!1,null,null,null);e.default=Q.exports}}]);