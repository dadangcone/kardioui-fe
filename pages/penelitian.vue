<template>
  <div>
    <div class="title-page white-wrap text-center">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>Penelitian</h3>
          </b-col>
          <b-col md="12">
            <div
              class="image"
              style="background-image: url('/penelitian-banner.jpg')"
            ></div>
          </b-col>
        </b-row>
      </b-container>

      <div class="nav-page">
        <b-container>
          <b-row>
            <b-col>
              <b-link to="" v-scroll-to="'.fasilitas'">Fasilitas </b-link>
              <b-link to="" v-scroll-to="'.daftar-penelitian'"
                >Daftar Penelitian
              </b-link>
              <b-link to="" v-scroll-to="'.kerjasama-penelitian'"
                >Kerjasama Penelitian
              </b-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div class="fasilitas white-wrap">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h2>Fasilitas</h2>
            <div class="section-subtitle">
              <b-row>
                <b-col
                  md="6"
                  v-for="fasilitas in fasilitas"
                  :key="fasilitas.id"
                >
                  <div
                    class="image"
                    :style="{ backgroundImage: 'url(' + fasilitas.img + ')' }"
                  ></div>
                </b-col>
              </b-row>
              <p>
                Departemen Kardiologi dan Kedokteran Vaskular FKUI bersama Rumah
                Sakit Jantung dan Pembuluh Darah Harapan Kita memiliki fasilitas
                penelitian di Gedung Penelitian dan Pengembangan.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="daftar-penelitian gray-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>Daftar Penelitian</h2>
          </b-col>
          <b-col md="12">
            <div class="section-subtitle">
              <b-row>
                <b-col
                  md="6"
                  v-for="penelitian in penelitian"
                  :key="penelitian.id"
                >
                  <div class="penelitian-list">
                    <div
                      class="image"
                      :style="{
                        backgroundImage: 'url(' + penelitian.icon + ')',
                      }"
                    >
                      <div class="size-doc">
                        {{ penelitian.filesize }}
                      </div>
                    </div>
                    <div class="title-penelitian">
                      <h3>{{ penelitian.title }}</h3>
                      <h6>{{ penelitian.desc }}</h6>
                    </div>
                   
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="kerjasama-penelitian white-wrap">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h2>Kerjasama Penelitian</h2>
            <div class="section-subtitle">
              <p>Comming Soon</p>
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
      penelitian: [
        {
          id: 1,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 2,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 3,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 4,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 5,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 6,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 7,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 8,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
          desc: "Deskripsi singkat disini berbentuk text area dapet berisi maksimal 2 line saja",
          filesize: "1.2 mb",
        },
        {
          id: 9,
          icon: "/pdf-icon.png",
          title: "Acute and Chronic Heart Failure.pdf",
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