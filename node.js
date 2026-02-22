const fs = require('fs');
// This line imports the fs (File System) module, which provides functions to interact with the file system
//They contain the strings that will be replaced and the replacement strings, respectively.
const replaceThis = "john";
const replaceWith = "praveen";
// Read Directory:
//fs.readdir(path, callback): Reads the contents of the directory specified by path
//__dirname + "/data": Constructs the path to the data directory.
fs.readdir(__dirname + "/data", (err, files) => {  
   if (err) {
      console.log("Error reading directory:", err);
      return;
   }
   console.log("Files in directory:", files);

   for (let index = 0; index < files.length; index++) {
      const item = files[index];
      let newFile = __dirname + "/data/" + item.replaceAll(replaceThis, replaceWith);
      //fs.rename(oldPath, newPath, callback): Renames (or moves) the file from oldPath to newPath
      fs.rename(__dirname + "/data/" + item, newFile, (err) => {
         //The callback function receives an err argument for handling errors.
         if (err) { 
            console.log(`Error renaming ${item}:`, err);
         } else {
            //logs the old and new file names.
            console.log(`${item} renamed to ${newFile}`);
         }
      });
   }
});