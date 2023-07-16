
const formulario = document.querySelector("form")
const select = document.querySelector("select")

const cuentas = [
    {id: 1, nombre: "Victor", saldo: 900, pin:"0000"},
    {id: 2, nombre: "Enrique", saldo: 990, pin: "1234"},
    {id: 3, nombre: "Rodrigo", saldo: 200, pin: "4567"},
    
]

const validatePIN = (id, pin) =>{
    let select = cuentas.filter(
        (cuenta)=>{
        return cuenta.id == id
        }    
    )
    if(select[0].pin === pin) {
        alert("Bienvenido")
    }else {
        alert("intenta nuevamente")
    }

};

formulario.addEventListener("submit", (event)=> {
    event.preventDefault();
    let user_id = event.target["cuenta"].value;

    console.log(event.target[0].value)
let pin = prompt("Ingrese su pin", "");
if (pin != null){

    validatePIN(user_id, pin)

    //if (pin== "0000"){
      //  console.log("Correcto");
    //} else{
      //  console.log("Incorrecto");
    //}
}

})

cuentas.forEach((cuenta) =>{
    let option = document.createElement("option"); /* esta funcion te crea elementos dinamicos*/
    option.value = cuenta.id; /* esta opcion.value ,amda llamar el value del atributo option de html y extra el atributo id de cuenta*/
    option.innerText = cuenta.nombre /* esta funcion sirve para agregar texto a los elementos credos.*/
    select.appendChild(option);

    console.log(option)

});

/*cuentas.forEach((cuenta)=> console.log(cuenta))*/
    //alert("La cuenta seleccionada es"+ event.target[0].value )
    //console.log(event.target[0].value)*/

// Pseudocodigo
/*
1. Seleccionar la cuenta
2. Cuando se seleccione una cuneta se solicitara el pin
3. Validar el pin ingresado y si el pin proporcionado es incorrecto intentar nuevamente, si el pin es correcto 
mostrar el muenu de opciones
4. Mostrar menu de opciones(consultar, depositar, retirar, salir)
5. Dependiendo de la opcion sellecionada mostrar la pantalla correspondiente.
 */