const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjId = Schema.ObjectId;


const StateSchema = new Schema({
  id: ObjId ,
  state:{ type: String } ,
  capital:{ type: String },
  slogan: { type: String },
  senatorial_districts: [],
  lgas: [],
  landmass: { type: String },
  population:{ type: String },
  dialect: { type: String },
  latitude: { type: String },
  longitude:{ type: String },
  geo_politcal_zone: { type: String },
  created_date: { type: String },
  borders: [],
  created_at: {
    type: Date,
    default: Date.now,
    required: "Must have start date - default value is the created date",
  },
 
});




const State = mongoose.model("State", StateSchema);

module.exports = State;




