// function getName(name){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(name)
//         },1000);
//     })
//     return promise;
// }

// getName('ksrao').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("errr");
// })



// find emplyee object
let emps = [
    {eno:1,name:'suresh',address:'chennai'},
    {eno:2,name:'utkarsh',address:'chennai'},
    {eno:3,name:'varun',address:'chennai'},
]

// function getEmployee(id){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let emp = emps.find((e)=>{
//               return  id === e.eno;
//             });
//             resolve(emp)
//         },1000);
//     });
//     return promise;
// }

// getEmployee(1).then((emp)=>{
//     console.log(emp);
// }).catch((err)=>{
//     console.log(err);
// });

function filterByName(name){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let filterEmp =   emps.filter((e)=>{
                return e.name.includes(name);
            });
            resolve(filterEmp);
        },5000);
        
    });
    return promise;
}

filterByName('v').then((emp)=>{
    console.log(emp);
}).catch((err)=>{
    console.log(err);
})