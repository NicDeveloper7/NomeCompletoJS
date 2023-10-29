function exibirNome() {
    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const nomeCompletoSpan = document.getElementById("nomeCompletoSpan");
    const nomeCatalogoSpan = document.getElementById("nomeCatalogoSpan"); 

    const palavras = nomeCompleto.split(" ");
    const primeiroNome = palavras[0];
    const ultimoSobrenome = palavras.pop();

    const sobrenomeMaiusculo = ultimoSobrenome.toUpperCase() 

    const nomeCatalogo = sobrenomeMaiusculo + ", " + primeiroNome;

    nomeCompletoSpan.textContent = nomeCompleto;
    nomeCatalogoSpan.textContent = nomeCatalogo;

    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";
}
