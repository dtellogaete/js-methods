# Todo List

![Todo List](/assets/img/img.png "Todo List")

La página puede verse en: [https://dtellogaete.github.io/js-methods/](https://dtellogaete.github.io/js-methods/)

El código en JavaScript está ubicado en [/assets/js/index.js](/assets/js/index.js).

El arreglo donde están ubicadas las tareas se llama `tasks` y cada objeto `task` tiene las siguientes caracteristicas:
* `id`: identificador de la tarea.
* `description`: descripción de la tarea.
* `status`: true: la tarea está realizada; false: en caso contrario.

Las funciones Javascript son las siguientes:
* `updateList()`: Actualiza el arreglo con las tareas (`tasks`) y por ende la tabla de las tareas.
* `addTask()`: Agrega una nueva tarea al arreglo `tasks` y ejecuta la función `updateList()`.
* `doTask(task_id)`: Actualiza la variable `status` de false a true a partir de su `id` y ejecuta la función `updateList()`.
* `deleteTask(task_id)`: Elimina del arreglo una tarea a partir de su `id` y ejecuta la función `updateList()`.
