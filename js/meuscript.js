

function calcular(oper) {
    var pessoas = document.calcform.pessoas.value;
    var vegetarianos = document.calcform.vegetarianos.value;
    var horas = document.calcform.horas.value;
    var salada = 0, cerveja = 0, carne = 0, refrigerante = 0;


    if (vegetarianos >= 1) {
        pessoas -= vegetarianos;
        salada = vegetarianos * 100 * horas;
        cerveja = (vegetarianos * horas * 365);
        refrigerante = (vegetarianos * horas * 100);
    }

    if (pessoas >= 1) {
        carne = (pessoas * horas * 50);
        cerveja += (pessoas * horas * 365);
        salada += pessoas * 50 * horas;
        refrigerante += (pessoas * horas * 100);
    }
    document.calcform.carne.value = carne;
    document.calcform.salada.value = salada;
    document.calcform.refrigerante.value = refrigerante;
    document.calcform.cerveja.value = cerveja;
}

