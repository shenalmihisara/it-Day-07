// const customerList=[];

// customerList.push(1);
// customerList.push(2);
// customerList.push(3);
// customerList.push(4);

// console.log(customerList);

// let revCustomerList=customerList.reverse();
// console.log(revCustomerList);


// const products = [
//     {name: "bun", inStock: true},
//     {name: "car", inStock: false},
//     {name: "bat", inStock: true},
//     {name: "van", inStock: false}
// ]


// let inStockItems = products.filter(
//     function(products) {
//         return productFilter(product)
//     }
// ) 

// function productFilter(product){
//     return product.inStock == true;
// }

// console.log(inStockItems);

// step 01 ---------------------
// function getSum(num1,num2) {
//     return num1+num2
// }

// getSum(10,20);

//step  02----------------------

// let getSum = function(num1,num2){
//     return num1+num2;
// }
// console.log(getSum(10,20));

//step 03-----------------------

// let getSum = (num1,num2) => {
//     return num1+num2;
// }
// console.log(getSum(10,20));

//step 04-------------------------


// let sample = textValue => {
//     return textValue;
// }
// console.log(sample("hi saman"));

//step 05--------------------------


// let getSum = (num1, num2) => num1 + num2;

// console.log(getSum(10,20));


// step 06---------------------------

// let sample = txtValue => txtValue;

// console.log("hi saman");

// let inStockItems = products.filter(product => product.inStock == false);

// const productsList = [
//     {name: "bun", inStock: true},
//     {name: "car", inStock: false},
//     {name: "bat", inStock: true},
//     {name: "van", inStock: false}
// ]

// // for(product of productsList){
// //     console.log(product);
// // }

// productsList.forEach(product => console.log(product));

// const letterList = ["B","A","D","C"];

// let sortAr = letterList.toSorted();

// console.log(sortAr);

// const employeeSalary = [45000,75000,100000,150000];

// let newSalaryArry = employeeSalary.map(salary => salary*2);

// console.log(newSalaryArry);

// const studentList = [
//     {id:"001",name:"Saman"},
//     {id:"002",name:"Kamal"},
//     {id:"003",name:"Amal"},
//     {id:"004",name:"Ranil"}
// ];

// let student = studentList.find(student => student.id==="003")

// console.log(student);

// fetch("/customer.json").then(res=>res.json()).then(data=>{
//     console.log(data);
    
// })

fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>{
    console.log(data);

    let tblTodoList = document.getElementById("tblTodoList");

    let body=""

    data.forEach(element => {
        body+= `
                <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.userId}</td>
            <td>${element.completed}</td>
        </tr>
        `
    });

    tblTodoList.innerHTML=body;

})