const express = require('express');
const app = express();
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World"
    })
})

// app.all("*", (req, res) => {
//     res.status(500).json({
//         message: "Not build yet"
//     })
// })

app.listen(port, () => 
    console.log(`Server is listeneing on port http://localhost:${port}`)
)