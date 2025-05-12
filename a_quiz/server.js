const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Erlaubt Anfragen

const quiz = [
  { frage: "RAM", antwort: "Random Access Memory", tipp: "Ran... Acc... Mem...", tipp2: "Rando... Acces... Memor..." },
        { frage: "GPU", antwort: "Graphics Processing Unit", tipp: "Gra... Pro... Uni...", tipp2: "Graphics Processin... Uni..." },
        { frage: "KVM", antwort: "Keyboard Video Mouse", tipp: "Key... Vid... Mou...", tipp2: "Keyboar... Vide... Mous..." },
        { frage: "APIPA", antwort: "Automatic Private IP Addressing", tipp: "Aut... Pri... IP Add...", tipp2: "Automati... Privat... IP Addressin..." },
        { frage: "PoE", antwort: "Power Over Ethernet", tipp: "Pow... Ove... Eth...", tipp2: "Powe... Ove... Etherne..." },
        { frage: "TAS", antwort: "Tool assisted speedrun", tipp: "Too... Ass... Spee...", tipp2: "Tool... Assiste... Speedru..." },
        { frage: "HTML", antwort: "Hypertext Markup Language", tipp: "Hyp... Mar... Lan...", tipp2: "Hypertex... Marku... Langua..." },
        { frage: "Bit", antwort: "Binary Digit", tipp: "Bin... Dig...", tipp2: "Binar... Digi..." },
        { frage: "(Vue) CLI", antwort: "Command Line Interface", tipp: "Comm... Lin... Int...", tipp2: "Comman... Line Interfac..." },
        { frage: "CPU", antwort: "Central Processing Unit", tipp: "Cen... Pro... Uni...", tipp2: "Centra... Processin... Uni..." },
        { frage: "DNS", antwort: "Domain Name System", tipp: "Dom... Nam... Sys...", tipp2: "Domai... Name Syste..." },
        { frage: "IP", antwort: "Internet Protocol", tipp: "Int... Pro...", tipp2: "Interne... Protoco..." },
        { frage: "GUI", antwort: "Graphical User Interface", tipp: "Gra... Use... Int...", tipp2: "Graphical Use... Interfac..." }
];

app.get('/api/quiz', (req, res) => {
  res.json(quiz);
  //http://localhost:3000/api/quiz
});

app.listen(3000, () => {
  console.log('Express-Server läuft auf Port 3000');
});
