# calculator

PROJECT DEMO LINK: https://drive.google.com/file/d/14y-ij56nKlt3eGPi5SxbRH4f7ov32h_5/view?usp=share_link

Requirement:
We are building a backend calculator, where we can create an instance of a calculator and can
perform certain mathematical operations (Addition, Subtraction, Division, and Multiplication) on
the current number/ result, and also we should be able to undo our operations, and reset the
calculator instance, It should be implemented without using any persistent database storage.
To accomplish this, we will be needing 4 APIs
- POST : init calculator to perform operation on 2 numbers and initialize the calculator
- POST : operation to perform operation on created result
- PUT : undo to perform undo and get last performed result
- GET : reset to reset the calculator
Ex:
Step: 1: POST: api.com/init
- Params: {

operator: ‘add’
num1: 3
num2: 4
}
- Response:
{
result: 7,
totalOps: 1,
Id: 123
}

Step: 2: POST: api.com/operation
- Params: {

operator: ‘add’,
num: 2,
Id: 123
}
- Response:
{
result: 9,
totalOps: 2,
Id: 123
}

Step: 3:PUT: api.com/undo
- Params:
{
id: 123
}
- Response:
{
result: 7,
totalOps: 1
}
Step: 4:GET: api.com/reset
- Params:
{
id: 123
}
- Response:
{
success: true,
message: calculator 123 is now reset
}
