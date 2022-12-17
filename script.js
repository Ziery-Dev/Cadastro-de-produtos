function alterarMenu(){ //mostra e esconde o menu de navegção 
    let nav_ul = document.getElementById('lista-nav')

    if(nav_ul.className == 'nav-normal'){
       nav_ul.className = 'nav-responsivo'
    }
    else{
        nav_ul.className = 'nav-normal'
    }

   
}


function transicaoBtn(){ // ativa a animação do botão da navegação
    let botao = document.getElementById('botao-hb')
    if (botao.className == 'btn-normal'){
        botao.className = 'btn-animacao'
        botao.style.marginRight='35px'
        botao.style.marginTop='70px'
    }

    else {
        botao.className = 'btn-normal'
        botao.style.marginRight='15px'
        botao.style.marginTop='30px'
    }

}


let input_nome =  document.getElementById('input_nome')
let input_preco = document.getElementById('input_preco')

let lista = Array()


function adicionarProduto(nome, preco){ //Função para adicionar produtos à tabela
    if (input_nome.value == '' || input_preco.value == ''){ //se os valores dos inputs forem vazios
       alert('Os campos "nome" ou "preço" não podem ficar vazios!')
    }
    
    else if (input_preco.value <  0 ){ // se o valor do input preço for menor que 0
       alert('O campo "preço" não pode conter valores negativos')
       input_preco.value = ''
    }
   
    else if (preco.length > 20 || nome.length > 20){
       alert('Valores acima de 20 caracteres não são permitidos')
       input_preco.value = ''
       input_nome.value = ''
   
    }
   
    else if (lista.indexOf(input_nome.value.toUpperCase()) == -1){
      let valor_aleatorio = Math.ceil(Math.random()*10000)
      console.log(valor_aleatorio)
   
       let tabela =  document.getElementById('tabela') //pega a tabela
       let qt_linha = tabela.rows.length // vê o  número de linhas na tabela
       let linha = tabela.insertRow(qt_linha) //insere uma linha 
    
        let col_nome = linha.insertCell(0) //inser uma coluna para o nome do produto
        let col_preco = linha.insertCell(1)//inser uma coluna para o preço do produto
        let col_codigo = linha.insertCell(2)//inser uma coluna para o código do produto
    
    
        col_nome.innerHTML = nome.toUpperCase() //Insere o nome do produto na respetiva coluna e deixa todas as letras maiúsculas
        col_preco.innerHTML = 'R$ '+preco  // insere o preço na respectiva coluna
        col_codigo.innerHTML = qt_linha*valor_aleatorio  // insere o valor da quantidade de linhas como codigo do produto
   
        input_nome.value = '' //limpa o campo produto
        input_preco.value = ''  //limpa o campo preço
   
        lista.push(nome.toUpperCase()) //insere o  novo produto no array lista deixa as palavras maiusculas
    }
   
    else{
      alert('produto já cadastrado') //aviso caso o produto já esteja cadastrado
      input_nome.value = ''
      input_preco.value = ''
    } 
        
   }


   function ApenasLetras(e, t) { //aceita apenas letras no input nome
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255)|| // letras com acentos
            (charCode == 32)
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}