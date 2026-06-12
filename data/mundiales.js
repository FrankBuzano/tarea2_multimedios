import { DatabaseSync } from "node:sqlite";
import { cwd } from "node:process";

const db = new DatabaseSync(`${cwd()}/data/mundiales.db`);

export const getAll = () => {
  const query = db.prepare("SELECT * FROM mundiales ORDER BY anio");
  return query.all();
};

export const getBySlug = (slug) => {
  const query = db.prepare("SELECT * FROM mundiales WHERE slug = ?");
  return query.get(slug);
};

export const getByCampeon = (pais) => {
  const query = db.prepare(
    "SELECT slug FROM mundiales WHERE LOWER(campeon) = LOWER(?) ORDER BY anio"
  );
  return query.all(pais);
};

export const getRandom = () => {
  const query = db.prepare("SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1");
  return query.get();
};

export const search = (text) => {
  const query = db.prepare(/* SQL */ `
    SELECT * FROM mundiales
    WHERE LOWER(nombre) LIKE LOWER(?)
       OR LOWER(sede) LIKE LOWER(?)
       OR LOWER(campeon) LIKE LOWER(?)
       OR LOWER(subcampeon) LIKE LOWER(?)
       OR LOWER(goleador) LIKE LOWER(?)
       OR LOWER(resumen) LIKE LOWER(?)
       OR LOWER(descripcion) LIKE LOWER(?)
    ORDER BY anio
  `);
  const param = `%${text}%`;
  return query.all(param, param, param, param, param, param, param);
};
