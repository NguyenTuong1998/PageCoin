// import $ from 'jquery';

// var _SETTINGS = window._SETTINGS || {};
// _SETTINGS.mainMenu = function () {
//   $("#main-menu-wrapper li a").on("click", function (e) {
//     if ($(this).next().hasClass("sub-menu") === false) {
//       return;
//     }

//     var parent = $(this).parent().parent();
//     var sub = $(this).next();

//     parent.children("li.open").children(".sub-menu").slideUp(200);
//     parent
//       .children("li.open")
//       .children("a")
//       .children(".arrow")
//       .removeClass("open");
//     parent.children("li").removeClass("open");

//     if (sub.is(":visible")) {
//       $(this).find(".arrow").removeClass("open");
//       sub.slideUp(200);
//     } else {
//       $(this).parent().addClass("open");
//       $(this).find(".arrow").addClass("open");
//       sub.slideDown(200);
//     }
//   });

//   $("body").on("click", function (e) {
//     $(".page-sidebar.collapseit .wraplist li.open .sub-menu").attr("style", "");
//     $(".page-sidebar.collapseit .wraplist li.open").removeClass("open");
//     $(".page-sidebar.chat_shift .wraplist li.open .sub-menu").attr("style", "");
//     $(".page-sidebar.chat_shift .wraplist li.open").removeClass("open");
//   });
// $(document).ready(function () {
//   _SETTINGS.windowBasedLayout();
//   _SETTINGS.mainmenuScroll();
//   _SETTINGS.mainMenu();
//   _SETTINGS.mainmenuCollapsed();
//   _SETTINGS.pageTopBar();
//   _SETTINGS.otherScripts();
//   _SETTINGS.iCheck();
//   _SETTINGS.customDropZone();
//   _SETTINGS.formEditors();
//   _SETTINGS.extraFormSettings();
//   _SETTINGS.tooltipsPopovers();
//   _SETTINGS.nestableList();
//   _SETTINGS.uiCalendar();
//   _SETTINGS.tocifyScrollMenu();
//   _SETTINGS.loadPrettyPhoto();
//   _SETTINGS.jvectorMaps();
//   _SETTINGS.jsTreeINIT();
//   _SETTINGS.breadcrumbAutoHidden();
//   _SETTINGS.chatAPI();
//   _SETTINGS.chatApiScroll();
//   _SETTINGS.chatApiWindow();
//   _SETTINGS.mailboxInbox();
//   _SETTINGS.Widgets();
//   _SETTINGS.sectionBoxActions();
//   _SETTINGS.draggablePanels();
//   _SETTINGS.viewportElement();
//   _SETTINGS.searchPage();
//   _SETTINGS.ToDoAddTaskWidget();
//   _SETTINGS.ToDoWidget();
//   _SETTINGS.dbjvectorMap();
//   _SETTINGS.widgetSparklineChart();
//   _SETTINGS.WidgetWeather();
//   _SETTINGS.onLoadTopBar();
//   _SETTINGS.ios7Switchery();
// });

// $(window).resize(function () {
//   _SETTINGS.windowBasedLayout();
//   //_SETTINGS.mainmenuScroll();
//   //_SETTINGS.WidgetWeather();
//   _SETTINGS.isotopeGallery();
//   _SETTINGS.loginPage();
//   _SETTINGS.widgetSparklineChart();
// });

// $(window).load(function () {
//   _SETTINGS.isotopeGallery();
//   _SETTINGS.loginPage();
// });
  
// };
