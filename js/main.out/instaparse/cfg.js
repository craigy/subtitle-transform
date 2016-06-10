// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.cfg');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.reduction');
goog.require('instaparse.gll');
goog.require('clojure.string');
goog.require('cljs.reader');
/**
 * When true all string literal terminals in built grammar will be treated as case insensitive
 */
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = false;
instaparse.cfg.single_quoted_string = /'[^'\\]*(?:\\.[^'\\]*)*'/;
instaparse.cfg.single_quoted_regexp = /#'[^'\\]*(?:\\.[^'\\]*)*'/;
instaparse.cfg.double_quoted_string = /\"[^\"\\]*(?:\\.[^\"\\]*)*\"/;
instaparse.cfg.double_quoted_regexp = /#\"[^\"\\]*(?:\\.[^\"\\]*)*\"/;
instaparse.cfg.inside_comment = /(?:(?!(?:\(\*|\*\)))[\s\S])*/;
instaparse.cfg.ws = "[,\\s]*";
instaparse.cfg.opt_whitespace = instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace));
instaparse.cfg.cfg = instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hiccup,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neg,cljs.core.cst$kw$cat,cljs.core.cst$kw$ord,cljs.core.cst$kw$rule_DASH_separator,cljs.core.cst$kw$alt,cljs.core.cst$kw$look,cljs.core.cst$kw$rule,cljs.core.cst$kw$nt,cljs.core.cst$kw$hide_DASH_nt,cljs.core.cst$kw$inside_DASH_comment,cljs.core.cst$kw$star,cljs.core.cst$kw$string,cljs.core.cst$kw$rules,cljs.core.cst$kw$hide,cljs.core.cst$kw$paren,cljs.core.cst$kw$alt_DASH_or_DASH_ord,cljs.core.cst$kw$regexp,cljs.core.cst$kw$factor,cljs.core.cst$kw$comment,cljs.core.cst$kw$plus,cljs.core.cst$kw$epsilon,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$opt],[instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("!")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$factor)], 0)),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.cfg.opt_whitespace,instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.combinators_source.nt(cljs.core.cst$kw$look),instaparse.combinators_source.nt(cljs.core.cst$kw$neg)], 0)),instaparse.cfg.opt_whitespace], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$cat),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("/")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$cat)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(":"),instaparse.combinators_source.string(":="),instaparse.combinators_source.string("::="),instaparse.combinators_source.string("=")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$cat),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("|")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$cat)], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("&")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$factor)], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.combinators_source.nt(cljs.core.cst$kw$hide_DASH_nt)], 0)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs.core.cst$kw$rule_DASH_separator)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.combinators_source.hide(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(";"),instaparse.combinators_source.string(".")], 0)),instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace)], 0))], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.neg(instaparse.combinators_source.nt(cljs.core.cst$kw$epsilon)),instaparse.combinators_source.regexp("[^, \\r\\t\\n<>(){}\\[\\]+*?:=|'\"#&!;./]+")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.regexp(instaparse.cfg.inside_comment),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$comment),instaparse.combinators_source.regexp(instaparse.cfg.inside_comment)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("{")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("}"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("*"))], 0))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_string),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_string)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.cfg.opt_whitespace,instaparse.combinators_source.plus(instaparse.combinators_source.nt(cljs.core.cst$kw$rule))], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("(")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(")"))], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$alt),instaparse.combinators_source.nt(cljs.core.cst$kw$ord)], 0))),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_regexp),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_regexp)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.combinators_source.nt(cljs.core.cst$kw$string),instaparse.combinators_source.nt(cljs.core.cst$kw$regexp),instaparse.combinators_source.nt(cljs.core.cst$kw$opt),instaparse.combinators_source.nt(cljs.core.cst$kw$star),instaparse.combinators_source.nt(cljs.core.cst$kw$plus),instaparse.combinators_source.nt(cljs.core.cst$kw$paren),instaparse.combinators_source.nt(cljs.core.cst$kw$hide),instaparse.combinators_source.nt(cljs.core.cst$kw$epsilon)], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string("(*"),instaparse.combinators_source.nt(cljs.core.cst$kw$inside_DASH_comment),instaparse.combinators_source.string("*)")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("+"))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string("Epsilon"),instaparse.combinators_source.string("epsilon"),instaparse.combinators_source.string("EPSILON"),instaparse.combinators_source.string("eps"),instaparse.combinators_source.string("\u03B5")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.regexp(instaparse.cfg.ws),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$comment),instaparse.combinators_source.regexp(instaparse.cfg.ws)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("[")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("]"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("?"))], 0))], 0))]));
instaparse.cfg.tag = cljs.core.first;
instaparse.cfg.contents = cljs.core.next;
instaparse.cfg.content = cljs.core.fnext;
/**
 * Converts escaped single-quotes to unescaped, and unescaped double-quotes to escaped
 */
