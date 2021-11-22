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
                          placeholder="Cari staf pengajar"
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
                        <span v-if="dataStaff.length === 0"
                          >Hasil Pencarian Tidak ditemukan..</span
                        >
                        <b-row v-else>
                          <b-col cols="12" v-if="dataStaff['Aritmia']">
                            <h5 class="mb-3">Aritmia</h5></b-col
                          >
                          <b-col
                            md="6"
                            v-for="data in dataStaff.Aritmia"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <!-- <h6>{{ data.divisi }}</h6> -->
                            </div>
                          </b-col>
                          <b-col
                            cols="12"
                            v-if="
                              dataStaff[
                                'Kardiologi Intensif dan Kegawatan Kardiovaskular'
                              ]
                            "
                          >
                            <h5 class="mb-3 mt-3">
                              Kardiologi Intensif dan Kegawatan Kardiovaskular
                            </h5></b-col
                          >
                          <b-col
                            md="6"
                            v-for="data in dataStaff[
                              'Kardiologi Intensif dan Kegawatan Kardiovaskular'
                            ]"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <!-- <h6>{{ data.divisi }}</h6> -->
                            </div>
                          </b-col>
                          <b-col
                            cols="12"
                            v-if="
                              dataStaff[
                                'Kardiologi Invasif dan Intervensi Non bedah'
                              ]
                            "
                          >
                            <h5 class="mb-3 mt-3">
                              Kardiologi Invasif dan Intervensi Non bedah
                            </h5></b-col
                          >
                          <b-col
                            md="6"
                            v-for="data in dataStaff[
                              'Kardiologi Invasif dan Intervensi Non bedah'
                            ]"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <!-- <h6>{{ data.divisi }}</h6> -->
                            </div>
                          </b-col>
                          <b-col
                            cols="12"
                            v-if="dataStaff['Kardiologi Klinik']"
                          >
                            <h5 class="mb-3 mt-3">
                              Kardiologi Klinik
                            </h5></b-col
                          >
                          <b-col
                            md="6"
                            v-for="data in dataStaff['Kardiologi Klinik']"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <!-- <h6>{{ data.divisi }}</h6> -->
                            </div>
                          </b-col>
                          <b-col
                            cols="12"
                            v-if="
                              dataStaff[
                                'Kardiologi Non-Invasif Ekokardiografi dan Treadmill'
                              ]
                            "
                          >
                            <h5 class="mb-3 mt-3">
                              Kardiologi Non-Invasif Ekokardiografi dan
                              Treadmill
                            </h5></b-col
                          >
                          <b-col
                            md="6"
                            v-for="data in dataStaff[
                              'Kardiologi Non-Invasif Ekokardiografi dan Treadmill'
                            ]"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <!-- <h6>{{ data.divisi }}</h6> -->
                            </div>
                          </b-col>
                          <b-col
                            cols="12"
                            v-if="
                              dataStaff[
                                'Kardiologi Pediatrik dan Penyakit Jantung Bawaan'
                              ]
                            "
                          >
                            <h5 class="mb-3 mt-3">
                              Kardiologi Pediatrik dan Penyakit Jantung Bawaan
                            </h5></b-col
                          >
                          <b-col
                            md="6"
                            v-for="data in dataStaff[
                              'Kardiologi Pediatrik dan Penyakit Jantung Bawaan'
                            ]"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <!-- <h6>{{ data.divisi }}</h6> -->
                            </div>
                          </b-col>
                          <b-col
                            cols="12"
                            v-if="dataStaff['Kedokteran Vaskular']"
                          >
                            <h5 class="mb-3 mt-3">
                              Kedokteran Vaskular
                            </h5></b-col
                          >
                          <b-col
                            md="6"
                            v-for="data in dataStaff['Kedokteran Vaskular']"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <!-- <h6>{{ data.divisi }}</h6> -->
                            </div>
                          </b-col>
                          <b-col
                            cols="12"
                            v-if="
                              dataStaff[
                                'Prevensi dan Rehabilitasi Kardiovaskular'
                              ]
                            "
                          >
                            <h5 class="mb-3 mt-3">
                              Prevensi dan Rehabilitasi Kardiovaskular
                            </h5></b-col
                          >
                          <b-col
                            md="6"
                            v-for="data in dataStaff[
                              'Prevensi dan Rehabilitasi Kardiovaskular'
                            ]"
                            :key="data.id"
                          >
                            <div class="staf-wrap">
                              <h3>{{ data.nama_pengajar }}</h3>
                              <!-- <h6>{{ data.divisi }}</h6> -->
                            </div>
                          </b-col>
                          <!-- <b-col md="12" class="text-center">
                            <b-link
                              @click="loadStaff()"
                              class="btn btn-outline-black d-inline-block mx-auto mt-5"
                              v-if="!compare"
                            >
                              Tampilkan lebih banyak
                              <img src="/angle-down-black.png" alt="" />
                            </b-link>
                          </b-col> -->
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
      listWatch: false,
      sourceCancel: null,
      current_page: 1,
      last_page: 0,
      dataStaff: {},
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
  watch: {
    search: {
      handler() {
        if (this.listWatch) {
          this.sourceCancel.cancel();
          this.getStaff();
        }
      },
      deep: true
    }
  },
  computed: {
    compare() {
      return this.current_page >= this.last_page;
    }
  },
  methods: {
    async getStaff() {
      const { CancelToken } = this.$axios;
      this.sourceCancel = CancelToken.source();

      let tempStaff = await this.$axios.$get(
        `/staff-pengajar-new?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page,
        {
          cancelToken: this.sourceCancel.token
        }
      );

      // this.dataStaff.push.apply(this.dataStaff, tempStaff.data.data);
      // this.last_page = tempStaff.data.last_page;

      this.listWatch = true;
      this.dataStaff = tempStaff.data;
    },
    async searchStaff() {
      const { CancelToken } = this.$axios;
      this.sourceCancel = CancelToken.source();

      this.dataStaff = [];
      this.current_page = 1;
      let tempStaff = await this.$axios.$get(
        `/staff-pengajar-new?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.listWatch = true;
      this.dataStaff = tempStaff.data;
    }
  }
};
</script>
