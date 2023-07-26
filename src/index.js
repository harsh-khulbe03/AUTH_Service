const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig");

const apiRoutes = require("./routes/index");

// const UserService = require("./services/user-service");
const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server started on port: ${PORT}`);
    // const service = new UserService();
    // const newToken = service.createToken({ email: "harsh@admin.com", id: 1 });
    // console.log("new token is: ", newToken);
    //   const token =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE2OTA0MTExNzMsImV4cCI6MTY5MDQxMTIwM30.dv6Bk5Th5TDPlsLaozDdSXgscyqmu75RW1bWmUAeQ_k";
    //   const response = service.verifyToken(token);
    //   console.log(response);
  });
};

prepareAndStartServer();
