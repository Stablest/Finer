const sharp = require("sharp");
const BadRequestError = require("../errors/bad-request-error");

const optimizeImage = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0)
      throw new BadRequestError("Please provide a valid body: image file");

    let { width, height, fit, type, quality } = req.query;
    width = width && Number.parseInt(width);
    height = height && Number.parseInt(height);
    quality = quality && Number.parseInt(quality);

    const optImage = await sharp(req.body)
      .resize(width, height, { fit: fit })
      .toFormat(type ?? "input", { quality: quality })
      .toBuffer();
    res.set("Content-type", `image/${type}`);
    return res.status(200).send(optImage);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  optimizeImage,
};
