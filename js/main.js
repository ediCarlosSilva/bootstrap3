$(function() {
    // equivalente ao load da página
    // alert("olá!");

    $("#modal01").modal({ backdrop: false, keyboard: false });

    $("#modal01").modal("show");

    setTimeout(function() {
        $("#modal01").modal("hide");
    }, 3000);

    $(".ttp").tooltip({
        title: "Título padrão",
        trigger: "click"
    });

    $(".ppv").popover({
        title: "Título do popover",
        trigger: "hover focus"
    });

    $(".btnjs").button();

    $("#troca-estado").click(function() {
        var btn = $(this);
        btn.button("loading");

        setTimeout(function() {
            btn.button("reset");
        }, 3000);
    });

});