const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    console.log('Stripe Token:', req.body);
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id,
      });
  
      req.user.credits += 5;
      const user = await req.user.save();
  
      res.send(user);
    } catch (err) {
      console.error('Error creating charge:', err);
      res.status(500).send({ error: 'Charge creation failed' });
    }
  });
}  
