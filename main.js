 
 //NAVBAR----------------------------------------------------------

 const burguerUl = document.getElementById ('burguerNavbar') //el ul del menú hamburguesa
 const burguerLi = document.querySelectorAll ('#burguerNavbar li')//las rayitas del menu hamburguesa

 const expandedNavbarUl = document.getElementById ('expandedNavbar') // ul del nabvar expandido
 const expandedNavbarLi = document.querySelectorAll ('#iconNavbar li') //iniciar sesion y registrarse
 const openedMenu = document.getElementById ('opened-menu')

 const windowWidth = window.innerWidth



  if (windowWidth >=945) {
    burguerUl.style.display = 'none';
    burguerLi.forEach(li => li.style.display = 'none');
     expandedNavbarUl.style.display = 'flex';
    
 } else {
     burguerUl.style.display = 'block'
     burguerLi.forEach(li => li.style.display = 'block')
     expandedNavbarUl.style.display = 'none'
 }

function openTheMenu(){

    openedMenu.classList.toggle('open')
    }
    
    burguerUl.addEventListener('click', openTheMenu);
 
 

//----------------------   Atributos y botón +   -----------------------------------
 let botonMas =document.getElementsByClassName ('buttonPlus')

 //Atributos
 let strength=document.getElementById('fuerza')
 let dexterity=document.getElementById('destreza')
 let constitution=document.getElementById('constitucion')
 let intelligence=document.getElementById('inteligencia')
 let wisdom=document.getElementById('sabiduria')
 let charisma=document.getElementById('carisma')


 let valorStrength =0
 let valorDexterity =0
 let valorConstitution =0
 let valorIntelligence = 0
 let valorWisdom =0
 let valorCharisma =0


 botonMas[0].addEventListener('click', function() {
     valorStrength++;
     strength.textContent = valorStrength;
 });
 botonMas[1].addEventListener('click', function() {
     valorDexterity++;
     dexterity.textContent = valorDexterity;
 });
 botonMas[2].addEventListener('click', function() {
     valorConstitution++;
     constitution.textContent = valorConstitution;
 });
 botonMas[3].addEventListener('click', function() {
     valorIntelligence++;
     intelligence.textContent = valorIntelligence;
 });
 botonMas[4].addEventListener('click', function() {
     valorWisdom++;
     wisdom.textContent = valorWisdom;
 });
 botonMas[5].addEventListener('click', function() {
     valorCharisma++;
     charisma.textContent = valorCharisma;
 });






//------------------------Objeto constructor de personajes------------------------------------
class Personaje {

    constructor (id, nombre, clase, sexo, raza, habilidades) {

        this.id = id
        this.nombre= nombre
        this.clase = clase
        this.sexo = sexo
        this.raza = raza
        this.habilidades = habilidades
    }
}
const personaje1 = new Personaje ("1", "Sylas", "Arquero", "Masculino", "Semielfo", ["Doble Disparo", "Tiro Certero"])
const personaje2 = new Personaje ("2", "Erline", "Mago", "Femenino", "Elfo", ["Curación", "Trato Animal", "Bola de Fuego", "Congelar", "Luz"])
const personaje3 = new Personaje ("3", "Earwen", "Sacerdote", "Femenino", "Humano", ["Invocación Divina", "Santificar"])
const personaje4 = new Personaje ("4", "Warren", "Bárbaro", "Masculino", "Humano", ["Destripar", "Superar el Dolor"])
const personaje5 = new Personaje ("5", "Andrey", "Arquero", "Masculino", "Humano", ["Doble Disparo", "Trato Animal"])

//-------------------------------Método de filtrado--------------------------------------

const personajes = [personaje1, personaje2, personaje3, personaje4, personaje5]

personajes.forEach((item)=> {

    console.log(item.clase)
    console.log(item.raza)
})






// ------------------------Método de búsqueda--------------------------------------------
const characters = [
    {id:1, nombre: "Sylas",  clase: "Arquero", raza:"Semielfo"},
    {id:2, nombre: "Erline", clase: "Mago", raza:"Elfo"},
    {id:3, nombre: "Earwen", clase: "Sacerdote", raza:"Humano"},
    {id:4, nombre: "Warren", clase: "Bárbaro", raza:"Humano"},
    {id:5, nombre: "Andrey", clase: "Arquero", raza:"Humano"}

]

let botonDeBusqueda = document.getElementById ("submitName") 


// Búsqueda del personaje ya ingresado en el sistema a través del input "nombre"
function busquedaDelPersonaje() {


let inputNombreDelPersonaje = document.getElementById ("nombre").value 
const characterFinder = characters.find((item) => item.nombre === inputNombreDelPersonaje)

if (characterFinder) {

    let mensaje = `
    nombre: ${characterFinder.nombre}
    clase: ${characterFinder.clase}
    raza: ${characterFinder.raza}
    `
    
    alert (mensaje)

 } else {

    alert ("¡No conocemos a ese personaje! ¡Pero aquí puedes crearlo!")
 }
}

botonDeBusqueda.addEventListener ('click', busquedaDelPersonaje)


// Búsqueda de la campaña a través de prompt al iniciar la página

const campaña = [

    {nombre: "La hoja del diablo", fecha_de_inicio: "Julio 2023", jugadores: 4, id:1},
    {nombre: "Pociones y Dragones", fecha_de_inicio: "Mayo 2023", jugadores: 5, id:2},
    {nombre: "3 Borrachos en Sycamore Town", fecha_de_inicio: "Mayo 2023", jugadores: 3, id:3}

]
let promptEnteredNumber = prompt ("¿Que campaña jugaremos hoy?")
const campaignFinder = campaña.find((item) => item.id === parseInt(promptEnteredNumber))

if (campaignFinder) {

    let mensaje = `
    id: ${campaignFinder.id}
    nombre: ${campaignFinder.nombre}
    Fecha de Inicio: ${campaignFinder.fecha_de_inicio}
    Jugadores: ${campaignFinder.jugadores}
    `
    
    alert (mensaje)

 } else {

    alert ("¡Por las barbas de Merlín, no tenemos la campaña que buscas!")
 }






