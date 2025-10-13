<template>
  <div
    v-if="character && character[0]"
    class="w-full flex justify-center items-center gap-15"
  >
    <img
      v-if="character['0']?.image"
      class="w-[350px] mt-30 rounded-2xl shadow-xl/50 shadow-indigo-700/80"
      :src="character['0'].image"
      alt=""
    />

    <img
      v-else
      class="w-[350px] mt-30 rounded-2xl shadow-xl/50 shadow-indigo-700/80p"
      src="@/assets/images/chapeu.webp"
      alt="Champeu Misterioso"
    />

    <div class="flex flex-col justify-center items-center gap-2">
      <h1 class="m-8 text-gray-300 mt-10 text-7xl text-center">
        {{ character["0"].name }}
      </h1>

      <div class="flex gap-3">
        <div class="items-center w-sm bg-gray-200 rounded-lg shadow sm:flex">
          <div class="p-5">
            <h3 class="text-xl font-bold tracking-tight text-gray-900 mb-2">
              <a href="#">Nascimento</a>
            </h3>

            <a
              v-if="character['0'].dateOfBirth"
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button border rounded-lg"
            >
              {{ character["0"].dateOfBirth }}
            </a>

            <a
              v-else
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button border rounded-lg"
            >
              Sem registro
            </a>
          </div>
        </div>

        <div class="items-center w-sm bg-gray-200 rounded-lg shadow sm:flex">
          <div class="p-5">
            <h3 class="text-xl font-bold tracking-tight text-gray-900 mb-2">
              <a href="#">Status</a>
            </h3>

            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button border rounded-lg"
            >
              {{ character["0"].alive ? "Vivo" : "Morto" }}
            </a>

            <a
              v-if="character['0'].hogwartsStudent"
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button border rounded-lg"
            >
              Estudante
            </a>

            <a
              v-if="character['0'].hogwartsStaff"
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button border rounded-lg"
            >
              Funcionario
            </a>

            <a
              v-if="character['0'].wizard"
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button border rounded-lg"
            >
              Bruxo
            </a>
          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <div class="items-center w-sm bg-gray-200 rounded-lg shadow sm:flex">
          <div class="p-5">
            <h3 class="text-xl mb-4 font-bold tracking-tight text-gray-900">
              <a href="#">Varinha</a>
            </h3>

            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li>
                <span class="font-semibold text-gray-900">Madeira:</span>
                {{ character["0"].wand.wood }}
              </li>
              <li>
                <span class="font-semibold text-gray-900">Essencial:</span>
                {{ character["0"].wand.core }}
              </li>
              <li>
                <span class="font-semibold text-gray-900">Comprimento:</span>
                {{ character["0"].wand.length }}
              </li>
            </ul>
          </div>
        </div>

        <div class="items-center w-sm bg-gray-200 rounded-lg shadow sm:flex">
          <div class="p-5">
            <h3 class="text-xl mb-4 font-bold tracking-tight text-gray-900">
              <a href="#">Sobre</a>
            </h3>

            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li>
                <span class="font-semibold text-gray-900">Casa:</span>
                {{ character["0"].house }}
              </li>
              <li>
                <span class="font-semibold text-gray-900">Espécie:</span>
                {{ character["0"].species }}
              </li>
              <li>
                <span class="font-semibold text-gray-900">Ancestralidade:</span>
                {{ character["0"].ancestry }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";

export default {
  name: "Details",

  data() {
    return {};
  },

  mounted() {
    const id = this.$route.params.id;
    console.log(id);

    this.$store.dispatch("loadCharacter", id);
  },

  created() {
    //invocando uma action
  },

  computed: mapState([
    // como o nome é o mesmo que o do state, podemos passar somente a string
    "character",
  ]),
};
</script>
