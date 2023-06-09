import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'URL',
        message: 'Enter the URL you would like qr code to be directed to: ',
    }, 
  ])
  .then((answers) => {
    fs.writeFile("URL.txt", JSON.stringify(answers), (err) => {
        if (err) throw err;
        console.log("URL saved!");
    });
    const qrCode = qr.image(answers.URL, { type: 'png' });
    qrCode.pipe(fs.createWriteStream('qr_img.png'));
    console.log('QR code generated!');
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error occured");
    } else {
        console.log("Error occured");
    }
  });
