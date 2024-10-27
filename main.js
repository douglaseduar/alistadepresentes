let iddoagendamento = location.search;
let idaux = iddoagendamento.split("=");
let idmesmo = idaux[1];

carregarDadosAgendamento(idmesmo);


function carregarDadosAgendamento(idmesmo) {
   document.querySelector("#nome").textContent = idmesmo.replaceAll("-", " ") + "!"

}

document.getElementById('execCopy').addEventListener('click', execCopy);
function execCopy() {
    let textoCopiado = document.getElementById("input");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function abrirmodal(valor){

document.querySelector("#valordopix").textContent = 'R$ ' + valor
document.querySelector(".botao1").click()

}