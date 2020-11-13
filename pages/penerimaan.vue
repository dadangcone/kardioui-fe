<template>
  <div>
    <div class="title-page white-wrap text-center">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>Penerimaan</h3>
          </b-col>
          <b-col md="12">
            <div
              class="image"
              style="background-image: url('/penerimaan-banner.jpg')"
            ></div>
          </b-col>
        </b-row>
      </b-container>

      <div class="nav-page">
        <b-container>
          <b-row>
            <b-col>
              <b-link to="" v-scroll-to="'.ppds'">PPDS </b-link>
              <b-link to="" v-scroll-to="'.mahasiswa'">Mahasiswa </b-link>
              <b-link to="" v-scroll-to="'.fasilitas'">Fasilitas </b-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div class="ppds white-wrap">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h2>PPDS</h2>
            <div class="section-subtitle">
              <p>
                Departemen Kardiologi dan Kedokteran Vaskular FKUI
                menyelenggarakan Program Pendidikan Dokter Spesialis (PPDS) Ilmu
                Penyakit Jantung dan Pembuluh Darah. Jalur masuk satu-satunya
                untuk menjadi peserta Program Pendidikan Dokter Spesialis Ilmu
                Penyakit Jantung dan Pembuluh Darah adalah melalui jalur Seleksi
                Masuk Universitas Indonesia (SIMAK-UI).
              </p>
              <p>
                Info lengkap mengenai cara pendaftaran dan proses penerimaan
                dapat dilihat di situs Penerimaan UI di
                https://penerimaan.ui.ac.id. Brosur berisi informasi lengkap
                tentang PPDS dalam format PDF dapat diunduh di sini. (Apabila
                diklik akan otomatis mendownload PDF. PDF terlampir)
              </p>
              <p>
                Untuk informasi dan keterangan lebih lanjut, silahkan hubungi
                :<br /><br />

                Sekretariat Program Pendidikan Dokter Spesialis Jantung dan
                Pembuluh Darah Departemen Kardiologi dan Kedokteran Vaskular
                FKUI Jl. Letjen S. Parman Kav 87, Slipi, Jakarta Barat, 11420
                Telp. 021-568 4085 Ext. 1427 Fax. 021-568 6203 E-Mail :
                sekretariat@kardiologi-ui.com
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="mahasiswa gray-wrap">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h2>Mahasiswa</h2>
            <div class="section-subtitle">
              <p>
                Departemen Kardiologi dan Kedokteran Vaskular FKUI
                menyelenggarakan Modul Praktik Klinik Kardiovaskular dan Bantuan
                Hidup Jantung Lanjut (BHJL) untuk Mahasiswa FKUI semester 10 dan
                11 KBK FKUI 2012. Modul diselenggarakan selama 4 minggu berisi
                berbagai kegiatan pembelajaran yang mendorong mahasiswa untuk
                belajar secara aktif dan mandiri.
              </p>
              <p>
                Selama menjalani modul ini diharapkan mahasiswa FKUI mengerti
                dan mampu menegakkan diagnosis penyakit-penyakit kardiovaskular
                serta memberikan pengobatan sesuai dengan kompetensi yang harus
                dicapai sebagai dokter pada pelayanan primer. Selain itu juga
                mahasiswa FKUI diharapkan mampu mengenal dan mengelola masalah
                kegawat daruratan di bidang kardiovaskular yang akan dihadapi
                saat bekerja sebagai dokter pada pelayanan primer dikemudian
                hari.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
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
                Departemen Kardiologi dan Kedokteran Vaskular FKUI memberikan
                pendidikan dan pengajaran kepada Peserta Program Pendidikan
                Dokter Spesialis Jantung dan Pembuluh Darah FKUI dan Mahasiswa
                S1 FKUI. Fasilitas pendidikan yang tersedia diantaranya:
              </p>
              <p>
                1. Ruang Kuliah Mahasiswa S1 Departemen Kardiologi dan
                Kedokteran Vaskular FKUI <br>
                2. Ruang Konferensi Ilmiah Departemen
                Kardiologi dan Kedokteran Vaskular FKUI <br>
                3. Laboratorium
                Praktikum Keterampilan
              </p>
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