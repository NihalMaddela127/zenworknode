import { fetchSubUserById, fetchAllSubUser, insertSubUser, updateSubUserById } from '../repository';

const getSubUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await fetchSubUserById(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const getAllSubUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await fetchAllSubUser(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const createSubUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await insertSubUser(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

const updateSubUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await updateSubUserById(userId);
        res.send({ data });
    } catch (err) {
        return res.boom.badRequest(err);
    }
};

module.exports = {
  getSubUser,
  getAllSubUser,
  createSubUser,
  updateSubUser
};
