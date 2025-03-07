// Ad content configuration
const ads = [
    {
        image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e81fbf8ff_161663.jpg",
        title: "রূপালী সন্ধ্যার অপেক্ষায়",
        author: "নূরে আলম আলিফ",
        link: "https://www.facebook.com/profile.php?id=100004546849052"
    },
    {
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjqnOzA7iJ7PQ11zDwYZEb6ZsOEWbHs1kw_XeTEzTaY15GsF8ftSTRBn5MiUes52zyqVJp5j6jQEL4xKSp7v3Kb3NqZvjApzV6N1uzK9ETm7xMc5pJqY48bOqATwczo48PiR9aOXh0pAcWksJq4vB6ekpUcQ7QAEvWWWoHNFdru-YHYVy6lDBHuFpAx5w/w633-h309/%E0%A6%A4%E0%A7%81%E0%A6%AE%E0%A6%BF%20%E0%A6%9B%E0%A6%BE%E0%A7%9C%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%8B%20%E0%A6%9A%E0%A7%8B%E0%A6%96%E0%A7%87%20%E0%A6%9A%E0%A7%8B%E0%A6%96%20%E0%A6%B0%E0%A6%BE%E0%A6%96%E0%A6%BF%20%E0%A6%A8%E0%A6%BF.jpg",
        title: "তুমি ছাড়া কারো চোখে চোখ রাখি নি",
        author: "মোঃ নূরে আলম আলিফ (আল আমীন)",
        link: "https://www.rokomari.com/book/455121/tumi-chara-karo-chokhe-chokh-rakhi-ni"
    }
];

class AdWidget {
    constructor() {
        this.widget = document.getElementById('custom-ad-widget');
        this.adContent = document.querySelector('.ad-content');
        this.currentAd = 0;
        
        this.initialize();
    }

    initialize() {
        // Show first ad
        this.showAd();
        
        // Set up close button
        document.getElementById('close-ad-btn').addEventListener('click', () => this.close());
        
        // Rotate ads every 10 seconds
        setInterval(() => this.rotateAd(), 10000);
        
        // Show widget after 3 seconds
        setTimeout(() => this.show(), 3000);
    }

    showAd() {
        const ad = ads[this.currentAd];
        this.adContent.innerHTML = `
            <img src="${ad.image}" alt="${ad.title}">
            <h3>${ad.title}</h3>
            <p>লেখক: ${ad.author}</p>
            <a href="${ad.link}" target="_blank">বিস্তারিত দেখুন</a>
        `;
    }

    rotateAd() {
        this.currentAd = (this.currentAd + 1) % ads.length;
        this.showAd();
    }

    show() {
        this.widget.classList.add('active');
    }

    close() {
        this.widget.classList.remove('active');
    }
}

// Initialize the widget
document.addEventListener('DOMContentLoaded', () => new AdWidget());
