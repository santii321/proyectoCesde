const formulario = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const usuario = document.querySelector('#floatingInput')
const nombre = document.querySelector('#nombre')
const clave = document.querySelector('#floatingPassword')
const montoRetiros = document.querySelector('#montoRetiros')
const formularioTransferencias = document.getElementById('formTransferencias')
const inputTransferencia = document.querySelectorAll('#formTransferencias input')
const formularioConsigancion = document.getElementById('formConsignacion')
const inputConsignacion = document.querySelectorAll('#formConsignacion input')
let saldos = 100000

/* Comienzan las validaciones de ingreso de carateres validos en cada campo */
const validarUsuario = /^([A-Za-z0-9]){4,20}$/gm
const validarClave = /^-?\d+\.?\d*$/m;
const ValidarCuenta = /^-?\d+\.?\d*$/m;

const validarNumeros = /^\d{5,15}$/
const validarCorreo = /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
const validarNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
const validarDinero = /^$[0-9]{1,3}([\\.][0-9]{3})/

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
        case "montoRetiros":
            if (ValidarCuenta.test(e.target.value)) {
                montoRetiros.classList.add('is-valid')
                montoRetiros.classList.remove('is-invalid')
                document.querySelector('#myBtn').disabled = false;
                document.querySelector('#errorValor').style = "display:none"

            } else {
                montoRetiros.classList.add('is-invalid')
                montoRetiros.classList.remove('is-valid')
                document.querySelector('#errorValor').textContent = "Por favor ingrese numeros validos"
                document.querySelector('#errorValor').style = "display:block"
                document.querySelector('#myBtn').disabled = true;

            }
        case "nombreTranferir":
            if (validarNombre.test(e.target.value)) {
                nombreTranferir.classList.add('is-valid');
                nombreTranferir.classList.remove('is-invalid');
                document.querySelector('#botonGuardar').disabled = false;

            } else {
                nombreTranferir.classList.add('is-invalid');
                nombreTranferir.classList.remove('is-valid');
                document.querySelector('#botonGuardar').disabled = true;

            }
            break;
        case "email":
            if (validarCorreo.test(e.target.value)) {
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
                document.querySelector('#botonGuardar').disabled = false;

            } else {
                email.classList.add('is-invalid');
                email.classList.remove('is-valid');
                document.querySelector('#botonGuardar').disabled = true;

            }
            break;
        case "numeroTransferir":
            if (validarNumeros.test(e.target.value)) {
                numeroTransferir.classList.add('is-valid');
                numeroTransferir.classList.remove('is-invalid');
                document.querySelector('#botonGuardar').disabled = false;

            } else {
                numeroTransferir.classList.add('is-invalid');
                numeroTransferir.classList.remove('is-valid');
                document.querySelector('#botonGuardar').disabled = true;

            }
            break;
        case "montoTranferir":
            if (validarNumeros.test(e.target.value)) {
                montoTranferir.classList.add('is-valid');
                montoTranferir.classList.remove('is-invalid');
                document.querySelector('#botonGuardar').disabled = false;

            } else {
                montoTranferir.classList.add('is-invalid');
                montoTranferir.classList.remove('is-valid');
                document.querySelector('#botonGuardar').disabled = true;

            }
            break;
        case "numeroCuenta":
            if (validarNumeros.test(e.target.value)) {
                numeroCuenta.classList.add('is-valid');
                numeroCuenta.classList.remove('is-invalid');
                document.querySelector('#botonGuardar').disabled = false;


            } else {
                numeroCuenta.classList.add('is-invalid');
                numeroCuenta.classList.remove('is-valid');
                document.querySelector('#botonGuardar').disabled = true;

            }
            break;
        case "consignare":
            if (validarNumeros.test(e.target.value)) {
                consignare.classList.add('is-valid');
                consignare.classList.remove('is-invalid');
                document.querySelector('#botonConsignar').disabled = false;


            } else {
                consignare.classList.add('is-invalid');
                consignare.classList.remove('is-valid');
                document.querySelector('#botonConsignar').disabled = true;
            }
            break;

    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)

})
/* Fin de las validaciones */

/* VALIDACION USUARIO */
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
/* FIN VALIDACION USUARIO */

/* CODIGO SALDO */
function saldo() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#opciones').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#saldo').style = "display: block;"
    }, 1500)

    const tuSaldo = document.querySelector('#tuSaldo')
    tuSaldo.innerText = saldos
}

/* CODIGO RETIRAR */
function retirar() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#opciones').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#retirar').style = "display: block;"
    }, 1500)
}

/* CODIGO CONSIGNAR */
function consignar() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#opciones').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#consignar').style = "display: block;"

    }, 1500)
}

/*  CODIGO TRANSFERIR */
function transferir() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#opciones').style = "display: none;"
    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#transferir').style = "display: block;"
    }, 1500)


}

