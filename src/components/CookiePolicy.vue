<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CookiePolicy",
});
</script>

<template>
  <div class="cookie-policy-terms">
    <h1>Cookie Policy</h1>
    <p>This Cookie Policy explains what cookies are and how we use them.</p>

    <h2>What are cookies?</h2>
    <p>
      Cookies are small text files that are placed on your device to help the
      website provide a better user experience. They are widely used to make
      websites work, or work more efficiently, as well as to provide information
      to the owners of the site.
    </p>

    <h2>How we use cookies?</h2>
    <p>
      We use cookies for several reasons detailed below. Unfortunately, in most
      cases, there are no industry-standard options for disabling cookies
      without completely disabling the functionality and features they add to
      this site. It is recommended that you leave on all cookies if you are not
      sure whether you need them or not in case they are used to provide a
      service that you use.
    </p>

    <h2>Disabling cookies</h2>
    <p>
      You can prevent the setting of cookies by adjusting the settings on your
      browser (see your browser's Help for how to do this). Be aware that
      disabling cookies will affect the functionality of this and many other
      websites that you visit. Disabling cookies will usually result in also
      disabling certain functionality and features of this site. Therefore, it
      is recommended that you do not disable cookies.
    </p>

    <h2>The cookies we set</h2>
    <ul>
      <li>
        <strong>Site preferences cookies</strong>: To provide you with a great
        experience on this site, we provide the functionality to set your
        preferences for how this site runs when you use it. In order to remember
        your preferences, we need to set cookies so that this information can be
        called whenever you interact with a page that is affected by your
        preferences.
      </li>
    </ul>

    <h2>Third-Party Cookies</h2>
    <p>
      In some special cases, we also use cookies provided by trusted third
      parties. The following section details which third-party cookies you might
      encounter through this site.
    </p>
    <ul>
      <li>
        <strong>Google AdSense</strong>: The Google AdSense service we use to
        serve advertising uses a DoubleClick cookie to serve more relevant ads
        across the web and limit the number of times a given ad is shown to you.
        For more information on Google AdSense, see the official
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          >Google AdSense privacy FAQ</a
        >.
      </li>
    </ul>

    <h2>More Information</h2>
    <p>
      If you are still looking for more information, you can contact us through
      one of our preferred contact methods:
    </p>
    <ul>
      <li>Email: giuliopiedev@gmail.com</li>
    </ul>
  </div>
</template>

<style scoped>
.cookie-policy-terms {
  padding: 20px;
  min-height: 100vh;

  background-color: var(--background-color-main);
}

.cookie-policy-terms h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  color: var(--color-heading);
  top: -10px;
}

.cookie-policy-terms h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
}

.cookie-policy-terms h3 {
  font-size: 1.2rem;
  color: var(--color-caption);
}

.cookie-policy-terms a {
  color: var(--background-color-secondary);
  text-decoration: underline;
}

.cookie-policy-terms a:hover {
  color: var(--background-color-secondary);
}

@media (max-width: 768px) {
  .cookie-policy-terms h1 {
    font-size: 2rem;
    margin-top: 10px;
  }

  .cookie-policy-terms h2 {
    font-size: 1.4rem;
  }

  .cookie-policy-terms h3 {
    font-size: 1rem;
  }
}
</style>
