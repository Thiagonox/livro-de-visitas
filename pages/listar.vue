<template>
    <div class="overflow-x-auto w-11/12 mx-auto">
      <table class="table text-xl mt-28">
        <thead class="text-2xl">
          <tr>
            <th>Nome</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in people" :key="index" class="hover:bg-slate-600">
            <td>
              <div class="font-bold">{{ person.name }}</div>
            </td>
            <td>
              <div class="text-lg opacity-50">{{ person.date }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        people: [],
      };
    },
    mounted() {
      // Chame a API com Axios e atualize a lista de pessoas
      axios.get('http://localhost:8000/api/visitors')
        .then(response => {
          this.people = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar os dados da API:', error);
        });
    },
  };
  </script>
    
  <style scoped>
  /* Adicione estilos CSS adicionais aqui, se necessário */
  </style>
  