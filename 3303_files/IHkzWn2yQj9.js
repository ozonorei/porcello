if (self.CavalryLogger) { CavalryLogger.start_js(["0AVrW"]); }

__d("ProfileCometTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTextWithEntities_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities",selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],type:"AggregatedEntitiesAtRange",abstractKey:null};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometMetaLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("TetraishLink.react",["CometLink.react","React","TetraText.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=a.color,e=a.type;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","type"]);a=babelHelpers["extends"]({},a,{ref:c});return g.jsx(b("TetraText.react"),{color:d,type:e,children:g.jsx(b("CometLink.react"),babelHelpers["extends"]({},a,{color:d}))})}c=g.forwardRef(a);e.exports=c}),null);
__d("ProfileCometAppSectionSearchContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({isSearchEnabled:!1,refetch:null,searchQuery:null,setGlimmerComponent:function(){},setRefetch:function(){},setSearchQuery:function(){}});e.exports=c}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer",["fbt","CometRelay","CometTooltip.react","React","CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");h!==void 0?h:h=b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql");a=function(a,c){var d;d=(d=c.count)!=null?d:0;c=(c=c.sample_entities)!=null?c:[];d=d-c.length;var e=d>0;return i.jsx(b("CometTooltip.react"),{tooltip:i.jsxs(i.Fragment,{children:[c.map(function(a){if(a.__typename!=="User")return null;var b=a.id;a=a.name;return b!=null&&a!=null?i.jsx("div",{children:a},b):null}),e?i.jsx("div",{children:g._("\u4ee5\u53ca\u5176\u4ed6{count}\u4eba\u22ef\u22ef",[g._param("count",d)])}):null]}),children:a})};e.exports=a}),null);
__d("CometInlineEntityRenderer",["React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a,c){switch(c.inline_style){case"BOLD":return g.jsx("b",{children:a});case"ITALIC":return g.jsx("i",{children:a});case"UNDERLINE":return g.jsx("u",{children:a});case"CODE":return g.jsx("code",{className:"o4yrsmyh ojkyduve ggysqto6 bglqfnb7 bk57svhc kfh7ys0q b3i9ofy5",children:a});case"LIGHTSTRIKETHROUGH":return g.jsx("strike",{className:"kgtf8isp",children:a});case"STRIKETHROUGH":return g.jsx("strike",{children:a});case"SUBSCRIPT":return g.jsx("sub",{children:a});case"SUPERSCRIPT":return g.jsx("sup",{children:a});case"QUOTE":return g.jsx("blockquote",{children:a});case"UNORDEREDLIST":return g.jsx("ul",{className:"dhix69tm mf5omzu7",children:a});case"ORDEREDLIST":return g.jsx("ol",{className:"dhix69tm mf5omzu7",children:a});case"LISTITEM":return g.jsx("li",{children:a});case"HEADLINE1":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized1",children:a});case"HEADLINE2":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:a});case"HEADLINE3":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized3",children:a});case"HORIZONTALRULER":return g.jsx("hr",{});default:return a}};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer",["CometLink.react","CometRelay","React","TetraTextContext","CometMetaLinkedEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");g!==void 0?g:g=b("CometMetaLinkedEntityRenderer_entity.graphql");a=function(a,c){var d;d=(d=h.useContext(b("TetraTextContext")))==null?void 0:d.type;if(c.url==null)return a;return d==null||!d.startsWith("meta")?h.jsx(b("CometLink.react"),{href:c.url,children:a}):h.jsx(b("CometLink.react"),{color:"secondary",href:c.url,weight:d==="meta3"||d==="meta4"?"normal":"semibold",children:a})};e.exports=a}),null);
__d("ProfileCometTextWithEntities.react",["CometAggregatedEntitiesTooltipRenderer","CometContextuallyStyledAggregatedEntitiesTooltipRenderer","CometHovercardEntityRenderer","CometImageEntityRenderer","CometInlineEntityRenderer","CometLinkedEntityRenderer","CometMetaLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","React","ProfileCometTextWithEntities_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.textWithEntities,d=a.useMetaTextContext;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities","useMetaTextContext"]);c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometTextWithEntities_textWithEntities.graphql"),c);d=d!=null&&d;return h.jsx(b("CometTextWithEntitiesRelay.react"),babelHelpers["extends"]({},a,{renderers:{"*":[d?b("CometMetaLinkedEntityRenderer"):b("CometLinkedEntityRenderer")],Aggregate:[d?b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer"):b("CometAggregatedEntitiesTooltipRenderer")],Event:[b("CometHovercardEntityRenderer")],Group:[b("CometHovercardEntityRenderer")],Image:[b("CometImageEntityRenderer")()],Inline:[b("CometInlineEntityRenderer")],Page:[b("CometHovercardEntityRenderer")],User:[b("CometHovercardEntityRenderer")]},textWithEntities:c}))}}),null);
__d("ProfileCometAboutInfoDetails.react",["ProfileCometTextWithEntities.react","React","TetraTextPairing.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.color,d=a.subtitle;a=a.title;return g.jsx(b("TetraTextPairing.react"),{body:g.jsx(b("ProfileCometTextWithEntities.react"),{textWithEntities:a}),bodyColor:c,level:3,meta:d?g.jsx(b("ProfileCometTextWithEntities.react"),{textWithEntities:d}):null})}}),null);