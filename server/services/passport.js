const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

const { json } = require("express");

passport.serializeUser((user, done) => {
  // here user.id is id provided by mongo no googleid or
  //profileid as it might be posssible that user signs with linkedinid or githubid whichi does not have googleid
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      // we dont have
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

// const fetchAlbums = async () =>{
//    const res = await  fetch("https://jsonplaceholder.typicode.com/todos");
//    const json = await res.json()
//    console.log("🚀 ~ fetchAlbums ~ json:", json)
// }

// fetchAlbums()
