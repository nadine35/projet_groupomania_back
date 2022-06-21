const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId; //reconnaitre les id

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password"); //tu le trouves et tu prends tout sauf
  //enlève le password
  return res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
  console.log(req.params);
  //test si id est reconnue ds la base de données
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown :" + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    //docs=data contenue
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password");
};

module.exports.updateUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  // Ne pas mettre "async await" parce que 'ERR_HTTP_HEADERS_SENT'
  try {
    UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);

        if (err) return res.status(400).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
