const divGlb = document.getElementById("divGlb");
const rumusGLB = "v = \\frac{s}{t}";

katex.render(rumusGLB, divGlb, {
    throwOnError: false
});

// Swap button colour
const toolButtons = document.querySelectorAll('.tools .btn-tools, .tools .btn-tools-active');
const toolPanels = document.querySelectorAll('.tool-panel');

toolButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.dataset.target;

        toolButtons.forEach(btn => btn.classList.remove('btn-tools-active'));
        this.classList.add('btn-tools-active');

        toolPanels.forEach(panel => {
            panel.classList.toggle('active', panel.id === targetId);
        });
    });
});

// --- Jarak (s) ---
const nilaiV_j = document.getElementById("nilaiV_j");
const nilaiT_j = document.getElementById("nilaiT_j");
const submitS_j = document.getElementById("submitS_j");
const hasilS_j = document.getElementById("hasilS_j");

submitS_j.addEventListener("click", function() {
    const v = Number(nilaiV_j.value);
    const t = Number(nilaiT_j.value);

    if (nilaiV_j.value === "" || nilaiT_j.value === "" || isNaN(v) || isNaN(t)) {
        hasilS_j.textContent = "Masukkan nilai v dan t terlebih dahulu";
        return;
    }

    const s = v * t;
    hasilS_j.textContent = `s = ${s} meter`;
});

// --- Kecepatan (v) --- v = s / t
const nilaiS_v = document.getElementById("nilaiS_v");
const nilaiT_v = document.getElementById("nilaiT_v");
const submitV_v = document.getElementById("submitV_v");
const hasilV_v = document.getElementById("hasilV_v");

submitV_v.addEventListener("click", function() {
    const s = Number(nilaiS_v.value);
    const t = Number(nilaiT_v.value);

    if (nilaiS_v.value === "" || nilaiT_v.value === "" || isNaN(s) || isNaN(t)) {
        hasilV_v.textContent = "Masukkan nilai s dan t terlebih dahulu";
        return;
    }
    if (t === 0) {
        hasilV_v.textContent = "t tidak boleh nol";
        return;
    }

    const v = s / t;
    hasilV_v.textContent = `v = ${v} m/s`;
});

// --- Waktu (t) --- t = s / v
const nilaiS_t = document.getElementById("nilaiS_t");
const nilaiV_t = document.getElementById("nilaiV_t");
const submitT_t = document.getElementById("submitT_t");
const hasilT_t = document.getElementById("hasilT_t");

submitT_t.addEventListener("click", function() {
    const s = Number(nilaiS_t.value);
    const v = Number(nilaiV_t.value);

    if (nilaiS_t.value === "" || nilaiV_t.value === "" || isNaN(s) || isNaN(v)) {
        hasilT_t.textContent = "Masukkan nilai s dan v terlebih dahulu";
        return;
    }
    if (v === 0) {
        hasilT_t.textContent = "v tidak boleh nol";
        return;
    }

    const t = s / v;
    hasilT_t.textContent = `t = ${t} s`;
});
    
