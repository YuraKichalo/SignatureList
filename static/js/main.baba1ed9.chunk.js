(this.webpackJsonpsignatures=this.webpackJsonpsignatures||[]).push([[0],{18:function(e,t,r){e.exports=r(32)},28:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(10),s=r.n(c),i=r(5),o=r(8),l=r(17),u=r(11);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={isActive:null,selectedItems:[]};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={imagesArr:[{url:"https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg",alt:"img"},{url:"https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg",alt:"img"},{url:"https://cdn74.picsart.com/182950564000202.jpg?c256x256",alt:"img"},{url:"https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg",alt:"img"},{url:"https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg",alt:"img"},{url:"https://cdn74.picsart.com/182950564000202.jpg?c256x256",alt:"img"},{url:"https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg",alt:"img"},{url:"https://cdn74.picsart.com/182950564000202.jpg?c256x256",alt:"img"},{url:"https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg",alt:"img"}]},v=Object(o.c)({checkbox:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_ACTIVE":return p({},e,{isActive:!0,selectedItems:[].concat(Object(l.a)(e.selectedItems),[t.payload])});case"IS_NOT_ACTIVE":return p({},e,{isActive:e.selectedItems.length>1,selectedItems:e.selectedItems.filter((function(e){return e!==t.payload}))});default:return h}},images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":return b({},e,{imagesArr:e.imagesArr.filter((function(e,r){return!t.payload.includes(r)}))});default:return e}}}),g=r(2),O=r(3),E=r(6),y=r(4),j=r(7),k=function(e){return{type:"DELETE",payload:e}},C=(r(28),function(e){function t(){var e,r;Object(g.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).onSelectClick=function(){r.props.unSelected()},r.onDeleteClick=function(){r.props.onDelete(r.props.selectedItemsArr)},r}return Object(j.a)(t,e),Object(O.a)(t,[{key:"renderSelectedHeader",value:function(){var e=this.props,t=e.selectedItemsArr;return e.isChouse?a.a.createElement("div",{className:"selected"},a.a.createElement("p",{onClick:this.onSelectClick},"Selected(",t.length,")",a.a.createElement("i",{className:"times icon"})),a.a.createElement("p",{onClick:this.onDeleteClick,style:{color:"#007acc"}},a.a.createElement("i",{className:"blue trash alternate icon"}),"Delete(",t.length,")")):a.a.createElement("div",{className:"unSelected"},a.a.createElement("h4",{className:"header-title"},"Signature List"),a.a.createElement("a",{href:"https://www.google.com.ua/",target:"_blanck"},a.a.createElement("button",{className:"tiny ui primary basic button"},"Create a Signature")))}},{key:"render",value:function(){return a.a.createElement("div",{className:"header"},this.renderSelectedHeader())}}]),t}(a.a.Component)),x=Object(i.b)((function(e){return{selectedItemsArr:e.checkbox.selectedItems,isChouse:e.checkbox.isActive,images:e.checkbox.imagesArr}}),{unSelected:function(){return{type:"UNSELECTED"}},onDelete:k})(C),w=(r(29),r(30),function(e){function t(){var e,r;Object(g.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).state={hover:!1},r.onImgEnter=function(){r.setState({hover:!0})},r.onImgLeave=function(){r.setState({hover:!1})},r.onCheckboxClickOn=function(){r.props.isActive(r.props.index)},r.onCheckboxClickOff=function(){r.props.isNotActive(r.props.index)},r.onCardRemove=function(){r.props.onDelete([r.props.index])},r}return Object(j.a)(t,e),Object(O.a)(t,[{key:"renderActiveCheckbox",value:function(){return this.props.isChouse&&this.props.selectedItemsArr.includes(this.props.index)?a.a.createElement("i",{className:"inverted check icon"}):null}},{key:"renderHoveredItems",value:function(){return this.state.hover?a.a.createElement("div",{className:"hovered",onMouseEnter:this.onImgEnter},a.a.createElement("div",{className:"checkboxWrapper"},a.a.createElement("input",{type:"checkbox",name:"example",className:"checkbox"}),a.a.createElement("span",{onClick:this.onCheckboxClickOn,className:"fake"},this.renderActiveCheckbox())),a.a.createElement("div",{className:"hoveredContent"},a.a.createElement("p",null,"Sent by admin:"),a.a.createElement("p",null,"Installed by user:"),a.a.createElement("p",null,"Last edited:"),a.a.createElement("p",null,"NO"),a.a.createElement("p",null,"NO"),a.a.createElement("p",null,"03.04.2019 16:43")),a.a.createElement("div",{className:"hoveredFooter"},a.a.createElement("a",{href:"https://www.google.com.ua/",target:"_blanck"},a.a.createElement("button",{className:"tiny ui inverted button"},"Use")),a.a.createElement("div",{className:"icons"},a.a.createElement("i",{className:"inverted pencil alternate icon"}),a.a.createElement("i",{className:"inverted eye icon"}),a.a.createElement("i",{onClick:this.onCardRemove,className:"inverted trash alternate icon"})))):null}},{key:"renderActiveItems",value:function(){var e=this;return this.props.isChouse?a.a.createElement("div",{className:"checkboxWrapper"},a.a.createElement("input",{type:"checkbox",name:"example",className:"checkbox"}),a.a.createElement("span",{onClick:function(){return e.props.selectedItemsArr.includes(e.props.index)?e.onCheckboxClickOff():e.onCheckboxClickOn()},className:"fake"},this.renderActiveCheckbox())):this.renderHoveredItems()}},{key:"renderHoverColor",value:function(){var e=1;return this.props.isChouse?.3:this.state.hover?e=.3:e}},{key:"render",value:function(){var e=this.props.image,t=e.url,r=e.alt;return a.a.createElement("div",{className:"card"},a.a.createElement("img",{src:t,alt:r,style:{width:"100%",height:"200px",opacity:this.renderHoverColor()},onMouseOver:this.onImgEnter,onMouseOut:this.onImgLeave}),this.renderActiveItems())}}]),t}(a.a.Component)),A=Object(i.b)((function(e){return{isChouse:e.checkbox.isActive,selectedItemsArr:e.checkbox.selectedItems}}),{isActive:function(e){return{type:"IS_ACTIVE",payload:e}},isNotActive:function(e){return{type:"IS_NOT_ACTIVE",payload:e}},onDelete:k})(w),N=function(e){function t(){var e,r;Object(g.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).onCardRemove=function(e){var t=Object.assign([],r.props.images);t.splice(e,1),r.setState({imagesArr:t})},r}return Object(j.a)(t,e),Object(O.a)(t,[{key:"renderList",value:function(){var e=this;return this.props.images.map((function(t,r){return a.a.createElement(A,{image:t,key:r,index:r,onCardRemove:e.onCardRemove})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"SignatureList"},this.renderList())}}]),t}(a.a.Component),S=Object(i.b)((function(e){return{images:e.images.imagesArr}}))(N),I=(r(31),function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,null),a.a.createElement(S,null))}}]),t}(a.a.Component)),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,D=Object(o.e)(v,_(Object(o.a)()));s.a.render(a.a.createElement(i.a,{store:D},a.a.createElement(I,null)),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.baba1ed9.chunk.js.map