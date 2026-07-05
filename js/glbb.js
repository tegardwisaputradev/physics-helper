// Logic Utama
const math = window.math || globalThis.math;
if (!math || typeof math.sqrt !== "function" || typeof math.pow !== "function") {
    console.error("math.js belum dimuat atau tidak tersedia.");
}

// Kecepatan Akhir(vt = v0 + a * t)
const nilaiV0_Vt = document.getElementById("nilaiV0_Vt");
const nilaiA_Vt = document.getElementById("nilaiA_Vt");
const nilaiT_Vt = document.getElementById("nilaiT_Vt");

const submitVt_KA = document.getElementById("submitVt_KA");
const hasilVt_KA = document.getElementById("hasilVt_KA");

if (submitVt_KA && nilaiV0_Vt && nilaiA_Vt && nilaiT_Vt && hasilVt_KA) {
    submitVt_KA.addEventListener("click", function() {
        const v0 = Number(nilaiV0_Vt.value);
        const a = Number(nilaiA_Vt.value);
        const t = Number(nilaiT_Vt.value);

        if(nilaiV0_Vt.value === "" || nilaiA_Vt.value === "" || nilaiT_Vt.value === "" || isNaN(v0) || isNaN(a) || isNaN(t)) {
            hasilVt_KA.textContent = "Masukan nilai v0, a, dan t terlebih dahulu";
            return;
        }

        const vt = v0 + (a * t);
        hasilVt_KA.textContent = `vt = ${vt}m/s`;
    })
}

// Kecepatan Akhir Alternatif (vt = sqrt(v0^2 + 2 * a* s))
const nilaiV0_VtA = document.getElementById("nilaiV0_VtA");
const nilaiA_VtA = document.getElementById("nilaiA_VtA");
const nilaiS_VtA = document.getElementById("nilaiS_VtA");

const submitVt_KA_A = document.getElementById("submitVt_KA_A");
const hasilVt_KA_A = document.getElementById("hasilVt_KA_A");

if (submitVt_KA_A && nilaiV0_VtA && nilaiA_VtA && nilaiS_VtA && hasilVt_KA_A) {
    submitVt_KA_A.addEventListener("click", function() {
        const v0 = Number(nilaiV0_VtA.value);
        const a = Number(nilaiA_VtA.value);
        const s = Number(nilaiS_VtA.value);

        if(nilaiV0_VtA.value === "" || nilaiA_VtA.value === "" || nilaiS_VtA.value === "" || isNaN(v0) || isNaN(a) || isNaN(s)) {
            hasilVt_KA_A.textContent = "Masukan nilai v0, a, dan s terlebih dahulu";
            return;
        }

        const vt = math.sqrt(math.pow(v0, 2) + 2 * a * s);
        hasilVt_KA_A.textContent = `vt = ${vt}m/s`;
    })
}

// Kecepatan Awal (v0 = vt - a * t)
const nilaiVt_V0 = document.getElementById("nilaiVt_V0");
const nilaiA_V0 = document.getElementById("nilaiA_V0");
const nilaiT_V0 = document.getElementById("nilaiT_V0");

const submitV0_KA = document.getElementById("submitV0_KA");
const hasilV0_KA = document.getElementById("hasilV0_KA");

if (submitV0_KA && nilaiVt_V0 && nilaiA_V0 && nilaiT_V0 && hasilV0_KA) {
    submitV0_KA.addEventListener("click", function() {
        const vt = Number(nilaiVt_V0.value);
        const a = Number(nilaiA_V0.value);
        const t = Number(nilaiT_V0.value);
        console.log("pencet");

        if(nilaiVt_V0.value === "" || nilaiA_V0.value === "" || nilaiT_V0.value === "" || isNaN(vt) || isNaN(a) || isNaN(t)) {
            hasilV0_KA.textContent = "Masukan nilai vt, a, dan t terlebih dahulu";
            return;
        }

        const v0 = vt - (a * t);
        hasilV0_KA.textContent = `v0 = ${v0}m/s`;
    })
}

// Kecepatan Awal Alternatif  (v0 = sqrt(vt^2 - 2 * a* s))
const nilaiVt_V0A = document.getElementById("nilaiVt_V0A");
const nilaiA_V0A = document.getElementById("nilaiA_V0A");
const nilaiS_V0A = document.getElementById("nilaiS_V0A");

const submitV0_KA_A = document.getElementById("submitV0_KA_A");
const hasilV0_KA_A = document.getElementById("hasilV0_KA_A");

if (submitV0_KA_A && nilaiVt_V0A && nilaiA_V0A && nilaiS_V0A && hasilV0_KA_A) {
    submitV0_KA_A.addEventListener("click", function() {
        const vt = Number(nilaiVt_V0A.value);
        const a = Number(nilaiA_V0A.value);
        const s = Number(nilaiS_V0A.value);
        console.log("pencet");

        if(nilaiVt_V0A.value === "" || nilaiA_V0A.value === "" || nilaiS_V0A.value === "" || isNaN(vt) || isNaN(a) || isNaN(s)) {
            hasilV0_KA_A.textContent = "Masukan nilai vt, a, dan s terlebih dahulu";
            return;
        }

        const v0 = math.sqrt(math.pow(vt, 2) - 2 * a * s);
        hasilV0_KA_A.textContent = `v0 = ${v0}m/s`;
    })
}

