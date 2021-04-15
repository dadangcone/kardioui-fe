<template>
  <div>
    <div class="gray-container with-padding">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <b-row>
              <b-col md="8">
                <b-breadcrumb :items="items"></b-breadcrumb>
                <div class="galeri-foto news">
                  <b-row>
                    <b-col md="12">
                      <h4 class="section-minititle">
                        Agenda
                      </h4>
                      <div class="clearfix"></div>
                      <b-row>
                        <b-col md="6" v-for="data in dataAgenda" :key="data.id">
                          <b-link
                            :to="'/agenda/' + data.slug"
                            class="galeri-item agenda"
                          >
                            <b-row>
                              <b-col md="5">
                                <div
                                  class="image"
                                  :style="{
                                    backgroundImage:
                                      'url(' + data.thumbnail + ')'
                                  }"
                                >
                                  <div class="wrap">
                                    <div>
                                      <span class="date">{{
                                        data.created_at | formatDay
                                      }}</span>
                                    </div>
                                  </div>
                                </div>
                              </b-col>
                              <b-col md="7">
                                <h5>{{ data.judul }}</h5>
                                <h6>{{ data.penulis }}</h6>
                              </b-col>
                            </b-row>
                          </b-link>
                        </b-col>
                        <b-col md="12" class="text-center">
                          <b-link
                            @click="loadAgenda()"
                            class="btn btn-outline-black d-inline-block mx-auto mt-5"
                            v-if="!compare2"
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
                <NavBerita />
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
  data() {
    return {
      current_page: 1,
      last_page: 0,
      current_page2: 1,
      last_page2: 0,
      dataBerita: [],
      dataAgenda: [],
      news: [
        {
          id: 1,
          img: "/news.png",
          title: "Rapat Kerja Departemen",
          date: "1-2 FEBRUARI 2020"
        },
        {
          id: 2,
          img: "/news2.png",
          title: "World Heart Day, Selamat Hari Jantung Sedunia. ",
          date: "27 September 2019"
        },
        {
          id: 3,
          img: "/news3.png",
          title:
            "Bakti Sosial dan Penelitian Kardiovaskular di Kabupaten Natuna.",
          date: "26-28 Juli 2019"
        }
      ],
      gallerys: [
        {
          id: 1,
          img: "/galery.png",
          title: "31th Weekend Course on Cardiology (WECOC)",
          desc: "Acara telah sukses terlaksana."
        },
        {
          id: 2,
          img: "/sekilas.png",
          title: "World Heart Day, Selamat Hari Jantung Sedunia. ",
          desc: "Acara telah sukses terlaksana."
        },
        {
          id: 3,
          img: "/galery.png",
          title:
            "Bakti Sosial dan Penelitian Kardiovaskular di Kabupaten Natuna.",
          desc: "Acara telah sukses terlaksana."
        }
      ],
      textSetting: {
        arrows: false,
        dots: true,
        swipe: false
      },
      imageSetting: {
        arrows: false,
        dots: false,
        swipe: false
      },
      items: [
        {
          text: "Beranda",
          href: "/"
        },
        {
          text: "Berita & Agenda",
          href: "/berita"
        },
        {
          text: "Agenda",
          active: true
        }
      ]
    };
  },
  mounted() {
    this.getBerita();
    this.getAgenda();
  },
  computed: {
    compare() {
      return this.current_page >= this.last_page;
    },
    compare2() {
      return this.current_page2 >= this.last_page2;
    }
  },
  methods: {
    async getBerita() {
      let tempBerita = await this.$axios.$get(
        `/berita?page=` + this.current_page
      );

      this.dataBerita.push.apply(this.dataBerita, tempBerita.data.data);
      this.last_page = tempBerita.data.last_page;
    },
    async loadBerita() {
      this.current_page += 1;
      let tempBerita = await this.$axios.$get(
        `/berita?page=` + this.current_page
      );

      this.dataBerita.push.apply(this.dataBerita, tempBerita.data.data);
      this.last_page = tempBerita.data.last_page;
    },
    async getAgenda() {
      let tempAgenda = await this.$axios.$get(
        `/agenda?page=` + this.current_page2
      );

      this.dataAgenda.push.apply(this.dataAgenda, tempAgenda.data.data);
      this.last_page2 = tempAgenda.data.last_page;
    },
    async loadAgenda() {
      this.current_page2 += 1;
      let tempAgenda = await this.$axios.$get(
        `/agenda?page=` + this.current_page2
      );

      this.dataAgenda.push.apply(this.dataAgenda, tempAgenda.data.data);
      this.last_page2 = tempAgenda.data.last_page;
    }
  }
};
</script>
