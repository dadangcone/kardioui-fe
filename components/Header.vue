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
              >Akreditasi & Penghaargaan</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Penerimaan">
            <b-dropdown-item to="/penerimaan">PPDS</b-dropdown-item>
            <b-dropdown-item to="/penerimaan/updates-ppds"
              >Updates PPDS</b-dropdown-item
            >
            <b-dropdown-item to="/penerimaan/mahasiswa"
              >Mahasiswa</b-dropdown-item
            >
            <b-dropdown-item to="/penerimaan/fasilitas"
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
          <b-nav-item to="/search"><img src="/search.png" alt=""/></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
