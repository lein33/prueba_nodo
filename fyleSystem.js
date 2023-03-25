const f = require('fs')
const num = 5
let tabla =''
for(let i=1;i<=10;i++){
    tabla +=`${num} x ${i} = ${num*i}\n`;
}
f.writeFile(`tabla-${num}.txt`,tabla, (err)=>{
    if(err) throw err
    console.log("Se creo tabla del " + num);
});
