const formulario = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const usuario = document.querySelector('#floatingInput')
const nombre = document.querySelector('#nombre')
const clave = document.querySelector('#floatingPassword')


const validarUsuario = /^([A-Za-z0-9]){4,20}$/gm
const validarClave = /^-?\d+\.?\d*$/m;
const validarFormulario = (e) => {

    switch (e.target.name) {
        case "usuario":

            if (validarUsuario.test(e.target.value)) {

                usuario.classList.add('is-valid')
                usuario.classList.remove('is-invalid')
            } else {
                usuario.classList.add('is-invalid')
                usuario.classList.remove('is-valid')
            }
            break;
        case "clave":
            if (validarClave.test(e.target.value)) {
                clave.classList.add('is-valid')
                clave.classList.remove('is-invalid')
            } else {
                clave.classList.add('is-invalid')
                clave.classList.remove('is-valid')
            }
            break;
        default:
            break;
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)

})
var contadorErrores = 3
function validar() {
    var usuario = document.querySelector('#floatingInput').value
    var clave = document.querySelector('#floatingPassword').value


    if (usuario == "BancoUnion" && clave == "1234" || usuario == "SantiagoG" && clave == "1234") {
        document.querySelector('#loading').style = "display: block;"
        document.querySelector('form').style = "display: none;"
        document.querySelector('#danger').style = "display: none;"

        setTimeout(function () {
            document.querySelector('#loading').style = "display: none;"
            document.querySelector('#opciones').style = "display: block"
            nombre.textContent = "Bienvenido  " + usuario
        }, 4000)

        return false
    } else {
        contadorErrores--;
        document.querySelector('#danger').textContent = "Error de credenciales te quedan " + contadorErrores + " intentos"
        document.querySelector('#danger').style = "display: block;"
        if (contadorErrores == 0) {
            document.querySelector('#danger').textContent = "Has intentado demasiadas veces"
            document.querySelector('#danger').style = "display: block;"
            document.querySelector('#floatingInput').disabled = true
            document.querySelector('#floatingPassword').disabled = true
            document.querySelector('#button').disabled = true
            return false
        }
    }
}
function saldo() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#opciones').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#saldo').style = "display: block;"
    }, 1500)

}
function retirar() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#opciones').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#retirar').style = "display: block;"
    }, 1500)


}
function consignar() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#opciones').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#consignar').style = "display: block;"
        
    }, 1500)


}
function transferir() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#opciones').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#transferir').style = "display: block;"
    }, 1500)


}
function volver_atras() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#transferir').style = "display: none;"
    document.querySelector('#saldo').style = "display: none;"
    document.querySelector('#consignar').style = "display: none;"
    document.querySelector('#atras').style = "display: none;"
    document.querySelector('#retirar').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#opciones').style = "display: block;"
        document.querySelector('#atras').style = "display: block;"
    }, 1000)
}

function enviarConsignacion(){
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#exampleModal').style = "display: none;"
    document.querySelector('#alertToas').style = "display: block;"
    document.querySelector('.modal-backdrop').style = "display: none;"        
    document.querySelector('#consignar').style = "display: none;"

    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#opciones').style = "display: block;"
        document.querySelector('#alertToas').style = "display: none;"
    }, 10000)

}
function confirmacion(){
    document.querySelector('.modal-backdrop').style = "display: block;"
}