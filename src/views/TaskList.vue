<template>
    <div class="taskList">
        <task-item 
			v-for="task in tasks"
			:task='task' 
			:key='task.id'>
        </task-item>
    </div>
</template>

<script>

import TaskItem from "./TaskItem.vue"
export default {
    name: "TaskList",
	 components: {
			TaskItem
		},
	data() {
        return {
            editId: '',
            editBody: ''
        }
    },
    computed: {
        tasks () {
            return this.$store.getters.getTaskList
        }
    },
	methods: {
		 removeTask(uuid) {
			this.$store.dispatch('deleteTask,uuid')
        	},
      changeTask() {
           		 this.editId = task.uuid;
          		  this.editBody = this.task.body
       		 },

        	disableEditing() {
           		 this.editBody = '',
            		this.editId = ''
      	 	 },
        
        	saveEdit(){
            		this.editBody = this.task.body
            		this.disableEditing() 
        	},
	}
}

</script>
