function pesquisar() {
     // Seleciona a seção onde os resultados da pesquisa serão exibidos
     let section = document.getElementById("resultados-pesquisa");


     let campoPesquisa = document.getElementById
          ("campo-pesquisa").value

     if (campoPesquisa == "") {
          section.innerHTML = "Nenhum resultado foi encontrado"
          return

     }

     campoPesquisa = campoPesquisa.toLowerCase()

     // Inicializa uma string vazia para armazenar os resultados da pesquisa
     let resultado = "";
     let titulo = "";
     let descricao = "";

     // Itera sobre cada item (componente) da lista de dados
     for (let dado of dados) {
          titulo = dado.titulo.toLocaleLowerCase()
          descricao = dado.descricao.toLocaleLowerCase()
          // se titulo includes campoPesquisa
          if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
               //cria um novo elemento
               resultado += `
          <div class="item-resultado">
            <h2>
              <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao}.</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
          </div>
        `;

          }
     }

     // Atribui o conteúdo HTML completo da string 'resultado' à seção
     section.innerHTML = resultado;
}