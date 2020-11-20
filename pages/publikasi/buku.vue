<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3>Publikasi</h3>
            <div class="hero-image" style="background-image: url('/penelitian3.png')"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <NavPublikasi  />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="10" offset-md="1">
            <h3>Buku</h3>
            <b-form-input type="search" class="search-list left" v-model="search" v-on:keyup.enter="searchBuku()" placeholder="Cari Buku"></b-form-input>
            <div class="sort d-none">
              <label for="">Urut berdasarkan</label>
              <b-form-select v-model="sort">
                <option value="desc">Z- A</option>
                <option value="asc">A - Z</option>
              </b-form-select>
            </div>
            <div class="clearfix"></div>
            <b-row>
              <b-col md="6" v-for="item in dataBuku" :key="item.id">
                <b-link to="" class="item-list">
                  <div :class="['icon', 'desc']">
                    <img src="/pdf.png" alt="">
                  </div>

                  <h5>{{ item.judul }}</h5>
                  <h6 class="desc">{{ item.deskripsi }}</h6>
                  <span class="size d-none">{{ item.created_at | moment("DD/MM/YYYY") }}</span>
                </b-link>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <b-link @click="loadBuku()" 
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
      title: 'Publikasi Buku | Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Publikasi Buku | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Publikasi Buku | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
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
      dataBuku: [],
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
    this.getBuku()
  },
  computed: {
    compare(){
      return this.current_page >= this.last_page
    }
  },
  methods: {
    async getBuku() {
      let tempBuku = await this.$axios.$get(`/buku?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataBuku.push.apply(this.dataBuku, tempBuku.data.data)
      this.last_page = tempBuku.data.last_page
    },
    async loadBuku() {
      this.current_page += 1
      let tempBuku = await this.$axios.$get(`/buku?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataBuku.push.apply(this.dataBuku, tempBuku.data.data)
      this.last_page = tempBuku.data.last_page
    },
    async searchBuku() {
      this.dataBuku = []
      this.current_page = 1
      let tempBuku = await this.$axios.$get(`/buku?search=` + this.search.toLowerCase() + '&page=' + this.current_page)

      this.dataBuku.push.apply(this.dataBuku, tempBuku.data.data)
      this.last_page = tempBuku.data.last_page
    },
  }
}
</script>