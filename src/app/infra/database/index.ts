import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/security', { useNewUrlParser: true })
mongoose.Promise = global.Promise

export default mongoose
