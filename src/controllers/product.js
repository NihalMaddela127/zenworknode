import { fetchProductById, fetchAllProduct, insertProduct, updateProductById } from '../repository';

const getProduct = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await fetchProductById(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const getAllProduct = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await fetchAllProduct(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const createProduct = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await insertProduct(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const updateProduct = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await updateProductById(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

module.exports = {
  getProduct,
  getAllProduct,
  createProduct,
  updateProduct
};