// Jarak (s = v0 * + (1/2) * a * t^2 )
const nilaiV0_S = document.getElementById("nilaiV0_S");
const nilaiA_S = document.getElementById("nilaiA_S");
const nilaiT_S = document.getElementById("nilaiT_S");

const submitS_J = document.getElementById("submitS_J");
const hasilS_J = document.getElementById("hasilS_J");

if (submitS_J && nilaiV0_S && nilaiA_S && nilaiT_S && hasilS_J) {
    submitS_J.addEventListener("click", function() {
        const v0 = Number(nilaiV0_S.value);
        const a = Number(nilaiA_S.value);
        const t = Number(nilaiT_S.value);
        console.log("pencet");

        if(nilaiV0_S.value === "" || nilaiA_S.value === "" || nilaiT_S.value === "" || isNaN(v0) || isNaN(a) || isNaN(t)) {
            hasilS_J.textContent = "Masukan nilai v0, a, dan t terlebih dahulu";
            return;
        }
        let kiri = v0 * t;
        let kanan = math.multiply(math.divide(1, 2), a, t * t);
        const s = math.add(kiri, kanan);
        hasilS_J.textContent = `s = ${s}m`;
    })
}

// Jarak alternatif (s = (vt^2 - v0^2) / (2 * a))
const nilaiVt_SA = document.getElementById("nilaiVt_SA");
const nilaiV0_SA = document.getElementById("nilaiV0_SA");
const nilaiA_SA = document.getElementById("nilaiA_SA");

const submitS_JA = document.getElementById("submitS_JA");
const hasilS_JA = document.getElementById("hasilS_JA");

if (submitS_JA && nilaiV0_SA && nilaiA_SA && nilaiVt_SA && hasilS_JA) {
    submitS_JA.addEventListener("click", function() {
        const vt = Number(nilaiVt_SA.value);
        const v0 = Number(nilaiV0_SA.value);
        const a = Number(nilaiA_SA.value);
        console.log("pencet");

        if(nilaiV0_SA.value === "" || nilaiA_SA.value === "" || nilaiVt_SA.value === "" || isNaN(v0) || isNaN(a) || isNaN(vt)) {
            hasilS_JA.textContent = "Masukan nilai v0, vt, dan a terlebih dahulu";
            return;
        }
        let vtKuadrat = math.pow(vt, 2);
        let v0Kuadrat = math.pow(v0, 2);
        let pembilang = math.subtract(vtKuadrat, v0Kuadrat);
        let penyebut = math.multiply(2, a)

        const s = math.divide(pembilang, penyebut);
        hasilS_JA.textContent = `s = ${s}m`;
    })
}

// Waktu (t = (vt - v0) / (a))
const nilaiVt_T = document.getElementById("nilaiVt_T");
const nilaiV0_T = document.getElementById("nilaiV0_T");
const nilaiA_T = document.getElementById("nilaiA_T");

const submitT_W = document.getElementById("submitT_W");
const hasilT_W = document.getElementById("hasilT_W");

if (submitT_W && nilaiV0_T && nilaiA_T && nilaiVt_T && hasilT_W) {
    submitT_W.addEventListener("click", function() {
        const vt = Number(nilaiVt_T.value);
        const v0 = Number(nilaiV0_T.value);
        const a = Number(nilaiA_T.value);
        console.log("pencet");

        if(nilaiVt_T.value === "" || nilaiA_T.value === "" || nilaiV0_T.value === "" || isNaN(v0) || isNaN(a) || isNaN(vt)) {
            hasilT_W.textContent = "Masukan nilai vt, v0, dan a terlebih dahulu";
            return;
        }
        let pembilang = math.subtract(vt, v0);
        const t = math.divide(pembilang, a);
        hasilT_W.textContent = `t = ${t}s`;
    })
}

// Waktu alternarif (t =(-v0 +- sqrt v0^2 + 2 * a * s)/(a)
const nilaiV0_TA = document.getElementById("nilaiV0_TA");
const nilaiA_TA = document.getElementById("nilaiA_TA");
const nilaiS_TA = document.getElementById("nilaiS_TA");

const submitT_WA = document.getElementById("submitT_WA");
const hasilT_WA = document.getElementById("hasilT_WA");

if (submitT_WA && nilaiV0_TA && nilaiA_TA && nilaiS_TA && hasilT_WA) {
    submitT_WA.addEventListener("click", function() {
        const v0 = Number(nilaiV0_TA.value);
        const a = Number(nilaiA_TA.value);
        const s = Number(nilaiS_TA.value);
        console.log("pencet");

        if(nilaiS_TA.value === "" || nilaiA_TA.value === "" || nilaiV0_TA.value === "" || isNaN(v0) || isNaN(a) || isNaN(s)) {
            hasilT_WA.textContent = "Masukan nilai v0, a, dan s terlebih dahulu";
            return;
        }
        let v0Kuadrat = math.pow(v0, 2);
        let duaAs = math.multiply(2, a, s);
        let akar = math.sqrt(math.add(v0Kuadrat, duaAs));
        let pembilangPlus = math.add(-v0, math.fraction(akar));
        let pembilangMin = math.subtract(-v0, math.fraction(akar));
        const t1 = math.divide(pembilangPlus, a);
        const t2 = math.divide(pembilangMin, a);
        let t = math.number(t1) >= 0 ? t1 : t2;
        hasilT_WA.textContent = `t = ${t}s`;
    })
}

