
const botao = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

botao.addEventListener("click", () => {
    
    const popInicial = Number(document.getElementById("popInicial").value);
    const taxa = Number(document.getElementById("taxa").value) / 100; 
    const anos = Number(document.getElementById("anos").value);

    
    if (popInicial <= 0 || taxa < 0 || anos <= 0) {
        resultadoDiv.textContent = "⚠️ Preencha todos os campos corretamente.";
        return;
    }

  
    const populacaoFinal = popInicial * Math.pow((1 + taxa), anos);

   
    resultadoDiv.textContent = 
        `Após ${anos} anos, a população será de aproximadamente ${populacaoFinal.toFixed(0)} habitantes.`;
});
