const sum = require("./sum.js")

const compBtn = document.getElementById("computeBtn");

compBtn.addEventListener("click", function(){
    const result = document.getElementById('result');
    const first = document.getElementById('first');
    const second = document.getElementById('second');

    result.innerHTML = sum(first.value, second.value);
});