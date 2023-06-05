const sharp = require("sharp");

const optimizeImage = async (req, res) => {
  if (!req.body) return res.status(400).json({ error: "No body was found" });

  let { width, height, fit, type, quality } = req.query;
  width = width && Number.parseInt(width);
  height = height && Number.parseInt(height);
  quality = quality && Number.parseInt(quality);

  try {
    const optImage = await sharp(req.body)
      .resize(width, height, { fit: fit })
      .toFormat(type ?? "input", { quality: quality })
      .toBuffer();
    res.set("Content-type", `image/${type}`);
    return res.status(200).send(optImage);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ error: e.toString() });
  }
};

module.exports = {
  optimizeImage,
};
