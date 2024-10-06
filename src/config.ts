const config = {
  host: process.env.HOST || 'localhost',
  port: (process.env.PORT ?? 3000) as number,
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
};

export default config;
