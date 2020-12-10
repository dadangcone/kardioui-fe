<template>
  <div>
    <HeadInner menu="Penelitian Daftar Penelitian" />

    <NavPenelitian />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3 class="left">Daftar Penelitian</h3>
            <b-form-input type="search" class="search-list" v-model="search" v-on:keyup.enter="searchDP()" placeholder="Cari penelitian"></b-form-input>
            <div class="clearfix"></div>
            <b-row>
              <b-col md="6" v-for="item in dataDP" :key="item.id">
                <b-link to="" class="item-list">
                  <div class="icon">
                    <img src="/pdf.png" alt="">
                  </div>
                  <h5>{{ item.judul }}</h5>
                  <h6>{{ item.deskripsi }}</h6>
                </b-link>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <b-link @click="loadDP()" 
                  class="btn btn-outline-black d-inline-block mx-auto mt-5"
                  v-if="!compare"
                >
                  Tampilkan lebih banyak
                  <img src="/angle-down-black.png" alt="">
                </b-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  head() {
    return {
      title: 'Daftar Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Daftar Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Daftar Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'keywords', name: 'keywords', content: 'Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'description', name: 'description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
        { hid: 'og:description', name: 'og:description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
      ]
    }
  },
  data() {
    return{
      sort: "",
      search: "",
      current_page: 1,
      last_page: 0,
      dataDP: [],
      penelitians: [
        { 
          id: 1, 
          title: 'Acute and Chronic Heart Failure.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 2, 
          title: 'High Blood Pressure.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 3, 
          title: 'Angina.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 4, 
          title: 'Atrial Fibrillation.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 5, 
          title: 'Acute and Chronic Heart Failure.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 6, 
          title: 'High Blood Pressure.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 7, 
          title: 'Angina.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 8, 
          title: 'Atrial Fibrillation.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 9, 
          title: 'Acute and Chronic Heart Failure.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 10, 
          title: 'High Blood Pressure.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 11, 
          title: 'Angina.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 12, 
          title: 'Atrial Fibrillation.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 13, 
          title: 'Acute and Chronic Heart Failure.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 14, 
          title: 'High Blood Pressure.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 15, 
          title: 'Angina.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
        { 
          id: 16, 
          title: 'Atrial Fibrillation.pdf',
          size: '1.2 mb',
          icon: '/pdf.png',
        },
      ]
    }
  },
  mounted() {
    this.getDP()
  },
  computed: {
    compare(){
      return this.current_page >= this.last_page
    }
  },
  methods: {
    async getDP() {
      let tempDP = await this.$axios.$get(`/daftar-penelitian?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataDP.push.apply(this.dataDP, tempDP.data.data)
      this.last_page = tempDP.data.last_page
    },
    async loadDP() {
      this.current_page += 1
      let tempDP = await this.$axios.$get(`/daftar-penelitian?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataDP.push.apply(this.dataDP, tempDP.data.data)
      this.last_page = tempDP.data.last_page
    },
    async searchDP() {
      this.dataDP = []
      this.current_page = 1
      let tempDP = await this.$axios.$get(`/daftar-penelitian?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataDP.push.apply(this.dataDP, tempDP.data.data)
      this.last_page = tempDP.data.last_page
    },
  }
}
</script>