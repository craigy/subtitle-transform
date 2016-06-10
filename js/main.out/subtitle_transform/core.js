// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('subtitle_transform.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('instaparse.core');
cljs.core.enable_console_print_BANG_();
subtitle_transform.core.as_and_bs = instaparse.core.parser("S = AB*\n     AB = A B\n     A = 'a'+\n     B = 'b'+");
if(typeof subtitle_transform.core.app_state !== 'undefined'){
} else {
subtitle_transform.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,"",cljs.core.cst$kw$output,""], null));
}
subtitle_transform.core.in__GT_out = (function subtitle_transform$core$in__GT_out(input){
var parsed = (subtitle_transform.core.as_and_bs.cljs$core$IFn$_invoke$arity$1 ? subtitle_transform.core.as_and_bs.cljs$core$IFn$_invoke$arity$1(input) : subtitle_transform.core.as_and_bs.call(null,input));
if((cljs.core.not(instaparse.core.failure_QMARK_(parsed))) && (cljs.core.seq(parsed))){
return [cljs.core.str(parsed)].join('');
} else {
return cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.core.get_failure(parsed)], 0));
}
});
subtitle_transform.core.on_change_input = (function subtitle_transform$core$on_change_input(event){
var input = event.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subtitle_transform.core.app_state,cljs.core.assoc,cljs.core.cst$kw$input,input);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subtitle_transform.core.app_state,cljs.core.assoc,cljs.core.cst$kw$output,subtitle_transform.core.in__GT_out(input));
});
subtitle_transform.core.app = (function subtitle_transform$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,(16)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,(200),cljs.core.cst$kw$resize,"none",cljs.core.cst$kw$font_DASH_family,"monospace"], null),cljs.core.cst$kw$value,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(subtitle_transform.core.app_state) : cljs.core.deref.call(null,subtitle_transform.core.app_state))),cljs.core.cst$kw$on_DASH_change,subtitle_transform.core.on_change_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,(200),cljs.core.cst$kw$resize,"none",cljs.core.cst$kw$font_DASH_family,"monospace"], null),cljs.core.cst$kw$disabled,true,cljs.core.cst$kw$value,cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(subtitle_transform.core.app_state) : cljs.core.deref.call(null,subtitle_transform.core.app_state)))], null)], null)], null);
});
subtitle_transform.core.run = (function subtitle_transform$core$run(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [subtitle_transform.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('subtitle_transform.core.run', subtitle_transform.core.run);
subtitle_transform.core.run();
