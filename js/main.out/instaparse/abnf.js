// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.abnf');
goog.require('cljs.core');
goog.require('instaparse.transform');
goog.require('instaparse.combinators_source');
goog.require('instaparse.gll');
goog.require('instaparse.cfg');
goog.require('instaparse.reduction');
goog.require('goog.string.format');
/**
 * This is normally set to false, in which case the non-terminals
 * are treated as case-sensitive, which is NOT the norm
 * for ABNF grammars. If you really want case-insensitivity,
 * bind this to true, in which case all non-terminals
 * will be converted to upper-case internally (which
 * you'll have to keep in mind when transforming).
 */
instaparse.abnf._STAR_case_insensitive_STAR_ = false;
instaparse.abnf.abnf_core = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$CRLF,cljs.core.cst$kw$HTAB,cljs.core.cst$kw$LWSP,cljs.core.cst$kw$LF,cljs.core.cst$kw$VCHAR,cljs.core.cst$kw$DIGIT,cljs.core.cst$kw$SP,cljs.core.cst$kw$HEXDIG,cljs.core.cst$kw$CTL,cljs.core.cst$kw$DQUOTE,cljs.core.cst$kw$WSP,cljs.core.cst$kw$CR,cljs.core.cst$kw$OCTET,cljs.core.cst$kw$ALPHA,cljs.core.cst$kw$CHAR,cljs.core.cst$kw$BIT],[instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.string("\t"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0))], 0)))], 0)),instaparse.combinators_source.string("\n"),instaparse.combinators_source.regexp("[\\u0021-\\u007E]"),instaparse.combinators_source.regexp("[0-9]"),instaparse.combinators_source.string(" "),instaparse.combinators_source.regexp("[0-9a-fA-F]"),instaparse.combinators_source.regexp("[\\u0000-\\u001F|\\u007F]"),instaparse.combinators_source.string("\""),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.string("\r"),instaparse.combinators_source.regexp("[\\u0000-\\u00FF]"),instaparse.combinators_source.regexp("[a-zA-Z]"),instaparse.combinators_source.regexp("[\\u0001-\\u007F]"),instaparse.combinators_source.regexp("[01]")]);
instaparse.abnf.abnf_grammar = "\n<rulelist> = <opt-whitespace> (rule | hide-tag-rule)+;\nrule = rulename-left <defined-as> alternation <opt-whitespace>;\nhide-tag-rule = hide-tag <defined-as> alternation <opt-whitespace>;\nrulename-left = rulename;\nrulename-right = rulename;\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*';\n<hide-tag> = <'<' opt-whitespace> rulename-left <opt-whitespace '>'>;\ndefined-as = <opt-whitespace> ('=' | '=/') <opt-whitespace>;\nalternation = concatenation (<opt-whitespace '/' opt-whitespace> concatenation)*;\nconcatenation = repetition (<whitespace> repetition)*;\nrepetition = [repeat] <opt-whitespace> element;\nrepeat = NUM | (NUM? '*' NUM?);\n<element> = rulename-right | group | hide | option | char-val | num-val\n          | look | neg | regexp;\nlook = <'&' opt-whitespace> element;\nneg = <'!' opt-whitespace> element;\n<group> = <'(' opt-whitespace> alternation <opt-whitespace ')'>;\noption = <'[' opt-whitespace> alternation <opt-whitespace ']'>;\nhide = <'<' opt-whitespace> alternation <opt-whitespace '>'>;\nchar-val = <'\\u0022'> #'[\\u0020-\\u0021\\u0023-\\u007E]'* <'\\u0022'> (* double-quoted strings *)\n         | <'\\u0027'> #'[\\u0020-\\u0026(-~]'* <'\\u0027'>;  (* single-quoted strings *)\n<num-val> = <'%'> (bin-val | dec-val | hex-val);\nbin-val = <'b'> bin-char\n          [ (<'.'> bin-char)+ | ('-' bin-char) ];\nbin-char = ('0' | '1')+;\ndec-val = <'d'> dec-char\n          [ (<'.'> dec-char)+ | ('-' dec-char) ];\ndec-char = DIGIT+;\nhex-val = <'x'> hex-char\n          [ (<'.'> hex-char)+ | ('-' hex-char) ];\nhex-char = HEXDIG+;\nNUM = DIGIT+;\n<DIGIT> = #'[0-9]';\n<HEXDIG> = #'[0-9a-fA-F]';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"\"\n";
/**
 * Formats a string using goog.string.format.
 */
