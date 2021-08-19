var app = new function(){
    this.element= document.getElementById('tareas');
    this.tareas=[];

    this.mostrarTodo = function(){
        var data = '';
        console.log(tareas);

        if(this.tareas.length>0){
            for(i=0; i<this.tareas.length; i++){
                data+='<tr>';
                data+='<td>'+(i+1)+'. '+this.tareas[i]+'</td>';
                data+='<td><button onclick="app.editar('+i+')" class="btn btn-warning"> Editar </button> </td>';
                data+='<td><button onclick="app.eliminar('+i+')" class="btn btn-danger"> Borrar </button> </td>';
                data+='</tr>'
            }
        }
        this.contar(this.tareas.length);
        return this.element.innerHTML = data
    };

    this.agregar = function(){
        element = document.getElementById('agregar-hacer');
        var tarea = element.value;
        if(tarea){
            this.tareas.push(tarea.trim());
            element.value='';
            this.mostrarTodo();
        }

    };

    this.editar = function (item){
        element = document.getElementById('editar-hacer');
        element.value =this.tareas[item]
        document.getElementById('editar').style.display = "block";
        self=this;

        document.getElementById('guardar-edit').onsubmit = function(){
            var tarea = element.value;
            if(tarea){
                self.tareas.splice(item, 1, tarea.trim());

                self.mostrarTodo();
                CloseInput();
            }

        }
    };

    this.eliminar = function(item){
        this.tareas.splice(item, 1);
        this.mostrarTodo();

    };

    this.contar = function(dato){
        var element = document.getElementById('contador');
        var name = 'tareas';
        if(dato){
            if (dato == 1){
                name = 'tarea';
            }
            element.innerHTML = 'Tengo '+ dato+' '+name;
        } else {
            element.innerHTML = "No hay " + name;
        }

    };

}

app.mostrarTodo();

function CloseInput(){
    document.getElementById('editar').style.display ="none";
}