<template>
  <div id="app" class="min-h-screen bg-white font-sans antialiased">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>

<style>
/* https://www.npmjs.com/package/portal-vue */

/* @import url('./styles/main.css'); */
/*
    1) NPM: npm install tailwindcss --save-dev
    2) package.json: 
      "postcss": {
          "plugins": {
            "tailwindcss": "../tailwind.js",
            "autoprefixer": {}
          }
        },
    3) VS Code Terminal: ./node_modules/.bin/tailwind init tailwind.js and move to src
    4) @tailwinds, in order, below or copy main.css and add 
  @import url('./styles/main.css');
    5) npm run serve
   */

@tailwind preflight;
@tailwind components;
@tailwind utilities;
@import url("https://rsms.me/inter/inter-ui.css");
@import "./less/components/Navbar.css";
</style>

