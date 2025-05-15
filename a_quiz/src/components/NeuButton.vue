<template>
    <div class="bodyNeuButton">
        <div class="button-con">
            <button id="button" @click="showfield" v-if="show1"> neue Wörter </button>
        </div>

        
        <div class="neueWoerter" v-if="show">
            <button class="schliessen" @click="schliessen"> X </button>
                
            <p> Neue Wörter hinzufügen: </p>
                
            <div class="NeuFrageAntwort">
                <input type="text" id="frageNeu" placeholder="Abkürzung">
                <input type="text" id="antwortNeu" placeholder="Antwort">
            </div>
            
            <div class="NeuHinweise">
                <input type="text" id="hinweisNeuEins" placeholder="Hinweis 1">
                <input type="text" id="hinweisNeuZwei" placeholder="Hinweis 2">
            </div>
                
            <button class="submit" @click="submit" > submit </button>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'NeuButton',

    data() {
            return {
                show: false,
                show1: true
            }
    },

        methods: {
            showfield() {
                this.show = true;
                this.show1 = false;
            },
            schliessen(){
                this.show = false;
                this.show1 = true;
            },
            submit() {
                const frageNeu = document.getElementById("frageNeu").value;
                const antwortNeu = document.getElementById("antwortNeu").value;
                const hinweisNeuEins = document.getElementById("hinweisNeuEins").value;
                const hinweisNeuZwei = document.getElementById("hinweisNeuZwei").value;

                this.$emit("NEU", {
                    frageNeu: frageNeu,
                    antwortNeu: antwortNeu,
                    hinweisNeuEins: hinweisNeuEins,
                    hinweisNeuZwei: hinweisNeuZwei
                });
                
                this.show = false;
                this.show1 = true;
            }
        }   
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .bodyNeuButton {

        margin-top: 125px;
        margin-bottom: 50px;
        padding: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #button {
        border-radius: 30px;
        height: 100px;
        padding: 0 30px 0 30px;
        z-index: 1;
        background-color: #006EC0;
        border: none;
        color: white;
        font-size: 60px;
        font-family: "Source Sans 3", sans-serif;
        font-weight: 600;
        cursor: pointer;
    }

    #button:hover {
        background-color: #0363ad;
    }

    .neueWoerter {
        z-index: 3;
        
        position: fixed;
        bottom: 125px;

        width: 1050px;
        height: 600px;
        border-radius: 80px;

        background-color: #81B048;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .schliessen {
        background-color: red;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        
    }

    .schliessen:hover {
        background-color: rgb(182, 14, 14);
    }

    .NeuFrageAntwort > input[type=text] {
        border-radius: 30px;
        height: 90px;
        width: 800px;
        border: none;
        font-size: 30px;
        padding-left: 30px;
        background-color: #F9F9F9;
        margin: 20px;
        outline: none;
    }

    .NeuHinweise {
        display: flex;
        flex-direction: row;
    }

    .NeuHinweise > input[type=text] {
        border-radius: 30px;
        height: 90px;
        width: 400px;
        border: none;
        font-size: 30px;
        padding-left: 30px;
        background-color: #F9F9F9;
        margin: 20px;
        outline: none;
    }

    .neueWoerter > p {
        color: white;
        font-size: 50px;
        font-family: "Source Sans 3", sans-serif;
        font-weight: 600;
        margin: 0;
    }

    .submit {
        border-radius: 30px;
        height: 100px;
        width: 300px;

        z-index: 3;

        background-color: #006EC0;
        border: none;
        color: white;
        font-size: 60px;
        font-family: "Source Sans 3", sans-serif;
        font-weight: 600;
        cursor: pointer;
    }

    .submit:hover { /* Pseudo Klasse hover */
        background-color: #0363ad;
    }
</style>