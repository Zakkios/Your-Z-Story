import express from 'express';
import { gameState, makeChoice } from '../controllers/gameController.js';

const router = express.Router();

router.get('/chapter/:chapterId/scene/:sceneId', gameState);
router.post('/choice', makeChoice);

export default router;