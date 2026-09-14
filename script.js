/* ==========================================================================
   CONFIGURAÇÕES PRINCIPAIS DO SITE (CENTRALIZADAS)
   Altere aqui os nomes, datas e fotos conforme desejado.
   ========================================================================== */

const CONFIG = {
    // 1. Nomes do casal
    herName: "Sammi",
    hisName: "Rafael",
    
    // 2. Data de início do relacionamento (Formato ISO para o contador em tempo real)
    relationshipStart: "2026-08-07T18:59:00",
    
    // 3. Frases dinâmicas
    heroEyebrow: "Nossa História",
    heroSubtitle: "Desde 07 de Agosto de 2026",
    heroFooterQuote: "“e cada segundo continua valendo a pena.”",
    
    counterPhrase: "Contando cada instante ao seu lado com a certeza de que escolhi a pessoa certa.",
    
    finalMainTitle: "“E isso aqui é só o começo.”",
    finalSubText: "Eu escolheria você de novo em qualquer vida, em qualquer cenário, em qualquer mundo.",

    // 4. Fotos da Galeria / Carrossel Principal
    carouselPhotos: [
        {
            src: "assets/photos/foto01.jpg",
            title: "O Início de Tudo",
            caption: "O instante em que nossos caminhos se cruzaram e mudaram para sempre.",
            date: "07.08.2026"
        },
        {
            src: "assets/photos/foto02.jpg",
            title: "Nossos Sorrisos",
            caption: "Onde há leveza, cumplicidade e a certeza de paz.",
            date: "Novembro de 2026"
        },
        {
            src: "assets/photos/foto03.jpg",
            title: "Dias Especiais",
            caption: "Cada momento ao seu lado se torna inesquecível.",
            date: "Dezembro de 2026"
        }
    ],

    // 5. Fotos do Mosaico (Fragmentos de Nós)
    mosaicPhotos: [
        {
            src: "assets/photos/foto01.jpg",
            title: "Olhar Compartilhado",
            subtitle: "Cumplicidade",
            className: "item-1"
        },
        {
            src: "assets/photos/foto02.jpg",
            title: "Instante Único",
            subtitle: "Memória",
            className: "item-2"
        },
        {
            src: "assets/photos/foto03.jpg",
            title: "Nosso Lugar",
            subtitle: "Aconchego",
            className: "item-3"
        },
        {
            src: "assets/photos/foto01.jpg",
            title: "Caminho Juntos",
            subtitle: "Futuro",
            className: "item-4"
        },
        {
            src: "assets/photos/foto02.jpg",
            title: "Sorriso Leve",
            subtitle: "Felicidade",
            className: "item-5"
        },
        {
            src: "assets/photos/foto03.jpg",
            title: "Amor & Paz",
            subtitle: "Essência",
            className: "item-6"
        }
    ],

    // 6. Linha do Tempo (Nossa História)
    timelineEvents: [
        {
            date: "07.08.2026",
            title: "O Começo",
            text: "Foi aqui que começou uma história que eu ainda quero viver por muito tempo.",
            src: "assets/photos/foto01.jpg"
        },
        {
            date: "15.11.2026",
            title: "A Primeira Viagem",
            text: "Descobri que o melhor destino do mundo é estar onde você está.",
            src: "assets/photos/foto02.jpg"
        },
        {
            date: "31.12.2026",
            title: "Virada de Ano",
            text: "Entramos em um novo ano com a certeza de que queremos todos os próximos juntos.",
            src: "assets/photos/foto03.jpg"
        }
    ],

    // 7. Momentos Especiais
    moments: [
        {
            tag: "Primeiro Encontro",
            title: "Onde Tudo Mudou",
            text: "Aquela conversa que durou horas e parecia que durava minutos.",
            date: "Outubro de 2026"
        },
        {
            tag: "Noite Inesquecível",
            title: "Sob As Estrelas",
            text: "Risadas, silêncios confortáveis e a certeza de que é você.",
            date: "Novembro de 2026"
        },
        {
            tag: "Nosso Refúgio",
            title: "Aquele Lugar",
            text: "Onde o tempo desacelera e o mundo lá fora simplesmente desaparece.",
            date: "Sempre"
        }
    ]
};