instaparse.abnf.format = (function instaparse$abnf$format(var_args){
var args__7636__auto__ = [];
var len__7629__auto___14122 = arguments.length;
var i__7630__auto___14123 = (0);
while(true){
if((i__7630__auto___14123 < len__7629__auto___14122)){
args__7636__auto__.push((arguments[i__7630__auto___14123]));

var G__14124 = (i__7630__auto___14123 + (1));
i__7630__auto___14123 = G__14124;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return instaparse.abnf.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

instaparse.abnf.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

instaparse.abnf.format.cljs$lang$maxFixedArity = (1);

instaparse.abnf.format.cljs$lang$applyTo = (function (seq14120){
var G__14121 = cljs.core.first(seq14120);
var seq14120__$1 = cljs.core.next(seq14120);
return instaparse.abnf.format.cljs$core$IFn$_invoke$arity$variadic(G__14121,seq14120__$1);
});

instaparse.abnf.get_char_combinator = (function instaparse$abnf$get_char_combinator(var_args){
var args__7636__auto__ = [];
var len__7629__auto___14135 = arguments.length;
var i__7630__auto___14136 = (0);
while(true){
if((i__7630__auto___14136 < len__7629__auto___14135)){
args__7636__auto__.push((arguments[i__7630__auto___14136]));

var G__14137 = (i__7630__auto___14136 + (1));
i__7630__auto___14136 = G__14137;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic = (function (nums){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.second(nums))){
var vec__14126 = nums;
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14126,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14126,(1),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14126,(2),null);
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(lo,hi);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,(function (){var iter__7334__auto__ = (function instaparse$abnf$iter__14129(s__14130){
return (new cljs.core.LazySeq(null,(function (){
var s__14130__$1 = s__14130;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14130__$1);
if(temp__4657__auto__){
var s__14130__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14130__$2)){
var c__7332__auto__ = cljs.core.chunk_first(s__14130__$2);
var size__7333__auto__ = cljs.core.count(c__7332__auto__);
var b__14132 = cljs.core.chunk_buffer(size__7333__auto__);
if((function (){var i__14131 = (0);
while(true){
if((i__14131 < size__7333__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7332__auto__,i__14131);
cljs.core.chunk_append(b__14132,instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(n));

var G__14138 = (i__14131 + (1));
i__14131 = G__14138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14132),instaparse$abnf$iter__14129(cljs.core.chunk_rest(s__14130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14132),null);
}
} else {
var n = cljs.core.first(s__14130__$2);
return cljs.core.cons(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(n),instaparse$abnf$iter__14129(cljs.core.rest(s__14130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7334__auto__(nums);
})());

}
});

instaparse.abnf.get_char_combinator.cljs$lang$maxFixedArity = (0);

instaparse.abnf.get_char_combinator.cljs$lang$applyTo = (function (seq14125){
return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14125));
});

/**
 * Restricts map to certain keys
 */
instaparse.abnf.project = (function instaparse$abnf$project(m,ks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7334__auto__ = (function instaparse$abnf$project_$_iter__14145(s__14146){
return (new cljs.core.LazySeq(null,(function (){
var s__14146__$1 = s__14146;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14146__$1);
if(temp__4657__auto__){
var s__14146__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14146__$2)){
var c__7332__auto__ = cljs.core.chunk_first(s__14146__$2);
var size__7333__auto__ = cljs.core.count(c__7332__auto__);
var b__14148 = cljs.core.chunk_buffer(size__7333__auto__);
if((function (){var i__14147 = (0);
while(true){
if((i__14147 < size__7333__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7332__auto__,i__14147);
if(cljs.core.contains_QMARK_(m,k)){
cljs.core.chunk_append(b__14148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k))], null));

var G__14151 = (i__14147 + (1));
i__14147 = G__14151;
continue;
} else {
var G__14152 = (i__14147 + (1));
i__14147 = G__14152;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14148),instaparse$abnf$project_$_iter__14145(cljs.core.chunk_rest(s__14146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14148),null);
}
} else {
var k = cljs.core.first(s__14146__$2);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k))], null),instaparse$abnf$project_$_iter__14145(cljs.core.rest(s__14146__$2)));
} else {
var G__14153 = cljs.core.rest(s__14146__$2);
s__14146__$1 = G__14153;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7334__auto__(ks);
})());
});
/**
 * Merges abnf-core map in with parsed grammar map
 */
instaparse.abnf.merge_core = (function instaparse$abnf$merge_core(grammar_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.abnf.project(instaparse.abnf.abnf_core,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.array_seq([cljs.core.vals(grammar_map)], 0)))),grammar_map], 0));
});
/**
 * Tests whether parser was constructed with hide-tag
 */
instaparse.abnf.hide_tag_QMARK_ = (function instaparse$abnf$hide_tag_QMARK_(p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(p),instaparse.reduction.raw_non_terminal_reduction);
});
instaparse.abnf.alt_preserving_hide_tag = (function instaparse$abnf$alt_preserving_hide_tag(p1,p2){
var hide_tag_p1_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p1);
var hide_tag_p2_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p2);
if(cljs.core.truth_((function (){var and__6542__auto__ = hide_tag_p1_QMARK_;
if(cljs.core.truth_(and__6542__auto__)){
return hide_tag_p2_QMARK_;
} else {
return and__6542__auto__;
}
})())){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,cljs.core.cst$kw$red),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,cljs.core.cst$kw$red)], 0)));
} else {
if(cljs.core.truth_(hide_tag_p1_QMARK_)){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,cljs.core.cst$kw$red),p2], 0)));
} else {
if(cljs.core.truth_(hide_tag_p2_QMARK_)){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,cljs.core.cst$kw$red)], 0)));
} else {
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));

}
}
}
});
instaparse.abnf.abnf_transformer = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neg,cljs.core.cst$kw$hide_DASH_tag_DASH_rule,cljs.core.cst$kw$look,cljs.core.cst$kw$bin_DASH_char,cljs.core.cst$kw$rule,cljs.core.cst$kw$rulename_DASH_right,cljs.core.cst$kw$NUM,cljs.core.cst$kw$char_DASH_val,cljs.core.cst$kw$hide,cljs.core.cst$kw$option,cljs.core.cst$kw$hex_DASH_char,cljs.core.cst$kw$bin_DASH_val,cljs.core.cst$kw$dec_DASH_val,cljs.core.cst$kw$concatenation,cljs.core.cst$kw$alternation,cljs.core.cst$kw$regexp,cljs.core.cst$kw$repetition,cljs.core.cst$kw$rulename_DASH_left,cljs.core.cst$kw$repeat,cljs.core.cst$kw$hex_DASH_val,cljs.core.cst$kw$dec_DASH_char],[instaparse.combinators_source.neg,(function (tag,rule){
return cljs.core.PersistentArrayMap.fromArray([tag,instaparse.combinators_source.hide_tag(rule)], true, false);
}),instaparse.combinators_source.look,(function() { 
var G__14164__delegate = function (cs){
var G__14157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
var G__14158 = (2);
return parseInt(G__14157,G__14158);
};
var G__14164 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__14165__i = 0, G__14165__a = new Array(arguments.length -  0);
while (G__14165__i < G__14165__a.length) {G__14165__a[G__14165__i] = arguments[G__14165__i + 0]; ++G__14165__i;}
  cs = new cljs.core.IndexedSeq(G__14165__a,0);
} 
return G__14164__delegate.call(this,cs);};
G__14164.cljs$lang$maxFixedArity = 0;
G__14164.cljs$lang$applyTo = (function (arglist__14166){
var cs = cljs.core.seq(arglist__14166);
return G__14164__delegate(cs);
});
G__14164.cljs$core$IFn$_invoke$arity$variadic = G__14164__delegate;
return G__14164;
})()
,cljs.core.hash_map,(function() { 
var G__14167__delegate = function (rest__14155_SHARP_){
if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_)){
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14155_SHARP_))));
} else {
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14155_SHARP_)));
}
};
var G__14167 = function (var_args){
var rest__14155_SHARP_ = null;
if (arguments.length > 0) {
var G__14168__i = 0, G__14168__a = new Array(arguments.length -  0);
while (G__14168__i < G__14168__a.length) {G__14168__a[G__14168__i] = arguments[G__14168__i + 0]; ++G__14168__i;}
  rest__14155_SHARP_ = new cljs.core.IndexedSeq(G__14168__a,0);
} 
return G__14167__delegate.call(this,rest__14155_SHARP_);};
G__14167.cljs$lang$maxFixedArity = 0;
G__14167.cljs$lang$applyTo = (function (arglist__14169){
var rest__14155_SHARP_ = cljs.core.seq(arglist__14169);
return G__14167__delegate(rest__14155_SHARP_);
});
G__14167.cljs$core$IFn$_invoke$arity$variadic = G__14167__delegate;
return G__14167;
})()
,(function() { 
var G__14170__delegate = function (rest__14156_SHARP_){
var G__14159 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14156_SHARP_);
return parseInt(G__14159);
};
var G__14170 = function (var_args){
var rest__14156_SHARP_ = null;
if (arguments.length > 0) {
var G__14171__i = 0, G__14171__a = new Array(arguments.length -  0);
while (G__14171__i < G__14171__a.length) {G__14171__a[G__14171__i] = arguments[G__14171__i + 0]; ++G__14171__i;}
  rest__14156_SHARP_ = new cljs.core.IndexedSeq(G__14171__a,0);
} 
return G__14170__delegate.call(this,rest__14156_SHARP_);};
G__14170.cljs$lang$maxFixedArity = 0;
G__14170.cljs$lang$applyTo = (function (arglist__14172){
var rest__14156_SHARP_ = cljs.core.seq(arglist__14172);
return G__14170__delegate(rest__14156_SHARP_);
});
G__14170.cljs$core$IFn$_invoke$arity$variadic = G__14170__delegate;
return G__14170;
})()
,(function() { 
var G__14173__delegate = function (cs){
return instaparse.combinators_source.string_ci(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs));
};
var G__14173 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__14174__i = 0, G__14174__a = new Array(arguments.length -  0);
while (G__14174__i < G__14174__a.length) {G__14174__a[G__14174__i] = arguments[G__14174__i + 0]; ++G__14174__i;}
  cs = new cljs.core.IndexedSeq(G__14174__a,0);
} 
return G__14173__delegate.call(this,cs);};
G__14173.cljs$lang$maxFixedArity = 0;
G__14173.cljs$lang$applyTo = (function (arglist__14175){
var cs = cljs.core.seq(arglist__14175);
return G__14173__delegate(cs);
});
G__14173.cljs$core$IFn$_invoke$arity$variadic = G__14173__delegate;
return G__14173;
})()
,instaparse.combinators_source.hide,instaparse.combinators_source.opt,(function() { 
var G__14176__delegate = function (cs){
var G__14160 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
var G__14161 = (16);
return parseInt(G__14160,G__14161);
};
var G__14176 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__14177__i = 0, G__14177__a = new Array(arguments.length -  0);
while (G__14177__i < G__14177__a.length) {G__14177__a[G__14177__i] = arguments[G__14177__i + 0]; ++G__14177__i;}
  cs = new cljs.core.IndexedSeq(G__14177__a,0);
} 
return G__14176__delegate.call(this,cs);};
G__14176.cljs$lang$maxFixedArity = 0;
G__14176.cljs$lang$applyTo = (function (arglist__14178){
var cs = cljs.core.seq(arglist__14178);
return G__14176__delegate(cs);
});
G__14176.cljs$core$IFn$_invoke$arity$variadic = G__14176__delegate;
return G__14176;
})()
,instaparse.abnf.get_char_combinator,instaparse.abnf.get_char_combinator,instaparse.combinators_source.cat,instaparse.combinators_source.alt,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.regexp,instaparse.cfg.process_regexp),(function() {
var G__14179 = null;
var G__14179__1 = (function (element){
return element;
});
var G__14179__2 = (function (repeat,element){
if(cljs.core.empty_QMARK_(repeat)){
return instaparse.combinators_source.star(element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(repeat),(2))){
return instaparse.combinators_source.rep(cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat),cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat),element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.plus(element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.opt(element);
} else {
return instaparse.combinators_source.rep((function (){var or__6554__auto__ = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return (0);
}
})(),(function (){var or__6554__auto__ = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return Infinity;
}
})(),element);

}
}
}
}
});
G__14179 = function(repeat,element){
switch(arguments.length){
case 1:
return G__14179__1.call(this,repeat);
case 2:
return G__14179__2.call(this,repeat,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14179.cljs$core$IFn$_invoke$arity$1 = G__14179__1;
G__14179.cljs$core$IFn$_invoke$arity$2 = G__14179__2;
return G__14179;
})()
,(function() { 
var G__14180__delegate = function (rest__14154_SHARP_){
if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14154_SHARP_)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14154_SHARP_));
}
};
var G__14180 = function (var_args){
var rest__14154_SHARP_ = null;
if (arguments.length > 0) {
var G__14181__i = 0, G__14181__a = new Array(arguments.length -  0);
while (G__14181__i < G__14181__a.length) {G__14181__a[G__14181__i] = arguments[G__14181__i + 0]; ++G__14181__i;}
  rest__14154_SHARP_ = new cljs.core.IndexedSeq(G__14181__a,0);
} 
return G__14180__delegate.call(this,rest__14154_SHARP_);};
G__14180.cljs$lang$maxFixedArity = 0;
G__14180.cljs$lang$applyTo = (function (arglist__14182){
var rest__14154_SHARP_ = cljs.core.seq(arglist__14182);
return G__14180__delegate(rest__14154_SHARP_);
});
G__14180.cljs$core$IFn$_invoke$arity$variadic = G__14180__delegate;
return G__14180;
})()
,(function() { 
var G__14183__delegate = function (items){
var G__14162 = cljs.core.count(items);
switch (G__14162) {
case (1):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*")){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,cljs.core.first(items),cljs.core.cst$kw$high,cljs.core.first(items)], null);

}

break;
case (2):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*")){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$high,cljs.core.second(items)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$low,cljs.core.first(items)], null);

}

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,cljs.core.first(items),cljs.core.cst$kw$high,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,(2))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count(items))].join('')));

}
};
var G__14183 = function (var_args){
var items = null;
if (arguments.length > 0) {
var G__14185__i = 0, G__14185__a = new Array(arguments.length -  0);
while (G__14185__i < G__14185__a.length) {G__14185__a[G__14185__i] = arguments[G__14185__i + 0]; ++G__14185__i;}
  items = new cljs.core.IndexedSeq(G__14185__a,0);
} 
return G__14183__delegate.call(this,items);};
G__14183.cljs$lang$maxFixedArity = 0;
G__14183.cljs$lang$applyTo = (function (arglist__14186){
var items = cljs.core.seq(arglist__14186);
return G__14183__delegate(items);
});
G__14183.cljs$core$IFn$_invoke$arity$variadic = G__14183__delegate;
return G__14183;
})()
,instaparse.abnf.get_char_combinator,(function() { 
var G__14187__delegate = function (cs){
var G__14163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
return parseInt(G__14163);
};
var G__14187 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__14188__i = 0, G__14188__a = new Array(arguments.length -  0);
while (G__14188__i < G__14188__a.length) {G__14188__a[G__14188__i] = arguments[G__14188__i + 0]; ++G__14188__i;}
  cs = new cljs.core.IndexedSeq(G__14188__a,0);
} 
return G__14187__delegate.call(this,cs);};
G__14187.cljs$lang$maxFixedArity = 0;
G__14187.cljs$lang$applyTo = (function (arglist__14189){
var cs = cljs.core.seq(arglist__14189);
return G__14187__delegate(cs);
});
G__14187.cljs$core$IFn$_invoke$arity$variadic = G__14187__delegate;
return G__14187;
})()
]);
instaparse.abnf.abnf_parser = instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hiccup,instaparse.cfg.ebnf(instaparse.abnf.abnf_grammar));
instaparse.abnf.rules__GT_grammar_map = (function instaparse$abnf$rules__GT_grammar_map(rules){
return instaparse.abnf.merge_core(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,instaparse.abnf.alt_preserving_hide_tag,rules));
});
/**
 * Takes an ABNF grammar specification string and returns the combinator version.
 *   If you give it the right-hand side of a rule, it will return the combinator equivalent.
 *   If you give it a series of rules, it will give you back a grammar map.   
 *   Useful for combining with other combinators.
 */
