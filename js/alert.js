// Name:            Jvalert
// Description:     A Alert Box Plugin. Base on Modal.js
//
//
// ========================================================================
//


;function ($) { 'use strict';
    $.jvalert = {
    
    }

    $.jvalert.prototype.initDOM = function(type) {
        
    
    }

    $.jvalert.prototype._show = function() {
        var temp = "";
        $(temp).appendTo("body")
            .modal(option?option:'');
    
    }

    $.jvalert.prototype._hide = function() {
    
    }

    $.jvalert.prototype.confirm = function() {
        $.jvalert._show();
        //bind event
        $(".ok").click(function(){
            $.jvalert._hide();
            if (callback) callback(true);
        });
        //bind event
        $(".cancel").click(function(){
            $.jvalert._hide();
            if (callback) callback(false);
        });

    }


    Jvconfirm = function(msg, type, callback) {
        $.jvalert.confirm(msg, type, callback);
    }

}(jQuery);
