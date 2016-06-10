// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.line_col');
goog.require('cljs.core');
goog.require('instaparse.transform');

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
instaparse.line_col.Cursor = (function (index,line,column,__meta,__extmap,__hash){
this.index = index;
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7176__auto__,k__7177__auto__){
var self__ = this;
var this__7176__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7176__auto____$1,k__7177__auto__,null);
});

instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7178__auto__,k13738,else__7179__auto__){
var self__ = this;
var this__7178__auto____$1 = this;
var G__13740 = (((k13738 instanceof cljs.core.Keyword))?k13738.fqn:null);
switch (G__13740) {
case "index":
return self__.index;

break;
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13738,else__7179__auto__);

}
});

instaparse.line_col.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7190__auto__,writer__7191__auto__,opts__7192__auto__){
var self__ = this;
var this__7190__auto____$1 = this;
var pr_pair__7193__auto__ = ((function (this__7190__auto____$1){
return (function (keyval__7194__auto__){
return cljs.core.pr_sequential_writer(writer__7191__auto__,cljs.core.pr_writer,""," ","",opts__7192__auto__,keyval__7194__auto__);
});})(this__7190__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7191__auto__,pr_pair__7193__auto__,"#instaparse.line-col.Cursor{",", ","}",opts__7192__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$line,self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$column,self__.column],null))], null),self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IIterable$ = true;

instaparse.line_col.Cursor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13737){
var self__ = this;
var G__13737__$1 = this;
return (new cljs.core.RecordIter((0),G__13737__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index,cljs.core.cst$kw$line,cljs.core.cst$kw$column], null),cljs.core._iterator(self__.__extmap)));
});

instaparse.line_col.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7174__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
return self__.__meta;
});

instaparse.line_col.Cursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7170__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.line_col.Cursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7180__auto__){
var self__ = this;
var this__7180__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7171__auto__){
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

instaparse.line_col.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7172__auto__,other__7173__auto__){
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

instaparse.line_col.Cursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7185__auto__,k__7186__auto__){
var self__ = this;
var this__7185__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index,null,cljs.core.cst$kw$column,null,cljs.core.cst$kw$line,null], null), null),k__7186__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7185__auto____$1),self__.__meta),k__7186__auto__);
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7186__auto__)),null));
}
});

instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7183__auto__,k__7184__auto__,G__13737){
var self__ = this;
var this__7183__auto____$1 = this;
var pred__13741 = cljs.core.keyword_identical_QMARK_;
var expr__13742 = k__7184__auto__;
if(cljs.core.truth_((pred__13741.cljs$core$IFn$_invoke$arity$2 ? pred__13741.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$index,expr__13742) : pred__13741.call(null,cljs.core.cst$kw$index,expr__13742)))){
return (new instaparse.line_col.Cursor(G__13737,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13741.cljs$core$IFn$_invoke$arity$2 ? pred__13741.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$line,expr__13742) : pred__13741.call(null,cljs.core.cst$kw$line,expr__13742)))){
return (new instaparse.line_col.Cursor(self__.index,G__13737,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13741.cljs$core$IFn$_invoke$arity$2 ? pred__13741.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$column,expr__13742) : pred__13741.call(null,cljs.core.cst$kw$column,expr__13742)))){
return (new instaparse.line_col.Cursor(self__.index,self__.line,G__13737,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7184__auto__,G__13737),null));
}
}
}
});

instaparse.line_col.Cursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7188__auto__){
var self__ = this;
var this__7188__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$line,self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$column,self__.column],null))], null),self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7175__auto__,G__13737){
var self__ = this;
var this__7175__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,G__13737,self__.__extmap,self__.__hash));
});

instaparse.line_col.Cursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7181__auto__,entry__7182__auto__){
var self__ = this;
var this__7181__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7182__auto__)){
return cljs.core._assoc(this__7181__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7181__auto____$1,entry__7182__auto__);
}
});

instaparse.line_col.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$index,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$int], null)),cljs.core.with_meta(cljs.core.cst$sym$line,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$column,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

instaparse.line_col.Cursor.cljs$lang$type = true;

instaparse.line_col.Cursor.cljs$lang$ctorPrSeq = (function (this__7210__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.line-col/Cursor");
});

instaparse.line_col.Cursor.cljs$lang$ctorPrWriter = (function (this__7210__auto__,writer__7211__auto__){
return cljs.core._write(writer__7211__auto__,"instaparse.line-col/Cursor");
});

instaparse.line_col.__GT_Cursor = (function instaparse$line_col$__GT_Cursor(index,line,column){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
});

instaparse.line_col.map__GT_Cursor = (function instaparse$line_col$map__GT_Cursor(G__13739){
return (new instaparse.line_col.Cursor(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(G__13739),cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(G__13739),cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(G__13739),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13739,cljs.core.cst$kw$index,cljs.core.array_seq([cljs.core.cst$kw$line,cljs.core.cst$kw$column], 0)),null));
});

