const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue dans Your Dragon Story API' });
});

app.get('/enemy', (req, res) => {
    return res.json({
        enemy: 'Freezer'
    });
});

app.post('/choice', (req, res) => {
    const body = req.body;

    switch (body.choice) {
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
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});