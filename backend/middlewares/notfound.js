exports.notfound = (req, res) => {
  res.status(404).json({ error: "not found" });
};
