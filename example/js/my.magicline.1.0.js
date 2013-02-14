(function( $ ) {
	$.fn.my_magicline = function() {
		var $my_el, my_leftPos, my_newWidth;
        this.append("<li><a id='magic-line'>&nbsp;</a></li>");
        var $magicLine = $("#magic-line");
        if($("li a.active", this).length > 0){
            $magicLine.width($("li a.active", this).width())
            .css("left", $("li a.active", this).position().left)
            .data("origLeft", $("li a.active", this).position().left)
            .data("origWidth", $("li a.active", this).width());
        }else{
            $magicLine.width(0).css("left", 0).data("origLeft", 0).data("origWidth", 0);            
        }
        $("li a", this).hover(function(){
            $my_el = $(this);
            my_leftPos = $my_el.position().left;
            my_newWidth = $my_el.width();
            $magicLine.stop().animate({
                left: my_leftPos,
                width: my_newWidth
            });
        },function(){
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });
        }); 
	};	
})( jQuery );