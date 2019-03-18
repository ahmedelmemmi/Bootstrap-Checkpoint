$(".text").mouseover(function() {
    $(this).children(".item").show();
}).mouseout(function() {
    $(this).children(".item").hide();
});

