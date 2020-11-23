import express from 'express';
import {
  paystackGetRequestProxyController,
  paystackPostRequestProxyController,
} from '../controllers/paystackProxyRoutesController';

const paystackProxyRoutes = express.Router();

paystackProxyRoutes.post(
  '/paystack-post-handler',
  paystackPostRequestProxyController
);

paystackProxyRoutes.post(
  '/paystack-get-handler',
  paystackGetRequestProxyController
);
export { paystackProxyRoutes };
