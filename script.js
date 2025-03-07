document.addEventListener("DOMContentLoaded", function () {
    const ads = document.querySelectorAll(".ad-box");
    let currentAdIndex = Math.floor(Math.random() * ads.length);
    let adContainer = document.getElementById("ad-container");

    function showAd(index) {
        ads.forEach(ad => ad.style.display = "none");
        ads[index].style.display = "block";
    }

    showAd(currentAdIndex);

    setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % ads.length;
        showAd(currentAdIndex);
    }, 10000);

    document.getElementById("close-ad").addEventListener("click", function () {
        adContainer.style.display = "none";
    });

    function updateDate() {
        const dateDisplay = document.getElementById("date-display");
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.innerText = now.toLocaleDateString('bn-BD', options);
    }

    updateDate();
    setInterval(updateDate, 60000);
});
