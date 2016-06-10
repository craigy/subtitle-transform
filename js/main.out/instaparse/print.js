// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.print');
goog.require('cljs.core');
goog.require('clojure.string');
instaparse.print.paren_for_tags = (function instaparse$print$paren_for_tags(tag_set,hidden_QMARK_,parser){
if(cljs.core.truth_((function (){var and__6542__auto__ = cljs.core.not(hidden_QMARK_);
if(and__6542__auto__){
var G__13254 = (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tag) : parser.call(null,cljs.core.cst$kw$tag));
return (tag_set.cljs$core$IFn$_invoke$arity$1 ? tag_set.cljs$core$IFn$_invoke$arity$1(G__13254) : tag_set.call(null,G__13254));
} else {
return and__6542__auto__;
}
})())){
return [cljs.core.str("("),cljs.core.str((instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(parser,false) : instaparse.print.combinators__GT_str.call(null,parser,false))),cljs.core.str(")")].join('');
} else {
return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(parser,false) : instaparse.print.combinators__GT_str.call(null,parser,false));
}
});
instaparse.print.paren_for_compound = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cat,null,cljs.core.cst$kw$ord,null,cljs.core.cst$kw$alt,null], null), null));
/**
 * Replaces whitespace characters with escape sequences for better printing
 */
instaparse.print.regexp_replace = (function instaparse$print$regexp_replace(s){
var G__13256 = s;
switch (G__13256) {
case "\n":
return "\\n";

break;
case "\b":
return "\\b";

break;
case "\f":
return "\\f";

break;
case "\r":
return "\\r";

break;
case "\t":
return "\\t";

break;
default:
return s;

}
});
instaparse.print.regexp__GT_str = (function instaparse$print$regexp__GT_str(r){
return clojure.string.replace([cljs.core.str("#\""),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r.source,(1))),cljs.core.str("\"")].join(''),/[\s]/,instaparse.print.regexp_replace);
});
instaparse.print.number__GT_hex_padded = (function instaparse$print$number__GT_hex_padded(n){
if((n <= (4095))){
return [cljs.core.str("0000"),cljs.core.str(n.toString((16)))].join('').substr((-4));
} else {
return n.toString((16));
}
});
instaparse.print.char_range__GT_str = (function instaparse$print$char_range__GT_str(p__13258){
var map__13261 = p__13258;
var map__13261__$1 = ((((!((map__13261 == null)))?((((map__13261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13261):map__13261);
var lo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13261__$1,cljs.core.cst$kw$lo);
var hi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13261__$1,cljs.core.cst$kw$hi);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lo,hi)){
return [cljs.core.str("%x"),cljs.core.str(instaparse.print.number__GT_hex_padded(lo))].join('');
} else {
return [cljs.core.str("%x"),cljs.core.str(instaparse.print.number__GT_hex_padded(lo)),cljs.core.str("-"),cljs.core.str(instaparse.print.number__GT_hex_padded(hi))].join('');
}
});
/**
 * Stringifies a parser built from combinators
 */
instaparse.print.combinators__GT_str = (function instaparse$print$combinators__GT_str(var_args){
var args13263 = [];
var len__7629__auto___13274 = arguments.length;
var i__7630__auto___13275 = (0);
while(true){
if((i__7630__auto___13275 < len__7629__auto___13274)){
args13263.push((arguments[i__7630__auto___13275]));

var G__13276 = (i__7630__auto___13275 + (1));
i__7630__auto___13275 = G__13276;
continue;
} else {
}
break;
}

var G__13265 = args13263.length;
switch (G__13265) {
case 1:
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13263.length)].join('')));

}
});

instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (p){
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,false);
});

instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (p__13266,hidden_QMARK_){
var map__13267 = p__13266;
var map__13267__$1 = ((((!((map__13267 == null)))?((((map__13267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13267):map__13267);
var p = map__13267__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$parser);
var parser1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$parser1);
var parser2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$parser2);
var parsers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$parsers);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$tag);
if(cljs.core.truth_((function (){var and__6542__auto__ = cljs.core.not(hidden_QMARK_);
if(and__6542__auto__){
return cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(p);
} else {
return and__6542__auto__;
}
})())){
return [cljs.core.str("<"),cljs.core.str(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,true)),cljs.core.str(">")].join('');
} else {
var G__13269 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);
switch (G__13269) {
case "neg":
return [cljs.core.str("!"),cljs.core.str((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser)))].join('');

break;
case "cat":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ord,null,cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_),parsers));

break;
case "ord":
return [cljs.core.str(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_,parser1)),cljs.core.str(" / "),cljs.core.str(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_,parser2))].join('');

break;
case "alt":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ord,null], null), null),hidden_QMARK_),parsers));

break;
case "look":
return [cljs.core.str("&"),cljs.core.str((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser)))].join('');

break;
case "nt":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(p))].join(''),(1));

