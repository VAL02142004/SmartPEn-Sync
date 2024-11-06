const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/settings', authMiddleware, userController.getSettings);
router.post('/settings', authMiddleware, userController.updateSettings);

module.exports = router;
