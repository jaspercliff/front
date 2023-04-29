import {defineStore} from "pinia";

export const useCountStore = defineStore('count', {
    state: () => {
        return {
            count: 0,
            name:'jasper'
        }
    },
    actions: {
        increment(){
            this.count++
        }
    },
    getters: {
        doubleCount: (state) => {
            return state.count * 2
        },
        doubleCountPlusOne: (state) => {
            return state.doubleCount + 1
        },
    }
})