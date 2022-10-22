exports.errorhandler = (error, req, res) => {
  res.status(500).json({ error: "somethings gone wrong" });
};
