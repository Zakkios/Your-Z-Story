import express from 'express';
import { getChapter, makeChoice } from '../controllers/introController.js';

const router = express.Router();

router.get('/chapter', getChapter);
router.post('/choice', makeChoice);

export default router;