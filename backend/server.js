import express from 'express';
// import { errorMiddlewareHandler } from './middlewares/errorMiddlewares';
import { paystackProxyRoutes } from './routes/paystackProxyRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json()); //Pass incoming request

//ROUTES
app.get('/', (req, res) => res.send('Makey Payment System'));

//Paystack Routes
app.use('/', paystackProxyRoutes);

//Error routes
// app.use(errorMiddlewareHandler);
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is runing on port ....`);
});
