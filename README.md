# calculator

You are required to develop an application in NodeJs, and host it in Github private repo.
Problem: Calculator
Ideal Time: 2-4 hrs.
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
How you will be scored
1. Correctness, we should be able to perform all operations and application should behave
as expected.
2. Code is modular, clean and extensible.
3. Include test cases (if you feel).
4. Include API contract/documentation, maybe a postman collection.
Deliverables:
1. Create NodeJs standalone application.
2. Host on github private repo.
3. Invite “rvdfox” as collaborator.
4. Inform the team. ( satvik@azgo.app / ravi.verma@azgo.app )
