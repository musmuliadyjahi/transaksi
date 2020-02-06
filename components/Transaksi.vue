<template>
  <div class="table-responsive">
    <table class="table table-hover table-bordered">
      <thead>
        <div class="form-group">
          <button
            class="btn btn-primary btn-sm"
            @click="submitOrderan"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Loading...' : 'Tambah' }}
          </button>
        </div>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Pesanan</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in listTransaksi" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.menu }}</td>
          <td>{{ row.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('transaksi', {
      listTransaksi: (state) => state.listTransaksi
    })
  },
  methods: {
    submitOrderan() {
      this.$store.dispatch('transaksi/save_orderan', {
        id: Math.random()
          .toString(36)
          .substring(7),
        menu: this.menu,
        pembeli: this.clients,
        jumlah: this.jumlah
      })
    }
  }
}
</script>
