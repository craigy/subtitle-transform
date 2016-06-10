// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6554__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__13755 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13755) : cljs.core.atom.call(null,G__13755));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13758 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_13758){
return (function (){
var _STAR_always_update_STAR_13759 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13759;
}});})(_STAR_always_update_STAR_13758))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13758;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args13760 = [];
var len__7629__auto___13763 = arguments.length;
var i__7630__auto___13764 = (0);
while(true){
if((i__7630__auto___13764 < len__7629__auto___13763)){
args13760.push((arguments[i__7630__auto___13764]));

var G__13765 = (i__7630__auto___13764 + (1));
i__7630__auto___13764 = G__13765;
continue;
} else {
}
break;
}

var G__13762 = args13760.length;
switch (G__13762) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13760.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__13771_13775 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__13772_13776 = null;
var count__13773_13777 = (0);
var i__13774_13778 = (0);
while(true){
if((i__13774_13778 < count__13773_13777)){
var v_13779 = chunk__13772_13776.cljs$core$IIndexed$_nth$arity$2(null,i__13774_13778);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13779);

var G__13780 = seq__13771_13775;
var G__13781 = chunk__13772_13776;
var G__13782 = count__13773_13777;
var G__13783 = (i__13774_13778 + (1));
seq__13771_13775 = G__13780;
chunk__13772_13776 = G__13781;
count__13773_13777 = G__13782;
i__13774_13778 = G__13783;
continue;
} else {
var temp__4657__auto___13784 = cljs.core.seq(seq__13771_13775);
if(temp__4657__auto___13784){
var seq__13771_13785__$1 = temp__4657__auto___13784;
if(cljs.core.chunked_seq_QMARK_(seq__13771_13785__$1)){
var c__7365__auto___13786 = cljs.core.chunk_first(seq__13771_13785__$1);
var G__13787 = cljs.core.chunk_rest(seq__13771_13785__$1);
var G__13788 = c__7365__auto___13786;
var G__13789 = cljs.core.count(c__7365__auto___13786);
var G__13790 = (0);
seq__13771_13775 = G__13787;
chunk__13772_13776 = G__13788;
count__13773_13777 = G__13789;
i__13774_13778 = G__13790;
continue;
} else {
var v_13791 = cljs.core.first(seq__13771_13785__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13791);

var G__13792 = cljs.core.next(seq__13771_13785__$1);
var G__13793 = null;
var G__13794 = (0);
var G__13795 = (0);
seq__13771_13775 = G__13792;
chunk__13772_13776 = G__13793;
count__13773_13777 = G__13794;
i__13774_13778 = G__13795;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
