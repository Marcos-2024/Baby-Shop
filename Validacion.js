
let btn_form = document.getElementById('btn')
btn_form.addEventListener('click', validar)

function validar() {
    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    let campo_nombre = document.getElementById('nombreapellido')
    
    if (campo_nombre.value.trim() === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Debe completar los campos',
            icon: 'warning',
            confirmButtonText: 'Entendido'
          })
    } else {
        console.log('informacion enviada:' + campo_nombre.value)
        campo_nombre.value = '' 
    }

    let campo_email = document.getElementById('correoelectronico')
    if (campo_email.value.trim() === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Debe completar los campos',
            icon: 'warning',
            confirmButtonText: 'Entendido'
          })
    } else {
        console.log('informacion enviada:' + campo_email.value)
        campo_email.value = '' 
    }

    let campo_mensaje = document.getElementById('mensaje')
    if (campo_mensaje.value.trim() === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Debe completar los campos',
            icon: 'warning',
            confirmButtonText: 'Entendido'
          })
    } else {
        console.log('informacion enviada:' + campo_mensaje.value)
        campo_mensaje.value = '' 
    }

}

