export default function validateType4(helpers) {
    if (!helpers.allSwitchesUsed) return { isWon: false, msg: "Conectează toate semnalele pentru a respecta tabelul de adevăr!" };
    if (!helpers.noFloatingGates) return { isWon: false, msg: "Circuitul trebuie să fie complet conectat." };

    if (!helpers.isBulbOn) return { isWon: false, msg: null };
    return { isWon: true, msg: null };
}