<template>
  <h1> Abkürzung - Quiz </h1>
  <hr>
  <p> Schreibe die Abkürzungen aus :) </p>
  <FragenCom
    v-if="beginn"
    @richtig="naechsteFrage"
    :frage="fragen[currentIndex].frage"
    :antwort="fragen[currentIndex].antwort"
    :tipp="fragen[currentIndex].tipp"
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
</template>

<script>

import FragenCom from '@/components/FragenCom.vue';

export default {
  name: 'App',
  components: {
    FragenCom,
  },
  data() {
    return {
      beginn: true,
      fragen: [
        { frage: "RAM", antwort: "Random Access Memory", tipp: "Ran... Acc... Mem..." },
        { frage: "GPU", antwort: "Graphics Processing Unit", tipp: "Gra... Pro... Uni..." },
        { frage: "KVM", antwort: "Keyboard Video Mouse", tipp: "Key... Vid... Mou..." },
        { frage: "APIPA", antwort: "Automatic Private IP Addressing", tipp: "Aut... Pri... IP Add..." },
        { frage: "PoE", antwort: "Power Over Ethernet", tipp: "Pow... Ove... Eth..." },
        { frage: "TAS", antwort: "Tool assisted speedrun", tipp: "Too... Ass... Spee..." },
        { frage: "HTML", antwort: "Hypertext Markup Language", tipp: "Hyp... Mar... Lan..." },
        { frage: "Bit", antwort: "Binary Digit", tipp: "Bin... Dig..." },
        { frage: "(Vue) CLI", antwort: "Command Line Interface", tipp: "Comm... Lin... Int..." },
        { frage: "CPU", antwort: "Central Processing Unit", tipp: "Cen... Pro... Uni..." },
        { frage: "DNS", antwort: "Domain Name System", tipp: "Dom... Nam... Sys..." },
        { frage: "IP", antwort: "Internet Protocol", tipp: "Int... Pro..." },
        { frage: "GUI", antwort: "Graphical User Interface", tipp: "Gra... Use... Int..." }
      ],
      // => Insgesamt: 13
      // Funktioniert nicht, weil ich im data Block nicht auf andere data-Properties zugreifen kann mit this
      // Lösung: computed property
      // currentIndex: (Math.floor(Math.random() * this.fragen.length))
      currentIndex: 0
    }
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
}

h1 {
  color: white;
  font-size: 50px;
}

hr {
  width: 1050px;
}

p {
  color: white;
  margin: 40px;
  font-size: 25px;
}

.winscreen {
  background-color: #F9F9F9;
  width: 1050px;
  height: 550px;
  border-radius: 80px;
  margin: auto;
  /*background-color: #B3DD55;*/
}

.again {
  background-color: #EC7FA9;
  width: 1050px;
  height: 450px;
  border-radius: 60px 60px 80px 80px;
  position: relative;
  top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
}

.winscreen > p {
  position: relative;
  top: 50px;
  font-size: 40px;
  color: black;
  font-weight: bold;
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
  position: relative;
  top: 10px;
  border: 1px solid white;
}

.again > button:hover {
  background-color: #d65687;
}
</style>
