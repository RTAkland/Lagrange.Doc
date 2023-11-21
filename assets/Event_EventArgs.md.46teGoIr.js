import{_ as t,o as e,c as n,R as a}from"./chunks/framework.n93kXFqc.js";const x=JSON.parse('{"title":"事件数据 EventArgs","description":"","frontmatter":{},"headers":[],"relativePath":"Event/EventArgs.md","filePath":"Event/EventArgs.md"}'),r={name:"Event/EventArgs.md"},l=a('<h1 id="事件数据-eventargs" tabindex="-1">事件数据 EventArgs <a class="header-anchor" href="#事件数据-eventargs" aria-label="Permalink to &quot;事件数据 EventArgs&quot;">​</a></h1><p>本节介绍所有的事件被触发时传递的数据</p><h2 id="数据基类-eventbase" tabindex="-1">数据基类 EventBase <a class="header-anchor" href="#数据基类-eventbase" aria-label="Permalink to &quot;数据基类 EventBase&quot;">​</a></h2><p>所有事件数据均继承自此类</p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">EventTime</td><td style="text-align:center;">DateTime</td><td style="text-align:center;">事件被触发时的时间</td></tr><tr><td style="text-align:center;">EventMessage</td><td style="text-align:center;">string</td><td style="text-align:center;">事件消息概述</td></tr></tbody></table><h2 id="bot上线事件-botonlineevent" tabindex="-1">Bot上线事件 BotOnlineEvent <a class="header-anchor" href="#bot上线事件-botonlineevent" aria-label="Permalink to &quot;Bot上线事件 BotOnlineEvent&quot;">​</a></h2><p>无额外字段</p><h2 id="bot下线事件-botofflineevent" tabindex="-1">Bot下线事件 BotOfflineEvent <a class="header-anchor" href="#bot下线事件-botofflineevent" aria-label="Permalink to &quot;Bot下线事件 BotOfflineEvent&quot;">​</a></h2><p>无额外字段</p><h2 id="bot日志事件-botlogevent" tabindex="-1">Bot日志事件 BotLogEvent <a class="header-anchor" href="#bot日志事件-botlogevent" aria-label="Permalink to &quot;Bot日志事件 BotLogEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">Tag</td><td style="text-align:center;">string</td><td style="text-align:center;">发生的地点标签</td></tr><tr><td style="text-align:center;">Level</td><td style="text-align:center;">LogLevel</td><td style="text-align:center;">事件消息概述</td></tr></tbody></table><p>ToString()方法覆写 返回日志概述</p><p>日志内容为基类的EventMessage</p><h2 id="bot验证码事件-botcaptchaevent" tabindex="-1">Bot验证码事件 BotCaptchaEvent <a class="header-anchor" href="#bot验证码事件-botcaptchaevent" aria-label="Permalink to &quot;Bot验证码事件 BotCaptchaEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">Url</td><td style="text-align:center;">string</td><td style="text-align:center;">验证码链接</td></tr></tbody></table><h2 id="bot私聊消息事件-friendmessageevent" tabindex="-1">Bot私聊消息事件 FriendMessageEvent <a class="header-anchor" href="#bot私聊消息事件-friendmessageevent" aria-label="Permalink to &quot;Bot私聊消息事件 FriendMessageEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">Chain</td><td style="text-align:center;">MessageChain</td><td style="text-align:center;">消息链</td></tr></tbody></table><h2 id="bot群聊消息事件-groupmessageevent" tabindex="-1">Bot群聊消息事件 GroupMessageEvent <a class="header-anchor" href="#bot群聊消息事件-groupmessageevent" aria-label="Permalink to &quot;Bot群聊消息事件 GroupMessageEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">Chain</td><td style="text-align:center;">MessageChain</td><td style="text-align:center;">消息链</td></tr></tbody></table><h2 id="bot临时消息事件-groupmessageevent" tabindex="-1">Bot临时消息事件 GroupMessageEvent <a class="header-anchor" href="#bot临时消息事件-groupmessageevent" aria-label="Permalink to &quot;Bot临时消息事件 GroupMessageEvent&quot;">​</a></h2><p>暂未实现</p><h2 id="bot好友请求事件-friendrequestevent" tabindex="-1">Bot好友请求事件 FriendRequestEvent <a class="header-anchor" href="#bot好友请求事件-friendrequestevent" aria-label="Permalink to &quot;Bot好友请求事件 FriendRequestEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">SourceUin</td><td style="text-align:center;">uint</td><td style="text-align:center;">对方Uin</td></tr><tr><td style="text-align:center;">Name</td><td style="text-align:center;">string</td><td style="text-align:center;">对方昵称</td></tr><tr><td style="text-align:center;">Message</td><td style="text-align:center;">string</td><td style="text-align:center;">对方发送的验证消息内容</td></tr></tbody></table><h2 id="bot所在群管理变更事件-groupadminchangedevent" tabindex="-1">Bot所在群管理变更事件 GroupAdminChangedEvent <a class="header-anchor" href="#bot所在群管理变更事件-groupadminchangedevent" aria-label="Permalink to &quot;Bot所在群管理变更事件 GroupAdminChangedEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">GroupUin</td><td style="text-align:center;">uint</td><td style="text-align:center;">群Uin</td></tr><tr><td style="text-align:center;">AdminUin</td><td style="text-align:center;">string</td><td style="text-align:center;">管理Uin</td></tr><tr><td style="text-align:center;">IsPromote</td><td style="text-align:center;">bool</td><td style="text-align:center;">是否为晋升</td></tr></tbody></table><h2 id="bot被邀请至群事件-groupinvitationevent" tabindex="-1">Bot被邀请至群事件 GroupInvitationEvent <a class="header-anchor" href="#bot被邀请至群事件-groupinvitationevent" aria-label="Permalink to &quot;Bot被邀请至群事件 GroupInvitationEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">GroupUin</td><td style="text-align:center;">uint</td><td style="text-align:center;">群Uin</td></tr><tr><td style="text-align:center;">InvitorUin</td><td style="text-align:center;">uint</td><td style="text-align:center;">邀请者Uin</td></tr></tbody></table><h2 id="bot所在群新增成员事件-groupmemberincreaseevent" tabindex="-1">Bot所在群新增成员事件 GroupMemberIncreaseEvent <a class="header-anchor" href="#bot所在群新增成员事件-groupmemberincreaseevent" aria-label="Permalink to &quot;Bot所在群新增成员事件 GroupMemberIncreaseEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">GroupUin</td><td style="text-align:center;">uint</td><td style="text-align:center;">群Uin</td></tr><tr><td style="text-align:center;">MemberUin</td><td style="text-align:center;">uint</td><td style="text-align:center;">成员Uin</td></tr><tr><td style="text-align:center;">InvitorUin</td><td style="text-align:center;">uint?</td><td style="text-align:center;">邀请者Uin(自己入群为null)</td></tr></tbody></table><h2 id="bot所在群新增成员事件-groupmemberdecreaseevent" tabindex="-1">Bot所在群新增成员事件 GroupMemberDecreaseEvent <a class="header-anchor" href="#bot所在群新增成员事件-groupmemberdecreaseevent" aria-label="Permalink to &quot;Bot所在群新增成员事件 GroupMemberDecreaseEvent&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">GroupUin</td><td style="text-align:center;">uint</td><td style="text-align:center;">群Uin</td></tr><tr><td style="text-align:center;">MemberUin</td><td style="text-align:center;">uint</td><td style="text-align:center;">成员Uin</td></tr><tr><td style="text-align:center;">OperatorUin</td><td style="text-align:center;">uint?</td><td style="text-align:center;">操作者Uin(主动退群为null)</td></tr></tbody></table>',31),i=[l];function d(o,s,h,c,g,b){return e(),n("div",null,i)}const u=t(r,[["render",d]]);export{x as __pageData,u as default};
