import axios from 'axios'


interface TODO {
    id : number,
    title: string
    completed: boolean
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
axios.get(url).then(res => {
    const Data = res.data as TODO
    const id= Data.id;
    const title = Data.title;
    const finished = Data.completed;
    
    logTodo(id, title, finished)


})


function logTodo(id: number, title:string, comp:boolean){
    console.log("🚀 ~ axios.get ~ Data:", id, title, comp)


}