<template>
  <div class="md:flex justify-around items-center h-screen w-2/3 mx-auto">
    <form class="bg-neutral/25 shadow-md rounded-lg md:w-1/3 w-full h-1/2 p-10 flex flex-col justify-around">
      <h2 class="text-4xl text-secundary font-bold text-center">Registrar Presença</h2>
      <div class="space-y-4">
        <label for="name" class="text-xl text-white-700">Nome</label>
        <input type="text" id="name" v-model="name"
          class="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full" />
        <div>
          <label class="text-xl text-white-700">Horário Atual
            <input type="checkbox" id="currentTime" v-model="isCurrentTime" />
          </label>
          <input v-if="!isCurrentTime" type="text" id="manualTime" v-model="manualTime"
            class="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full mt-4" />
        </div>
      </div>
      <button @click="submitForm" class="bg-blue-500 text-white text-xl py-2 px-4 rounded-md hover:bg-blue-700 w-full">
        Registrar
      </button>
    </form>
    <div class="flex flex-col justify-between items-center">
      <h1 class="text-4xl text-secundary font-light text-center mb-10">o evento acabará em:</h1>
      <Coldown />
      <div class="divider"></div>
      <Stats />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      isCurrentTime: true,
      manualTime: "",
    };
  },
  methods: {
    submitForm() {
      const data = {
        name: this.name,
        isCurrentTime: this.isCurrentTime,
        manualTime: this.manualTime,
      };

      axios.post('http://localhost:8000/api/visitors', data)
        .then(response => {
          console.log("Resposta do servidor:", response.data);
        })
        .catch(error => {
          console.error('Erro ao enviar o formulário:', error);
        });
    },
  },
};
</script>
