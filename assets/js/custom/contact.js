(function ($) {
  $(function () {
    $("form").submit(function (event) {
      var formData = {
        body: {
          subject: $("#name").val(),
          email: $("#email").val(),
          message: $("#message").val(),
        },
      };

      $.ajax({
        type: "POST",
        url: "https://zjk34z7eqetkmgy5y5p6a3euxi0mybge.lambda-url.ca-central-1.on.aws/",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });

      event.preventDefault();
    });
  });
})(jQuery);
