// =========================================================
// DATOS DE LOS PROYECTOS
// Cada proyecto tiene: id, título, texto y una lista de imágenes.
// Rellena/edita aquí el contenido y las rutas de imágenes.
// =========================================================

const PROYECTOS = [
  {
    id: 'chao-wifi',
    titulo: 'Chao Wifi',
    texto: `Chao Wifi Vol. 3 es un cuaderno de pasatiempos diseñado para Colla Paper, la marca de
      papelería nacida de la alianza entre Estándar Estudio e Impresum. El proyecto estuvo
      dirigido por Estándar Estudio y lo desarrollé junto a Ainhoa Lakidain. La idea era dar
      una vuelta de tuerca a los volúmenes anteriores: no entretener solo las manos, sino
      también la razón, combinando pasatiempos con textos ensayísticos organizados en torno
      a la letra «A», abriendo una serie que se sigue publicando, letra a letra, cada año.
      Para separar los dos registros usé dos tipografías: Times New Roman para la
      información, la tipografía propia de la marca para invitar al juego. Maqueté el libro
      completo y escribí los textos que abren cada apartado. Es un producto pensado para el
      verano, la época en la que nadie compra agendas pero todo el mundo necesita una excusa
      para soltar el móvil.`,
    imagenes: [
      'images/chaowifi/1.webp',
      'images/chaowifi/2.webp',
      'images/chaowifi/3.webp',
      'images/chaowifi/4.gif',
      'images/chaowifi/4.webp',
      'images/chaowifi/5.webp'
    ]
  },
  {
    id: 'muvim',
    titulo: 'MuVIM',
    texto: `Este proyecto es el rediseño de la identidad visual del MuVIM (Museu Valencià de la
      Il·lustració i de la Modernitat), un encargo académico que aborda un problema real: la
      marca del museo era inconsistente entre soportes y no transmitía la seriedad de su
      contenido. Definí al museo con tres palabras: imponente, importante e intelectual, y
      construí desde ahí un manifiesto que reivindica no infantilizar la cultura. El símbolo
      combina dos hallazgos del propio edificio: el asterisco que un cantero usó como firma
      en las piedras de la torre medieval, y la cruz que dibuja la planta del antiguo
      hospital psiquiátrico —el primero de Occidente— sobre el que se construyó el museo.
      Esa misma lógica de capas superpuestas rige la maquetación: todo el sistema se
      construye de abajo arriba, apilando texto e imágenes alineados a la izquierda hasta
      coronar la composición con el logotipo. Desarrollé el proyecto completo: logotipo y su
      animación, sistema visual, sistema verbal, papelería corporativa, señalética e
      infografías, cartelería, redes sociales, web, merchandising y manual de identidad.`,
    imagenes: [
      'images/muvim/muvim_logo edifici_1.webp',
      'images/muvim/muvim_comp_gif.gif',
      'images/muvim/muvim_folleto.webp',
      'images/muvim/muvim_logo_gif.gif',
      'images/muvim/muvim_mupi.webp',
      'images/muvim/muvim_catell_carretera.webp',
      'images/muvim/muvim_patron.webp',
      'images/muvim/muvim_sobre.webp',
      'images/muvim/muvim_targeta.webp',
      'images/muvim/muvim_web_1.webp',
      'images/muvim/muvim_web_2.webp',
      'images/muvim/muvim_web_3.webp',
      'images/muvim/muvim_web_4.webp',
      'images/muvim/muvim_camiseta_1.webp',
      'images/muvim/muvim_camiseta_2.webp',
      'images/muvim/muvim_tote.webp',
      'images/muvim/muvim_instagram.webp',
      'images/muvim/muvim_logo edifici_2.webp'
    ]
  },
  {
    id: 'placebo-y-libertad',
    titulo: 'Placebo y Libertad',
    texto: `Placebo y Libertad es mi TFG, un trabajo de investigación teórica y a través del diseño
      que pregunta qué elementos del diseño gráfico intervienen en la manipulación
      consumista de las interfaces. A partir de una idea propia —que la interfaz es un
      momento donde coinciden un soporte, una interacción y un usuario capaz de activarla—
      desarrollé una nueva tipología semiótica (signos fetiche, operativos, vacíos y
      placebo) y dos conceptos originales: el signo placebo, cuando un signo promete
      deliberadamente una función distinta de la real, y la invisibilización ideológica, el
      proceso por el que el usuario deja de percibir la herramienta que usa y, con ello,
      pierde la capacidad de reclamar sus derechos sobre ella. Combinando ambos, propongo la
      interfaz placebo como diagnóstico operativo, y la valido analizando cinco casos:
      TikTok, Instagram, Amazon, Wikipedia y Are.na. La investigación se materializó en
      cuatro piezas: una publicación editorial pensada como interfaz sincera, su <a href="https://sebastiacriado-dotcom.github.io/placeboylibertadweb/" target="_blank">versión web</a>
      en HTML puro, una <a href="https://sebastiacriado-dotcom.github.io/terminosycondiciones_final/" target="_blank">pieza generativa</a> que analiza textos legales y devora al usuario con
      cada vez más letra pequeña, y un taller con compañeros de la EASD València donde
      analizamos la libertad que emerge de la jaula que es herramienta. Concluyo que el
      diseño gráfico nunca es neutral: cada decisión afecta a cuánta autonomía conserva el
      usuario. El diseño dispensa agencia y hay que diseñar en pro de la agencia del usuario.`,
    imagenes: [
      'images/placeboylibertad/1.tfg_intro_gif.gif',
      'images/placeboylibertad/2.tfg_portada.webp',
      'images/placeboylibertad/3.tfg_contraportada.webp',
      'images/placeboylibertad/4.tfg_video_interior.mp4',
      'images/placeboylibertad/5.tfg_ang_1.webp',
      'images/placeboylibertad/6.tfg_ang_2.webp',
      'images/placeboylibertad/7.tfg_web_1.gif',
      'images/placeboylibertad/9.tfg_tyc_1.gif',
      'images/placeboylibertad/10.tfg_tyc_2.gif',
      'images/placeboylibertad/12.tfg_cartel_1.webp',
      'images/placeboylibertad/13.tfg_tots.webp',
      'images/placeboylibertad/14.tfg_dip_1.webp',
      'images/placeboylibertad/15.tfg_dip_3.webp',
      'images/placeboylibertad/16.tfg_dip_5.webp',
      'images/placeboylibertad/17.tfg_dip_4.webp',
      'images/placeboylibertad/18.tfg_aaff_1.webp',
      'images/placeboylibertad/19.tfg_aaff_2.webp',
      'images/placeboylibertad/20.tfg_aaff_3.webp',
      'images/placeboylibertad/21.tfg_dip_2.webp',
      'images/placeboylibertad/22.tfg_taller.gif',
      'images/placeboylibertad/23.tfg_taula.webp'
    ]
  },
  {
    id: 'llancol',
    titulo: 'APP Llançol',
    texto: `Llançol es una app para paliar las consecuencias de una mala relación con la cama, ya
      sea por no poder levantarte o por no poder dormirte. La solución habitual a estos
      problemas —alejarse del móvil— no es realista para quien no puede hacerlo, así que
      planteé ayudar desde el propio medio digital: Llançol es la representación digital de
      tu habitación. Decidí que la ayuda debía sentirse cercana, confiable e inmaterial, y
      llegué a la conclusión de que debía ser la propia habitación quien te ayudase: cada
      mueble se encarga de una cosa concreta, igual que ya lo hace en la vida real. La cama
      para dormirte o despertarte, la silla como lista de tareas que procrastinas, el
      armario con fotos de conjuntos para quitar la fricción del «qué me pongo», la mesita
      con los consejos que te da la cama, el escritorio para notas, y la ventana para
      archivar el momento en que consigues levantarte —metafóricamente, «abrir la ventana».
      Los objetivos: uso breve y no adictivo, ayuda con el bloqueo, y mejorar la relación con
      el descanso y el sedentarismo. Desarrollé los prototipos de la <a href="https://www.figma.com/proto/6LuHahPDHefGHtAVKFli2p/APP?node-id=438-610&p=f&viewport=78%2C57%2C0.04&t=v6Z85UBNLvuc4O3k-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=518%3A479&page-id=351%3A147" target="_blank">APP</a> y de una <a href="https://www.figma.com/proto/6LuHahPDHefGHtAVKFli2p/APP?node-id=532-474&p=f&viewport=299%2C45%2C0.1&t=TKvYouhTrmHtawBy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=521%3A523&page-id=1%3A3" target="_blank">landing page</a> para su descarga.`,
    imagenes: [
      'images/appllançol/logo_gif.gif',
      'youtube:Qgh1Iu-5iN8',
      'images/appllançol/app_landing.mp4',
    ]
  },
  {
    id: 'anuario',
    titulo: 'Anuario EASD',
    texto: `El Anuario de la EASD València es una publicación que recoge toda la vida de la
      escuela más allá de las clases —colaboraciones, conferencias, exposiciones,
      desfiles— pensada para un público de profesorado y estudiantes con criterio de diseño
      propio. Elegí la sinceridad como concepto: un diseño que impresione sin artificios,
      usando los mínimos recursos posibles. De ahí se desprenden tres decisiones que
      atraviesan toda la maquetación: transparencia, usando papel fino que deja ver el
      pliego de atrás en vez de ocultarlo; minimalismo, con una sola tinta en toda la
      publicación y una retícula estricta; y naturalidad, usando tipografías «no buscadas»
      como Arial o Minion Pro, que se encuentran por defecto al crear un documento o un
      proyecto de InDesign respectivamente. El resultado es una publicación que no necesita
      levantar la voz para tener personalidad.`,
    imagenes: [
      'images/anuarioeasd/anuario_gif.gif',
      'images/anuarioeasd/anuario_1.webp',
      'images/anuarioeasd/anuario_2.webp',
      'images/anuarioeasd/anuario_3.webp',
      'images/anuarioeasd/anuario_4.webp',
      'images/anuarioeasd/anuario_5.webp',
      'images/anuarioeasd/anuario_6.webp',
      'images/anuarioeasd/anuario_7.webp',
      'images/anuarioeasd/anuario_8.webp',
      'images/anuarioeasd/anuario_9.webp',
    ]
  },
  {
    id: 'cento-giorni',
    titulo: 'Cento Giorni',
    texto: `Cento Giorni es un lyric video para la canción homónima de Caterina Caselli, de la
      década de los sesenta. Dividí la pieza en tres estéticas que siguen los tres momentos
      de la canción: la primera, sobria e íntima, inspirada en el cine clásico en blanco y
      negro; la segunda, en la editorial de revistas y periódicos de los 60, animándose poco
      a poco como puente hacia el tercer tramo; la tercera parte, mucho más animada y
      colorida, se inspira en la televisión, contrastando directamente con blanco y negro
      del inicio. Como referentes conceptuales usé Fue la mano de Dios de Sorrentino y
      Cinema Paradiso de Tornatore, dos películas que comparten ese mismo tránsito entre la
      nostalgia contenida y la explosión emocional italiana.`,
    imagenes: [
      'youtube:KuiNxcNsxds',
      'images/centogiorni/cento_0.gif',
      'images/centogiorni/cento_1.gif',
      'images/centogiorni/cento_3.gif',
      'images/centogiorni/cento_4.gif',
      'images/centogiorni/cento_5.gif',
      'images/centogiorni/cento_6.gif',
      'images/centogiorni/cento_7.gif',
      'images/centogiorni/cento_8.gif',
    ]
  },
  {
    id: 'personal',
    titulo: 'Producción propia',
    texto: `Estas piezas de producción propia son una serie de piezas personales que combinan
      cartel y literatura. Se incluyen dos carteles basados en Pedro Páramo de Juan Rulfo, y
      una serie a la que llamé cartel/zine: un formato que encontré al plantearme cómo
      publicar, de la forma más sencilla y barata posible, relatos escritos por mí. Doblando
      el papel, un mismo cartel se convierte en un pequeño fanzine legible, sin más
      recursos. Sin cliente ni encargo detrás, solamente la publicación literaria con el
      valor añadido de un cartel.`,
    imagenes: [
      'images/mio/1.webp',
      'images/mio/2.webp',
      'images/mio/3.webp',
      'images/mio/4.webp',
      'images/mio/5.webp',
      'images/mio/6.webp',
      'images/mio/7.webp',
      'images/mio/8.webp',
      'images/mio/9.webp',
      'images/mio/10.webp',
      'images/mio/11.webp',
      'images/mio/12.webp',
      'images/mio/13.webp',
      'images/mio/14.webp',
      'images/mio/15.webp',
      'images/mio/17.webp',
      'images/mio/18.webp',
      'images/mio/19.webp',
      'images/mio/20.webp',
      'images/mio/21.webp', 
    ]
  }
];

