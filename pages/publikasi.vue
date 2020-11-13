<template>
  <div>
    <div class="title-page white-wrap text-center">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>Publikasi</h3>
          </b-col>
          <b-col md="12">
            <div
              class="image"
              style="background-image: url('/publikasi-banner.jpg')"
            ></div>
          </b-col>
        </b-row>
      </b-container>

      <div class="nav-page">
        <b-container>
          <b-row>
            <b-col>
              <b-link to="" v-scroll-to="'.jurnal'">Jurnal </b-link>
              <b-link to="" v-scroll-to="'.buku'">Buku </b-link>
              <b-link to="" v-scroll-to="'.poster'">Poster </b-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div class="jurnal white-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>Jurnal</h2>
          </b-col>
          <b-col md="12">
            <div class="section-subtitle">
              <b-row>
                <b-col
                  md="6"
                  v-for="jurnal in jurnal"
                  :key="jurnal.id"
                >
                  <div class="penelitian-list">
                    <div
                      class="image"
                      :style="{
                        backgroundImage: 'url(' + jurnal.icon + ')',
                      }"
                    >
                      <div class="size-doc">
                        {{ jurnal.filesize }}
                      </div>
                    </div>
                    <div class="title-penelitian">
                      <h3>{{ jurnal.title }}</h3>
                      <h6>{{ jurnal.desc }}</h6>
                    </div>
                   
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="buku gray-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>Buku</h2>
          </b-col>
          <b-col md="12">
            <div class="section-subtitle">
              <b-row>
                <b-col
                  md="6"
                  v-for="buku in buku"
                  :key="buku.id"
                >
                  <div class="penelitian-list">
                    <div
                      class="image"
                      :style="{
                        backgroundImage: 'url(' + buku.icon + ')',
                      }"
                    >
                      <div class="size-doc">
                        {{ buku.filesize }}
                      </div>
                    </div>
                    <div class="title-penelitian">
                      <h3>{{ buku.title }}</h3>
                      <h6>{{ buku.desc }}</h6>
                    </div>
                   
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="poster white-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>Poster</h2>
          </b-col>
          <b-col md="12">
            <div class="section-subtitle">
              <b-row>
                <b-col
                  md="6"
                  v-for="poster in poster"
                  :key="poster.id"
                >
                  <div class="penelitian-list">
                    <div
                      class="image"
                      :style="{
                        backgroundImage: 'url(' + poster.icon + ')',
                      }"
                    >
                      <div class="size-doc">
                        {{ poster.filesize }}
                      </div>
                    </div>
                    <div class="title-penelitian">
                      <h3>{{ poster.title }}</h3>
                      <h6>{{ poster.desc }}</h6>
                    </div>
                   
                  </div>
                </b-col>
              </b-row>
            </div>
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
      jurnal: [
        {
          id: 1,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 2,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 3,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 4,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 5,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 6,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 7,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 8,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
      ],
      buku: [
        {
          id: 1,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 2,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 3,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 4,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 5,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 6,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 7,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 8,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
      ],
      poster: [
        {
          id: 1,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 2,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 3,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 4,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 5,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 6,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 7,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 8,
          icon: "/pdf-icon.png",
          title: "Judul file disini hanya 1 line saja",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
      ],
      fasilitas: [
        {
          id: 1,
          img: "/fasil-1.jpg",
        },
        {
          id: 2,
          img: "/fasil-2.jpg",
        },
        {
          id: 3,
          img: "/fasil-3.jpg",
        },
        {
          id: 4,
          img: "/fasil-4.jpg",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>