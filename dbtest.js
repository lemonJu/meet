var db = require('./dbConnect');
var mongoose = require('mongoose');

function back(entity) {
    var userSchema = new mongoose.Schema({
        photo: Buffer,
        nickname: String,
        gender: String,
        password: String,
        age: Number,
        birthday: Date,
        pdescription: String
    });

    userSchema.methods.showName = function() {
        console.log(this.name)
    }


    var userModel = this.model('Person', userSchema);
    var userEntity = new userModel(entity);

    userEntity.save(function(err) {
        if (err) console.log(err)
        else console.log('save ok')
    });
}


exports.save = function(entity) {
	var handle = db.connect();
	handle.once('open', function() {
		back(handle, entity)
	});
}