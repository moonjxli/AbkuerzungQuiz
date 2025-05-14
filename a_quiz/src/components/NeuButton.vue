<template>
    <div class="bodyNeuButton">
        <div class="button-con">
            <button id="button" @click="showfield" v-if="show1"> neue Wörter </button>
        </div>

        <div class="show" v-if="show">
            <div class="neueWoerter">
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
        border: 5px solid rgb(21, 255, 0);

        margin-top: 75px;
        padding: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .button-con {
        /*position: relative;
        top: 150px;*/

        border: 5px solid rgb(0, 102, 255);
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
        /*position: relative;*/

        z-index: 3;
        position: absolute;
        bottom: 35px;
        right: 9px;

        width: 1050px;
        height: 600px;
        border-radius: 80px;

        background-color: #81B048;

        border: 5px solid rgb(255, 153, 0);

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
        border: 1px solid white;
        margin-top: -30px;
        margin-bottom: 20px;
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

        position: relative;
        bottom: 100px;

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