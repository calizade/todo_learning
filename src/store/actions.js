import axios from "axios"

const actions = {
    getTasks ({ commit }) {
        axios.get(`http://127.0.0.1:3000/api/tasks`)
            .then(response => {
                commit('SET_TASKS', response.data);
            })
    },

    addTask ({commit}, task) {
        axios.post(`http://127.0.0.1:3000/api/add-task`, task)
        .then(response => {
                commit('SET_TASKS', response.data);
            });
    },

    deleteTask ({commit}, uuid) {
        axios.delete(`http://127.0.0.1:3000/api/task/${uuid}`)
        .then(response => {
                commit('SET_TASKS', response.data);
            });
    },

    editTask ({commit}, {uuid, body}) {
        axios.put(`http://127.0.0.1:3000/api/task/${uuid}`, {body})
        .then(response => {
            commit('SET_TASKS', response.data);
            });
    }
}

export default actions

