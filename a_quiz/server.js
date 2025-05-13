/*
BACKEND - Datei

für express.js -> npm install express
für cors -> npm install cors
*/

const express = require('express'); //holt die Express Funktion
const cors = require('cors');
/* cors = Schutzmechanismus ; kontrolliert von welchem Origin die Anfragen kommen
   regelt,wer von außen auf das Backend zugreifen darf und schützt vor ungewollten Zugriffen durch andere Webseiten oder Domänen
   Standardmäßig verbieten Browser aus Sicherheitsgründen, dass Webseiten JavaScript-Anfragen (z.B. mit fetch oder XMLHttpRequest) an ein Backend schicken, das auf einer anderen Domain läuft.
   Mit cors ist es erlaubt

   Frontend versucht ans Backend eine Anfrage zu senden
   Browser blockiert es standardmäßig (Same-Origin-Policy - Origin: Protokoll, Domäne, Port)
   Mit cors sind andere Ports erlaubt
*/
const app = express(); //erstellt aus der express Funktion das Backend

app.use(cors()); // Erlaubt alle Anfragen von allen Domänen ; kann man auch konfigurieren, sodass nur bestimmte Domänen erlaubt sind und aufs Backend zugreifen können

/* Implementierung von einer Datenbank
npm install pg-promise

const pgp = require("pg-promise"); -> holt die Funktion
const db = pgp("postgres://username:password@host:port/database");

username - der Owner;
passwort - vom Owner;
host - localhost;
port - auf welchem Port vom Server läuft die Datenbank
       Rechtsklick auf ,,PostgreSQL 17" -> ,,Properties" -> ,,Connection" -> da findet man den Port
database - der Name der database

db.one("SELECT $1 AS value", 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
*/
const pgp = require("pg-promise")();
const db = pgp("postgres://julia:otto1.@localhost:5432/quizdb"); //Datenbank

/*const quiz = [ //statisch im Backend implementiert, ohne Datenbank
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
];*/

//"Erstellen" von einem Pfad
app.get('/api/quiz', (req, res) => { //req - Request, res - Response ; nur GET-Anfragen von diesem Pfad sind erlaubt
  //res.json(quiz); //Ausgabe - Was kriegt der User zurück, wenn er diesen Pfad besucht
  db.any("SELECT * FROM quiz")
  /*
  db.any -> beliebig viele Zeilen werden ausgegeben 
  db.one -> nur eine Zeile wird erwartet
  */
  .then(function (data) {
    res.json(data);
    console.log("Alle Quiz-Einträge:", data);
  })
  .catch(function (error) {
    res.status(500).json({ error: error.message });
    console.log("ERROR:", error);
  });
});

app.listen(3000, () => { //auf welchem Port soll der Server erreichbar sein; ohne app.listen läuft der Server nicht und wäre von außen nicht erreichbar
  console.log('Express-Server läuft auf Port 3000');
  //http://localhost:3000/api/quiz
});

//Um den Server zu starten: node server.js im Terminal
//in einem extra Terminal, starte das Frontend mit npm run serve