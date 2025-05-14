<template>
  <h1> Abkürzung - Quiz </h1>
  <hr>
  <p class="aufgabe"> Schreibe die Abkürzungen aus :) </p>
  
  <FragenCom
    v-if="beginn"
    @richtig="naechsteFrage"
    :frage="fragen[currentIndex]?.frage"
    :antwort="fragen[currentIndex]?.antwort"
    :tipp="fragen[currentIndex]?.tipp"
    :tipp2="fragen[currentIndex]?.tipp2"
    :currentIndex="currentIndex">
  </FragenCom>

  <div v-else class="winscreen">
      <p> GESCHAFFT! </p>
      <div class="again">
        <p> Jetzt hast du alle Abkürzungen drauf :) Weiter so! </p>
        <p> Du willst noch weiter lernen? Klick auf Ja! </p>
        <button @click="spiel"> JA </button>
      </div>
  </div>

  <NeuButton @NEU="neueWoerter"></NeuButton>

  <p class="coder"> made by Julia </p>
</template>

<script>

import FragenCom from '@/components/FragenCom.vue';
import NeuButton from './components/NeuButton.vue';

export default {
  name: 'App',
  components: {
    FragenCom,
    NeuButton
  },
  data() {
    return {
      beginn: true,
      fragen: [],
      // => Insgesamt: 13
      // Funktioniert nicht, weil ich im data Block nicht auf andere data-Properties zugreifen kann mit this
      // Lösung: computed property
      // currentIndex: (Math.floor(Math.random() * this.fragen.length))
      currentIndex: 0
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/quiz')
    .then(res => res.json())
    .then(data => {
      this.fragen = data;
    })
    .catch(err => {
      console.error('Fehler beim Laden der Fragen:', err);
    });
  },
  //ähnlich wie data() nur dass hier eine Weiterverarbeitung passieren kann mit den Daten
  // und dann kann ich "currentIndex" als Variable benutzen für template oder so ...
  /*computed: {
    currentIndex() {
      return Math.floor(Math.random() * (this.fragen.length));
    }
  },*/

  methods: {
    naechsteFrage() {
        if (this.currentIndex < this.fragen.length - 1) {
            this.currentIndex++;
        } else {
            // Quiz-Ende
            this.beginn = false;
        }
    },
    spiel() {
      this.beginn = true;
      this.currentIndex = 0;
    },
    neueWoerter(payload) {
      console.log(payload.frageNeu);
      console.log(payload.antwortNeu);
      console.log(payload.hinweisNeuEins);
      console.log(payload.hinweisNeuZwei);
      fetch('http://localhost:3000/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then(response => {
          if(!response.ok) {
            throw new Error('Fehler beim Senden der Daten')
          }
          return response.json();
        })
        .then(result => {
          console.log("Es war Erfolgreich");
        })
        .catch(error => {
          console.error("Fehler: ", error);
      });
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

body {
  background-color: #2B2B2B;
  font-family: "Source Sans 3", sans-serif;
  text-align: center;
  
  min-height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0;
  padding: 0;
}

h1 { /* Abkürzung - Quiz */
  color: white;
  font-size: 50px;

  border: 5px solid red;
}

hr { /* Ist diese Linie unter "Abkürzung - Quiz" */
  width: 1050px;

  border: 5px solid red;
}

.aufgabe { /* Txt: Schreibe die Abkürzungen aus :) */
  color: rgb(255, 255, 255);
  margin: 40px;
  font-size: 25px;

  border: 5px solid red;
}

.winscreen { /* Kommt am Ende vom Quiz und ist der weiße Part */
  background-color: #F9F9F9;
  width: 1050px;
  height: 550px;
  border-radius: 80px;
  margin: auto;
  /*background-color: #B3DD55;*/

  border: 5px solid red;
}

.again { /* Kommt am Ende vom Quiz und ist der pinke Part mit dem Button */
  background-color: #EC7FA9;
  width: 1050px;
  height: 450px;
  border-radius: 60px 60px 80px 80px;
  font-weight: bold;

  /*position: relative;
  */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 5px solid red;
}

.winscreen > p {
  /*position: relative;
  top: 50px;*/
  font-size: 40px;
  color: black;
  font-weight: bold;

  border: 5px solid red;
}

.again > button {
  border-radius: 30px;
  height: 100px;
  width: 300px;
  z-index: 1;
  background-color: #db6291;
  border: none;
  color: white;
  font-size: 60px;
  font-family: "Source Sans 3", sans-serif;
  font-weight: 600;
  cursor: pointer;
  /* position: relative;
  top: 10px; */
  border: 1px solid white;

  border: 5px solid red;
}

.again > button:hover {
  background-color: #d65687;
}

.coder { /* made by Julia */
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  margin: 10px;

  border: 5px solid red;
}
</style>
