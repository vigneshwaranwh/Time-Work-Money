const toggles = document.querySelectorAll(".toggle");

const time = document.getElementById("time");

const work = document.getElementById("work");

const money = document.getElementById("money");

const doTheTrick = (theClickedOne) => {

    if (time.checked && work.checked && money.checked) {

        if (time === theClickedOne) money.checked = false;

        if (work === theClickedOne) time.checked = false;

        if (money === theClickedOne) work.checked = false;

    }

};

toggles.forEach((toggle) => toggle.addEventListener("change", (e) => doTheTrick(e.target)));