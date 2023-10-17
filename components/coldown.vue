<template>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': days }"></span>
        </span>
        days
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': hours }"></span>
        </span>
        hours
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': minutes }"></span>
        </span>
        min
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': seconds }"></span>
        </span>
        sec
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        targetDate: new Date('2023-10-17T18:30:00'), // Defina a data alvo
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    },
    methods: {
      updateCountdown() {
        const now = new Date();
        const timeDifference = this.targetDate - now;
        if (timeDifference > 0) {
          this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        }
      },
    },
    created() {
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000); // Atualiza a contagem a cada segundo
    },
  };
  </script>
  