



const eliminarNodo = (nodo) => {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    eliminarNodo(alerta); 
    const nommbre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const alerta = document.querySelector('#alerta');
    if (nommbre === '' || apellido === '') {
        alerta.innerHTML = 'Todos los campos son obligatorios';
        alerta.classList.add('alert-danger');
        setTimeout(() => {
            eliminarNodo(alerta);
            return
        }, 3000);   
        procesarForm()
    }
});

const procesarForm = () => {
    console.log('Processing form ...');
}
