<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3>Publikasi</h3>
            <div class="hero-image" style="background-image: url('/publikasi2.png')"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <NavPublikasi  />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="10" offset-md="1">
            <h3>Poster</h3>
            <b-form-input type="search" class="search-list left" v-model="search" v-on:keyup.enter="searchList()" placeholder="Cari Jurnal"></b-form-input>
            <div class="sort">
              <label for="">Urut berdasarkan</label>
              <b-form-select v-model="sort">
                <option value="desc">Z- A</option>
                <option value="asc">A - Z</option>
              </b-form-select>
            </div>
            <div class="clearfix"></div>
            <b-row>
              <b-col md="6" v-for="item in cutPenelitian" :key="item.id">
                <b-link to="" class="item-list">
                  <div :class="['icon', 'desc', {'blue': item.icon === '/doc.png'}]">
                    <img :src="item.icon" alt="">
                  </div>

                  <h5>{{ item.title }}</h5>
                  <h6 class="desc">{{ item.desc }}</h6>
                  <span class="size">{{ item.size }}</span>
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
      title: 'Publikasi Poster | Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Publikasi Poster | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Publikasi Poster | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
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
      sort: 'asc',
      penelitians: [
        { 
          id: 1, 
          title: 'Acute and Chronic Heart Failure.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/pdf.png',
        },
        { 
          id: 2, 
          title: 'High Blood Pressure.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/doc.png',
        },
        { 
          id: 3, 
          title: 'Angina.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/pdf.png',
        },
        { 
          id: 4, 
          title: 'Atrial Fibrillation.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/doc.png',
        },
        { 
          id: 5, 
          title: 'Acute and Chronic Heart Failure.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/pdf.png',
        },
        { 
          id: 6, 
          title: 'High Blood Pressure.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/doc.png',
        },
        { 
          id: 7, 
          title: 'Angina.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/pdf.png',
        },
        { 
          id: 8, 
          title: 'Atrial Fibrillation.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/doc.png',
        },
        { 
          id: 9, 
          title: 'Acute and Chronic Heart Failure.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/pdf.png',
        },
        { 
          id: 10, 
          title: 'High Blood Pressure.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/doc.png',
        },
        { 
          id: 11, 
          title: 'Angina.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/pdf.png',
        },
        { 
          id: 12, 
          title: 'Atrial Fibrillation.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/doc.png',
        },
        { 
          id: 13, 
          title: 'Acute and Chronic Heart Failure.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/pdf.png',
        },
        { 
          id: 14, 
          title: 'High Blood Pressure.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/doc.png',
        },
        { 
          id: 15, 
          title: 'Angina.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/pdf.png',
        },
        { 
          id: 16, 
          title: 'Atrial Fibrillation.pdf',
          size: '1.2 mb',
          desc: 'Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja',
          icon: '/doc.png',
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