instaparse.cfg.escape = (function instaparse$cfg$escape(s){
var sq = cljs.core.seq(s);
var v = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first(sq);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
var G__14033 = c;
switch (G__14033) {
case "\\":
var temp__4655__auto____$1 = cljs.core.second(sq);
if(cljs.core.truth_(temp__4655__auto____$1)){
var c2 = temp__4655__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"'")){
var G__14035 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__14036 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c2);
sq = G__14035;
v = G__14036;
continue;
} else {
var G__14037 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__14038 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,c,cljs.core.array_seq([c2], 0));
sq = G__14037;
v = G__14038;
continue;
}
} else {
throw [cljs.core.str("Encountered backslash character at end of string:"),cljs.core.str(s)].join('');
}

break;
case "\"":
var G__14039 = cljs.core.next(sq);
var G__14040 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,"\\",cljs.core.array_seq(["\""], 0));
sq = G__14039;
v = G__14040;
continue;

break;
default:
var G__14041 = cljs.core.next(sq);
var G__14042 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c);
sq = G__14041;
v = G__14042;
continue;

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,v);
}
break;
}
});
instaparse.cfg.safe_read_string = (function instaparse$cfg$safe_read_string(s){
return cljs.reader.read_string_STAR_(cljs.reader.push_back_reader(s),null);
});
/**
 * Converts single quoted string to double-quoted
 */
instaparse.cfg.process_string = (function instaparse$cfg$process_string(s){
var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);
var final_string = instaparse.cfg.safe_read_string([cljs.core.str(remove_escaped_single_quotes),cljs.core.str("\"")].join(''));
return final_string;
});
/**
 * Converts single quoted regexp to double-quoted
 */
instaparse.cfg.process_regexp = (function instaparse$cfg$process_regexp(s){
var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),(cljs.core.count(s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);
var final_string = cljs.core.re_pattern(remove_escaped_single_quotes);
return final_string;
});
/**
 * Convert one parsed rule from the grammar into combinators
 */
instaparse.cfg.build_rule = (function instaparse$cfg$build_rule(tree){
while(true){
var G__14054 = ((((instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.tag.call(null,tree)) instanceof cljs.core.Keyword))?(instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.tag.call(null,tree)).fqn:null);
switch (G__14054) {
case "neg":
return instaparse.combinators_source.neg(instaparse$cfg$build_rule((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "cat":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse$cfg$build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "ord":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse$cfg$build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "alt":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.alt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse$cfg$build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "look":
return instaparse.combinators_source.look(instaparse$cfg$build_rule((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "rule":
var vec__14055 = (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree));
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14055,(0),null);
var alt_or_ord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14055,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.tag.call(null,nt)),cljs.core.cst$kw$hide_DASH_nt)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__14058 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.content.call(null,nt));
return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14058) : instaparse.cfg.content.call(null,G__14058));
})()),instaparse.combinators_source.hide_tag(instaparse$cfg$build_rule(alt_or_ord))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.content.call(null,nt))),instaparse$cfg$build_rule(alt_or_ord)], null);
}

break;
case "nt":
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "star":
return instaparse.combinators_source.star(instaparse$cfg$build_rule((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "string":
return (cljs.core.truth_(instaparse.cfg._STAR_case_insensitive_literals_STAR_)?instaparse.combinators_source.string_ci:instaparse.combinators_source.string).call(null,instaparse.cfg.process_string((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "hide":
return instaparse.combinators_source.hide(instaparse$cfg$build_rule((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "paren":
var G__14060 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
tree = G__14060;
continue;

break;
case "regexp":
return instaparse.combinators_source.regexp(instaparse.cfg.process_regexp((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "plus":
return instaparse.combinators_source.plus(instaparse$cfg$build_rule((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "epsilon":
return instaparse.combinators_source.Epsilon;

break;
case "opt":
return instaparse.combinators_source.opt(instaparse$cfg$build_rule((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.tag.call(null,tree)))].join('')));

}
break;
}
});
/**
 * Returns a sequence of all non-terminals in a parser built from combinators.
 */
instaparse.cfg.seq_nt = (function instaparse$cfg$seq_nt(parser){
while(true){
var G__14062 = (((cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__14062) {
case "neg":
var G__14064 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14064;
continue;

break;
case "cat":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse$cfg$seq_nt,cljs.core.array_seq([cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser)], 0));

break;
case "ord":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse$cfg$seq_nt,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser)], null)], 0));

break;
case "alt":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse$cfg$seq_nt,cljs.core.array_seq([cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser)], 0));

break;
case "look":
var G__14065 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14065;
continue;

break;
case "nt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(parser)], null);

break;
case "rep":
var G__14066 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14066;
continue;

break;
case "star":
var G__14067 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14067;
continue;

break;
case "string":
return cljs.core.PersistentVector.EMPTY;

break;
case "regexp":
return cljs.core.PersistentVector.EMPTY;

break;
case "plus":
var G__14068 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14068;
continue;

break;
case "epsilon":
return cljs.core.PersistentVector.EMPTY;

break;
case "string-ci":
return cljs.core.PersistentVector.EMPTY;

break;
case "char":
return cljs.core.PersistentVector.EMPTY;

break;
case "opt":
var G__14069 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14069;
continue;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
break;
}
});
/**
 * Throw error if grammar uses any invalid non-terminals in its productions
 */
instaparse.cfg.check_grammar = (function instaparse$cfg$check_grammar(grammar_map){
var valid_nts_14078 = cljs.core.set(cljs.core.keys(grammar_map));
var seq__14074_14079 = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.array_seq([cljs.core.vals(grammar_map)], 0))));
var chunk__14075_14080 = null;
var count__14076_14081 = (0);
var i__14077_14082 = (0);
while(true){
if((i__14077_14082 < count__14076_14081)){
var nt_14083 = chunk__14075_14080.cljs$core$IIndexed$_nth$arity$2(null,i__14077_14082);
if(cljs.core.truth_((valid_nts_14078.cljs$core$IFn$_invoke$arity$1 ? valid_nts_14078.cljs$core$IFn$_invoke$arity$1(nt_14083) : valid_nts_14078.call(null,nt_14083)))){
} else {
throw [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(nt_14083)].join(''),(1))),cljs.core.str(" occurs on the right-hand side of your grammar, but not on the left")].join('');
}

