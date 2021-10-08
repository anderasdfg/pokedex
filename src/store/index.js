import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
    state: {
        pokemons: [],
        favorite: {},
    },
    mutations: {
        setPokemons(state, payload) {
            state.pokemons = payload;
        },
        setFavorite(state, payload) {
            state.favorite[payload.url] = payload;
        },
        removeFavorite(state, payload) {
            delete state.favorite[payload.url]
        },
        setLimit(state, payload) {
            state.limit = payload.value;
        }
    },
    actions: {
        async fetchData({ commit }) {
            await axios.get(`/pokemon?limit=1118`).then(res => {
                    const data = res.data.results;
                    commit('setPokemons', data)
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addFavorite({ commit, state }, pokemon) {
            if (pokemon.isFavorite) {
                pokemon.isFavorite = false;
                commit('removeFavorite', pokemon)
            } else {
                pokemon.isFavorite = true;
                commit('setFavorite', pokemon)
            }

        }
    },
    modules: {}
})