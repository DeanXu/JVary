// Name:            Tab
// Description:     Temporary
//
//
// ========================================================================

;(function($) {
    if($(".jv-tab").size() > 0) {
        $(".jv-tab").each(function(i,v) {
            var swiObj = $($(this).data("jv-connect"));
            var liObj = $(this).find("li");
            liObj.click(function() {
                var index = $(this).index();
                liObj.removeClass("jv-active");
                $(this).addClass("jv-active");
                swiObj.find("li").removeClass("jv-active");
                swiObj.find("li:eq("+index+")").addClass("jv-active");
            });
        });
    }
})(jQuery);

