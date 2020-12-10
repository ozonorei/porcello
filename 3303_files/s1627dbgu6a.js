if (self.CavalryLogger) { CavalryLogger.start_js(["1Ysqv"]); }

__d("FriendingCometMutualFriendsSocialContext_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:16,kind:"LocalArgument",name:"iconSize"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"FriendingCometMutualFriendsSocialContext_user",selections:[a,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"social_context_top_mutual_friends",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:[{kind:"Variable",name:"height",variableName:"iconSize"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"iconSize"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"User",abstractKey:null}}();e.exports=a}),null);
__d("FriendingCometFriendRequestCancelMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},e=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestCancelMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestCancelResponsePayload",kind:"LinkedField",name:"friend_request_cancel",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"cancelled_friend_requestee",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestCancelMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestCancelResponsePayload",kind:"LinkedField",name:"friend_request_cancel",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"cancelled_friend_requestee",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},c,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}]},params:{id:"3226051994092510",metadata:{},name:"FriendingCometFriendRequestCancelMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometFriendRequestConfirmMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"input"},b={defaultValue:null,kind:"LocalArgument",name:"refresh_num"},c={defaultValue:null,kind:"LocalArgument",name:"scale"},d=[{kind:"Variable",name:"data",variableName:"input"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},g=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}],h={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={kind:"Literal",name:"environment",value:"COMET"};return{fragment:{argumentDefinitions:[a,b,c],kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestConfirmMutation",selections:[{alias:null,args:d,concreteType:"FriendRequestAcceptResponsePayload",kind:"LinkedField",name:"friend_request_accept",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requester",plural:!1,selections:[e,f,{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometRightSideHeaderCards_viewerSideFeed"},{args:[{kind:"Literal",name:"bookmarkID",value:"2356318349"}],kind:"FragmentSpread",name:"useTopTabBadgeCount_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,b],kind:"Operation",name:"FriendingCometFriendRequestConfirmMutation",selections:[{alias:null,args:d,concreteType:"FriendRequestAcceptResponsePayload",kind:"LinkedField",name:"friend_request_accept",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requester",plural:!1,selections:[e,f,{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[h,{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},e,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[i,{kind:"Literal",name:"query_ego_units",value:!1},{kind:"Variable",name:"refresh_num",variableName:"refresh_num"}],concreteType:"SideFeedConnection",kind:"LinkedField",name:"side_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[h,{kind:"InlineFragment",selections:[{documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"PagesCometHomeAdminContainer_pagesPanel",fragmentPropName:"pagesPanel",kind:"ModuleImport"}],type:"PagesSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"FriendingCometHomeInlineRHCContainer_friendsPanel",fragmentPropName:"friendsPanel",kind:"ModuleImport"}],type:"FriendingRequestsSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"CometHomeRemindersContainer_reminderPanel",fragmentPropName:"reminderPanel",kind:"ModuleImport"}],type:"RemindersSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"CometHomeRightSideWidgetContainer_widgetContainer",fragmentPropName:"widgetContainer",kind:"ModuleImport"}],type:"CometHomeSideFeedWidgetContainer",abstractKey:null},{kind:"InlineFragment",selections:[e],type:"AdsSideFeedUnitItem",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{items:[{kind:"Literal",name:"bookmark_ids.0",value:"2356318349"}],kind:"ListValue",name:"bookmark_ids"},i,{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[h,e],storageKey:null},{alias:null,args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'},e],storageKey:null}],storageKey:null}],storageKey:'bookmarks(bookmark_ids:["2356318349"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'}],storageKey:null}],storageKey:null}]},params:{id:"3750307704981867",metadata:{},name:"FriendingCometFriendRequestConfirmMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometFriendRequestDeleteMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"input"},b={defaultValue:null,kind:"LocalArgument",name:"refresh_num"},c={defaultValue:null,kind:"LocalArgument",name:"scale"},d=[{kind:"Variable",name:"data",variableName:"input"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},g=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}],h={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={kind:"Literal",name:"environment",value:"COMET"};return{fragment:{argumentDefinitions:[a,b,c],kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestDeleteMutation",selections:[{alias:null,args:d,concreteType:"FriendRequestDeleteResponsePayload",kind:"LinkedField",name:"friend_request_delete",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requester",plural:!1,selections:[e,f,{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometRightSideHeaderCards_viewerSideFeed"},{args:[{kind:"Literal",name:"bookmarkID",value:"2356318349"}],kind:"FragmentSpread",name:"useTopTabBadgeCount_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,b],kind:"Operation",name:"FriendingCometFriendRequestDeleteMutation",selections:[{alias:null,args:d,concreteType:"FriendRequestDeleteResponsePayload",kind:"LinkedField",name:"friend_request_delete",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requester",plural:!1,selections:[e,f,{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[h,{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},e,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[i,{kind:"Literal",name:"query_ego_units",value:!1},{kind:"Variable",name:"refresh_num",variableName:"refresh_num"}],concreteType:"SideFeedConnection",kind:"LinkedField",name:"side_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[h,{kind:"InlineFragment",selections:[{documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"PagesCometHomeAdminContainer_pagesPanel",fragmentPropName:"pagesPanel",kind:"ModuleImport"}],type:"PagesSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"FriendingCometHomeInlineRHCContainer_friendsPanel",fragmentPropName:"friendsPanel",kind:"ModuleImport"}],type:"FriendingRequestsSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"CometHomeRemindersContainer_reminderPanel",fragmentPropName:"reminderPanel",kind:"ModuleImport"}],type:"RemindersSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"CometHomeRightSideWidgetContainer_widgetContainer",fragmentPropName:"widgetContainer",kind:"ModuleImport"}],type:"CometHomeSideFeedWidgetContainer",abstractKey:null},{kind:"InlineFragment",selections:[e],type:"AdsSideFeedUnitItem",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{items:[{kind:"Literal",name:"bookmark_ids.0",value:"2356318349"}],kind:"ListValue",name:"bookmark_ids"},i,{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[h,e],storageKey:null},{alias:null,args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'},e],storageKey:null}],storageKey:null}],storageKey:'bookmarks(bookmark_ids:["2356318349"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'}],storageKey:null}],storageKey:null}]},params:{id:"4189738374386264",metadata:{},name:"FriendingCometFriendRequestDeleteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometProfileListDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4374503275924173",metadata:{},name:"CometProfileListDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometProfileListDialog.entrypoint",["JSResourceForInteraction","WebPixelRatio","CometProfileListDialogQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.listType;a=a.sourceID;return{queries:{cometMutualFriendsQueryReference:{parameters:b("CometProfileListDialogQuery$Parameters"),variables:{listType:c,scale:b("WebPixelRatio").get(),sourceID:a}}}}},root:b("JSResourceForInteraction")("CometProfileListDialog.react").__setRef("CometProfileListDialog.entrypoint")};e.exports=a}),null);
__d("FriendingCometMutualFriendsText.react",["CometLazyTooltip.react","CometPressable.react","CometProfileListDialog.entrypoint","JSResource","React","TetraText.react","stylex","useCometEntryPointDialog"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("JSResource")("FriendingCometMutualFriendsSocialContextTooltipContent.react").__setRef("FriendingCometMutualFriendsText.react"),i={socialContextText:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",textOverflow:"ltmttdrg"}};function a(a){var c=a.textType,d=a.truncateContextText,e=b("useCometEntryPointDialog")(b("CometProfileListDialog.entrypoint"),{listType:"MUTUAL_FRIENDS",sourceID:a.id},"button"),f=e[0],j=e[1],k=e[2],l=e[3];e=e[4];return g.jsx(b("CometLazyTooltip.react"),{align:"start",delayContentMs:0,delayTooltipMs:100,tooltipProps:{userID:a.id},tooltipResource:h,children:g.jsx(b("CometPressable.react"),{"aria-labelledby":a.socialContextText,display:"inline",onHoverIn:k,onHoverOut:l,onPress:function(){return f({actionsByPriorityMapping:{User:[{hookConfig:{messengerWebEntryPoint:"mutual_friends_dialog"},type:"message"}]}})},onPressIn:e,overlayDisabled:!0,ref:j,xstyle:i.socialContextText,children:g.jsx(b("TetraText.react"),{color:"secondary",numberOfLines:d===!0?1:null,type:c,children:a.socialContextText})})})}}),null);
__d("FriendingCometMutualFriendsSocialContext.react",["CometRelay","FriendingCometMutualFriendsText.react","React","TetraOverlappingFacepileUnstyled.react","actorHovercardContainer","stylex","FriendingCometMutualFriendsSocialContext_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("FriendingCometMutualFriendsSocialContext_user.graphql"),a.user),d=a.iconSize,e=a.socialContextText,f=c.id;c=c.social_context_top_mutual_friends;var i=a.shouldShowFacepile;i=i===void 0?!0:i;if(f==null)return null;var j=[];i&&(j=c.map(function(a){var c=a.id,d=a.name,e=a.url;a=(a=a.profile_picture)==null?void 0:a.uri;return c!=null&&d!=null&&e!=null&&a!=null?{alt:d,containerComponent:b("actorHovercardContainer")(c),linkProps:{url:e},source:{uri:a}}:null}).filter(Boolean));i=j.length>0;return e!==""?h.jsx("div",{className:"k4urcfbm ggysqto6 j83agx80",children:i?h.jsx("div",{className:"ph5uu5jm",children:h.jsx(b("TetraOverlappingFacepileUnstyled.react"),{isTextInline:!0,items:j,size:d,text:h.jsx(b("FriendingCometMutualFriendsText.react"),{id:f,shouldAlignToFacepile:i,socialContextText:e,textType:a.textType,truncateContextText:a.truncateContextText})})}):h.jsx(b("FriendingCometMutualFriendsText.react"),{id:f,shouldAlignToFacepile:i,socialContextText:e,textType:a.textType,truncateContextText:a.truncateContextText})}):null}}),null);
__d("FriendingCometFriendRequestCancelMutation",["CometRelay","ProfileActionMutationUtils","WebPixelRatio","FriendingCometFriendRequestCancelMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("FriendingCometFriendRequestCancelMutation.graphql");function a(a,c,d,e){var f=b("ProfileActionMutationUtils").getOptimisticActionForFriendshipStatus("CAN_REQUEST");return b("CometRelay").commitMutation(a,{mutation:h,onError:e,optimisticResponse:{friend_request_cancel:{cancelled_friend_requestee:{friendship_status:"CAN_REQUEST",id:c,profile_action:babelHelpers["extends"]({},f,{id:b("ProfileActionMutationUtils").getFakeProfileActionID(c,1)})}}},variables:{input:{cancelled_friend_requestee_id:c,source:d},scale:b("WebPixelRatio").get()}})}}),null);
__d("ProfileCometBannerUtils",[],(function(a,b,c,d,e,f){"use strict";var g=["ProfilePlusAdminNotice","ProfileAppealBanner","ProfileBanner","ProfileEscapeHatch","ProfilePYMKBanner"];a=function(a){var b=a.getLinkedRecord("comet_profile_banner",{render_location:"TIMELINE_TAB_TOP",supported:g});(b==null?void 0:b.getType())==="ProfileEscapeHatch"&&a.setValue(null,"comet_profile_banner",{render_location:"TIMELINE_TAB_TOP",supported:g})};f.removeProfileEscapeHatch=a}),null);
__d("FriendingCometFriendRequestsOptimisticUpdaters",["ProfileActionMutationUtils","ProfileCometBannerUtils","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a=function(a,c,d){a=a.get(d);if(a==null)return;var e=a.getOrCreateLinkedRecord("profile_action","ProfileAction",{action_type:"FRIEND",render_location:"WWW_COMET_PROFILE"});if(e==null)return;var f=e.getOrCreateLinkedRecord("icon_image","Image",{icon_color:"fds-black",icon_size:"16",icon_variant:"filled",scale:b("WebPixelRatio").get()}),g=e.getOrCreateLinkedRecord("title","TextWithEntities");if(f==null||g==null)return;var h=b("ProfileActionMutationUtils").getOptimisticActionForFriendshipStatus(c);a.setValue(c,"friendship_status");a.setValue(d,"id");e.setValue(h.__typename,"__typename");e.setValue(h.is_optimistic_update,"is_optimistic_update");f.setValue(h.icon_image.height,"height");f.setValue(h.icon_image.scale,"scale");f.setValue(h.icon_image.width,"width");f.setValue(h.icon_image.uri,"uri");g.setValue(h.title.text,"text");b("ProfileCometBannerUtils").removeProfileEscapeHatch(a)};f.updateFriendRequesterFieldsOptimistic=a}),null);
__d("FriendingCometFriendRequestsUpdaters",["ProfileCometBannerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){a=a.get(c);if(a==null)return;b("ProfileCometBannerUtils").removeProfileEscapeHatch(a)};f.updateFriendRequesterFields=a}),null);
__d("FriendingCometFriendRequestConfirmMutation",["CometRelay","FriendingCometFriendRequestsOptimisticUpdaters","FriendingCometFriendRequestsUpdaters","WebPixelRatio","FriendingCometFriendRequestConfirmMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("FriendingCometFriendRequestConfirmMutation.graphql");function a(a,c,d,e,f){var g=function(a){b("FriendingCometFriendRequestsOptimisticUpdaters").updateFriendRequesterFieldsOptimistic(a,"ARE_FRIENDS",c)},i=function(a){b("FriendingCometFriendRequestsUpdaters").updateFriendRequesterFields(a,c)};return b("CometRelay").commitMutation(a,{mutation:h,onCompleted:e,onError:f,optimisticUpdater:g,updater:i,variables:{input:{friend_requester_id:c,source:d},refresh_num:0,scale:b("WebPixelRatio").get()}})}}),null);
__d("FriendingCometFriendRequestDeleteMutation",["CometRelay","FriendingCometFriendRequestsOptimisticUpdaters","FriendingCometFriendRequestsUpdaters","WebPixelRatio","FriendingCometFriendRequestDeleteMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("FriendingCometFriendRequestDeleteMutation.graphql");function a(a,c,d,e,f){var g=function(a){b("FriendingCometFriendRequestsOptimisticUpdaters").updateFriendRequesterFieldsOptimistic(a,"CAN_REQUEST",c)},i=function(a){b("FriendingCometFriendRequestsUpdaters").updateFriendRequesterFields(a,c)};return b("CometRelay").commitMutation(a,{mutation:h,onCompleted:e,onError:f,optimisticUpdater:g,updater:i,variables:{input:{friend_requester_id:c,source:d},refresh_num:0,scale:b("WebPixelRatio").get()}})}}),null);
__d("FriendingCometTestIDHelper",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({getFriendsTabFriendRequestsConfirmedTestID:function(a){return"comet_friends_tab_requests-"+a+"-confirmed"},getFriendsTabFriendRequestsDeletedTestID:function(a){return"comet_friends_tab_requests-"+a+"-deleted"},getFriendsTabFriendRequestsTestID:function(a){return"comet_friends_tab_requests-"+a},getFriendsTabPYMKTestID:function(a){return"comet_friends_tab_pymk-"+a},getGriffinTabFriendRequestsTestID:function(a){return"comet_griffin_tab_requests-"+a}});e.exports=a}),null);
__d("FriendingCometFriendRequestStrings",["fbt","qex"],(function(a,b,c,d,e,f,g){"use strict";f.requestRejected=a;f.reject=c;f.rejectRequest=d;function a(){return b("qex")._("1755358")?g._("\u5df2\u79fb\u9664\u9080\u8acb"):g._("\u9080\u8acb\u5df2\u522a\u9664")}function c(){return b("qex")._("1755358")?g._("\u79fb\u9664"):g._("\u522a\u9664")}function d(){return b("qex")._("1755358")?g._("\u79fb\u9664\u9080\u8acb"):g._("\u522a\u9664\u9080\u8acb")}}),null);
__d("RequestSeenFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744262");c=b("FalcoLoggerInternal").create("request_seen",a);e.exports=c}),null);