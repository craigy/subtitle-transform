// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.combinators_source');
goog.require('cljs.core');
goog.require('instaparse.reduction');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$epsilon], null);
/**
 * Optional, i.e., parser?
 */
instaparse.combinators_source.opt = (function instaparse$combinators_source$opt(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * One or more, i.e., parser+
 */
instaparse.combinators_source.plus = (function instaparse$combinators_source$plus(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * Zero or more, i.e., parser*
 */
instaparse.combinators_source.star = (function instaparse$combinators_source$star(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * Between m and n repetitions
 */
instaparse.combinators_source.rep = (function instaparse$combinators_source$rep(m,n,parser){
if((m <= n)){
} else {
throw (new Error("Assert failed: (<= m n)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,cljs.core.cst$kw$rep,cljs.core.cst$kw$parser,parser,cljs.core.cst$kw$min,m,cljs.core.cst$kw$max,n], null);
}
});
/**
 * Alternation, i.e., parser1 | parser2 | parser3 | ...
 */
instaparse.combinators_source.alt = (function instaparse$combinators_source$alt(var_args){
var args__7636__auto__ = [];
var len__7629__auto___12719 = arguments.length;
var i__7630__auto___12720 = (0);
while(true){
if((i__7630__auto___12720 < len__7629__auto___12719)){
args__7636__auto__.push((arguments[i__7630__auto___12720]));

var G__12721 = (i__7630__auto___12720 + (1));
i__7630__auto___12720 = G__12721;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_(parsers))){
return cljs.core.first(parsers);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,parsers], null);

}
}
});

instaparse.combinators_source.alt.cljs$lang$maxFixedArity = (0);

instaparse.combinators_source.alt.cljs$lang$applyTo = (function (seq12718){
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12718));
});

instaparse.combinators_source.ord2 = (function instaparse$combinators_source$ord2(parser1,parser2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$ord,cljs.core.cst$kw$parser1,parser1,cljs.core.cst$kw$parser2,parser2], null);
});
/**
 * Ordered choice, i.e., parser1 / parser2
 */
instaparse.combinators_source.ord = (function instaparse$combinators_source$ord(var_args){
var args12722 = [];
var len__7629__auto___12727 = arguments.length;
var i__7630__auto___12728 = (0);
while(true){
if((i__7630__auto___12728 < len__7629__auto___12727)){
args12722.push((arguments[i__7630__auto___12728]));

var G__12729 = (i__7630__auto___12728 + (1));
i__7630__auto___12728 = G__12729;
continue;
} else {
}
break;
}

var G__12726 = args12722.length;
switch (G__12726) {
case 0:
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args12722.slice((1)),(0),null));
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7648__auto__);

}
});

instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0 = (function (){
return instaparse.combinators_source.Epsilon;
});

instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic = (function (parser1,parsers){
var parsers__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser1,instaparse.combinators_source.Epsilon))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([instaparse.combinators_source.Epsilon], true),parsers):parsers);
if(cljs.core.seq(parsers__$1)){
return instaparse.combinators_source.ord2(parser1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,parsers__$1));
} else {
return parser1;
}
});

instaparse.combinators_source.ord.cljs$lang$applyTo = (function (seq12723){
var G__12724 = cljs.core.first(seq12723);
var seq12723__$1 = cljs.core.next(seq12723);
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic(G__12724,seq12723__$1);
});

instaparse.combinators_source.ord.cljs$lang$maxFixedArity = (1);

/**
 * Concatenation, i.e., parser1 parser2 ...
 */
instaparse.combinators_source.cat = (function instaparse$combinators_source$cat(var_args){
var args__7636__auto__ = [];
var len__7629__auto___12732 = arguments.length;
var i__7630__auto___12733 = (0);
while(true){
if((i__7630__auto___12733 < len__7629__auto___12732)){
args__7636__auto__.push((arguments[i__7630__auto___12733]));

var G__12734 = (i__7630__auto___12733 + (1));
i__7630__auto___12733 = G__12734;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
var parsers__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([instaparse.combinators_source.Epsilon], true),parsers);
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_(parsers__$1))){
return cljs.core.first(parsers__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,parsers__$1], null);
}
}
});

instaparse.combinators_source.cat.cljs$lang$maxFixedArity = (0);

