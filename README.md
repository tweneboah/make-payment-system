# make-payment-system

Integration of payment system using paystack into MERN application. This integration helps you to receive payment on your site across the globe

# Integration steps:

## 1. Create Proxy routes for both get and Post Request to paystack

### POST REQUEST HANDLER

```js
const paystackPostRequestProxyController = expressAsyncHandler(
  async (req, res) => {
    try {
      let { data } = await axios.post(req.body.paystackUrl, req.body.data, {
        headers: {
          Authorization: `Bearer ${process.env.paystackTestSecretKey}`,
          'Content-Type': 'application/json',
        },
      });
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);
```

### POST REQUEST HANDLER

```js
//PAYSTACK GET REQUEST HANDLER
const paystackGetRequestProxyController = expressAsyncHandler(
  async (req, res) => {
    try {
      const { data } = await axios.get(req.body.paystackUrl, {
        headers: {
          Authorization: `Bearer ${process.env.paystackTestSecretKey}`,
          'Content-Type': 'application/json',
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);
```
