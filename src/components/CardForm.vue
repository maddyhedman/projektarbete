<template>
  
<div class="app">
     <form @submit="onSubmit" class="form">
       
     <label>Kortnummer</label>
     <input type="text" v-model="card.cardClass" maxlength="16" placeholder="XXXX XXXX XXXX XXXX" class="col-2" />
       <label>För o efternamn</label>
     <input type="text" v-model="card.firstName" placeholder="First and Lastname" class="col-2"/>
       <label>Giltlig till</label>
       <br>
     <input type="number" v-model="card.cardMonth" size="2" min="1" max="12" value="0" class="col-1" placeholder="MM"/>
     <input type="number" v-model="card.cardYear" size="2" min="21" max="26" value="0" class="col-1" placeholder="YY"/>
      
      <label>Bank</label>
     <input list="browsers"  v-model="card.vendor" optional-value="1" class="col-2"/>
      <datalist id="browsers">
        <option value="Bitcoin"/>
        <option value="Blockchain Inc"/>
        <option value="Evil Corp"/>
        <option value="Ninja Bank"/>
       </datalist> 

<button type="submit" class="col-2">Add card</button>

  </form>
</div>
</template>

<script>

export default {

 props: {
     card: {
          type: Object,
            
        },
    },
 methods: {
     onSubmit(e) {
         const card ={
             id: Date.now(),
             holder: this.firstName,
             vendor: this.vendor,
             number: this.cardClass,
             validMonth: this.cardMonth,
             validYear: this.cardYear,
         }
         this.$root.cardStack.push(card);
         e.preventDefault();
     },
     vendor() {
this.$root.card.vendor=this.card.vendor;
     }
 },
}
</script>

<style scoped>
.col-1 {
    grid-column: auto/span 1;
    border: 1px solid #000;
    border-radius: .25rem;
    padding: .5rem;
    height: 2.6rem;
    margin: 0 0 .8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 1rem;
    width: 100%;
}

.col-2 {
    grid-column: auto/span 2;
    
    border: 1px solid #000;
    border-radius: .25rem;
    padding: .5rem;
    height: 2.6rem;
    margin: 0 0 .8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 1rem;
    width: 100%;
}

#app {
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: PT Mono,monospace;
    padding: 1rem;
    height: 100vh;
    max-width: 24rem;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.form {

    margin: 2rem 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
}
button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    border: .125rem solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
}
.submit {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 58px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    border: .125rem solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
    grid-column: auto/span 1;
}
</style>