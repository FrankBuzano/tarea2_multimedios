import * as mundial from "../../data/mundiales.js";

export const random = (req, res) => {
  const found = mundial.getRandom();
  res.json(found);
};
