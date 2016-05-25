// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26937 = cljs.core._EQ_;
var expr__26938 = (function (){var or__16855__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26937.call(null,"true",expr__26938))){
return true;
} else {
if(cljs.core.truth_(pred__26937.call(null,"false",expr__26938))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26938)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17920__auto__ = [];
var len__17913__auto___26941 = arguments.length;
var i__17914__auto___26942 = (0);
while(true){
if((i__17914__auto___26942 < len__17913__auto___26941)){
args__17920__auto__.push((arguments[i__17914__auto___26942]));

var G__26943 = (i__17914__auto___26942 + (1));
i__17914__auto___26942 = G__26943;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26940){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26940));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26944){
var map__26947 = p__26944;
var map__26947__$1 = ((((!((map__26947 == null)))?((((map__26947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26947):map__26947);
var message = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16855__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16843__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16843__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16843__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22661__auto___27109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___27109,ch){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___27109,ch){
return (function (state_27078){
var state_val_27079 = (state_27078[(1)]);
if((state_val_27079 === (7))){
var inst_27074 = (state_27078[(2)]);
var state_27078__$1 = state_27078;
var statearr_27080_27110 = state_27078__$1;
(statearr_27080_27110[(2)] = inst_27074);

(statearr_27080_27110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (1))){
var state_27078__$1 = state_27078;
var statearr_27081_27111 = state_27078__$1;
(statearr_27081_27111[(2)] = null);

(statearr_27081_27111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (4))){
var inst_27031 = (state_27078[(7)]);
var inst_27031__$1 = (state_27078[(2)]);
var state_27078__$1 = (function (){var statearr_27082 = state_27078;
(statearr_27082[(7)] = inst_27031__$1);

return statearr_27082;
})();
if(cljs.core.truth_(inst_27031__$1)){
var statearr_27083_27112 = state_27078__$1;
(statearr_27083_27112[(1)] = (5));

} else {
var statearr_27084_27113 = state_27078__$1;
(statearr_27084_27113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (15))){
var inst_27038 = (state_27078[(8)]);
var inst_27053 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27038);
var inst_27054 = cljs.core.first.call(null,inst_27053);
var inst_27055 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27054);
var inst_27056 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27055)].join('');
var inst_27057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27056);
var state_27078__$1 = state_27078;
var statearr_27085_27114 = state_27078__$1;
(statearr_27085_27114[(2)] = inst_27057);

(statearr_27085_27114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (13))){
var inst_27062 = (state_27078[(2)]);
var state_27078__$1 = state_27078;
var statearr_27086_27115 = state_27078__$1;
(statearr_27086_27115[(2)] = inst_27062);

(statearr_27086_27115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (6))){
var state_27078__$1 = state_27078;
var statearr_27087_27116 = state_27078__$1;
(statearr_27087_27116[(2)] = null);

(statearr_27087_27116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (17))){
var inst_27060 = (state_27078[(2)]);
var state_27078__$1 = state_27078;
var statearr_27088_27117 = state_27078__$1;
(statearr_27088_27117[(2)] = inst_27060);

(statearr_27088_27117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (3))){
var inst_27076 = (state_27078[(2)]);
var state_27078__$1 = state_27078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27078__$1,inst_27076);
} else {
if((state_val_27079 === (12))){
var inst_27037 = (state_27078[(9)]);
var inst_27051 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27037,opts);
var state_27078__$1 = state_27078;
if(cljs.core.truth_(inst_27051)){
var statearr_27089_27118 = state_27078__$1;
(statearr_27089_27118[(1)] = (15));

} else {
var statearr_27090_27119 = state_27078__$1;
(statearr_27090_27119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (2))){
var state_27078__$1 = state_27078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27078__$1,(4),ch);
} else {
if((state_val_27079 === (11))){
var inst_27038 = (state_27078[(8)]);
var inst_27043 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27044 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27038);
var inst_27045 = cljs.core.async.timeout.call(null,(1000));
var inst_27046 = [inst_27044,inst_27045];
var inst_27047 = (new cljs.core.PersistentVector(null,2,(5),inst_27043,inst_27046,null));
var state_27078__$1 = state_27078;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27078__$1,(14),inst_27047);
} else {
if((state_val_27079 === (9))){
var inst_27038 = (state_27078[(8)]);
var inst_27064 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27065 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27038);
var inst_27066 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27065);
var inst_27067 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27066)].join('');
var inst_27068 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27067);
var state_27078__$1 = (function (){var statearr_27091 = state_27078;
(statearr_27091[(10)] = inst_27064);

return statearr_27091;
})();
var statearr_27092_27120 = state_27078__$1;
(statearr_27092_27120[(2)] = inst_27068);

