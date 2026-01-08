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

          const houseMap = {
            Gryffindor: 'Grifinória',
            Slytherin: 'Sonserina',
            Ravenclaw: 'Corvinal',
            Hufflepuff: 'Lufa-Lufa',
          }

          const formatted = response.data.map(item => ({
            ...item,
            dateOfBirth: item.dateOfBirth
              ? item.dateOfBirth.split('-').reverse().join('/')
              : null,
            house: houseMap[item.house] ?? item.house,
          }))

          // a action invoca o mutation
          commit('loadCharacter', formatted)

        })
        .catch(function (error) {
          console.log(error);
        })

    },


    loadAllCharacters({ commit }) {

      axios.get('https://hp-api.onrender.com/api/characters')
        .then(function (response) {

          const houseMap = {
            Gryffindor: 'Grifinória',
            Slytherin: 'Sonserina',
            Ravenclaw: 'Corvinal',
            Hufflepuff: 'Lufa-Lufa',
          }

          const formatted = response.data.map(item => ({
            ...item,
            house: houseMap[item.house] ?? item.house,
          }))

          // a action invoca o mutation
          commit('loadAllCharacters', formatted) //seria o mutation

        })
        .catch(function (error) {
          console.log(error);
        })

    },

    loadAllGryffindor({ commit }) {

      axios.get('https://hp-api.onrender.com/api/characters/house/gryffindor')
        .then(function (response) {

          response.data.forEach(function (item) {
            if (item.house == 'Gryffindor') { item.house = 'Grifinória' }
          });

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

          response.data.forEach(function (item) {
            if (item.house == 'Slytherin') { item.house = 'Sonserina' }
          });

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

          response.data.forEach(function (item) {

            if (item.house == 'Ravenclaw') { item.house = 'Corvinal' }

          });

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

          response.data.forEach(function (item) {

            if (item.house == 'Huffepuff') { item.house = 'Lufa-Lufa' }

          });

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
