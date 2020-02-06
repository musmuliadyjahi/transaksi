<template>
  <div class="container">
    <div>
      <Menu />
      <Clients />
      <Transaksi />
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Clients from '~/components/Clients.vue'
import Transaksi from '~/components/Transaksi.vue'

export default {
  components: {
    Menu,
    Clients,
    Transaksi
  },
  data() {
    return {
      menu: '',
      clients: '',
      jumlah: ''
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style></style>
