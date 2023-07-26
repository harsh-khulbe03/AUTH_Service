const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig");

const apiRoutes = require("./routes/index");

// const bcrypt = require("bcrypt");
// const { User } = require("./models/index");
// const UserRepository = require("./repository/user-repository");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server started on port: ${PORT}`);
    // const incomingpassword = "1234569";
    // const user = await User.findByPk(3);
    // const response = bcrypt.compareSync(incomingpassword, user.password);
    // console.log(response);
    // const repo = new UserRepository();
    // const response = await repo.getById(1);
    // console.log(response);
  });
};

prepareAndStartServer();
