<template>
  <div>
    <div class="gray-container with-padding">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <b-row>
              <b-col md="8">
                <b-breadcrumb :items="items"></b-breadcrumb>
                <div class="galeri-foto">
                  <b-row>
                    <b-col md="12">
                      <h4 class="section-minititle">Galeri Video</h4>
                      <div class="clearfix"></div>
                      <b-row>
                        <b-col
                          md="4"
                          v-for="video in dataVideo"
                          :key="video.id"
                        >
                          <b-link class="galeri-item">
                            <iframe
                              :src="
                                `https://www.youtube.com/embed/` +
                                  video.link.slice(-11)
                              "
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                            <h5>{{ video.judul }}</h5>
                            <h6>{{ video.created_at | formatDateSlash }}</h6>
                          </b-link>
                        </b-col>
                        <b-col md="12" class="text-center">
                          <b-link
                            @click="loadVideo()"
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
                <NavGallery />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="galeri-foto white-wrap">
      <b-container> </b-container>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  components: {},
  data() {
    return {
      index: null,
      current_page: 1,
      last_page: 0,
      current_page2: 1,
      last_page2: 0,
      dataFoto: [],
      onlyFoto: [],
      dataVideo: [],
      photos: [
        {
          id: 1,
          img: "/news.png",
          title: "Rapat Kerja Departemen",
          date: "1-2 FEBRUARI 2020",
          jml: "8"
        },
        {
          id: 2,
          img: "/news2.png",
          title: "World Heart Day, Selamat Hari Jantung Sedunia. ",
          date: "27 September 2019",
          jml: "10"
        },
        {
          id: 3,
          img: "/news3.png",
          title:
            "Bakti Sosial dan Penelitian Kardiovaskular di Kabupaten Natuna.",
          date: "26-28 Juli 2019",
          jml: "11"
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
          text: "Galeri",
          href: "/galeri"
        },
        {
          text: "Galeri Video",
          active: true
        }
      ]
    };
  },
  mounted() {
    this.getFoto();
    this.getVideo();
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
    async getFoto() {
      let tempFoto = await this.$axios.$get(
        `/galeri-foto?page=` + this.current_page
      );
      let tempFile = _.map(
        tempFoto.data.data,
        "galeri_foto_detail[0].url_foto"
      );

      this.dataFoto.push.apply(this.dataFoto, tempFoto.data.data);
      this.onlyFoto.push.apply(this.onlyFoto, tempFile);
      this.last_page = tempFoto.data.last_page;
    },
    async loadFoto() {
      this.current_page += 1;
      let tempFoto = await this.$axios.$get(
        `/galeri-foto?page=` + this.current_page
      );

      this.dataFoto.push.apply(this.dataFoto, tempFoto.data.data);
      this.last_page = tempFoto.data.last_page;
    },
    async getVideo() {
      let tempVideo = await this.$axios.$get(
        `/galeri-video?page=` + this.current_page2
      );

      this.dataVideo.push.apply(this.dataVideo, tempVideo.data.data);
      this.last_page2 = tempVideo.data.last_page;
    },
    async loadVideo() {
      this.current_page2 += 1;
      let tempVideo = await this.$axios.$get(
        `/galeri-video?page=` + this.current_page2
      );

      this.dataVideo.push.apply(this.dataVideo, tempVideo.data.data);
      this.last_page2 = tempVideo.data.last_page;
    }
  }
};
</script>
