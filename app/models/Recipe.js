var mongoose = require('mongoose');

// Set up the Mongoose Schema and Model
var Schema = mongoose.Schema;

var recipeSchema = new Schema (
{
  	ObjectId:  String,
  	name: String,
  	ingredients: [String],
  	dateAdded: Date,
  	dateModified: Date,
  	lastMadeOn: Date,
  	recipePic: String,
  	pic: String,
  	meal: String,
  	tags: [String],
  	time: Number,
  	addedBy: String,
  	instructions: String,
  	rating: Number
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Recipe', recipeSchema);