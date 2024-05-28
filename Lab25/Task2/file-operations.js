const fs = require('fs');
const readline = require('readline');

function readFile() {
    fs.readFile('info.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File Content:");
        console.log(data);
        writeFile();
    });

}

function writeFile() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter text to write to the file: ', (input) => {
        fs.writeFile('info.txt', input, (err) => {
            if (err) {
                console.error(err);
                rl.close();
                return;
            }
            console.log('Text written to file successfully.');
            rl.close();
        });
    });
}

readFile();