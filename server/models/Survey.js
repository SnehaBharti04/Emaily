const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipientSchema = require('./Recipient');
const { types } = require("joi");

const surveySchema = new Schema({
//   googleId: String,
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema], // why we are declaringnit in another file Refer video : 131
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0},
  _user : {type: Schema.Types.ObjectId, ref: 'User'},
  dateSent : Date,
  lastResponded : Date,

});

mongoose.model("surveys", surveySchema);
