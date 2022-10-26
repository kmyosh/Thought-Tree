const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Thinker = require("../models/thinkers");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      Thinker.findOne({ googleId: profile.id }, function (err, thinker) {
        if (err) return cb(err);
        if (thinker) {
          return cb(null, thinker);
        } else {
          // we have a new thinker via OAuth!
          var newThinker = new Thinker({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newThinker.save(function (err) {
            if (err) return cb(err);
            return cb(null, newThinker);
          });
        }
      });
      // a user has logged in with OAuth...
    }
  )
);

passport.serializeUser(function (thinker, done) {
  done(null, thinker.id);
});

passport.deserializeUser(function (id, done) {
  Thinker.findById(id, function (err, thinker) {
    done(err, thinker);
  });
});
