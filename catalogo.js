let catalogo = [
    {
        codigo: "GA001",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra Acústica Folk",
        marca: "Yamaha",
        modelo: "F310",
        stock: 8,
        precio: 129990,
        descripcion: "Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes.",
        imagen: "imagenes/Guitarra_Acustica_Folk_Yamaha.jpg"
    },
    {
        codigo: "GA002",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra Acústica Dreadnought",
        marca: "Fender",
        modelo: "CD-60S",
        stock: 5,
        precio: 189990,
        descripcion: "Tapa de abeto macizo, brazo de caoba. Sonido cálido y proyectado.",
        imagen: "imagenes/Guitarra_Acustica_Dreadnought_Fender.webp"
    },
    {
        codigo: "GA003",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra Acústica Clásica 4/4",
        marca: "Yamaha",
        modelo: "C40",
        stock: 10,
        precio: 89990,
        descripcion: "Nailon, tapa de abeto. Ideal para estudio y flamenco.",
        imagen: "imagenes/Guitarra_Acustica_Clasica_44_Yamaha.webp"
    },
    {
        codigo: "GA004",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra Electroacústica",
        marca: "Takamine",
        modelo: "GN20CE",
        stock: 3,
        precio: 349990,
        descripcion: "Pickup integrado, afinador incorporado.",
        imagen:"imagenes/Guitarra_Electroacustica_Takamine.webp"
    },
    {
        codigo: "GA005",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra 3/4 Niños",
        marca: "Yamaha",
        modelo: "JR1",
        stock: 6,
        precio: 79990,
        descripcion: "Tamaño reducido para niños de 6 a 10 años.",
        imagen:"imagenes/Guitarra_34_Ninos_Yamaha.webp"
    },
    {
        codigo: "GE001",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Stratocaster",
        marca: "Squier",
        modelo: "Affinity Strat",
        stock: 5,
        precio: 249990,
        descripcion: "Cuerpo de álamo, mástil de arce, pastillas SSS.",
        imagen:"imagenes/Guitarra_Electrica_Stratocaster_Squier.webp"
    },
    {
        codigo: "GE002",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Les Paul",
        marca: "Epiphone",
        modelo: "Les Paul Std",
        stock: 4,
        precio: 329990,
        descripcion: "Cuerpo caoba, tapa arce, pastillas humbucker.",
        imagen:"imagenes/Guitarra_Electrica_Les_Paul_Epiphone.jpg"
    },
    {
        codigo: "GE003",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica SG",
        marca: "Epiphone",
        modelo: "SG Standard",
        stock: 3,
        precio: 319990,
        descripcion: "Cuerpo caoba, mástil caoba, 2 humbuckers.",
        imagen:"imagenes/Guitarra_Electrica_SG_Epiphone.jpg"
    },
    {
        codigo: "GE004",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Telecaster",
        marca: "Squier",
        modelo: "Affinity Tele",
        stock: 4,
        precio: 239990,
        descripcion: "Cuerpo álamo, clavijero vintage, 2 pastillas single.",
        imagen:"imagenes/Guitarra_Electrica_Telecaster_Squier.webp"
    },
    {
        codigo: "GE005",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Semi-hollow",
        marca: "Epiphone",
        modelo: "ES-335",
        stock: 2,
        precio: 549990,
        descripcion: "Semi-hueca, 2 humbuckers, ideal para jazz y blues.",
        imagen:"imagenes/Guitarra_Electrica_Semi-hollow_Epiphone.jpg"
    },
    {
        codigo: "BA001",
        categoria: "Bajos Eléctricos",
        nombre: "Bajo Eléctrico 4 Cuerdas",
        marca: "Squier",
        modelo: "Affinity PJ",
        stock: 5,
        precio: 299990,
        descripcion: "Pickup PJ, cuerpo de álamo.",
        imagen: "imagenes/Bajo_Electrico_4_Cuerdas_Squier.webp"
    },
    {
        codigo: "BA002",
        categoria: "Bajos Eléctricos",
        nombre: "Bajo Eléctrico Jazz Bass",
        marca: "Fender",
        modelo: "Player Jazz",
        stock: 2,
        precio: 699990,
        descripcion: "Alder body, 2 Alnico V Jazz single-coil.",
        imagen: "imagenes/Bajo_Electrico_Jazz_Bass_Fender.webp"
    },
    {
        codigo: "BA003",
        categoria: "Bajos Eléctricos",
        nombre: "Bajo Acústico 4 Cuerdas",
        marca: "Yamaha",
        modelo: "APX700II",
        stock: 2,
        precio: 429990,
        descripcion: "Electroacústico, afinador incorporado.",
        imagen: "imagenes/Bajo_Acustico_4_Cuerdas_Yamaha.jpg"
    },
    {
        codigo: "BT001",
        categoria: "Baterías",
        nombre: "Batería Acústica 5 piezas",
        marca: "Pearl",
        modelo: "Roadshow",
        stock: 2,
        precio: 599990,
        descripcion: "Incluye stands, platillos y pedal.",
        imagen: "imagenes/Bateria_Acustica_5_piezas_Pearl.jpeg"
    },
    {
        codigo: "BT002",
        categoria: "Baterías",
        nombre: "Batería Electrónica 8 pads",
        marca: "Roland",
        modelo: "TD-02KV",
        stock: 2,
        precio: 799990,
        descripcion: "Módulo TD-02, 8 pads de goma, pedal hi-hat.",
        imagen: "imagenes/Bateria_Electronica_8_pads_Roland.jpg"
    },
    {
        codigo: "BT003",
        categoria: "Baterías",
        nombre: "Caja Snare 14\"",
        marca: "Pearl",
        modelo: "STE1450",
        stock: 4,
        precio: 89990,
        descripcion: "Acero, 14x5\", 10 tensores.",
        imagen: "imagenes/Caja_Snare_14_Pearl.jpg"
    },
    {
        codigo: "BT004",
        categoria: "Baterías",
        nombre: "Platillo Hi-Hat 14\"",
        marca: "Zildjian",
        modelo: "A Series",
        stock: 3,
        precio: 149990,
        descripcion: "Latón B20, sonido brillante y claro.",
        imagen: "imagenes/Platillo_Hi-Hat_14_Zildjian.jpg"
    },
    {
        codigo: "BT005",
        categoria: "Baterías",
        nombre: "Platillo Crash 16\"",
        marca: "Zildjian",
        modelo: "A Series",
        stock: 3,
        precio: 129990,
        descripcion: "Latón B20, ataque rápido.",
        imagen: "imagenes/Platillo_Crash_16Zildjian.jpg"
    },
    {
        codigo: "TC001",
        categoria: "Teclados y Pianos",
        nombre: "Teclado Digital 61 teclas",
        marca: "Yamaha",
        modelo: "PSR-E373",
        stock: 4,
        precio: 249990,
        descripcion: "61 teclas sensibles al tacto, 622 voces.",
        imagen: "imagenes/Teclado_Digital_61_teclas_Yamaha.webp"
    },
    {
        codigo: "TC002",
        categoria: "Teclados y Pianos",
        nombre: "Piano Digital 88 teclas",
        marca: "Yamaha",
        modelo: "P-45",
        stock: 2,
        precio: 499990,
        descripcion: "88 teclas pesadas, 10 voces, pedal sustain incluido.",
        imagen: "imagenes/Piano_Digital_88_teclas_Yamaha.jpg"
    },
    {
        codigo: "TC003",
        categoria: "Teclados y Pianos",
        nombre: "Sintetizador 49 teclas",
        marca: "Arturia",
        modelo: "MiniLab MKII",
        stock: 5,
        precio: 129990,
        descripcion: "MIDI controller, 49 mini teclas.",
        imagen: "imagenes/Sintetizador_49_teclas_Arturia.jpg"
    },
    {
        codigo: "TC004",
        categoria: "Teclados y Pianos",
        nombre: "Teclado MIDI 88 teclas",
        marca: "M-Audio",
        modelo: "Hammer 88",
        stock: 2,
        precio: 399990,
        descripcion: "88 teclas martillo, sin sonidos propios.",
        imagen: "imagenes/Teclado_MIDI_88_teclas_M-Audio.webp"
    },
    {
        codigo: "AM001",
        categoria: "Amplificadores",
        nombre: "Amplificador Guitarra 15W",
        marca: "Fender",
        modelo: "Frontman 15G",
        stock: 5,
        precio: 99990,
        descripcion: "15W, distorsión incorporada, entrada auxiliar.",
        imagen: "imagenes/Amplificador_Guitarra_15W_Fender.jpg"
    },
    {
        codigo: "AM002",
        categoria: "Amplificadores",
        nombre: "Amplificador Guitarra 40W",
        marca: "Marshall",
        modelo: "MG40GFX",
        stock: 3,
        precio: 299990,
        descripcion: "40W, 4 canales, efectos digitales integrados.",
        imagen: "imagenes/Amplificador_Guitarra_40W_Marshall.webp"
    },
    {
        codigo: "AM003",
        categoria: "Amplificadores",
        nombre: "Amplificador Bajo 100W",
        marca: "Hartke",
        modelo: "HD100",
        stock: 2,
        precio: 449990,
        descripcion: "100W, tweeter integrado, ecualizador de 4 bandas.",
        imagen: "imagenes/Amplificador_Bajo_100W_Hartke.webp"
    },
    {
        codigo: "AM004",
        categoria: "Amplificadores",
        nombre: "Amplificador Acústico 40W",
        marca: "Fishman",
        modelo: "Loudbox Mini",
        stock: 2,
        precio: 499990,
        descripcion: "60W, 2 canales, reverb y chorus incorporados.",
        imagen: "imagenes/Amplificador_Acustico_40W_Fishman.jpg"
    },
    {
        codigo: "MI001",
        categoria: "Micrófonos",
        nombre: "Micrófono Dinámico Cardioide",
        marca: "Shure",
        modelo: "SM58",
        stock: 8,
        precio: 149990,
        descripcion: "Micrófono estándar para voz en vivo.",
        imagen: "imagenes/Microfono_Dinamico_Cardioide_Shure.jpg"
    },
    {
        codigo: "MI002",
        categoria: "Micrófonos",
        nombre: "Micrófono Dinámico Instrumento",
        marca: "Shure",
        modelo: "SM57",
        stock: 6,
        precio: 139990,
        descripcion: "Ideal para captura de instrumentos y amplificadores.",
        imagen: "imagenes/Microfono_Dinamico_Instrumento_Shure.jpg"
    },
    {
        codigo: "MI003",
        categoria: "Micrófonos",
        nombre: "Micrófono Condensador",
        marca: "Audio-Tech.",
        modelo: "AT2020",
        stock: 4,
        precio: 199990,
        descripcion: "Cardioide, XLR, ideal para grabación en estudio.",
        imagen: "imagenes/Microfono_Condensador_Audio-Tech.webp"
    },
    {
        codigo: "MI004",
        categoria: "Micrófonos",
        nombre: "Micrófono USB de Condensador",
        marca: "Blue",
        modelo: "Yeti",
        stock: 5,
        precio: 299990,
        descripcion: "USB, 4 patrones polares, ideal para streaming y podcast.",
        imagen: "imagenes/Microfono_USB_de_Condensador_Blue.jpg"
    },
    {
        codigo: "PE001",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Distorsión",
        marca: "Boss",
        modelo: "DS-1",
        stock: 7,
        precio: 79990,
        descripcion: "Clásico pedal de distorsión, 3 controles.",
        imagen: "imagenes/Pedal_Distorsion_Boss.jpg"
    },
    {
        codigo: "PE002",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Reverb",
        marca: "Boss",
        modelo: "RV-6",
        stock: 4,
        precio: 179990,
        descripcion: "8 modos de reverb, control de shimmer.",
        imagen: "imagenes/Pedal_Reverb_Boss.webp"
    },
    {
        codigo: "PE003",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Multi-efectos",
        marca: "Boss",
        modelo: "ME-80",
        stock: 2,
        precio: 349990,
        descripcion: "Diseño tipo pedalboard, 8 efectos simultáneos.",
        imagen: "imagenes/Pedal_Multi-efectos_Boss.jpg"
    },
    {
        codigo: "PE004",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Tuner Cromático",
        marca: "Boss",
        modelo: "TU-3",
        stock: 8,
        precio: 89990,
        descripcion: "Afinador cromático, indicador de tono.",
        imagen: "imagenes/Pedal_Tuner_Cromatico_Boss.jpg"
    },
    {
        codigo: "PE005",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Delay",
        marca: "MXR",
        modelo: "Carbon Copy",
        stock: 4,
        precio: 179990,
        descripcion: "Delay analógico cálido, tiempo 600ms.",
        imagen: "imagenes/Pedal_Delay_MXR.jpg"
    },
    {
        codigo: "PE006",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Overdrive",
        marca: "Ibanez",
        modelo: "TS9",
        stock: 6,
        precio: 99990,
        descripcion: "Tube Screamer clásico, sonido suave y orgánico.",
        imagen: "imagenes/Pedal_Overdrive_Ibanez.webp"
    },
    {
        codigo: "AC001",
        categoria: "Accesorios",
        nombre: "Cuerdas Guitarra Eléctrica 09-42",
        marca: "Ernie Ball",
        modelo: "Super Slinky",
        stock: 25,
        precio: 8990,
        descripcion: "Juego 6 cuerdas, calibre ligero.",
        imagen: "imagenes/Cuerdas_Guitarra_Electrica_09-42_Ernie_Ball_1.webp"
    },
    {
        codigo: "AC002",
        categoria: "Accesorios",
        nombre: "Cuerdas Guitarra Acústica 12-53",
        marca: "Ernie Ball",
        modelo: "Earthwood",
        stock: 20,
        precio: 10990,
        descripcion: "Bronce fósforo, sonido cálido.",
        imagen: "imagenes/Cuerdas_Guitarra_Acustica_12-53_Ernie_Ball.webp"
    },
    {
        codigo: "AC003",
        categoria: "Accesorios",
        nombre: "Cuerdas Bajo 45-105",
        marca: "Ernie Ball",
        modelo: "Regular Slinky",
        stock: 12,
        precio: 14990,
        descripcion: "Cuerdas de níquel enrollado, set 4 cuerdas.",
        imagen: "imagenes/Cuerdas_Bajo_45-105.jpg"
    },
    {
        codigo: "AC004",
        categoria: "Accesorios",
        nombre: "Púas de Guitarra x10 (0.73mm)",
        marca: "Fender",
        modelo: "351",
        stock: 50,
        precio: 3990,
        descripcion: "Celulosa, grosor medio.",
        imagen: "imagenes/Puas_de_Guitarra_x10_(0.73mm)_Fender.webp"
    },
    {
        codigo: "AC005",
        categoria: "Accesorios",
        nombre: "Capotraste Guitarra",
        marca: "Dunlop",
        modelo: "Trigger",
        stock: 15,
        precio: 12990,
        descripcion: "Capotraste de resorte, compatible 6 cuerdas.",
        imagen: "imagenes/Capotraste_Guitarra_Dunlop.webp"
    },
    {
        codigo: "AC006",
        categoria: "Accesorios",
        nombre: "Afinador de Clip",
        marca: "Snark",
        modelo: "SN-5",
        stock: 20,
        precio: 8990,
        descripcion: "Afinador cromático de clip, pantalla giratoria.",
        imagen: "imagenes/Afinador_de_Clip_Snark.webp"
    },
    {
        codigo: "AC007",
        categoria: "Accesorios",
        nombre: "Cable Instrumento 3m",
        marca: "Monster",
        modelo: "S100-I-3",
        stock: 15,
        precio: 12990,
        descripcion: "Cable trenzado, conectores dorados, 3 metros.",
        imagen: "imagenes/Cable_Instrumento_3m_Monster.webp"
    },
    {
        codigo: "AC008",
        categoria: "Accesorios",
        nombre: "Cable Instrumento 6m",
        marca: "Monster",
        modelo: "S100-I-6",
        stock: 10,
        precio: 17990,
        descripcion: "Cable trenzado, conectores dorados, 6 metros.",
        imagen: "imagenes/Cable_Instrumento_6m_Monster.jpg"
    },
    {
        codigo: "AC009",
        categoria: "Accesorios",
        nombre: "Soporte Guitarra de Piso",
        marca: "Hercules",
        modelo: "GS302B",
        stock: 12,
        precio: 22990,
        descripcion: "Soporte plegable con enganche automático.",
        imagen: "imagenes/Soporte_Guitarra_de_Piso_Hercules.webp"
    },
    {
        codigo: "AC010",
        categoria: "Accesorios",
        nombre: "Soporte Guitarra de Pared",
        marca: "Hercules",
        modelo: "WAH-202",
        stock: 10,
        precio: 18990,
        descripcion: "Montaje a pared, enganche automático.",
        imagen: "imagenes/Soporte_Guitarra_de_Pared_Hercules.webp"
    },
    {
        codigo: "ES001",
        categoria: "Estudio y Grabación",
        nombre: "Interfaz de Audio 2x2 USB",
        marca: "Focusrite",
        modelo: "Scarlett Solo",
        stock: 4,
        precio: 149990,
        descripcion: "1 entrada XLR+instrumento, 2 salidas, 24bit/192kHz.",
        imagen: "imagenes/Interfaz_de_Audio_2x2_USB_Focusrite.jpg"
    },
    {
        codigo: "ES002",
        categoria: "Estudio y Grabación",
        nombre: "Auriculares de Estudio",
        marca: "Audio-Tech.",
        modelo: "ATH-M20x",
        stock: 6,
        precio: 79990,
        descripcion: "Circumaurales, respuesta 15Hz-20kHz.",
        imagen: "imagenes/Auriculares_de_Estudio_Audio_Tech.webp"
    },
    {
        codigo: "ES003",
        categoria: "Estudio y Grabación",
        nombre: "Auriculares de Estudio Pro",
        marca: "Audio-Tech.",
        modelo: "ATH-M50x",
        stock: 4,
        precio: 219990,
        descripcion: "Referencia de industria, sonido neutro y detallado.",
        imagen: "imagenes/Auriculares_Pro.webp"
    },
    {
        codigo: "ES004",
        categoria: "Estudio y Grabación",
        nombre: "Monitor de Estudio 5\"",
        marca: "Yamaha",
        modelo: "HS5",
        stock: 2,
        precio: 349990,
        descripcion: "Altavoz activo, respuesta plana, ideal mezcla.",
        imagen: "imagenes/Monitor_de_Estudio_5_Yamaha.jpeg"
    },
    {
        codigo: "ES005",
        categoria: "Estudio y Grabación",
        nombre: "Pop Filter para Micrófono",
        marca: "Sennheiser",
        modelo: "MZP 40",
        stock: 8,
        precio: 14990,
        descripcion: "Doble malla, brazo flexible con clip.",
        imagen: "imagenes/Pop_Filter_para_Microfono_Sennheiser.jpg"
    }
];

