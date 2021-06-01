<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/" class="">Predict Covid</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mt-md-0 mt-1">
          <b-button @click="opeGitHub" pill variant="primary border shadow"><b-icon icon="github" /> Erkmann</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
	methods: {
		opeGitHub() {
			window.open("https://github.com/Erkmann", "_blank")
		}
	}
}
</script>