instaparse.abnf.abnf = (function instaparse$abnf$abnf(spec){
if(cljs.core.truth_(cljs.core.re_find(/=/,spec))){
var rule_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.cst$kw$rulelist,spec,false);
if((rule_tree instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14194_14198 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14195_14199 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14194_14198,_STAR_print_fn_STAR_14195_14199,sb__7540__auto__,rule_tree){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_14194_14198,_STAR_print_fn_STAR_14195_14199,sb__7540__auto__,rule_tree))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rule_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14195_14199;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14194_14198;
}
return [cljs.core.str(sb__7540__auto__)].join('');
})())].join('');
} else {
return instaparse.abnf.rules__GT_grammar_map(instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree));
}
} else {
var rhs_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.cst$kw$alternation,spec,false);
if((rhs_tree instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14196_14200 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14197_14201 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14196_14200,_STAR_print_fn_STAR_14197_14201,sb__7540__auto__,rhs_tree){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_14196_14200,_STAR_print_fn_STAR_14197_14201,sb__7540__auto__,rhs_tree))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rhs_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14197_14201;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14196_14200;
}
return [cljs.core.str(sb__7540__auto__)].join('');
})())].join('');
} else {
return instaparse.transform.transform(instaparse.abnf.abnf_transformer,rhs_tree);
}
}
});
instaparse.abnf.build_parser = (function instaparse$abnf$build_parser(spec,output_format){
var rule_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.cst$kw$rulelist,spec,false);
if((rule_tree instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14204_14206 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14205_14207 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14204_14206,_STAR_print_fn_STAR_14205_14207,sb__7540__auto__,rule_tree){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_14204_14206,_STAR_print_fn_STAR_14205_14207,sb__7540__auto__,rule_tree))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rule_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14205_14207;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14204_14206;
}
return [cljs.core.str(sb__7540__auto__)].join('');
})())].join('');
} else {
var rules = instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree);
var grammar_map = instaparse.abnf.rules__GT_grammar_map(rules);
var start_production = cljs.core.first(cljs.core.first(cljs.core.first(rules)));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
