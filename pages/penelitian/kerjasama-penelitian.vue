<template>
  <div>
    <HeadInner menu="Penelitian Kerjasama Penelitian" />

    <NavPenelitian />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3 class="text-center">Kerjasama Penelitian</h3>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- <div class="content-inner gray-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-form-input
              type="search"
              class="search-list left big"
              v-model="search"
              placeholder="Cari Kerjasama Penelitian"
              v-on:keyup.enter="searchKP"
            ></b-form-input>
            <div class="sort d-none">
              <label for="">Filter berdasarkan</label>
              <b-form-select v-model="sort">
                <option>Semua Divisi</option>
                <option>Kardiologi Klinik</option>
                <option>
                  Kardiologi Non-Invasif Ekokardiografi dan Treadmill
                </option>
              </b-form-select>
            </div>
            <div class="clearfix"></div>
            <b-row>
              <b-col md="6" v-for="data in dataKP" :key="data.id">
                <div class="kp-wrap">
                  <h5>{{ data.judul }}</h5>
                  <h6> <vue-markdown>{{ data.konten }}</vue-markdown></h6>
                </div>
              </b-col>
              <b-col md="12" class="text-center">
                <b-link @click="loadKP()" 
                  class="btn btn-outline-black d-inline-block mx-auto mt-5"
                  v-if="!compare"
                >
                  Tampilkan lebih banyak
                  <img src="/angle-down-black.png" alt="">
                </b-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div> -->
    <div class="content-inner">
      <b-container>
        <b-row>
          
          <b-col md="8" offset-md="2" v-for="data in dataKP" :key="data.id">
                
                  <h5>{{ data.judul }}</h5>
                  <h6> <vue-markdown>{{ data.konten }}</vue-markdown></h6>
                
              </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Kerjasama Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Kerjasama Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Kerjasama Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'keywords', name: 'keywords', content: 'Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'description', name: 'description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
        { hid: 'og:description', name: 'og:description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
      ]
    }
  },
  data() {
    return {
      sort: "",
      search: "",
      current_page: 1,
      last_page: 0,
      dataKP: [],
    };
  },
  mounted() {
    this.getKP()
  },
  computed: {
    compare(){
      return this.current_page >= this.last_page
    }
  },
  methods: {
    async getKP() {
      let tempKP = await this.$axios.$get(`/kerjasama-penelitian?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataKP.push.apply(this.dataKP, tempKP.data.data)
      this.last_page = tempKP.data.last_page
    },
    async loadKP() {
      this.current_page += 1
      let tempKP = await this.$axios.$get(`/kerjasama-penelitian?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataKP.push.apply(this.dataKP, tempKP.data.data)
      this.last_page = tempKP.data.last_page
    },
    async searchKP() {
      this.dataKP = []
      this.current_page = 1
      let tempKP = await this.$axios.$get(`/kerjasama-penelitian?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataKP.push.apply(this.dataKP, tempKP.data.data)
      this.last_page = tempKP.data.last_page
    },
  },
}
</script>