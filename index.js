import express from "express";
import { getAll } from "./routes/mundiales/getAll.js";
import { getBySlug } from "./routes/mundiales/getBySlug.js";
import { getByCampeon } from "./routes/mundiales/getByCampeon.js";
import { random } from "./routes/mundiales/random.js";
import { search } from "./routes/mundiales/search.js";
import { imagenes } from "./routes/mundiales/imagenes.js";

const app = express();

const HOST = "localhost";
const PORT = 4321;

app.get("/", (req, res) => {
  res.json({
    nombre: "API Copa Mundial FIFA",
    version: "1.0.0",
    descripcion:
      "API REST con informacion historica de las ediciones de la Copa Mundial de la FIFA.",
    endpoints: [
      { metodo: "GET", ruta: "/mundiales", descripcion: "Lista de slugs (usar ?include=full para detalles completos)" },
      { metodo: "GET", ruta: "/mundial/:slug", descripcion: "Detalle de una edicion por su slug" },
      { metodo: "GET", ruta: "/campeon/:pais", descripcion: "Slugs de las ediciones ganadas por un pais" },
      { metodo: "GET", ruta: "/random", descripcion: "Un mundial elegido al azar" },
      { metodo: "GET", ruta: "/search/:text", descripcion: "Busqueda por texto en nombre, sede, campeon, goleador, etc." },
      { metodo: "GET", ruta: "/imagenes/:slug", descripcion: "Redirect a la imagen externa del mundial" },
    ],
  });
});

app.get("/mundiales", getAll);
app.get("/mundial/:slug", getBySlug);
app.get("/campeon/:pais", getByCampeon);
app.get("/random", random);
app.get("/search/:text", search);
app.get("/imagenes/*splat", imagenes);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en http://${HOST}:${PORT}/`);
});
