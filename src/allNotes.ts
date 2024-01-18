let url = 'https://cdn.jsdelivr.net/gh/wa5/practise-delete/abc-test.pdf'
let base = `https://cdn.jsdelivr.net/gh`
let urlBulder = `${base}`
import { data } from './data'

export const allNotes = {
    all: () => {
        return [url]
    },



}
export const students = {
    first: (name: string) => {
        let info = data[0].students.find((val) => { return val.studentName === name })
        let exurlBulder = `${urlBulder}/${info?.gitHub}/${info?.repo}/${info?.fileName}`
        return { fileurl: exurlBulder, studentInfo: info }
    },
    allNotes: (name: string) => {
        let info = data[0].students.filter((val) => { return val.studentName === name })
        let added = info.map((val) => {
            let exurlBulder = `${urlBulder}/${val?.gitHub}/${val?.repo}/${val?.fileName}`
            return { ...val, fileUrl: exurlBulder }
        })
        return added
    },
}
