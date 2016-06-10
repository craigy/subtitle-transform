// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.auto_flatten_seq');
goog.require('goog.i18n.uChar');
goog.require('instaparse.print');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');

/**
 * @interface
 */
instaparse.gll.ISegment = function(){};

instaparse.gll.subsegment = (function instaparse$gll$subsegment(this$,start_index,end_index_minus_one){
if((!((this$ == null))) && (!((this$.instaparse$gll$ISegment$subsegment$arity$3 == null)))){
return this$.instaparse$gll$ISegment$subsegment$arity$3(this$,start_index,end_index_minus_one);
} else {
var x__7217__auto__ = (((this$ == null))?null:this$);
var m__7218__auto__ = (instaparse.gll.subsegment[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$3(this$,start_index,end_index_minus_one) : m__7218__auto__.call(null,this$,start_index,end_index_minus_one));
} else {
var m__7218__auto____$1 = (instaparse.gll.subsegment["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,start_index,end_index_minus_one) : m__7218__auto____$1.call(null,this$,start_index,end_index_minus_one));
} else {
throw cljs.core.missing_protocol("ISegment.subsegment",this$);
}
}
}
});

instaparse.gll.toString = (function instaparse$gll$toString(this$){
if((!((this$ == null))) && (!((this$.instaparse$gll$ISegment$toString$arity$1 == null)))){
return this$.instaparse$gll$ISegment$toString$arity$1(this$);
} else {
var x__7217__auto__ = (((this$ == null))?null:this$);
var m__7218__auto__ = (instaparse.gll.toString[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7218__auto__.call(null,this$));
} else {
var m__7218__auto____$1 = (instaparse.gll.toString["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7218__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISegment.toString",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {instaparse.gll.ISegment}
*/
instaparse.gll.Segment = (function (text,offset,count){
this.text = text;
this.offset = offset;
this.count = count;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$ = true;

instaparse.gll.Segment.prototype.instaparse$gll$ISegment$subsegment$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
return (new instaparse.gll.Segment(self__.text,(self__.offset + start),(end - start)));
});

instaparse.gll.Segment.prototype.instaparse$gll$ISegment$toString$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(self__.text,self__.offset,(self__.offset + self__.count));
});

instaparse.gll.Segment.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.count;
});

instaparse.gll.Segment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$text,cljs.core.cst$sym$offset,cljs.core.cst$sym$count], null);
});

instaparse.gll.Segment.cljs$lang$type = true;

instaparse.gll.Segment.cljs$lang$ctorStr = "instaparse.gll/Segment";

instaparse.gll.Segment.cljs$lang$ctorPrWriter = (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"instaparse.gll/Segment");
});

instaparse.gll.__GT_Segment = (function instaparse$gll$__GT_Segment(text,offset,count){
return (new instaparse.gll.Segment(text,offset,count));
});

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__13431 = (((cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__13431) {
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_parse.call(null,parser,index,tramp));

break;
case "nt":
return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__13434 = (((cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__13434) {
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_full_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_full_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp));

break;
case "nt":
return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_full_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_full_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_full_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_full_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_full_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_full_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_full_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Failure = (function (index,reason,__meta,__extmap,__hash){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7176__auto__,k__7177__auto__){
var self__ = this;
var this__7176__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7176__auto____$1,k__7177__auto__,null);
});

instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7178__auto__,k13437,else__7179__auto__){
var self__ = this;
var this__7178__auto____$1 = this;
var G__13439 = (((k13437 instanceof cljs.core.Keyword))?k13437.fqn:null);
switch (G__13439) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13437,else__7179__auto__);

}
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7190__auto__,writer__7191__auto__,opts__7192__auto__){
var self__ = this;
var this__7190__auto____$1 = this;
var pr_pair__7193__auto__ = ((function (this__7190__auto____$1){
return (function (keyval__7194__auto__){
return cljs.core.pr_sequential_writer(writer__7191__auto__,cljs.core.pr_writer,""," ","",opts__7192__auto__,keyval__7194__auto__);
});})(this__7190__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7191__auto__,pr_pair__7193__auto__,"#instaparse.gll.Failure{",", ","}",opts__7192__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reason,self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IIterable$ = true;

instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13436){
var self__ = this;
var G__13436__$1 = this;
return (new cljs.core.RecordIter((0),G__13436__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index,cljs.core.cst$kw$reason], null),cljs.core._iterator(self__.__extmap)));
});

instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7174__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7170__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7180__auto__){
var self__ = this;
var this__7180__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7171__auto__){
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

instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7172__auto__,other__7173__auto__){
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

instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7185__auto__,k__7186__auto__){
var self__ = this;
var this__7185__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$index,null,cljs.core.cst$kw$reason,null], null), null),k__7186__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7185__auto____$1),self__.__meta),k__7186__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7186__auto__)),null));
}
});

instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7183__auto__,k__7184__auto__,G__13436){
var self__ = this;
var this__7183__auto____$1 = this;
var pred__13440 = cljs.core.keyword_identical_QMARK_;
var expr__13441 = k__7184__auto__;
if(cljs.core.truth_((pred__13440.cljs$core$IFn$_invoke$arity$2 ? pred__13440.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$index,expr__13441) : pred__13440.call(null,cljs.core.cst$kw$index,expr__13441)))){
return (new instaparse.gll.Failure(G__13436,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13440.cljs$core$IFn$_invoke$arity$2 ? pred__13440.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reason,expr__13441) : pred__13440.call(null,cljs.core.cst$kw$reason,expr__13441)))){
return (new instaparse.gll.Failure(self__.index,G__13436,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7184__auto__,G__13436),null));
}
}
});

instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7188__auto__){
var self__ = this;
var this__7188__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reason,self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7175__auto__,G__13436){
var self__ = this;
var this__7175__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__13436,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7181__auto__,entry__7182__auto__){
var self__ = this;
var this__7181__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7182__auto__)){
return cljs.core._assoc(this__7181__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7181__auto____$1,entry__7182__auto__);
}
});

instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index,cljs.core.cst$sym$reason], null);
});

instaparse.gll.Failure.cljs$lang$type = true;

instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__7210__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Failure");
});

instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__7210__auto__,writer__7211__auto__){
return cljs.core._write(writer__7211__auto__,"instaparse.gll/Failure");
});

instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__13438){
return (new instaparse.gll.Failure(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(G__13438),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(G__13438),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13438,cljs.core.cst$kw$index,cljs.core.array_seq([cljs.core.cst$kw$reason], 0)),null));
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = true;

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write(writer,(function (){var sb__7540__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13444_13446 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13445_13447 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13444_13446,_STAR_print_fn_STAR_13445_13447,sb__7540__auto__,fail__$1){
return (function (x__7541__auto__){
return sb__7540__auto__.append(x__7541__auto__);
});})(_STAR_print_newline_STAR_13444_13446,_STAR_print_fn_STAR_13445_13447,sb__7540__auto__,fail__$1))
;

try{instaparse.failure.pprint_failure(fail__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13445_13447;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13444_13446;
}
return [cljs.core.str(sb__7540__auto__)].join('');
})());
});
/**
 * Converts a string to a Segment, which has fast subsequencing
 */
instaparse.gll.text__GT_segment = (function instaparse$gll$text__GT_segment(s){
return (new instaparse.gll.Segment(s,(0),cljs.core.count(s)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,__meta,__extmap,__hash){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7176__auto__,k__7177__auto__){
var self__ = this;
var this__7176__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7176__auto____$1,k__7177__auto__,null);
});

instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7178__auto__,k13449,else__7179__auto__){
var self__ = this;
var this__7178__auto____$1 = this;
var G__13451 = (((k13449 instanceof cljs.core.Keyword))?k13449.fqn:null);
switch (G__13451) {
case "msg-cache":
return self__.msg_cache;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "generation":
return self__.generation;

break;
case "failure":
return self__.failure;

break;
case "fail-index":
return self__.fail_index;

break;
case "grammar":
return self__.grammar;

break;
case "success":
return self__.success;

break;
case "nodes":
return self__.nodes;

break;
case "node-builder":
return self__.node_builder;

break;
case "segment":
return self__.segment;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "text":
return self__.text;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13449,else__7179__auto__);

}
});

instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7190__auto__,writer__7191__auto__,opts__7192__auto__){
var self__ = this;
var this__7190__auto____$1 = this;
var pr_pair__7193__auto__ = ((function (this__7190__auto____$1){
return (function (keyval__7194__auto__){
return cljs.core.pr_sequential_writer(writer__7191__auto__,cljs.core.pr_writer,""," ","",opts__7192__auto__,keyval__7194__auto__);
});})(this__7190__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7191__auto__,pr_pair__7193__auto__,"#instaparse.gll.Tramp{",", ","}",opts__7192__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$segment,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fail_DASH_index,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH_builder,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stack,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_stack,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$generation,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$negative_DASH_listeners,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$msg_DASH_cache,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodes,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$success,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$failure,self__.failure],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IIterable$ = true;

instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13448){
var self__ = this;
var G__13448__$1 = this;
return (new cljs.core.RecordIter((0),G__13448__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grammar,cljs.core.cst$kw$text,cljs.core.cst$kw$segment,cljs.core.cst$kw$fail_DASH_index,cljs.core.cst$kw$node_DASH_builder,cljs.core.cst$kw$stack,cljs.core.cst$kw$next_DASH_stack,cljs.core.cst$kw$generation,cljs.core.cst$kw$negative_DASH_listeners,cljs.core.cst$kw$msg_DASH_cache,cljs.core.cst$kw$nodes,cljs.core.cst$kw$success,cljs.core.cst$kw$failure], null),cljs.core._iterator(self__.__extmap)));
});

instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7174__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7170__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7180__auto__){
var self__ = this;
var this__7180__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7171__auto__){
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

instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7172__auto__,other__7173__auto__){
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

instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7185__auto__,k__7186__auto__){
var self__ = this;
var this__7185__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.cst$kw$msg_DASH_cache,null,cljs.core.cst$kw$negative_DASH_listeners,null,cljs.core.cst$kw$generation,null,cljs.core.cst$kw$failure,null,cljs.core.cst$kw$fail_DASH_index,null,cljs.core.cst$kw$grammar,null,cljs.core.cst$kw$success,null,cljs.core.cst$kw$nodes,null,cljs.core.cst$kw$node_DASH_builder,null,cljs.core.cst$kw$segment,null,cljs.core.cst$kw$stack,null,cljs.core.cst$kw$next_DASH_stack,null,cljs.core.cst$kw$text,null], null), null),k__7186__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7185__auto____$1),self__.__meta),k__7186__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7186__auto__)),null));
}
});

instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7183__auto__,k__7184__auto__,G__13448){
var self__ = this;
var this__7183__auto____$1 = this;
var pred__13452 = cljs.core.keyword_identical_QMARK_;
var expr__13453 = k__7184__auto__;
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$grammar,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$grammar,expr__13453)))){
return (new instaparse.gll.Tramp(G__13448,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$text,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,G__13448,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$segment,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$segment,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__13448,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fail_DASH_index,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$fail_DASH_index,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__13448,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$node_DASH_builder,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$node_DASH_builder,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__13448,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stack,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$stack,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__13448,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_stack,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$next_DASH_stack,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__13448,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$generation,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$generation,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__13448,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$negative_DASH_listeners,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$negative_DASH_listeners,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__13448,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$msg_DASH_cache,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$msg_DASH_cache,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__13448,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodes,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$nodes,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__13448,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$success,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__13448,self__.failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$failure,expr__13453) : pred__13452.call(null,cljs.core.cst$kw$failure,expr__13453)))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__13448,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7184__auto__,G__13448),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});

instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7188__auto__){
var self__ = this;
var this__7188__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$segment,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fail_DASH_index,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH_builder,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stack,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_stack,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$generation,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$negative_DASH_listeners,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$msg_DASH_cache,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodes,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$success,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$failure,self__.failure],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7175__auto__,G__13448){
var self__ = this;
var this__7175__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__13448,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7181__auto__,entry__7182__auto__){
var self__ = this;
var this__7181__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7182__auto__)){
return cljs.core._assoc(this__7181__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7181__auto____$1,entry__7182__auto__);
}
});

instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$grammar,cljs.core.cst$sym$text,cljs.core.cst$sym$segment,cljs.core.cst$sym$fail_DASH_index,cljs.core.cst$sym$node_DASH_builder,cljs.core.with_meta(cljs.core.cst$sym$stack,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$next_DASH_stack,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$generation,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$negative_DASH_listeners,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$msg_DASH_cache,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$nodes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$failure,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null))], null);
});

instaparse.gll.Tramp.cljs$lang$type = true;

instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__7210__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});

instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__7210__auto__,writer__7211__auto__){
return cljs.core._write(writer__7211__auto__,"instaparse.gll/Tramp");
});

instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,null,null,null));
});

instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__13450){
return (new instaparse.gll.Tramp(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$fail_DASH_index.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$node_DASH_builder.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$msg_DASH_cache.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(G__13450),cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(G__13450),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13450,cljs.core.cst$kw$grammar,cljs.core.array_seq([cljs.core.cst$kw$text,cljs.core.cst$kw$segment,cljs.core.cst$kw$fail_DASH_index,cljs.core.cst$kw$node_DASH_builder,cljs.core.cst$kw$stack,cljs.core.cst$kw$next_DASH_stack,cljs.core.cst$kw$generation,cljs.core.cst$kw$negative_DASH_listeners,cljs.core.cst$kw$msg_DASH_cache,cljs.core.cst$kw$nodes,cljs.core.cst$kw$success,cljs.core.cst$kw$failure], 0)),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var args13456 = [];
var len__7629__auto___13459 = arguments.length;
var i__7630__auto___13460 = (0);
while(true){
if((i__7630__auto___13460 < len__7629__auto___13459)){
args13456.push((arguments[i__7630__auto___13460]));

var G__13461 = (i__7630__auto___13460 + (1));
i__7630__auto___13460 = G__13461;
continue;
} else {
}
break;
}

var G__13458 = args13456.length;
switch (G__13458) {
case 2:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13456.length)].join('')));

}
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = (function (grammar,text){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,segment,(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),fail_index,node_builder);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),cljs.core.sorted_map_by(cljs.core._GT_),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,(new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null)),null,null,null));
});

instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5;

instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$index,index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(tramp.text),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap,__hash){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7176__auto__,k__7177__auto__){
var self__ = this;
var this__7176__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7176__auto____$1,k__7177__auto__,null);
});

instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7178__auto__,k13464,else__7179__auto__){
var self__ = this;
var this__7178__auto____$1 = this;
var G__13466 = (((k13464 instanceof cljs.core.Keyword))?k13464.fqn:null);
switch (G__13466) {
case "listeners":
return self__.listeners;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "results":
return self__.results;

break;
case "full-results":
return self__.full_results;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13464,else__7179__auto__);

}
});

instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7190__auto__,writer__7191__auto__,opts__7192__auto__){
var self__ = this;
var this__7190__auto____$1 = this;
var pr_pair__7193__auto__ = ((function (this__7190__auto____$1){
return (function (keyval__7194__auto__){
return cljs.core.pr_sequential_writer(writer__7191__auto__,cljs.core.pr_writer,""," ","",opts__7192__auto__,keyval__7194__auto__);
});})(this__7190__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7191__auto__,pr_pair__7193__auto__,"#instaparse.gll.Node{",", ","}",opts__7192__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$listeners,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_listeners,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$results,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_results,self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IIterable$ = true;

instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13463){
var self__ = this;
var G__13463__$1 = this;
return (new cljs.core.RecordIter((0),G__13463__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$listeners,cljs.core.cst$kw$full_DASH_listeners,cljs.core.cst$kw$results,cljs.core.cst$kw$full_DASH_results], null),cljs.core._iterator(self__.__extmap)));
});

instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7174__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7170__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7180__auto__){
var self__ = this;
var this__7180__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7171__auto__){
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

instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7172__auto__,other__7173__auto__){
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

instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7185__auto__,k__7186__auto__){
var self__ = this;
var this__7185__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$full_DASH_results,null,cljs.core.cst$kw$full_DASH_listeners,null,cljs.core.cst$kw$listeners,null,cljs.core.cst$kw$results,null], null), null),k__7186__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7185__auto____$1),self__.__meta),k__7186__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7186__auto__)),null));
}
});

instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7183__auto__,k__7184__auto__,G__13463){
var self__ = this;
var this__7183__auto____$1 = this;
var pred__13467 = cljs.core.keyword_identical_QMARK_;
var expr__13468 = k__7184__auto__;
if(cljs.core.truth_((pred__13467.cljs$core$IFn$_invoke$arity$2 ? pred__13467.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$listeners,expr__13468) : pred__13467.call(null,cljs.core.cst$kw$listeners,expr__13468)))){
return (new instaparse.gll.Node(G__13463,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13467.cljs$core$IFn$_invoke$arity$2 ? pred__13467.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$full_DASH_listeners,expr__13468) : pred__13467.call(null,cljs.core.cst$kw$full_DASH_listeners,expr__13468)))){
return (new instaparse.gll.Node(self__.listeners,G__13463,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13467.cljs$core$IFn$_invoke$arity$2 ? pred__13467.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$results,expr__13468) : pred__13467.call(null,cljs.core.cst$kw$results,expr__13468)))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__13463,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13467.cljs$core$IFn$_invoke$arity$2 ? pred__13467.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$full_DASH_results,expr__13468) : pred__13467.call(null,cljs.core.cst$kw$full_DASH_results,expr__13468)))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__13463,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7184__auto__,G__13463),null));
}
}
}
}
});

instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7188__auto__){
var self__ = this;
var this__7188__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$listeners,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_listeners,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$results,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_results,self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7175__auto__,G__13463){
var self__ = this;
var this__7175__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__13463,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7181__auto__,entry__7182__auto__){
var self__ = this;
var this__7181__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7182__auto__)){
return cljs.core._assoc(this__7181__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7181__auto____$1,entry__7182__auto__);
}
});

instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$listeners,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$full_DASH_listeners,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$results,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null)),cljs.core.with_meta(cljs.core.cst$sym$full_DASH_results,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$mutable], null))], null);
});

instaparse.gll.Node.cljs$lang$type = true;

instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__7210__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Node");
});

instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__7210__auto__,writer__7211__auto__){
return cljs.core._write(writer__7211__auto__,"instaparse.gll/Node");
});

instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__13465){
return (new instaparse.gll.Node(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(G__13465),cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(G__13465),cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(G__13465),cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(G__13465),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13465,cljs.core.cst$kw$listeners,cljs.core.array_seq([cljs.core.cst$kw$full_DASH_listeners,cljs.core.cst$kw$results,cljs.core.cst$kw$full_DASH_results], 0)),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return tramp.stack = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tramp.stack,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = tramp.msg_cache;
var i = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cache,k,(0));
var f = ((function (cache,i,k,c){
return (function (){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(result) : listener.call(null,result));
});})(cache,i,k,c))
;



if((c > tramp.generation)){
tramp.next_stack = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tramp.next_stack,f);
} else {
tramp.stack = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tramp.stack,f);
}

return tramp.msg_cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tramp.msg_cache,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = tramp.nodes;
var temp__4657__auto__ = (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(node_key) : nodes.call(null,node_key));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count(node.listeners) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = tramp.nodes;
var temp__4657__auto__ = (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(node_key) : nodes.call(null,node_key));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count(node.full_listeners) > (0))) || ((cljs.core.count(node.listeners) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = tramp.nodes;
var temp__4657__auto__ = (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(node_key) : nodes.call(null,node_key));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count(node.full_results) > (0))) || ((cljs.core.count(node.results) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = tramp.nodes;
var temp__4657__auto__ = (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(node_key) : nodes.call(null,node_key));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count(node.full_results) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = tramp.nodes;
var temp__4655__auto__ = (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(node_key) : nodes.call(null,node_key));
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return node;
} else {
var node = instaparse.gll.make_node();

tramp.nodes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tramp.nodes,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || (obj.cljs$core$IWithMeta$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj))){
return cljs.core.with_meta(obj,metamap);
} else {
return obj;
}
});
/**
 * Pushes a result into the trampoline's node.
 * Categorizes as either result or full-result.
 * Schedules notification to all existing listeners of result
 * (Full listeners only get notified about full results)
 */
instaparse.gll.push_result = (function instaparse$gll$push_result(tramp,node_key,result){

var node = instaparse.gll.node_get(tramp,node_key);
var parser = (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1)));
var result__$1 = (cljs.core.truth_(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$result,null):result);
var result__$2 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction_function = temp__4655__auto__;
return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result__$1)], null)),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);
var results = (cljs.core.truth_(total_QMARK_)?node.full_results:node.results);
if(cljs.core.not((results.cljs$core$IFn$_invoke$arity$1 ? results.cljs$core$IFn$_invoke$arity$1(result__$2) : results.call(null,result__$2)))){

if(cljs.core.truth_(total_QMARK_)){
node.full_results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.full_results,result__$2);
} else {
node.results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.results,result__$2);
}

