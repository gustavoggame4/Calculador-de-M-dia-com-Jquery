let mediaGlobal = null;

function normalizar(n) {
    return parseFloat(n.replace(",", "."));
}

function valida(n) {
    return n !== "" && !isNaN(n) && n >= 0 && n <= 10;
}

$(function () {
    $("#calcular").click(function () {
        let n1 = normalizar($("#n1").val());
        let n2 = normalizar($("#n2").val());
        let n3 = normalizar($("#n3").val());
        let n4 = normalizar($("#n4").val());

        $("#resultado").removeClass("info success error");
        $("#resultadoFinal").removeClass("info success error").text("");

        if (!valida(n1) || !valida(n2) || !valida(n3) || !valida(n4)) {
            $("#resultado").text("Notas inválidas").addClass("error");
            $("#finalArea").hide();
            return;
        }

        let media = (n1 + n2 + n3 + n4) / 4;
        mediaGlobal = media;
        $("#resultado").text("Média: " + media.toFixed(1)).addClass("info");
        $("#finalArea").hide();

        if (media < 4) {
            $("#resultado").text("Média: " + media.toFixed(1) + " — Reprovado direto").removeClass("info").addClass("error");
        } else if (media < 6) {
            $("#resultado").text("Média: " + media.toFixed(1) + " — Final").removeClass("info").addClass("info");
            $("#finalArea").show();
        } else {
            $("#resultado").text("Média: " + media.toFixed(1) + " — Aprovado").removeClass("info").addClass("success");
        }
    });

    $("#calcularFinal").click(function () {
        let nf = normalizar($("#notaFinal").val());
        $("#resultadoFinal").removeClass("info success error");

        if (!valida(nf)) {
            $("#resultadoFinal").text("Nota inválida").addClass("error");
            return;
        }

        let soma = mediaGlobal + nf;

        if (soma >= 10) {
            $("#resultadoFinal").text("Aprovado na final").addClass("success");
        } else {
            $("#resultadoFinal").text("Reprovado na final").addClass("error");
        }
    });
});
