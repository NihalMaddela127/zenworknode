const express = require('express');
const router = express.Router();
import { getStore, createStore, updateStore, getStoresByUser } from '../controllers';

router.get('/getStore', getStore);
router.post('/addStore', createStore);
router.put('/updateStore', updateStore);
router.put('/getStoresByUser', getStoresByUser);

// error handler
router.use((err, req, res, next) => {
if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
    }
});

module.exports = router;