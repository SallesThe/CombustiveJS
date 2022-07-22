function compararCombustivel() {
    // Declaração de variáveis
    var gasolina = document.getElementById('gasolina').value;
    var etanol = document.getElementById('etanol').value;
    var result = document.getElementById('result');

    // Troca virgula por ponto
    gasolina = gasolina.replace(',', '.');
    etanol = etanol.replace(',', '.'); 

    // Calculo combustível
    var maisBarato = etanol/gasolina;

    if(gasolina !='' && etanol !='') {
        if(maisBarato >= 0.7) {
            result.innerHTML = '<h2>Melhor abastecer com Gasolina.</h2>';
        } else {
            result.innerHTML = '<h2>Melhor abastacer com Etanol.</h2>';
        }
    } else {
        alert('Por favor informe um valor!');
    }  
}