<template>
  <div class="">
    <div class="row">
      <h1 class="font-weight-bold text-shadow">
        Quer prever os casos de COVID para quantos dias?
      </h1>
    </div>
    <div class="row text-cemter ml-2">
      <form @submit.prevent="submit">
        <input
          class="input_bottom"
          :class="errorDia ? 'error' : ''"
          id="dias"
          placeholder="Ex: 4"
          type="text"
          v-model="dias"
        />
        <input
          type="submit"
          class="btn btn-primary shadow ml-5"
          value="Prever!"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dias: null,
      errorDia: false,
    };
  },
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
          console.log(response.data);
        });
      }
    },
  },
};
</script>

<style  scoped>
</style>

