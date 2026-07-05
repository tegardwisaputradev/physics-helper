// Swap button colour logic
const toolButtons = document.querySelectorAll('.tools .btn-tools');
const toolPanels = document.querySelectorAll('.tools .tool-panel');

toolButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const target = this.dataset.target;

        toolButtons.forEach((btn) => {
            btn.classList.toggle('btn-tools-active', btn === this);
        });

        toolPanels.forEach((panel) => {
            panel.classList.toggle('active', panel.dataset.target === target);
        });
    });
});

// Visual Rumus GLBB
// Definisi
const divGlbb_Vt = document.getElementById("divGlbb_Vt");
const divGlbb_S = document.getElementById("divGlbb_S");
const divGlbb_V2t = document.getElementById("divGlbb_V2t");

const rumusGlbb_Vt = "v_t = v_0 + a \\cdot t";
const rumusGlbb_S = "s = v_0 \\cdot + \\frac{1}{2} \\cdot a \\cdot t^2";
const rumusGlbb_V2t = "v^2_t = v^2_0 + 2 \\cdot a \\cdot s";

katex.render(rumusGlbb_Vt, divGlbb_Vt, {
    throwOnError: false
})
katex.render(rumusGlbb_S, divGlbb_S, {
    throwOnError: false
})
katex.render(rumusGlbb_V2t, divGlbb_V2t, {
    throwOnError: false
})

// Kecepatan Akhir
const visual_Vt = document.getElementById("visual_Vt");
const visual_VtA = document.getElementById("visual_VtA");

const rumusVt = "v_t = v_0 + a \\cdot t";
const rumusVtA = "v_t = \\sqrt(v_0^2 + 2 \\c\dot a \\cdot s)";

katex.render(rumusVt, visual_Vt, {
    throwOnError: false
})
katex.render(rumusVtA, visual_VtA, {
    throwOnError: false
})

// Kecepatan Awal
const visual_V0 = document.getElementById("visual_V0");
const visual_V0A = document.getElementById("visual_V0A");

const rumusV0 = "v_0 = v_t - a \\cdot t"
const rumusV0A = "v_0 = \\sqrt(v_t^2 - 2 \\cdot a \\cdot s)"

katex.render(rumusV0, visual_V0, {
    throwOnError: false
})
katex.render(rumusV0A, visual_V0A, {
    throwOnError: false
})

// Jarak
const visual_S = document.getElementById("visual_S");
const visual_SA = document.getElementById("visual_SA");

const rumusS = "s = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2"
const rumusSA = "s = \\frac{v^2 - v_0^2}{2 \\cdot a} "

katex.render(rumusS, visual_S, {
    throwOnError: false
})
katex.render(rumusSA, visual_SA, {
    throwOnError: false
})

// Waktu
const visual_W = document.getElementById("visual_W");
const visual_WA = document.getElementById("visual_WA");

const rumusW = "t = \\frac{v_t - v_0}{a}"
const rumusWA = "t = \\frac{-v_0 \\pm \\sqrt(v_0^2 + 2 \\cdot a \\cdot s)}{a}"

katex.render(rumusW, visual_W, {
    throwOnError: false
})
katex.render(rumusWA, visual_WA, {
    throwOnError: false
})

// Percepatan
const visual_A = document.getElementById("visual_A");
const visual_AA = document.getElementById("visual_AA");

const rumusA = "a = \\frac{v_t - v_0}{t}"
const rumusAA = "a = \\frac{v_t^2 - v_0^2}{2 \\cdot s}"

katex.render(rumusA, visual_A, {
    throwOnError: false
})
katex.render(rumusAA, visual_AA, {
    throwOnError: false
})

// Kecepatan Rata-Rata
const visual_KRR = document.getElementById("visual_KRR");
const visual_KRRA = document.getElementById("visual_KRRA");

const rumusKRR = "\\overline{v} = \\frac{v_0 + v_t}{2}"
const rumusKRRA = "\\overline{v} = \\frac{s}{t}"

katex.render(rumusKRR, visual_KRR, {
    throwOnError: false
})
katex.render(rumusKRRA, visual_KRRA, {
    throwOnError: false
})
