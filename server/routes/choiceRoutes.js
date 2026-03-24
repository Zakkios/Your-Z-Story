const express = require('express');
const router = express.Router();

const {
    getWelcomeMessage,
    getEnemy,
    makeChoice
} = require('../controllers/choiceController');

router.get('/', getWelcomeMessage);
router.get('/enemy', getEnemy);
router.post('/choice', makeChoice);

module.exports = router;