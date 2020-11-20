<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3>Tentang</h3>
            <div
              class="hero-image"
              style="background-image: url('/tentang-banner.jpg')"
            ></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <NavTentang />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>PPDS</h3>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="content-inner gray-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-form-input
              type="search"
              class="search-list left big"
              v-model="search"
              placeholder="Cari PPDS"
              v-on:keyup.enter="searchPPDS"
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
              <b-col md="6" v-for="data in dataPPDS" :key="data.id">
                <div class="ppds-wrap">
                  <h5>{{ data.nama_ppds }}</h5>
                  <h6>{{ data.tanggal_masuk }}</h6>
                  <h6>{{ data.deskripsi }}</h6>
                </div>
              </b-col>
              <b-col md="12" class="text-center">
                <b-link @click="loadPPDS()" 
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
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        "Tentang PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Tentang PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Tentang PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular",
        },
      ],
    };
  },
  data() {
    return {
      sort: "",
      search: "",
      current_page: 1,
      last_page: 0,
      dataPPDS: [],
    };
  },
  mounted() {
    this.getPPDS()
  },
  computed: {
    compare(){
      return this.current_page >= this.last_page
    }
  },
  methods: {
    async getPPDS() {
      let tempPPDS = await this.$axios.$get(`/ppds?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataPPDS.push.apply(this.dataPPDS, tempPPDS.data.data)
      this.last_page = tempPPDS.data.last_page
    },
    async loadPPDS() {
      this.current_page += 1
      let tempPPDS = await this.$axios.$get(`/ppds?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataPPDS.push.apply(this.dataPPDS, tempPPDS.data.data)
      this.last_page = tempPPDS.data.last_page
    },
    async searchPPDS() {
      this.dataPPDS = []
      this.current_page = 1
      let tempPPDS = await this.$axios.$get(`/ppds?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataPPDS.push.apply(this.dataPPDS, tempPPDS.data.data)
      this.last_page = tempPPDS.data.last_page
    },
  },
};
</script>