instaparse.combinators_source.cat.cljs$lang$applyTo = (function (seq12731){
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12731));
});

/**
 * Create a string terminal out of s
 */
instaparse.combinators_source.string = (function instaparse$combinators_source$string(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,s], null);
}
});
/**
 * Create a case-insensitive string terminal out of s
 */
instaparse.combinators_source.string_ci = (function instaparse$combinators_source$string_ci(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string_DASH_ci,cljs.core.cst$kw$string,s], null);
}
});
/**
 * Matches a Unicode code point or a range of code points
 */
instaparse.combinators_source.unicode_char = (function instaparse$combinators_source$unicode_char(var_args){
var args12735 = [];
var len__7629__auto___12738 = arguments.length;
var i__7630__auto___12739 = (0);
while(true){
if((i__7630__auto___12739 < len__7629__auto___12738)){
args12735.push((arguments[i__7630__auto___12739]));

var G__12740 = (i__7630__auto___12739 + (1));
i__7630__auto___12739 = G__12740;
continue;
} else {
}
break;
}

var G__12737 = args12735.length;
switch (G__12737) {
case 1:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12735.length)].join('')));

}
});

instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1 = (function (code_point){
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(code_point,code_point);
});

instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2 = (function (lo,hi){
if((lo <= hi)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Character range minimum must be less than or equal the maximum"),cljs.core.str("\n"),cljs.core.str("(<= lo hi)")].join('')));
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null);
});

instaparse.combinators_source.unicode_char.cljs$lang$maxFixedArity = 2;

/**
 * (str regexp) in clojurescript puts slashes around the result, unlike
 * in clojure. Work around that.
 */
instaparse.combinators_source.regexp__GT_str = (function instaparse$combinators_source$regexp__GT_str(r){
if(cljs.core.regexp_QMARK_(r)){
var s = [cljs.core.str(r)].join('');
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
} else {
return r;
}
});
/**
 * Create a regexp terminal out of regular expression r
 */
instaparse.combinators_source.regexp = (function instaparse$combinators_source$regexp(r){
var s = [cljs.core.str("^"),cljs.core.str(instaparse.combinators_source.regexp__GT_str(r))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"^")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$regexp,cljs.core.re_pattern(s)], null);
}
});
/**
 * Refers to a non-terminal defined by the grammar map
 */
instaparse.combinators_source.nt = (function instaparse$combinators_source$nt(s){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,s], null);
});
/**
 * Lookahead, i.e., &parser
 */
instaparse.combinators_source.look = (function instaparse$combinators_source$look(parser){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$look,cljs.core.cst$kw$parser,parser], null);
});
/**
 * Negative lookahead, i.e., !parser
 */
instaparse.combinators_source.neg = (function instaparse$combinators_source$neg(parser){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$neg,cljs.core.cst$kw$parser,parser], null);
});
/**
 * Hide the result of parser, i.e., <parser>
 */
instaparse.combinators_source.hide = (function instaparse$combinators_source$hide(parser){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$hide,true);
});
/**
 * Hide the tag associated with this rule.  
 *   Wrap this combinator around the entire right-hand side.
 */
instaparse.combinators_source.hide_tag = (function instaparse$combinators_source$hide_tag(parser){
return instaparse.reduction.red(parser,instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Tests whether parser was created with hide-tag combinator
 */
instaparse.combinators_source.hidden_tag_QMARK_ = (function instaparse$combinators_source$hidden_tag_QMARK_(parser){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Recursively undoes the effect of hide on one parser
 */
instaparse.combinators_source.unhide_content = (function instaparse$combinators_source$unhide_content(parser){
var parser__$1 = (cljs.core.truth_(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.cst$kw$hide):parser);
if(cljs.core.truth_(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.cst$kw$parser,instaparse$combinators_source$unhide_content(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.cst$kw$parsers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse$combinators_source$unhide_content,cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser__$1),cljs.core.cst$kw$ord)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser__$1,cljs.core.cst$kw$parser1,instaparse$combinators_source$unhide_content(cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser__$1)),cljs.core.array_seq([cljs.core.cst$kw$parser2,instaparse$combinators_source$unhide_content(cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser__$1))], 0));
} else {
return parser__$1;

}
}
}
});
/**
 * Recursively undoes the effect of hide on all parsers in the grammar
 */