// =========================================================
// LÓGICA DE LAS TRES COLUMNAS
// =========================================================

const body = document.body;
const linkProyectos = document.getElementById('link-proyectos');
const listaProyectos = document.getElementById('lista-proyectos');
const detalleProyecto = document.getElementById('detalle-proyecto');
const tituloDetalle = document.getElementById('titulo-detalle');
const cerrarLista = document.getElementById('cerrar-lista');
const cerrarDetalle = document.getElementById('cerrar-detalle');
const ampliarDetalle = document.getElementById('ampliar-detalle');
const iconoAmpliar = document.getElementById('icono-ampliar');

// --- Rellenar la lista de proyectos (columna 2) ---
PROYECTOS.forEach(function (proyecto) {
  const li = document.createElement('li');
  li.textContent = proyecto.titulo;
  li.dataset.id = proyecto.id;
  li.addEventListener('click', function () {
    mostrarProyecto(proyecto.id);
  });
  listaProyectos.appendChild(li);
});

// --- Click en "proyectos": abre la columna 2 ---
linkProyectos.addEventListener('click', function () {
  body.classList.add('mostrar-lista');
});

// --- Mostrar el detalle de un proyecto (columna 3) ---
function mostrarProyecto(id) {
  const proyecto = PROYECTOS.find(function (p) { return p.id === id; });
  if (!proyecto) return;

  document.getElementById('col-right').scrollTop = 0;

  // Texto
  tituloDetalle.textContent = proyecto.titulo;
  let html = '<p>' + proyecto.texto + '</p>';

  // Imágenes, vídeos locales y vídeos de YouTube, uno debajo de otro
  const extensionesVideo = ['.mp4', '.webm', '.mov'];

  proyecto.imagenes.forEach(function (src) {
    const esYoutube = src.startsWith('youtube:');
    const esVideo = extensionesVideo.some(function (ext) {
      return src.toLowerCase().endsWith(ext);
    });

    if (esYoutube) {
      const idYoutube = src.replace('youtube:', '');
      html += '<div class="video-embed"><iframe src="https://www.youtube.com/embed/' + idYoutube + '?rel=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>';
    } else if (esVideo) {
      html += '<video src="' + src + '" controls muted playsinline></video>';
    } else {
      html += '<img src="' + src + '" alt="' + proyecto.titulo + '"loading="lazy">';
    }
  });

  detalleProyecto.innerHTML = html;

  // Marca el proyecto activo en la lista
  Array.from(listaProyectos.children).forEach(function (li) {
    li.classList.toggle('activo', li.dataset.id === id);
  });

  body.classList.add('mostrar-detalle');
}

