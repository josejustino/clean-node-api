export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://admin:admin@mongo:27017/clean-node-api',
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'tj670=='
}
