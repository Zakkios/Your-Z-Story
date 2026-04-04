import { Hono } from 'hono';
import { gameState, makeChoice } from '../controllers/gameController.js';

const router = new Hono();

router.get('/chapter/:chapterId/scene/:sceneId', gameState);
router.post('/choice', makeChoice);

export default router;
