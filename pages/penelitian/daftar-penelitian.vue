<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3>Penelitian</h3>
            <div class="hero-image" style="background-image: url('/penelitian2.png')"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <NavPenelitian />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3 class="left">Daftar Penelitian</h3>
            <b-form-input type="search" class="search-list" v-model="search" v-on:keyup.enter="searchList()" placeholder="Cari penelitian"></b-form-input>
            <div class="clearfix"></div>
            <b-row>
              <b-col md="6" v-for="item in cutPenelitian" :key="item.id">
                <b-link to="" class="item-list">
                  <div class="icon">
                    <img :src="item.icon" alt="">
                  </div>
                  <h5>{{ item.title }}</h5>
                  <h6>{{ item.size }}</h6>
                </b-link>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <b-link @click="loadMore" 
                  class="btn btn-outline-black d-inline-block mx-auto"
                  v-if="this.showPenelitian.length > 4 && this.show < this.showPenelitian.length"
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
      showPenelitian: [],
      show: 6,
      search: '',
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
    this.showPenelitian = this.penelitians
  },
  computed: {
    cutPenelitian(){
      return this.showPenelitian.slice(0, this.show)
    },
  },
  methods: {
    loadMore(){
      this.show += 4
    },
    searchList(){
      let tempSearch = this.penelitians.filter( obj => obj.title.toLowerCase().includes(this.search.toLowerCase()))

      this.showPenelitian = tempSearch
    }
  }
}
</script>