<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Add Task</router-link>
            <router-link to="/task-list">Tasks</router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: "App",
    methods: {
        createTask(task) {
            this.tasks.push(task)
        }
    },
    beforeCreate () {
        this.$store.dispatch('getTasks');
    },
}
</script>

<style>
    @import "./assets/main.css";
</style>
