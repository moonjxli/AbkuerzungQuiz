<template>
    <div class="frage">
        <h1> {{frage}} </h1>
        <div class="antwort">
            <!-- &nbsp = Leerzeichen -->
            <div class="hinweis" v-if="hinweis"> <b> Hinweis: </b> &nbsp {{ tipp }} </div>
            <div class="hinweis" v-if="hinweis2"> <b> Letzter Hinweis: </b> &nbsp {{ tipp2 }} </div>
            <input v-model="input" type="text" placeholder="Eingabe..." id="input" @keydown.enter="submit" autofocus>
        </div>
        <div class="button-container">
            <button class="submit" @click="submit" > submit </button>
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

    h1 {
        color: black;
        position: relative;
        top: 40px;
    }

    .frage {
        background-color: #F9F9F9;
        width: 1050px;
        height: 550px;
        border-radius: 80px;
        margin: auto;
    }

    .antwort {
        background-color: #5DBAFF;
        width: 1050px;
        height: 450px;
        border-radius: 60px 60px 80px 80px;
        position: relative;
        top: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
        position: relative;
        bottom: 20px;
        outline: none;
    }

    .button-container {
        margin-top: -10px;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .submit {
        border-radius: 30px;
        height: 100px;
        width: 300px;
        z-index: 1;
        background-color: #006EC0;
        border: none;
        color: white;
        font-size: 60px;
        font-family: "Source Sans 3", sans-serif;
        font-weight: 600;
        cursor: pointer;
    }

    .submit:hover {
        background-color: #0363ad;
    }
</style>