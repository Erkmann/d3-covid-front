<template>
  <div class="">
    <div class="row text-center">
      <div class="col-12">
        <h1 class="text-shadow text-dark">
          Prever os casos de COVID para quantos dias?
        </h1>
      </div>
    </div>

    <form @submit.prevent="submit">
      <div class="row text-center align-content-center mt-3">
		  <div class="col-md-3 col-sm-12"></div>
        <div class="col-md-4 col-sm-12 text-right form-group">
          <input
            class="form-control"
            :class="errorDia ? 'error' : ''"
            id="dias"
            placeholder="Ex: 4"
            type="text"
            v-model="dias"
          />
        </div>
        <div class="col-md-4 col-sm-12 text-center text-md-left">
          <input type="submit" class="btn btn-primary shadow" value="Prever!" />
        </div>
      </div>
    </form>

    <div v-if="response !== null" class="row mt-md-4 mt-4">
		<div class="col-md-2 col-sm-12"></div>
      <div class="col-sm-12 col-md-8">
        <line-chart :chart-data="response" :options="options"></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "~/components/charts/LineChart";

export default {
  data() {
    return {
      dias: null,
      errorDia: false,
      response: null,
      options: {
        responsive: true,
      },
    };
  },
  components: { LineChart },
  methods: {
    async submit() {
      if (this.dias === null) {
        this.$toast.error("Nao pode estar Vazio!");
        this.errorDia = true;
      } else if (!parseInt(this.dias) > 0) {
        this.$toast.error("Nao pode ser menor ou igual a 0!");
        this.errorDia = true;
      } else {
        this.$toast.success("Enviado");
        this.errorDia = false;

        await this.$axios.get("predict/" + this.dias + "/").then((response) => {
          this.fillData(response.data);
        });
      }
    },
    fillData(data) {
      let dataSet = [];
      let labels = [];

      data.forEach((previsao) => {
        dataSet.push(previsao.casos);
        labels.push(previsao.dia);
      });

      let dataComplete = [
        {
          label: "Casos",
          fill: true,
          data: dataSet,
          backgroundColor: "rgba(75, 192, 300,.5)",
          tension: 0.5,
          borderColor: "rgb(75, 192, 500)",
          color: "rgb(0, 0, 0)",
        },
      ];

      this.response = {
        labels: labels,
        datasets: dataComplete,
      };
    },
  },
};
</script>

<style  scoped>
</style>

