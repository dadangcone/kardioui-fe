<template>
  <div>
    <b-container fluid class="px-0">
      <b-row class="no-gutters">
        <b-col md="12">
          <div class="wrap-carousel" v-if="dataBanner">
            <VueSlickCarousel class="carousel-hero" v-bind="bannerSettings">
              <div
                class="item"
                v-for="banner in dataBanner"
                :key="banner.id"
                :style="{ backgroundImage: `url('${banner.url_banner}')` }"
              ></div>
            </VueSlickCarousel>
            <div class="text-hero" v-for="item in dataBanner" :key="item.id">
              <div class="wrap">
                <h2 class="mb-2">{{ item.title }}</h2>
                <b-link
                  v-bind:href="item.url"
                  class="btn btn-outline-white"
                  target="_blank"
                  >Selengkapnya <img src="/angle-right.png" alt=""
                /></b-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- <VueSlickCarousel v-bind="bannerSettings">
      <div class="hero" v-for="banner in dataBanner" :key="banner.id">
        <div class="hero-text">
          <b-container>
            <b-row>
              <b-col md="7">
              <h2>{{ banner.title}}</h2>
              <b-link v-bind:href="banner.url" class="btn btn-outline-white" target="_blank"
                >Selengkapnya <img src="/angle-right.png" alt=""
              /></b-link>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <img v-bind:src="banner.url_banner" v-bind:alt="banner" class="banner">
        <img src="hero.png" alt="" class="banner" :style="{ src: `url('${dataDetail.thumbnail}')`}" />
      </div>

    </VueSlickCarousel> -->
    <!-- <div class="hero" style="background-image: url('/hero.png')">
      <b-container>
        <b-row>
          <b-col md="7">
            <h2>Departemen Kardiologi & Kedokteran Vaskular FK UI</h2>
            <b-col md="4" v-for="banner in dataBanner" :key="banner.id">
              <h5>{{ banner.banner }}</h5>
            </b-col>
            <p>
              Departemen Kardiologi dan Kedokteran Vaskular menyelenggarakan
              Program Spesialis Kardiovaskular dan mengembangkan penelitian di
              bidang kardiovaskular
            </p>
            <b-link to="/tentang" class="btn btn-outline-white"
              >Cari tahu tentang kami <img src="/angle-right.png" alt=""
            /></b-link>
          </b-col>
        </b-row>
      </b-container>
    </div> -->

    <div class="news-home gray-wrap">
      <b-container fluid>
        <b-row>
          <b-col md="8">
            <b-row>
              <b-col md="12">
                <h2>LATEST NEWS</h2>
                <b-link to="/berita" class="btn-more">All News</b-link>
                <div class="clearfix"></div>
                <VueSlickCarousel v-bind="newsSettings" class="carousel-news">
                  <b-link
                    :to="`/berita/` + news.slug"
                    v-for="news in dataBerita"
                    :key="news.id"
                    class="news-item"
                  >
                    <div
                      class="image"
                      :style="{
                        backgroundImage: 'url(' + news.thumbnail + ')',
                      }"
                    ></div>
                    <h5>{{ news.judul }}</h5>
                    <h6>{{ news.created_at | formatDate }}</h6>
                  </b-link>
                </VueSlickCarousel>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4">
            <VueSlickCarousel v-bind="eventSettings" class="event-grid">
              <b-link
                :to="`/agenda/` + data.slug"
                class="event-item"
                v-for="data in dataAgenda"
                :key="data.id"
              >
                <h5>Campus Agenda</h5>
                <div class="date">
                  <h3>{{ data.created_at | formatDay }}</h3>
                </div>
                <p>{{ data.judul }}</p>
              </b-link>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="discover-wrap">
      <b-container fluid>
        <b-row>
          <b-col md="4">
            <div class="study">
              <h5>Studying at kardiologi UI</h5>
              <div class="item-study" v-for="item in dataStudy" :key="item.id">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </b-col>
          <b-col md="8">
            <h4 class="title-discover">Discover</h4>
            <b-row>
              <b-col md="4" v-for="item in dataDiscover" :key="item.id">
                <div class="item-discover">
                  <div
                    class="image"
                    :style="{ backgroundImage: `url('${item.img}')` }"
                  ></div>
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.text }}</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- <div class="gallery" v-if="dataGallery">
      <b-container fluid class="px-0">
        <VueSlickCarousel
          v-bind="textSetting"
          ref="textList"
          :asNavFor="$refs.gallery"
          :focusOnSelect="true"
        >
          <div class="gallery-item" v-for="gal in dataGallery" :key="gal.id">
            <div class="gallery-left">
              <div class="gallery-head">
                <h5>Galeri foto</h5>
                <b-link to="/galeri" class="btn btn-outline-secondary"
                  >Lihat Lainnya <img src="/angle-right-yellow.png" alt=""
                /></b-link>
              </div>
              <div class="gallery-text">
                <h3>{{ gal.judul }}</h3>
                <h6>{{ gal.publish }}</h6>
              </div>
            </div>
            <div
              class="gallery-image"
              :style="{
                backgroundImage:
                  'url(' + gal.galeri_foto_detail[0].url_foto + ')'
              }"
            ></div>
          </div>
        </VueSlickCarousel>
      </b-container>
    </div> -->

    <!-- <div class="sekilas white-wrap">
      <b-container>
        <b-row>
          <b-col md="6">
            <h3>Sekilas Tentang Kardiologi UI dataBanner</h3>
            <p>
              Situs website menjadi hal yang esensial di era digital. Situs
              website Kardiologi UI menyediakan informasi pendidikan, penelitian
              dan pengabdian masyarakat yang diharapkan dapat bermanfaat untuk
              sivitas dan masyarakat.
            </p>
            <b-link to="/tentang" class="btn btn-outline-black"
              >Selengkapnya <img src="/angle-right-black.png" alt=""
            /></b-link>
          </b-col>
          <b-col md="6">
            <div class="wrap-image">
              <div
                class="image-sekilas"
                style="background-image: url('/sekilas.png')"
              ></div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div> -->
  </div>
