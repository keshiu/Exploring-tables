"use strict";$(document).ready(function(){$(".lighting td").on("mouseenter mouseleave",function(){var t=$(this).index();$(this).parents(".lighting").find("tr").each(function(){$("td:eq("+t+")",this).toggleClass("lighting_col")}),$(this).toggleClass("lighting_cell")})});
