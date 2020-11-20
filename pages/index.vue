<template>
  <div>
    <div class="hero" style="background-image: url('/hero.png')">
      <b-container>
        <b-row>
          <b-col md="7">
            <h2>Departemen Kardiologi & Kedokteran Vaskular FK UI</h2>
            <p>Departemen Kardiologi dan Kedokteran Vaskular  menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular</p>
            <b-link to="/tentang" class="btn btn-outline-white">Cari tahu tentang kami <img src="/angle-right.png" alt=""></b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="event-grid">
      <b-container>
        <b-row>
          <b-col md="4" v-for="data in dataAgenda" :key="data.id">
            <div class="event-item">
              <div class="date">
                <h3>{{ data.created_at | moment("DD") }}</h3>
                <h6>{{ data.created_at | moment("MMM") }}</h6>
              </div>
              <p>{{ data.judul }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="sekilas white-wrap">
      <b-container>
        <b-row>
          <b-col md="6">
            <h3>Sekilas Tentang Kardiologi UI</h3>
            <p>Situs website menjadi hal yang esensial di era digital. Situs website Kardiologi UI menyediakan informasi pendidikan, penelitian dan pengabdian masyarakat yang diharapkan dapat bermanfaat untuk sivitas dan masyarakat.</p>
            <b-link to="" class="btn btn-outline-black">Selengkapnya <img src="/angle-right-black.png" alt=""></b-link>
          </b-col>
          <b-col md="6">
            <div class="wrap-image">
              <div class="image-sekilas" style="background-image: url('/sekilas.png')"></div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="news-home gray-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>Berita Terbaru</h2>            
            <b-link to="/berita" class="btn btn-outline-black btn-more">Selengkapnya <img src="/angle-right-black.png" alt=""></b-link>
          </b-col>
          <b-col md="4" v-for="news in dataBerita" :key="news.id">
            <b-link class="news-item">
              <div class="image" :style="{ backgroundImage: 'url(' + news.thumbnail + ')' }"></div>
              <h5>{{ news.judul }}</h5>
              <h6>{{ news.created_at | moment('DD MMMM YYYY') }}</h6>
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="gallery">
      <b-container fluid class="px-0">
        <b-row no-gutters class="align-items-center">
          <b-col md="5" offset-md="1">
            <div class="gallery-head">
              <h5>Galeri foto</h5>
              <b-link to="" class="btn btn-outline-secondary">Lihat Lainnya <img src="/angle-right-yellow.png" alt=""></b-link>
            </div>
            <client-only>
              <VueSlickCarousel v-bind="textSetting" ref="textList" :asNavFor="$refs.gallery" :focusOnSelect="true">
                <div class="gallery-text" 
                  v-for="text in dataGallery" 
                  :key="text.id" 
                >
                  <h3>{{ text.judul }}</h3>
                  <h6>{{ text.publish }}</h6>
                </div>
              </VueSlickCarousel>
            </client-only>
          </b-col>
          <b-col md="6">
            <client-only>
              <VueSlickCarousel v-bind="imageSetting" ref="gallery" :asNavFor="$refs.textList" :focusOnSelect="true">
                <div class="gallery-image" 
                  v-for="image in dataGallery" 
                  :key="image.id" 
                  :focusOnSelect="true" :style="{ backgroundImage: 'url(' + image.galeri_foto_detail[0].url_foto + ')'}"
                ></div>
              </VueSlickCarousel>
            </client-only>
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
      title: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'keywords', name: 'keywords', content: 'Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'description', name: 'description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
        { hid: 'og:description', name: 'og:description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
      ]
    }
  },
  async asyncData({ route, app }) {
    let tempGallery = await app.$axios.$get(`/galeri-foto`)
    let tempAgenda = await app.$axios.$get(`/agenda`)
    let tempBerita = await app.$axios.$get(`/berita`)
    return { 
      dataGallery : tempGallery.data.data,
      dataAgenda : tempAgenda.data.data.slice(0, 3),
      dataBerita : tempBerita.data.data.slice(0, 3),
    }
  },
  data() {
    return{
      news: [
        {
          id: 1,
          img: '/news.png',
          title: 'Rapat Kerja Departemen',
          date: '1-2 FEBRUARI 2020'
        },
        {
          id: 2,
          img: '/news2.png',
          title: 'World Heart Day, Selamat Hari Jantung Sedunia. ',
          date: '27 September 2019'
        },
        {
          id: 3,
          img: '/news3.png',
          title: 'Bakti Sosial dan Penelitian Kardiovaskular di Kabupaten Natuna.',
          date: '26-28 Juli 2019'
        },
      ],
      gallerys: [
        {
          id: 1,
          img: '/galery.png',
          title: '31th Weekend Course on Cardiology (WECOC)',
          desc: 'Acara telah sukses terlaksana.'
        },
        {
          id: 2,
          img: '/sekilas.png',
          title: 'World Heart Day, Selamat Hari Jantung Sedunia. ',
          desc: 'Acara telah sukses terlaksana.'
        },
        {
          id: 3,
          img: '/galery.png',
          title: 'Bakti Sosial dan Penelitian Kardiovaskular di Kabupaten Natuna.',
          desc: 'Acara telah sukses terlaksana.'
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
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>