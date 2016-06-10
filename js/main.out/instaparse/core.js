// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.core');
goog.require('cljs.core');
goog.require('instaparse.transform');
goog.require('instaparse.combinators_source');
goog.require('instaparse.abnf');
goog.require('instaparse.gll');
goog.require('instaparse.line_col');
goog.require('instaparse.print');
goog.require('instaparse.cfg');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');
goog.require('instaparse.repeat');
instaparse.core._STAR_default_output_format_STAR_ = cljs.core.cst$kw$hiccup;
/**
 * Changes the default output format.  Input should be :hiccup or :enlive
 */
instaparse.core.set_default_output_format_BANG_ = (function instaparse$core$set_default_output_format_BANG_(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hiccup,null,cljs.core.cst$kw$enlive,null], null), null).call(null,type))){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} type)"));
}

return instaparse.core._STAR_default_output_format_STAR_ = type;
});
instaparse.core._STAR_default_input_format_STAR_ = cljs.core.cst$kw$ebnf;
/**
 * Changes the default input format.  Input should be :abnf or :ebnf
 */
instaparse.core.set_default_input_format_BANG_ = (function instaparse$core$set_default_input_format_BANG_(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ebnf,null,cljs.core.cst$kw$abnf,null], null), null).call(null,type))){
} else {
throw (new Error("Assert failed: (#{:ebnf :abnf} type)"));
}

return instaparse.core._STAR_default_input_format_STAR_ = type;
});

instaparse.core.unhide_parser = (function instaparse$core$unhide_parser(parser,unhide){
var G__14305 = unhide;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14305)){
return parser;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content,G__14305)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_all_content(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tags,G__14305)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_tags(cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$all,G__14305)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_all(cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unhide)].join('')));

}
}
}
}
});
/**
 * Use parser to parse the text.  Returns first parse tree found
 * that completely parses the text.  If no parse tree is possible, returns
 * a Failure object.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * :optimize :memory   (when possible, employ strategy to use less memory)
 */
instaparse.core.parse = (function instaparse$core$parse(var_args){
var args__7636__auto__ = [];
var len__7629__auto___14313 = arguments.length;
var i__7630__auto___14314 = (0);
while(true){
if((i__7630__auto___14314 < len__7629__auto___14313)){
args__7636__auto__.push((arguments[i__7630__auto___14314]));

var G__14315 = (i__7630__auto___14314 + (1));
i__7630__auto___14314 = G__14315;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((2) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((2)),(0),null)):null);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7637__auto__);
});

instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__14309){
var map__14310 = p__14309;
var map__14310__$1 = ((((!((map__14310 == null)))?((((map__14310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14310):map__14310);
var options = map__14310__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$tags,null,cljs.core.cst$kw$content,null,cljs.core.cst$kw$all,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,cljs.core.cst$kw$memory,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$optimize))){
} else {
throw (new Error("Assert failed: (contains? #{nil :memory} (get options :optimize))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$partial,false);
var optimize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$optimize,false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parse_total(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__14312 = cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__14312) : instaparse.reduction.node_builders.call(null,G__14312));
})());
} else {
if(cljs.core.truth_((function (){var and__6542__auto__ = optimize_QMARK_;
if(cljs.core.truth_(and__6542__auto__)){
return cljs.core.not(partial_QMARK_);
} else {
return and__6542__auto__;
}
})())){
var result = instaparse.repeat.try_repeating_parse_strategy(parser__$1,text,start_production);
if(cljs.core.truth_((instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : instaparse.core.failure_QMARK_.call(null,result)))){
return instaparse.gll.parse(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else {
return result;
}
} else {
return instaparse.gll.parse(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
});

instaparse.core.parse.cljs$lang$maxFixedArity = (2);

instaparse.core.parse.cljs$lang$applyTo = (function (seq14306){
var G__14307 = cljs.core.first(seq14306);
var seq14306__$1 = cljs.core.next(seq14306);
var G__14308 = cljs.core.first(seq14306__$1);
var seq14306__$2 = cljs.core.next(seq14306__$1);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(G__14307,G__14308,seq14306__$2);
});

/**
 * Use parser to parse the text.  Returns lazy seq of all parse trees
 * that completely parse the text.  If no parse tree is possible, returns
 * () with a Failure object attached as metadata.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 */
instaparse.core.parses = (function instaparse$core$parses(var_args){
var args__7636__auto__ = [];
var len__7629__auto___14323 = arguments.length;
var i__7630__auto___14324 = (0);
while(true){
if((i__7630__auto___14324 < len__7629__auto___14323)){
args__7636__auto__.push((arguments[i__7630__auto___14324]));

var G__14325 = (i__7630__auto___14324 + (1));
i__7630__auto___14324 = G__14325;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((2) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((2)),(0),null)):null);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7637__auto__);
});

instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__14319){
var map__14320 = p__14319;
var map__14320__$1 = ((((!((map__14320 == null)))?((((map__14320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14320):map__14320);
var options = map__14320__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$tags,null,cljs.core.cst$kw$content,null,cljs.core.cst$kw$all,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$partial,false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parses_total(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__14322 = cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__14322) : instaparse.reduction.node_builders.call(null,G__14322));
})());
} else {
return instaparse.gll.parses(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
});

instaparse.core.parses.cljs$lang$maxFixedArity = (2);

instaparse.core.parses.cljs$lang$applyTo = (function (seq14316){
var G__14317 = cljs.core.first(seq14316);
var seq14316__$1 = cljs.core.next(seq14316);
var G__14318 = cljs.core.first(seq14316__$1);
var seq14316__$2 = cljs.core.next(seq14316__$1);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic(G__14317,G__14318,seq14316__$2);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.core.Parser = (function (grammar,start_production,output_format,__meta,__extmap,__hash){
this.grammar = grammar;
this.start_production = start_production;
this.output_format = output_format;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7176__auto__,k__7177__auto__){
var self__ = this;
var this__7176__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7176__auto____$1,k__7177__auto__,null);
});

instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7178__auto__,k14327,else__7179__auto__){
var self__ = this;
var this__7178__auto____$1 = this;
var G__14330 = (((k14327 instanceof cljs.core.Keyword))?k14327.fqn:null);
switch (G__14330) {
case "grammar":
return self__.grammar;

break;
case "start-production":
return self__.start_production;

break;
case "output-format":
return self__.output_format;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14327,else__7179__auto__);

}
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7190__auto__,writer__7191__auto__,opts__7192__auto__){
var self__ = this;
var this__7190__auto____$1 = this;
var pr_pair__7193__auto__ = ((function (this__7190__auto____$1){
return (function (keyval__7194__auto__){
return cljs.core.pr_sequential_writer(writer__7191__auto__,cljs.core.pr_writer,""," ","",opts__7192__auto__,keyval__7194__auto__);
});})(this__7190__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7191__auto__,pr_pair__7193__auto__,"#instaparse.core.Parser{",", ","}",opts__7192__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_production,self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_format,self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IIterable$ = true;

instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14326){
var self__ = this;
var G__14326__$1 = this;
return (new cljs.core.RecordIter((0),G__14326__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grammar,cljs.core.cst$kw$start_DASH_production,cljs.core.cst$kw$output_DASH_format], null),cljs.core._iterator(self__.__extmap)));
});

instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7174__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
return self__.__meta;
});

instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7170__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7180__auto__){
var self__ = this;
var this__7180__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7171__auto__){
var self__ = this;
var this__7171__auto____$1 = this;
var h__6989__auto__ = self__.__hash;
if(!((h__6989__auto__ == null))){
return h__6989__auto__;
} else {
var h__6989__auto____$1 = cljs.core.hash_imap(this__7171__auto____$1);
self__.__hash = h__6989__auto____$1;

return h__6989__auto____$1;
}
});

instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7172__auto__,other__7173__auto__){
var self__ = this;
var this__7172__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6542__auto__ = other__7173__auto__;
if(cljs.core.truth_(and__6542__auto__)){
var and__6542__auto____$1 = (this__7172__auto____$1.constructor === other__7173__auto__.constructor);
if(and__6542__auto____$1){
return cljs.core.equiv_map(this__7172__auto____$1,other__7173__auto__);
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
})())){
return true;
} else {
return false;
}
});

instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7185__auto__,k__7186__auto__){
var self__ = this;
var this__7185__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start_DASH_production,null,cljs.core.cst$kw$grammar,null,cljs.core.cst$kw$output_DASH_format,null], null), null),k__7186__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7185__auto____$1),self__.__meta),k__7186__auto__);
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7186__auto__)),null));
}
});

instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7183__auto__,k__7184__auto__,G__14326){
var self__ = this;
var this__7183__auto____$1 = this;
var pred__14331 = cljs.core.keyword_identical_QMARK_;
var expr__14332 = k__7184__auto__;
if(cljs.core.truth_((pred__14331.cljs$core$IFn$_invoke$arity$2 ? pred__14331.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$grammar,expr__14332) : pred__14331.call(null,cljs.core.cst$kw$grammar,expr__14332)))){
return (new instaparse.core.Parser(G__14326,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14331.cljs$core$IFn$_invoke$arity$2 ? pred__14331.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_production,expr__14332) : pred__14331.call(null,cljs.core.cst$kw$start_DASH_production,expr__14332)))){
return (new instaparse.core.Parser(self__.grammar,G__14326,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14331.cljs$core$IFn$_invoke$arity$2 ? pred__14331.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$output_DASH_format,expr__14332) : pred__14331.call(null,cljs.core.cst$kw$output_DASH_format,expr__14332)))){
return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__14326,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7184__auto__,G__14326),null));
}
}
}
});

instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7188__auto__){
var self__ = this;
var this__7188__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_production,self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_format,self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7175__auto__,G__14326){
var self__ = this;
var this__7175__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__14326,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7181__auto__,entry__7182__auto__){
var self__ = this;
var this__7181__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7182__auto__)){
return cljs.core._assoc(this__7181__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7181__auto____$1,entry__7182__auto__);
}
});

instaparse.core.Parser.prototype.call = (function() {
var G__14335 = null;
var G__14335__2 = (function (self__,text){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse(parser,text);
});
var G__14335__4 = (function (self__,text,key1,val1){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1], 0));
});
var G__14335__6 = (function (self__,text,key1,val1,key2,val2){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1,key2,val2], 0));
});
var G__14335__8 = (function (self__,text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1,key2,val2,key3,val3], 0));
});
G__14335 = function(self__,text,key1,val1,key2,val2,key3,val3){
switch(arguments.length){
case 2:
return G__14335__2.call(this,self__,text);
case 4:
return G__14335__4.call(this,self__,text,key1,val1);
case 6:
return G__14335__6.call(this,self__,text,key1,val1,key2,val2);
case 8:
return G__14335__8.call(this,self__,text,key1,val1,key2,val2,key3,val3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14335.cljs$core$IFn$_invoke$arity$2 = G__14335__2;
G__14335.cljs$core$IFn$_invoke$arity$4 = G__14335__4;
G__14335.cljs$core$IFn$_invoke$arity$6 = G__14335__6;
G__14335.cljs$core$IFn$_invoke$arity$8 = G__14335__8;
return G__14335;
})()
;

instaparse.core.Parser.prototype.apply = (function (self__,args14329){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14329)));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){
var self__ = this;
var parser = this;
return instaparse.core.parse(parser,text);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1,key2,val2], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1,key2,val2,key3,val3], 0));
});

instaparse.core.Parser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$grammar,cljs.core.cst$sym$start_DASH_production,cljs.core.cst$sym$output_DASH_format], null);
});

instaparse.core.Parser.cljs$lang$type = true;

instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__7210__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.core/Parser");
});

instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__7210__auto__,writer__7211__auto__){
return cljs.core._write(writer__7211__auto__,"instaparse.core/Parser");
});

instaparse.core.__GT_Parser = (function instaparse$core$__GT_Parser(grammar,start_production,output_format){
return (new instaparse.core.Parser(grammar,start_production,output_format,null,null,null));
});

instaparse.core.map__GT_Parser = (function instaparse$core$map__GT_Parser(G__14328){
return (new instaparse.core.Parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(G__14328),cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(G__14328),cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(G__14328),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14328,cljs.core.cst$kw$grammar,cljs.core.array_seq([cljs.core.cst$kw$start_DASH_production,cljs.core.cst$kw$output_DASH_format], 0)),null));
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = true;

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){
var parser__$1 = this;
return cljs.core._write(writer,instaparse.print.Parser__GT_str(parser__$1));
});
/**
 * Takes a string specification of a context-free grammar,
 *   or a URI for a text file containing such a specification,
 *   or a map of parser combinators and returns a parser for that grammar.
 * 
 *   Optional keyword arguments:
 *   :input-format :ebnf
 *   or
 *   :input-format :abnf
 * 
 *   :output-format :enlive
 *   or
 *   :output-format :hiccup
 * 
 *   :start :keyword (where :keyword is name of starting production rule)
 * 
 *   :string-ci true (treat all string literals as case insensitive)
 * 
 *   :no-slurp (ignored in cljs as slurping is not supported)
 * 
 *   :auto-whitespace (:standard or :comma)
 *   or
 *   :auto-whitespace custom-whitespace-parser
 */
