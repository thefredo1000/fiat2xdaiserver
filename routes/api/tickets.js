// routes/api/ticket.js

const express = require('express');
const router = express.Router();

// Load Ticket model
const Ticket = require('../../models/Ticket');

// @route GET api/ticket/:id
// @description Get single ticket by id
// @access Public
router.get('/:id', (req, res) => {
  Ticket.findById(req.params.id)
    .then(ticket => res.json(ticket))
    .catch(err => res.status(404).json({ noticketound: 'No Ticket found' }));
});

// @route POST api/ticket
// @description add/save ticket
// @access Public
router.post('/', async (req, res) => {
  Ticket.create(req.body)
    .then(ticket => res.json({ msg: 'Ticket added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this ticket' }));
});

router.put('/metammaskConnected/:id', async (req, res) => {
  Ticket.updateOne({ '_id': req.params.id }, { $set: { "metamaskConnected": req.body.metamaskConnected } }).then(res => console.log(res))
})

router.put('/wrap/:id', async (req, res) => {
  Ticket.updateOne({ '_id': req.params.id }, { $set: { "xDaiBalance": req.body.xDaiBalance, "wrappedXDaiBalance": req.body.wrappedXDaiBalance, } }).then(res => console.log(res))
})

module.exports = router;