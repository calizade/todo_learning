<template>
        <div class="card-text-center">
            <div class="card-header">
                <p>{{task.uuid}}</p>
            </div>
            <div class="card-body">
                <h5>{{task.email}}</h5>
                <p>{{task.username}}</p>
                <div v-if="!edit">
                    <span class='text'>{{task.body}}</span>
                    <button class="change" @click.prevent="changeTask()">Edit</button>
                </div>
                <div v-else class="bodyInput">
                    <input v-model="editBody" id="input"/>
                    <span @click="disableEditing()" class="cancel"> x </span>
                    <span @click="saveEdit()" class="save"> v </span>
                </div>
                <div id="task-list-button">
                    <button class="delete" @click.prevent="removeTask(task.uuid)">Remove</button>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    name:"TaskItem" ,
    props: [
   'task'
],
	data() {
        return {
            editBody: '',
            edit: false
         }
     },
    methods: {
		 removeTask(uuid) {
			this.$store.dispatch('deleteTask',uuid)
        	},

        	changeTask() {
           		 this.edit= true;
          		  this.editBody = this.task.body
       		 },

        	disableEditing() {
           		 this.edit = false
      	 	 },
        
        	saveEdit(){
            		this.editBody = this.task.body
            		this.disableEditing() 
        	},
	}
}

</script>
