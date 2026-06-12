function mostrarInfo(elemento) {
    const titulo = document.getElementById('info-titulo');
    const texto = document.getElementById('info-texto');
    const painel = document.getElementById('painel-info');

    // Mudar as informações com base no que foi clicado
    if (elemento === 'arvore') {
        titulo.innerText = "🌳 Árvores: Os Pulmões do Mundo";
        texto.innerText = "As árvores purificam o ar, produzem oxigênio, evitam a erosão do solo e servem de abrigo para milhares de animais. Proteger as florestas é proteger a nossa vida!";
        painel.style.borderLeftColor = "#2e7d32"; // Verde
    } 
    else if (elemento === 'flor') {
        titulo.innerText = "🌸 Flores e Biodiversidade";
        texto.innerText = "As flores são essenciais para os polinizadores, como as abelhas. Sem elas, a maior parte dos alimentos que consumimos hoje simplesmente não existiria!";
        painel.style.borderLeftColor = "#e91e63"; // Rosa
    } 
    else if (elemento === 'lixo') {
        titulo.innerText = "🗑️ Lixo e Reciclagem";
        texto.innerText = "O descarte incorreto do lixo polui rios e solos. Praticar os 3Rs (Reduzir, Reutilizar e Reciclar) ajuda a diminuir os lixões e salva espécies marinhas e terrestres.";
        painel.style.borderLeftColor = "#f57c00"; // Laranja/Alerta
    } 
    else if (elemento === 'poluicao') {
        titulo.innerText = "💨 Poluição no Ar";
        texto.innerText = "Fumaça de indústrias, queimadas e gases de carros criam uma camada que sufoca as cidades e acelera o aquecimento global. Precisamos de energias limpas urgentes!";
        painel.style.borderLeftColor = "#757575"; // Cinza
    }
}
