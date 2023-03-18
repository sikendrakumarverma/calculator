let id = "1234"
let obj = {};
obj[id] = []

let count = 0;
let undoCount = 0;

const initialiseCal = async function (req, res) {
    try {
        let sum = obj[id]
        const data = req.query;
        const { operator, num1, num2 } = data
        let val1 = parseInt(num1)
        let val2 = parseInt(num2)

        if (sum.length >= 1) {
            return res.status(400).send({ message: "Already initialise Please do operation" });
        }

        let results;
        count = 0;
        if (operator === 'add') {
            results = val1 + val2;
            sum.push(results)
        }
        if (operator == 'sub') {
            results = val1 - val2;
            sum.push(results)
        }
        if (operator == 'mul') {
            results = val1 * val2;
            sum.push(results)
        }
        if (operator == 'div') {
            results = val1 / val2;
            sum.push(results)
        }
        count++;
        undoCount = 0;
        console.log(obj, sum)
        return res.status(200).send({ result: results, totalops: count, Id: id });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

};

const operation = async function (req, res) {
    try {

        const data = req.query;
        const { operator, num, Id } = data
        let num1 = parseInt(num)
        let sumPrev = obj[Id]
        let results;

        if (sumPrev.length == 0) {
            return res.status(400).send({ message: "Please initialise and than do operation" });
        }

        if (operator === 'add') {
            results = sumPrev[sumPrev.length - 1] + num1;
            obj[Id].push(results)
        }
        if (operator == 'sub') {
            results = sumPrev[sumPrev.length - 1] - num1;
            sumPrev.push(results)
        }
        if (operator == 'mul') {
            results = sumPrev[sumPrev.length - 1] * num1;
            sumPrev.push(results)
        }
        if (operator == 'div') {
            results = sumPrev[sumPrev.length - 1] / num1;
            sumPrev.push(results)
        }
        count++;
        console.log(obj, sumPrev)
        return res.status(200).send({ result: results, totalops: count, Id: Id });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

};

const undo = async function (req, res) {
    try {

        const data = req.query;
        const { Id } = data

        let sumPrev = obj[Id]
        if (sumPrev.length == 0) {
            return res.status(400).send({ message: "Nothing for undo Please initialise and do some operation and than undo" });
        }

        undoCount++;
        console.log(obj, sumPrev)
        return res.status(200).send({ result: sumPrev.pop(), totalops: undoCount });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

};

const reset = async function (req, res) {
    try {

        const data = req.query;
        const { Id } = data

        obj[Id] = []
        count = 0;
        undoCount = 0;
        console.log(obj)
        return res.status(200).send({ success: true, message: `calculator ${Id} is reset successfull` });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

};

module.exports = { initialiseCal, operation, undo, reset };