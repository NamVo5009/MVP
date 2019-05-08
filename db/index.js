const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OverwatchProfiles', {useNewUrlParser: true});

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
  });


const profileModel= new mongoose.Schema({
   battleTag: String,
   hero: String,
   stats: {all: {}}
  })

var Profile = mongoose.model('Profile', profileModel);

function saveProfile(data,callback){
  var newProfile ={
   battleTag: data.battleTag,
   hero: data.hero,
   stats: {all: data.data}
  }
  Profile.findOneAndUpdate({battleTag: data.battleTag, hero: data.hero}, newProfile, {upsert: true, new: true, runValidators: true}, function (err, doc){
     if( err ){
        console.log(err)
     } else {
        callback(doc)
     }
  })
}

function getAll(callback){
   Profile.find({}, (err, data) =>{
      if(err) {
         console.log(err)
      } else {
         callback(data)
      }
   })
}

module.exports ={
   db,
   saveProfile,
   getAll
};