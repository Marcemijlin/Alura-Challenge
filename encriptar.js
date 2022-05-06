function copiar_texto() {
    var texto = document.getElementById('resultado');
    var contenido =texto.value;
    texto.select();
    texto.setSelectionRange(1,contenido.length-1);
    document.execCommand('copy');

}

function encriptar() {
    var esconder = document.getElementById('esconder');
    var mostrar = document.getElementById('mostrar');
    var cadena = document.getElementById('cadena').value.toLowerCase();
    //console.log(cadena);
    var arreglo = [];

    for (let i = 0; i < cadena.length; i++) {
        //console.log(cadena.substring(i,i+1));
        /*
        `La letra "e" es convertida para "enter"`
        `La letra "i" es convertida para "imes"`
        `La letra "a" es convertida para "ai"`
        `La letra "o" es convertida para "ober"`
        `La letra "u" es convertida para "ufat"`
        */
        switch (cadena.substring(i, i + 1)) {
            case "e":
                arreglo[i] = "enter"
                break;
            case "i":
                arreglo[i] = "imes"
                break;
            case "a":
                arreglo[i] = "ai"
                break;
            case "o":
                arreglo[i] = "ober"
                break;
            case "u":
                arreglo[i] = "ufat"
                break;

            default:
                arreglo[i] = cadena.substring(i, i + 1);
                break;
        }
    }

    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }

    esconder.style.display = "none";
    mostrar.style.display = "flex";
    cadena = arreglo.join('');
    document.getElementById("resultado").innerHTML = JSON.stringify(cadena);
}

function desencriptar() {
    var esconder = document.getElementById('esconder');
    var mostrar = document.getElementById('mostrar');
    var cadena = document.getElementById('cadena').value.toLowerCase();
    var arreglo = [];

    for (let i = 0; i < cadena.length; i++) {

        switch (cadena.substring(i, i + 1)) {
            case "e":
                if (
                    cadena.substring(i + 1, i + 2) == "n" &&
                    cadena.substring(i + 2, i + 3) == "t" &&
                    cadena.substring(i + 3, i + 4) == "e" &&
                    cadena.substring(i + 4, i + 5) == "r"
                ) {
                    arreglo.push("e");
                    //arreglo[i] = "e";
                    //arreglo.splice(i, 5); no lo uso porque todavía no pasé cadena al arreglo pero recordar!!!
                    i = i + 4;
                } else {
                    //arreglo[i] = cadena.substring(i, i + 1);
                    arreglo.push(cadena.substring(i, i + 1));
                }
                break;

            case "i":
                if (
                    cadena.substring(i + 1, i + 2) == "m" &&
                    cadena.substring(i + 2, i + 3) == "e" &&
                    cadena.substring(i + 3, i + 4) == "s"
                ) {
                    arreglo.push("i");
                    i = i + 3;
                } else {
                    arreglo.push(cadena.substring(i, i + 1));
                }
                break;

            case "a":
                if (
                    cadena.substring(i + 1, i + 2) == "i"
                ) {
                    arreglo.push("a");
                    i = i + 1;
                } else {
                    arreglo.push(cadena.substring(i, i + 1));
                }
                break;

            case "o":
                if (
                    cadena.substring(i + 1, i + 2) == "b" &&
                    cadena.substring(i + 2, i + 3) == "e" &&
                    cadena.substring(i + 3, i + 4) == "r"
                ) {
                    arreglo.push("o");
                    i = i + 3;
                } else {
                    arreglo.push(cadena.substring(i, i + 1));
                }
                break;

            case "u":
                if (
                    cadena.substring(i + 1, i + 2) == "f" &&
                    cadena.substring(i + 2, i + 3) == "a" &&
                    cadena.substring(i + 3, i + 4) == "t"
                ) {
                    arreglo.push("u");
                    i = i + 3;
                } else {
                    arreglo.push(cadena.substring(i, i + 1));
                }
                break;

            default:
                arreglo.push(cadena.substring(i, i + 1));
                //arreglo[i] = cadena.substring(i, i + 1);
                break;
        }
    }

    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }

    esconder.style.display = "none";
    mostrar.style.display = "flex";
    cadena = arreglo.join('');
    document.getElementById("resultado").innerHTML = JSON.stringify(cadena);
}