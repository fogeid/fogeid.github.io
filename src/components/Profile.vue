<template>
  <div class="profile text-primary text-center">
    <div class="row justify-center">
      <div class="col-md-7 col-xs-10 flex justify-center">
        <q-avatar size="150px">
          <img class="profile__photo" src="../assets/photo.jpg" alt="Diego Batista" />
        </q-avatar>
        <div class="profile__inf">
          <h1 class="profile__info__title text-h4 text-weight-bold q-mb-none">{{ name }}</h1>
          <h2 class="profile__info__subtitle text-subtitle1 q-mb-none">
            {{ course }} at
            <a
              class="profile__info__linkUniversity"
              :href="linkUniversity"
              target="_blank"
            >{{ university }}</a>
          </h2>
          <h2 class="profile__info__subtitle text-subtitle1 q-mt-none">
            Front-end Developer Working @
            <a
              class="profile__info__linkWork"
              :href="linkWork"
              target="_blank"
            >{{ work }}</a>
          </h2>
          <p class="profile__info__description text-body2 text-weight-light q-my-none">
            Hi, I'm Diego Batista, a Computer Science student at the Universidade Federal do Mato Grosso
            and a front-end developer at the startup Estuda.com, I'm passionate about technology,
            sports, beer and coffee. I really like Front-End / Back-End and enthusiasm for machine
            learning. Since I was a child, I like technology and computers, so I decided to pursue
            an IT career.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      name: "Diego Batista",
      course: "Computer Science",
      university: "Universidade Federal do Mato Grosso",
      linkUniversity: "https://www.ufmt.br/",
      work: "Zup Innovation",
      linkWork: "https://www.zup.com.br/"
    };
  }
};
</script>

<style scoped>
.profile__photo {
  border: 2.5px solid #eb2f06;
}
.profile__info__linkUniversity,
.profile__info__linkWork {
  text-decoration: none;
  transition: all 0.3s ease;
  color: #eb2f06;
}
.profile__info__linkUniversity:hover,
.profile__info__linkWork:hover {
  color: #ffffff;
}

@media (min-width: 992px) {
  .profile__info__title {
    font-size: 2.8rem;
  }
  .profile__info__subtitle,
  .profile__info__description {
    font-size: 1rem;
  }
}
</style>
