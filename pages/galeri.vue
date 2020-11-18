<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3 class="text-left">Galeri</h3>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="galeri-foto">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>Galeri Foto</h2>
          </b-col>
          <b-col md="12">
            <b-row>
              <b-col md="4" v-for="photo in photos" :key="photo.id">
                <b-link class="galeri-item">
                  <span class="small-tips">8 Foto</span>
                  <div
                    class="image"
                    :style="{ backgroundImage: 'url(' + photo.img + ')' }"
                  ></div>
                  <h5>{{ photo.title }}</h5>
                  <h6>{{ photo.date }}</h6>
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
            <h2>Galeri Foto</h2>
          </b-col>
          <b-col md="12">
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
      photos: [
        {
          id: 1,
          img: "/news.png",
          title: "Rapat Kerja Departemen",
          date: "1-2 FEBRUARI 2020",
          jml: "8",
        },
        {
          id: 2,
          img: "/news2.png",
          title: "World Heart Day, Selamat Hari Jantung Sedunia. ",
          date: "27 September 2019",
          jml: "10",
        },
        {
          id: 3,
          img: "/news3.png",
          title:
            "Bakti Sosial dan Penelitian Kardiovaskular di Kabupaten Natuna.",
          date: "26-28 Juli 2019",
          jml: "11",
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