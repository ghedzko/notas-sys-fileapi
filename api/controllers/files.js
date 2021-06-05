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

const uploadFile = (req, res) => {
    console.log("POST FILE", req)
    res.json({ message: "file uploaded!" })
}

module.exports = { getFiles, uploadFile }
