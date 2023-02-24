let obj = {
    "123": []
};

let count = 0;
let undoCount = 0;
let first = 1;

const initialiseCal = async function (req, res) {
    try {
        let sum = obj[123]
        const data = req.query;
        const { operator, num1, num2 } = data
        let val1 = parseInt(num1)
        let val2 = parseInt(num2)

        let results;

        if (operator === 'add') {
            results = val1 + val2;
            sum.push(results)
            count++;
        }
        if (operator == 'sub') {
            results = val1 - val2;
            sum.push(results)
            count++;
        }
        if (operator == 'mul') {
            results = val1 * val2;
            sum.push(results)
            count++;
        }
        if (operator == 'div') {
            results = val1 / val2;
            sum.push(results)
            count++;
        }
        console.log(obj, sum)
        return res.status(200).send({ result: results, totalops: count, Id: 123 });

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
        console.log(Id, obj, sumPrev, sumPrev[sumPrev.length - 1])
        let results;

        if (operator === 'add') {
            results = sumPrev[sumPrev.length - 1] + num1;
            obj[Id].push(results)
            count++;
            undoCount = 1
        }
        if (operator == 'sub') {
            results = sumPrev[sumPrev.length - 1] - num1;
            sumPrev.push(results)
            count++;
            undoCount = 1
        }
        if (operator == 'mul') {
            results = sumPrev[sumPrev.length - 1] * num1;
            sumPrev.push(results)
            count++;
            undoCount = 1
        }
        if (operator == 'div') {
            results = sumPrev[sumPrev.length - 1] / num1;
            sumPrev.push(results)
            count++;
            undoCount = 1
        }
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
        console.log(Id, obj, sumPrev, sumPrev[sumPrev.length - 1])

        console.log(sumPrev.pop())

        if (first === 1) {
            sumPrev.pop()
            first++;
            undoCount++;
        }
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

        return res.status(200).send({ success: true, message: `calculator ${Id} is now reset` });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

};

module.exports = { initialiseCal, operation, undo, reset };