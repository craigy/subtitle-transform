// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.repeat');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.viz');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');
instaparse.repeat.empty_result_QMARK_ = (function instaparse$repeat$empty_result_QMARK_(result){
return ((cljs.core.vector_QMARK_(result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),(1)))) || ((cljs.core.map_QMARK_(result)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$tag)) && (cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$content)))) || (cljs.core.empty_QMARK_(result));
});
instaparse.repeat.failure_signal = instaparse.gll.__GT_Failure(null,null);
instaparse.repeat.get_end = (function instaparse$repeat$get_end(var_args){
var args14212 = [];
var len__7629__auto___14221 = arguments.length;
var i__7630__auto___14222 = (0);
while(true){
if((i__7630__auto___14222 < len__7629__auto___14221)){
args14212.push((arguments[i__7630__auto___14222]));

var G__14223 = (i__7630__auto___14222 + (1));
i__7630__auto___14222 = G__14223;
continue;
} else {
}
break;
}

var G__14214 = args14212.length;
switch (G__14214) {
case 1:
return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14212.length)].join('')));

}
});

instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1 = (function (parse){
var vec__14215 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14215,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14215,(1),null);
if(cljs.core.truth_(end)){
return cljs.core.long$(end);
} else {
return cljs.core.count(parse);
}
});

instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2 = (function (parse,index){
var vec__14218 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14218,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14218,(1),null);
if(cljs.core.truth_(end)){
return cljs.core.long$(end);
} else {
return (index + cljs.core.count(parse));
}
});

instaparse.repeat.get_end.cljs$lang$maxFixedArity = 2;

instaparse.repeat.parse_from_index = (function instaparse$repeat$parse_from_index(grammar,initial_parser,text,segment,index){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3(grammar,text,segment);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,initial_parser], null),instaparse.gll.TopListener(tramp));

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
});
/**
 * Returns either:
 * [a-parse end-index a-list-of-valid-follow-up-parses]
 * [a-parse end-index nil] (successfully reached end of text)
 * nil (hit a dead-end with this strategy)
 */
instaparse.repeat.select_parse = (function instaparse$repeat$select_parse(grammar,initial_parser,text,segment,index,parses){
var length = cljs.core.count(text);
var parses__$1 = cljs.core.seq(parses);
while(true){
if(parses__$1){
var parse = cljs.core.first(parses__$1);
var vec__14228 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(1),null);
var end__$1 = (cljs.core.truth_(end)?end:(index + cljs.core.count(parse)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end__$1,length)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,null], null);
} else {
var temp__4655__auto__ = cljs.core.seq(instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,end__$1));
if(temp__4655__auto__){
var follow_ups = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,follow_ups], null);
} else {
var G__14231 = cljs.core.next(parses__$1);
parses__$1 = G__14231;
continue;
}

}
} else {
return null;
}
break;
}
});
instaparse.repeat.repeat_parse_hiccup = (function instaparse$repeat$repeat_parse_hiccup(var_args){
var args14232 = [];
var len__7629__auto___14245 = arguments.length;
var i__7630__auto___14246 = (0);
while(true){
if((i__7630__auto___14246 < len__7629__auto___14245)){
args14232.push((arguments[i__7630__auto___14246]));

var G__14247 = (i__7630__auto___14246 + (1));
i__7630__auto___14246 = G__14247;
continue;
} else {
}
break;
}

var G__14234 = args14232.length;
switch (G__14234) {
case 5:
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14232.length)].join('')));

}
});

instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,root_tag,text,segment){
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6(grammar,initial_parser,root_tag,text,segment,(0));
});

instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6 = (function (grammar,initial_parser,root_tag,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null));
var G__14238 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__14239 = G__14238;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14239,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14239,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14239,(2),null);
var selection = vec__14239;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__14238__$1 = G__14238;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__14242 = G__14238__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14242,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14242,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14242,(2),null);
var selection__$1 = vec__14242;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optimize,cljs.core.cst$kw$memory,cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,(0),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,length], null));
} else {
var G__14249 = cljs.core.long$(end__$1);
var G__14250 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__14251 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__14249;
parses__$1 = G__14250;
G__14238__$1 = G__14251;
continue;

}
}
}
break;
}
});

