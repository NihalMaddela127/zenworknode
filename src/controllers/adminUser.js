import { fetchAdminUserByName, insertAdminUser, updateAdminUserById } from '../repository';

const getAdminUser = async (req, res) => {
    try {
        const email = req.params.email;
        const password = req.params.pwd;
        const data = await fetchAdminUserByName(email, password);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

const createAdminUser = async (req, res) => {
    try {
        const payload = req.body;
        const data = await insertAdminUser(payload);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

const updateAdminUser = async (req, res) => {
    try {
        const payload = req.body;
        const data = await updateAdminUserByName(payload);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

module.exports = {
  getAdminUser,
  createAdminUser,
  updateAdminUser
};
