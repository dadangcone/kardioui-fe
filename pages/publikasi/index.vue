<template>
  <div>
    <HeadInner menu="Publikasi Jurnal" />

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="8">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3>Jurnal</h3>
                    <b-form-input
                      type="search"
                      class="search-list left"
                      v-model="search"
                      v-on:keyup.enter="searchJurnal()"
                      placeholder="Cari Jurnal"
                    ></b-form-input>
                    <div class="sort d-none">
                      <label for="">Urut berdasarkan</label>
                      <b-form-select v-model="sort">
                        <option value="desc">Z- A</option>
                        <option value="asc">A - Z</option>
                      </b-form-select>
                    </div>
                    <div class="clearfix"></div>
                    <b-row>
                      <b-col md="3" v-for="item in dataJurnal" :key="item.id">
                        <a
                          :href="item.url_file_jurnal"
                          target="_blank"
                          class="card-link"
                        >
                          <b-card
                            :img-src="item.url_thumbnail"
                            :img-alt="item.judul"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2 card-image"
                            :title="item.title"
                          >
                            <b-card-text>
                              {{ item.publisher }}
                            </b-card-text>
                          </b-card>
                        </a>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col class="text-center">
                        <b-link
                          @click="loadJurnal()"
                          class="btn btn-outline-black d-inline-block mx-auto mt-5"
                          v-if="!compare"
                        >
                          Tampilkan lebih banyak
                          <img src="/angle-down-black.png" alt="" />
                        </b-link>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
                <b-col md="4">
                  <NavPublikasi />
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
import _ from "lodash";

export default {
  head() {
    return {
      title:
        "Publikasi Jurnal | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Publikasi Jurnal | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Publikasi Jurnal | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
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
      dataJurnal: [],
      items: [
        {
          text: "Beranda",
          href: "/"
        },
        {
          text: "Publikasi",
          href: "/publikasi"
        },
        {
          text: "Jurnal",
          active: true
        }
      ]
    };
  },
  mounted() {
    this.getJurnal();
  },
  computed: {
    compare() {
      return this.current_page >= this.last_page;
    }
  },
  methods: {
    async getJurnal() {
      let tempJurnal = await this.$axios.$get(
        `/jurnal?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataJurnal.push.apply(this.dataJurnal, tempJurnal.data.data);
      this.last_page = tempJurnal.data.last_page;
    },
    async loadJurnal() {
      this.current_page += 1;
      let tempJurnal = await this.$axios.$get(
        `/jurnal?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataJurnal.push.apply(this.dataJurnal, tempJurnal.data.data);
      this.last_page = tempJurnal.data.last_page;
    },
    async searchJurnal() {
      this.dataJurnal = [];
      this.current_page = 1;
      let tempJurnal = await this.$axios.$get(
        `/jurnal?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataJurnal.push.apply(this.dataJurnal, tempJurnal.data.data);
      this.last_page = tempJurnal.data.last_page;
    }
  }
};
</script>

<style lang="scss">
.card-link {
  &:hover {
    text-decoration: none;
  }
  .card-image {
    .card-title {
      color: #3b7543;
    }
  }
}
.card-image {
  height: 100%;
  img {
    object-fit: cover;
    height: 306px;
  }
  .card-title {
    font-size: 18px;
  }
  .card-text {
    font-size: 14px;
    margin-bottom: 0 !important;
  }
}
</style>