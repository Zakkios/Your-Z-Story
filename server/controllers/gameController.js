import gameData from '../data/gameData.js';

export const gameState = (c) => {
    const { chapterId, sceneId } = c.req.param();
    const chapter = gameData.chapters[chapterId];

    if (!chapter) {
        return c.json({ error: 'Chapter not found' }, 404);
    }

    const scene = chapter.scenes[sceneId] || chapter.scenes[chapter.startSceneId];

    if (!scene) {
        return c.json({ error: 'Scene not found' }, 404);
    }

    return c.json(scene);
};

export const makeChoice = async (c) => {
    const choice = await c.req.json();
    const chapter = gameData.chapters[choice.chapterId];

    if (!chapter) {
        return c.json({ error: 'Chapter not found' }, 404);
    }

    const newScene = chapter.scenes[choice.sceneId];

    if (!newScene) {
        return c.json({ error: 'Next scene not found' }, 404);
    }

    return c.json(newScene);
};
