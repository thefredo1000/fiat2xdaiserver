// models/Ticket.js

const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  fiatCurrency: {
    type: String,
    required: true
  },
  fiatValue: {
    type: Number,
    required: true
  },
  poolFee: {
    type: Number,
    required: true
  },
  rampFee : {
    type: Number,
    required: true
  },
  receiverAddress: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  updatedAt: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  metamaskConnected: {
    type: Boolean,
    required: false
  },
  xDaiBalance: {
    type: Number,
    required: false
  },
  wrappedXDaiBalance: {
    type: Number,
    required: false
  }
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);