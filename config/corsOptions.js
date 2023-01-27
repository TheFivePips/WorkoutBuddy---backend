var whitelist = [
  "https://workoutbuddy-jwdv.onrender.com",
  "https://workoutbuddy-jwdv.onrender.com/login",
  "https://workoutbuddy-jwdv.onrender.com/sign",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
