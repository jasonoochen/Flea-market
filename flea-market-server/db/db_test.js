const md5 = require('blueimp-md5')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/db_test', { useNewUrlParser: true })
const conn = mongoose.connection
conn.on('connected', function () { 
    console.log('connect to database success') 
})

const userSchema = mongoose.Schema({ 
    username: {type: String, required: true}, 
    password: {type: String, required: true}, 
    type: {type: String, required: true}, 
})

const UserModel = mongoose.model('user', userSchema)

function testSave() { 
    const user = { 
        username: 'seller',
        password: md5('123'), 
        type: 'seller',
    } 
    const userModel = new UserModel(user)
    userModel.save(function (err, user) { 
        console.log('save', err, user) 
    }) 
}
//testSave()

function testFind() {
    UserModel.find(function (err, users) {
        console.log('find() ', err, users)
    })
    UserModel.findOne({_id: '5b57c8b6c1546a1e6cd584a3'}, function (err, user) {
        console.log('findOne() ', err, user)
    })
}
//testFind()

function testUpdate() {
    UserModel.findByIdAndUpdate({_id: '5b57c8b6c1546a1e6cd584a3'}, {username: 'testUpdate'},
        function (err, user) {
            console.log('findByIdAndUpdate()', err, user)
        })
}
//testUpdate()

function testDelete() {
    UserModel.remove({_id: '5b57c8b6c1546a1e6cd584a3'}, function (err, result) {
        console.log('remove()', err, result)
    })
}
//testDelete()