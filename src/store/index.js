import { createStore } from "vuex";
import userModules from "./user.modules";

export default createStore({
    state:{
        firstName:"Chris",
        lastName:"Dasan",
        favorites:[]
    },
    mutations:{
        UPDATE_FAVOURATES(state,payload) {
            state.favorites = payload;
        }
    },
    actions:{
        addToFavorites(context,payload) {
            const favorites = context.state.favorites;
            favorites.push(payload);
            context.commit('UPDATE_FAVOURATES', favorites);
        }
    },
    getters:{
        fullName: function (state) {
            return `${state.firstName} ${state.lastName}`
          }

       
    },
    modules:{
        user:userModules
    }

})