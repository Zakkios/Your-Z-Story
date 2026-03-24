import gameData from '../data/gameData.js';

export const getChapter = (req, res) => {
    return res.json(gameData.chapters.intro);
};

export const makeChoice = (req, res) => {
    const { choice } = req.body;

    try {
        const chapter = gameData.chapters.intro;

        const nextChapterId = chapter.choices.find(c => c.id === choice)?.nextId;

        if (!nextChapterId) {
            return res.status(400).json({ error: 'Invalid choice' });
        }

        return res.json({ nextChapterId });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while processing the choice' });
    }
};
