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
]

const getFiles = (req, res) => res.json(MOCK_FILES)

module.exports = { getFiles }
