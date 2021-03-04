exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
};

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp ${req.params.id}`,
  });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "create new bootcamps",
  });
};

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
};

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
};
