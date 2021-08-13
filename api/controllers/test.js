const { google } = require("googleapis");
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");
const fs = require("fs");

const drive = google.drive("v3");

// @todo use env vars for parentFolder Id.
const MOCK = {
  parentFolder: "18pxSZLXDQwgNAY3ClH-28TfRDVkicGz0",
  fileName: "semicolon.jpeg",
  path: path.join(__dirname, "./semicolon.jpeg"),
};

const driveUpload = async () => {
  // Obtain user credentials to use for the request
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, "../../oauth2.keys.json"),
    scopes: [
      "https://www.googleapis.com/auth/drive.metadata",
      "https://www.googleapis.com/auth/drive",
    ],
  });

  google.options({ auth });

  const file = fs.createReadStream(MOCK.path);

  const config = {
    resource: {
      parents: [MOCK.parentFolder],
      name: MOCK.fileName,
    },
    media: {
      mimeType: "image/jpeg",
      body: file,
    },
    fields: "id",
  };

  const callback = (err, file) => {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      console.log({ file });
      console.log("File Id: ", file.id);
      return file;
    }
  };

  drive.files.create(config, callback);
};

// driveUpload().catch(console.error);
