 
 //NAVBAR----------------------------------------------------------

 const burguerUl = document.getElementById ('burguerNavbar') //el ul de las rayitas
 const burguerLi = document.querySelectorAll ('#burguerNavbar li')//las rayitas del menu hamburgue

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


class Personaje {

    constructor (nombre, clase, sexo, raza) {

        this.nombre= nombre
        this.clase = clase
        this.sexo = sexo
        this.raza = raza
        this.hablidades = habilidades
    }
}
const Personaje1 = new Personaje ("Sylas", "Arquero", "Masculino", "Semielfo", ["Doble Disparo", "Tiro Certero"])
const Personaje2 = new Personaje ("Erline", "Maga", "Femenino", "Elfa", ["Curación", "Trato Animal"])
console.log ("Personaje1")
console.log ("Personaje2")


