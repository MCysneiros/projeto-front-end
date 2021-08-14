$(document).ready(function () {
  $("#loginAluno").submit(function (event) {
    if (
      $("#inputUsuario").val() == "root" &&
      $("#inputSenha").val() == "1234"
    ) {
      $("#mensagem").addClass(
        "alert alert-success alert-dismissible fade show"
      );
      $("#mensagem").removeClass("alert-warning");
      $("#mensagem").text("usuário logado!").show().fadeOut(3000);
    } else {
      $("#mensagem").addClass(
        "alert alert-warning alert-dismissible fade show"
      );
      $("#mensagem").removeClass("alert-success");
      $("#mensagem").text("usuário ou senha invalida!").show().fadeOut(3000);
      event.preventDefault();
    }
  });
});
