# node-crud-api
CRUD Operation API using Nodejs, MongoDB and Express
The project is runs in port 8080, if you want to change it you can change it on app.js
## To start the project run 
>node app.js

The API created in this project are as follow:-

### Test API
**Method**: GET

**URL**: localhost:8080/products/test

**RESPONSE**:
Greetings from the Test controller!

-------------------------------------------------------------------------------------------------------------------

### Create New Product
**Method**: POST

**URL**: localhost:8080/products/create

Query Params Body urlencoded
name   apple
price  15

**RESPONSE**:
Product Created Successfully


-----------------------------------------------------------------------------------------------------------------------
### View Detail of Single Product
**Method**: GET

**URL**: localhost:8080/products/64aba208dfc6a2bfc1b022a0

**RESPONSE**:
{
    "_id": "64aba208dfc6a2bfc1b022a0",
    "name": "apple",
    "price": 15,
    "__v": 0
}


-----------------------------------------------------------------------------------------------------------------------------
### Update a Product
**Method**: PUT

**URL**: localhost:8080/products/64aba32250d7a312efec8be9/update

urlencoded
name    apple
price   33

**RESPONSE**:
Product udpated.

---------------------------------------------------------------------------------------------------------------------

### View All Products
**Method**: GET

**URL**: localhost:8080/products/all

**RESPONSE**:
```[
    {
        "_id": "64aba208dfc6a2bfc1b022a0",
        "name": "apple",
        "price": 15,
        "__v": 0
    },
    {
        "_id": "64aba2fedfc6a2bfc1b022a2",
        "name": "orange",
        "price": 19,
        "__v": 0
    },
    {
        "_id": "64aba32250d7a312efec8be9",
        "name": "strwaberyy",
        "price": 20,
        "__v": 0
    },
    {
        "_id": "64abab78fe95e57d5dcd3c1e",
        "name": "Jack Fruit",
        "price": 25,
        "__v": 0
    },
    {
        "_id": "64b7d00565571f8802992623",
        "name": "Jack Fruit",
        "price": 25,
        "__v": 0
    },
    {
        "_id": "64b8b9a4aa7a8a7496f80723",
        "name": "Grape",
        "price": 50,
        "__v": 0
    }
]
