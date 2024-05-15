<!-- LeftMain.vue -->
<script lang="ts">
import { defineComponent } from "vue";
import SocialNetworkIcon from "./icons/IconSocialNetwork.vue";
import GitHubIcon from "./icons/IconGitHub.vue";
import InstagramIcon from "./icons/IconInstagram.vue";
import LinkedInIcon from "./icons/IconLinkedIn.vue";
import TwitterIcon from "./icons/IconTwitter.vue";
import YouTubeIcon from "./icons/IconYouTube.vue";

export default defineComponent({
  name: "LeftMain",
  props: {
    msg: String,
  },
  components: {
    SocialNetworkIcon,
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    YouTubeIcon,
  },
  data() {
    return {
      githubUrl: "https://github.com/giuliopie",
      instagramUrl: "https://www.instagram.com/giulio_pie_dev",
      linkedinUrl: "https://www.linkedin.com/in/giulio-piepoli",
      twitterUrl: "https://twitter.com/Giulio_Pie",
      youtubeUrl: "https://www.youtube.com/@giulio_pie",
    };
  },
});
</script>

<template>
  <div class="left-main">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.png"
      width="350"
      height="350"
    />

    <div class="wrapper"></div>
    <!-- Contenuto della colonna sinistra -->
    <div class="greetings">
      <h1 class="orange">Giulio Piepoli</h1>
      <h2>Senior Application Engineer @ Mendix</h2>
      <h3>
        Passionate about cloud computing, I am excited about creating and
        improving cloud architectures. I started my career as a Full-Stack
        Developer in web applications and am currently a Senior Application
        Engineer at Mendix.
      </h3>
    </div>
    <div class="wrapper"></div>
    <div class="greetings">
      <h1 class="orange">Let's get in touch!</h1>
    </div>
    <div class="social-network-icons">
      <SocialNetworkIcon :dynamicHref="githubUrl">
        <template #social-network-icon>
          <GitHubIcon />
        </template>
      </SocialNetworkIcon>

      <SocialNetworkIcon :dynamicHref="instagramUrl">
        <template #social-network-icon>
          <InstagramIcon />
        </template>
      </SocialNetworkIcon>

      <SocialNetworkIcon :dynamicHref="linkedinUrl">
        <template #social-network-icon>
          <LinkedInIcon />
        </template>
      </SocialNetworkIcon>

      <SocialNetworkIcon :dynamicHref="twitterUrl">
        <template #social-network-icon>
          <TwitterIcon />
        </template>
      </SocialNetworkIcon>

      <SocialNetworkIcon :dynamicHref="youtubeUrl">
        <template #social-network-icon>
          <YouTubeIcon />
        </template>
      </SocialNetworkIcon>
    </div>
  </div>
</template>

<style scoped>
.left-main {
  width: 50%;
  background-color: var(--background-color-main);
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  align-self: center;
}
.wrapper {
  padding: 20px;
}
.orange {
  color: var(--color-heading);
}
.social-network-icons {
  margin-left: 2rem;
  display: flex;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
}
h3 {
  font-size: 1.2rem;
  color: var(--color-caption);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings {
    margin-left: 2rem;
  }
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
@media (max-width: 768px) {
  .left-main {
    width: 100%;
    min-height: auto;
    padding: 10px;
    justify-content: flex-start;
  }
  .logo {
    width: 150px;
    height: auto;
  }
  .greetings {
    text-align: center;
  }
  .social-network-icons {
    align-self: center;
    display: flex;
  }
  h1 {
    font-size: 2rem;
    margin-top: 10px;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1rem;
  }
}
</style>
