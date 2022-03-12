<template>
    <div class="task-form" @submit.prevent>
        <p class="error" v-if="errors.length">
            <b>Please correct the following ERROR(S):</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>

        <div id="form" action="#">
            <div class="form1">
                <div class="username">
                    <label class="form-label" for="username">
                        Username
                    </label>

                    <input  
                        class="input"
                        id="username"
                        type="text"
                        v-model="task.username"
                    >
                </div>
            </div>

            <div class="form2">
                <div class="email">
                    <label class="form-label" for="email">
                        Email
                    </label>
                    <input
                        class="input"
                        id="email"
                        type="text"
                        v-model="task.email"
                    >
                </div>
            </div>

            <div class="form3">
                <div class="text-of-task">
                    <label class="form-label" for="text-of-task">Text of Task</label>
                    <div class="textarea">
                        <textarea
                            class="input"
                            id="text-of-task"
                            type="text"
                            v-model="task.body"
                        >
                        </textarea>
                    </div>
                </div>
            </div>
            <div class="form-btn">
                <button class="btn-submit" @click="createTask">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default
{
    name: "TaskForm",
    data() {
        return {
            errors: [],
            task: {
                username: '',
                email: '',
                body: ''
            },
            taskTemplate: {...this.task},
        }
    },
    methods: {
        createTask() {
            this.errors = [];
            var mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if(!this.task.email.match(mailRegex)) {
                this.errors.push('Требуется указать email address.');
            }

            if (this.task.body == "") {
                this.errors.push('Требуется указать body.');
            }

            if (this.task.username == "") {
                this.errors.push('Требуется указать username.');
            }

            if(this.task.email.match(mailRegex) && this.task.body && this.task.username) {
                this.$store.dispatch('addTask', this.task)
                this.task = {...this.taskTemplate}
                this.$router.push('/task-list')
            }
        },
    }
}

</script>
