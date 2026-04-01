import gameData from '../data/gameData.js';

export const gameState = (req, res) => {
    const { chapterId, sceneId } = req.params;
    const chapter = gameData.chapters[chapterId];

    if (!chapter) {
        return res.status(404).json({ error: 'Chapter not found' });
    }

    const scene = chapter.scenes[sceneId] || chapter.scenes[chapter.startSceneId];

    if (!scene) {
        return res.status(404).json({ error: 'Scene not found' });
    }
    return res.json(scene);
}

export const makeChoice = (req, res) => {
    const choice = req.body;
    const newScene = gameData.chapters[choice.chapterId].scenes[choice.sceneId];

    if (!newScene) {
        return res.status(404).json({ error: 'Next scene not found' });
    }

    return res.json(newScene);
}