const app = require("express")();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get("/", (req, res) => {
  res.sendFile(__dirname,'http://localhost:3000/#/ws');
  // res.send('<h1>Hello world</h1>');
});
io.on("connection", (socket) => {
  console.log("有人进来了");
  socket.on("disconnect", () => {
    console.log("他离开了");
  });
});
server.listen(3001, () => console.log("服务器已启动"));

// export {};