instaparse.combinators_source.unhide_all_content = (function instaparse$combinators_source$unhide_all_content(grammar){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7334__auto__ = (function instaparse$combinators_source$unhide_all_content_$_iter__12763(s__12764){
return (new cljs.core.LazySeq(null,(function (){
var s__12764__$1 = s__12764;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12764__$1);
if(temp__4657__auto__){
var s__12764__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12764__$2)){
var c__7332__auto__ = cljs.core.chunk_first(s__12764__$2);
var size__7333__auto__ = cljs.core.count(c__7332__auto__);
var b__12766 = cljs.core.chunk_buffer(size__7333__auto__);
if((function (){var i__12765 = (0);
while(true){
if((i__12765 < size__7333__auto__)){
var vec__12775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7332__auto__,i__12765);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12775,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12775,(1),null);
cljs.core.chunk_append(b__12766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null));

var G__12781 = (i__12765 + (1));
i__12765 = G__12781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12766),instaparse$combinators_source$unhide_all_content_$_iter__12763(cljs.core.chunk_rest(s__12764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12766),null);
}
} else {
var vec__12778 = cljs.core.first(s__12764__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12778,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null),instaparse$combinators_source$unhide_all_content_$_iter__12763(cljs.core.rest(s__12764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7334__auto__(grammar);
})());
});
/**
 * Recursively undoes the effect of hide-tag
 */
instaparse.combinators_source.unhide_tags = (function instaparse$combinators_source$unhide_tags(reduction_type,grammar){
var temp__4655__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7334__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$combinators_source$unhide_tags_$_iter__12800(s__12801){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__12801__$1 = s__12801;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12801__$1);
if(temp__4657__auto__){
var s__12801__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12801__$2)){
var c__7332__auto__ = cljs.core.chunk_first(s__12801__$2);
var size__7333__auto__ = cljs.core.count(c__7332__auto__);
var b__12803 = cljs.core.chunk_buffer(size__7333__auto__);
if((function (){var i__12802 = (0);
while(true){
if((i__12802 < size__7333__auto__)){
var vec__12812 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7332__auto__,i__12802);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12812,(1),null);
cljs.core.chunk_append(b__12803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__12818 = (i__12802 + (1));
i__12802 = G__12818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12803),instaparse$combinators_source$unhide_tags_$_iter__12800(cljs.core.chunk_rest(s__12801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12803),null);
}
} else {
var vec__12815 = cljs.core.first(s__12801__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12815,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_tags_$_iter__12800(cljs.core.rest(s__12801__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__4655__auto__))
,null,null));
});})(reduction,temp__4655__auto__))
;
return iter__7334__auto__(grammar);
})());
} else {
throw [cljs.core.str("Invalid output format"),cljs.core.str(reduction_type),cljs.core.str(". Use :enlive or :hiccup.")].join('');
}
});
/**
 * Recursively undoes the effect of both hide and hide-tag
 */
instaparse.combinators_source.unhide_all = (function instaparse$combinators_source$unhide_all(reduction_type,grammar){
var temp__4655__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7334__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$combinators_source$unhide_all_$_iter__12837(s__12838){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__12838__$1 = s__12838;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12838__$1);
if(temp__4657__auto__){
var s__12838__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12838__$2)){
var c__7332__auto__ = cljs.core.chunk_first(s__12838__$2);
var size__7333__auto__ = cljs.core.count(c__7332__auto__);
var b__12840 = cljs.core.chunk_buffer(size__7333__auto__);
if((function (){var i__12839 = (0);
while(true){
if((i__12839 < size__7333__auto__)){
var vec__12849 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7332__auto__,i__12839);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12849,(1),null);
cljs.core.chunk_append(b__12840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__12855 = (i__12839 + (1));
i__12839 = G__12855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12840),instaparse$combinators_source$unhide_all_$_iter__12837(cljs.core.chunk_rest(s__12838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12840),null);
}
} else {
var vec__12852 = cljs.core.first(s__12838__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_all_$_iter__12837(cljs.core.rest(s__12838__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__4655__auto__))
,null,null));
});})(reduction,temp__4655__auto__))
;
return iter__7334__auto__(grammar);
})());
} else {
throw [cljs.core.str("Invalid output format"),cljs.core.str(reduction_type),cljs.core.str(". Use :enlive or :hiccup.")].join('');
}
});
instaparse.combinators_source.auto_whitespace_parser = (function instaparse$combinators_source$auto_whitespace_parser(parser,ws_parser){
var G__12862 = (((cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__12862) {
case "neg":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),instaparse$combinators_source$auto_whitespace_parser,ws_parser);

break;
case "cat":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$parsers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12862){
return (function (p1__12856_SHARP_){
return instaparse$combinators_source$auto_whitespace_parser(p1__12856_SHARP_,ws_parser);
});})(G__12862))
,cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser,cljs.core.cst$kw$parser1,instaparse$combinators_source$auto_whitespace_parser(cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser),ws_parser),cljs.core.array_seq([cljs.core.cst$kw$parser2,instaparse$combinators_source$auto_whitespace_parser(cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser),ws_parser)], 0));