var G__14084 = seq__14074_14079;
var G__14085 = chunk__14075_14080;
var G__14086 = count__14076_14081;
var G__14087 = (i__14077_14082 + (1));
seq__14074_14079 = G__14084;
chunk__14075_14080 = G__14085;
count__14076_14081 = G__14086;
i__14077_14082 = G__14087;
continue;
} else {
var temp__4657__auto___14088 = cljs.core.seq(seq__14074_14079);
if(temp__4657__auto___14088){
var seq__14074_14089__$1 = temp__4657__auto___14088;
if(cljs.core.chunked_seq_QMARK_(seq__14074_14089__$1)){
var c__7365__auto___14090 = cljs.core.chunk_first(seq__14074_14089__$1);
var G__14091 = cljs.core.chunk_rest(seq__14074_14089__$1);
var G__14092 = c__7365__auto___14090;
var G__14093 = cljs.core.count(c__7365__auto___14090);
var G__14094 = (0);
seq__14074_14079 = G__14091;
chunk__14075_14080 = G__14092;
count__14076_14081 = G__14093;
i__14077_14082 = G__14094;
continue;
} else {
var nt_14095 = cljs.core.first(seq__14074_14089__$1);
if(cljs.core.truth_((valid_nts_14078.cljs$core$IFn$_invoke$arity$1 ? valid_nts_14078.cljs$core$IFn$_invoke$arity$1(nt_14095) : valid_nts_14078.call(null,nt_14095)))){
} else {
throw [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(nt_14095)].join(''),(1))),cljs.core.str(" occurs on the right-hand side of your grammar, but not on the left")].join('');
}

var G__14096 = cljs.core.next(seq__14074_14089__$1);
var G__14097 = null;
var G__14098 = (0);
var G__14099 = (0);
seq__14074_14079 = G__14096;
chunk__14075_14080 = G__14097;
count__14076_14081 = G__14098;
i__14077_14082 = G__14099;
continue;
}
} else {
}
}
break;
}

return grammar_map;
});
instaparse.cfg.build_parser = (function instaparse$cfg$build_parser(spec,output_format){
var rules = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.cst$kw$rules,spec,false);
if((rules instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14102_14104 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14103_14105 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14102_14104,_STAR_print_fn_STAR_14103_14105,sb__7540__auto__,rules){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_14102_14104,_STAR_print_fn_STAR_14103_14105,sb__7540__auto__,rules))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14103_14105;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14102_14104;
}
return [cljs.core.str(sb__7540__auto__)].join('');
})())].join('');
} else {
var productions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules);
var start_production = cljs.core.first(cljs.core.first(productions));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,productions))),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
instaparse.cfg.build_parser_from_combinators = (function instaparse$cfg$build_parser_from_combinators(grammar_map,output_format,start_production){
if((start_production == null)){
throw "When you build a parser from a map of parser combinators, you must provide a start production using the :start keyword argument.";
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
/**
 * Takes an EBNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.   
 * Useful for combining with other combinators.
 */
instaparse.cfg.ebnf = (function instaparse$cfg$ebnf(spec){
if(cljs.core.truth_(cljs.core.re_find(/[:=]/,spec))){
var rules = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.cst$kw$rules,spec,false);
if((rules instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14110_14114 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14111_14115 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14110_14114,_STAR_print_fn_STAR_14111_14115,sb__7540__auto__,rules){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_14110_14114,_STAR_print_fn_STAR_14111_14115,sb__7540__auto__,rules))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14111_14115;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14110_14114;
}
return [cljs.core.str(sb__7540__auto__)].join('');
})())].join('');
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules));
}
} else {
var rhs = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.cst$kw$alt_DASH_or_DASH_ord,spec,false);
if((rhs instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14112_14116 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14113_14117 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14112_14116,_STAR_print_fn_STAR_14113_14117,sb__7540__auto__,rhs){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_14112_14116,_STAR_print_fn_STAR_14113_14117,sb__7540__auto__,rhs))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rhs], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14113_14117;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14112_14116;
}
return [cljs.core.str(sb__7540__auto__)].join('');
})())].join('');
} else {
return instaparse.cfg.build_rule(cljs.core.first(rhs));
}
}
});