// percepatan (a = (vt - v0) / t)
const nilaiVt_A = document.getElementById("nilaiVt_A");
const nilaiV0_A = document.getElementById("nilaiV0_A");
const nilaiT_A = document.getElementById("nilaiT_A");

const submitA_P = document.getElementById("submitA_P");
const hasilA_P = document.getElementById("hasilA_P");

if (submitA_P && nilaiV0_A && nilaiT_A && nilaiVt_A && hasilA_P) {
    submitA_P.addEventListener("click", function() {
        const vt = Number(nilaiVt_A.value);
        const v0 = Number(nilaiV0_A.value);
        const t = Number(nilaiT_A.value);
        console.log("pencet");

        if(nilaiVt_A.value === "" || nilaiT_A.value === "" || nilaiV0_A.value === "" || isNaN(v0) || isNaN(vt) || isNaN(t)) {
            hasilA_P.textContent = "Masukan nilai vt, v0, dan t terlebih dahulu";
            return;
        }

        const a = math.divide(math.subtract(vt, v0), t);
        hasilA_P.textContent = `a = ${a}m/s^2`;
    })
}

// percepatan alternarif(a =(vt^2 - v0^2) / (2 * s))
const nilaiVt_AA = document.getElementById("nilaiVt_AA");
const nilaiV0_AA = document.getElementById("nilaiV0_AA");
const nilaiS_AA = document.getElementById("nilaiS_AA");

const submitA_PA = document.getElementById("submitA_PA");
const hasilA_PA = document.getElementById("hasilA_PA");

if (submitA_PA && nilaiV0_AA && nilaiS_AA && nilaiVt_AA && hasilA_PA) {
    submitA_PA.addEventListener("click", function() {
        const vt = Number(nilaiVt_AA.value);
        const v0 = Number(nilaiV0_AA.value);
        const s = Number(nilaiS_AA.value);
        console.log("pencet");

        if(nilaiVt_AA.value === "" || nilaiS_AA.value === "" || nilaiV0_AA.value === "" || isNaN(v0) || isNaN(vt) || isNaN(s)) {
            hasilA_PA.textContent = "Masukan nilai vt, v0, dan s terlebih dahulu";
            return;
        }
        let vtKuadrat = math.pow(vt, 2);
        let v0Kuadrat = math.pow(v0, 2);
        let pembilang = math.subtract(vtKuadrat, v0Kuadrat);
        const a = math.divide(pembilang, math.multiply(2, s));
        hasilA_PA.textContent = `a = ${a}m/s^2`;
    })
}

// Kecepatan Rata Rata (v = (v0 + vt) / 2)
const nilaiV0_KRR = document.getElementById("nilaiV0_KRR");
const nilaiVt_KRR = document.getElementById("nilaiVt_KRR");

const submitKRR_A = document.getElementById("submitKRR_A");
const hasilKRR_A = document.getElementById("hasilKRR_A");

if (submitKRR_A && nilaiV0_KRR && nilaiVt_KRR && hasilKRR_A) {
    submitKRR_A.addEventListener("click", function() {
        const v0 = Number(nilaiV0_KRR.value);
        const vt = Number(nilaiVt_KRR.value);
        console.log("pencet");

        if(nilaiVt_KRR.value === "" || nilaiV0_KRR.value === "" || isNaN(v0) || isNaN(vt)) {
            hasilKRR_A.textContent = "Masukan nilai vt dan v0 terlebih dahulu";
            return;
        }
        let pembilang = math.add(v0, vt);
        const v = math.divide(pembilang, 2);
        hasilKRR_A.textContent = `v = ${v}`;
    })
}

// Kecepatan Rata Rata alternatif (v = s/t)
const nilaiS_KRRA = document.getElementById("nilaiS_KRRA");
const nilaiT_KRRA = document.getElementById("nilaiT_KRRA");

const submitKRR_AA = document.getElementById("submitKRR_AA");
const hasilKRR_AA = document.getElementById("hasilKRR_AA");

if (submitKRR_AA && nilaiS_KRRA && nilaiT_KRRA && hasilKRR_AA) {
    submitKRR_AA.addEventListener("click", function() {
        const s = Number(nilaiS_KRRA.value);
        const t = Number(nilaiT_KRRA.value);
        console.log("pencet");

        if(nilaiS_KRRA.value === "" || nilaiT_KRRA.value === "" || isNaN(s) || isNaN(t)) {
            hasilKRR_AA.textContent = "Masukan nilai s dan t terlebih dahulu";
            return;
        }
        const v = math.divide(s, t);
        hasilKRR_AA.textContent = `v = ${v}`;
    })
}