instaparse.core.parser = (function instaparse$core$parser(var_args){
var args__7636__auto__ = [];
var len__7629__auto___14345 = arguments.length;
var i__7630__auto___14346 = (0);
while(true){
if((i__7630__auto___14346 < len__7629__auto___14345)){
args__7636__auto__.push((arguments[i__7630__auto___14346]));

var G__14347 = (i__7630__auto___14346 + (1));
i__7630__auto___14346 = G__14347;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = (function (grammar_specification,p__14338){
var map__14339 = p__14338;
var map__14339__$1 = ((((!((map__14339 == null)))?((((map__14339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14339):map__14339);
var options = map__14339__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,cljs.core.cst$kw$ebnf,null,cljs.core.cst$kw$abnf,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$input_DASH_format))){
} else {
throw (new Error("Assert failed: (contains? #{nil :ebnf :abnf} (get options :input-format))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,cljs.core.cst$kw$hiccup,null,cljs.core.cst$kw$enlive,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$output_DASH_format))){
} else {
throw (new Error("Assert failed: (contains? #{nil :hiccup :enlive} (get options :output-format))"));
}

if((function (){var ws_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$auto_DASH_whitespace);
return ((ws_parser == null)) || (cljs.core.contains_QMARK_(instaparse.core.standard_whitespace_parsers,ws_parser)) || ((cljs.core.map_QMARK_(ws_parser)) && (cljs.core.contains_QMARK_(ws_parser,cljs.core.cst$kw$grammar)) && (cljs.core.contains_QMARK_(ws_parser,cljs.core.cst$kw$start_DASH_production)));
})()){
} else {
throw (new Error("Assert failed: (let [ws-parser (get options :auto-whitespace)] (or (nil? ws-parser) (contains? standard-whitespace-parsers ws-parser) (and (map? ws-parser) (contains? ws-parser :grammar) (contains? ws-parser :start-production))))"));
}

var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$input_DASH_format,instaparse.core._STAR_default_input_format_STAR_);
var build_parser = (function (){var G__14341 = (((input_format instanceof cljs.core.Keyword))?input_format.fqn:null);
switch (G__14341) {
case "abnf":
return instaparse.abnf.build_parser;

break;
case "ebnf":
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$string_DASH_ci))){
return ((function (G__14341,input_format,map__14339,map__14339__$1,options){
return (function (spec,output_format){
var _STAR_case_insensitive_literals_STAR_14342 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = true;

try{return instaparse.cfg.build_parser(spec,output_format);
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR_14342;
}});
;})(G__14341,input_format,map__14339,map__14339__$1,options))
} else {
return instaparse.cfg.build_parser;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(input_format)].join('')));

}
})();
var output_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$output_DASH_format,instaparse.core._STAR_default_output_format_STAR_);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,null);
var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser = (build_parser.cljs$core$IFn$_invoke$arity$2 ? build_parser.cljs$core$IFn$_invoke$arity$2(grammar_specification,output_format) : build_parser.call(null,grammar_specification,output_format));
if(cljs.core.truth_(start)){
return instaparse.core.map__GT_Parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$start_DASH_production,start));
} else {
return instaparse.core.map__GT_Parser(parser);
}
})():((cljs.core.map_QMARK_(grammar_specification))?(function (){var parser = instaparse.cfg.build_parser_from_combinators(grammar_specification,output_format,start);
return instaparse.core.map__GT_Parser(parser);
})():((cljs.core.vector_QMARK_(grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:(grammar_specification.cljs$core$IFn$_invoke$arity$1 ? grammar_specification.cljs$core$IFn$_invoke$arity$1((0)) : grammar_specification.call(null,(0))));
var parser = instaparse.cfg.build_parser_from_combinators(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,grammar_specification),output_format,start__$1);
return instaparse.core.map__GT_Parser(parser);
})():null)));
var auto_whitespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$auto_DASH_whitespace);
var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);
var temp__4655__auto__ = whitespace_parser;
if(cljs.core.truth_(temp__4655__auto__)){
var map__14343 = temp__4655__auto__;
var map__14343__$1 = ((((!((map__14343 == null)))?((((map__14343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14343):map__14343);
var ws_grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14343__$1,cljs.core.cst$kw$grammar);
var ws_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14343__$1,cljs.core.cst$kw$start_DASH_production);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(built_parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.auto_whitespace(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(built_parser),cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(built_parser),ws_grammar,ws_start));
} else {
return built_parser;
}
});

instaparse.core.parser.cljs$lang$maxFixedArity = (1);

instaparse.core.parser.cljs$lang$applyTo = (function (seq14336){
var G__14337 = cljs.core.first(seq14336);
var seq14336__$1 = cljs.core.next(seq14336);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(G__14337,seq14336__$1);
});

/**
 * Tests whether a parse result is a failure.
 */
instaparse.core.failure_QMARK_ = (function instaparse$core$failure_QMARK_(result){
return ((result instanceof instaparse.gll.Failure)) || ((cljs.core.meta(result) instanceof instaparse.gll.Failure));
});
/**
 * Extracts failure object from failed parse result.
 */
instaparse.core.get_failure = (function instaparse$core$get_failure(result){
if((result instanceof instaparse.gll.Failure)){
return result;
} else {
if((cljs.core.meta(result) instanceof instaparse.gll.Failure)){
return cljs.core.meta(result);
} else {
return null;

}
}
});
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$standard,instaparse.core.parser("whitespace = #'\\s+'"),cljs.core.cst$kw$comma,instaparse.core.parser("whitespace = #'[,\\s]+'")], null);
