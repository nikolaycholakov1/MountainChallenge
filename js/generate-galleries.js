// import fs from "fs";
// import path from "path";

// const mountainsFile = "./js/mountains.js";
// const imagesRoot = "./images/mountains";

// let content = fs.readFileSync(mountainsFile, "utf8");

// // Replace every photos: [...] block
// content = content.replace(
//   /photoFolder:\s*"([^"]+)"/g,
//   (match, folder) => {
//     const folderPath = path.join(imagesRoot, folder);

//     let photos = [];

//     if (fs.existsSync(folderPath)) {
//       photos = fs.readdirSync(folderPath)
//         .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
//         .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
//         .map(file => ({
//           url: `images/mountains/${folder}/${file}`,
//           caption: path.parse(file).name
//         }));
//     }

//     return `photos: ${JSON.stringify(photos, null, 8)}`;
//   }
// );

// fs.writeFileSync(mountainsFile, content);

// console.log("✓ Galleries generated!");

import fs from "fs";
import path from "path";

const imagesRoot = "./images/mountains";

function generateForFile(filePath) {
    let content = fs.readFileSync(filePath, "utf8");

    content = content.replace(
        /photoFolder:\s*"([^"]+)"/g,
        (match, folder) => {
            const folderPath = path.join(imagesRoot, folder);

            let photos = [];

            if (fs.existsSync(folderPath)) {
                photos = fs.readdirSync(folderPath)
                    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
                    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
                    .map(file => ({
                        url: `images/mountains/${folder}/${file}`,
                        caption: path.parse(file).name
                    }));
            }

            return `photos: ${JSON.stringify(photos, null, 8)}`;
        }
    );

    fs.writeFileSync(filePath, content);
}

generateForFile("./js/mountains.js");
generateForFile("./js/international.js");

console.log("✓ Galleries generated!");