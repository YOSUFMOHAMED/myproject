

$(".acordion").click(function() {
    // console.log( $(this).data("content") );
    $(".acordion-content").not($(this).data("content")).slideUp(1);
    $(this).toggleClass("open");
    $($(this).data("content")).slideToggle(100);
});

$(".favorite").click(function() {
    $(this).toggleClass("fa");
})

$("")