let categ = document.body.dataset.categoria;

let productosMostrar = catalogo;

if (categ != null) {

    productosMostrar = [];

    for (let i = 0; i < catalogo.length; i++) {

        if (catalogo[i].categoria.includes(categ)) {

            productosMostrar.push(catalogo[i]);

        }
    }
}

let lista = document.getElementById("listaCatalogo");

for (let i = 0; i < productosMostrar.length; i++) {
    lista.innerHTML += `
        <div class="col">
            <div class="card producto-card h-100">
                <div class="producto-img-wrap">
                    <img src="${productosMostrar[i].imagen}" class="producto-img" alt="${productosMostrar[i].nombre}">
                </div>
                <div class="card-body d-flex flex-column">
                    <span class="producto-marca">${productosMostrar[i].marca}</span>
                    <h2 class="producto-nombre">${productosMostrar[i].nombre}</h2>
                    <p class="producto-precio mt-auto">$${productosMostrar[i].precio.toLocaleString('es-CL')}</p>
                    <button class="btn-fantasma" onclick="verDetalle('${productosMostrar[i].codigo}')">
                        Ver Detalle
                    </button>
                </div>
            </div>
        </div>
    `;
}

function verDetalle(codigo) {
    let productoSeleccionado

    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo === codigo) {
            productoSeleccionado = catalogo[i];
        }
    }


    localStorage.setItem(
        "producto", 
        JSON.stringify(productoSeleccionado)
    );

    window.location.href = "detalle.html";

}