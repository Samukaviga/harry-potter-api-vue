<template>
  <div class="flex flex-col items-center">
    <h1 class="m-8 text-yellow-300 mt-10 text-8xl text-center">Mundo Mágico</h1>
    <p class="text-yellow-100 text-2xl px-2 text-center">
      Descrubra os personagens iconicos de Harry Potter e suas casas em Hogwarts
    </p>

    <div class="mt-20">
      <h2 class="text-5xl text-gray-200 text-center">Filtrar por casa</h2>

      <div class="mt-8 flex flex-wrap gap-10 justify-center">
        <button
          @click="$store.dispatch('loadAllCharacters')"
          class="bg-button text-gray-200 text-2xl py-2 px-5 border border-violet-100 rounded-2xl"
        >
          Todas as casas
        </button>
        <button
          @click="$store.dispatch('loadAllGryffindor')"
          class="bg-button text-gray-200 text-2xl py-2 px-5 border border-violet-100 rounded-2xl"
        >
          Grifinória
        </button>
        <button
          @click="$store.dispatch('loadAllSlytherin')"
          class="bg-button text-gray-200 text-2xl py-2 px-5 border border-violet-100 rounded-2xl"
        >
          Sonserina
        </button>
        <button
          @click="$store.dispatch('loadAllRavenclaw')"
          class="bg-button text-gray-200 text-2xl py-2 px-5 border border-violet-100 rounded-2xl"
        >
          Corvinal
        </button>
        <button
          @click="$store.dispatch('loadAllHuffepuff')"
          class="bg-button text-gray-200 text-2xl py-2 px-5 border border-violet-100 rounded-2xl"
        >
          Lufa-Lufa
        </button>
      </div>
    </div>

    <div class="border-t-1 border-white w-[70%] mt-10"></div>

    <div class="container px-2 flex flex-wrap justify-center mt-5 mb-10 gap-5">
      <!-- CARD -->
      <div
        v-for="(character, index) in characters"
        :key="index"
        class="w-90 bg-card border border-gray-200 hover:border-violet-500 rounded-lg shadow-sm transition-all hover:scale-105"
      >
        <router-link :to="{ name: 'Details', params: { id: character.id } }">
          <img
            v-if="character.image"
            class="rounded-t-lg w-full h-100 object-cover object-top"
            :src="character.image"
            alt=""
          />

          <img
            v-else
            class="rounded-t-lg w-full h-100 object-cover object-top"
            src="@/assets/images/chapeu.webp"
            alt="Champeu Misterioso"
          />
        </router-link>
        <div class="p-5">
          <h5 class="mb-2 text-2xl text-gray-200">{{ character.name }}</h5>

          <p class="py-2 mb-3 text-2xl text-pink-300">{{ character.house }}</p>

          <p class="mb-3 font-normal text-gray-500"></p>

          <div class="flex gap-2">
            <ItemStatus v-if="character.hogwartsStudent" name="Estudante" />

            <ItemStatus v-if="character.hogwartsStaff" name="Funcionario" />

            <ItemStatus :name="character.alive ? 'Vivo' : 'Morto'" />
          </div>
        </div>
      </div>
      <!-- END CARD -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { mapState } from "vuex";
import ItemStatus from "@/components/ui/ItemStatus.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {};
  },

  created() {
    //invocando uma action
    this.$store.dispatch("loadAllCharacters");
  },

  components: {
    ItemStatus,
  },

  computed: {
    ...mapState([
      // como o nome é o mesmo que o do state, podemos passar somente a string
      "characters",
    ]),
  },

  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },
});
</script>

<style>
.bg-button {
  background-color: #461a6e;
  transition: 0.2s;
}

.bg-button:hover {
  background-color: #e1cff2;
  color: #351157;
  font-weight: bold;
}

.bg-card {
  background-color: #2a0d46;
}
</style>
