export interface IDocFeatures {
  title: string;
  depth: number;
  slug: string;
  src?: string;
  description?: string[];
}

export const docFeatures: IDocFeatures[] = [
  {
    title: "Menu Principal",
    depth: 1,
    slug: "main-menu",
  },
  {
    title: "Botón 'Inicio'",
    depth: 2,
    slug: "button-home",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Cambia el modo de reproducción a reproductor en miniatura (Picture in Picture, pip mode, tecla de atajo 'P'), para mostrarte todas las listas de reproducción en la pantalla principal",
      "También si estás en una lista de reproducción, te llevara a la pantalla principal de las listas de reproducción",
    ],
  },
  {
    title: "Botón 'Abrir Carpeta'",
    depth: 2,
    slug: "button-open-folder",
    src: "a-new-song-dd.mp4",
    description: [
      "Abre la opción de añadir toda una carpeta de canciones, y las añade como una sola lista de reproducción",
      "También puedes usar la tecla de atajo 'O'",
    ],
  },
  {
    title: "Botón 'Tu Librería'",
    depth: 2,
    slug: "button-your-library",
    src: "p-new-song-ply-dd.mp4",
    description: [
      "Cambia el modo de vista de la lista de reproducción a un modo más reducido o lo expande, también puedes usar el atajo 'L'",
    ],
  },
  {
    title: "Botón '+'",
    depth: 2,
    slug: "button-plus",
    src: "a-create-playlist.mp4",
    description: [
      "Crea una nueva sección de listas de reproducción, donde podrás crear nuevas listas de reproducción y así mantener ordenado tus listas de reproducción",
    ],
  },
  {
    title: "Lugar Nombre Sección",
    depth: 2,
    slug: "place-section-name",
    src: "a-new-song-dd.mp4",
    description: [
      "Visualiza el nombre de la sección donde contiene todas las listas de reproducción",
      "Si se realiza doble click, se podrá cambiar el nombre de la sección, se confirma el nuevo nombre con la tecla 'Enter', pero si se presiona 'Esc' o se quita el focus se cancelará el modo edición",
      "También al posicionarte sobre el nombre de la sección, aparecerá el botón de '+' para crear una nueva lista de reproducción en esa sección",
      "Finalmente si se posiciona sobre la esquina superior izquierda aparecerá la opción de eliminar la sección, se eliminará todas las listas de reproducción de esa sección y también la sección, pero si en la sección se encuentra la lista de reproducción 'All Songs' no se eliminará la sección, pero si se vaciara el resto de listas de reproducción de esa sección",
    ],
  },
  {
    title: "Lugar 'Listas de Reproducción'",
    depth: 2,
    slug: "place-playlists",
    src: "a-view-songs.mp4",
    description: [
      "Visualiza todas las listas de reproducción de una sección especifica",
      "Puedes mantener presionado el click izquierdo y arrastrar la lista de reproducción para reorganizarlos",
    ],
  },
  {
    title: "Lista de reproducción 'All Songs'",
    depth: 2,
    slug: "playlist-all-songs",
    src: "a-move-dd.mp4",
    description: [
      "Lista de reproducción por defecto, no se puede eliminar",
      "Además, Cuando se añade una nueva canción con 'Abrir con' del explorador de archivos del sistema o por arrastrar y soltar una canción en el reproductor principal, se añadirá a está lista de reproducción"
    ],
  },
  {
    title: "Detalle de una Lista de Reproducción",
    depth: 2,
    slug: "playlist-unique-detail",
    src: "a-new-section.mp4",
    description: [
      "Si se posiciona sobre una lista de reproducción, aparecerá el botón de Reproducir la lista de reproducción, si la lista de reproducción ya está reproduciéndose, aparecerá el botón de Pausar la lista de reproducción",
      "Si se hace click izquierdo sobre la lista de reproducción, desplegara todas las canciones que se encuentran en la lista, si se realiza click nuevamente ocultara las canciones",
      "Además cuando se posiciona el mouse sobre la esquina superior izquierda aparecerá la opción de eliminar la lista de reproducción (si la lista de reproducción es 'All Songs' no se eliminará, pero vaciará todas las canciones de la lista de reproducción)",
      "Finalmente si se posiciona el mouse en la esquina inferior izquierda aparecerá la opción de cambiar el nombre de la lista de reproducción, se confirma el nuevo nombre con la tecla 'Enter', pero si se presiona 'Esc' o se quita el focus se cancelará el modo edición"
    ],
  },
  {
    title: "Añadir nuevas Canciones en una Lista de Reproducción",
    depth: 2,
    slug: "add-songs-playlist",
    src: "a-move-dd.mp4",
    description: [
      "Visualiza todas las canciones de una lista de reproducción",
      "Además, puedes visualizar si una canción ya se está reproduciendo, se pondrá en color verde",
      "Finalmente puedes hacer click izquierdo sobre una canción para reproducirla",
    ],
  },
  {
    title: "Añadir nuevas Listas de Reproducción",
    depth: 2,
    slug: "add-playlist-section",
    src: "a-new-song-dd.mp4",
    description: [
      "Puedes añadir una o más canciones desde nuestro explorador de archivos del sistema, arrastrando y soltando las canciones en la lista de reproducción",
      "Además puedes añadir una o más nuevas listas de reproducción en una sección especifica, arrastrando y soltando una o más carpetas de canciones en la sección deseada",
    ],
  },
  //! Main Body
  {
    title: "Pantalla Principal",
    depth: 1,
    slug: "main-screen",
  },
  {
    title: "Reproductor Principal",
    depth: 2,
    slug: "main-player",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Reproduce la canción seleccionada",
      "Además puedes cambiar el modo de reproducción a reproductor en miniatura (Picture in Picture, pip mode, tecla de atajo 'P'), para mostrarte todas las listas de reproducción en la pantalla principal",
      "También puedes cambiar el modo de reproducción a reproductor en pantalla completa, para visualizar la canción en pantalla completa o puedes usar la tecla de atajo 'F'",
    ],
  },
  {
    title: "Botón 'Atras'",
    depth: 2,
    slug: "button-back",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Cuando se visualiza una lista de reproducción a detalle en la pantalla principal, con el botón atrás, vuelves a la pantalla principal de todas las listas de reproducción",
    ],
  },
  {
    title: "Botón '+'",
    depth: 2,
    slug: "main-button-plus",
    src: "a-new-song-dd.mp4",
    description: [
      "Añade una nueva sección de listas de reproducción, donde podrás crear nuevas listas de reproducción y así mantener ordenado tus listas de reproducción",
    ],
  },
  {
    title: "Lugar Nombre Sección",
    depth: 2,
    slug: "main-place-section-name",
    src: "a-new-song-dd.mp4",
    description: [
      "Visualiza el nombre de la sección donde contiene todas las listas de reproducción",
      "Si se realiza doble click, se podrá cambiar el nombre de la sección, se confirma el nuevo nombre con la tecla 'Enter', pero si se presiona 'Esc' o se quita el focus se cancelará el modo edición",
      "También al posicionarte sobre el nombre de la sección, aparecerá el botón de '+' para crear una nueva lista de reproducción en esa sección",
      "Finalmente si se posiciona sobre la esquina superior izquierda aparecerá la opción de eliminar la sección, se eliminará todas las listas de reproducción de esa sección y también la sección, pero si en la sección se encuentra la lista de reproducción 'All Songs' no se eliminará la sección, pero si se vaciara el resto de listas de reproducción de esa sección",
    ],
  },
  {
    title: "Lugar 'Listas de Reproducción'",
    depth: 2,
    slug: "main-place-playlists",
    src: "a-view-songs.mp4",
    description: [
      "Visualiza todas las listas de reproducción de una sección especifica y se va visualizando sección por sección",
      "Si se posiciona sobre una lista de reproducción, aparecerá el botón de Reproducir la lista de reproducción, si la lista de reproducción ya está reproduciéndose, aparecerá el botón de Pausar la lista de reproducción",
      "Además puedes posicionarte en la esquina superior izquierda de una lista de reproducción y te aparecerá la opción de eliminar la lista de reproducción (si la lista de reproducción es 'All Songs' no se eliminará, pero vaciara todas las canciones de la lista de reproducción)",
      "Finalmente si realizas click izquierdo sobre una lista de reproducción, ingresaras en el modo visualizar las canciones de la lista de reproducción en modo detalle",
    ],
  },
  {
    title: "Detalle Lista de reproducción",
    depth: 2,
    slug: "main-playlist-unique-detail",
    src: "a-new-section.mp4",
    description: [
      "Visualiza a detalle la lista de reproducción",
      "Visualiza el botón de reproducir lista de reproducción, si la lista de reproducción ya se está reproduciendo, aparecerá el botón de pausar lista de reproducción",
      "Visualiza el botón de eliminar la lista de reproducción, si la lista de reproducción es 'All Songs' no se eliminará, pero vaciará todas las canciones de la lista de reproducción",
      "Visualiza el campo de 'Buscar canciones', para buscar una canción en especifico en la lista actual",
    ],
  },
  {
    title: "Editar la Lista de Reproducción",
    depth: 2,
    slug: "edit-playlist",
    src: "a-move-dd.mp4",
    description: [
      "Si haces click izquierdo sobre el nombre de la lista de reproducción, abrirá un modal para editar la Lista de reproducción",
      "Puedes editar el nombre de la Lista de reproducción en el campo 'Titulo'",
      "Puedes cambiar la imagen de la Lista de reproducción en el campo 'Imagen', si dejas el campo vacío podrás visualizar todas las imágenes por defecto disponible",
      "Además de cambiar la imagen con las opciones disponibles, puedes copiar y pegar la url de una imagen de la PC o de internet",
      "Otra forma de cambiar la imagen es presionando click izquierda sobre la imagen actual, se abrirá un modal para seleccionar una imagen de la PC",
      "También puedes editar el color de la Lista de reproducción en el campo 'Color', al hacer click sobre el color actual, podrás visualizar todos los colores disponibles",
      "Puedes editar a la sección a la que pertenece la Lista de reproducción en el campo 'Sección', al hacer click sobre la sección actual, podrás visualizar todas las secciones disponibles",
      "Finalmente puedes guardar los cambios con el botón 'Guardar' o cancelar los cambios presionando la tecla 'Esc' o haciendo click fuera del modal",
      "Como detalle final, con cada cambio se puede visualizar como quedaría la Lista de reproducción, pero si cancelas los cambios, volverá a sus valores originales",
    ],
  },
  {
    title: "Canciones de una Lista de Reproducción",
    depth: 2,
    slug: "main-songs-playlist",
    src: "a-move-dd.mp4",
    description: [
      "Visualiza todas las canciones de una lista de reproducción",
      "Además, puedes visualizar si una canción ya se está reproduciendo, se pondrá en color verde",
      "Puedes reproducir una canción haciendo doble click sobre la canción",
      "También puedes reproducir una canción posicionando el mouse sobre el numero de la canción y aparecerá el botón de reproducir la canción, pero si la canción ya se está reproduciendo aparecerá el botón de pausar la canción",
      "Finalmente puedes eliminar una canción haciendo click en el icono de la papelera",
    ],
  },
  {
    title: "Reorganizar Canciones de una Lista de Reproducción",
    depth: 2,
    slug: "reorganize-songs-playlist",
    src: "a-move-dd.mp4",
    description: [
      "Manteniendo presionado el click izquierdo sobre una canción, se pondrá en modo arrastrar y soltar y así puedes reorganizar la canción en la lista de reproducción",
      "Si haces click izquierdo sobre una canción, se seleccionará la canción y si vuelves a hacer click izquierdo se deseleccionará la canción",
      "Puedes seleccionar una canción y luego seleccionar otra canción manteniendo presionado la tecla 'Shift', y así seleccionaras todas las canciones entre las dos canciones seleccionadas",
      "También puedes seleccionar una canción y luego seleccionar otra canción manteniendo presionado la tecla 'Ctrl', y así seleccionaras las dos canciones seleccionadas",
      "Finalmente con las canciones seleccionadas puedes reorganizarlas presionando click izquierdo para arrastrarlas a la posición deseada",
    ],
  },
  {
    title: "Añadir Canciones a una Lista de Reproducción",
    depth: 2,
    slug: "main-add-songs-playlist",
    src: "a-new-song-dd.mp4",
    description: [
      "Puedes añadir una o más canciones desde nuestro explorador de archivos del sistema, arrastrando y soltando las canciones en la lista de reproducción",
      "Además puedes escoger en que posición se añadirá las canciones"
    ],
  },
  {
    title: "Dark/Light Mode",
    depth: 2,
    slug: "dark-light-mode",
    src: "p-dark-light-mode.mp4",
    description: [
      "Cambia el modo de vista de la aplicación a modo oscuro o modo claro",
    ],
  },
  {
    title: "Cambio de lenguajes",
    depth: 2,
    slug: "change-languages",
    src: "p-change-languages.mp4",
    description: [
      "Cambia el lenguaje de la aplicación a Español o Ingles",
      "Además, si se cambia el lenguaje, se guardará el lenguaje seleccionado para la próxima vez que se abra la aplicación",
      "Finalmente, se puede implementar nuevos lenguajes en el futuro",
    ],
  },
  {
    title: "Importar Listas de Reproducción",
    depth: 2,
    slug: "import-playlists",
    src: "p-import-playlists.mp4",
    description: [
      "Importa tus listas de reproducción favoritas de tu aplicación de música favorita",
      "Importa desde YouTube, al hacer click en el botón 'Importar YouTube', se abrirá una nueva ventana en tu navegador para solicitar permisos solo de lectura de tus listas de reproducción de YouTube",
      "Al importar tus listas de reproducción de YouTube, se creará una nueva sección con el nombre de 'YouTube' y se añadirá todas tus listas de reproducción de YouTube",
      "Por ahora solo YouTube está disponible, pero se puede implementar nuevas aplicaciones de música en el futuro",
    ],
  },
  {
    title: "Sección de Controles",
    depth: 1,
    slug: "controls-section",
  },
  {
    title: "Reproducción actual",
    depth: 2,
    slug: "current-playback",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Visualiza la canción que se está reproduciendo actualmente",
      "Además puedes hacer click en el nombre de la canción y se abrirá la lista de reproducción actual de la canción",
      "Si haces click nuevamente en el nombre de la canción, se centrará la canción en la lista de reproducción",
    ],
  },
  {
    title: "Controles de Reproducción",
    depth: 2,
    slug: "playback-controls",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Reproduce la canción seleccionada",
      "Además puedes pausar la canción seleccionada",
      "También puedes adelantar la canción seleccionada",
      "También puedes retroceder la canción seleccionada",
      "Puedes presionar la opción de reproducir en modo aleatorio todas las canciones de la lista de reproducción",
      "Puedes presionar la opción de repetir, donde intercalara entre las opciones de repetir la canción actual, repetir la lista de reproducción actual o no repetir nada",
      "También puedes usar las teclas de atajo 'Espacio' para reproducir o pausar la canción, 'Flecha derecha' para adelantar la canción, 'Flecha izquierda' para retroceder la canción, 'A' para reproducir en modo aleatorio, 'R' para cambiar el modo de repetir",
      "Además puedes saltar a diferentes secciones de la canción con las teclas del 0 al 9, donde el 0 es el inicio de la canción y el 9 es el 90% de la canción",
      "Finalmente puedes utilizar las teclas multimedia de tu teclado para controlar la reproducción de la canción ej: 'Play/Pause', 'Stop', 'Anterior', 'Siguiente'",
    ],
  },
  {
    title: "Volumen",
    depth: 2,
    slug: "volume",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Controla el volumen de la canción seleccionada",
      "También puedes usar las teclas de atajo 'Flecha arriba' para subir el volumen y 'Flecha abajo' para bajar el volumen",
      "Además puedes utilizar las teclas multimedia de tu teclado para controlar el volumen de la canción ej: 'Volumen +', 'Volumen -'",
      "Finalmente puedes hacer click en el icono de altavoz para silenciar la canción o usar la tecla de atajo 'M'",
    ],
  },
  {
    title: "Mostrar atajos de teclado",
    depth: 2,
    slug: "show-shortcuts",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Visualiza todos los atajos de teclado disponibles en la aplicación",
      "Además puedes ocultar los atajos de teclado con la tecla 'Esc' o haciendo click fuera del modal",
    ],
  },
  {
    title: "Cambiar velocidad de reproducción",
    depth: 2,
    slug: "change-playback-speed",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Cambia la velocidad de reproducción de la canción seleccionada",
      "Puedes cambiar la velocidad de reproducción de la canción seleccionada con las teclas de atajo '+' para subir la velocidad y '-' para bajar la velocidad",
    ],
  },
  {
    title: "Mostrar reproductor en miniatura",
    depth: 2,
    slug: "show-pip-mode",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "Cambia el modo de reproducción a reproductor en miniatura (Picture in Picture, pip mode, tecla de atajo 'P'), para mostrarte todas las listas de reproducción en la pantalla principal",
      "También puedes manipular el reproductor en miniatura independientemente de la aplicación principal",
    ],
  },
  {
    title: "Reproductor en modo teatro",
    depth: 2,
    slug: "show-theater-mode",
    src: "p-reproduce-by-dd.mp4",
    description: [
      "En modo de reproducción normal, puedes cambiar el modo de reproducción en modo teatro, para visualizar la canción casi en pantalla completa, sin visualizar las listas de reproducción ni los controles de reproducción",
    ],
  },
  {
    title: "Opciones de la aplicación",
    depth: 1,
    slug: "app-options",
  },
  {
    title: "Exportar configuración",
    depth: 2,
    slug: "export-config",
    src: "p-export-config.mp4",
    description: [
      "Exporta la configuración actual de la aplicación",
      "Al exportar la configuración, se descargará un archivo json con la configuración actual de la aplicación",
      "También incluirá las listas de reproducción y las canciones de las listas de reproducción",
    ],
  },
  {
    title: "Importar configuración",
    depth: 2,
    slug: "import-config",
    src: "p-import-config.mp4",
    description: [
      "Importa la configuración de la aplicación",
      "Al importar la configuración, se abrirá un modal para seleccionar el archivo json con la configuración de la aplicación",
      "Al importar la configuración, se sobrescribirá la configuración actual de la aplicación",
      "También sobrescribirá las listas de reproducción y las canciones de las listas de reproducción",
    ],
  },
  {
    title: "Actualizar aplicación",
    depth: 2,
    slug: "update-app",
    src: "p-update-app.mp4",
    description: [
      "Actualiza la aplicación a la última versión disponible",
      "Al actualizar la aplicación, se descargará la última versión disponible y se instalará automáticamente",
    ],
  }
]
