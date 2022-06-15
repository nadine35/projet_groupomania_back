const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    posterId: {
      //id de la personne qui poste
      type: String,
      required: true,
    },
    message: {
      type: String,
      maxlength: 500,
      trim: true,
    },

    picture: {
      type: String,
    },
    
    likers: {
      type: [String],
      required: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('post', PostSchema);
