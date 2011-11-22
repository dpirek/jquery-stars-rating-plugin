/*
jquery stars
----------------------

by: david pirek (www.davidpirek.com)


*/

(function ($) {

    $.fn.stars = function (op) {

        var starHtml = "<div><ul class=\"stars clearfix\"><li><a href=\"#1\" class=\"star_1\" rating=\"1\"><span class=\"selected\"></span></a></li><li><a href=\"#2\" class=\"star_2\" rating=\"2\"><span class=\"selected\"></span></a></li><li><a href=\"#3\" class=\"star_3\" rating=\"3\"><span class=\"selected\"></span></a></li><li><a href=\"#4\" class=\"star_4\" rating=\"4\"><span></span></a></li><li><a href=\"#5\" class=\"star_5\" rating=\"5\"><span></span></a></li></ul></div>";

        return this.each(function () {

            var wrap = $(this),
                    html = $(starHtml),
                    d = $(".dd", html),
                    a = $("a", html),
                    currentRating = wrap.attr("rating"),
                    isReadOnly = true;

            if (typeof currentRating == "undefined") {
                currentRating = "0";
                isReadOnly = false;
            }

            //rating
            html.addClass("stars_" + currentRating);

            //bind events if is not read only
            if (isReadOnly) {

                //return false on click
                a.click(function () {
                    return false;
                });

                //kills link default cursor
                a.css("cursor", "default");

            }
            else {

                //add default rating (0)
                wrap.val(currentRating);

                //click
                a.click(function () {

                    var _this = $(this),
                        r = _this.attr("rating");

                    //add value
                    wrap.val(r);

                    //remove class
                    var currentClass = html.attr("class");
                    html.removeClass(currentClass);

                    //add current class
                    html.addClass("stars_" + r);

                    //update current
                    currentRating = r;

                    return false;

                });

                //hover
                a.hover(function () {
                    var _this = $(this),
                        r = _this.attr("rating");

                    //add value
                    wrap.val(r);

                    //remove class
                    var currentClass = html.attr("class");
                    html.removeClass(currentClass);

                    //add current class
                    html.addClass("hover_" + r);

                    return false;
                },
                    function () {

                        var currentClass = html.attr("class");
                        html.removeClass(currentClass);

                        //add current class
                        html.addClass("stars_" + currentRating);

                        currentRating

                        return false;
                    });

            }


            //put on page
            wrap.after(html).hide();

        });

    };


})(jQuery);