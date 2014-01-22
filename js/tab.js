// Name:            Tab
// Description:     Temporary
//
//
// ========================================================================

+(function($) {
    if($(".jv-tab").size() > 0) {
        $(".jv-tab").each(function(i,v) {
            if($(this).is("[no-js]")){
                return ;
            }
            var swiObj = $($(this).data("jv-connect"));
            var liObj = $(this).find("li");
            liObj.click(function() {
                var index = $(this).index();
                liObj.removeClass("jv-active");
                $(this).addClass("jv-active");
                swiObj.children("li").removeClass("jv-active");
                swiObj.children("li:eq("+index+")").addClass("jv-active");
            });
        });
    }
})(jQuery);
