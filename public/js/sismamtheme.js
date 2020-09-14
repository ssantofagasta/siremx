!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).adminlte={})}(this,function(e){"use strict";var t=function(e){var t="ControlSidebar",i="lte.controlsidebar",a=e.fn[t],n="collapsed.lte.controlsidebar",s="expanded.lte.controlsidebar",o=".control-sidebar",r=".control-sidebar-content",l=".main-header",d=".main-footer",c="control-sidebar-animate",h="control-sidebar-open",u="control-sidebar-slide-open",f="layout-fixed",p="layout-footer-fixed",g="layout-sm-footer-fixed",m="layout-md-footer-fixed",v="layout-lg-footer-fixed",b="layout-xl-footer-fixed",_={controlsidebarSlide:!0,scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l"},C=function(){function t(e,t){this._element=e,this._config=t,this._init()}var a=t.prototype;return a.collapse=function(){this._config.controlsidebarSlide?(e("html").addClass(c),e("body").removeClass(u).delay(300).queue(function(){e(o).hide(),e("html").removeClass(c),e(this).dequeue()})):e("body").removeClass(h);var t=e.Event(n);e(this._element).trigger(t)},a.show=function(){this._config.controlsidebarSlide?(e("html").addClass(c),e(o).show().delay(10).queue(function(){e("body").addClass(u).delay(300).queue(function(){e("html").removeClass(c),e(this).dequeue()}),e(this).dequeue()})):e("body").addClass(h);var t=e.Event(s);e(this._element).trigger(t)},a.toggle=function(){e("body").hasClass(h)||e("body").hasClass(u)?this.collapse():this.show()},a._init=function(){var t=this;this._fixHeight(),this._fixScrollHeight(),e(window).resize(function(){t._fixHeight(),t._fixScrollHeight()}),e(window).scroll(function(){(e("body").hasClass(h)||e("body").hasClass(u))&&t._fixScrollHeight()})},a._fixScrollHeight=function(){var t={scroll:e(document).height(),window:e(window).height(),header:e(l).outerHeight(),footer:e(d).outerHeight()},i=Math.abs(t.window+e(window).scrollTop()-t.scroll),a=e(window).scrollTop(),n=!1,s=!1;e("body").hasClass(f)&&((e("body").hasClass("layout-navbar-fixed")||e("body").hasClass("layout-sm-navbar-fixed")||e("body").hasClass("layout-md-navbar-fixed")||e("body").hasClass("layout-lg-navbar-fixed")||e("body").hasClass("layout-xl-navbar-fixed"))&&"fixed"===e(l).css("position")&&(n=!0),(e("body").hasClass(p)||e("body").hasClass(g)||e("body").hasClass(m)||e("body").hasClass(v)||e("body").hasClass(b))&&"fixed"===e(d).css("position")&&(s=!0),0===a&&0===i?(e(o).css("bottom",t.footer),e(o).css("top",t.header),e(o+", "+o+" "+r).css("height",t.window-(t.header+t.footer))):i<=t.footer?!1===s?(e(o).css("bottom",t.footer-i),e(o+", "+o+" "+r).css("height",t.window-(t.footer-i))):e(o).css("bottom",t.footer):a<=t.header?!1===n?(e(o).css("top",t.header-a),e(o+", "+o+" "+r).css("height",t.window-(t.header-a))):e(o).css("top",t.header):!1===n?(e(o).css("top",0),e(o+", "+o+" "+r).css("height",t.window)):e(o).css("top",t.header))},a._fixHeight=function(){var t=e(window).height(),i=e(l).outerHeight(),a=e(d).outerHeight();if(e("body").hasClass(f)){var n=t-i;(e("body").hasClass(p)||e("body").hasClass(g)||e("body").hasClass(m)||e("body").hasClass(v)||e("body").hasClass(b))&&"fixed"===e(d).css("position")&&(n=t-i-a),e(o+" "+r).css("height",n),void 0!==e.fn.overlayScrollbars&&e(o+" "+r).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}})}},t._jQueryInterface=function(a){return this.each(function(){var n=e(this).data(i),s=e.extend({},_,e(this).data());if(n||(n=new t(this,s),e(this).data(i,n)),"undefined"===n[a])throw new Error(a+" is not a function");n[a]()})},t}();return e(document).on("click",'[data-widget="control-sidebar"]',function(t){t.preventDefault(),C._jQueryInterface.call(e(this),"toggle")}),e.fn[t]=C._jQueryInterface,e.fn[t].Constructor=C,e.fn[t].noConflict=function(){return e.fn[t]=a,C._jQueryInterface},C}(jQuery),i=function(e){var t="Layout",i=e.fn[t],a=".main-header",n=".main-sidebar",s=".main-sidebar .sidebar",o=".content-wrapper",r=".main-footer",l=".login-box",d=".register-box",c="sidebar-focused",h={scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",panelAutoHeight:!0,loginRegisterAutoHeight:!0},u=function(){function t(e,t){this._config=t,this._element=e,this._init()}var i=t.prototype;return i.fixLayoutHeight=function(t){void 0===t&&(t=null);var i=0;(e("body").hasClass("control-sidebar-slide-open")||e("body").hasClass("control-sidebar-open")||"control_sidebar"==t)&&(i=e(".control-sidebar-content").height());var n={window:e(window).height(),header:0!==e(a).length?e(a).outerHeight():0,footer:0!==e(r).length?e(r).outerHeight():0,sidebar:0!==e(s).length?e(s).height():0,control_sidebar:i},l=this._max(n),d=this._config.panelAutoHeight;!0===d&&(d=0),!1!==d&&(l==n.control_sidebar?e(o).css("min-height",l+d):l==n.window?e(o).css("min-height",l+d-n.header-n.footer):e(o).css("min-height",l+d-n.header),this._isFooterFixed()&&e(o).css("min-height",parseFloat(e(o).css("min-height"))+n.footer)),e("body").hasClass("layout-fixed")&&(!1!==d&&e(o).css("min-height",l+d-n.header-n.footer),void 0!==e.fn.overlayScrollbars&&e(s).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}}))},i.fixLoginRegisterHeight=function(){if(0===e(l+", "+d).length)e("body, html").css("height","auto");else if(0!==e(l+", "+d).length){var t=e(l+", "+d).height();e("body").css("min-height")!==t&&e("body").css("min-height",t)}},i._init=function(){var t=this;this.fixLayoutHeight(),!0===this._config.loginRegisterAutoHeight?this.fixLoginRegisterHeight():Number.isInteger(this._config.loginRegisterAutoHeight)&&setInterval(this.fixLoginRegisterHeight,this._config.loginRegisterAutoHeight),e(s).on("collapsed.lte.treeview expanded.lte.treeview",function(){t.fixLayoutHeight()}),e('[data-widget="pushmenu"]').on("collapsed.lte.pushmenu shown.lte.pushmenu",function(){t.fixLayoutHeight()}),e('[data-widget="control-sidebar"]').on("collapsed.lte.controlsidebar",function(){t.fixLayoutHeight()}).on("expanded.lte.controlsidebar",function(){t.fixLayoutHeight("control_sidebar")}),e(window).resize(function(){t.fixLayoutHeight()}),setTimeout(function(){e("body.hold-transition").removeClass("hold-transition")},50)},i._max=function(e){var t=0;return Object.keys(e).forEach(function(i){e[i]>t&&(t=e[i])}),t},i._isFooterFixed=function(){return"fixed"===e(".main-footer").css("position")},t._jQueryInterface=function(i){return void 0===i&&(i=""),this.each(function(){var a=e(this).data("lte.layout"),n=e.extend({},h,e(this).data());a||(a=new t(e(this),n),e(this).data("lte.layout",a)),"init"===i||""===i?a._init():"fixLayoutHeight"!==i&&"fixLoginRegisterHeight"!==i||a[i]()})},t}();return e(window).on("load",function(){u._jQueryInterface.call(e("body"))}),e(s+" a").on("focusin",function(){e(n).addClass(c)}),e(s+" a").on("focusout",function(){e(n).removeClass(c)}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=i,u._jQueryInterface},u}(jQuery),a=function(e){var t="PushMenu",i=".lte.pushmenu",a=e.fn[t],n={COLLAPSED:"collapsed"+i,SHOWN:"shown"+i},s={autoCollapseSize:992,enableRemember:!1,noTransitionAfterReload:!0},o='[data-widget="pushmenu"]',r="body",l="#sidebar-overlay",d="sidebar-collapse",c="sidebar-open",h="sidebar-closed",u=function(){function t(t,i){this._element=t,this._options=e.extend({},s,i),e(l).length||this._addOverlay(),this._init()}var a=t.prototype;return a.expand=function(){this._options.autoCollapseSize&&e(window).width()<=this._options.autoCollapseSize&&e(r).addClass(c),e(r).removeClass(d).removeClass(h),this._options.enableRemember&&localStorage.setItem("remember"+i,c);var t=e.Event(n.SHOWN);e(this._element).trigger(t)},a.collapse=function(){this._options.autoCollapseSize&&e(window).width()<=this._options.autoCollapseSize&&e(r).removeClass(c).addClass(h),e(r).addClass(d),this._options.enableRemember&&localStorage.setItem("remember"+i,d);var t=e.Event(n.COLLAPSED);e(this._element).trigger(t)},a.toggle=function(){e(r).hasClass(d)?this.expand():this.collapse()},a.autoCollapse=function(t){void 0===t&&(t=!1),this._options.autoCollapseSize&&(e(window).width()<=this._options.autoCollapseSize?e(r).hasClass(c)||this.collapse():1==t&&(e(r).hasClass(c)?e(r).removeClass(c):e(r).hasClass(h)&&this.expand()))},a.remember=function(){this._options.enableRemember&&(localStorage.getItem("remember"+i)==d?this._options.noTransitionAfterReload?e("body").addClass("hold-transition").addClass(d).delay(50).queue(function(){e(this).removeClass("hold-transition"),e(this).dequeue()}):e("body").addClass(d):this._options.noTransitionAfterReload?e("body").addClass("hold-transition").removeClass(d).delay(50).queue(function(){e(this).removeClass("hold-transition"),e(this).dequeue()}):e("body").removeClass(d))},a._init=function(){var t=this;this.remember(),this.autoCollapse(),e(window).resize(function(){t.autoCollapse(!0)})},a._addOverlay=function(){var t=this,i=e("<div />",{id:"sidebar-overlay"});i.on("click",function(){t.collapse()}),e(".wrapper").append(i)},t._jQueryInterface=function(i){return this.each(function(){var a=e(this).data("lte.pushmenu"),n=e.extend({},s,e(this).data());a||(a=new t(this,n),e(this).data("lte.pushmenu",a)),"string"==typeof i&&i.match(/collapse|expand|toggle/)&&a[i]()})},t}();return e(document).on("click",o,function(t){t.preventDefault();var i=t.currentTarget;"pushmenu"!==e(i).data("widget")&&(i=e(i).closest(o)),u._jQueryInterface.call(e(i),"toggle")}),e(window).on("load",function(){u._jQueryInterface.call(e(o))}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=a,u._jQueryInterface},u}(jQuery),n=function(e){var t="Treeview",i=e.fn[t],a="expanded.lte.treeview",n="collapsed.lte.treeview",s="load.lte.treeview",o=".nav-item",r=".nav-treeview",l=".menu-open",d='[data-widget="treeview"]',c="menu-open",h={trigger:d+" .nav-link",animationSpeed:300,accordion:!0,expandSidebar:!1,sidebarButtonSelector:'[data-widget="pushmenu"]'},u=function(){function t(e,t){this._config=t,this._element=e}var i=t.prototype;return i.init=function(){this._setupListeners()},i.expand=function(t,i){var n=this,s=e.Event(a);if(this._config.accordion){var o=i.siblings(l).first(),d=o.find(r).first();this.collapse(d,o)}t.stop().slideDown(this._config.animationSpeed,function(){i.addClass(c),e(n._element).trigger(s)}),this._config.expandSidebar&&this._expandSidebar()},i.collapse=function(t,i){var a=this,s=e.Event(n);t.stop().slideUp(this._config.animationSpeed,function(){i.removeClass(c),e(a._element).trigger(s),t.find(l+" > "+r).slideUp(),t.find(l).removeClass(c)})},i.toggle=function(t){var i=e(t.currentTarget),a=i.parent(),n=a.find("> "+r);if(n.is(r)||(a.is(o)||(n=a.parent().find("> "+r)),n.is(r))){t.preventDefault();var s=i.parents(o).first();s.hasClass(c)?this.collapse(e(n),s):this.expand(e(n),s)}},i._setupListeners=function(){var t=this;e(document).on("click",this._config.trigger,function(e){t.toggle(e)})},i._expandSidebar=function(){e("body").hasClass("sidebar-collapse")&&e(this._config.sidebarButtonSelector).PushMenu("expand")},t._jQueryInterface=function(i){return this.each(function(){var a=e(this).data("lte.treeview"),n=e.extend({},h,e(this).data());a||(a=new t(e(this),n),e(this).data("lte.treeview",a)),"init"===i&&a[i]()})},t}();return e(window).on(s,function(){e(d).each(function(){u._jQueryInterface.call(e(this),"init")})}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=i,u._jQueryInterface},u}(jQuery),s=function(e){var t="DirectChat",i=e.fn[t],a=function(){function t(e,t){this._element=e}return t.prototype.toggle=function(){e(this._element).parents(".direct-chat").first().toggleClass("direct-chat-contacts-open");var t=e.Event("toggled{EVENT_KEY}");e(this._element).trigger(t)},t._jQueryInterface=function(i){return this.each(function(){var a=e(this).data("lte.directchat");a||(a=new t(e(this)),e(this).data("lte.directchat",a)),a[i]()})},t}();return e(document).on("click",'[data-widget="chat-pane-toggle"]',function(t){t&&t.preventDefault(),a._jQueryInterface.call(e(this),"toggle")}),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=i,a._jQueryInterface},a}(jQuery),o=function(e){var t="TodoList",i=e.fn[t],a='[data-widget="todo-list"]',n="done",s={onCheck:function(e){return e},onUnCheck:function(e){return e}},o=function(){function t(e,t){this._config=t,this._element=e,this._init()}var i=t.prototype;return i.toggle=function(t){t.parents("li").toggleClass(n),e(t).prop("checked")?this.check(t):this.unCheck(e(t))},i.check=function(e){this._config.onCheck.call(e)},i.unCheck=function(e){this._config.onUnCheck.call(e)},i._init=function(){var t=this;e(a).find("input:checkbox:checked").parents("li").toggleClass(n),e(a).on("change","input:checkbox",function(i){t.toggle(e(i.target))})},t._jQueryInterface=function(i){return this.each(function(){var a=e(this).data("lte.todolist"),n=e.extend({},s,e(this).data());a||(a=new t(e(this),n),e(this).data("lte.todolist",a)),"init"===i&&a[i]()})},t}();return e(window).on("load",function(){o._jQueryInterface.call(e(a))}),e.fn[t]=o._jQueryInterface,e.fn[t].Constructor=o,e.fn[t].noConflict=function(){return e.fn[t]=i,o._jQueryInterface},o}(jQuery),r=function(e){var t="CardWidget",i=".lte.cardwidget",a=e.fn[t],n={EXPANDED:"expanded"+i,COLLAPSED:"collapsed"+i,MAXIMIZED:"maximized"+i,MINIMIZED:"minimized"+i,REMOVED:"removed"+i},s="card",o="collapsed-card",r="collapsing-card",l="expanding-card",d="was-collapsed",c="maximized-card",h={DATA_REMOVE:'[data-card-widget="remove"]',DATA_COLLAPSE:'[data-card-widget="collapse"]',DATA_MAXIMIZE:'[data-card-widget="maximize"]',CARD:"."+s,CARD_HEADER:".card-header",CARD_BODY:".card-body",CARD_FOOTER:".card-footer",COLLAPSED:"."+o},u={animationSpeed:"normal",collapseTrigger:h.DATA_COLLAPSE,removeTrigger:h.DATA_REMOVE,maximizeTrigger:h.DATA_MAXIMIZE,collapseIcon:"fa-minus",expandIcon:"fa-plus",maximizeIcon:"fa-expand",minimizeIcon:"fa-compress"},f=function(){function t(t,i){this._element=t,this._parent=t.parents(h.CARD).first(),t.hasClass(s)&&(this._parent=t),this._settings=e.extend({},u,i)}var i=t.prototype;return i.collapse=function(){var t=this;this._parent.addClass(r).children(h.CARD_BODY+", "+h.CARD_FOOTER).slideUp(this._settings.animationSpeed,function(){t._parent.addClass(o).removeClass(r)}),this._parent.find("> "+h.CARD_HEADER+" "+this._settings.collapseTrigger+" ."+this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);var i=e.Event(n.COLLAPSED);this._element.trigger(i,this._parent)},i.expand=function(){var t=this;this._parent.addClass(l).children(h.CARD_BODY+", "+h.CARD_FOOTER).slideDown(this._settings.animationSpeed,function(){t._parent.removeClass(o).removeClass(l)}),this._parent.find("> "+h.CARD_HEADER+" "+this._settings.collapseTrigger+" ."+this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);var i=e.Event(n.EXPANDED);this._element.trigger(i,this._parent)},i.remove=function(){this._parent.slideUp();var t=e.Event(n.REMOVED);this._element.trigger(t,this._parent)},i.toggle=function(){this._parent.hasClass(o)?this.expand():this.collapse()},i.maximize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon),this._parent.css({height:this._parent.height(),width:this._parent.width(),transition:"all .15s"}).delay(150).queue(function(){e(this).addClass(c),e("html").addClass(c),e(this).hasClass(o)&&e(this).addClass(d),e(this).dequeue()});var t=e.Event(n.MAXIMIZED);this._element.trigger(t,this._parent)},i.minimize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon),this._parent.css("cssText","height:"+this._parent[0].style.height+" !important;width:"+this._parent[0].style.width+" !important; transition: all .15s;").delay(10).queue(function(){e(this).removeClass(c),e("html").removeClass(c),e(this).css({height:"inherit",width:"inherit"}),e(this).hasClass(d)&&e(this).removeClass(d),e(this).dequeue()});var t=e.Event(n.MINIMIZED);this._element.trigger(t,this._parent)},i.toggleMaximize=function(){this._parent.hasClass(c)?this.minimize():this.maximize()},i._init=function(t){var i=this;this._parent=t,e(this).find(this._settings.collapseTrigger).click(function(){i.toggle()}),e(this).find(this._settings.maximizeTrigger).click(function(){i.toggleMaximize()}),e(this).find(this._settings.removeTrigger).click(function(){i.remove()})},t._jQueryInterface=function(i){var a=e(this).data("lte.cardwidget"),n=e.extend({},u,e(this).data());a||(a=new t(e(this),n),e(this).data("lte.cardwidget","string"==typeof i?a:i)),"string"==typeof i&&i.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)?a[i]():"object"==typeof i&&a._init(e(this))},t}();return e(document).on("click",h.DATA_COLLAPSE,function(t){t&&t.preventDefault(),f._jQueryInterface.call(e(this),"toggle")}),e(document).on("click",h.DATA_REMOVE,function(t){t&&t.preventDefault(),f._jQueryInterface.call(e(this),"remove")}),e(document).on("click",h.DATA_MAXIMIZE,function(t){t&&t.preventDefault(),f._jQueryInterface.call(e(this),"toggleMaximize")}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=a,f._jQueryInterface},f}(jQuery),l=function(e){var t="CardRefresh",i=e.fn[t],a="loaded.lte.cardrefresh",n="overlay.added.lte.cardrefresh",s="overlay.removed.lte.cardrefresh",o="card",r={CARD:"."+o,DATA_REFRESH:'[data-card-widget="card-refresh"]'},l={source:"",sourceSelector:"",params:{},trigger:r.DATA_REFRESH,content:".card-body",loadInContent:!0,loadOnInit:!0,responseType:"",overlayTemplate:'<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',onLoadStart:function(){},onLoadDone:function(e){return e}},d=function(){function t(t,i){if(this._element=t,this._parent=t.parents(r.CARD).first(),this._settings=e.extend({},l,i),this._overlay=e(this._settings.overlayTemplate),t.hasClass(o)&&(this._parent=t),""===this._settings.source)throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.")}var i=t.prototype;return i.load=function(){this._addOverlay(),this._settings.onLoadStart.call(e(this)),e.get(this._settings.source,this._settings.params,function(t){this._settings.loadInContent&&(""!=this._settings.sourceSelector&&(t=e(t).find(this._settings.sourceSelector).html()),this._parent.find(this._settings.content).html(t)),this._settings.onLoadDone.call(e(this),t),this._removeOverlay()}.bind(this),""!==this._settings.responseType&&this._settings.responseType);var t=e.Event(a);e(this._element).trigger(t)},i._addOverlay=function(){this._parent.append(this._overlay);var t=e.Event(n);e(this._element).trigger(t)},i._removeOverlay=function(){this._parent.find(this._overlay).remove();var t=e.Event(s);e(this._element).trigger(t)},i._init=function(t){var i=this;e(this).find(this._settings.trigger).on("click",function(){i.load()}),this._settings.loadOnInit&&this.load()},t._jQueryInterface=function(i){var a=e(this).data("lte.cardrefresh"),n=e.extend({},l,e(this).data());a||(a=new t(e(this),n),e(this).data("lte.cardrefresh","string"==typeof i?a:i)),"string"==typeof i&&i.match(/load/)?a[i]():a._init(e(this))},t}();return e(document).on("click",r.DATA_REFRESH,function(t){t&&t.preventDefault(),d._jQueryInterface.call(e(this),"load")}),e(document).ready(function(){e(r.DATA_REFRESH).each(function(){d._jQueryInterface.call(e(this))})}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(jQuery),d=function(e){var t="Dropdown",i=e.fn[t],a='[data-toggle="dropdown"]',n={},s=function(){function t(e,t){this._config=t,this._element=e}var i=t.prototype;return i.toggleSubmenu=function(){this._element.siblings().show().toggleClass("show"),this._element.next().hasClass("show")||this._element.parents(".dropdown-menu").first().find(".show").removeClass("show").hide(),this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(t){e(".dropdown-submenu .show").removeClass("show").hide()})},i.fixPosition=function(){var t=e(".dropdown-menu.show");if(0!==t.length){t.hasClass("dropdown-menu-right")?(t.css("left","inherit"),t.css("right",0)):(t.css("left",0),t.css("right","inherit"));var i=t.offset(),a=t.width(),n=e(window).width()-i.left;i.left<0?(t.css("left","inherit"),t.css("right",i.left-5)):n<a&&(t.css("left","inherit"),t.css("right",0))}},t._jQueryInterface=function(i){return this.each(function(){var a=e(this).data("lte.dropdown"),s=e.extend({},n,e(this).data());a||(a=new t(e(this),s),e(this).data("lte.dropdown",a)),"toggleSubmenu"!==i&&"fixPosition"!=i||a[i]()})},t}();return e(".dropdown-menu "+a).on("click",function(t){t.preventDefault(),t.stopPropagation(),s._jQueryInterface.call(e(this),"toggleSubmenu")}),e(".navbar "+a).on("click",function(t){t.preventDefault(),setTimeout(function(){s._jQueryInterface.call(e(this),"fixPosition")},1)}),e.fn[t]=s._jQueryInterface,e.fn[t].Constructor=s,e.fn[t].noConflict=function(){return e.fn[t]=i,s._jQueryInterface},s}(jQuery),c=function(e){var t="Toasts",i=e.fn[t],a={INIT:"init.lte.toasts",CREATED:"created.lte.toasts",REMOVED:"removed.lte.toasts"},n="topRight",s="topLeft",o="bottomRight",r="bottomLeft",l={position:n,fixed:!0,autohide:!1,autoremove:!0,delay:1e3,fade:!0,icon:null,image:null,imageAlt:null,imageHeight:"25px",title:null,subtitle:null,close:!0,body:null,class:null},d=function(){function t(t,i){this._config=i,this._prepareContainer();var n=e.Event(a.INIT);e("body").trigger(n)}var i=t.prototype;return i.create=function(){var t=e('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');t.data("autohide",this._config.autohide),t.data("animation",this._config.fade),this._config.class&&t.addClass(this._config.class),this._config.delay&&500!=this._config.delay&&t.data("delay",this._config.delay);var i=e('<div class="toast-header">');if(null!=this._config.image){var n=e("<img />").addClass("rounded mr-2").attr("src",this._config.image).attr("alt",this._config.imageAlt);null!=this._config.imageHeight&&n.height(this._config.imageHeight).width("auto"),i.append(n)}if(null!=this._config.icon&&i.append(e("<i />").addClass("mr-2").addClass(this._config.icon)),null!=this._config.title&&i.append(e("<strong />").addClass("mr-auto").html(this._config.title)),null!=this._config.subtitle&&i.append(e("<small />").html(this._config.subtitle)),1==this._config.close){var s=e('<button data-dismiss="toast" />').attr("type","button").addClass("ml-2 mb-1 close").attr("aria-label","Close").append('<span aria-hidden="true">&times;</span>');null==this._config.title&&s.toggleClass("ml-2 ml-auto"),i.append(s)}t.append(i),null!=this._config.body&&t.append(e('<div class="toast-body" />').html(this._config.body)),e(this._getContainerId()).prepend(t);var o=e.Event(a.CREATED);e("body").trigger(o),t.toast("show"),this._config.autoremove&&t.on("hidden.bs.toast",function(){e(this).delay(200).remove();var t=e.Event(a.REMOVED);e("body").trigger(t)})},i._getContainerId=function(){return this._config.position==n?"#toastsContainerTopRight":this._config.position==s?"#toastsContainerTopLeft":this._config.position==o?"#toastsContainerBottomRight":this._config.position==r?"#toastsContainerBottomLeft":void 0},i._prepareContainer=function(){if(0===e(this._getContainerId()).length){var t=e("<div />").attr("id",this._getContainerId().replace("#",""));this._config.position==n?t.addClass("toasts-top-right"):this._config.position==s?t.addClass("toasts-top-left"):this._config.position==o?t.addClass("toasts-bottom-right"):this._config.position==r&&t.addClass("toasts-bottom-left"),e("body").append(t)}this._config.fixed?e(this._getContainerId()).addClass("fixed"):e(this._getContainerId()).removeClass("fixed")},t._jQueryInterface=function(i,a){return this.each(function(){var n=e.extend({},l,a),s=new t(e(this),n);"create"===i&&s[i]()})},t}();return e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(jQuery);e.CardRefresh=l,e.CardWidget=r,e.ControlSidebar=t,e.DirectChat=s,e.Dropdown=d,e.Layout=i,e.PushMenu=a,e.Toasts=c,e.TodoList=o,e.Treeview=n,Object.defineProperty(e,"__esModule",{value:!0})}),function(e){"use strict";var t=e(".control-sidebar"),i=e("<div />",{class:"p-3 control-sidebar-content"});t.append(i);var a=["navbar-primary","navbar-secondary","navbar-info","navbar-success","navbar-danger","navbar-indigo","navbar-purple","navbar-pink","navbar-navy","navbar-lightblue","navbar-teal","navbar-cyan","navbar-dark","navbar-gray-dark","navbar-gray"];i.append('<h5>Customize AdminLTE</h5><hr class="mb-2"/>');var n=e("<input />",{type:"checkbox",value:1,checked:e(".main-header").hasClass("border-bottom-0"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".main-header").addClass("border-bottom-0"):e(".main-header").removeClass("border-bottom-0")}),s=e("<div />",{class:"mb-1"}).append(n).append("<span>No Navbar border</span>");i.append(s);var o=e("<input />",{type:"checkbox",value:1,checked:e("body").hasClass("text-sm"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e("body").addClass("text-sm"):e("body").removeClass("text-sm")}),r=e("<div />",{class:"mb-1"}).append(o).append("<span>Body small text</span>");i.append(r);var l=e("<input />",{type:"checkbox",value:1,checked:e(".main-header").hasClass("text-sm"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".main-header").addClass("text-sm"):e(".main-header").removeClass("text-sm")}),d=e("<div />",{class:"mb-1"}).append(l).append("<span>Navbar small text</span>");i.append(d);var c=e("<input />",{type:"checkbox",value:1,checked:e(".nav-sidebar").hasClass("text-sm"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".nav-sidebar").addClass("text-sm"):e(".nav-sidebar").removeClass("text-sm")}),h=e("<div />",{class:"mb-1"}).append(c).append("<span>Sidebar nav small text</span>");i.append(h);var u=e("<input />",{type:"checkbox",value:1,checked:e(".main-footer").hasClass("text-sm"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".main-footer").addClass("text-sm"):e(".main-footer").removeClass("text-sm")}),f=e("<div />",{class:"mb-1"}).append(u).append("<span>Footer small text</span>");i.append(f);var p=e("<input />",{type:"checkbox",value:1,checked:e(".nav-sidebar").hasClass("nav-flat"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".nav-sidebar").addClass("nav-flat"):e(".nav-sidebar").removeClass("nav-flat")}),g=e("<div />",{class:"mb-1"}).append(p).append("<span>Sidebar nav flat style</span>");i.append(g);var m=e("<input />",{type:"checkbox",value:1,checked:e(".nav-sidebar").hasClass("nav-legacy"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".nav-sidebar").addClass("nav-legacy"):e(".nav-sidebar").removeClass("nav-legacy")}),v=e("<div />",{class:"mb-1"}).append(m).append("<span>Sidebar nav legacy style</span>");i.append(v);var b=e("<input />",{type:"checkbox",value:1,checked:e(".nav-sidebar").hasClass("nav-compact"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".nav-sidebar").addClass("nav-compact"):e(".nav-sidebar").removeClass("nav-compact")}),_=e("<div />",{class:"mb-1"}).append(b).append("<span>Sidebar nav compact</span>");i.append(_);var C=e("<input />",{type:"checkbox",value:1,checked:e(".nav-sidebar").hasClass("nav-child-indent"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".nav-sidebar").addClass("nav-child-indent"):e(".nav-sidebar").removeClass("nav-child-indent")}),y=e("<div />",{class:"mb-1"}).append(C).append("<span>Sidebar nav child indent</span>");i.append(y);var x=e("<input />",{type:"checkbox",value:1,checked:e(".main-sidebar").hasClass("sidebar-no-expand"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".main-sidebar").addClass("sidebar-no-expand"):e(".main-sidebar").removeClass("sidebar-no-expand")}),w=e("<div />",{class:"mb-1"}).append(x).append("<span>Main Sidebar disable hover/focus auto expand</span>");i.append(w);var k=e("<input />",{type:"checkbox",value:1,checked:e(".brand-link").hasClass("text-sm"),class:"mr-1"}).on("click",function(){e(this).is(":checked")?e(".brand-link").addClass("text-sm"):e(".brand-link").removeClass("text-sm")}),I=e("<div />",{class:"mb-4"}).append(k).append("<span>Brand small text</span>");i.append(I),i.append("<h6>Navbar Variants</h6>");var E=e("<div />",{class:"d-flex"}),A=a.concat(["navbar-light","navbar-warning","navbar-white","navbar-orange"]),D=M(A,function(t){var i=e(this).data("color"),n=e(".main-header");n.removeClass("navbar-dark").removeClass("navbar-light"),A.map(function(e){n.removeClass(e)}),a.indexOf(i)>-1?n.addClass("navbar-dark"):n.addClass("navbar-light"),n.addClass(i)});E.append(D),i.append(E);var S=["bg-primary","bg-warning","bg-info","bg-danger","bg-success","bg-indigo","bg-lightblue","bg-navy","bg-purple","bg-fuchsia","bg-pink","bg-maroon","bg-orange","bg-lime","bg-teal","bg-olive"],j=["accent-primary","accent-warning","accent-info","accent-danger","accent-success","accent-indigo","accent-lightblue","accent-navy","accent-purple","accent-fuchsia","accent-pink","accent-maroon","accent-orange","accent-lime","accent-teal","accent-olive"],R=["sidebar-dark-primary","sidebar-dark-warning","sidebar-dark-info","sidebar-dark-danger","sidebar-dark-success","sidebar-dark-indigo","sidebar-dark-lightblue","sidebar-dark-navy","sidebar-dark-purple","sidebar-dark-fuchsia","sidebar-dark-pink","sidebar-dark-maroon","sidebar-dark-orange","sidebar-dark-lime","sidebar-dark-teal","sidebar-dark-olive","sidebar-light-primary","sidebar-light-warning","sidebar-light-info","sidebar-light-danger","sidebar-light-success","sidebar-light-indigo","sidebar-light-lightblue","sidebar-light-navy","sidebar-light-purple","sidebar-light-fuchsia","sidebar-light-pink","sidebar-light-maroon","sidebar-light-orange","sidebar-light-lime","sidebar-light-teal","sidebar-light-olive"];i.append("<h6>Accent Color Variants</h6>");var T=e("<div />",{class:"d-flex"});i.append(T),i.append(M(j,function(){var t=e(this).data("color"),i=e("body");j.map(function(e){i.removeClass(e)}),i.addClass(t)})),i.append("<h6>Dark Sidebar Variants</h6>");var Q=e("<div />",{class:"d-flex"});i.append(Q),i.append(M(S,function(){var t="sidebar-dark-"+e(this).data("color").replace("bg-",""),i=e(".main-sidebar");R.map(function(e){i.removeClass(e)}),i.addClass(t)})),i.append("<h6>Light Sidebar Variants</h6>");var H=e("<div />",{class:"d-flex"});i.append(H),i.append(M(S,function(){var t="sidebar-light-"+e(this).data("color").replace("bg-",""),i=e(".main-sidebar");R.map(function(e){i.removeClass(e)}),i.addClass(t)}));var L=A;i.append("<h6>Brand Logo Variants</h6>");var z=e("<div />",{class:"d-flex"});i.append(z);var O=e("<a />",{href:"javascript:void(0)"}).text("clear").on("click",function(){var t=e(".brand-link");L.map(function(e){t.removeClass(e)})});function M(t,i){var a=e("<div />",{class:"d-flex flex-wrap mb-3"});return t.map(function(t){var n=e("<div />",{class:("object"==typeof t?t.join(" "):t).replace("navbar-","bg-").replace("accent-","bg-")+" elevation-2"});a.append(n),n.data("color",t),n.css({width:"40px",height:"20px",borderRadius:"25px",marginRight:10,marginBottom:10,opacity:.8,cursor:"pointer"}),n.hover(function(){e(this).css({opacity:1}).removeClass("elevation-2").addClass("elevation-4")},function(){e(this).css({opacity:.8}).removeClass("elevation-4").addClass("elevation-2")}),i&&n.on("click",i)}),a}i.append(M(L,function(){var t=e(this).data("color"),i=e(".brand-link");L.map(function(e){i.removeClass(e)}),i.addClass(t)}).append(O)),e(".product-image-thumb").on("click",function(){const t=e(this).find("img");e(".product-image").prop("src",e(t).attr("src")),e(".product-image-thumb.active").removeClass("active"),e(this).addClass("active")})}(jQuery);
