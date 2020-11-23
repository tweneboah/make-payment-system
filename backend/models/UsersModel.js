import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  feesPaid: {
    type: Boolean,
    default: false,
  },
  paymentHistory: [
    {
      type: Object,
    },
  ],
});

//compile

const User = mongoose.model('User', userSchema);

export { User };
