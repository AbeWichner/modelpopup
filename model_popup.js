/* All rights reserved to https://www.questific.com Abdallah Ibrahim Alhabarneh 2015 Latest update was on Jul 19th 2017 */
!function(t){t.fn.closeWspop=function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove()},t.fn.wspop=function(o){var e=t(".popup").length;if(e>1)return console.info(e),0;var n=(new Date).getTime(),i=t.extend({title:null,content:"",ajaxContent:null,sclass:null,poptype:null,closeButton:!0,okbtnText:null,cancelbtnText:null,okbtnClass:null,cancelbtnClass:null,backLayout:!1,backLayoutClose:!0,complete:null,okClicked:null,cancelClicked:null,backLayoutClick:null,closeButtonClick:null,closed:null,buttonsLeft:null,awayTimer:null},o);return this.html(""),this.attr("id","popup_"+n),this.attr("tail",2*n),this.each(function(){if(t("body").append('<div class="hiddenLayoutWS" id="hiddenLayoutWS_'+n+'" style="position: fixed; top: 0;bottom: 0;left: 0;right: 0;z-index: -5;height: 100%;width: 100%;"></div>'),1==i.backLayout&&(t("body").append('<div class="backLayout" id="backLayout_'+n+'"></div>'),t(".backLayout").show()),i.sclass&&t(this).addClass(sclass),1==i.closeButton&&t(this).append('<div class="pop-close-button" id="pop_close_'+n+'">&times;</div>'),i.title&&t(this).append('<div class="pop-title">'+i.title+"</div>"),t(this).append('<div class="pop-container"><center><img src="http://www.waseeler.com/images/ajax_loader_blue_128.gif" /></center></div>'),i.ajaxContent){var o=i.ajaxContent,e=(t(this),t(".pop-container"));t.ajax({url:o,type:"get",dataType:"json",success:function(o){1==o.success?(e.html(o.content),t(".popup").css("position","fixed"),t(".popup").css("top",t(window).height()/2-t(".popup").outerHeight()/2),t(".popup").css("left",t(window).width()/2-t(".popup").outerWidth()/2)):console.log("Success is 0")}})}else t(".pop-container").html(i.content);var p="alert";i.poptype&&(p=i.poptype);var p=i.poptype;"alert"==p?(btnClass="pop-button-default",btnText="Ok",i.okbtnClass&&(btnClass=i.okbtnClass),i.okbtnText&&(btnText=i.okbtnText),buttonsAlign="",i.buttonsLeft&&(buttonsAlign="text-align: left;"),t(this).append('<div class="pop-buttons" style="'+buttonsAlign+'"><button type="button" id="pop_okbtn_'+n+'" class="pop-button pop-okbtn '+btnClass+'">'+btnText+"</button></div>")):"confirm"==p&&(btn1Class="pop-button-default",btn1Text="Ok",i.okbtnClass&&(btn1Class=i.okbtnClass),i.okbtnText&&(btn1Text=i.okbtnText),btn2Class="pop-button-default",btn2Text="Cancel",i.cancelbtnClass&&(btn2Class=i.cancelbtnClass),i.cancelbtnText&&(btn2Text=i.cancelbtnText),buttonsAlign="",i.buttonsLeft&&(buttonsAlign="text-align: left;"),t(this).append('<div class="pop-buttons" style="'+buttonsAlign+'"><button type="button" id="pop_okbtn_'+n+'" class="pop-button pop-okbtn '+btn1Class+'">'+btn1Text+'</button><button type="button" id="pop_cancelbtn_'+n+'" class="pop-button pop-cancelbtn '+btn2Class+'">'+btn2Text+"</button></div>")),t(this).css("position","fixed"),t(this).css("top",t(".hiddenLayoutWS").height()/2-t(".popup").outerHeight()/2),t(this).css("left",t(".hiddenLayoutWS").width()/2-t(".popup").outerWidth()/2),console.log("window height is "+t(window).height()/2),console.log("window width is "+t(window).width()/2),console.log("outer height is "+t(this).outerHeight()/2),console.log("outer width is "+t(this).outerWidth()/2),t(this).show(),t.isFunction(i.complete)&&i.complete.call(this),t.isFunction(i.okClicked)?t(document).on("click","#pop_okbtn_"+n,function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove(),i.okClicked.call(this)}):t(document).on("click","#pop_okbtn_"+n,function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove()}),t.isFunction(i.cancelClicked)?t(document).on("click","#pop_cancelbtn_"+n,function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove(),i.cancelClicked.call(this)}):t(document).on("click","#pop_cancelbtn_"+n,function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove()}),t.isFunction(i.backLayoutClick)?t(document).on("click","#backLayout_"+n,function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove(),i.backLayoutClick.call(this)}):t(document).on("click","#backLayout_"+n,function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove()}),t.isFunction(i.closeButtonClick)?t(document).on("click","#pop_close_"+n,function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove(),i.closeButtonClick.call(this)}):t(document).on("click","#pop_close_"+n,function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove()}),t(".popup").on("remove",function(){t.isFunction(i.closeButtonClick)&&i.closeButtonClick.call(this)});var c=function(){t(".popup").remove(),t(".backLayout").remove(),t(".hiddenLayoutWS").remove(),t.isFunction(i.closeButtonClick)&&i.closeButtonClick.call(this)};if(i.awayTimer){var s=i.awayTimer;null!=s&&0!=s&&setTimeout(c,1e3*s)}})},t(window).resize(function(){t(".popup").css("position","fixed"),t(".popup").css("top",t(".hiddenLayoutWS").height()/2-t(".popup").outerHeight()/2),t(".popup").css("left",t(".hiddenLayoutWS").width()/2-t(".popup").outerWidth()/2)})}(jQuery),$(function(){var t=function(){$(".popup").css("position","fixed"),$(".popup").css("top",$(".hiddenLayoutWS").height()/2-$(".popup").outerHeight()/2),$(".popup").css("left",$(".hiddenLayoutWS").width()/2-$(".popup").outerWidth()/2)};setTimeout(t,1500)});
