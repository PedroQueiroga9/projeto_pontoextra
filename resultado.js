document.addEventListener("DOMContentLoaded", function() {
    // Função para obter os parâmetros da URL
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const regex = /([^&=]+)=([^&]*)/g;
        let match;
        while (match = regex.exec(queryString)) {
            params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
        }
        return params;
    }

    const params = getQueryParams();
    if (params.nome) {
        document.getElementById('nomeResultado').innerText = `Nome: ${params.nome}`;
    }
    if (params.email) {
        document.getElementById('emailResultado').innerText = `Email: ${params.email}`;
    }
    if (params.mensagem) {
        document.getElementById('mensagemResultado').innerText = `Mensagem: ${params.mensagem}`;
    }
});
