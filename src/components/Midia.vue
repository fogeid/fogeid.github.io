<template>
  <div class="midia text-center">
    <div class="row justify-center">
      <div class="col-md-7 col-xs-10">
        <h2 class="midia__title text-subtitle1 text-primary q-mt-lg">You can find me on:</h2>
        <ul class="midia__list q-pa-none row justify-center">
          <li class="midia__icons">
            <a
              class="midia__icons__link flex items-center q-mr-lg"
              :href="linkGithub"
              target="_blank"
            >
              <img class="midia__icons__img q-mx-sm" src="../assets/github.svg" alt="Github" />
              {{ github }}
            </a>
          </li>
          <li class="midia__icons">
            <a
              class="midia__icons__link flex items-center"
              :href="linkLinkedin"
              target="_blank"
            >
              <img class="midia__icons__img q-mx-sm" src="../assets/linkedin.svg" alt="Linkedin" />
              {{ linkedin }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Midia",
  data() {
    return {
      github: "Github",
      linkGithub: "https://github.com/fogeid",
      linkedin: "Linkedin",
      linkLinkedin: "https://www.linkedin.com/in/dbatista/"
    };
  }
};
</script>

<style scoped>
.midia__list {
  list-style: none;
}

.midia__icons__img {
  width: 30px;
}

.midia__icons__link {
  text-decoration: none;
  color: #eb2f06;
  transition: all 0.3s ease;
}

.midia__icons__link:hover {
  color: #ffffff;
}

@media (min-width: 992px) {
  .midia__title {
    font-size: 1rem;
  }
}
</style>