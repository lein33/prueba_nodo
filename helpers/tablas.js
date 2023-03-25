const f = require('fs');

const colors = require('colors')
const crearTabla = async(num = 5,listar=false) =>{
    try {
        let tabla='';
        if(listar){
            for(let i=1; i<=10;i++){
                console.log(`${num} ${colors.red('x')} ${i} ${colors.blue('=')} ${num*i}`);
                tabla += `${num} x ${i} = ${num*i}\n`;
            }
        }else{
            for(let i=1; i<=10;i++){
                tabla += `${num} x ${i} = ${num*i}\n`;
            
            }
        }
        f.writeFileSync(`tabla-${num}.txt`, tabla);
    
        return `tabla de ${num}`
    } catch (error) {
        throw `no se pudo crear la tabla`
    }
    }    
module.exports = {
    crearTabla
}; 