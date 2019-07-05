$(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 5,
      time: 500
    });
    // search icon animation
    $(".serchicon").click(function () {
        $("form").fadeIn("slow");
        $("form").show();
        $(".serchicon").hide();
      })
      $('.videobtn').click(function () {
        $('video').attr('controls', 'controls');
        $('.videobtn').hide();
      })
    //   owl carosal
    var $owl = $('.owl-carousel');

    $owl.children().each(function (index) {
      $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 5,
    });

    $(document).on('click', '.owl-item>div', function () {
      $owl.trigger('to.owl.carousel', $(this).data('position'));
    });
});