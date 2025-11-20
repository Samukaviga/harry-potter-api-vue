<template>
  <div
    v-if="character && character[0]"
    class="w-full flex flex-col md:flex-row justify-center items-center gap-15"
  >
    <img
      v-if="character['0']?.image"
      class="w-[350px] mt-30 rounded-2xl shadow-xl/50 shadow-indigo-700/80 transition-all hover:scale-105"
      :src="character['0'].image"
      alt=""
    />

    <img
      v-else
      class="w-[350px] mt-30 rounded-2xl shadow-xl/50 shadow-indigo-700/80p transition-all hover:scale-105"
      src="@/assets/images/chapeu.webp"
      alt="Champeu Misterioso"
    />

    <div class="flex flex-col justify-center items-center gap-2">
      <h1 class="m-8 text-gray-300 mt-10 text-7xl text-center">
        {{ character["0"].name }}
      </h1>

      <div class="flex flex-col md:flex-row gap-3">
        <CardDetails title="Nascimento">
          <ItemStatus
            v-if="character['0'].dateOfBirth"
            :name="character['0'].dateOfBirth"
          />

          <ItemStatus v-else name="Sem Registro" />
        </CardDetails>

        <CardDetails title="Status">
          <ItemStatus :name="character['0'].alive ? 'Vivo' : 'Morto'" />

          <ItemStatus v-if="character['0'].hogwartsStudent" name="Estudante" />

          <ItemStatus v-if="character['0'].hogwartsStaff" name="Funcionario" />

          <ItemStatus v-if="character['0'].wizard" name="Bruxo" />
        </CardDetails>
      </div>

      <div class="flex flex-col md:flex-row gap-3">
        <CardDetails title="Varinha">
          <ul
            class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
          >
            <ItemList name="Madeira" :value="character['0'].wand.wood" />

            <ItemList name="Essencial" :value="character['0'].wand.core" />

            <ItemList name="Comprimento" :value="character['0'].wand.length" />
          </ul>
        </CardDetails>

        <CardDetails title="Sobre">
          <ul
            class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
          >
            <ItemList name="Casa" :value="character['0'].house" />

            <ItemList name="Espécie" :value="character['0'].species" />

            <ItemList name="Ancestralidade" :value="character['0'].ancestry" />
          </ul>
        </CardDetails>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardDetails from "@/components/Details/CardDetails.vue";
import ItemList from "@/components/Details/ItemList.vue";
import ItemStatus from "@/components/ui/ItemStatus.vue";
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

  components: {
    ItemStatus,
    ItemList,
    CardDetails,
  },

  computed: mapState([
    // como o nome é o mesmo que o do state, podemos passar somente a string
    "character",
  ]),
};
</script>
