const contenedor=document.getElementById("contenedor")
const dato=document.querySelectorAll("input");
const datos=[];
let indice=0;




const btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    let datoIngresado = cargarDatos(indice,dato);
    datos.push(datoIngresado);
    contenedor.appendChild(crearTarjeta(datoIngresado,indice));  
    resetearInput(); 
    indice++;
});


contenedor.addEventListener("click",(e)=>{
    const tarjetaClickeada= e.target.closest(".tarjeta");
        if (tarjetaClickeada){
            const indiceTarjeta=tarjetaClickeada.getAttribute("indice");
            resetearContenedor(contenedor);
            contenedor.appendChild(crearTarjetaUnica(datos[indiceTarjeta]));
        }
    const galeria = e.target.closest(".galeria");
        if(galeria){
            resetearContenedor(contenedor);
            for (let i=0; i<datos.length;i++){
                contenedor.appendChild(crearTarjeta(datos[i],i));
            }
        }
});


function crearTarjeta(e, indice){
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.setAttribute("indice", indice);
    tarjeta.innerHTML=`
        <h2>${e.titulo}</h2>
        <div class="tarjetaContenido">
            <img src=${e.url} alt=${e.titulo}/>
            <p>${e.texto}</p>
        </div>
    `

    return tarjeta;
}

function cargarDatos(indice,elemento){
    let dato = {
        id:indice,
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

function crearTarjetaUnica(elemento){
    const tarjetaUnica = document.createElement("div");
    tarjetaUnica.classList.add("tarjetaUnica");
    tarjetaUnica.innerHTML=`
        <h2>${elemento.titulo}</h2>
            <img src=${elemento.url} alt=${elemento.titulo}/>
            <p>${elemento.texto}</p>
        <button class="galeria">MOSTRAR TODAS LAS TARJETAS</button>
    `

    return tarjetaUnica;
}

function resetearContenedor(elemento){
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
      }
}


