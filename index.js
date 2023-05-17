const contenedor=document.getElementById("contenedor")
const dato=document.querySelectorAll("input");
const datos=[];




const btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    let datoIngresado = cargarDatos(dato);
    datos.push(datoIngresado);
    contenedor.appendChild(crearTarjeta(datoIngresado));  
    resetearInput(); 
});

function crearTarjeta(e){
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML=`
        <h2>${e.titulo}</h2>
        <div class="tarjetaContenido">
            <img src=${e.url} alt=${e.titulo}/>
            <p>${e.texto}</p>
        </div>
    `

    return tarjeta;
}

function cargarDatos(elemento){
    let dato = {
        titulo:elemento[0].value,
        url:elemento[1].value,
        texto:elemento[2].value,
    }
    return dato;
}

function resetearInput(){
    for (let elemento of dato){
        elemento.value="";
    }
    
}