const months = ["March", "Jan", "Feb", "Dec"];

const rta = months.sort();
console.log(rta);

const numbers = [1, 30, 4, 21, 100000];
const rt2 = numbers.sort((a,b) => a - b);
console.log(rt2);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const rta3 = words.sort();
const rta4 = words.sort((a,b) => a.localeCompare(b));
console.log(rta3, rta4);


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const rt5 = orders.sort((a,b) => a.total - b.total);
console.log(rt5);