console.log(window);

//window.alert( `resolução é: ${window.innerHeight} X ${window.innerWidth}`);

let meuTitulo = document.getElementById('titulo');

//meuTitulo.innerHTML = 'Mudou';

//console.log(meuTitulo);

meuTitulo.style.background = '#dedede';

if(confirm('Deixe uma msg:')) {
    let msg= prompt('Mensagem');
    meuTitulo.innerText = msg; + 'Navegador do :' + window.navigator.vendor ;
    meuTitulo.style.background = 'red'
}
else{

    meuTitulo.innerText = 'Sem mensagem';
    meuTitulo.style.background = 'purple';

}

//para ver tudp disponível em navigator
console.log(window.navigator);

