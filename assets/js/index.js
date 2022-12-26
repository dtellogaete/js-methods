/*Arreglo de datos*/
const tasks = [];

/* Actualizar Tarea  */
const doTask= (task_id) =>{
    let index = tasks.findIndex(e => e.id == task_id);
    if(tasks[index].status == false){
        tasks[index].status = true;
    }
    updateList();    
}

/* Add Task*/
const addTask = () =>{
    let input = document.querySelector("#input_task").value;
    let cont = 0;
    if (tasks.length > 0){
        cont =tasks.at(-1).id;    
    }    
    if(input){       
        tasks.push({
            "id":cont+1,
            "description": input,
            "status": false,
        },)
        updateList();           
    } else{
        alert("Ingresa una tarea por favor");
    }
    
    document.querySelector("#total_task").innerHTML = tasks.length;
}

/* Actualizar Listado de Tareas */
const updateList = () =>{
    let html = '';
    let task_table = document.querySelector("#task_list");
    let task_ready = document.querySelector("#task_ready");
    let cont = 0;
    for (let task of tasks){
        if(task.status == true){
            cont++;
        }
        html +=`
        <tr>
            <th scope="row">${task.id}</th>
            <td>${task.description}</td>
            <td>
                <button type="button" class="btn btn-${task.status ?'success': 'warning'}" onclick="doTask(${task.id})">${task.status ?'Lista': 'Hacer'}</button>
            </td>
            <td>
                <button type="button" class="btn btn-danger" onclick="deleteTask(${task.id})">Eliminar</button>
            </td>
        </tr>
    `;
    }
    task_table.innerHTML = html;
    task_ready.innerHTML = cont;
    document.querySelector("#total_task").innerHTML = tasks.length;    
}

/* Eliminar Tarea */
const deleteTask = (task_id) =>{
    let index = tasks.findIndex(e => e.id == task_id);
    tasks.splice(index, 1);    
    updateList();
}
