function imprimir() {
    let numero = Number(document.getElementById('n').value);
    let n = numero;
    let nn = document.getElementById('lis');

    let i = 1;
    while(i < n) {
        let lista = document.createElement('li');
            lista.textContent ='Hola profesor';
            nn.appendChild(lista);

        i++;
    }

}