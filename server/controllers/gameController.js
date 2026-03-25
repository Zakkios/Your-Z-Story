import gameData from '../data/gameData.js';

export const getScene = (req, res) => {
    const { chapterId, sceneId } = req.params;
    const chapter = gameData.chapters[chapterId];

    if (!chapter) {
        return res.status(404).json({ error: 'Chapter not found' });
    }
    const scene = chapter.scenes[sceneId];

    if (!scene) {
        return res.status(404).json({ error: 'Scene not found' });
    }
    return res.json(scene);
}

export const makeChoice = (req, res) => {
    const { choice } = req.body;
    // Logique de traitement du choix
    console.log(`Choice made: ${choice}`);
    // Pour l'instant, on retourne une réponse générique
    return res.json({ message: 'Choice received', choice });
}