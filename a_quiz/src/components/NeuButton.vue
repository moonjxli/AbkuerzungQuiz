<template>
    <div class="button-con">
        <button id="button" @click="showfield"> neue Wörter </button>
    </div>

    <div class="show" v-if="show">
        <div class="neueWoerter"> Hallo </div>
    </div>
</template>

<script>

export default {
    name: 'NeuButton',

    data() {
            return {
                show: false,
            }
        },

        methods: {
            showfield() {
                this.show = true;
            }
        }
}

</script>

<style scoped>
    .button-con {
        /*position: relative;
        top: 150px;*/
        width: 100%;

        border: 5px solid rgb(21, 255, 0);
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

        border: 5px solid rgb(0, 255, 0);
    }

    #button:hover {
        background-color: #0363ad;
    }

    .neueWoerter {
        /*position: relative;*/

        width: 100px;
        height: 100px;
        z-index: 2;
        background-color: rgb(255, 255, 255);

        border: 5px solid rgb(0, 255, 13);
    }
</style>