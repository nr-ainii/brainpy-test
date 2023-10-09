const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); 

dotenv.config(); 

const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

app.get('/', (req, res) => {
    res.send('Server successfully running!'); 
});

app.post('/completions', async (req, res) => {
    const keywords = JSON.stringify(req.body.message);
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: "Buat 2 judul skripsi dan deskripsi produk yang spesifik, unik inovatif dan mudah untuk dibuat berdasarkan kata kunci berikut.(gunakan '/n' pada akhir judul dan deskripsi)" + keywords
            }],
            max_tokens: 3000,
        })
    };
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => console.log('Your server running on port ' + port));
