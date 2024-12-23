$(document).ready(() => {

   $(".nav-toggle").on("click", () => {
    $("#nav-bar ul").slideToggle("medium")
   });
   
   $("#contact-form").on("submit", function(event) {
    event.preventDefault();

    if(!$("#name").val()) {
        alert("Campo nome deve ser informado");
    }

    const formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        subject: $("#subject").val(),
        message: $("#message").val()
    };

    console.log(formData)

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