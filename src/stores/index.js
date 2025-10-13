import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    //sao os dados
    state: {
        characters: [],
        character: [],
    },
    mutations: {

        loadAllCharacters(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadAllGryffindor(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadAllSlytherin(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadAllRavenclaw(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadAllHuffepuff(state, characters) {
            //a mutation altera o state
            state.characters = characters;
        },

        loadCharacter(state, character) {
            //a mutation altera o state
            state.character = character;
        },


    },
    actions: {


        loadCharacter({ commit }, character) {

            axios.get(`https://hp-api.onrender.com/api/character/${character}`)
                .then(function (response) {

                    // a action invoca o mutation
                    commit('loadCharacter', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })

        },


        loadAllCharacters({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters')
                .then(function (response) {

                    // a action invoca o mutation
                    commit('loadAllCharacters', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        loadAllGryffindor({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters/house/gryffindor')
                .then(function (response) {

                    // a action invoca o mutation
                    commit('loadAllGryffindor', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        loadAllSlytherin({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters/house/Slytherin')
                .then(function (response) {

                    // a action invoca o mutation
                    commit('loadAllSlytherin', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        loadAllRavenclaw({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters/house/Ravenclaw')
                .then(function (response) {

                    // a action invoca o mutation
                    commit('loadAllRavenclaw', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })
        },

        loadAllHuffepuff({ commit }) {

            axios.get('https://hp-api.onrender.com/api/characters/house/Huffepuff')
                .then(function (response) {

                    // a action invoca o mutation
                    commit('loadAllHuffepuff', response.data) //seria o mutation

                })
                .catch(function (error) {
                    console.log(error);
                })
        },



    },
    modules: {
    }
})
