/////////////////////// SEARCH ///////////////////////

$('.live-search-list li').each(function(){
   $(this).attr('data-search-term', $(this).text().toLowerCase());
});

$('.live-search-box').on('keyup', function(){

var searchTerm = $(this).val().toLowerCase();

    $('.live-search-list li').each(function(){

        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });

});


/////////////////////// SEARCH RESULTS ///////////////////////

// $(document).ready(function(){
//     $("h2").click(function(){
//         alert("The paragraph was clicked.");
//     });
// });


// $​('#h2').live('click', function(){
//     $('p').hide();
//     $('#gigantii').show();
// });



/////////////////////// FRONT PAGE ///////////////////////

setInterval(function(){
    var $win = $("#windows");
    var $app = $("#apple");
    var $and = $("#android");
  	var $ios = $("#ios");
  	var $for = $("#forward");
  	var $cs = $("#cs");
    var $dev = $("#devices");
    var $tes = $("#test");

    var $en = $("#en");
    var $to = $("#to");
    var $tre = $("#tre");
    var $fire = $("#fire");
    var $fem = $("#fem");
    var $seks = $("#seks");
    var $syv = $("#syv");
    var $otte = $("#otte");

    if($win.not(":hover")) {
       $en.css("display", "none");
    }  
    if($win.is(":hover")) {
       $en.css("display", "block");
    }

    if($app.not(":hover")) {
       $to.css("display", "none");
    }
    if($app.is(":hover")) {
       $to.css("display", "block");
    }
    if($and.not(":hover")) {
       $tre.css("display", "none");
    }
    if($and.is(":hover")) {
       $tre.css("display", "block");
    }
    if($ios.not(":hover")) {
       $fire.css("display", "none");
    }
    if($ios.is(":hover")) {
       $fire.css("display", "block");
    }
    if($for.not(":hover")) {
       $fem.css("display", "none");
    }
    if($for.is(":hover")) {
       $fem.css("display", "block");
    }
    if($cs.not(":hover")) {
       $seks.css("display", "none");
    }
    if($cs.is(":hover")) {
       $seks.css("display", "block");
    }
    if($dev.not(":hover")) {
       $syv.css("display", "none");
    }
    if($dev.is(":hover")) {
       $syv.css("display", "block");
    }
    if($tes.not(":hover")) {
       $otte.css("display", "none");
    }
    if($tes.is(":hover")) {
       $otte.css("display", "block");
    }
})

// GO BACK

function goBack() {
    window.history.back();
}