var seq__13481_13489 = cljs.core.seq(node.listeners);
var chunk__13482_13490 = null;
var count__13483_13491 = (0);
var i__13484_13492 = (0);
while(true){
if((i__13484_13492 < count__13483_13491)){
var listener_13493 = chunk__13482_13490.cljs$core$IIndexed$_nth$arity$2(null,i__13484_13492);
instaparse.gll.push_message(tramp,listener_13493,result__$2);

var G__13494 = seq__13481_13489;
var G__13495 = chunk__13482_13490;
var G__13496 = count__13483_13491;
var G__13497 = (i__13484_13492 + (1));
seq__13481_13489 = G__13494;
chunk__13482_13490 = G__13495;
count__13483_13491 = G__13496;
i__13484_13492 = G__13497;
continue;
} else {
var temp__4657__auto___13498 = cljs.core.seq(seq__13481_13489);
if(temp__4657__auto___13498){
var seq__13481_13499__$1 = temp__4657__auto___13498;
if(cljs.core.chunked_seq_QMARK_(seq__13481_13499__$1)){
var c__7365__auto___13500 = cljs.core.chunk_first(seq__13481_13499__$1);
var G__13501 = cljs.core.chunk_rest(seq__13481_13499__$1);
var G__13502 = c__7365__auto___13500;
var G__13503 = cljs.core.count(c__7365__auto___13500);
var G__13504 = (0);
seq__13481_13489 = G__13501;
chunk__13482_13490 = G__13502;
count__13483_13491 = G__13503;
i__13484_13492 = G__13504;
continue;
} else {
var listener_13505 = cljs.core.first(seq__13481_13499__$1);
instaparse.gll.push_message(tramp,listener_13505,result__$2);

var G__13506 = cljs.core.next(seq__13481_13499__$1);
var G__13507 = null;
var G__13508 = (0);
var G__13509 = (0);
seq__13481_13489 = G__13506;
chunk__13482_13490 = G__13507;
count__13483_13491 = G__13508;
i__13484_13492 = G__13509;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(total_QMARK_)){
var seq__13485 = cljs.core.seq(node.full_listeners);
var chunk__13486 = null;
var count__13487 = (0);
var i__13488 = (0);
while(true){
if((i__13488 < count__13487)){
var listener = chunk__13486.cljs$core$IIndexed$_nth$arity$2(null,i__13488);
instaparse.gll.push_message(tramp,listener,result__$2);

var G__13510 = seq__13485;
var G__13511 = chunk__13486;
var G__13512 = count__13487;
var G__13513 = (i__13488 + (1));
seq__13485 = G__13510;
chunk__13486 = G__13511;
count__13487 = G__13512;
i__13488 = G__13513;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13485);
if(temp__4657__auto__){
var seq__13485__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13485__$1)){
var c__7365__auto__ = cljs.core.chunk_first(seq__13485__$1);
var G__13514 = cljs.core.chunk_rest(seq__13485__$1);
var G__13515 = c__7365__auto__;
var G__13516 = cljs.core.count(c__7365__auto__);
var G__13517 = (0);
seq__13485 = G__13514;
chunk__13486 = G__13515;
count__13487 = G__13516;
i__13488 = G__13517;
continue;
} else {
var listener = cljs.core.first(seq__13485__$1);
instaparse.gll.push_message(tramp,listener,result__$2);

var G__13518 = cljs.core.next(seq__13485__$1);
var G__13519 = null;
var G__13520 = (0);
var G__13521 = (0);
seq__13485 = G__13518;
chunk__13486 = G__13519;
count__13487 = G__13520;
i__13488 = G__13521;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing results.
 * Initiates parse if necessary
 */
instaparse.gll.push_listener = (function instaparse$gll$push_listener(tramp,node_key,listener){

var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);

node.listeners = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.listeners,listener);

var seq__13530_13538 = cljs.core.seq(node.results);
var chunk__13531_13539 = null;
var count__13532_13540 = (0);
var i__13533_13541 = (0);
while(true){
if((i__13533_13541 < count__13532_13540)){
var result_13542 = chunk__13531_13539.cljs$core$IIndexed$_nth$arity$2(null,i__13533_13541);
instaparse.gll.push_message(tramp,listener,result_13542);

var G__13543 = seq__13530_13538;
var G__13544 = chunk__13531_13539;
var G__13545 = count__13532_13540;
var G__13546 = (i__13533_13541 + (1));
seq__13530_13538 = G__13543;
chunk__13531_13539 = G__13544;
count__13532_13540 = G__13545;
i__13533_13541 = G__13546;
continue;
} else {
var temp__4657__auto___13547 = cljs.core.seq(seq__13530_13538);
if(temp__4657__auto___13547){
var seq__13530_13548__$1 = temp__4657__auto___13547;
if(cljs.core.chunked_seq_QMARK_(seq__13530_13548__$1)){
var c__7365__auto___13549 = cljs.core.chunk_first(seq__13530_13548__$1);
var G__13550 = cljs.core.chunk_rest(seq__13530_13548__$1);
var G__13551 = c__7365__auto___13549;
var G__13552 = cljs.core.count(c__7365__auto___13549);
var G__13553 = (0);
seq__13530_13538 = G__13550;
chunk__13531_13539 = G__13551;
count__13532_13540 = G__13552;
i__13533_13541 = G__13553;
continue;
} else {
var result_13554 = cljs.core.first(seq__13530_13548__$1);
instaparse.gll.push_message(tramp,listener,result_13554);

var G__13555 = cljs.core.next(seq__13530_13548__$1);
var G__13556 = null;
var G__13557 = (0);
var G__13558 = (0);
seq__13530_13538 = G__13555;
chunk__13531_13539 = G__13556;
count__13532_13540 = G__13557;
i__13533_13541 = G__13558;
continue;
}
} else {
}
}
break;
}

var seq__13534_13559 = cljs.core.seq(node.full_results);
var chunk__13535_13560 = null;
var count__13536_13561 = (0);
var i__13537_13562 = (0);
while(true){
if((i__13537_13562 < count__13536_13561)){
var result_13563 = chunk__13535_13560.cljs$core$IIndexed$_nth$arity$2(null,i__13537_13562);
instaparse.gll.push_message(tramp,listener,result_13563);

var G__13564 = seq__13534_13559;
var G__13565 = chunk__13535_13560;
var G__13566 = count__13536_13561;
var G__13567 = (i__13537_13562 + (1));
seq__13534_13559 = G__13564;
chunk__13535_13560 = G__13565;
count__13536_13561 = G__13566;
i__13537_13562 = G__13567;
continue;
} else {
var temp__4657__auto___13568 = cljs.core.seq(seq__13534_13559);
if(temp__4657__auto___13568){
var seq__13534_13569__$1 = temp__4657__auto___13568;
if(cljs.core.chunked_seq_QMARK_(seq__13534_13569__$1)){
var c__7365__auto___13570 = cljs.core.chunk_first(seq__13534_13569__$1);
var G__13571 = cljs.core.chunk_rest(seq__13534_13569__$1);
var G__13572 = c__7365__auto___13570;
var G__13573 = cljs.core.count(c__7365__auto___13570);
var G__13574 = (0);
seq__13534_13559 = G__13571;
chunk__13535_13560 = G__13572;
count__13536_13561 = G__13573;
i__13537_13562 = G__13574;
continue;
} else {
var result_13575 = cljs.core.first(seq__13534_13569__$1);
instaparse.gll.push_message(tramp,listener,result_13575);

var G__13576 = cljs.core.next(seq__13534_13569__$1);
var G__13577 = null;
var G__13578 = (0);
var G__13579 = (0);
seq__13534_13559 = G__13576;
chunk__13535_13560 = G__13577;
count__13536_13561 = G__13578;
i__13537_13562 = G__13579;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,((function (listener_already_exists_QMARK_,node){
return (function (){
return instaparse.gll._parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
});})(listener_already_exists_QMARK_,node))
);
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing full results.
 */
instaparse.gll.push_full_listener = (function instaparse$gll$push_full_listener(tramp,node_key,listener){
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);

node.full_listeners = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.full_listeners,listener);

var seq__13584_13588 = cljs.core.seq(node.full_results);
var chunk__13585_13589 = null;
var count__13586_13590 = (0);
var i__13587_13591 = (0);
while(true){
if((i__13587_13591 < count__13586_13590)){
var result_13592 = chunk__13585_13589.cljs$core$IIndexed$_nth$arity$2(null,i__13587_13591);
instaparse.gll.push_message(tramp,listener,result_13592);

var G__13593 = seq__13584_13588;
var G__13594 = chunk__13585_13589;
var G__13595 = count__13586_13590;
var G__13596 = (i__13587_13591 + (1));
seq__13584_13588 = G__13593;
chunk__13585_13589 = G__13594;
count__13586_13590 = G__13595;
i__13587_13591 = G__13596;
continue;
} else {
var temp__4657__auto___13597 = cljs.core.seq(seq__13584_13588);
if(temp__4657__auto___13597){
var seq__13584_13598__$1 = temp__4657__auto___13597;
if(cljs.core.chunked_seq_QMARK_(seq__13584_13598__$1)){
var c__7365__auto___13599 = cljs.core.chunk_first(seq__13584_13598__$1);
var G__13600 = cljs.core.chunk_rest(seq__13584_13598__$1);
var G__13601 = c__7365__auto___13599;
var G__13602 = cljs.core.count(c__7365__auto___13599);
var G__13603 = (0);
seq__13584_13588 = G__13600;
chunk__13585_13589 = G__13601;
count__13586_13590 = G__13602;
i__13587_13591 = G__13603;
continue;
} else {
var result_13604 = cljs.core.first(seq__13584_13598__$1);
instaparse.gll.push_message(tramp,listener,result_13604);

var G__13605 = cljs.core.next(seq__13584_13598__$1);
var G__13606 = null;
var G__13607 = (0);
var G__13608 = (0);
seq__13584_13588 = G__13605;
chunk__13585_13589 = G__13606;
count__13586_13590 = G__13607;
i__13587_13591 = G__13608;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,((function (full_listener_already_exists_QMARK_,node){
return (function (){
return instaparse.gll._full_parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
});})(full_listener_already_exists_QMARK_,node))
);
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return tramp.negative_listeners = (function (){var G__13611 = tramp.negative_listeners;
var G__13612 = cljs.core.PersistentArrayMap.fromArray([(creator.cljs$core$IFn$_invoke$arity$1 ? creator.cljs$core$IFn$_invoke$arity$1((0)) : creator.call(null,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)], true, false);
return (instaparse.gll.merge_negative_listeners.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.merge_negative_listeners.cljs$core$IFn$_invoke$arity$2(G__13611,G__13612) : instaparse.gll.merge_negative_listeners.call(null,G__13611,G__13612));
})();
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){
tramp.failure = (function (failure){
var current_index = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(failure);
var G__13619 = cljs.core.compare(index,current_index);
switch (G__13619) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.compare(index,current_index))].join('')));

}
}).call(null,tramp.failure);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,tramp.fail_index)){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__13620 = tramp.node_builder;
var G__13621 = cljs.core.cst$kw$instaparse_SLASH_failure;
var G__13622 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(tramp.text,index);
var G__13623 = index;
var G__13624 = cljs.core.count(tramp.text);
return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__13620,G__13621,G__13622,G__13623,G__13624) : instaparse.gll.build_node_with_meta.call(null,G__13620,G__13621,G__13622,G__13623,G__13624));
})(),cljs.core.count(tramp.text)));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(tramp){
var top = cljs.core.peek(tramp.stack);
tramp.stack = cljs.core.pop(tramp.stack);

return (top.cljs$core$IFn$_invoke$arity$0 ? top.cljs$core$IFn$_invoke$arity$0() : top.call(null));
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var args13626 = [];
var len__7629__auto___13632 = arguments.length;
var i__7630__auto___13633 = (0);
while(true){
if((i__7630__auto___13633 < len__7629__auto___13632)){
args13626.push((arguments[i__7630__auto___13633]));

var G__13634 = (i__7630__auto___13633 + (1));
i__7630__auto___13633 = G__13634;
continue;
} else {
}
break;
}

var G__13628 = args13626.length;
switch (G__13628) {
case 1:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13626.length)].join('')));

}
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = (function (tramp){
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,null);
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = tramp.stack;
if(cljs.core.truth_(tramp.success)){
return cljs.core.cons(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(tramp.success),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
tramp.success = null;

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count(stack) > (0))){
instaparse.gll.step(tramp);

var G__13636 = tramp;
var G__13637 = found_result_QMARK_;
tramp = G__13636;
found_result_QMARK_ = G__13637;
continue;
} else {
if((cljs.core.count(tramp.negative_listeners) > (0))){
var vec__13629 = cljs.core.first(tramp.negative_listeners);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629,(0),null);
var listeners = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629,(1),null);
var listener = cljs.core.peek(listeners);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(listeners),(1))){
tramp.negative_listeners = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tramp.negative_listeners,index);
} else {
tramp.negative_listeners = cljs.core.update.cljs$core$IFn$_invoke$arity$3(tramp.negative_listeners,index,cljs.core.pop);
}

