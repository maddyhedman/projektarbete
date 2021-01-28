<template>
  <div class="home">
      <Top v-bind:cardclass="cardClass"></Top> 
     <CardStack v-bind:card="card"></CardStack>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  components: {
    CardStack, Top
  },
 data() {
   return {
     card: {
    cardClass: "",
    firstName: "",
    cardMonth: "",
    cardYear: "",
   }
 }
 },
  
};
</script>

<style scoped>

</style>
