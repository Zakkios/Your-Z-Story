const { enemy } = require('../data/gameData');

const getWelcomeMessage = (req, res) => {
    res.json({ message: 'Bienvenue dans Your Dragon Story API' });
};

const getEnemy = (req, res) => {
    return res.json({ enemy });
};

const makeChoice = (req, res) => {
    const { choice } = req.body;

    switch (choice) {
        case 'fight':
            return res.json({
                status: 'lose',
                text: 'Tu affrontes l’ennemi et tu perds.'
            });

        case 'run':
            return res.json({
                status: 'win',
                text: 'Tu prends la fuite et tu survis.'
            });

        default:
            return res.json({
                status: 'error',
                text: 'Choix invalide.'
            });
    }
};

module.exports = {
    getWelcomeMessage,
    getEnemy,
    makeChoice
};