<template>
  <header>
    <b-navbar type="dark" toggleable="lg">
      <b-navbar-brand to="/"><img src="/logo-new.png" alt=""/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto">
          <b-nav-item-dropdown text="Tentang Kami">
            <b-dropdown-item to="/tentang">Sambutan</b-dropdown-item>
            <b-dropdown-item to="/tentang/sejarah">Sejarah</b-dropdown-item>
            <b-dropdown-item to="/tentang/visi-misi"
              >Visi & Misi</b-dropdown-item
            >
            <b-dropdown-item to="/tentang/struktur-organisasi"
              >Struktur Organisasi</b-dropdown-item
            >
            <b-dropdown-item to="/tentang/staf">Staf Pengajar</b-dropdown-item>
            <b-dropdown-item to="/tentang/alumni">Alumni</b-dropdown-item>
            <b-dropdown-item to="/tentang/ppds">PPDS</b-dropdown-item>
            <b-dropdown-item to="/tentang/akreditasi"
              >Akreditasi & Penghargaan</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Pendidikan">
            <b-dropdown-item to="/pendidikan">PPDS</b-dropdown-item>
            <b-dropdown-item to="/pendidikan/updates-ppds"
              >Updates PPDS</b-dropdown-item
            >
            <b-dropdown-item to="/pendidikan/mahasiswa"
              >Mahasiswa</b-dropdown-item
            >
            <b-dropdown-item to="/pendidikan/fasilitas"
              >Fasilitas</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Penelitian">
            <b-dropdown-item to="/penelitian">Fasilitas</b-dropdown-item>
            <b-dropdown-item to="/penelitian/daftar-penelitian"
              >Daftar Penelitian</b-dropdown-item
            >
            <b-dropdown-item to="/penelitian/kerjasama-penelitian"
              >Kerjasama Penelitian</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item to="/pengabdian-masyarakat"
            >Pengabdian Masyarakat</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="right-nav" right>
          <b-nav-item to="/galeri">Galeri</b-nav-item>
          <b-nav-item to="/publikasi">Publikasi</b-nav-item>
          <b-nav-item to="/berita">Berita & Agenda</b-nav-item>
          <b-nav-item to="">Member</b-nav-item>
          <li class="nav-item lang">
            <b-link @click="switchLang('id')" target="_self">ID</b-link>
            <b-link @click="switchLang('en')" target="_self">EN</b-link>
          </li>
          <b-nav-item to="/search"><img src="/search.png" alt=""/></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async switchLang(value) {
      if (value === "id") {
        await this.$axios.$get(`/language/ind`);
      } else {
        await this.$axios.$get(`/language/en`);
      }
      location.reload();
    }
  }
};
</script>