break;
case "alt":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$parsers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12862){
return (function (p1__12856_SHARP_){
return instaparse$combinators_source$auto_whitespace_parser(p1__12856_SHARP_,ws_parser);
});})(G__12862))
,cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "look":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),instaparse$combinators_source$auto_whitespace_parser,ws_parser);

break;
case "nt":
return parser;

break;
case "rep":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),instaparse$combinators_source$auto_whitespace_parser,ws_parser);

break;
case "star":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),instaparse$combinators_source$auto_whitespace_parser,ws_parser);

break;
case "string":
if(cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.cst$kw$red)], 0)),cljs.core.cst$kw$red,cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,parser], 0));
}

break;
case "regexp":
if(cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.cst$kw$red)], 0)),cljs.core.cst$kw$red,cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,parser], 0));
}

break;
case "plus":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),instaparse$combinators_source$auto_whitespace_parser,ws_parser);

break;
case "epsilon":
return parser;

break;
case "string-ci":
if(cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.cst$kw$red)], 0)),cljs.core.cst$kw$red,cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,parser], 0));
}

break;
case "opt":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),instaparse$combinators_source$auto_whitespace_parser,ws_parser);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
});
instaparse.combinators_source.auto_whitespace = (function instaparse$combinators_source$auto_whitespace(grammar,start,grammar_ws,start_ws){
var ws_parser = instaparse.combinators_source.hide(instaparse.combinators_source.opt(instaparse.combinators_source.nt(start_ws)));
var grammar_ws__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grammar_ws,start_ws,instaparse.combinators_source.hide_tag((grammar_ws.cljs$core$IFn$_invoke$arity$1 ? grammar_ws.cljs$core$IFn$_invoke$arity$1(start_ws) : grammar_ws.call(null,start_ws))));
var modified_grammar = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7334__auto__ = ((function (ws_parser,grammar_ws__$1){
return (function instaparse$combinators_source$auto_whitespace_$_iter__12882(s__12883){
return (new cljs.core.LazySeq(null,((function (ws_parser,grammar_ws__$1){
return (function (){
var s__12883__$1 = s__12883;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12883__$1);
if(temp__4657__auto__){
var s__12883__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12883__$2)){
var c__7332__auto__ = cljs.core.chunk_first(s__12883__$2);
var size__7333__auto__ = cljs.core.count(c__7332__auto__);
var b__12885 = cljs.core.chunk_buffer(size__7333__auto__);
if((function (){var i__12884 = (0);
while(true){
if((i__12884 < size__7333__auto__)){
var vec__12894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7332__auto__,i__12884);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12894,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12894,(1),null);
cljs.core.chunk_append(b__12885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null));

var G__12900 = (i__12884 + (1));
i__12884 = G__12900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12885),instaparse$combinators_source$auto_whitespace_$_iter__12882(cljs.core.chunk_rest(s__12883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12885),null);
}
} else {
var vec__12897 = cljs.core.first(s__12883__$2);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12897,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12897,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null),instaparse$combinators_source$auto_whitespace_$_iter__12882(cljs.core.rest(s__12883__$2)));
}
} else {
return null;
}
break;
}
});})(ws_parser,grammar_ws__$1))
,null,null));
});})(ws_parser,grammar_ws__$1))
;
return iter__7334__auto__(grammar);
})());
var final_grammar = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modified_grammar,start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)),cljs.core.cst$kw$red),ws_parser], 0)),cljs.core.cst$kw$red,cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)))));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([final_grammar,grammar_ws__$1], 0));
});
