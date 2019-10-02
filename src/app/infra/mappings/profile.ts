import mongoose from '../database'

const PerfilSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  claims: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Claim',
    required: false
  }],
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

const Claim = mongoose.model('Perfil', PerfilSchema)

export default Claim
