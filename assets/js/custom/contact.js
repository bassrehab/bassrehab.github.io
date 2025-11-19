(function ($) {
  $(function () {
    $("#contact-form").submit(function (event) {
      event.preventDefault();

      var submitBtn = $(this).find('.submit-btn');
      var statusDiv = $('#form-status');
      var originalBtnHtml = submitBtn.html();

      // Show loading state
      submitBtn.html('<i class="fa-solid fa-spinner fa-spin"></i> Sending...').prop('disabled', true);
      statusDiv.hide();

      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val(),
      };

      $.ajax({
        type: "POST",
        url: "https://formspree.io/f/mvglkyqr",
        data: formData,
        dataType: "json",
      })
      .done(function (data) {
        console.log("Success:", data);

        // Redirect to thank you page
        window.location.href = '/contact/thank-you/';
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
        statusDiv.removeClass('success').addClass('error');
        statusDiv.text('✗ Oops! Something went wrong. Please try again or email me directly.');
        statusDiv.show();
      })
      .always(function() {
        // Restore button
        submitBtn.html(originalBtnHtml).prop('disabled', false);
      });
    });
  });
})(jQuery);
