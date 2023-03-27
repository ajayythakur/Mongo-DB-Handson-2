const mongoClient = require("../database/connection");
const employeeDetails = async (req, res) => {

    const employeeData = req.body;
    try {
        const result = await mongoClient.insertToDB(employeeData);
        console.log("Employee Deatils are =>", result);
        res.status(200).send(result);
    }
    catch (error) {
        console.log("Something is wrong in Database Operator");
        res.status(500).send({ message: "Something is wrong in Database operator" });
    }
}

const allDocuments = async (req, res) => {
    const query = req.body;
    try {
        const result = await mongoClient.allDocuments(query);
        console.log("Employee Deatils are =>", result);
        res.status(200).send(result);
    }
    catch (error) {
        console.log("Something went wrong in db operator");
        res.status(500).send({ message: "Something went wrong in db operator" });
    }
}

const salaryQuery = async (req, res) => {
    const query = { salary: { $gt: "30000" } };
    console.log(query)
    // const filter=query.filter;
    // console.log(filter);
    // const value=query.value;
    // console.log(value);
    try {
        const result = await mongoClient.salaryQuery(query);
        console.log("Employee Deatils are =>", result);
        res.status(200).send(result);
    }
    catch (error) {
        console.log("Something went wrong in db operator", error);
        res.status(500).send({ message: "Something went wrong in db operator" });
    }
}

const expQuery = async (req, res) => {
    const query = { overallExp: { $gte: "2" } }
    try {
        const result = await mongoClient.expQuery(query);
        console.log("Employee Deatils are =>", result);
        res.status(200).send(result);
    }
    catch {
        console.log("Something went wrong in db operator", error);
        res.status(500).send({ message: "Something went wrong in db operator" });
    }
}
const grad_expQuery = async (req, res) => {
    const query = ({ yearGrad: { $gt: "2015" } } && { overallExp: { $gt: "1" } });
    try {
        const result = await mongoClient.grad_expQuery(query);
        console.log("Employee Deatils are =>", result);
        res.status(200).send(result);
    }
    catch {
        console.log("Something went wrong in db operator", error);
        res.status(500).send({ message: "Something went wrong in db operator" });
    }
}

const dltQuery = async (req, res) => {
    const query = ({ lastCompany: "Y" });
    try {
        const result = await mongoClient.dltQuery(query);
        console.log("Employee Deatils are =>", result);
        res.status(200).send(result);
    }
    catch {
        console.log("Something went wrong in db operator", error);
        res.status(500).send({ message: "Something went wrong in db operator" });
    }
}


module.exports = { employeeDetails, allDocuments, salaryQuery, expQuery, grad_expQuery, dltQuery };