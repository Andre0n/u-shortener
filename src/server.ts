import app from "./app";

const server = app.listen(3000, () => {
  console.log("App is running at http://localhost:3000");
});

server.on("unhandledRejection", (err: Error) => {
  console.log("Unhandled Rejection! Shutting down server...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

server.on("error", (err: Error) => {
  console.log("Unhandled Error! Shutting down server...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

server.on("close", () => {
  console.log("Server closed");
});

process.on("uncaughtException", (err: Error) => {
  console.log("Uncaught Exception! Shutting down server...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("Shutting down server");
  server.close();
  process.exit();
});
