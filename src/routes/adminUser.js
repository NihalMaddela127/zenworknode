const express = require('express');
const router = express.Router();
import { getAdminUser, createAdminUser, updateAdminUser } from '../controllers';

router.get('/getAdminUser', getAdminUser);
router.post('/createAdminUser', createAdminUser);
router.put('/updateAdminUser', updateAdminUser);

// error handler
router.use((err, req, res, next) => {
if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
    }
});

module.exports = router;
