<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3 class="text-left">Berita & Agenda</h3>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="galeri-foto news">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>Berita</h2>
          </b-col>
          <b-col md="12">
            <b-row>
              <b-col md="4" v-for="news in news" :key="news.id">
                <b-link class="news-item">
                  <div
                    class="image"
                    :style="{ backgroundImage: 'url(' + news.img + ')' }"
                  ></div>
                  <h5>{{ news.title }}</h5>
                  <h6>{{ news.date }}</h6>
                </b-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="galeri-foto white-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>Agenda</h2>
            <div class="clearfix"></div>
            <p>Comming Soon</p>
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
      news: [
        {
          id: 1,
          img: "/news.png",
          title: "Rapat Kerja Departemen",
          date: "1-2 FEBRUARI 2020",
        },
        {
          id: 2,
          img: "/news2.png",
          title: "World Heart Day, Selamat Hari Jantung Sedunia. ",
          date: "27 September 2019",
        },
        {
          id: 3,
          img: "/news3.png",
          title:
            "Bakti Sosial dan Penelitian Kardiovaskular di Kabupaten Natuna.",
          date: "26-28 Juli 2019",
        },
      ],
      gallerys: [
        {
          id: 1,
          img: "/galery.png",
          title: "31th Weekend Course on Cardiology (WECOC)",
          desc: "Acara telah sukses terlaksana.",
        },
        {
          id: 2,
          img: "/sekilas.png",
          title: "World Heart Day, Selamat Hari Jantung Sedunia. ",
          desc: "Acara telah sukses terlaksana.",
        },
        {
          id: 3,
          img: "/galery.png",
          title:
            "Bakti Sosial dan Penelitian Kardiovaskular di Kabupaten Natuna.",
          desc: "Acara telah sukses terlaksana.",
        },
      ],
      textSetting: {
        arrows: false,
        dots: true,
        swipe: false,
      },
      imageSetting: {
        arrows: false,
        dots: false,
        swipe: false,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>