$(document).ready(() => {
  /*A função abaixo tem por finalidade fazer com que os elementos filhos da tag 
    nav se comportem como um menu retrátil em dispositivos de menor resolução (=<789)*/
  $(".nav-toggle").on("click", () => {
    $("#nav-bar ul").slideToggle("medium");
  });

  $("#contact-form").on("submit", function (event) {
    event.preventDefault();

    if (!$("#name").val()) {
      alert("Campo nome deve ser informado");
    }

    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      message: $("#message").val(),
    };

    console.log(formData);

    /*
    $.ajax({
        type:"POST",
        url: "endereco-backend",
        data: formData,
        sucess: function(response) {
            console.log("Fromulário enviado com sucesso");
        },
        error: function(error) {
            console.log("Erro ao enviar o formulário", error);
        }
    })
    */
  });
});