instaparse.line_col.advance_cursor = (function instaparse$line_col$advance_cursor(cursor,text,new_index){
var new_index__$1 = (new_index | (0));
if((cursor.index <= new_index__$1)){
} else {
throw (new Error("Assert failed: (<= (.-index cursor) new-index)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor.index,new_index__$1)){
return cursor;
} else {
var index = cursor.index;
var line = cursor.line;
var column = cursor.column;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,new_index__$1)){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text.charAt(index),"\n")){
var G__13745 = (index + (1));
var G__13746 = (line + (1));
var G__13747 = (1);
index = G__13745;
line = G__13746;
column = G__13747;
continue;
} else {
var G__13748 = (index + (1));
var G__13749 = line;
var G__13750 = (column + (1));
index = G__13748;
line = G__13749;
column = G__13750;
continue;

}
}
break;
}
}
});
/**
 * Given a string `text`, returns a function that takes an index into the string,
 * and returns a cursor, including line and column information.  For efficiency,
 * inputs must be fed into the function in increasing order.
 */
instaparse.line_col.make_line_col_fn = (function instaparse$line_col$make_line_col_fn(text){
var cursor_state = (function (){var G__13752 = (new instaparse.line_col.Cursor((0),(1),(1),null,null,null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13752) : cljs.core.atom.call(null,G__13752));
})();
return ((function (cursor_state){
return (function instaparse$line_col$make_line_col_fn_$_line_col(i){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor_state,instaparse.line_col.advance_cursor,text,i);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cursor_state) : cljs.core.deref.call(null,cursor_state));
});
;})(cursor_state))
});
instaparse.line_col.hiccup_add_line_col_spans = (function instaparse$line_col$hiccup_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta(parse_tree);
var start_index = cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
var end_index = cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__6542__auto__ = start_index;
if(cljs.core.truth_(and__6542__auto__)){
return end_index;
} else {
return and__6542__auto__;
}
})())){
var start_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(start_index) : line_col_fn.call(null,start_index));
var children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse$line_col$hiccup_add_line_col_spans,line_col_fn),cljs.core.next(parse_tree)));
var end_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(end_index) : line_col_fn.call(null,end_index));
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parse_tree)], null),children),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(parse_tree),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(start_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(start_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(end_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(end_cursor)], null)], 0)));
} else {
return parse_tree;
}
});
instaparse.line_col.enlive_add_line_col_spans = (function instaparse$line_col$enlive_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta(parse_tree);
var start_index = cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
var end_index = cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__6542__auto__ = start_index;
if(cljs.core.truth_(and__6542__auto__)){
return end_index;
} else {
return and__6542__auto__;
}
})())){
var start_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(start_index) : line_col_fn.call(null,start_index));
var children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse$line_col$enlive_add_line_col_spans,line_col_fn),cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(parse_tree)));
var end_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(end_index) : line_col_fn.call(null,end_index));
return cljs.core.with_meta(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_tree,cljs.core.cst$kw$content,children),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(parse_tree),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(start_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(start_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(end_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(end_cursor)], null)], 0)));
} else {
return parse_tree;
}
});
/**
 * Given a string `text` and a `parse-tree` for text, return parse tree
 * with its metadata annotated with line and column info. The info can
 * then be found in the metadata map under the keywords:
 *  
 * :instaparse.gll/start-line, :instaparse.gll/start-column,
 * :instaparse.gll/end-line, :instaparse.gll/end-column
 * 
 * The start is inclusive, the end is exclusive. Lines and columns are 1-based.
 */
instaparse.line_col.add_line_col_spans = (function instaparse$line_col$add_line_col_spans(text,parse_tree){
var line_col_fn = instaparse.line_col.make_line_col_fn(text);
if((parse_tree == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__6542__auto__ = cljs.core.map_QMARK_(parse_tree);
if(and__6542__auto__){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parse_tree);
} else {
return and__6542__auto__;
}
})())){
return instaparse.line_col.enlive_add_line_col_spans(line_col_fn,parse_tree);
} else {
if((cljs.core.vector_QMARK_(parse_tree)) && ((cljs.core.first(parse_tree) instanceof cljs.core.Keyword))){
return instaparse.line_col.hiccup_add_line_col_spans(line_col_fn,parse_tree);
} else {
if(cljs.core.truth_((function (){var and__6542__auto__ = cljs.core.sequential_QMARK_(parse_tree);
if(and__6542__auto__){
var and__6542__auto____$1 = cljs.core.map_QMARK_(cljs.core.first(parse_tree));
if(and__6542__auto____$1){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.first(parse_tree));
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
})())){
return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans,line_col_fn),parse_tree);
} else {
if((cljs.core.sequential_QMARK_(parse_tree)) && (cljs.core.vector_QMARK_(cljs.core.first(parse_tree))) && ((cljs.core.first(cljs.core.first(parse_tree)) instanceof cljs.core.Keyword))){
return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),parse_tree);
} else {
if((parse_tree instanceof instaparse.gll.Failure)){
return parse_tree;
} else {
throw "Invalid parse-tree, not recognized as either enlive or hiccup format.";

}
}
}
}
}
}
});