(statearr_27092_27120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (5))){
var inst_27031 = (state_27078[(7)]);
var inst_27033 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27034 = (new cljs.core.PersistentArrayMap(null,2,inst_27033,null));
var inst_27035 = (new cljs.core.PersistentHashSet(null,inst_27034,null));
var inst_27036 = figwheel.client.focus_msgs.call(null,inst_27035,inst_27031);
var inst_27037 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27036);
var inst_27038 = cljs.core.first.call(null,inst_27036);
var inst_27039 = figwheel.client.autoload_QMARK_.call(null);
var state_27078__$1 = (function (){var statearr_27093 = state_27078;
(statearr_27093[(9)] = inst_27037);

(statearr_27093[(8)] = inst_27038);

return statearr_27093;
})();
if(cljs.core.truth_(inst_27039)){
var statearr_27094_27121 = state_27078__$1;
(statearr_27094_27121[(1)] = (8));

} else {
var statearr_27095_27122 = state_27078__$1;
(statearr_27095_27122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (14))){
var inst_27049 = (state_27078[(2)]);
var state_27078__$1 = state_27078;
var statearr_27096_27123 = state_27078__$1;
(statearr_27096_27123[(2)] = inst_27049);

(statearr_27096_27123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (16))){
var state_27078__$1 = state_27078;
var statearr_27097_27124 = state_27078__$1;
(statearr_27097_27124[(2)] = null);

(statearr_27097_27124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (10))){
var inst_27070 = (state_27078[(2)]);
var state_27078__$1 = (function (){var statearr_27098 = state_27078;
(statearr_27098[(11)] = inst_27070);

return statearr_27098;
})();
var statearr_27099_27125 = state_27078__$1;
(statearr_27099_27125[(2)] = null);

(statearr_27099_27125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27079 === (8))){
var inst_27037 = (state_27078[(9)]);
var inst_27041 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27037,opts);
var state_27078__$1 = state_27078;
if(cljs.core.truth_(inst_27041)){
var statearr_27100_27126 = state_27078__$1;
(statearr_27100_27126[(1)] = (11));

} else {
var statearr_27101_27127 = state_27078__$1;
(statearr_27101_27127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__22661__auto___27109,ch))
;
return ((function (switch__22549__auto__,c__22661__auto___27109,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22550__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22550__auto____0 = (function (){
var statearr_27105 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27105[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22550__auto__);

(statearr_27105[(1)] = (1));

return statearr_27105;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22550__auto____1 = (function (state_27078){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_27078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e27106){if((e27106 instanceof Object)){
var ex__22553__auto__ = e27106;
var statearr_27107_27128 = state_27078;
(statearr_27107_27128[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27129 = state_27078;
state_27078 = G__27129;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22550__auto__ = function(state_27078){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22550__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22550__auto____1.call(this,state_27078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22550__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22550__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___27109,ch))
})();
var state__22663__auto__ = (function (){var statearr_27108 = f__22662__auto__.call(null);
(statearr_27108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___27109);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___27109,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27130_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27130_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27137 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27137){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27135 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27136 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27136;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27135;
}}catch (e27134){if((e27134 instanceof Error)){
var e = e27134;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27137], null));
} else {
var e = e27134;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27137))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27138){
var map__27145 = p__27138;
var map__27145__$1 = ((((!((map__27145 == null)))?((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27145):map__27145);
var opts = map__27145__$1;
var build_id = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27145,map__27145__$1,opts,build_id){
return (function (p__27147){
var vec__27148 = p__27147;
var map__27149 = cljs.core.nth.call(null,vec__27148,(0),null);
var map__27149__$1 = ((((!((map__27149 == null)))?((((map__27149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27149):map__27149);
var msg = map__27149__$1;
var msg_name = cljs.core.get.call(null,map__27149__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27148,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27148,map__27149,map__27149__$1,msg,msg_name,_,map__27145,map__27145__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27148,map__27149,map__27149__$1,msg,msg_name,_,map__27145,map__27145__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27145,map__27145__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27155){
var vec__27156 = p__27155;
var map__27157 = cljs.core.nth.call(null,vec__27156,(0),null);
var map__27157__$1 = ((((!((map__27157 == null)))?((((map__27157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27157):map__27157);
var msg = map__27157__$1;
var msg_name = cljs.core.get.call(null,map__27157__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27156,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27159){
var map__27169 = p__27159;
var map__27169__$1 = ((((!((map__27169 == null)))?((((map__27169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27169):map__27169);
var on_compile_warning = cljs.core.get.call(null,map__27169__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27169__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27169,map__27169__$1,on_compile_warning,on_compile_fail){
return (function (p__27171){
var vec__27172 = p__27171;
var map__27173 = cljs.core.nth.call(null,vec__27172,(0),null);
var map__27173__$1 = ((((!((map__27173 == null)))?((((map__27173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27173):map__27173);
var msg = map__27173__$1;
var msg_name = cljs.core.get.call(null,map__27173__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27172,(1));
var pred__27175 = cljs.core._EQ_;
var expr__27176 = msg_name;
if(cljs.core.truth_(pred__27175.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27176))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27175.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27176))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27169,map__27169__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto__,msg_hist,msg_names,msg){
return (function (state_27392){
var state_val_27393 = (state_27392[(1)]);
if((state_val_27393 === (7))){
var inst_27316 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27316)){
var statearr_27394_27440 = state_27392__$1;
(statearr_27394_27440[(1)] = (8));

} else {
var statearr_27395_27441 = state_27392__$1;
(statearr_27395_27441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (20))){
var inst_27386 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27396_27442 = state_27392__$1;
(statearr_27396_27442[(2)] = inst_27386);

(statearr_27396_27442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (27))){
var inst_27382 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27397_27443 = state_27392__$1;
(statearr_27397_27443[(2)] = inst_27382);

(statearr_27397_27443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (1))){
var inst_27309 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27309)){
var statearr_27398_27444 = state_27392__$1;
(statearr_27398_27444[(1)] = (2));

} else {
var statearr_27399_27445 = state_27392__$1;
(statearr_27399_27445[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (24))){
var inst_27384 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27400_27446 = state_27392__$1;
(statearr_27400_27446[(2)] = inst_27384);

(statearr_27400_27446[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (4))){
var inst_27390 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27392__$1,inst_27390);
} else {
if((state_val_27393 === (15))){
var inst_27388 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27401_27447 = state_27392__$1;
(statearr_27401_27447[(2)] = inst_27388);

(statearr_27401_27447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (21))){
var inst_27347 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27402_27448 = state_27392__$1;
(statearr_27402_27448[(2)] = inst_27347);

(statearr_27402_27448[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (31))){
var inst_27371 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27371)){
var statearr_27403_27449 = state_27392__$1;
(statearr_27403_27449[(1)] = (34));

} else {
var statearr_27404_27450 = state_27392__$1;
(statearr_27404_27450[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (32))){
var inst_27380 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27405_27451 = state_27392__$1;
(statearr_27405_27451[(2)] = inst_27380);

(statearr_27405_27451[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (33))){
var inst_27369 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27406_27452 = state_27392__$1;
(statearr_27406_27452[(2)] = inst_27369);

(statearr_27406_27452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (13))){
var inst_27330 = figwheel.client.heads_up.clear.call(null);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(16),inst_27330);
} else {
if((state_val_27393 === (22))){
var inst_27351 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27352 = figwheel.client.heads_up.append_message.call(null,inst_27351);
var state_27392__$1 = state_27392;
var statearr_27407_27453 = state_27392__$1;
(statearr_27407_27453[(2)] = inst_27352);

(statearr_27407_27453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (36))){
var inst_27378 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27408_27454 = state_27392__$1;
(statearr_27408_27454[(2)] = inst_27378);

(statearr_27408_27454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (29))){
var inst_27362 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27409_27455 = state_27392__$1;
(statearr_27409_27455[(2)] = inst_27362);

(statearr_27409_27455[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (6))){
var inst_27311 = (state_27392[(7)]);
var state_27392__$1 = state_27392;
var statearr_27410_27456 = state_27392__$1;
(statearr_27410_27456[(2)] = inst_27311);

(statearr_27410_27456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (28))){
var inst_27358 = (state_27392[(2)]);
var inst_27359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27360 = figwheel.client.heads_up.display_warning.call(null,inst_27359);
var state_27392__$1 = (function (){var statearr_27411 = state_27392;
(statearr_27411[(8)] = inst_27358);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(29),inst_27360);
} else {
if((state_val_27393 === (25))){
var inst_27356 = figwheel.client.heads_up.clear.call(null);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(28),inst_27356);
} else {
if((state_val_27393 === (34))){
var inst_27373 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(37),inst_27373);
} else {
if((state_val_27393 === (17))){
var inst_27338 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27412_27457 = state_27392__$1;
(statearr_27412_27457[(2)] = inst_27338);

(statearr_27412_27457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (3))){
var inst_27328 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27328)){
var statearr_27413_27458 = state_27392__$1;
(statearr_27413_27458[(1)] = (13));

} else {
var statearr_27414_27459 = state_27392__$1;
(statearr_27414_27459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (12))){
var inst_27324 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27415_27460 = state_27392__$1;
(statearr_27415_27460[(2)] = inst_27324);

(statearr_27415_27460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (2))){
var inst_27311 = (state_27392[(7)]);
var inst_27311__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27392__$1 = (function (){var statearr_27416 = state_27392;
(statearr_27416[(7)] = inst_27311__$1);

return statearr_27416;
})();
if(cljs.core.truth_(inst_27311__$1)){
var statearr_27417_27461 = state_27392__$1;
(statearr_27417_27461[(1)] = (5));

} else {
var statearr_27418_27462 = state_27392__$1;
(statearr_27418_27462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (23))){
var inst_27354 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27354)){
var statearr_27419_27463 = state_27392__$1;
(statearr_27419_27463[(1)] = (25));

} else {
var statearr_27420_27464 = state_27392__$1;
(statearr_27420_27464[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (35))){
var state_27392__$1 = state_27392;
var statearr_27421_27465 = state_27392__$1;
(statearr_27421_27465[(2)] = null);

(statearr_27421_27465[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (19))){
var inst_27349 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27349)){
var statearr_27422_27466 = state_27392__$1;
(statearr_27422_27466[(1)] = (22));

} else {
var statearr_27423_27467 = state_27392__$1;
(statearr_27423_27467[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (11))){
var inst_27320 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27424_27468 = state_27392__$1;
(statearr_27424_27468[(2)] = inst_27320);

(statearr_27424_27468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (9))){
var inst_27322 = figwheel.client.heads_up.clear.call(null);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(12),inst_27322);
} else {
if((state_val_27393 === (5))){
var inst_27313 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27392__$1 = state_27392;
var statearr_27425_27469 = state_27392__$1;
(statearr_27425_27469[(2)] = inst_27313);

(statearr_27425_27469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (14))){
var inst_27340 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27340)){
var statearr_27426_27470 = state_27392__$1;
(statearr_27426_27470[(1)] = (18));

} else {
var statearr_27427_27471 = state_27392__$1;
(statearr_27427_27471[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (26))){
var inst_27364 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27364)){
var statearr_27428_27472 = state_27392__$1;
(statearr_27428_27472[(1)] = (30));

} else {
var statearr_27429_27473 = state_27392__$1;
(statearr_27429_27473[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (16))){
var inst_27332 = (state_27392[(2)]);
var inst_27333 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27334 = figwheel.client.format_messages.call(null,inst_27333);
var inst_27335 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27336 = figwheel.client.heads_up.display_error.call(null,inst_27334,inst_27335);
var state_27392__$1 = (function (){var statearr_27430 = state_27392;
(statearr_27430[(9)] = inst_27332);

return statearr_27430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(17),inst_27336);
} else {
if((state_val_27393 === (30))){
var inst_27366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27367 = figwheel.client.heads_up.display_warning.call(null,inst_27366);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(33),inst_27367);
} else {
if((state_val_27393 === (10))){
var inst_27326 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27431_27474 = state_27392__$1;
(statearr_27431_27474[(2)] = inst_27326);

(statearr_27431_27474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (18))){
var inst_27342 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27343 = figwheel.client.format_messages.call(null,inst_27342);
var inst_27344 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27345 = figwheel.client.heads_up.display_error.call(null,inst_27343,inst_27344);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(21),inst_27345);
} else {
if((state_val_27393 === (37))){
var inst_27375 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27432_27475 = state_27392__$1;
(statearr_27432_27475[(2)] = inst_27375);

(statearr_27432_27475[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (8))){
var inst_27318 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(11),inst_27318);
} else {
return null;
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
});})(c__22661__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22549__auto__,c__22661__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto____0 = (function (){
var statearr_27436 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27436[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto__);

(statearr_27436[(1)] = (1));

return statearr_27436;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto____1 = (function (state_27392){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_27392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e27437){if((e27437 instanceof Object)){
var ex__22553__auto__ = e27437;
var statearr_27438_27476 = state_27392;
(statearr_27438_27476[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27477 = state_27392;
state_27392 = G__27477;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto__ = function(state_27392){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto____1.call(this,state_27392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto__,msg_hist,msg_names,msg))
})();
var state__22663__auto__ = (function (){var statearr_27439 = f__22662__auto__.call(null);
(statearr_27439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto__);

return statearr_27439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__,msg_hist,msg_names,msg))
);

return c__22661__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22661__auto___27540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___27540,ch){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___27540,ch){
return (function (state_27523){
var state_val_27524 = (state_27523[(1)]);
if((state_val_27524 === (1))){
var state_27523__$1 = state_27523;
var statearr_27525_27541 = state_27523__$1;
(statearr_27525_27541[(2)] = null);

(statearr_27525_27541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (2))){
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(4),ch);
} else {
if((state_val_27524 === (3))){
var inst_27521 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27523__$1,inst_27521);
} else {
if((state_val_27524 === (4))){
var inst_27511 = (state_27523[(7)]);
var inst_27511__$1 = (state_27523[(2)]);
var state_27523__$1 = (function (){var statearr_27526 = state_27523;
(statearr_27526[(7)] = inst_27511__$1);

return statearr_27526;
})();
if(cljs.core.truth_(inst_27511__$1)){
var statearr_27527_27542 = state_27523__$1;
(statearr_27527_27542[(1)] = (5));

} else {
var statearr_27528_27543 = state_27523__$1;
(statearr_27528_27543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (5))){
var inst_27511 = (state_27523[(7)]);
var inst_27513 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27511);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(8),inst_27513);
} else {
if((state_val_27524 === (6))){
var state_27523__$1 = state_27523;
var statearr_27529_27544 = state_27523__$1;
(statearr_27529_27544[(2)] = null);

(statearr_27529_27544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (7))){
var inst_27519 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27530_27545 = state_27523__$1;
(statearr_27530_27545[(2)] = inst_27519);

(statearr_27530_27545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (8))){
var inst_27515 = (state_27523[(2)]);
var state_27523__$1 = (function (){var statearr_27531 = state_27523;
(statearr_27531[(8)] = inst_27515);

return statearr_27531;
})();
var statearr_27532_27546 = state_27523__$1;
(statearr_27532_27546[(2)] = null);

(statearr_27532_27546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22661__auto___27540,ch))
;
return ((function (switch__22549__auto__,c__22661__auto___27540,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22550__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22550__auto____0 = (function (){
var statearr_27536 = [null,null,null,null,null,null,null,null,null];
(statearr_27536[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22550__auto__);

(statearr_27536[(1)] = (1));

return statearr_27536;
});
var figwheel$client$heads_up_plugin_$_state_machine__22550__auto____1 = (function (state_27523){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_27523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e27537){if((e27537 instanceof Object)){
var ex__22553__auto__ = e27537;
var statearr_27538_27547 = state_27523;
(statearr_27538_27547[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27548 = state_27523;
state_27523 = G__27548;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22550__auto__ = function(state_27523){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22550__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22550__auto____1.call(this,state_27523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22550__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22550__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___27540,ch))
})();
var state__22663__auto__ = (function (){var statearr_27539 = f__22662__auto__.call(null);
(statearr_27539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___27540);

return statearr_27539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___27540,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto__){
return (function (state_27569){
var state_val_27570 = (state_27569[(1)]);
if((state_val_27570 === (1))){
var inst_27564 = cljs.core.async.timeout.call(null,(3000));
var state_27569__$1 = state_27569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27569__$1,(2),inst_27564);
} else {
if((state_val_27570 === (2))){
var inst_27566 = (state_27569[(2)]);
var inst_27567 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27569__$1 = (function (){var statearr_27571 = state_27569;
(statearr_27571[(7)] = inst_27566);

return statearr_27571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27569__$1,inst_27567);
} else {
return null;
}
}
});})(c__22661__auto__))
;
return ((function (switch__22549__auto__,c__22661__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22550__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22550__auto____0 = (function (){
var statearr_27575 = [null,null,null,null,null,null,null,null];
(statearr_27575[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22550__auto__);

(statearr_27575[(1)] = (1));

return statearr_27575;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22550__auto____1 = (function (state_27569){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_27569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e27576){if((e27576 instanceof Object)){
var ex__22553__auto__ = e27576;
var statearr_27577_27579 = state_27569;
(statearr_27577_27579[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27580 = state_27569;
state_27569 = G__27580;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22550__auto__ = function(state_27569){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22550__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22550__auto____1.call(this,state_27569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22550__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22550__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto__))
})();
var state__22663__auto__ = (function (){var statearr_27578 = f__22662__auto__.call(null);
(statearr_27578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto__);

return statearr_27578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__))
);

return c__22661__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27581){
var map__27588 = p__27581;
var map__27588__$1 = ((((!((map__27588 == null)))?((((map__27588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27588):map__27588);
var ed = map__27588__$1;
var formatted_exception = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27590_27594 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27591_27595 = null;
var count__27592_27596 = (0);
var i__27593_27597 = (0);
while(true){
if((i__27593_27597 < count__27592_27596)){
var msg_27598 = cljs.core._nth.call(null,chunk__27591_27595,i__27593_27597);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27598);

var G__27599 = seq__27590_27594;
var G__27600 = chunk__27591_27595;
var G__27601 = count__27592_27596;
var G__27602 = (i__27593_27597 + (1));
seq__27590_27594 = G__27599;
chunk__27591_27595 = G__27600;
count__27592_27596 = G__27601;
i__27593_27597 = G__27602;
continue;
} else {
var temp__4425__auto___27603 = cljs.core.seq.call(null,seq__27590_27594);
if(temp__4425__auto___27603){
var seq__27590_27604__$1 = temp__4425__auto___27603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27590_27604__$1)){
var c__17658__auto___27605 = cljs.core.chunk_first.call(null,seq__27590_27604__$1);
var G__27606 = cljs.core.chunk_rest.call(null,seq__27590_27604__$1);
var G__27607 = c__17658__auto___27605;
var G__27608 = cljs.core.count.call(null,c__17658__auto___27605);
var G__27609 = (0);
seq__27590_27594 = G__27606;
chunk__27591_27595 = G__27607;
count__27592_27596 = G__27608;
i__27593_27597 = G__27609;
continue;
} else {
var msg_27610 = cljs.core.first.call(null,seq__27590_27604__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27610);

var G__27611 = cljs.core.next.call(null,seq__27590_27604__$1);
var G__27612 = null;
var G__27613 = (0);
var G__27614 = (0);
seq__27590_27594 = G__27611;
chunk__27591_27595 = G__27612;
count__27592_27596 = G__27613;
i__27593_27597 = G__27614;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27615){
var map__27618 = p__27615;
var map__27618__$1 = ((((!((map__27618 == null)))?((((map__27618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27618):map__27618);
var w = map__27618__$1;
var message = cljs.core.get.call(null,map__27618__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16843__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16843__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16843__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27626 = cljs.core.seq.call(null,plugins);
var chunk__27627 = null;
var count__27628 = (0);
var i__27629 = (0);
while(true){
if((i__27629 < count__27628)){
var vec__27630 = cljs.core._nth.call(null,chunk__27627,i__27629);
var k = cljs.core.nth.call(null,vec__27630,(0),null);
var plugin = cljs.core.nth.call(null,vec__27630,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27632 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27626,chunk__27627,count__27628,i__27629,pl_27632,vec__27630,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27632.call(null,msg_hist);
});})(seq__27626,chunk__27627,count__27628,i__27629,pl_27632,vec__27630,k,plugin))
);
} else {
}

var G__27633 = seq__27626;
var G__27634 = chunk__27627;
var G__27635 = count__27628;
var G__27636 = (i__27629 + (1));
seq__27626 = G__27633;
chunk__27627 = G__27634;
count__27628 = G__27635;
i__27629 = G__27636;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27626);
if(temp__4425__auto__){
var seq__27626__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27626__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__27626__$1);
var G__27637 = cljs.core.chunk_rest.call(null,seq__27626__$1);
var G__27638 = c__17658__auto__;
var G__27639 = cljs.core.count.call(null,c__17658__auto__);
var G__27640 = (0);
seq__27626 = G__27637;
chunk__27627 = G__27638;
count__27628 = G__27639;
i__27629 = G__27640;
continue;
} else {
var vec__27631 = cljs.core.first.call(null,seq__27626__$1);
var k = cljs.core.nth.call(null,vec__27631,(0),null);
var plugin = cljs.core.nth.call(null,vec__27631,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27641 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27626,chunk__27627,count__27628,i__27629,pl_27641,vec__27631,k,plugin,seq__27626__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27641.call(null,msg_hist);
});})(seq__27626,chunk__27627,count__27628,i__27629,pl_27641,vec__27631,k,plugin,seq__27626__$1,temp__4425__auto__))
);
} else {
}

var G__27642 = cljs.core.next.call(null,seq__27626__$1);
var G__27643 = null;
var G__27644 = (0);
var G__27645 = (0);
seq__27626 = G__27642;
chunk__27627 = G__27643;
count__27628 = G__27644;
i__27629 = G__27645;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27646 = [];
var len__17913__auto___27649 = arguments.length;
var i__17914__auto___27650 = (0);
while(true){
if((i__17914__auto___27650 < len__17913__auto___27649)){
args27646.push((arguments[i__17914__auto___27650]));

var G__27651 = (i__17914__auto___27650 + (1));
i__17914__auto___27650 = G__27651;
continue;
} else {
}
break;
}

var G__27648 = args27646.length;
switch (G__27648) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27646.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17920__auto__ = [];
var len__17913__auto___27657 = arguments.length;
var i__17914__auto___27658 = (0);
while(true){
if((i__17914__auto___27658 < len__17913__auto___27657)){
args__17920__auto__.push((arguments[i__17914__auto___27658]));

var G__27659 = (i__17914__auto___27658 + (1));
i__17914__auto___27658 = G__27659;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27654){
var map__27655 = p__27654;
var map__27655__$1 = ((((!((map__27655 == null)))?((((map__27655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27655):map__27655);
var opts = map__27655__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27653){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27653));
});

//# sourceMappingURL=client.js.map