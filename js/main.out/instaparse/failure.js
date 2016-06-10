// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__13329 = (line + (1));
var G__13330 = (1);
var G__13331 = (counter + (1));
line = G__13329;
col = G__13330;
counter = G__13331;
continue;
} else {
var G__13332 = line;
var G__13333 = (col + (1));
var G__13334 = (counter + (1));
line = G__13332;
col = G__13333;
counter = G__13334;
continue;

}
}
break;
}
});
instaparse.failure.newline_chars_QMARK_ = (function instaparse$failure$newline_chars_QMARK_(c){
return cljs.core.boolean$(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null).call(null,c));
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(instaparse.failure.newline_chars_QMARK_),chars));
} else {
if(cljs.core.truth_(instaparse.failure.newline_chars_QMARK_(cljs.core.first(chars)))){
var G__13335 = cljs.core.next(chars);
var G__13336 = (n__$1 - (1));
chars = G__13335;
n__$1 = G__13336;
continue;
} else {
var G__13337 = cljs.core.next(chars);
var G__13338 = n__$1;
chars = G__13337;
n__$1 = G__13338;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,instaparse.failure.get_line(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(cljs.core.cst$kw$NOT.cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$NOT.cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$char_DASH_range.cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__13339){
var map__13350 = p__13339;
var map__13350__$1 = ((((!((map__13350 == null)))?((((map__13350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13350):map__13350);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13350__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13350__$1,cljs.core.cst$kw$column);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13350__$1,cljs.core.cst$kw$text);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13350__$1,cljs.core.cst$kw$reason);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Parse error at line",line,", column",column,":\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expecting,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$full,reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expecting,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.cst$kw$full),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Expected one of:"], 0));

}
}

var seq__13352_13360 = cljs.core.seq(full_reasons);
var chunk__13353_13361 = null;
var count__13354_13362 = (0);
var i__13355_13363 = (0);
while(true){
if((i__13355_13363 < count__13354_13362)){
var r_13364 = chunk__13353_13361.cljs$core$IIndexed$_nth$arity$2(null,i__13355_13363);
instaparse.failure.print_reason(r_13364);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));

var G__13365 = seq__13352_13360;
var G__13366 = chunk__13353_13361;
var G__13367 = count__13354_13362;
var G__13368 = (i__13355_13363 + (1));
seq__13352_13360 = G__13365;
chunk__13353_13361 = G__13366;
count__13354_13362 = G__13367;
i__13355_13363 = G__13368;
continue;
} else {
var temp__4657__auto___13369 = cljs.core.seq(seq__13352_13360);
if(temp__4657__auto___13369){
var seq__13352_13370__$1 = temp__4657__auto___13369;
if(cljs.core.chunked_seq_QMARK_(seq__13352_13370__$1)){
var c__7365__auto___13371 = cljs.core.chunk_first(seq__13352_13370__$1);
var G__13372 = cljs.core.chunk_rest(seq__13352_13370__$1);
var G__13373 = c__7365__auto___13371;
var G__13374 = cljs.core.count(c__7365__auto___13371);
var G__13375 = (0);
seq__13352_13360 = G__13372;
chunk__13353_13361 = G__13373;
count__13354_13362 = G__13374;
i__13355_13363 = G__13375;
continue;
} else {
var r_13376 = cljs.core.first(seq__13352_13370__$1);
instaparse.failure.print_reason(r_13376);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));

var G__13377 = cljs.core.next(seq__13352_13370__$1);
var G__13378 = null;
var G__13379 = (0);
var G__13380 = (0);
seq__13352_13360 = G__13377;
chunk__13353_13361 = G__13378;
count__13354_13362 = G__13379;
i__13355_13363 = G__13380;
continue;
}
} else {
}
}
break;
}

var seq__13356 = cljs.core.seq(partial_reasons);
var chunk__13357 = null;
var count__13358 = (0);
var i__13359 = (0);
while(true){
if((i__13359 < count__13358)){
var r = chunk__13357.cljs$core$IIndexed$_nth$arity$2(null,i__13359);
instaparse.failure.print_reason(r);

cljs.core.println();

var G__13381 = seq__13356;
var G__13382 = chunk__13357;
var G__13383 = count__13358;
var G__13384 = (i__13359 + (1));
seq__13356 = G__13381;
chunk__13357 = G__13382;
count__13358 = G__13383;
i__13359 = G__13384;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13356);
if(temp__4657__auto__){
var seq__13356__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13356__$1)){
var c__7365__auto__ = cljs.core.chunk_first(seq__13356__$1);
var G__13385 = cljs.core.chunk_rest(seq__13356__$1);
var G__13386 = c__7365__auto__;
var G__13387 = cljs.core.count(c__7365__auto__);
var G__13388 = (0);
seq__13356 = G__13385;
chunk__13357 = G__13386;
count__13358 = G__13387;
i__13359 = G__13388;
continue;
} else {
var r = cljs.core.first(seq__13356__$1);
instaparse.failure.print_reason(r);

cljs.core.println();

var G__13389 = cljs.core.next(seq__13356__$1);
var G__13390 = null;
var G__13391 = (0);
var G__13392 = (0);
seq__13356 = G__13389;
chunk__13357 = G__13390;
count__13358 = G__13391;
i__13359 = G__13392;
continue;
}
} else {
return null;
}
}
break;
}
});
