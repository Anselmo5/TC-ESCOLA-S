let tarefas = []

const addTarefa = () => {
    let tarefa = document.getElementById('tarefa').value
    
    console.log(tarefas)
    document.getElementById('tarefa').value = ""


    if(localStorage.getItem('tarefas')!= null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }
    let data = new Date();
    let date = `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;
    tarefas.push([date,tarefa])
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}
const list = () => {
    let tbody = document.querySelector('#tr-tarefas')

    if(localStorage.getItem('tarefas')!= null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    
    } else {
        tarefas.push(["Sem","dados."])
    }
   tarefas.forEach(( Element,index)=> {
        tbody.innerHTML += "<tr> <td>"+ Element[0]+"</td> <td>" + Element[1] +" <td><button onclick='delertar("+ index +")'> 🗑 Excluir <button></td> </tr>"
        
        
   
   });
}       

const delertar = (index) => {

   newArray = tarefas.filter(
        (e, i)=> i != index
    )

  localStorage.setItem('tarefas', JSON.stringify(newArray))
    document.location.reload(true)
}