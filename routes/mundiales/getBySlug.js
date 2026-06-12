import * as mundial from "../../data/mundiales.js";

export const getBySlug = (req, res) => {
  const found = mundial.getBySlug(req.params.slug);

  if (!found) {
    return res.status(404).json({ error: "Mundial no encontrado" });
  }

  res.json(found);
};
