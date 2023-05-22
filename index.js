const http = require("./src/app");
const CustomSocket = require("./src/config/CustomSocket");
const { MongoConnect } = require("./src/config/mongoConfig");

MongoConnect()
    .then(() => {
        console.info("MongoDB connection established");

        const PORT = process.env.PORT || 8080;

        http.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        }).on("error", (err) => console.error(err));

        new CustomSocket(http);
    })
    .catch((err) => console.error(err));
