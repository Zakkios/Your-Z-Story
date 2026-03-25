import express from 'express';
import { getScene, makeChoice } from '../controllers/gameController.js';

const router = express.Router();

router.get('/chapter/:chapterId/scene/:sceneId', getScene);
router.post('/choice', makeChoice);

export default router;