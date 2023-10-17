<template>
    <div class="stats shadow">
      <div class="stat place-items-center">
        <div class="stat-title">Visitantes por Minuto</div>
        <div class="stat-value">{{ visitorsPerMinute }}</div>
        <div class="stat-desc">Desde o primeiro visitante até agora</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Visitantes Totais</div>
        <div class="stat-value text-secondary">{{ totalVisitors }}</div>
        <div class="stat-desc text-secondary">{{ totalVisitorsChange }}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Últimas 3 Horas</div>
        <div class="stat-value">{{ last3HoursVisitors }}</div>
        <div class="stat-desc">{{ last3HoursChange }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        totalVisitors: 0,
        last3HoursVisitors: 0,
        visitorsPerMinute: 0,
        totalVisitorsChange: "",
        last3HoursChange: "",
      };
    },
    mounted() {
      axios.get('http://localhost:8000/api/visitors')
        .then(response => {
          const visitors = response.data;
          const now = new Date();
          const threeHoursAgo = new Date(now - 3 * 60 * 60 * 1000);
          this.last3HoursVisitors = visitors.filter(visitor => new Date(visitor.date) >= threeHoursAgo).length;
  
          // Total de visitantes
          this.totalVisitors = visitors.length;
  
          // Cálculo do percentual de aumento ou queda
          const last3HoursChangePercent = this.calculateChangePercentage(this.last3HoursVisitors, visitors.length);
          const totalVisitorsChangePercent = this.calculateChangePercentage(visitors.length, visitors.length);
  
          this.last3HoursChange = last3HoursChangePercent >= 0 ? `↗︎ ${last3HoursChangePercent}%` : `↘︎ ${Math.abs(last3HoursChangePercent)}%`;
          this.totalVisitorsChange = totalVisitorsChangePercent >= 0 ? `↗︎ ${totalVisitorsChangePercent}%` : `↘︎ ${Math.abs(totalVisitorsChangePercent)}%`;
  
          // Cálculo de Visitantes por Minuto
          const firstVisitorDate = new Date(visitors[0].date);
          const elapsedTime = (now - firstVisitorDate) / (60 * 1000); // em minutos
          this.visitorsPerMinute = (visitors.length / elapsedTime).toFixed(2); // Arredonda para duas casas decimais
        })
        .catch(error => {
          console.error('Erro ao buscar os dados da API:', error);
        });
    },
    methods: {
      calculateChangePercentage(newValue, oldValue) {
        return ((newValue - oldValue) / oldValue) * 100;
      },
    },
  };
  </script>
  