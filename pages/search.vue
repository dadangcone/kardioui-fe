<template>
  <div>
    <div
      class="head-inner"
      style="background-image: url('/publikasi.png')"
    ></div>

    <div class="content-inner white-wrap">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <b-form-input
              type="search"
              class="search-input"
              v-model="search"
              placeholder="Cari disini.."
              @keyup.enter.native="onSearch"
            ></b-form-input>

            <p v-if="dataSearch" class="search-p">
              Pencarian "{{ this.search }}" ditemukan sebagai berikut :
            </p>
            <p v-else class="search-p">
              Pencarian "{{ this.search }}" tidak ditemukan
            </p>
            <ol class="search-index">
              <li v-for="(item, i) in dataSearch" :key="i">
                <h5>{{ item.menu }}</h5>
                <b-link :to="item.url">Klik disini</b-link>
              </li>
            </ol>
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
      title: "Search | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Search | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Search | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "description",
          name: "description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular"
        }
      ]
    };
  },
  data() {
    return {
      search: "",
      dataSearch: null
    };
  },
  mounted() {},
  methods: {
    async onSearch() {
      let tempSearch = await this.$axios.$post(`/search?search=` + this.search);
      this.dataSearch = tempSearch.data;
    }
  }
};
</script>
