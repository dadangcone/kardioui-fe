<template>
  <div>
    <HeadInner menu="Tentang Kami" />

    <NavTentang />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3 class="text-center">Alumni</h3>
            <!-- <p>Comming Soon</p> -->
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="content-inner gray-wrap form-list">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-form-input
              type="search"
              class="search-list left big"
              v-model="search"
              placeholder="Cari Alumni"
              v-on:keyup.enter="searchAlumni"
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
              <b-col md="12">
                <div class="alumni-wrap" v-for="data in dataAlumni" :key="data.id">
                  <h3>{{ data.tahun_lulus }}</h3>
                  <h6>Jumlah lulusan {{ data.list_alumni.data.length }}</h6>
                  <div class="clearfix"></div>
                  <hr />
                  <ul class="alumni-item">
                    <li v-for="alu in data.list_alumni.data" :key="alu.id">
                      {{ alu.nama_alumni }}
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col md="12" class="text-center">
                <b-link @click="loadAlumni()" 
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
        "Tentang Alumni | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Tentang Alumni | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Tentang Alumni | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
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
      dataAlumni: [],
    };
  },
  mounted() {
    this.getAlumni()
  },
  computed: {
    compare(){
      return this.current_page >= this.last_page
    }
  },
  methods: {
    async getAlumni() {
      let tempAlumni = await this.$axios.$get(`/alumni?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataAlumni.push.apply(this.dataAlumni, tempAlumni.data.data)
      this.last_page = tempAlumni.data.last_page
    },
    async loadAlumni() {
      this.current_page += 1
      let tempAlumni = await this.$axios.$get(`/alumni?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataAlumni.push.apply(this.dataAlumni, tempAlumni.data.data)
      this.last_page = tempAlumni.data.last_page
    },
    async searchAlumni() {
      this.dataAlumni = []
      this.current_page = 1
      let tempAlumni = await this.$axios.$get(`/alumni?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataAlumni.push.apply(this.dataAlumni, tempAlumni.data.data)
      this.last_page = tempAlumni.data.last_page
    },
  },
};
</script>