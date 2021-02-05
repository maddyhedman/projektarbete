<template>
  <div class="home">
    <Top/>
   <Card :card="chooseObject"/>
     <CardStack class="card-stack" v-bind:cardarray="getCardStack" v-on:addActiveCard="addActiveCard"></CardStack>
     <button @click="toAddCard">Add card</button>
 
  </div>
 
</template>

<script>
import Card from '@/components/Card.vue';
import Top from '@/components/Top.vue';
import CardStack from "@/components/CardStack.vue";

export default {
  components: {
    CardStack, Top, Card
  },
 data() {
   return {
     card: {
    cardClass: "",
    firstName: "",
    cardMonth: "",
    cardYear: "",
    cardVendor: "",
   },
   activeCard: [ ],
 }
   
 },


  computed: {
    getCardStack() {
      return this.$root.cardStack; 
    },
    chooseObject() {
      return this.activeCard[0];
    }
  },
  methods: {
    toAddCard() {
      this.$router.push('AddCard')
      
    },
   addActiveCard(index){
        if(this.activeCard.length > 0){
           this.activeCard.pop()
        } 
       this.activeCard.push(this.getCardStack[index]);
       
    },
},
};
</script>

<style scoped>

.card-stack {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}
button {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: rgb(168, 46, 46);
    border: .125rem solid rgb(119, 56, 56);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
}
.home {
width: 352px;
}
</style>
