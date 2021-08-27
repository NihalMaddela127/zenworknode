import { client } from '../db/config'

let db = client.db('ecom');

const fetchAdminUserByName = async (email, password) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('admin_user');
            const data = await collection.find({email, password}).toArray();
            return data;
        }
    } catch (err) {
        //   Log.error('adminUser --> fetchAdminUserByName --> exception -->', err.message, err);
        throw err;
    }
};

const insertAdminUser = async (payload) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('admin_user');
            const data = await collection.insertOne(payload);
            return data.insertedId;
        }
    } catch (err) {
        //   Log.error('adminUser --> insertAdminUser --> exception -->', err.message, err);
        throw err;
    }
};

const updateAdminUserByName = async ({userId, password}) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('admin_user');
            await collection.updateOne({userId}, { $set: {password} });
            return true;
        }
    } catch (err) {
        //   Log.error('adminUser --> updateAdminUserByName --> exception -->', err.message, err);
        throw err;
    }
};

module.exports = {
  fetchAdminUserByName,
  insertAdminUser,
  updateAdminUserByName
};
