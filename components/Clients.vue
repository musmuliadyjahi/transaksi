<template>
  <div>
    <div class="form-group">
      <label for="">Nama Pembeli</label>
      <select
        @change="$emit('selectedPembeli', $event.target.value)"
        class="form-control"
      >
        <option value="">Pembeli</option>
        <option v-for="row in listPembeli" :key="row.id" :value="row.id">
          {{ row.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    listPembeli() {
      return this.$store.state.clients.listPembeli
    }
  },
  methods: {
    selectedPembeli(val) {
      this.clients = val
    }
  }
}
</script>
