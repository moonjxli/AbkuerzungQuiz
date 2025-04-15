<template>
    <div class="frage">
        <h1> Frage </h1>
        <div class="antwort">
            <input type="text" placeholder="Eingabe...">
        </div>
        <div class="button-container">
            <button class="submit"> submit </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FragenCom'
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
</style>