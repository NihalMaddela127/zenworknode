const express = require('express');
const router = express.Router();
import { getSubUser, createSubUser, updateSubUser } from '../controllers';

router.get('/getSubUser', getSubUser);
router.post('/createSubUser', createSubUser);
router.put('/updateSubUser', updateSubUser);

// error handler
router.use((err, req, res, next) => {
if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
    }
});

module.exports = router;