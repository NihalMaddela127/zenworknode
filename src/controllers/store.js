import { fetchStoreById, fetchAllStore, insertStore, updateStoreById } from '../repository';

const getStore = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await fetchStoreById(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const getStoresByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const data = await fetchAllStore(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const createStore = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await insertStore(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const updateStore = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await updateStoreById(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

module.exports = {
  getStore,
  getStoresByUser,
  createStore,
  updateStore
};
