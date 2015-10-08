"use strict";
var PopUpShow = function () {
	$("#table_popup").show();
},
PopUpHide = function () {
	$("#table_popup").hide();
}
$( document ).ready( function() {
	PopUpHide ();
	$( ".lighting td" ).on( "mouseenter mouseleave", function() {
        var td_index = $( this ).index();
        $( this ).parents( ".lighting" ).find( "tr" ).each( function() {
            $( "td:eq(" + td_index + ")", this ).toggleClass( "lighting_col" );
        } );
        $( this ).toggleClass( "lighting_cell" );
	} );
	$(".lighting tr").on("click", function() {
		var tr = this,
		cell = [];
		for (var currentCol = 0; currentCol < 4; currentCol++) {
			cell[currentCol] = tr.getElementsByTagName("td")[currentCol].innerHTML;
		};
		$("#content").empty();
		$("#content").append(cell.join(" ; "));
		PopUpShow();
	});
} );