/* ==========================================================================
   INICIALIZAÇÃO E RENDERIZAÇÃO DINÂMICA
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    initWelcomeScreen();
    initCounter();
    renderCarousel();
    renderMosaic();
    renderTimeline();
    renderMoments();
    initLightbox();
    initScrollAnimations();
    initMobileMenu();
    initScrollProgress();
});

// Aplicar textos de configuração
function applyConfig() {
    document.title = `${CONFIG.hisName} & ${CONFIG.herName} — Nossa História`;
    
    // Navbar brand
    const brand = document.getElementById("nav-brand-names");
    if(brand) brand.textContent = `${CONFIG.hisName[0]} & ${CONFIG.herName[0]}`;
    
    // Hero
    const heroTitle = document.getElementById("hero-title");
    if(heroTitle) heroTitle.textContent = `${CONFIG.hisName} & ${CONFIG.herName}`;
    
    const heroEyebrow = document.getElementById("hero-eyebrow");
    if(heroEyebrow) heroEyebrow.textContent = CONFIG.heroEyebrow;
    
    const heroSubtitle = document.getElementById("hero-subtitle");
    if(heroSubtitle) heroSubtitle.textContent = CONFIG.heroSubtitle;
    
    const heroFooterQuote = document.getElementById("hero-footer-quote");
    if(heroFooterQuote) heroFooterQuote.textContent = CONFIG.heroFooterQuote;
    
    const counterPhrase = document.getElementById("counter-phrase-dynamic");
    if(counterPhrase) counterPhrase.textContent = CONFIG.counterPhrase;
    
    // Final section
    const finalMainTitle = document.getElementById("final-main-title");
    if(finalMainTitle) finalMainTitle.textContent = CONFIG.finalMainTitle;
    
    const finalSubText = document.getElementById("final-sub-text");
    if(finalSubText) finalSubText.textContent = CONFIG.finalSubText;
    
    const finalNames = document.getElementById("final-names-sig");
    if(finalNames) finalNames.textContent = `${CONFIG.hisName} & ${CONFIG.herName}`;
    
    const finalDate = document.getElementById("final-date-sig");
    if(finalDate) finalDate.textContent = CONFIG.relationshipStart.split("T")[0].split("-").reverse().join(".");
    
    // Background images
    if(CONFIG.carouselPhotos.length > 0) {
        const heroBg = document.getElementById("hero-bg-img");
        if(heroBg) heroBg.src = CONFIG.carouselPhotos[0].src;
        
        const finalBg = document.getElementById("final-bg-img");
        if(finalBg) finalBg.src = CONFIG.carouselPhotos[0].src;
    }
}

/* ==========================================================================
   TELA INICIAL E ÁUDIO
   ========================================================================== */
function initWelcomeScreen() {
    const welcomeOverlay = document.getElementById("welcome-overlay");
    const enterBtn = document.getElementById("enter-btn");
    const audioContainer = document.getElementById("audio-player-container");
    const bgMusic = document.getElementById("bg-music");
    const audioToggle = document.getElementById("audio-toggle");
    const vinylIcon = document.getElementById("vinyl-icon");
    const audioStatusText = document.getElementById("audio-status-text");

    let isPlaying = false;

    enterBtn.addEventListener("click", () => {
        // Tentar tocar música
        bgMusic.play().then(() => {
            isPlaying = true;
            vinylIcon.classList.remove("paused");
            audioStatusText.textContent = "Tocando nossa música";
        }).catch(err => {
            console.log("Autoplay bloqueado ou sem arquivo de áudio:", err);
            audioStatusText.textContent = "Música pausada";
            vinylIcon.classList.add("paused");
        });

        // Fechar overlay
        welcomeOverlay.classList.add("fade-out");
        audioContainer.classList.remove("hidden");
    });

    audioToggle.addEventListener("click", () => {
        if(isPlaying) {
            bgMusic.pause();
            isPlaying = false;
            vinylIcon.classList.add("paused");
            audioStatusText.textContent = "Música pausada";
        } else {
            bgMusic.play().then(() => {
                isPlaying = true;
                vinylIcon.classList.remove("paused");
                audioStatusText.textContent = "Tocando nossa música";
            }).catch(err => console.log(err));
        }
    });
}

/* ==========================================================================
   CONTADOR EM TEMPO REAL
   ========================================================================== */
