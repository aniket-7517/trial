const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./Routers/product.router");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({ status: "Welcome" });
});

app.use("/api/products", productRouter);

// mongoose.connect("mongodb+srv://aniketkarangale75:Ani@9421202292@cluster0.4japkbu.mongodb.net/triall?retryWrites=true&w=majority&appName=Cluster0")
// .then(() => {
//     console.log(`Database connected successfully.`);
//     app.listen(3030, () => {
//         console.log("Server is running on port 3030");
//     });
// })
// .catch(err => {
//     console.error("Database connection error:", err);
// });

app.listen(3030, () => {
    console.log('port no 3030');
})

const connectionParams = {
};

const dburl = "mongodb+srv://aniketkarangale75:J747vYAqf8EU0p4M@cluster0.4japkbu.mongodb.net/trial?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dburl).then(() => {
    console.log("DB connected")
})