break;
case "rep":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(p))){
return [cljs.core.str((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),cljs.core.str("{"),cljs.core.str(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str(","),cljs.core.str(cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str("}")].join('');
} else {
return [cljs.core.str((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),cljs.core.str("{"),cljs.core.str(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str("}")].join('');
}

break;
case "star":
return [cljs.core.str((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),cljs.core.str("*")].join('');

break;
case "string":
var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13270_13279 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13271_13280 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13270_13279,_STAR_print_fn_STAR_13271_13280,sb__7540__auto__,G__13269,map__13267,map__13267__$1,p,parser,parser1,parser2,parsers,tag){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_13270_13279,_STAR_print_fn_STAR_13271_13280,sb__7540__auto__,G__13269,map__13267,map__13267__$1,p,parser,parser1,parser2,parsers,tag))
;

try{cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13271_13280;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13270_13279;
}
return [cljs.core.str(sb__7540__auto__)].join('');

break;
case "regexp":
return instaparse.print.regexp__GT_str(cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(p));

break;
case "plus":
return [cljs.core.str((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),cljs.core.str("+")].join('');

break;
case "epsilon":
return "\u03B5";

break;
case "string-ci":
var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13272_13281 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13273_13282 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13272_13281,_STAR_print_fn_STAR_13273_13282,sb__7540__auto__,G__13269,map__13267,map__13267__$1,p,parser,parser1,parser2,parsers,tag){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_13272_13281,_STAR_print_fn_STAR_13273_13282,sb__7540__auto__,G__13269,map__13267,map__13267__$1,p,parser,parser1,parser2,parsers,tag))
;

try{cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13273_13282;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13272_13281;
}
return [cljs.core.str(sb__7540__auto__)].join('');

break;
case "char":
return instaparse.print.char_range__GT_str(p);

break;
case "opt":
return [cljs.core.str((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),cljs.core.str("?")].join('');

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(tag)].join('')));

}
}
});

instaparse.print.combinators__GT_str.cljs$lang$maxFixedArity = 2;

/**
 * Takes a terminal symbol and a parser built from combinators,
 * and returns a string for the rule.
 */
instaparse.print.rule__GT_str = (function instaparse$print$rule__GT_str(terminal,parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reduction_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser)),cljs.core.cst$kw$raw)){
return [cljs.core.str("<"),cljs.core.str(cljs.core.name(terminal)),cljs.core.str(">"),cljs.core.str(" = "),cljs.core.str(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser))].join('');
} else {
return [cljs.core.str(cljs.core.name(terminal)),cljs.core.str(" = "),cljs.core.str(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser))].join('');
}
});
/**
 * Takes a Parser object, i.e., something with a grammar map and a start 
 * production keyword, and stringifies it.
 */
instaparse.print.Parser__GT_str = (function instaparse$print$Parser__GT_str(p__13283){
var map__13304 = p__13283;
var map__13304__$1 = ((((!((map__13304 == null)))?((((map__13304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13304):map__13304);
var grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,cljs.core.cst$kw$grammar);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,cljs.core.cst$kw$start_DASH_production);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(instaparse.print.rule__GT_str(start,(grammar.cljs$core$IFn$_invoke$arity$1 ? grammar.cljs$core$IFn$_invoke$arity$1(start) : grammar.call(null,start))),(function (){var iter__7334__auto__ = ((function (map__13304,map__13304__$1,grammar,start){
return (function instaparse$print$Parser__GT_str_$_iter__13306(s__13307){
return (new cljs.core.LazySeq(null,((function (map__13304,map__13304__$1,grammar,start){
return (function (){
var s__13307__$1 = s__13307;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13307__$1);
if(temp__4657__auto__){
var s__13307__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13307__$2)){
var c__7332__auto__ = cljs.core.chunk_first(s__13307__$2);
var size__7333__auto__ = cljs.core.count(c__7332__auto__);
var b__13309 = cljs.core.chunk_buffer(size__7333__auto__);
if((function (){var i__13308 = (0);
while(true){
if((i__13308 < size__7333__auto__)){
var vec__13318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7332__auto__,i__13308);
var terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13318,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13318,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(terminal,start)){
cljs.core.chunk_append(b__13309,instaparse.print.rule__GT_str(terminal,parser));

var G__13324 = (i__13308 + (1));
i__13308 = G__13324;
continue;
} else {
var G__13325 = (i__13308 + (1));
i__13308 = G__13325;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13309),instaparse$print$Parser__GT_str_$_iter__13306(cljs.core.chunk_rest(s__13307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13309),null);
}
} else {
var vec__13321 = cljs.core.first(s__13307__$2);
var terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13321,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13321,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(terminal,start)){
return cljs.core.cons(instaparse.print.rule__GT_str(terminal,parser),instaparse$print$Parser__GT_str_$_iter__13306(cljs.core.rest(s__13307__$2)));
} else {
var G__13326 = cljs.core.rest(s__13307__$2);
s__13307__$1 = G__13326;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__13304,map__13304__$1,grammar,start))
,null,null));
});})(map__13304,map__13304__$1,grammar,start))
;
return iter__7334__auto__(grammar);
})()));
});
