// a=[{
//     name:"ashima"
// },
// {
//     age:"ashhh"
// }]
// for (let el of a)
// {
//     console.log(el)
//     for(let i in el){
//         console.log(i)
//     }
// }

 var a=[{name:"ash",
location:{
    city:"jammu",
    pincode:180001
}}]
for (var i of a){
    console.log(i)
    for (var j in i){
        console.log(typeof i[j])
        if(typeof i[j]=='object'){
            for (var k in i[j]){
                if(k=="city")
                console.log(i[j][k])

            }
        }
    }
  }
  