/* CODIGO BOTON VOLVER ATRAS */
function volver_atras() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#transferir').style = "display: none;"
    document.querySelector('#saldo').style = "display: none;"
    document.querySelector('#consignar').style = "display: none;"
    document.querySelector('#atras').style = "display: none;"
    document.querySelector('#retirar').style = "display: none;"
    document.querySelector('#exitosa').style = "display: none;"
    document.querySelector('#exitosaTranferir').style = "display: none"

    modal.style.display = "none";

    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#opciones').style = "display: block;"
        document.querySelector('#atras').style = "display: block;"
    }, 1000)
    limpiarInput()
}

/* CONDIGO ENVIAR CONSIGNACION */
function enviarConsignacion() {
    document.querySelector('#loading').style = "display: block;"
    document.querySelector('#exampleModal').style = "display: none;"
    document.querySelector('#alertToas').style = "display: block;"
    document.querySelector('.modal-backdrop').style = "display: none;"
    document.querySelector('#consignar').style = "display: none;"


    const consignare = document.querySelector('#consignare').value
    saldos = parseInt(consignare) + saldos
    console.log(saldos)

    setTimeout(function () {
        document.querySelector('#loading').style = "display: none;"
        document.querySelector('#exitosa').style = "display: block;"
        document.querySelector('#alertToas').style = "display: none;"
        document.querySelector('#atras').style = "display: block;"
    }, 7000)

}

/* BOTON DE CONFIRMAR */
function confirmacion() {
    document.querySelector('.modal-backdrop').style = "display: block;"
}

/* BOTON DE RETIRAR SALDO Y LO MUETRA EN MODAL */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
btn.onclick = function () {
    const retirarSaldo = document.querySelector('#montoRetiros').value
    const retirarDinero = parseInt(retirarSaldo)
    if (retirarDinero <= saldos) {

        saldos = parseInt(saldos) - retirarDinero

        document.querySelector('#loading').style = "display: block;"
        document.querySelector('#retirar').style = "display: none"

        setTimeout(function () {
            document.querySelector('#loading').style = "display: none;"
            modal.style.display = "block";
        }, 2000)
        var opcionesCuenta = document.querySelector('#opcionesCuenta')
        document.querySelector('#valorEnviado').textContent = document.querySelector('#montoRetiros').value
        document.querySelector('#fechaRetiro').textContent = new Date().toLocaleString();

        function tipoCuenta() {
            var textCuenta = opcionesCuenta.options[opcionesCuenta.selectedIndex].text;
            document.querySelector('#tipoCuent').textContent = textCuenta
        }
        opcionesCuenta.tipoCuenta = tipoCuenta;
        tipoCuenta();
        document.querySelector('#errorValor').style = "display:none"

    } else {

        document.querySelector('#errorValor').textContent = "Saldo insuficiente en la cuenta"
        document.querySelector('#errorValor').style = "display:block"

    }
   
}

/* CODIGO TABLE LIST RETIRO */
const table = document.querySelector('table')
const btnGuardar = document.querySelector('#myBtn')
let nuevoMovimiento
btnGuardar.addEventListener('click', (e) => {
    const retirarSaldo = document.querySelector('#montoRetiros').value
    const retirarDinero = parseInt(retirarSaldo)
    if (retirarDinero <= saldos) {

        e.preventDefault()


        function Movimientos(montoRetiros) {
            this.montoRetiros = montoRetiros

        }
        const retiro = document.querySelector('#montoRetiros').value
        const tipoRetiro = "Retiro cajero"

        nuevoMovimiento = new Movimientos(retiro, tipoRetiro)
        agregarMovimiento();
        console.log(nuevoMovimiento)

        const td = document.createElement('td')
        const td1 = document.createElement('td')
        td1.style = "color: red; font-weight: 700;"
        const td2 = document.createElement('td')
        const thead = document.createElement('thead')
        const tbody = document.createElement('tbody')
        const tr = document.createElement('tr')


        td.innerText = new Date().toLocaleString();
        td1.innerText = "$ -" + retiro
        td2.innerText = tipoRetiro


        tr.append(td, td1, td2)
        thead.append(tr)
        table.append(thead, tbody)
    } else {
        console.log("Error de dinero")
    }
})

let listadoMovimiento = []
const agregarMovimiento = () => {
    console.log(listadoMovimiento)
    listadoMovimiento.push(nuevoMovimiento)

}

/* CODIGO TABLE TRASNFERENCIA */
const tables = document.querySelector('table')
const botonGuardar = document.querySelector('#botonGuardar')
const nombreValido = document.querySelector('#nombreTranferir')
const emailValido = document.querySelector('#email')
const numeroValido = document.querySelector('#numeroTransferir')


