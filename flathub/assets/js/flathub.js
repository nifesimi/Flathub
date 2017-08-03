var app = {
    sidebarsHandler: function(){
        var html = $("html");
        //button we click on

        var toggler = $(".navbar-toggle");
        //sidebar displayed in mobile

        var sidebarM = $("#mobile");

        //content of navbar in desktop
        var nav_collapse = $(".navbar-ex1-collapse").find("ul").clone(true).html();
        //console.log(nav_collapse);

        var nav_collapse2 = $(".navbar-ex2-collapse").find("ul").clone(true).html();
        
        //console.log(desktop);
        var output = nav_collapse + nav_collapse2

        //console.log(output);

        sidebarM.find("ul").html(output);

        toggler.on('click', function(){
            html.toggleClass("open");

            });
    }        
}