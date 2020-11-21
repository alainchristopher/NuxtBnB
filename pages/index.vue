<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.objectID"
      style="font-family: helvetica; float: Left; margin: 10px"
    >
      <nuxt-link :to="`/home/${home.objectID}`" prefetch
        ><HomeCard :home="home"
      /></nuxt-link>
    </div>
  </div>
</template>

<script>
import homes from "~/data/homes";
export default {
  head() {
    return {
      title: "homepage",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "this is a homepage",
        },
      ],
    };
  },
  data() {
    return {
      homes: homes.slice(0, 3),
    };
  },
};
</script>