</template>

<script>
import _ from "lodash";

export default {
  head() {
    return {
      title: "Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Departemen Kardiologi dan Kedokteran Vaskular FK UI",
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
  async asyncData({ route, app }) {
    let tempGallery = await app.$axios.$get(`/galeri-foto`);
    let tempAgenda = await app.$axios.$get(`/agenda`);
    let tempBerita = await app.$axios.$get(`/berita`);
    let getBanner = await app.$axios.$get(`/banner`);
    let filteredBanner = _.filter(getBanner.data, ["menu", "Home"]);
    let tempBanner = null;
    if (filteredBanner.length > 0) {
      tempBanner = filteredBanner;
    } else {
      tempBanner = [];
    }

    return {
      dataGallery: tempGallery.data.data,
      dataAgenda: tempAgenda.data.data.slice(0, 3),
      dataBerita: tempBerita.data.data.slice(0, 6),
      dataBanner: tempBanner,
    };
  },
  data() {
    return {
      dataStudy: [
        {
          id: 1,
          title: "Continuing Education",
          text:
            "This is the sub headline with one line of text too urus at lorem viverra lobortis id",
        },
        {
          id: 2,
          title: "Graduate Admissions",
          text:
            "This is the sub headline with one line of text too urus at lorem viverra lobortis id",
        },
        {
          id: 3,
          title: "Curent Kardio UI Students",
          text:
            "This is the sub headline with one line of text too urus at lorem viverra lobortis id",
        },
      ],
      dataDiscover: [
        {
          id: 1,
          img:
            "https://images.unsplash.com/photo-1618320481129-abe7b98187fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          title:
            "TITLE in here with three line of text maximal like  maximal like ",
          text: "Malesuada diam faucibus endum amet, luctus volutpatrci mi ",
        },
        {
          id: 2,
          img:
            "https://images.unsplash.com/photo-1593305151674-c3459b333207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          title:
            "TITLE in here with three line of text maximal like  maximal like ",
          text: "Malesuada diam faucibus endum amet, luctus volutpatrci mi ",
        },
        {
          id: 3,
          img:
            "https://images.unsplash.com/photo-1605239435870-67df4c54a0b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          title:
            "TITLE in here with three line of text maximal like  maximal like ",
          text: "Malesuada diam faucibus endum amet, luctus volutpatrci mi ",
        },
        {
          id: 4,
          img:
            "https://images.unsplash.com/photo-1546786836-057c9ee6871b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
          title:
            "TITLE in here with three line of text maximal like  maximal like ",
          text: "Malesuada diam faucibus endum amet, luctus volutpatrci mi ",
        },
        {
          id: 5,
          img:
            "https://images.unsplash.com/photo-1552650302-31f02083a8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80",
          title:
            "TITLE in here with three line of text maximal like  maximal like ",
          text: "Malesuada diam faucibus endum amet, luctus volutpatrci mi ",
        },
        {
          id: 6,
          img:
            "https://images.unsplash.com/photo-1557122764-dc9f8447fafb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
          title:
            "TITLE in here with three line of text maximal like  maximal like ",
          text: "Malesuada diam faucibus endum amet, luctus volutpatrci mi ",
        },
      ],
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
      },
      bannerSettings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      newsSettings: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      eventSettings: {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
