"use strict";var PopUpShow=function(){$("#table_popup").show()},PopUpHide=function(){$("#table_popup").hide()};$(document).ready(function(){PopUpHide(),$(".lighting td").on("mouseenter mouseleave",function(){var t=$(this).index();$(this).parents(".lighting").find("tr").each(function(){$("td:eq("+t+")",this).toggleClass("lighting_col")}),$(this).toggleClass("lighting_cell")}),$(".lighting tr").on("click",function(){for(var t=this,i=[],n=0;4>n;n++)i[n]=t.getElementsByTagName("td")[n].innerHTML;$("#content").empty(),$("#content").append(i.join(" ; ")),PopUpShow()})});
