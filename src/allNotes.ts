let url='https://cdn.jsdelivr.net/gh/wa5/practise-delete/abc-test.pdf'
let base=`https://cdn.jsdelivr.net/gh/`
let urlBulder=`${base}`
import {data} from './data'

export const allNotes={
    all:()=>{
        return [url]
    },
    student:(name:string)=>{
        let info=data[0].students.find((val)=>{return val.studentName===name})
        let exurlBulder=`${urlBulder}/${info?.gitHub}/${info?.repo}/${info?.fileName}`
        return {fileurl:exurlBulder,studentInfo:info}
    }


}
console.log(allNotes.all())