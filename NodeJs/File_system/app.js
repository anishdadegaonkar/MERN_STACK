const fs = require('fs');
const readline = require('readline');

// To add a txt file and write message in the file
// fs.writeFile('file.txt','Hello from write file method', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Write Successfull");
//     }
// })



// to read info from existing file
// fs.readFile('file.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })



// to append new data into existing file
// fs.appendFile('file.txt','data appended to new line',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(" New data appended");
//     }
// })

// fs.unlink('file.txt',(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else
//     {
//         console.log("File Deleted Successfully");
//     }
// });



// You can check if a file or directory exists using the fs.existsSync() function
// if(fs.existsSync('file.txt')){
//     console.log("File Exists");
//     fs.appendFile('file.txt', 'addede content',(err)=>{

//     })

// }
// else{
//     console.log('File does not exist');
//     fs.writeFile('file.txt',"Hii",(err)=>{
//         if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log("Write Successfull");
//                 }
//     })
    
// }

// Create a program that takes user input from the console and appends it to a file named file.txt. Ensure that each input is appended on a new line
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Enter Note:',(note)=>{
//     fs.appendFile('file.txt',note + '\n',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("New note added");
//             rl.close();
//         }
//     });
// });

// Write a program that copies the content of one file (file.txt) to another file (copyfile.txt)
// fs.copyFile('file.txt','copyfile.txt',(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else
//     {
//         console.log("File Copied Successfully");
//     }
// });


// Create a program that renames a file named file.txt to newfile.txt
// fs.rename('newfile.txt','file.txt',(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else
//     {
//         console.log("File Renamed Successfully");
//     }
// });


// Listing Files in a Directory:
// fs.readdir('.',(err,files)=>{
//     if(err){
//         console.error(err);
//     }
//     else{
//         files.forEach(file=>{
//             console.log(file);
//         })
//     }
// });
