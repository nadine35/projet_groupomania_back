const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minlenght: 3,
      maxlength: 55,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique:true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    picture: {
      type: String,
    },
    bio: {
      type: String,
      max: 1024,
    },
    
    likes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  //bcrypt va généré une série de caractères pour saler le mdp
  const salt = await bcrypt.genSalt();
  //Ajout avec this du pwd
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// comparaison avec l'email qui a été passé avec celui de bcrypt
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
