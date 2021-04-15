<template>
  <div>
    <HeadInner menu="Tentang Kami" />

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="8">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3 class="text-center">Staf Pengajar</h3>
                    <b-row>
                      <b-col md="12">
                        <b-form-input
                          type="search"
                          class="search-list left big"
                          v-model="search"
                          placeholder="Cari staf pengajar dan bidangnya"
                          v-on:keyup.enter="searchStaff"
                        ></b-form-input>
                        <div class="sort d-none">
                          <label for="">Filter berdasarkan</label>
                          <b-form-select v-model="sort">
                            <option>Semua Divisi</option>
                            <option>Kardiologi Klinik</option>
                            <option>
                              Kardiologi Non-Invasif Ekokardiografi dan
                              Treadmill
                            </option>
                          </b-form-select>
                        </div>
                        <div class="clearfix"></div>
                        <b-row>
                          <b-col
                            md="6"
                            v-for="data in dataStaff"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <h6>{{ data.divisi }}</h6>
                            </div>
                          </b-col>
                          <b-col md="12" class="text-center">
                            <b-link
                              @click="loadStaff()"
                              class="btn btn-outline-black d-inline-block mx-auto mt-5"
                              v-if="!compare"
                            >
                              Tampilkan lebih banyak
                              <img src="/angle-down-black.png" alt="" />
                            </b-link>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
                <b-col md="4">
                  <NavTentang />
                </b-col>
              </b-row>
            </div>
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
        "Tentang Staf Pengajar | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Tentang Staf Pengajar | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Tentang Staf Pengajar | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "description",
          name: "description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular"
        }
      ]
    };
  },
  data() {
    return {
      sort: "",
      search: "",
      current_page: 1,
      last_page: 0,
      dataStaff: [],
      items: [
        {
          text: "Beranda",
          href: "/"
        },
        {
          text: "Tentang Kami",
          href: "/tentang"
        },
        {
          text: "Staf Pengajar",
          active: true
        }
      ]
    };
  },
  mounted() {
    this.getStaff();
  },
  computed: {
    compare() {
      return this.current_page >= this.last_page;
    }
  },
  methods: {
    async getStaff() {
      let tempStaff = await this.$axios.$get(
        `/staff-pengajar?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataStaff.push.apply(this.dataStaff, tempStaff.data.data);
      this.last_page = tempStaff.data.last_page;
    },
    async loadStaff() {
      this.current_page += 1;
      let tempStaff = await this.$axios.$get(
        `/staff-pengajar?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataStaff.push.apply(this.dataStaff, tempStaff.data.data);
      this.last_page = tempStaff.data.last_page;
    },
    async searchStaff() {
      this.dataStaff = [];
      this.current_page = 1;
      let tempStaff = await this.$axios.$get(
        `/staff-pengajar?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataStaff.push.apply(this.dataStaff, tempStaff.data.data);
      this.last_page = tempStaff.data.last_page;
    }
  }
};
</script>
