export default {
    namespaced:true,
    state:{
        firstName:"Jason",
        lastName:"Chris"
    },
    getters:{
        fullName:function(state){
            return `${state.firstName} ${state.lastName}`
        }
    }
}