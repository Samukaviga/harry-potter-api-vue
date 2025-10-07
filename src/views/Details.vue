<template>
  <div class="w-full flex justify-center items-center gap-15">
    <img
      class="max-w-2xl mt-30 rounded-2xl shadow-xl/50 shadow-indigo-700/80"
      src="../assets/images/harry-potter.webp"
      alt=""
    />

    <div class="flex flex-col justify-center items-center gap-2">
      <h1 class="m-8 text-gray-300 mt-10 text-7xl text-center">Harry Potter</h1>

      <div class="flex gap-3">
        <div class="items-center w-sm bg-gray-200 rounded-lg shadow sm:flex">
          <div class="p-5">
            <h3 class="text-xl font-bold tracking-tight text-gray-900">
              <a href="#">Nascimento</a>
            </h3>
            <p class="mt-3 mb-4 font-light text-gray-500">18/12/2000</p>
          </div>
        </div>

        <div class="items-center w-sm bg-gray-200 rounded-lg shadow sm:flex">
          <div class="p-5">
            <h3 class="text-xl font-bold tracking-tight text-gray-900">
              <a href="#">Status</a>
            </h3>
            <p class="mt-3 mb-4 font-light text-gray-500">Vivo</p>
          </div>
        </div>
      </div>

      <div class="items-center w-full bg-gray-200 rounded-lg shadow sm:flex">
        <div class="p-5">
          <h3 class="text-xl mb-4 font-bold tracking-tight text-gray-900">
            <a href="#">Informações Magicas</a>
          </h3>

          <h2 class="my-2 tracking-tight text-gray-800">Varinha:</h2>

          <ul
            class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
          >
            <li><span class="font-semibold text-gray-900">Madeira</span> Holly</li>
            <li>
              <span class="font-semibold text-gray-900">Core:</span> phoenix tail feather
            </li>
            <li><span class="font-semibold text-gray-900">length:</span> 11</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Details",
};
</script>
