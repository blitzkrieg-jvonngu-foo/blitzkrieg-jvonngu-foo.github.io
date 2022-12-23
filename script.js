const fs = require("fs");
fs.readFile("./src/content.txt", (err, data) => {
    if err throw err;
    document.getElementsByID('my_introduce').innerText = data.toString();
});
