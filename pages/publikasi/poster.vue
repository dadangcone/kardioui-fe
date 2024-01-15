<template>
  <div>
    <HeadInner menu="Publikasi Poster" />

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="8">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3>Poster</h3>
                    <b-form-input
                      type="search"
                      class="search-list left"
                      v-model="search"
                      v-on:keyup.enter="searchPoster()"
                      placeholder="Cari Poster"
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
                      <b-col md="6" v-for="item in dataPoster" :key="item.id">
                        <a
                          :href="item.url_file_poster"
                          target="_blank"
                          class="item-list"
                        >
                          <div :class="['icon', 'desc']">
                            <img src="/pdf.png" alt="" />
                          </div>

                          <h5>{{ item.judul_poster }}</h5>
                          <h6 class="desc">{{ item.nama_peneliti }}</h6>
                          <span class="size d-none">{{
                            item.created_at | formatDateSlash
                          }}</span>
                        </a>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col class="text-center">
                        <b-link
                          @click="loadPoster()"
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
        "Publikasi Poster | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Publikasi Poster | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Publikasi Poster | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
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
      dataPoster: [],
      penelitians: [
        {
          id: 1,
          title: "Acute and Chronic Heart Failure.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/pdf.png"
        },
        {
          id: 2,
          title: "High Blood Pressure.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/doc.png"
        },
        {
          id: 3,
          title: "Angina.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/pdf.png"
        },
        {
          id: 4,
          title: "Atrial Fibrillation.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/doc.png"
        },
        {
          id: 5,
          title: "Acute and Chronic Heart Failure.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/pdf.png"
        },
        {
          id: 6,
          title: "High Blood Pressure.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/doc.png"
        },
        {
          id: 7,
          title: "Angina.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/pdf.png"
        },
        {
          id: 8,
          title: "Atrial Fibrillation.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/doc.png"
        },
        {
          id: 9,
          title: "Acute and Chronic Heart Failure.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/pdf.png"
        },
        {
          id: 10,
          title: "High Blood Pressure.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/doc.png"
        },
        {
          id: 11,
          title: "Angina.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/pdf.png"
        },
        {
          id: 12,
          title: "Atrial Fibrillation.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/doc.png"
        },
        {
          id: 13,
          title: "Acute and Chronic Heart Failure.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/pdf.png"
        },
        {
          id: 14,
          title: "High Blood Pressure.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/doc.png"
        },
        {
          id: 15,
          title: "Angina.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/pdf.png"
        },
        {
          id: 16,
          title: "Atrial Fibrillation.pdf",
          size: "1.2 mb",
          desc:
            "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          icon: "/doc.png"
        }
      ],
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
          text: "Poster",
          active: true
        }
      ]
    };
  },
  mounted() {
    this.getPoster();
  },
  computed: {
    compare() {
      return this.current_page >= this.last_page;
    }
  },
  methods: {
    async getPoster() {
      let tempPoster = await this.$axios.$get(
        `/poster?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataPoster.push.apply(this.dataPoster, tempPoster.data.data);
      this.last_page = tempPoster.data.last_page;
    },
    async loadPoster() {
      this.current_page += 1;
      let tempPoster = await this.$axios.$get(
        `/poster?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataPoster.push.apply(this.dataPoster, tempPoster.data.data);
      this.last_page = tempPoster.data.last_page;
    },
    async searchPoster() {
      this.dataPoster = [];
      this.current_page = 1;
      let tempPoster = await this.$axios.$get(
        `/poster?search=` +
          this.search.toLowerCase() +
          "&page=" +
          this.current_page
      );

      this.dataPoster.push.apply(this.dataPoster, tempPoster.data.data);
      this.last_page = tempPoster.data.last_page;
    }
  }
};
</script>
