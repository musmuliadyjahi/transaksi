<template>
  <div>
    <div class="form-group">
      <label for="">Menu</label>
      <select
        @change="$emit('selectedMenu', $event.target.value)"
        class="form-control"
      >
        <option value="">Pilih Menu</option>
        <option v-for="menu in listMenu" :key="menu.name" :value="menu.name">
          {{ menu.name }} - {{ menu.price }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    listMenu() {
      return this.$store.state.menu.listMenu
    }
  },
  methods: {
    selectedMenu(val) {
      this.menu = val
    }
  }
}
</script>
