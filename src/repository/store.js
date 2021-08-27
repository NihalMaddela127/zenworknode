import { client } from '../db/config'

let db = client.db('ecom');

const fetchStoreById = async (payload) => {
    try {
        const data = '';
        return data;
    } catch (err) {
        //   Log.error('store --> fetchStoreById --> exception -->', err.message, err);
        throw err;
    }
};

const fetchAllStore = async (userId) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('store');
            const data = await collection.find({userId: userId}).toArray();
            return data;
        }
    } catch (err) {
        //   Log.error('store --> fetchStoreById --> exception -->', err.message, err);
        throw err;
    }
};

const insertStore = async (payload) => {
    try {
        const data = '';
        return data;
    } catch (err) {
        //   Log.error('store --> fetchStoreById --> exception -->', err.message, err);
        throw err;
    }
};

const updateStoreById = async (payload) => {
    try {
        const data = '';
        return data;
    } catch (err) {
        //   Log.error('store --> fetchStoreById --> exception -->', err.message, err);
        throw err;
    }
};

module.exports = {
  fetchStoreById,
  fetchAllStore,
  insertStore,
  updateStoreById
};
