




const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    if(nombre === '' || apellido === ''){
        mostrarError('Todos los campos son obligatorios')
        return
    }
    mostrarMensaje('Formulario enviado correctamente')
})
