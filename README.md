## Welcome to Spoty App!

Este proyecto es el challenge final de un training en React que me dieron en una empresa.
Para correrlo se necesita generar un token desde la documentación de la API de Spotify.

### Pasos para obtener el token

Dirigirse a: https://developer.spotify.com/console/get-search-item/
Scrollear hacia abajo y hacer click en Get token. Elegir algún scope, el primero por ejemplo.
Loguear con cuenta de Spotify (se puede loguear con Facebook!)
Te redirige nuevamente a la primera página. Scrollear y allí estará el token.

### Tengo el token! Ahora?

Ubicar en la carpeta Config el archivo index.js. Pegar el token en donde corresponde.
Correr con npm start!!!

### Prototipo

En la carpeta public están guardadas las capturas del prototipo que me dieron para el challenge.
Lo único que no alcancé a hacer fueron los tooltips de los favoritos, de todas maneras esos no estaban en los requisitos, así que no lo prioricé.

### Requisitos Funcionales, tal como los pidieron:

- Como usuario, quiero poder buscar un artista en un formulario y ver el resultado de esa búsqueda.
- Como usuario, quiero poder seleccionar entre los artistas que aparecieron en el resultado y luego ver un listado de sus álbumes.
- Como usuario, quiero poder clickear en uno de sus álbumes y ver el nombre del álbum, una foto del álbum y el listado de canciones.
- Como usuario quiero poder realizar una nueva búsqueda desde cualquier punto de mi aplicación.
- Como usuario debo poder regresar a la página principal de mi aplicación en cualquier punto del flow.
- Como usuario quiero poder escuchar un fragmento de cada tema.

### Requisitos Funcionales Opcionales, todos implementados!

- Como usuario quiero poder ordenar el listado de temas por duración de los mismos.
- Como usuario, quiero poder refrescar la página con los resultados de mi búsqueda o el listado de álbumes o el listado de canciones, y quiero que se mantenga el estado.
- Como usuario, quiero poder marcar una canción como favorita y al refrescar el navegador, quiero seguir viendo cómo favoritas las mismas canciones.
- Las canciones marcadas como favoritas deben aparecer en una sección en la página principal.
