# ⚡ LogicGate Academy

**LogicGate Academy** este o platformă interactivă de e-learning și un joc de puzzle conceput pentru a preda concepte de electronică digitală și porți logice (AND, OR, NOT, XOR, NAND, NOR, XNOR). Jucătorii sunt ghidați de **Spark**, un avatar AI interactiv, într-o misiune de a repara circuitele unei stații spațiale.

Proiectul îmbină educația cu un sistem avansat de gamificare, oferind o curbă de învățare progresivă, de la nivel de începător absolut până la masterat în sisteme logice.

---

## ✨ Funcționalități Principale

* **Implicit Player Profiling (Prolog Interactiv):** Fără formulare plictisitoare. Jocul evaluează cunoștințele jucătorului printr-un mini-joc practic la prima deschidere și îl plasează automat la nivelul potrivit de dificultate.
* **Integrare Contextuală:** Spark (avatarul) își adaptează replicile în funcție de profilul învățat și de timpul curent (dimineață, seară, noapte).
* **Mentor Virtual (Avatarul Spark):** Reacționează vizual (schimbări de expresie) și prin dialog la acțiunile jucătorului, oferind feedback imediat (încurajări sau avertizări de scurtcircuit).
* **Sistem de Recompense (XP & Badges):** Performanța este recompensată cu stele (1-3) în funcție de numărul de încercări și eficiența pieselor folosite. Stelele se transformă în XP, deblocând ranguri (Ucenic, Tehnician, Inginer Logic, Master Arhitect).
* **Mecanică Drag & Drop:** Circuitele sunt asamblate vizual, folosind componente grafice (alimentate de `React Flow`).
* **Sinteză Audio Retro:** Feedback auditiv generat matematic în timp real (Web Audio API) pentru erori, comutatoare și victorii.
* **Harta "Skill Tree":** Un meniu șerpuit, stilizat și interactiv, care ilustrează progresul jucătorului de-a lungul celor 31 de niveluri disponibile.
* **Manual Integrat:** O secțiune de "Teorie & Ajutor" accesibilă oricând (Modal), fără a întrerupe starea jocului.

---

## 🛠️ Tehnologii Utilizate

* **Frontend:** React.js, Vite, React Flow (pentru vizualizarea și logica grafurilor de circuit), CSS (Flexbox, animații).
* **Backend:** Node.js, Express.js.
* **Stocare Date:** Bază de date JSON pentru niveluri (`levels.json`), `localStorage` pentru progresul și setările jucătorului.

---

## 🚀 Cum să rulezi jocul pe calculatorul tău

Proiectul este împărțit în două părți: `client` (interfața grafică) și `server` (API-ul care furnizează nivelurile). Trebuie să le pornești pe amândouă.

### Cerințe preliminare
* Asigură-te că ai instalat **[Node.js](https://nodejs.org/)** (versiunea 16 sau mai nouă). Node.js include automat și `npm` (Node Package Manager).

### Pași de instalare și rulare

**1. Descarcă / Clonează proiectul**
Extrage fișierele proiectului într-un folder pe calculatorul tău.

**2. Pornește Serverul (Backend)**
Deschide un terminal (Command Prompt, PowerShell sau terminalul din VS Code), navighează în folderul `server` și pornește aplicația:
```bash
cd server
npm install
npm start 
```

**3. Pornește Clientul (Frontend)**
Deschide un al doilea terminal (lasă-l pe primul deschis să ruleze în fundal), navighează în folderul client și pornește interfața:
```bash
cd client
npm install
npm run dev
```
