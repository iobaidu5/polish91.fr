jQuery(document).ready(function ($) {
  var successMessage = `<i class="fa fa-info-circle"></i><b>Succès:</b> Votre demande est envoyée avec succès`;
  var ErrorMessage = `<i class="fa fa-info-circle"></i><b>Erreur:</b> Veuillez vérifier vos données d'entrée`;

  $("#contactForm").on("submit", function (e) {
    console.log("form submited");
    sendFormData(e, "#contactForm", "contact");
  });

  $("#devisForm").on("submit", function (e) {
    sendFormData(e, "#devisForm", "devis");
  });

  function sendFormData(e, id, type) {
    e.preventDefault();
    var redirectUrl = $(id)[0]["redirectUrl"]["value"];
    $.ajax({
      url: $(id)[0]["action"],
      type: "POST",
      data: $(id).serialize(),
      datatype: "json",
      success: function (data, response, message) {
        console.log("form success");
        if (type === "contact") {
          document
            .querySelector("#contact-form-response")
            .classList.add("success");
          document.querySelector(
            "#contact-form-response"
          )
          
        }
        if (type === "devis") {
          alert("Formulaire envoyé avec succès");
        }

        setTimeout(() => {
          location.href = redirectUrl;
        })
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("form error");
        if (type === "contact") {
          document.querySelector("#contact-form-response").classList.add("error");
          document.querySelector(
            "#contact-form-response"
          ).innerHTML = ErrorMessage;
        }
        if (type === "devis") {
          alert("Erreur dans l'envoi du formulaire");
        }
      },
    });
  }
  // $("#clone_g_re_captcha").html($("#g_re_captcha").clone(true, true));
  $("#contact-form").prop("disabled", true);
});

var CaptchaCallback = function () {
  jQuery(".g-recaptcha").each(function () {
    grecaptcha.render(this, {
      sitekey: "6LcMAbogAAAAABJBUur2DukuwKom8Fs9wukx9xvY",
      callback: correctCaptcha,
    });
  });
};

function correctCaptcha() {
  if (grecaptcha === undefined) {
    return;
  }
  document.querySelectorAll(".g-recaptcha").forEach((checkbox) => {
    checkbox.style.opacity = "0.5"
  });
  document.querySelectorAll(".form-submit").forEach((button) => {
    button.innerHTML = "Envoyer";
    button.disabled = false
  });
}