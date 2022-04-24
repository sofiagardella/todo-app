import { Component,} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})



export class AppComponent {
  title = 'todo-app';
  todoArray: string[] = []



  addTodo(value: any){
    if(value!==""){
     this.todoArray.push(value) 
  }
  else{
    alert('Field required **')
  }
    
  }

  deleteItem(todo: string){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }


todoSubmit(value:any){
  if(value!==""){
 this.todoArray.push(value.todo)
//  this.todoForm.reset()
 }else{
   alert('Field required **')
 }
 
}

}
