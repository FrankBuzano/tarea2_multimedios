# Referencias

## Material del curso

- **Slides de Node.js** presentacion del curso.
  Fundamentos de Node.js, modulos nativos (`node:fs`, `node:util`, `node:sqlite`), parseo de argumentos y servidor HTTP basico.

- **Slides de Express** presentacion del curso.
  Setup de Express, rutas dinamicas (`req.params`, `req.query`), patron repositorio, validacion con Zod e integracion con SQLite.

- **Repositorio guia `express-example`** usado como referencia para la organizacion del proyecto.

## Documentacion oficial

- **Express 5.x** — https://expressjs.com/en/5x/api.html
  En particular el cambio de sintaxis de wildcards (`*` debe tener nombre, como `*splat`) por la actualizacion a `path-to-regexp@8`.

- **Node.js — Modulo `node:sqlite`** — https://nodejs.org/api/sqlite.html
  `DatabaseSync`, metodos `prepare`, `run`, `get`, `all` y manejo de parametros nombrados.

- **Node.js — Import attributes** — https://nodejs.org/api/esm.html#import-attributes
  Para importar `data.json` con `with { type: "json" }`.

- **Zod 4** — https://zod.dev/
  `z.object`, `z.string`, modificadores `trim`, `nonempty`, `min`, `max`, `transform` y uso de `safeParse` para validacion sin lanzar excepciones.

- **SQLite** — https://www.sqlite.org/docs.html
  Sintaxis SQL usada: `CREATE TABLE`, `PRIMARY KEY AUTOINCREMENT`, `UNIQUE`, `LIKE`, `LOWER()`, `ORDER BY RANDOM() LIMIT 1`

## Datos historicos de los mundiales

Informacion sobre cada edicion (sede, campeon, subcampeon, goleador, numero de equipos y resumenes) tomada de los articulos correspondientes de Wikipedia.

- **1930 FIFA World Cup** — https://en.wikipedia.org/wiki/1930_FIFA_World_Cup
- **1986 FIFA World Cup** — https://en.wikipedia.org/wiki/1986_FIFA_World_Cup
- **1990 FIFA World Cup** — https://en.wikipedia.org/wiki/1990_FIFA_World_Cup
- **2010 FIFA World Cup** — https://en.wikipedia.org/wiki/2010_FIFA_World_Cup
- **2014 FIFA World Cup** — https://en.wikipedia.org/wiki/2014_FIFA_World_Cup
- **2022 FIFA World Cup** — https://en.wikipedia.org/wiki/2022_FIFA_World_Cup

