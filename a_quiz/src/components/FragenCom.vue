<template>
    <div class="bodyFragen">

        <div class="frage-con">
            <h1> {{frage}} </h1> <!-- z.B. RAM -->

            <div class="antwort"> <!-- Input vom User -->
                <!-- &nbsp = Leerzeichen
                     Falls der User Fehler macht, kommen die Hinweise -->
                <div class="hinweis" v-if="hinweis"> <b> Hinweis: </b> &nbsp {{ tipp }} </div>
                <div class="hinweis" v-if="hinweis2"> <b> Letzter Hinweis: </b> &nbsp {{ tipp2 }} </div>

                <!-- Das Eingabe-Feld für den Input vom User -->
                <input v-model="input" type="text" placeholder="Eingabe..." id="input" @keydown.enter="submit" autofocus>
            </div>

            <div class="button-container">
                <!-- Submit Button, um den Input zu senden -->
                <button class="submit" @click="submit" > submit </button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'FragenCom',

        props: {
            //"readonly"
            frage: String,
            antwort: String,
            tipp: String,
            tipp2: String,
            currentIndex: Number
        },
        
        data() {
            return {
                locked: false,
                falschCount: 0,
                hinweis: false,
                hinweis2: false
            }
        },

        watch: {
            frage() {
                this.input = "";
            }
        },

        methods: {
            submit() {
                if(this.locked) return;

                const input = document.getElementById("input");

                let value = input.value.toLowerCase().trim();
                let antwort = this.antwort.toLowerCase().trim();

                if(value === '') {
                    switch(this.falschCount) {
                        case 0:
                            break;
                        case 1:
                            break;
                        case 2:
                            this.hinweis = true;
                            break;
                        case 3:
                            this.hinweis = false;
                            this.hinweis2 = true;
                            break;
                        default:
                            this.hinweis = false;
                            this.hinweis2 = true;
                            alert("...");
                            alert("okay...");
                            alert("Meinetwegen...");
                            alert("... Du darfst Google benutzen ...");
                            break;
                    }

                    input.style.border = '5px solid #FD5D5D';
                    input.placeholder = "Eingabe ist leer >:(";
                } else if (value === antwort) {
                    this.hinweis = false;
                    this.hinweis2 = false;
                    this.falschCount = 0;

                    this.locked = true;
                    input.style.border = '5px solid #89AC46';

                    setTimeout(() => {
                        this.$emit('richtig');
                        this.locked = false;
                        input.style.border = 'none';
                        input.placeholder = "Eingabe...";
                    }, 900);
                    
                } else {
                    this.falschCount++;

                    console.log(" wow " + this.falschCount);
                    alert("Leider falsch!");
                    input.style.border = '5px solid #FFBB64';
                    input.placeholder = "Du schaffst das!";

                    switch(this.falschCount) {
                        case 1:
                            break;
                        case 2:
                            this.hinweis = true;
                            break;
                        case 3:
                            this.hinweis = false;
                            this.hinweis2 = true;
                            break;
                        default:
                            this.hinweis = false;
                            this.hinweis2 = true;
                            alert("...");
                            alert("okay...");
                            alert("Meinetwegen...");
                            alert("... Du darfst Google benutzen ...");
                            break;
                    }

                    
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .bodyFragen { /* bezieht sich nur auf direkte Kinder, keine Auswirkung auf antwort oder submit */
        border: 10px solid brown;

        margin: 0;
        padding: 0;
    }

    h1 {
        color: black;
        /*position: relative;
        top: 40px;*/

        border: 5px solid rgb(0, 17, 255);

        margin: 0;

        position: relative;
        top: 50px;
    }

    .frage-con { /* Ist der weiße Kasten */
        background-color: #F9F9F9;
        width: 1050px;
        height: 550px;
        border-radius: 80px;

        border: 5px solid rgb(255, 0, 255);

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 0;
        padding: 0;
    }

    .antwort { /* Ist der blaue Kasten */
        background-color: #5DBAFF;
        width: 1050px;
        height: 450px;
        border-radius: 60px 60px 80px 80px;

        z-index: 1;
        position: relative;
        top: 115px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        border: 5px solid rgb(0, 255, 221);
    }

    .hinweis {
        position: relative;
        bottom: 70px;
        font-size: 30px;
    }

    input[type=text] {
        border-radius: 30px;
        height: 150px;
        width: 900px;
        border: none;
        font-size: 50px;
        padding-left: 50px;

        background-color: rgb(255, 217, 0);

        /*position: relative;
        top: 150px;*/

        outline: none;
    }

    .button-container {
        /*margin-top: -10px;
        display: flex;
        justify-content: center;*/
        width: 100%;

        border: 5px solid rgb(255, 81, 0);

        z-index: 2;
        position: relative;
        top: 50px;
    }

    .submit {
        border-radius: 30px;
        height: 100px;
        width: 300px;

        /*z-index: 1;*/

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