const express = require('express');
const cors = require('cors');
/////////////
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send({
        "data": [
                "Hoang Vuong",
                "Song",
                "Phuc",
                "Dat",
                "Nhan",
                "Trang"
        ]
    })
})


app.listen(PORT, HOST);
console.log(`Running ${HOST}:${PORT}`);