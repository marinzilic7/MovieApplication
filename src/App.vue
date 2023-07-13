<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg bgNav">
      <div class="container-fluid">
        <img src="./images/logo.png" alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-list burger"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 col-s-1">
            <li class="nav-item">
              <RouterLink to="/">Movies</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about">Series</RouterLink>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 searchBar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search SVG"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
/* Definiranje boja  */

.bgNav {
  background-color: #2a2a2a;
}

li a {
  margin-left: 3rem;
  color: #fff;
  text-decoration: none;
}

img {
  width: 64px;
  height: 40px;
}

.searchBar {
  width: 230px;
  height: 40px;
  border-radius: 30px;
  outline: none;
  border: none;
  background-color: #202020;
  color: #fff;
}

.searchBar::placeholder {
  color: #fff;
  font-size: 15px;
}

.SVG {
  color: #fff;
  position: relative;
  right: 3rem;
  top: 0.7rem;
}

.burger {
  color:#fff; 
 
}

/* RESPONSIVE */

@media only screen and (max-width: 600px) {
  /* For tablets: */
  .col-s-1 {
    display: flex;
    align-items: center;
    margin-top:30px;
    font-size: 20px;
    letter-spacing: 1px;
    gap: 15px;
    position: relative;
    right:10px;
   }
   .searchBar{
    margin-top: 20px;
    margin-left:20px;
    position: relative;
    left:10px;
    width:100%;
    
   }

   .SVG{
    position: relative;
    top:2rem;
   }

   
}
</style>
