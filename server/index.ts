import mongoose from 'mongoose';

const config = useRuntimeConfig();

export default async () => {
  const mongoUrl = `mongodb://${config.dbUser}:${config.dbPass}@${config.dbHost}:${config.dbPort}/${config.dbName}?authSource=admin`;
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoUrl);
    console.log('Mongoose connection successful');
  } catch (err) {
    console.error('Mongoose connection failed', err);
  }
};
