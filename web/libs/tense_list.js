(function () {
    $(document).ready(main);

    function main () {

        //ACCORDION BUTTON ACTION
        $('div.spoiler-head-main').click(function () {
            $('div.spoiler-body-main').slideUp('normal');
            $(this).next().slideDown('normal');
        });

        //HIDE THE DIVS ON PAGE LOAD
        $("div.spoiler-body-main").hide();
        $('.spoiler-body').hide();

        //Inner Content
        $('.spoiler-head-folded').click(function () {
            $(this).toggleClass("closed").toggleClass("open").next().toggle();
        });

    }

})();
