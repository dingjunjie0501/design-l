webpackJsonp([0],{"0hOx":function(t,e){},HAgg:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("bYXJ"),n=r.n(i),a=r("xgHo"),s={name:"BreadCrumb",props:{id:{type:String}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"breadcrumb"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[this._v("Home")]),this._v(" "),e("el-breadcrumb-item",[this._v("love"+this._s(this.id))])],1)],1)},staticRenderFns:[]};var u=r("VU/8")(s,c,!1,function(t){r("0hOx")},"data-v-7ddc374b",null).exports,d={name:"Column",data:function(){return{id:this.$route.params.id}},computed:{picList:function(){return n.a.columnList[this.id]}},components:{Pic:a.a,BreadCrumb:u}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadCrumb",{attrs:{id:t.id}}),t._v(" "),r("ul",t._l(t.picList,function(e){return r("li",{key:e.id},[e.url?r("pic",{attrs:{url:e.url}}):t._e()],1)}))],1)},staticRenderFns:[]};var l=r("VU/8")(d,o,!1,function(t){r("n92x")},"data-v-59ceb0cb",null);e.default=l.exports},n92x:function(t,e){}});
//# sourceMappingURL=0.a62aeb10b3dc9f9434c1.js.map