const express = require('express');
const router = express.Router();
import { getProduct, getAllProduct, createProduct, updateProduct } from '../controllers';

router.get('/getProduct', getProduct);
router.get('/getAllProduct', getAllProduct);
router.post('/createProduct', createProduct);
router.put('/updateProduct', updateProduct);

// error handler
router.use((err, req, res, next) => {
if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
    }
});

module.exports = router;
