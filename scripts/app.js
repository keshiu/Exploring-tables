"use strict";
$(document).ready(function(){
	$(".lighting td").on("mouseenter mouseleave", function(){
        var td_index=$(this).index();
        $(this).parents(".lighting").find("tr").each(function(){
            $("td:eq("+td_index + ")",this).toggleClass("lighting_col");
        });
        $(this).toggleClass("lighting_cell");
	});
});