var G__13638 = tramp;
var G__13639 = found_result_QMARK_;
tramp = G__13638;
found_result_QMARK_ = G__13639;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = tramp.next_stack;

tramp.stack = next_stack;

tramp.next_stack = cljs.core.PersistentVector.EMPTY;

tramp.generation = (tramp.generation + (1));


var G__13640 = tramp;
var G__13641 = null;
tramp = G__13640;
found_result_QMARK_ = G__13641;
continue;
} else {
return null;

}
}
}
}
break;
}
});

instaparse.gll.run.cljs$lang$maxFixedArity = 2;

instaparse.gll.NodeListener = (function instaparse$gll$NodeListener(node_key,tramp){
return (function (result){

return instaparse.gll.push_result(tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0)))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__13648 = result;
var map__13648__$1 = ((((!((map__13648 == null)))?((((map__13648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13648):map__13648);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13648__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13648__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),instaparse$gll$CatListener(new_results_so_far,cljs.core.next(parser_sequence),node_key,tramp));
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__13660 = result;
var map__13660__$1 = ((((!((map__13660 == null)))?((((map__13660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13660):map__13660);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13660__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13660__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_(parser_sequence))){
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),instaparse$gll$CatFullListener(new_results_so_far,cljs.core.next(parser_sequence),node_key,tramp));
} else {
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),instaparse$gll$CatFullListener(new_results_so_far,cljs.core.next(parser_sequence),node_key,tramp));
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__13664 = result;
var map__13664__$1 = ((((!((map__13664 == null)))?((((map__13664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13664):map__13664);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,cljs.core.cst$kw$index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse$gll$PlusListener(new_results_so_far,parser,continue_index,node_key,tramp));

return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__13668 = result;
var map__13668__$1 = ((((!((map__13668 == null)))?((((map__13668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13668):map__13668);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13668__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13668__$1,cljs.core.cst$kw$index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse$gll$PlusFullListener(new_results_so_far,parser,continue_index,node_key,tramp));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__13672 = result;
var map__13672__$1 = ((((!((map__13672 == null)))?((((map__13672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13672):map__13672);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13672__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13672__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(((m <= cljs.core.count(new_results_so_far))) && ((cljs.core.count(new_results_so_far) <= n))){
instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
}

if((cljs.core.count(new_results_so_far) < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse$gll$RepListener(new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__13676 = result;
var map__13676__$1 = ((((!((map__13676 == null)))?((((map__13676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13676):map__13676);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13676__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13676__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
if(((m <= cljs.core.count(new_results_so_far))) && ((cljs.core.count(new_results_so_far) <= n))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((cljs.core.count(new_results_so_far) < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse$gll$RepFullListener(new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return tramp.success = result;
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.text;
var end = (function (){var x__6892__auto__ = cljs.core.count(text);
var y__6893__auto__ = (index + cljs.core.count(string));
return ((x__6892__auto__ < y__6893__auto__) ? x__6892__auto__ : y__6893__auto__);
})();
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,index,end);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.text;
var end = (function (){var x__6892__auto__ = cljs.core.count(text);
var y__6893__auto__ = (index + cljs.core.count(string));
return ((x__6892__auto__ < y__6893__auto__) ? x__6892__auto__ : y__6893__auto__);
})();
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,index,end);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.text;
var end = (function (){var x__6892__auto__ = cljs.core.count(text);
var y__6893__auto__ = (index + cljs.core.count(string));
return ((x__6892__auto__ < y__6893__auto__) ? x__6892__auto__ : y__6893__auto__);
})();
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,index,end);
if(cljs.core.truth_(instaparse.gll.equals_ignore_case(string,head))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.text;
var end = (function (){var x__6892__auto__ = cljs.core.count(text);
var y__6893__auto__ = (index + cljs.core.count(string));
return ((x__6892__auto__ < y__6893__auto__) ? x__6892__auto__ : y__6893__auto__);
})();
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,index,end);
if(cljs.core.truth_((function (){var and__6542__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text));
if(and__6542__auto__){
return instaparse.gll.equals_ignore_case(string,head);
} else {
return and__6542__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = cljs.core.cst$kw$lo.cljs$core$IFn$_invoke$arity$1(this$);
var hi = cljs.core.cst$kw$hi.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
} else {
if((hi <= (65535))){
var code = text.charCodeAt(index);
if(((lo <= code)) && ((code <= hi))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(cljs.core.char$(code),(index + (1))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}
} else {
var code_point = (function (){var G__13680 = text;
var G__13681 = (index | (0));
return goog.i18n.uChar.getCodePointAround(G__13680,G__13681);
})();
var char_string = goog.i18n.uChar.fromCharCode(code_point);
if(((lo <= code_point)) && ((code_point <= hi))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,(index + cljs.core.count(char_string))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = cljs.core.cst$kw$lo.cljs$core$IFn$_invoke$arity$1(this$);
var hi = cljs.core.cst$kw$hi.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count(text);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null),cljs.core.cst$kw$full,true], null));
} else {
if((hi <= (65535))){
var code = text.charCodeAt(index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),end)) && (((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(cljs.core.char$(code),end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null),cljs.core.cst$kw$full,true], null));
}
} else {
var code_point = (function (){var G__13684 = text;
var G__13685 = (index | (0));
return goog.i18n.uChar.getCodePointAround(G__13684,G__13685);
})();
var char_string = goog.i18n.uChar.fromCharCode(code_point);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + cljs.core.count(char_string)),end)) && (((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null),cljs.core.cst$kw$full,true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,"g"));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__6542__auto__ = m;
if(cljs.core.truth_(and__6542__auto__)){
return (m.index === (0));
} else {
return and__6542__auto__;
}
})())){
return cljs.core.first(m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(this$);
var text = tramp.segment;
var substring = instaparse.gll.toString(text.instaparse$gll$ISegment$subsegment$arity$3(null,index,cljs.core.count(text)));
var match = instaparse.gll.re_match_at_front(regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,(index + cljs.core.count(match))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$expecting,regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(tramp);
var substring = instaparse.gll.toString(text.instaparse$gll$ISegment$subsegment$arity$3(null,index,cljs.core.count(text)));
var match = instaparse.gll.re_match_at_front(regexp,substring);
var desired_length = (cljs.core.count(text) - index);
if(cljs.core.truth_((function (){var and__6542__auto__ = match;
if(cljs.core.truth_(and__6542__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(match),desired_length);
} else {
return and__6542__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,cljs.core.count(text)));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$expecting,regexp,cljs.core.cst$kw$full,true], null));
}
});
var empty_cat_result_13686 = instaparse.auto_flatten_seq.EMPTY;
instaparse.gll.cat_parse = ((function (empty_cat_result_13686){
return (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(empty_cat_result_13686,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13686))
;

instaparse.gll.cat_full_parse = ((function (empty_cat_result_13686){
return (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(empty_cat_result_13686,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13686))
;

instaparse.gll.plus_parse = ((function (empty_cat_result_13686){
return (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(empty_cat_result_13686,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13686))
;

instaparse.gll.plus_full_parse = ((function (empty_cat_result_13686){
return (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(empty_cat_result_13686,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13686))
;

instaparse.gll.rep_parse = ((function (empty_cat_result_13686){
return (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var m = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(this$);
var n = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(empty_cat_result_13686,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(empty_cat_result_13686,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13686))
;

instaparse.gll.rep_full_parse = ((function (empty_cat_result_13686){
return (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var m = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(this$);
var n = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(empty_cat_result_13686,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(empty_cat_result_13686,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13686))
;

instaparse.gll.star_parse = ((function (empty_cat_result_13686){
return (function instaparse$gll$star_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(empty_cat_result_13686,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});})(empty_cat_result_13686))
;

instaparse.gll.star_full_parse = ((function (empty_cat_result_13686){
return (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(empty_cat_result_13686,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13686))
;
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
var seq__13691 = cljs.core.seq(parsers);
var chunk__13692 = null;
var count__13693 = (0);
var i__13694 = (0);
while(true){
if((i__13694 < count__13693)){
var parser = chunk__13692.cljs$core$IIndexed$_nth$arity$2(null,i__13694);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__13695 = seq__13691;
var G__13696 = chunk__13692;
var G__13697 = count__13693;
var G__13698 = (i__13694 + (1));
seq__13691 = G__13695;
chunk__13692 = G__13696;
count__13693 = G__13697;
i__13694 = G__13698;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13691);
if(temp__4657__auto__){
var seq__13691__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13691__$1)){
var c__7365__auto__ = cljs.core.chunk_first(seq__13691__$1);
var G__13699 = cljs.core.chunk_rest(seq__13691__$1);
var G__13700 = c__7365__auto__;
var G__13701 = cljs.core.count(c__7365__auto__);
var G__13702 = (0);
seq__13691 = G__13699;
chunk__13692 = G__13700;
count__13693 = G__13701;
i__13694 = G__13702;
continue;
} else {
var parser = cljs.core.first(seq__13691__$1);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__13703 = cljs.core.next(seq__13691__$1);
var G__13704 = null;
var G__13705 = (0);
var G__13706 = (0);
seq__13691 = G__13703;
chunk__13692 = G__13704;
count__13693 = G__13705;
i__13694 = G__13706;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.alt_full_parse = (function instaparse$gll$alt_full_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
var seq__13711 = cljs.core.seq(parsers);
var chunk__13712 = null;
var count__13713 = (0);
var i__13714 = (0);
while(true){
if((i__13714 < count__13713)){
var parser = chunk__13712.cljs$core$IIndexed$_nth$arity$2(null,i__13714);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__13715 = seq__13711;
var G__13716 = chunk__13712;
var G__13717 = count__13713;
var G__13718 = (i__13714 + (1));
seq__13711 = G__13715;
chunk__13712 = G__13716;
count__13713 = G__13717;
i__13714 = G__13718;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13711);
if(temp__4657__auto__){
var seq__13711__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13711__$1)){
var c__7365__auto__ = cljs.core.chunk_first(seq__13711__$1);
var G__13719 = cljs.core.chunk_rest(seq__13711__$1);
var G__13720 = c__7365__auto__;
var G__13721 = cljs.core.count(c__7365__auto__);
var G__13722 = (0);
seq__13711 = G__13719;
chunk__13712 = G__13720;
count__13713 = G__13721;
i__13714 = G__13722;
continue;
} else {
var parser = cljs.core.first(seq__13711__$1);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__13723 = cljs.core.next(seq__13711__$1);
var G__13724 = null;
var G__13725 = (0);
var G__13726 = (0);
seq__13711 = G__13723;
chunk__13712 = G__13724;
count__13713 = G__13725;
i__13714 = G__13726;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.ordered_alt_parse = (function instaparse$gll$ordered_alt_parse(this$,index,tramp){
var parser1 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_full_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$optional,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse(this$,index,tramp);
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$lookahead,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$negative_DASH_lookahead], null));
} else {
instaparse.gll.push_listener(tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$negative_DASH_lookahead,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$NOT,instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)], null)], null));
});})(parser,node_key))
,null));
return ((function (fail_send,parser,node_key){
return (function (result){
return cljs.core.force(fail_send);
});
;})(fail_send,parser,node_key))
})());

return instaparse.gll.push_negative_listener(tramp,node_key,((function (parser,node_key){
return (function (){
if(cljs.core.not(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$Epsilon,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
} else {
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
return cljs.core.with_meta(cljs.core.List.EMPTY,instaparse.failure.augment_failure(tramp.failure,text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.failure.augment_failure(tramp.failure,text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta((node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(tag,content) : node_builder.call(null,tag,content)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,start,cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta(node_builder,cljs.core.cst$kw$instaparse_SLASH_failure,text,(0),cljs.core.count(text));
var build_start_node = instaparse.gll.build_node_with_meta(node_builder,start,build_failure_node,(0),cljs.core.count(text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
var x__7388__auto__ = instaparse.gll.build_total_failure_node(node_builder,start,text);
return cljs.core._conj(cljs.core.List.EMPTY,x__7388__auto__);
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([metamap,cljs.core.meta(obj)], 0)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses(grammar,start,text,partial_QMARK_);
if(cljs.core.seq(all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parses_total_after_fail(grammar,start,text,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(all_parses)),partial_QMARK_,node_builder),cljs.core.meta(all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.gll.build_total_failure_node(node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse(grammar,start,text,partial_QMARK_);
if(!((result instanceof instaparse.gll.Failure))){
return result;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parse_total_after_fail(grammar,start,text,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});