function initCounter() {
    const startDate = new Date(CONFIG.relationshipStart);

    function update() {
        const now = new Date();
        const diff = now - startDate;

        if(diff < 0) return;

        const seconds = Math.floor(diff / 1000) % 60;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        // Hero preview
        document.getElementById("c-days").textContent = String(days).padStart(3, '0');
        document.getElementById("c-hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("c-mins").textContent = String(minutes).padStart(2, '0');
        document.getElementById("c-secs").textContent = String(seconds).padStart(2, '0');

        // Detailed counter
        document.getElementById("bc-days").textContent = days.toLocaleString();
        document.getElementById("bc-hours").textContent = hours;
        document.getElementById("bc-mins").textContent = minutes;
        document.getElementById("bc-secs").textContent = seconds;
    }

    update();
    setInterval(update, 1000);
}

/* ==========================================================================
   RENDERIZAÇÃO DO CARROSSEL
   ========================================================================== */
let currentSlide = 0;
let carouselInterval = null;

function renderCarousel() {
    const track = document.getElementById("carousel-track");
    const indicators = document.getElementById("carousel-indicators");
    
    track.innerHTML = "";
    indicators.innerHTML = "";

    CONFIG.carouselPhotos.forEach((photo, index) => {
        // Slide
        const slide = document.createElement("div");
        slide.className = "carousel-slide";
        slide.innerHTML = `
            <div class="carousel-img-container" data-lightbox-src="${photo.src}" data-lightbox-title="${photo.title}" data-lightbox-caption="${photo.caption}" data-lightbox-date="${photo.date}">
                <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            </div>
            <div class="carousel-info">
                <span class="carousel-slide-tag">Capítulo 0${index + 1}</span>
                <h3>${photo.title}</h3>
                <p>${photo.caption}</p>
                <span class="carousel-date">${photo.date}</span>
            </div>
        `;
        track.appendChild(slide);

        // Indicator
        const dot = document.createElement("button");
        dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute("aria-label", `Ir para slide ${index + 1}`);
        dot.addEventListener("click", () => {
            goToSlide(index);
            resetAutoplay();
        });
        indicators.appendChild(dot);
    });

    // Controles
    document.getElementById("carousel-prev").addEventListener("click", () => {
        prevSlide();
        resetAutoplay();
    });

    document.getElementById("carousel-next").addEventListener("click", () => {
        nextSlide();
        resetAutoplay();
    });

    // Swipe touch support no carrossel
    let touchStartX = 0;
    let touchEndX = 0;
    const trackWrapper = document.getElementById("carousel-track-wrapper");

    trackWrapper.addEventListener("touchstart", e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    trackWrapper.addEventListener("touchend", e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        if(touchEndX < touchStartX - 50) {
            nextSlide();
            resetAutoplay();
        }
        if(touchEndX > touchStartX + 50) {
            prevSlide();
            resetAutoplay();
        }
    }

    startAutoplay();
}

function updateCarouselView() {
    const track = document.getElementById("carousel-track");
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    const dots = document.querySelectorAll(".indicator-dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % CONFIG.carouselPhotos.length;
    updateCarouselView();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + CONFIG.carouselPhotos.length) % CONFIG.carouselPhotos.length;
    updateCarouselView();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarouselView();
}

function startAutoplay() {
    carouselInterval = setInterval(nextSlide, 6000);
}

function resetAutoplay() {
    clearInterval(carouselInterval);
    startAutoplay();
}

/* ==========================================================================
   RENDERIZAÇÃO DO MOSAICO
   ========================================================================== */
function renderMosaic() {
    const grid = document.getElementById("mosaic-grid");
    grid.innerHTML = "";

    CONFIG.mosaicPhotos.forEach(photo => {
        const item = document.createElement("div");
        item.className = `mosaic-item ${photo.className}`;
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            <div class="mosaic-overlay">
                <span>${photo.subtitle}</span>
                <h4>${photo.title}</h4>
            </div>
        `;
        item.addEventListener("click", () => {
            openLightboxBySrc(photo.src, photo.title, photo.subtitle);
        });
        grid.appendChild(item);
    });
}

/* ==========================================================================
   RENDERIZAÇÃO DA TIMELINE
   ========================================================================== */
function renderTimeline() {
    const wrapper = document.getElementById("timeline-wrapper");
    wrapper.innerHTML = "";

    CONFIG.timelineEvents.forEach(event => {
        const item = document.createElement("div");
        item.className = "timeline-item reveal";
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <div class="timeline-img-box" data-lightbox-src="${event.src}" data-lightbox-title="${event.title}" data-lightbox-caption="${event.text}" data-lightbox-date="${event.date}">
                    <img src="${event.src}" alt="${event.title}" loading="lazy">
                </div>
                <div class="timeline-content">
                    <span class="timeline-date">${event.date}</span>
                    <h3>${event.title}</h3>
                    <p>${event.text}</p>
                </div>
            </div>
        `;
        wrapper.appendChild(item);
    });
}

/* ==========================================================================
   RENDERIZAÇÃO DOS MOMENTOS ESPECIAIS
   ========================================================================== */
function renderMoments() {
    const grid = document.getElementById("moments-grid");
    grid.innerHTML = "";

    CONFIG.moments.forEach(moment => {
        const card = document.createElement("div");
        card.className = "moment-card reveal";
        card.innerHTML = `
            <span class="moment-tag">${moment.tag}</span>
            <h3>${moment.title}</h3>
            <p>${moment.text}</p>
            <span class="moment-date">${moment.date}</span>
        `;
        grid.appendChild(card);
    });
}

/* ==========================================================================
   LIGHTBOX GLOBAL
   ========================================================================== */
let lightboxItems = [];
let currentLightboxIndex = 0;

function initLightbox() {
    // Coletar todas as imagens com data-lightbox ou imagens do carrossel/timeline
    collectLightboxItems();

    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if(e.target === lightbox) closeLightbox();
    });

    prevBtn.addEventListener("click", () => {
        currentLightboxIndex = (currentLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
        updateLightboxContent();
    });

    nextBtn.addEventListener("click", () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % lightboxItems.length;
        updateLightboxContent();
    });

    // Teclado
    document.addEventListener("keydown", (e) => {
        if(!lightbox.classList.contains("active")) return;
        if(e.key === "Escape") closeLightbox();
        if(e.key === "ArrowLeft") {
            currentLightboxIndex = (currentLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
            updateLightboxContent();
        }
        if(e.key === "ArrowRight") {
            currentLightboxIndex = (currentLightboxIndex + 1) % lightboxItems.length;
            updateLightboxContent();
        }
    });

    // Delegar cliques em containers de imagens com atributo lightbox
    document.addEventListener("click", (e) => {
        const container = e.target.closest("[data-lightbox-src]");
        if(container) {
            const src = container.getAttribute("data-lightbox-src");
            const index = lightboxItems.findIndex(item => item.src === src);
            if(index !== -1) {
                currentLightboxIndex = index;
            } else {
                currentLightboxIndex = 0;
            }
            openLightbox();
        }
    });
}

function collectLightboxItems() {
    lightboxItems = [];
    // Carrossel e Timeline
    document.querySelectorAll("[data-lightbox-src]").forEach(el => {
        lightboxItems.push({
            src: el.getAttribute("data-lightbox-src"),
            title: el.getAttribute("data-lightbox-title") || "",
            caption: el.getAttribute("data-lightbox-caption") || "",
            date: el.getAttribute("data-lightbox-date") || ""
        });
    });

    // Mosaico
    CONFIG.mosaicPhotos.forEach(p => {
        if(!lightboxItems.some(item => item.src === p.src)) {
            lightboxItems.push({
                src: p.src,
                title: p.title,
                caption: p.subtitle,
                date: ""
            });
        }
    });
}

function openLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    updateLightboxContent();
}

