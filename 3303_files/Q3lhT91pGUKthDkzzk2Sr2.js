if (self.CavalryLogger) { CavalryLogger.start_js(["kDPYF"]); }

__d("LiveVideoCometBadge_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LiveVideoCometBadge_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoBlurBackgroundContainer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoBlurBackgroundContainer_video",selections:[{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWithLiveVideoEndscreen_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreen_video",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"live_end_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeProgressPreviewThumbnailOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration_in_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_last_play_position_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometBlurryImagePreview.react",["React","getComputedStyle","mergeRefs","useCometAriaID","useCometUniqueID","useLayoutEffect_SAFE_FOR_SSR","useSetAttributeRef"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.alt,d=a.blur,e=a.height,f=a.previewData,h=a.width,i=babelHelpers.objectWithoutPropertiesLoose(a,["alt","blur","height","previewData","width"]);a=(a=a.style)!=null?a:{};var j=a.height,k=a.width;d=(a=d)!=null?a:1.2;a=b("useCometUniqueID")();var l=b("useSetAttributeRef")("id",a),m="url(#"+a+")",n=b("useSetAttributeRef")("filter",m),o=b("useCometAriaID")("aria-labelledby"),p=o[0],q=p[0];p=p[1];o=o[1];var r=o[0],s=o[1],t=g.useRef(null);o=g.useMemo(function(){return c!=null?b("mergeRefs")(s,t):t},[c,s,t]);var u=g.useState(e!==void 0||j!==void 0||h!==void 0||k!==void 0),v=u[0],w=u[1];b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=t.current;if(!(a instanceof SVGSVGElement))return;if(e!==void 0||j!==void 0||h!==void 0||k!==void 0){w(!0);return}var c=a.style.display,d=b("getComputedStyle")(a);a.style.display="none";w(d!=null&&(d.height!==f.height+"px"||d.width!==f.width+"px"));a.style.display=c},[e,f.height,f.width,j,k,h]);return g.jsxs("svg",babelHelpers["extends"]({},i,c!=null?r:null,{height:(u=e)!=null?u:v?void 0:f.height,preserveAspectRatio:"none",ref:o,role:"img",viewBox:"0 0 "+f.width+" "+f.height,width:(i=h)!=null?i:v?void 0:f.width,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[c!=null&&g.jsx("title",babelHelpers["extends"]({},q,{ref:p,children:c})),g.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",id:a,ref:l,suppressHydrationWarning:!0,children:[g.jsx("feGaussianBlur",{edgeMode:"duplicate",stdDeviation:d}),g.jsx("feComponentTransfer",{children:g.jsx("feFuncA",{tableValues:"1 1",type:"discrete"})})]}),g.jsx("image",{filter:m,height:f.height,ref:n,suppressHydrationWarning:!0,width:f.width,x:"0",xlinkHref:f.dataURI,y:"0"})]}))}}),null);
__d("getGamingCaller",["qex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){var a;a=(a=b("qex")._("1605343"))!=null?a:!1;return a?"games_comet_chaining":"tahoe"}}),null);
__d("LiveVideoCometBadge.react",["fbt","BaseRow.react","BaseRowItem.react","CometRelay","React","TetraText.react","stylex","LiveVideoCometBadge_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k=function(a,b,c){if(a)return g._("\u5373\u6642\u65b0\u805e\u76f4\u64ad");return c?g._("\u9996\u6620"):b?g._("\u76f4\u64ad"):null};function a(a){var c=a.pulse;c=c===void 0?!1:c;var d=a.size;d=d===void 0?"small":d;a=a.video;a=b("CometRelay").useFragment(h!==void 0?h:h=b("LiveVideoCometBadge_video.graphql"),a);var e=!!a.breaking_status,f=!!a.is_live_streaming;a=!!a.is_premiere;return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe({"background-color-1":"l44iypv3","border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","box-sizing-1":"rq0escxv","display-1":"pq6dq46d","height-1":"datstx6m","margin-top-1":"rs0gx3tq","margin-end-1":"kady6ibp","margin-bottom-1":"dicw6rsg","margin-start-1":"dwxx2s2f"},d==="large"?{"padding-top-1":"l29c1vbm","padding-end-1":"dflh9lhu","padding-bottom-1":"j7796vcc","padding-start-1":"scb9dxdr"}:null,d==="small"?{"padding-top-1":"ipjc6fyt","padding-end-1":"ph5uu5jm","padding-bottom-1":"iuny7tx3","padding-start-1":"b3onmgus"}:null,c?{"animation-direction-1":"afxn4irw","animation-duration-1":"m8weaby5","animation-iteration-count-1":"ee40wjg4","animation-name-1":"q1gqmpn5","animation-timing-function-1":"jbu8tgem"}:null),children:j.jsx(b("BaseRow.react"),{align:"center",verticalAlign:"center",children:j.jsx(b("BaseRowItem.react"),{children:j.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:d==="large"?"bodyLink3":"bodyLink4",children:k(e,f,a)})})})})}}),null);
__d("getPreviewDataFromImagePreviewPayload",["FBLogger","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g="data:image/jpeg;base64,",h=160,i=162,j=42;function k(a,c){c===void 0&&(c=0);a=atob(a);if(a.length<=3)throw b("unrecoverableViolation")("The preview payload was "+a.length+" byte(s) long when it should be 4 or more. The first byte is the version, the second the width, and the third the height. The 4th byte and onward is the image data.","comet_infra");var d=new Uint8Array(a.length+c);for(var e=0;e<a.length;e++)d[c+e]=a.charCodeAt(e);return d}var l;function m(){l==null&&(l=k("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA=="));return l}function a(a){var c=m();try{a=k(a,c.length-3);var d=a[c.length-1],e=a[c.length-3],f=a[c.length-2];if(d>j)throw b("unrecoverableViolation")("Tried to decode a payload whose height was "+d+". The maximum "+("is "+j+"."),"comet_infra");if(f>j)throw b("unrecoverableViolation")("Tried to decode a payload whose width was "+f+". The maximum "+("is "+j+"."),"comet_infra");a.set(c,0);a[h]=d;a[i]=f;c=btoa(String.fromCharCode.apply(null,a));return{dataURI:""+g+c,height:d,width:f,version:e}}catch(c){a=b("FBLogger")("images_infra");c instanceof Error&&a.catching(c);a.warn("Failed to decode a preview image payload. Falling back with a blank image.");return null}}}),null);
__d("VideoBlurBackgroundContainer.react",["CometBlurryImagePreview.react","CometImage.react","CometRelay","React","getPreviewDataFromImagePreviewPayload","stylex","VideoBlurBackgroundContainer_video.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h,i=b("React"),j={blurryImage:{filter:"nq2o82sz",transform:"cyijgrg9"},image:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",height:"datstx6m",opacity:"l8rlqa9s",width:"k4urcfbm",zIndex:"du4w35lb"},root:{backgroundColor:"tqsryivl",height:"datstx6m",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"}};function a(a,c){var d,e=a.children,f=a.video;a=a.xstyle;d=(d=f.preferred_thumbnail)==null?void 0:d.image_preview_payload;var g;if(d!=null){d=b("getPreviewDataFromImagePreviewPayload")(d);d!=null&&(g=i.jsx(b("CometBlurryImagePreview.react"),{className:(h||(h=b("stylex")))(j.image),previewData:d}))}d=(d=f.preferred_thumbnail)==null?void 0:(f=d.image)==null?void 0:f.uri;g==null&&d!=null&&(g=i.jsx(b("CometImage.react"),{src:d,xstyle:[j.blurryImage,j.image]}));return i.jsxs("div",{className:(h||(h=b("stylex")))(j.root,a),ref:c,children:[g,e]})}c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED(i.forwardRef(a),{video:g!==void 0?g:g=b("VideoBlurBackgroundContainer_video.graphql")});e.exports=c}),null);
__d("VideoLocationContextUtils",[],(function(a,b,c,d,e,f){"use strict";f.getVideoChainingCallerFromFeedLocation=a;f.getVideoChannelEntryPointFromFeedLocation=b;f.getChannelIDFromFeedLocation=c;var g="387437888106301";function a(a){switch(a){case"PAGE_TIMELINE":return"CHANNEL_VIEW_FROM_PAGE_TIMELINE";case"TIMELINE":return"CHANNEL_VIEW_FROM_USER_TIMELINE";case"GROUP":case"GROUP_HOISTED":return"CHANNEL_VIEW_FROM_GROUP_TIMELINE";case"SEARCH":return"CHANNEL_VIEW_FROM_SEARCH";case"NEWSFEED":return"CHANNEL_VIEW_FROM_NEWSFEED";case"VIDEO_HOME_FEED":return"CHANNEL_VIEW_FROM_VIDEO_HOME";default:return"CHANNEL_VIEW_FROM_UNKNOWN"}}function b(a){switch(a){case"PAGE_TIMELINE":case"PAGE_TIMELINE_PERMALINK":return"PAGE";case"TIMELINE":return"PROFILE";case"GROUP":case"GROUP_HOISTED":case"GROUP_PERMALINK":return"GROUP";case"SEARCH":return"SEARCH";case"NEWSFEED":return"NEWSFEED";case"GAMEROOM_FEED":return"GAMES_VIDEO_HOME";default:return"UNKNOWN"}}function c(a,b,c){switch(a){case"PAGE_TIMELINE":return(a=b)!=null?a:"";case"NEWSFEED":case"VIDEO_HOME_FEED":return c!=null&&c!==""?g+":"+c:""+g;default:return""}}}),null);
__d("VideoPlayerWithLiveVideoEndscreen.react",["fbt","CometRelay","React","TetraTextPairing.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","stylex","VideoPlayerWithLiveVideoEndscreen_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){var c=b("VideoPlayerHooks").useEnded(),d=b("VideoPlayerHooks").useIsLive(),e=b("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWithLiveVideoEndscreen_video.graphql"),a.video);if(!c||!d)return null;c=g._("\u73fe\u5834\u76f4\u64ad\u5df2\u7d50\u675f\u3002");return i.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:i.jsx("div",{className:"taijpn5t cbu4d94t j83agx80 tqsryivl bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",children:i.jsxs("div",{className:"d46ut3hm",children:[i.jsx(b("TetraTextPairing.react"),{body:e==null?void 0:(d=e.live_end_text)==null?void 0:d.text,bodyColor:"white",headline:c,headlineColor:"white",level:2,textAlign:"center"}),a.children]})})})}}),null);
__d("CometVideoHomeProgressPreviewBar.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.percentageFilled;if(a<=0)return null;a=Math.max(5,a);a=Math.min(100,a);return g.jsx("div",{className:"tkr6xdv7 k4urcfbm pmk7jnqg hzruof5a mw227v9j i09qtzwb m8invena",children:g.jsx("div",{className:"mw227v9j is6700om",style:{width:a+"%"}})})}}),null);
__d("CometVideoHomeProgressPreviewThumbnailOverlay.react",["CometRelay","CometVideoHomeProgressPreviewBar.react","React","CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c;a=a.video;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql"),a);var d=a.viewer_last_play_position_ms,e=a.playable_duration_in_ms;c=(c=a.has_viewer_watched_show_video)!=null?c:!1;if(d==null||e==null||c||a.broadcast_status==="LIVE")return null;c=100*d/e;return h.jsx(b("CometVideoHomeProgressPreviewBar.react"),{percentageFilled:c})}}),null);
__d("CometWatchAndScrollTriggerContextProvider",["CometWatchAndScrollTriggerContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.children;var c=g.useState(!1),d=c[0],e=c[1];c=g.useMemo(function(){return{isControlShown:d,setIsControlShown:e}},[d,e]);return g.jsx(b("CometWatchAndScrollTriggerContext").Provider,{value:c,children:a})}}),null);
__d("CometAIProductTagSuggestionsUtil_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"CometAIProductTagSuggestionsUtil_photo"};e.exports=a}),null);
__d("CometProductTaggingConstants",[],(function(a,b,c,d,e,f){"use strict";a=7;f.DOT_HINT_BORDER_SIZE=a;b=16;f.DOT_HINT_DOT_SIZE=b;c=8;f.DOT_HINT_PADDING=c;d=46;f.TOTAL_DOT_SIZE=d;e=5;f.USER_TAGGING_TOLERANCE=e}),null);
__d("CometAIProductTagSuggestionsUtil.react",["CometProductTaggingConstants","CometRelay","gkx","CometAIProductTagSuggestionsUtil_photo.graphql"],(function(a,b,c,d,e,f){"use strict";f.processAIProductTagSuggestionsQueryResponse=a;f.isPointNearbyPoint=k;f.getUntaggedKnownTags=c;f.getUntaggedUnknownTags=d;f.canUsePretagExperience=e;var g,h=90,i=.35,j=g!==void 0?g:g=b("CometAIProductTagSuggestionsUtil_photo.graphql");function a(a){var b=new Map();a.product_tag_suggestions.map(function(a){var c=a.photo_id;a=a.suggestions;if(c==null||a==null)return;var d=[],e=[];a.map(function(a){a=(a=a)!=null?a:{};var b=a.bottom_right,c=a.center_x,f=a.center_y,g=a.products,j=a.score;a=a.top_left;if(c==null||f==null||j==null)return;c=c*100;f=f*100;g=g==null?void 0:g[0];var k=g==null?void 0:g.score;g=(g=g==null?void 0:g.product_item)!=null?g:{};var l=g.id,m=g.listing_price,n=g.name;g=g.primary_listing_photo;b={boundingBoxJSON:JSON.stringify({bottomRight:b,topLeft:a}),boxScore:j,productID:l,productScore:k};if(k!=null&&k<h&&d.length===0){if(l==null||n==null)return null;k={id:l,image_uri:g==null?void 0:(a=g.image)==null?void 0:a.uri,name:n,product_price:m==null?void 0:m.formatted_amount};l=babelHelpers["extends"]({},b,{source:"AI_suggested",taggee:k,x:c,y:f});d.push(l)}else j>i&&e.push(babelHelpers["extends"]({},b,{x:c,y:f}))});b.set(c,{knownSuggestions:d,unknownSuggestions:e})});return b}function k(a,c,d,e){return a>=d-b("CometProductTaggingConstants").USER_TAGGING_TOLERANCE&&a<=d+b("CometProductTaggingConstants").USER_TAGGING_TOLERANCE&&c>=e-b("CometProductTaggingConstants").USER_TAGGING_TOLERANCE&&c<=e+b("CometProductTaggingConstants").USER_TAGGING_TOLERANCE}function l(a,b){return a.productID===b.productID||k(a.x,a.y,b.x,b.y)}function m(a){return(a=a==null?void 0:(a=a.photo_product_tags)==null?void 0:a.map(function(a){var b;b=(b=a.product_item)==null?void 0:b.id;a=a.xy_location;var c=a==null?void 0:a.x;a=a==null?void 0:a.y;return c===void 0||c===null||a===void 0||a===null||b===null||b===void 0?null:{productID:b,x:c,y:a}}).filter(Boolean))!=null?a:[]}function c(a,c){a=b("CometRelay").readInlineData(j,a);c=c==null?void 0:c.get((c=a==null?void 0:a.id)!=null?c:"");var d=m(a);if(!c)return[];a=c==null?void 0:c.filter(function(a){var b=(d==null?void 0:d.filter(function(b){return l({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b});return a}function d(a,c){a=b("CometRelay").readInlineData(j,a);c=c==null?void 0:c.get((c=a==null?void 0:a.id)!=null?c:"");var d=m(a);if(!c)return[];a=c==null?void 0:c.filter(function(a){var b=(d==null?void 0:d.filter(function(b){return l({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b});return a}function e(a){return!a&&Boolean(b("gkx")("1781621"))}}),null);
__d("HoveredProductIDContext",["React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({hoveredProductID:null,setHoveredProductID:b("emptyFunction")});e.exports=c}),null);
__d("useIsTouchDevice",["useMatchMedia"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){return b("useMatchMedia")("(hover: none) and (pointer: coarse)")}}),null);
__d("BaseHScroll.react",["fbt","BaseAccessibleElement_DEPRECATED.react","BaseScrollableArea.react","CometPressable.react","CometTrackingNodeProvider.react","HiddenSubtreePassiveContext","Locale","React","debounce","recoverableViolation","stylex","useCometUniqueID","useIsTouchDevice","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j={collapseMargins:{paddingBottom:"ojkyduve",paddingTop:"ggysqto6"},hidden:{opacity:"b5wmifdl"},hideHorizontalScrollbar:{marginBottom:"c8r2yrt7",paddingBottom:"dy7m38rt"},hideHorizontalScrollbarContainer:{overflowY:"stjgntxs"},itemsContainer:{display:"j83agx80",flexDirection:"btwxx1t3",flexWrap:"owycx6da"},peekMask:{bottom:"i09qtzwb",display:"j83agx80",end:"n7fi1qx3",height:"datstx6m",opacity:"pedkr2u6",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",transitionDuration:"kmdw4o4n",transitionProperty:"art1omkt",transitionTimingFunction:"heur4gxb",width:"k4urcfbm",zIndex:"tkr6xdv7"},peekMaskButton:{backgroundColor:"g5ia77u1",borderTop:"qu0x051f",borderEnd:"esr5mh6w",borderBottom:"e9989ue4",borderStart:"r7d6kgcz",color:"gmql0nx0",cursor:"nhd2j8a9",display:"a8c37x1j",fontFamily:"ihxqhq3m",fontSize:"l94mrbxd",lineHeight:"aenfhxwr",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",textAlign:"i1ao9s8h",textDecoration:"myohyog2",width:"k4urcfbm",":hover":{color:"ksdfmwjs",textDecoration:"gofk2cf1"},":active":{transform:"tm8avpzi",transitionDuration:"q3fhxehl"}},positionRelative:{position:"l9j0dhe7"},root:{display:"j83agx80",flexDirection:"btwxx1t3",overflowY:"stjgntxs"},rootWrapper:{maxWidth:"d2edcug0",position:"l9j0dhe7",zIndex:"du4w35lb"},scrollAnimation:{transitionDuration:"kmdw4o4n",transitionProperty:"flx89l3n",transitionTimingFunction:"heur4gxb"}},k=250;function a(a){var c=a.accessibilityLabel,d=a.children,e=a.extendVisibilityBottom,f=a.extendVisibilityTop,l=a.horizontalSnapPadding;l=l===void 0?0:l;var m=a.horizontalSpacing,n=m===void 0?0:m;m=a.itemsToScroll;var o=m===void 0?1:m;m=a.leftArrow;var p=a.onIndexChange,q=a.peekMask,r=a.rightArrow,s=a.scrollType,t=a.snapPosition;t=t===void 0?"start":t;var u=a.startIndex;a=a.testid;u!=null&&(u<0||u>=i.Children.toArray(d).length)&&b("recoverableViolation")("The start index is not valid","comet_ui");var v=b("Locale").isRTL(),w=q!=null,x=i.useRef(null),y=i.useRef(null);a=i.useState(0);var z=a[0],A=a[1];a=i.useState(0);var B=a[0],C=a[1];a=i.useState(0);var D=a[0],E=a[1];a=i.useState(!1);var F=a[0],G=a[1];i.useEffect(function(){u!=null&&A(u)},[u]);a=i.useState(!1);var H=a[0],I=a[1];a=i.useCallback(function(){return w&&G(!0)},[w]);var J=i.useCallback(function(){return w&&G(!1)},[w]),K=b("useIsTouchDevice")(),L=s==="touch"||s==="auto"&&K;s=i.useCallback(function(a){a!=null&&C(a.offsetWidth),y.current=a},[]);var M=i.useContext(b("HiddenSubtreePassiveContext")),N=i.useCallback(b("debounce")(function(a){return a!=null&&!M.getCurrentState().hidden&&E(a.width)},k),[]);i.useEffect(function(){return function(){return N.reset()}},[N]);var O=b("useResizeObserver")(N);K=i.useCallback(function(a){a!=null&&E(a.offsetWidth),O(a)},[O]);i.useLayoutEffect(function(){if(!L){var a=x.current&&x.current.getDOMNode();a!=null&&(v?a.scrollLeft=B:a.scrollLeft=0)}},[L,B,v]);i.useLayoutEffect(function(){var a;C((a=(a=y.current)==null?void 0:a.offsetWidth)!=null?a:0)});var P=i.Children.toArray(d).length,Q=B/P;t=t==="center"?D%Q/2:l;var R=Math.floor(D/Q),S=v?1:-1,T=0-l,U=B-D+l;Q=Math.max(Math.min(Q*z-t,U),T);var V=z>0,W=z<P-1&&Q<U,X=i.useCallback(function(a){A(a),p&&p(a)},[p,A]);t=i.useCallback(function(){H!==!0&&I(!0);var a=Math.max(z-o,0);X(a)},[H,z,o,X]);T=i.useCallback(function(){H!==!0&&I(!0);var a=W?Math.min(z+o,P-1):z;X(a)},[H,z,W,P,o,X]);U=v?W:V;var Y=v?V:W,Z=v?T:t,$=v?t:T;m=!L&&m!=null&&m(Z,U);Z=!L&&r!=null&&r($,Y);var aa=i.jsx("div",{className:(h||(h=b("stylex")))(j.peekMask,!F||!V?j.hidden:null),children:i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:v?411:410,children:i.jsx(b("CometPressable.react"),{display:"inline",label:g._("\u8fd4\u56de\u7bad\u982d"),onPress:t,overlayDisabled:!0,xstyle:j.peekMaskButton,children:q})})}),ba=i.jsx("div",{className:h(j.peekMask,!F||!W?j.hidden:null),children:i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:v?410:411,children:i.jsx(b("CometPressable.react"),{display:"inline",label:g._("\u524d\u9032\u7bad\u982d"),onPress:T,overlayDisabled:!0,xstyle:j.peekMaskButton,children:q})})});U=i.Children.toArray(d).map(function(a,c){return i.jsxs("li",{className:(h||(h=b("stylex")))(j.positionRelative),style:{marginLeft:n,marginRight:n},children:[a,w&&!L&&c<z&&V&&aa,w&&!L&&c>=z+R&&W&&ba]},a.key)});r=b("useCometUniqueID")();return i.jsxs("div",{className:h(j.rootWrapper,L?j.hideHorizontalScrollbarContainer:null),onMouseEnter:a,onMouseLeave:J,ref:K,children:[v&&Z,m,!v&&Z,i.jsx("div",{className:h(j.collapseMargins),children:i.jsx("div",{style:{marginBottom:-e-1,marginTop:-f-1},children:i.jsxs(b("BaseScrollableArea.react"),{"aria-labelledby":r,horizontal:L,ref:x,testid:void 0,vertical:!1,xstyle:[j.root,L&&j.hideHorizontalScrollbar],children:[i.jsx(b("BaseAccessibleElement_DEPRECATED.react"),{id:r,children:c}),i.jsx("ul",{className:h(j.itemsContainer,H?j.scrollAnimation:null,j.positionRelative),ref:s,style:{paddingBottom:e,paddingLeft:L?l:0,paddingRight:L?l:0,paddingTop:f,transform:D>0&&!L?"translateX("+S*Q+"px)":null},children:U})]})})})]})}}),null);
__d("BaseHScrollChild.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=a.children;a=a.width;return g.jsx("div",{className:"datstx6m",style:{width:a},children:b})}}),null);
__d("CometHScrollChild.react",["BaseHScrollChild.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.jsx(b("BaseHScrollChild.react"),babelHelpers["extends"]({},a))}}),null);
__d("CometHScroll.react",["ix","fbt","BaseHScroll.react","CometAdPreviewContext","CometHScrollChild.react","CometTrackingNodeProvider.react","React","TetraCircleButton.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React");function a(a){var c=a.accessibilityLabel,d=a.arrowSize,e=d===void 0?48:d;d=a.children;var f=a.extendVisibilityBottom;f=f===void 0?16:f;var k=a.extendVisibilityTop;k=k===void 0?0:k;var l=a.horizontalSnapPadding,m=a.horizontalSpacing;m=m===void 0?0:m;var n=a.itemsToScroll,o=a.onIndexChange,p=a.peekMasking;p=p===void 0?!1:p;var q=a.scrollType;q=q===void 0?"auto":q;var r=a.snapPosition;a=a.startIndex;var s=b("CometAdPreviewContext").useCometAdPreviewContext(),t=j.jsx("div",{className:"k4urcfbm kr520xx4 j9ispegn pmk7jnqg stjgntxs ni8dbmo4 l8rlqa9s datstx6m n7fi1qx3 rq0escxv i09qtzwb l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 ovq5dppa"}),u=32-e/2;return j.jsx(b("BaseHScroll.react"),{accessibilityLabel:c,extendVisibilityBottom:f,extendVisibilityTop:k,horizontalSnapPadding:l,horizontalSpacing:m,itemsToScroll:n,leftArrow:function(a,c){return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe(s?{"pointer-events-1":"oqq733wu"}:{},{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","box-shadow-1":"fpf4h9qb","display-1":"a8c37x1j","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","top-1":"rk01pc8j","transform-0.1":"ke6wolob","transition-0.1":"d4ybr6tg","visibility-1":"n1dktuyu","z-index-1":"tkr6xdv7"},c?null:{"opacity-1":"b5wmifdl","visibility-1":"kr9hpln1"}),"data-testid":void 0,style:{left:u},children:j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:410,children:j.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("492488"),20),label:h._("\u5411\u5de6\u7bad\u982d"),onPress:a,size:e,type:"overlay"})})})},onIndexChange:o,peekMask:p?t:null,rightArrow:function(a,c){return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe(s?{"pointer-events-1":"oqq733wu"}:{},{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","box-shadow-1":"fpf4h9qb","display-1":"a8c37x1j","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","top-1":"rk01pc8j","transform-0.1":"ke6wolob","transition-0.1":"d4ybr6tg","visibility-1":"n1dktuyu","z-index-1":"tkr6xdv7"},c?null:{"opacity-1":"b5wmifdl","visibility-1":"kr9hpln1"}),"data-testid":void 0,style:{right:u},children:j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:411,children:j.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("492536"),20),label:h._("\u5411\u53f3\u7bad\u982d"),onPress:a,size:e,type:"overlay"})})})},scrollType:q,snapPosition:r,startIndex:a,children:d})}}),null);
__d("CometPhotoTaggingConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;f.BOX_BORDER_SIZE=a;b=1;f.INITIAL_PHOTO_RENDER_SCALE=b;c=94;f.TAGGING_BOX_SIZE=c}),null);
__d("CometPhotoViewerViewStateContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({highlightedKnownAITagID:null,isProductTagging:!1,knownAITags:null,tagModeEnabled:!1,unknownAITags:null});e.exports=c}),null);
__d("CometPhotoViewerViewStateDispatcherContext",["React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(b("emptyFunction"));e.exports=c}),null);
__d("ProductTaggingAiEvaluationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744233");c=b("FalcoLoggerInternal").create("product_tagging_ai_evaluation",a);e.exports=c}),null);