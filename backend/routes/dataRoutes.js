const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from router');
});

module.exports = router; // router をエクスポート
