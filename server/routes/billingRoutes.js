const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
  app.post("/api/stripe", requireLogin ,async(req, res) => {
    
   const charge = await stripe.charges.create({
      amount: 500,
      description: "$5 for 5 email credits",
      currency: 'usd',
      customer: req.body.id
  });
   console.log("🚀 ~ app.post ~ charge:", charge)
   req.user.credits += 5
   const user = await req.user.save()

   res.send(user)
  });
};
