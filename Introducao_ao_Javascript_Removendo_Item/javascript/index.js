      function login(){
        document.getElementById("login").innerHTML = document.getElementById("nome").value;
      }

      function produto(acao) {
        var unit1 = parseInt(document.getElementById("unit1").innerHTML);
        var precoUnit1 = parseFloat(document.getElementById("precoUnit1").innerHTML);
        var unit2 = parseInt(document.getElementById("unit2").innerHTML);
        var precoUnit2 = parseFloat(document.getElementById("precoUnit2").innerHTML);

        switch(acao){
                case 'mais1':
                  document.getElementById("unit1").innerHTML = unit1 + 1;
                  document.getElementById("precoUnit1").innerHTML = precoUnit1 + 5.901,54;
                  break;
                case 'menos1':
                  if (precoUnit1>1){
                  document.getElementById("unit1").innerHTML = unit1 - 1;
                  document.getElementById("precoUnit1").innerHTML = precoUnit1 - 5.901,54;
                  }

                  break;
                case 'mais2':
                  document.getElementById("unit2").innerHTML = unit2 + 1;
                  document.getElementById("precoUnit2").innerHTML = precoUnit2 + 2.159,10;
                  break;
                case 'menos2':
                  if (precoUnit2>1){
                  document.getElementById("unit2").innerHTML = unit2 - 1;
                  document.getElementById("precoUnit2").innerHTML = precoUnit2 - 2.159,10;
                  break;
                  }
            }
      }
      
      function removerTudo() {
        alert("Tem certeza de que deseja remover esse produto de seu carrinho de compras?")
        var pai=document.getElementById("pai");
        var filho=document.getElementById("produto");
        pai.removeChild(filho);
        adicionarMensagem()
      }

      function remover1() {
        alert("Tem certeza de que deseja remover esse produto de seu carrinho de compras?")
        var pai=document.getElementById("pai1");
        var filho=document.getElementById("produto1");
        pai.removeChild(filho);
        adicionarMensagem1()
      }

      function remover2() {
        alert("Tem certeza de que deseja remover todos os prodrutos de seu carrinho de compras?")
        var pai=document.getElementById("pai2");
        var filho=document.getElementById("produto2");
        pai.removeChild(filho);
          adicionarMensagem2()
      }

      function adicionarMensagem() {
        var texto = "Não tem nenhum produto em seu carrinho";
        var para = document.createElement("p");
        para.setAttribute("class", "mensagemDoRemovido");
        var nodo = document.createTextNode(texto);
        para.appendChild(nodo);
        var elemento=document.getElementById("pai");
        elemento.appendChild(para);
      }

      function adicionarMensagem1() {
        var texto = "Removido com sucesso";
        var para = document.createElement("p");
        para.setAttribute("class", "mensagemDoRemovido");
        var nodo = document.createTextNode(texto);
        para.appendChild(nodo);
        var elemento=document.getElementById("pai1");
        elemento.appendChild(para);
      }
        
      function adicionarMensagem2() {
        var texto = "Removido com sucesso";
        var para = document.createElement("p");
        para.setAttribute("class", "mensagemDoRemovido");
        var nodo = document.createTextNode(texto);
        para.appendChild(nodo);
        var elemento = document.getElementById("pai2");
        elemento.appendChild(para);
      }

      function finalizar(){
        window.location.href = window.location.href;
      }

