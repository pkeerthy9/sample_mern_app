
let express = require('express');
let cors = require('cors');
let app = express();
let mongoose = require('mongoose');

let emproutes = require('./routes/employee_route');
let hrroutes = require('./routes/hr_route');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/hrmanagement")
    .then(() => console.log("db connected successfully"))
    .catch((err) => console.log(err));

app.use("/api/employee", emproutes);
app.use("/api/hr", hrroutes);

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