instaparse.repeat.repeat_parse_hiccup.cljs$lang$maxFixedArity = 6;

instaparse.repeat.repeat_parse_enlive = (function instaparse$repeat$repeat_parse_enlive(var_args){
var args14252 = [];
var len__7629__auto___14265 = arguments.length;
var i__7630__auto___14266 = (0);
while(true){
if((i__7630__auto___14266 < len__7629__auto___14265)){
args14252.push((arguments[i__7630__auto___14266]));

var G__14267 = (i__7630__auto___14266 + (1));
i__7630__auto___14266 = G__14267;
continue;
} else {
}
break;
}

var G__14254 = args14252.length;
switch (G__14254) {
case 5:
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14252.length)].join('')));

}
});

instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,root_tag,text,segment){
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6(grammar,initial_parser,root_tag,text,segment,(0));
});

instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6 = (function (grammar,initial_parser,root_tag,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.EMPTY;
var G__14258 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__14259 = G__14258;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14259,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14259,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14259,(2),null);
var selection = vec__14259;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__14258__$1 = G__14258;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__14262 = G__14258__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14262,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14262,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14262,(2),null);
var selection__$1 = vec__14262;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,root_tag,cljs.core.cst$kw$content,cljs.core.seq(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optimize,cljs.core.cst$kw$memory,cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,(0),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,length], null));
} else {
var G__14269 = cljs.core.long$(end__$1);
var G__14270 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__14271 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__14269;
parses__$1 = G__14270;
G__14258__$1 = G__14271;
continue;

}
}
}
break;
}
});

instaparse.repeat.repeat_parse_enlive.cljs$lang$maxFixedArity = 6;

instaparse.repeat.repeat_parse_no_tag = (function instaparse$repeat$repeat_parse_no_tag(var_args){
var args14272 = [];
var len__7629__auto___14285 = arguments.length;
var i__7630__auto___14286 = (0);
while(true){
if((i__7630__auto___14286 < len__7629__auto___14285)){
args14272.push((arguments[i__7630__auto___14286]));

var G__14287 = (i__7630__auto___14286 + (1));
i__7630__auto___14286 = G__14287;
continue;
} else {
}
break;
}

var G__14274 = args14272.length;
switch (G__14274) {
case 4:
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14272.length)].join('')));

}
});

instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4 = (function (grammar,initial_parser,text,segment){
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,text,segment,(0));
});

instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.EMPTY;
var G__14278 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__14279 = G__14278;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14279,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14279,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14279,(2),null);
var selection = vec__14279;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__14278__$1 = G__14278;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__14282 = G__14278__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14282,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14282,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14282,(2),null);
var selection__$1 = vec__14282;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optimize,cljs.core.cst$kw$memory,cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,(0),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,length], null));
} else {
var G__14289 = cljs.core.long$(end__$1);
var G__14290 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__14291 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__14289;
parses__$1 = G__14290;
G__14278__$1 = G__14291;
continue;

}
}
}
break;
}
});

instaparse.repeat.repeat_parse_no_tag.cljs$lang$maxFixedArity = 5;

instaparse.repeat.repeat_parse = (function instaparse$repeat$repeat_parse(var_args){
var args14292 = [];
var len__7629__auto___14295 = arguments.length;
var i__7630__auto___14296 = (0);
while(true){
if((i__7630__auto___14296 < len__7629__auto___14295)){
args14292.push((arguments[i__7630__auto___14296]));

var G__14297 = (i__7630__auto___14296 + (1));
i__7630__auto___14296 = G__14297;
continue;
} else {
}
break;
}

var G__14294 = args14292.length;
switch (G__14294) {
case 4:
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14292.length)].join('')));

}
});

instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4 = (function (grammar,initial_parser,output_format,text){
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4(grammar,initial_parser,text,instaparse.gll.text__GT_segment(text));
});

instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,output_format,root_tag,text){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hiccup,null,cljs.core.cst$kw$enlive,null], null), null).call(null,output_format))){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} output-format)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.cst$kw$hiccup)){
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,root_tag,text,instaparse.gll.text__GT_segment(text));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.cst$kw$enlive)){
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,root_tag,text,instaparse.gll.text__GT_segment(text));
} else {
return null;
}
}
});

instaparse.repeat.repeat_parse.cljs$lang$maxFixedArity = 5;

instaparse.repeat.repeat_parse_with_header = (function instaparse$repeat$repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,root_tag,text){
var segment = instaparse.gll.text__GT_segment(text);
var length = cljs.core.count(text);
var header_results = instaparse.repeat.parse_from_index(grammar,header_parser,text,segment,(0));
if(cljs.core.truth_((function (){var or__6554__auto__ = cljs.core.empty_QMARK_(header_results);
if(or__6554__auto__){
return or__6554__auto__;
} else {
return cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(header_parser);
}
})())){
return instaparse.repeat.failure_signal;
} else {
var header_result = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,instaparse.repeat.get_end,header_results);
var end = instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1(header_result);
var repeat_result = instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(grammar,cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(repeating_parser),text,segment,end);
var span_meta = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optimize,cljs.core.cst$kw$memory,cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,(0),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,length], null);
if(cljs.core.truth_((function (){var or__6554__auto__ = (repeat_result instanceof instaparse.gll.Failure);
if(or__6554__auto__){
return or__6554__auto__;
} else {
var and__6542__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(repeating_parser),cljs.core.cst$kw$star);
if(and__6542__auto__){
return instaparse.repeat.empty_result_QMARK_(repeat_result);
} else {
return and__6542__auto__;
}
}
})())){
return instaparse.repeat.failure_signal;
} else {
var G__14300 = (((output_format instanceof cljs.core.Keyword))?output_format.fqn:null);
switch (G__14300) {
case "enlive":
return instaparse.gll.safe_with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,root_tag,cljs.core.cst$kw$content,instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY,header_result),repeat_result)], null),span_meta);

break;
case "hiccup":
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null)),header_result),repeat_result)),span_meta);

break;
default:
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY,header_result),repeat_result),span_meta);

}
}
}
});
instaparse.repeat.try_repeating_parse_strategy_with_header = (function instaparse$repeat$try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format){

var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(start_rule);
var repeating_parser = cljs.core.last(parsers);
if(cljs.core.not((function (){var and__6542__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.cst$kw$cat);
if(and__6542__auto__){
var and__6542__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$star,null,cljs.core.cst$kw$plus,null], null), null).call(null,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(repeating_parser));
if(cljs.core.truth_(and__6542__auto____$1)){
return (cljs.core.not(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(repeating_parser))) && (cljs.core.not(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(repeating_parser))));
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
})())){
return instaparse.repeat.failure_signal;
} else {
var header_parser = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.butlast(parsers));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction)){
return instaparse.repeat.repeat_parse_with_header(grammar,header_parser,repeating_parser,null,start_production,text);
} else {
return instaparse.repeat.repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,start_production,text);
}
}
});
instaparse.repeat.try_repeating_parse_strategy = (function instaparse$repeat$try_repeating_parse_strategy(parser,text,start_production){
var grammar = cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser);
var output_format = cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser);
var start_rule = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grammar,start_production);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(start_rule),true)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.cst$kw$star)){
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(grammar,cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.cst$kw$plus)){
var result = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(grammar,cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
if(cljs.core.truth_(instaparse.repeat.empty_result_QMARK_(result))){
return instaparse.repeat.failure_signal;
} else {
return result;
}
} else {
return instaparse.repeat.try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.cst$kw$star)){
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(grammar,cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.cst$kw$plus)){
var result = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(grammar,cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
if(cljs.core.truth_(instaparse.repeat.empty_result_QMARK_(result))){
return instaparse.repeat.failure_signal;
} else {
return result;
}
} else {
return instaparse.repeat.try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format);

}
}
}
}
});
instaparse.repeat.used_memory_optimization_QMARK_ = (function instaparse$repeat$used_memory_optimization_QMARK_(tree){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$memory,cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tree)));
});
