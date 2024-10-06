import app from './app';
import config from './config';

const server = app.listen(config.port, config.host, () => {
  console.log(`Server running on ${config.baseUrl}`);
});

server.on('unhandledRejection', (err: Error) => {
  console.log('Unhandled Rejection! Shutting down server...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

server.on('error', (err: Error) => {
  console.log('Unhandled Error! Shutting down server...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

server.on('close', () => {
  console.log('Server closed');
});

process.on('uncaughtException', (err: Error) => {
  console.log('Uncaught Exception! Shutting down server...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('Shutting down server');
  server.close();
  process.exit();
});