let nuevaTranferencia
botonGuardar.addEventListener('click', (e) => {

    if (nombreValido.value.length == 0) {
        document.querySelector('#errorTransferir').textContent = "Ingrese un nombre Valido"
        document.querySelector('#errorTransferir').style = "display:block"
        console.log("error usuario")
    } else if (emailValido.value.length == 0) {
        document.querySelector('#errorTransferir').textContent = "ingrese un email valido"
        document.querySelector('#errorTransferir').style = "display:block"
        console.log("error emaail")
    } else if (numeroValido.value.length == 0) {
        document.querySelector('#errorTransferir').textContent = "Ingrese una cuenta valida"
        document.querySelector('#errorTransferir').style = "display:block"
        console.log("error numero de cuenta")
    } else {
        const validarSaldo = document.querySelector('#montoTranferir').value
        const validarSaldoTranferencia = parseInt(validarSaldo)
        if (validarSaldoTranferencia <= saldos) {

            document.querySelector('#transferir').style = "display:none"
            document.querySelector('#loading').style = "display:block"

            setTimeout(function () {
                document.querySelector('#loading').style = "display:none"
                document.querySelector('#exitosaTranferir').style = "display: block"
               

            }, 1500)

            e.preventDefault()
            function MovimientosTranferencia(nombreTranferir, email, numeroTransferir, montoTranferir) {
                this.nombreTranferir = nombreTranferir
                this.email = email
                this.numeroCuenta = numeroTransferir
                this.montoTranferir = montoTranferir

            }
            const nombreTranferir = document.querySelector('#nombreTranferir').value
            const email = document.querySelector('#email').value
            const numeroTransferir = document.querySelector('#numeroTransferir').value
            const tipoTranferencia = "Tranferencia a otro banco"
            const montoTranferir = document.querySelector('#montoTranferir').value
            const valorTranferencia = parseInt(montoTranferir)


            saldos = parseInt(saldos) - valorTranferencia


            nuevaTranferencia = new MovimientosTranferencia(nombreTranferir, email, numeroTransferir, montoTranferir)
            agregarTranferencia();
            console.log(nuevaTranferencia)

            const td = document.createElement('td')
            const td1 = document.createElement('td')
            td1.style = "color: red; font-weight: 700;"
            const td2 = document.createElement('td')
            const td3 = document.createElement('td')
            const td4 = document.createElement('td')
            const td5 = document.createElement('td')
            const thead = document.createElement('thead')
            const tbody = document.createElement('tbody')
            const tr = document.createElement('tr')


            td.innerText = new Date().toLocaleString();
            td1.innerText = "$ -" + montoTranferir
            td2.innerText = tipoTranferencia
            td3.innerText = "Para:  " + nombreTranferir
            td4.innerText = "N° de cuenta: " + numeroTransferir
            td5.innerText = email



            tr.append(td, td1, td2, td3, td4, td5)
            thead.append(tr)
            table.append(thead, tbody)
        }
        else {
            console.log("error")
            document.querySelector('#errorTransferir').textContent = "Saldo insuficiente en la cuenta"
            document.querySelector('#errorTransferir').style = "display:block"
        }
    }
    limpiarInput()

})

let listadoTranferencia = []
const agregarTranferencia = () => {
    console.log(listadoTranferencia)
    listadoTranferencia.push(nuevaTranferencia)

}
function limpiarInput(){

   let inputs = document.querySelectorAll('input')
   inputs.forEach((input) =>{

    input.value = ""
    montoRetiros.classList.remove('is-valid')
    numeroCuenta.classList.remove('is-valid')
    consignare.classList.remove('is-valid')
    nombreTranferir.classList.remove('is-valid')
    email.classList.remove('is-valid')
    numeroTransferir.classList.remove('is-valid')
    montoTranferir.classList.remove('is-valid')

   })
}
/* CODIGO TABLE LIST CONSIGNACION */
const nuevatable = document.querySelector('table')
const botonConsignacion = document.querySelector('#botonConsignacion')
const consignacionNueva = document.querySelector('#consignare')
let nuevoConsigancion
botonConsignacion.addEventListener('click', (e) => {
        e.preventDefault()


        function MovimientosConsignacion(consignacionNueva) {
            this.consignacionNueva = consignacionNueva

        }
        const consignacionNueva = document.querySelector('#consignare').value
        const tipoConsignacion = "Consignacion Cajero"

        nuevoConsigancion = new MovimientosConsignacion(consignacionNueva, tipoConsignacion)
        agregarConsignacion();
        console.log(nuevoConsigancion)

        const td = document.createElement('td')
        const td1 = document.createElement('td')
        const td5 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        td1.style = "color: green; font-weight: 700;"
        const td2 = document.createElement('td')
        const thead = document.createElement('thead')
        const tbody = document.createElement('tbody')
        const tr = document.createElement('tr')


        td.innerText = new Date().toLocaleString();
        td1.innerText = "$ +" + consignacionNueva
        td2.innerText = tipoConsignacion
        td3.innerText = ""
        td4.innerText = ""
        td5.innerText = ""


        tr.append(td, td1, td2)
        thead.append(tr)
        table.append(thead, tbody)
        
        limpiarInput()
   
})

let listadoConsignacion = []
const agregarConsignacion = () => {
    console.log(listadoConsignacion)
    listadoConsignacion.push(nuevoConsigancion)

}


