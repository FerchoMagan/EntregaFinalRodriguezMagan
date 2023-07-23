const listaProductos = [
    {
        "id": 1,
        "nombre": "Memoria kingston",
        "precio": 3500,
        "stock": 5,
        "descripcion": "Memoria ram potente podras jugar muchos juegos DDR4 16GB 3200Mhz",
        "tipo": "memoria ram",
        "categoria": "hardware",
         "img": "/archivos/ramkingstonfury.jpg",
         "alt": "Descripcion de imagen"
    },
    {
        "id": 2,
        "nombre": "Procesador Intel Celeron",
        "precio": 270000,
        "stock": 10,
        "descripcion": "Microprocesador celeron G4900 3.10GHz Socket 1151 OEM Coffe Lake",
        "tipo": "procesador",
        "categoria": "hardware",
        "img": "/archivos/intel_celeron.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 3,
        "nombre": "ASUS Phoenix GeForce GTX 1630 ",
        "precio": 130000,
        "stock": 10,
        "descripcion": "Placa de Video 4GB GDDR6 con esta placa podras jugar todos los dias",
        "tipo": "tarjeta grafica",
        "categoria": "hardware",
        "img": "/archivos/gtx_1630.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 4,
        "nombre": " ASUS GeForce GTX 1650 ",
        "precio": 250000,
        "stock": 10,
        "descripcion": "Placa de Video 4GB GDDR6 apta para gaming gama media-baja",
        "tipo": "tarjeta grafica",
        "categoria": "hardware",
        "img": "/archivos/gtx_1650.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 5,
        "nombre": "Mother Asrock B365M BULK",
        "precio": 25000,
        "stock": 1,
        "descripcion": "Motherboard de gama media-baja, pero muy funcional a la hora de viciar",
        "tipo": "motherboard",
        "categoria": "hardware",
        "img": "/archivos/asrock_b365m.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 6,
        "nombre": "Mother Asrock Z390",
        "precio": 30000,
        "stock": 4,
        "descripcion": "Con esta mother, podras disfrutar de tus entregas favoritas incluso mediante wifi!",
        "tipo": "motherboard",
        "categoria": "hardware",
        "img": "/archivos/asrock_z390.jpg",
        "alt": "Descripcion de imagen"        
    },
    {
        "id": 7,
        "nombre": "Fuente ASUS 550W",
        "precio": 20000,
        "stock": 2,
        "descripcion": "Con esta fuente certificada 80plus Bronze de Asus podes estar tranquilo/a de que no corres riesgos electricos con tus componentes",
        "tipo": "fuente",
        "categoria": "hardware",
        "img": "/archivos/asusfuente.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 8,
        "nombre": "Fuente Corsair 750W",
        "precio": 35000,
        "stock": 7,
        "descripcion": "Si buscas una fuente que sabes que no te va a dejar tirado y encima siempre te haces lio con los cables, esta corsair modular es para vos sin dudas!",
        "tipo": "fuente",
        "categoria": "hardware",
        "img": "/archivos/corsairfuente.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 9,
        "nombre": "Zotac GeForce RTX 3090",
        "precio": 473000,
        "stock": 3,
        "descripcion": "Con esta placa de 24GB GDDR6X no vas a haber juego que no puedas disfrutar ni trabajo de renderizado que se te escape",
        "tipo": "tarjeta grafica",
        "categoria": "hardware",
        "img": "/archivos/rtx3090.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 10,
        "nombre": "Memoria ram Corsair Vengeance",
        "precio": 18705.58,
        "stock": 12,
        "descripcion": "Si buscas calidad en una memoria ram, ya podes dejar de buscar con esta memoria DDR4 8GB 2400MHz para realizar todas las actividades que precises!",
        "tipo": "memoria ram",
        "categoria": "hardware",
        "img": "/archivos/vengeancecorsair.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 11,
        "nombre": "Microsoft Office 365",
        "precio": 18745.58,
        "stock": 4,
        "descripcion": "Licencia para obtener esta poderosa herramienta de escritorio de forma legal, y libre de virus",
        "tipo": "office",
        "categoria": "software",
        "img": "/archivos/office.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 12,
        "nombre": "Microsoft Office 365",
        "precio": 18745.58,
        "stock": 4,
        "descripcion": "Licencia para obtener esta poderosa herramienta online de forma legal, y libre de virus",
        "tipo": "office",
        "categoria": "software",
        "img": "/archivos/office.jpg",
        "alt": "Descripcion de imagen"
    },
    {
        "id": 13,
        "nombre": "Windows 10 Pro ",
        "precio": 18745.58,
        "stock": 4,
        "descripcion": "Licencia para obtener este sistema operativo, evitando los riesgos de conseguir un SO pirata con lo que ello conlleva",
        "tipo": "windows",
        "categoria": "software",
        "img": "/archivos/windows.png",
        "alt": "Descripcion de imagen"
    }
]

export function getProductData(idURL) {
    return new Promise((res, rej) => {
        const productRequest = listaProductos.find(item => item.id === parseInt(idURL));
        setTimeout(() => {
            if (productRequest) {
                res(productRequest);
            } else {
                rej("¡Ups! No se encontró el producto con el ID proporcionado.");
            }
        }, 1500);
    });
}
export function getSoftwareData() {
    return new Promise((res, rej) => {
        const filteredProducts = listaProductos.filter(item => item.categoria === "software");
        setTimeout(() => {
            if (filteredProducts.length > 0) {
                res(filteredProducts);
            } else {
                rej("¡Ups! No se encontraron productos en la categoría de software.");
            }
        }, 1500);
    });
}

export function getHardwareData() {
    return new Promise((res, rej) => {
        const filteredProducts = listaProductos.filter(item => item.categoria === "hardware");
        setTimeout(() => {
            if (filteredProducts.length > 0) {
                res(filteredProducts);
            } else {
                rej("¡Ups! No se encontraron productos en la categoría de hardware.");
            }
        }, 1500);
    });
}


function getData(){
    return new Promise ((res,rej) => {
        setTimeout(()=> {
            if(listaProductos.length === 0){
            rej("Ups!! Esto es un error en la base de datos!");
            console.log("fallo en getData, del lado del servidor.")
             }
             else
             {
            res(listaProductos)}
        }, 1500)
    })
    
}

export default getData;