// --- Cerrar columna 2 (lista de proyectos) ---
// Al cerrarla, se cierra también la columna 3, ya que depende de un proyecto elegido en la lista.
cerrarLista.addEventListener('click', function () {
  if (body.classList.contains('detalle-ampliado')) {
    // Primer paso: deshacer la ampliación
    body.classList.remove('detalle-ampliado');
    iconoAmpliar.src = 'flechas-expandir.svg';

    // Segundo paso: cerrar del todo, una vez ha terminado la transición anterior
    setTimeout(function () {
      body.classList.remove('mostrar-lista');
      body.classList.remove('mostrar-detalle');
    }, 1000);
  } else {
    body.classList.remove('mostrar-lista');
    body.classList.remove('mostrar-detalle');
  }
});

// --- Cerrar columna 3 (detalle del proyecto) ---
cerrarDetalle.addEventListener('click', function () {
  body.classList.remove('mostrar-detalle');
  body.classList.remove('detalle-ampliado');
});

// --- Ampliar/reducir columna 3 ---
ampliarDetalle.addEventListener('click', function () {
  body.classList.toggle('detalle-ampliado');
  iconoAmpliar.src = body.classList.contains('detalle-ampliado')
    ? 'flechas-comprimir.svg'
    : 'flechas-expandir.svg';
});


// --- Cambiar estilo de la página --- 
window.addEventListener("DOMContentLoaded", () => {
  const estiloLink = document.getElementById("estilo");
  const btn1 = document.getElementById("boton-estilo1");
  const btn2 = document.getElementById("boton-estilo2");

  function cambiarEstilo(hojaEstilo) {
    estiloLink.href = hojaEstilo;
    localStorage.setItem("estiloElegido", hojaEstilo);
    actualizarBotonesActivos(hojaEstilo);
  }

  function actualizarBotonesActivos(hoja) {
    if (btn1 && btn2) {
      const es1 = hoja.includes("style.css") && !hoja.includes("style2.css");
      btn1.classList.toggle("activo", es1);
      btn2.classList.toggle("activo", !es1);
    }
  }

  // Cargar estilo guardado
  const guardado = localStorage.getItem("estiloElegido") || "style.css";
  cambiarEstilo(guardado);

  if (btn1) btn1.addEventListener("click", () => cambiarEstilo("style.css"));
  if (btn2) btn2.addEventListener("click", () => cambiarEstilo("style2.css"));
});

