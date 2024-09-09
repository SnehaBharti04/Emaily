const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    console.log("🚀 ~ app.get ~ req:", req);
    req.logout((err) => {
      if (err) { return next(err); }
      res.redirect('/');
    });

    res.redirect("/");
  });

 
  

  app.get("/api/current_user", (req, res) => {
    console.log("🚀 ~ app.get ~ current_user:", req.user);
    res.send(req.user);
  });
};
