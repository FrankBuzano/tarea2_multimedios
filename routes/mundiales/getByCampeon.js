import * as mundial from "../../data/mundiales.js";

export const getByCampeon = (req, res) => {
  const slugs = mundial.getByCampeon(req.params.pais).map((m) => m.slug);
  res.json(slugs);
};
