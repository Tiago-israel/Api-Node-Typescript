import mongoose from '../database'

const ClaimSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profiles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

const Claim = mongoose.model('Claim', ClaimSchema)

export default Claim