function openLightboxBySrc(src, title, caption) {
    collectLightboxItems();
    const index = lightboxItems.findIndex(item => item.src === src);
    if(index !== -1) {
        currentLightboxIndex = index;
    } else {
        lightboxItems.unshift({src, title, caption, date: ""});
        currentLightboxIndex = 0;
    }
    openLightbox();
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
}

function updateLightboxContent() {
    if(lightboxItems.length === 0) return;
    const item = lightboxItems[currentLightboxIndex];
    
    document.getElementById("lightbox-img").src = item.src;
    document.getElementById("lightbox-caption").textContent = item.title || item.caption;
    document.getElementById("lightbox-date").textContent = item.date;
    document.getElementById("lightbox-counter").textContent = `${currentLightboxIndex + 1} / ${lightboxItems.length}`;
}

/* ==========================================================================
   ANIMAÇÕES DE SCROLL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("active");
                // opcional: observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos reveal após renderização
    setTimeout(() => {
        document.querySelectorAll(".reveal").forEach(el => {
            observer.observe(el);
        });
    }, 100);
}

/* ==========================================================================
   MENU MOBILE
   ========================================================================== */
function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const links = document.querySelectorAll(".mobile-link");

    btn.addEventListener("click", () => {
        menu.classList.toggle("active");
        document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "auto";
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });
}

/* ==========================================================================
   BARRA DE PROGRESSO DE SCROLL
   ========================================================================== */
function initScrollProgress() {
    window.addEventListener("scroll", () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const bar = document.getElementById("scroll-progress");
        if(bar) bar.style.width = scrolled + "%";
    });
}
