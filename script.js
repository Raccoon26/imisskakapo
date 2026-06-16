const graduationDate =
new Date("2026-06-16T00:00:00+09:00");

function updateCounter(){

    const now = new Date();

    const diff =
    now - graduationDate;

    const days =
    Math.floor(
        diff /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        diff /
        (1000 * 60 * 60)
    ) % 24;

    const minutes =
    Math.floor(
        diff /
        (1000 * 60)
    ) % 60;

    const seconds =
    Math.floor(
        diff /
        1000
    ) % 60;

    document.getElementById("counter")
    .textContent =
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

}

updateCounter();

setInterval(
    updateCounter,
    1000
);
