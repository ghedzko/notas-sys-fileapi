const MOCK_FILES = [
  {
    name: "fake-file1",
  },
  {
    name: "fake-file2",
  },
  {
    name: "fake-file3",
  },
];

const getFiles = (req, res) => res.json(MOCK_FILES);

const uploadFile = (req, res) => {
  const file = req.swagger.params.file.value;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: "No files were uploaded." });
  }

  res.json({ message: "file uploaded!", file: req.files });
};

module.exports = { getFiles, uploadFile };
