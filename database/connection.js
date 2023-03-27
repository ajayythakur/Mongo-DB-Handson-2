const { mongoClient, MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const insertToDB = async (data) => {
    await client.connect();
    const database = client.db("Human_Resources");
    const collection = database.collection("employee");
    const dbResponse = await collection.insertMany(data)
    await client.close();
    return dbResponse;
}
const allDocuments = async (data) => {
    await client.connect();
    const database = client.db("Human_Resources");
    const collection = database.collection("employee");
    const dbResponse = await collection.find().toArray();
    await client.close();
    return dbResponse;
}

const salaryQuery = async (data) => {

    await client.connect();
    const database = client.db("Human_Resources");
    const collection = database.collection("employee");
    const dbResponse = await collection.find(data).toArray();
    await client.close();
    return dbResponse;
}

const expQuery = async (data) => {
    await client.connect();
    const database = client.db("Human_Resources");
    const collection = database.collection("employee");
    const dbResponse = await collection.find(data).toArray();
    await client.close();
    return dbResponse;
}

const grad_expQuery = async (data) => {
    await client.connect();
    const database = client.db("Human_Resources");
    const collection = database.collection("employee");
    const dbResponse = await collection.find(data).toArray();
    await client.close();
    return dbResponse;
}

const dltQuery = async (data) => {
    await client.connect();
    const database = client.db("Human_Resources");
    const collection = database.collection("employee");
    const dbResponse = await collection.deleteMany(data);
    await client.close();
    return dbResponse;
}

module.exports = {
    insertToDB,
    allDocuments,
    salaryQuery,
    expQuery,
    grad_expQuery,
    dltQuery
}