(function(){

"use strict";

/* ============================================================
   I18N
============================================================ */
const I18N = {
  it: {
    tagline:"generatore di codici QR",
    "sec.content":"Contenuto", "sec.style":"Stile", "sec.colors":"Colori", "sec.dots":"Stile dei moduli",
    "sec.eyes":"Stile occhi e punti centrali", "sec.border":"Contorno", "sec.logo":"Logo centrale",
    "sec.output":"Output", "sec.presets":"Preset di stile", "sec.preview":"Anteprima",
    "tab.text":"Testo", "tab.url":"URL", "tab.vcard":"vCard",
    "field.text":"Testo libero", "field.text.ph":"Scrivi il contenuto del QR...",
    "field.url":"Indirizzo URL", "field.url.ph":"esempio.it oppure https://esempio.it",
    "field.url.hint":"L'indirizzo viene codificato esattamente come scritto, senza correzioni automatiche.",
    "field.vcardVersion":"Versione vCard", "field.firstName":"Nome", "field.lastName":"Cognome",
    "field.org":"Organizzazione", "field.role":"Ruolo", "field.mobile":"Cellulare", "field.home":"Telefono fisso",
    "field.fax":"Fax", "field.bday":"Data di nascita", "field.email":"Email", "field.workEmail":"Email aziendale",
    "field.website":"Sito web", "field.addr1":"Indirizzo 1", "field.addr2":"Indirizzo 2", "field.note":"Note",
    "density.label":"Densità del QR",
    "color.flat":"Colore pieno", "color.gradient":"Gradiente",
    "color.fg":"Colore primo piano (moduli / occhi / contorno)",
    "color.grad1":"Colore 1", "color.grad2":"Colore 2", "color.gradType":"Tipo di gradiente",
    "color.linear":"Lineare", "color.radial":"Radiale", "color.angle":"Direzione (lineare)",
    "color.gradHint":"Un unico gradiente viene applicato in modo continuo a moduli, occhi, punti centrali e contorno.",
    "color.bg":"Colore di sfondo",
    "contrast.label":"Contrasto",
    "dots.square":"Quadrato", "dots.circle":"Cerchio", "dots.capsuleH":"Capsula orizz.", "dots.capsuleV":"Capsula vert.",
    "eyes.outer":"Occhi (angoli)", "eyes.inner":"Punti centrali",
    "eyes.sq":"Quadrato", "eyes.rd":"Arrotondato", "eyes.ci":"Cerchio",
    "border.thickness":"Spessore", "border.radius":"Raggio angoli",
    "border.hint":"Il colore del contorno segue lo stesso colore o gradiente dei moduli.",
    "logo.enable":"Includi un'immagine al centro del QR",
    "logo.drop":"Trascina un'immagine qui, oppure clicca per selezionarla",
    "logo.formats":"PNG, JPG o WEBP · max 5MB", "logo.remove":"Rimuovi",
    "logo.err.type":"Formato non supportato. Usa PNG, JPG o WEBP.",
    "logo.err.size":"Il file supera i 5MB consentiti.",
    "output.ec":"Livello di correzione errore", "output.size":"Dimensione immagine",
    "ec.L":"L — bassa (7%)", "ec.M":"M — media (15%)", "ec.Q":"Q — alta (25%)", "ec.H":"H — massima (30%)",
    "ec.hint.logo":"Con il logo attivo sono disponibili solo i livelli Q e H.",
    "ec.hint.nologo":"Tutti i livelli sono disponibili.",
    "preset.name":"Nome preset", "preset.name.ph":"es. Blu aziendale", "preset.save":"Salva",
    "preset.load":"Preset salvati", "preset.none":"— nessuno —", "preset.applyBtn":"Carica", "preset.deleteBtn":"Elimina",
    "preset.savedNoName":"Assegna un nome al preset prima di salvarlo.",
    "preview.placeholder":"Configura il contenuto e premi «Genera» per vedere il QR",
    "action.generate":"Genera", "action.download":"Scarica PNG",
    "footer.note":"Tutto avviene nel tuo browser — nessun dato lascia questo dispositivo.",
    "err.emptyText":"Inserisci un testo da codificare.",
    "err.emptyUrl":"Inserisci un indirizzo URL.",
    "err.emptyVcard":"Inserisci almeno nome o cognome per la vCard.",
    "err.invalidEmail":"Indirizzo email non valido.",
    "err.invalidEmailBlock":"Correggi gli indirizzi email non validi prima di generare il QR.",
    "err.tooLong":"Il contenuto è troppo lungo per restare scansionabile in modo affidabile da una fotocamera standard. Riducilo o abbassa il livello di correzione.",
    "density.ok":"Densità nella norma.", "density.warn":"Densità elevata: verifica la scansionabilità.",
    "density.bad":"Contenuto troppo denso: riduci il testo o cambia livello di correzione.",
    "contrast.ok":"Contrasto sufficiente.",
    "contrast.bad":"Contrasto basso: il QR potrebbe risultare difficile da leggere."
  },
  en: {
    tagline:"custom QR code generator",
    "sec.content":"Content", "sec.style":"Style", "sec.colors":"Colors", "sec.dots":"Module style",
    "sec.eyes":"Eyes & center dot style", "sec.border":"Border", "sec.logo":"Center logo",
    "sec.output":"Output", "sec.presets":"Style presets", "sec.preview":"Preview",
    "tab.text":"Text", "tab.url":"URL", "tab.vcard":"vCard",
    "field.text":"Free text", "field.text.ph":"Write the QR content...",
    "field.url":"URL address", "field.url.ph":"example.com or https://example.com",
    "field.url.hint":"The address is encoded exactly as typed, no automatic corrections.",
    "field.vcardVersion":"vCard version", "field.firstName":"First name", "field.lastName":"Last name",
    "field.org":"Organization", "field.role":"Role", "field.mobile":"Mobile", "field.home":"Landline",
    "field.fax":"Fax", "field.bday":"Date of birth", "field.email":"Email", "field.workEmail":"Work email",
    "field.website":"Website", "field.addr1":"Address 1", "field.addr2":"Address 2", "field.note":"Notes",
    "density.label":"QR density",
    "color.flat":"Solid color", "color.gradient":"Gradient",
    "color.fg":"Foreground color (modules / eyes / border)",
    "color.grad1":"Color 1", "color.grad2":"Color 2", "color.gradType":"Gradient type",
    "color.linear":"Linear", "color.radial":"Radial", "color.angle":"Direction (linear)",
    "color.gradHint":"A single gradient is applied continuously across modules, eyes, center dots and border.",
    "color.bg":"Background color",
    "contrast.label":"Contrast",
    "dots.square":"Square", "dots.circle":"Circle", "dots.capsuleH":"Horiz. capsule", "dots.capsuleV":"Vert. capsule",
    "eyes.outer":"Eyes (corners)", "eyes.inner":"Center dots",
    "eyes.sq":"Square", "eyes.rd":"Rounded", "eyes.ci":"Circle",
    "border.thickness":"Thickness", "border.radius":"Corner radius",
    "border.hint":"The border color follows the same color or gradient as the modules.",
    "logo.enable":"Include an image at the QR's center",
    "logo.drop":"Drag an image here, or click to select one",
    "logo.formats":"PNG, JPG or WEBP · max 5MB", "logo.remove":"Remove",
    "logo.err.type":"Unsupported format. Use PNG, JPG or WEBP.",
    "logo.err.size":"The file exceeds the 5MB limit.",
    "output.ec":"Error correction level", "output.size":"Image size",
    "ec.L":"L — low (7%)", "ec.M":"M — medium (15%)", "ec.Q":"Q — high (25%)", "ec.H":"H — maximum (30%)",
    "ec.hint.logo":"With the logo enabled only Q and H are available.",
    "ec.hint.nologo":"All levels are available.",
    "preset.name":"Preset name", "preset.name.ph":"e.g. Corporate blue", "preset.save":"Save",
    "preset.load":"Saved presets", "preset.none":"— none —", "preset.applyBtn":"Load", "preset.deleteBtn":"Delete",
    "preset.savedNoName":"Give the preset a name before saving it.",
    "preview.placeholder":"Set up your content and press \u00abGenerate\u00bb to see the QR",
    "action.generate":"Generate", "action.download":"Download PNG",
    "footer.note":"Everything runs in your browser — no data leaves this device.",
    "err.emptyText":"Enter some text to encode.",
    "err.emptyUrl":"Enter a URL address.",
    "err.emptyVcard":"Enter at least a first or last name for the vCard.",
    "err.invalidEmail":"Invalid email address.",
    "err.invalidEmailBlock":"Fix the invalid email addresses before generating the QR code.",
    "err.tooLong":"The content is too long to stay reliably scannable by a standard phone camera. Shorten it or lower the correction level.",
    "density.ok":"Density is within range.", "density.warn":"High density: check scannability.",
    "density.bad":"Content too dense: shorten the text or change the correction level.",
    "contrast.ok":"Contrast is sufficient.",
    "contrast.bad":"Low contrast: the QR code may be hard to read."
  }
};
let currentLang = 'it';
function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || key; }
function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.title = 'yaqcg - Yet Another QrCode Generator';
  populateEcSelect();
  updateEcHint();
  updateDensityIndicator();
  updateContrastIndicator();
  if (typeof checkVEmail === 'function') checkVEmail();
  if (typeof checkVWorkEmail === 'function') checkVWorkEmail();
}
document.querySelectorAll('.lang-toggle button').forEach(function(btn){
  btn.addEventListener('click', function(){
    currentLang = btn.getAttribute('data-lang');
    document.querySelectorAll('.lang-toggle button').forEach(function(b){ b.classList.toggle('active', b===btn); });
    applyI18n();
  });
});

/* ============================================================
   STATE
============================================================ */
const styleState = {
  colorMode: 'flat',           // 'flat' | 'gradient'
  dotsColorFlat: '#16211F',
  gradColor1: '#0E7C86',
  gradColor2: '#16211F',
  gradType: 'linear',          // 'linear' | 'radial'
  gradAngle: 0,                // 0 | 45 | 90
  bgColor: '#EFF1EC',
  dotStyle: 'square',          // square | circle | capsule-h | capsule-v
  eyeStyle: 'square',          // square | rounded | circle
  eyeDotStyle: 'square',       // square | rounded | circle
  borderThickness: 3,
  borderRadius: 3,
  ec: 'Q',
  size: 512
};

const contentState = {
  type: 'text',
  text: '',
  url: '',
  vcard: {
    version: '4.0', firstName:'', lastName:'', org:'', title:'',
    mobile:'', home:'', fax:'', bday:'', email:'', workEmail:'',
    website:'', addr1:'', addr2:'', note:''
  }
};

const logoState = { enabled:false, dataUrl:null, img:null };

/* ============================================================
   DOM REFS
============================================================ */
const $ = (id) => document.getElementById(id);
const canvas = $('qrCanvas');
const ctx = canvas.getContext('2d');
const canvasPlaceholder = $('canvasPlaceholder');
const genErrorBox = $('genError');

/* ---------- tabs contenuto ---------- */
document.querySelectorAll('[data-content-type]').forEach(function(btn){
  btn.addEventListener('click', function(){
    contentState.type = btn.getAttribute('data-content-type');
    document.querySelectorAll('[data-content-type]').forEach(function(b){ b.classList.toggle('active', b===btn); });
    document.querySelectorAll('[data-content-panel]').forEach(function(p){
      p.classList.toggle('active', p.getAttribute('data-content-panel') === contentState.type);
    });
    scheduleDensityUpdate();
  });
});

/* ---------- campi testo/url ---------- */
$('inputText').addEventListener('input', function(e){ contentState.text = e.target.value; scheduleDensityUpdate(); });
$('inputUrl').addEventListener('input', function(e){ contentState.url = e.target.value; scheduleDensityUpdate(); });

/* ---------- campi vcard ---------- */
const vcardFieldMap = {
  vcardVersion:'version', vFirstName:'firstName', vLastName:'lastName', vOrg:'org', vTitle:'title',
  vMobile:'mobile', vHome:'home', vFax:'fax', vBday:'bday', vEmail:'email', vWorkEmail:'workEmail',
  vWebsite:'website', vAddr1:'addr1', vAddr2:'addr2', vNote:'note'
};
Object.keys(vcardFieldMap).forEach(function(elId){
  const el = $(elId);
  const key = vcardFieldMap[elId];
  const evt = (el.tagName === 'SELECT') ? 'change' : 'input';
  el.addEventListener(evt, function(){
    contentState.vcard[key] = el.value;
    scheduleDensityUpdate();
  });
});

/* ---------- validazione email vCard ---------- */
function isValidEmail(str){
  if (!str) return true; // campo vuoto: nessun errore, l'email non è obbligatoria
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());
}
function wireEmailValidation(inputId, errorId){
  const input = $(inputId), errorEl = $(errorId);
  function check(){
    const ok = isValidEmail(input.value);
    input.classList.toggle('field-invalid', !ok);
    if (ok) {
      errorEl.style.display = 'none';
    } else {
      errorEl.textContent = t('err.invalidEmail');
      errorEl.style.display = 'block';
    }
    return ok;
  }
  input.addEventListener('input', check);
  input.addEventListener('blur', check);
  return check;
}
const checkVEmail = wireEmailValidation('vEmail', 'vEmailError');
const checkVWorkEmail = wireEmailValidation('vWorkEmail', 'vWorkEmailError');

/* ---------- colori: flat / gradient ---------- */
document.querySelectorAll('[data-color-mode]').forEach(function(btn){
  btn.addEventListener('click', function(){
    styleState.colorMode = btn.getAttribute('data-color-mode');
    document.querySelectorAll('[data-color-mode]').forEach(function(b){ b.classList.toggle('active', b===btn); });
    $('flatColorField').style.display = styleState.colorMode === 'flat' ? '' : 'none';
    $('gradientFields').style.display = styleState.colorMode === 'gradient' ? '' : 'none';
    updateContrastIndicator();
  });
});
$('dotsColorFlat').addEventListener('input', function(e){ styleState.dotsColorFlat = e.target.value; updateContrastIndicator(); });
$('gradColor1').addEventListener('input', function(e){ styleState.gradColor1 = e.target.value; updateContrastIndicator(); });
$('gradColor2').addEventListener('input', function(e){ styleState.gradColor2 = e.target.value; updateContrastIndicator(); });
$('bgColor').addEventListener('input', function(e){ styleState.bgColor = e.target.value; updateContrastIndicator(); });

document.querySelectorAll('[data-grad-type]').forEach(function(btn){
  btn.addEventListener('click', function(){
    styleState.gradType = btn.getAttribute('data-grad-type');
    document.querySelectorAll('[data-grad-type]').forEach(function(b){ b.classList.toggle('active', b===btn); });
    $('angleField').style.display = styleState.gradType === 'linear' ? '' : 'none';
  });
});
document.querySelectorAll('[data-angle]').forEach(function(btn){
  btn.addEventListener('click', function(){
    styleState.gradAngle = parseInt(btn.getAttribute('data-angle'), 10);
    document.querySelectorAll('[data-angle]').forEach(function(b){ b.classList.toggle('active', b===btn); });
  });
});

/* ---------- stile moduli / occhi / punti centrali ---------- */
function wireSwatchGroup(groupId, attr, stateKey){
  document.querySelectorAll('#' + groupId + ' [' + attr + ']').forEach(function(btn){
    btn.addEventListener('click', function(){
      styleState[stateKey] = btn.getAttribute(attr);
      document.querySelectorAll('#' + groupId + ' .swatch-btn').forEach(function(b){ b.classList.toggle('active', b===btn); });
    });
  });
}
wireSwatchGroup('dotStyleGroup', 'data-dot-style', 'dotStyle');
wireSwatchGroup('eyeStyleGroup', 'data-eye-style', 'eyeStyle');
wireSwatchGroup('eyeDotStyleGroup', 'data-eyedot-style', 'eyeDotStyle');

/* ---------- contorno ---------- */
$('borderThickness').addEventListener('input', function(e){
  styleState.borderThickness = parseInt(e.target.value, 10);
  $('borderThicknessVal').textContent = styleState.borderThickness + 'px';
});
$('borderRadius').addEventListener('input', function(e){
  styleState.borderRadius = parseInt(e.target.value, 10);
  $('borderRadiusVal').textContent = styleState.borderRadius + 'px';
});

/* ---------- output ---------- */
function populateEcSelect(){
  const sel = $('ecLevel');
  const prev = styleState.ec;
  const levels = logoState.enabled ? ['Q','H'] : ['L','M','Q','H'];
  sel.innerHTML = '';
  levels.forEach(function(l){
    const opt = document.createElement('option');
    opt.value = l;
    opt.textContent = t('ec.' + l);
    sel.appendChild(opt);
  });
  styleState.ec = levels.indexOf(prev) !== -1 ? prev : 'Q';
  sel.value = styleState.ec;
}
function updateEcHint(){
  $('ecHint').textContent = logoState.enabled ? t('ec.hint.logo') : t('ec.hint.nologo');
}
$('ecLevel').addEventListener('change', function(e){
  styleState.ec = e.target.value;
  scheduleDensityUpdate();
});
$('outputSize').addEventListener('change', function(e){
  styleState.size = parseInt(e.target.value, 10);
});

/* ---------- logo ---------- */
const logoDropzone = $('logoDropzone');
const logoFileInput = $('logoFile');
const logoErrorBox = $('logoError');

$('logoEnabled').addEventListener('change', function(e){
  logoState.enabled = e.target.checked;
  $('logoControls').style.display = logoState.enabled ? '' : 'none';
  populateEcSelect();
  updateEcHint();
});

logoDropzone.addEventListener('click', function(){ logoFileInput.click(); });
logoDropzone.addEventListener('dragover', function(e){ e.preventDefault(); logoDropzone.classList.add('dragover'); });
logoDropzone.addEventListener('dragleave', function(){ logoDropzone.classList.remove('dragover'); });
logoDropzone.addEventListener('drop', function(e){
  e.preventDefault();
  logoDropzone.classList.remove('dragover');
  if (e.dataTransfer.files && e.dataTransfer.files[0]) handleLogoFile(e.dataTransfer.files[0]);
});
logoFileInput.addEventListener('change', function(e){
  if (e.target.files && e.target.files[0]) handleLogoFile(e.target.files[0]);
});
$('logoRemoveBtn').addEventListener('click', function(){
  logoState.dataUrl = null; logoState.img = null;
  $('logoPreviewRow').style.display = 'none';
  logoErrorBox.classList.remove('show');
});

function handleLogoFile(file){
  logoErrorBox.classList.remove('show');
  const allowed = ['image/png', 'image/jpeg', 'image/webp'];
  if (allowed.indexOf(file.type) === -1) {
    logoErrorBox.textContent = t('logo.err.type');
    logoErrorBox.classList.add('show');
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    logoErrorBox.textContent = t('logo.err.size');
    logoErrorBox.classList.add('show');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e){
    logoState.dataUrl = e.target.result;
    const img = new Image();
    img.onload = function(){
      logoState.img = img;
      $('logoPreviewImg').src = logoState.dataUrl;
      $('logoPreviewRow').style.display = 'flex';
    };
    img.src = logoState.dataUrl;
  };
  reader.readAsDataURL(file);
}

/* ============================================================
   PRESET (localStorage) — solo parametri di stile
============================================================ */
const PRESET_KEY = 'yaqcg_presets_v1';
function getPresets(){
  try { return JSON.parse(localStorage.getItem(PRESET_KEY) || '{}'); }
  catch(e){ return {}; }
}
function refreshPresetSelect(){
  const sel = $('presetSelect');
  const presets = getPresets();
  sel.innerHTML = '';
  const noneOpt = document.createElement('option');
  noneOpt.value = ''; noneOpt.textContent = t('preset.none');
  sel.appendChild(noneOpt);
  Object.keys(presets).forEach(function(name){
    const opt = document.createElement('option');
    opt.value = name; opt.textContent = name;
    sel.appendChild(opt);
  });
}
$('presetSaveBtn').addEventListener('click', function(){
  const name = $('presetName').value.trim();
  if (!name) { alert(t('preset.savedNoName')); return; }
  const presets = getPresets();
  presets[name] = JSON.parse(JSON.stringify(styleState));
  localStorage.setItem(PRESET_KEY, JSON.stringify(presets));
  refreshPresetSelect();
  $('presetSelect').value = name;
});
$('presetLoadBtn').addEventListener('click', function(){
  const name = $('presetSelect').value;
  if (!name) return;
  const presets = getPresets();
  const p = presets[name];
  if (!p) return;
  Object.assign(styleState, p);
  syncStyleUIFromState();
});
$('presetDeleteBtn').addEventListener('click', function(){
  const name = $('presetSelect').value;
  if (!name) return;
  const presets = getPresets();
  delete presets[name];
  localStorage.setItem(PRESET_KEY, JSON.stringify(presets));
  refreshPresetSelect();
});

function syncStyleUIFromState(){
  document.querySelectorAll('[data-color-mode]').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-color-mode') === styleState.colorMode); });
  $('flatColorField').style.display = styleState.colorMode === 'flat' ? '' : 'none';
  $('gradientFields').style.display = styleState.colorMode === 'gradient' ? '' : 'none';
  $('dotsColorFlat').value = styleState.dotsColorFlat;
  $('gradColor1').value = styleState.gradColor1;
  $('gradColor2').value = styleState.gradColor2;
  $('bgColor').value = styleState.bgColor;
  document.querySelectorAll('[data-grad-type]').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-grad-type') === styleState.gradType); });
  $('angleField').style.display = styleState.gradType === 'linear' ? '' : 'none';
  document.querySelectorAll('[data-angle]').forEach(function(b){ b.classList.toggle('active', parseInt(b.getAttribute('data-angle'),10) === styleState.gradAngle); });
  document.querySelectorAll('#dotStyleGroup .swatch-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-dot-style') === styleState.dotStyle); });
  document.querySelectorAll('#eyeStyleGroup .swatch-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-eye-style') === styleState.eyeStyle); });
  document.querySelectorAll('#eyeDotStyleGroup .swatch-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-eyedot-style') === styleState.eyeDotStyle); });
  $('borderThickness').value = styleState.borderThickness;
  $('borderThicknessVal').textContent = styleState.borderThickness + 'px';
  $('borderRadius').value = styleState.borderRadius;
  $('borderRadiusVal').textContent = styleState.borderRadius + 'px';
  populateEcSelect();
  $('ecLevel').value = styleState.ec;
  updateEcHint();
  $('outputSize').value = String(styleState.size);
  updateContrastIndicator();
  scheduleDensityUpdate();
}

/* ============================================================
   COSTRUZIONE PAYLOAD
============================================================ */
function escVcard(str){
  return String(str || '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}
function buildVCard(v){
  const ver = v.version;
  const lines = ['BEGIN:VCARD', 'VERSION:' + ver];
  lines.push('N:' + escVcard(v.lastName) + ';' + escVcard(v.firstName) + ';;;');
  const fn = (v.firstName + ' ' + v.lastName).trim();
  lines.push('FN:' + (fn ? escVcard(fn) : escVcard(v.firstName || v.lastName)));
  if (v.org) lines.push('ORG:' + escVcard(v.org));
  if (v.title) lines.push('TITLE:' + escVcard(v.title));
  if (v.mobile) lines.push('TEL;TYPE=CELL:' + escVcard(v.mobile));
  if (v.home) lines.push('TEL;TYPE=HOME,VOICE:' + escVcard(v.home));
  if (v.fax) lines.push('TEL;TYPE=FAX:' + escVcard(v.fax));
  if (v.email) lines.push('EMAIL:' + escVcard(v.email));
  if (v.workEmail) lines.push('EMAIL;TYPE=WORK:' + escVcard(v.workEmail));
  if (v.addr1) lines.push('ADR;TYPE=HOME:;;' + escVcard(v.addr1) + ';;;;');
  if (v.addr2) lines.push('ADR;TYPE=WORK:;;' + escVcard(v.addr2) + ';;;;');
  if (v.website) lines.push('URL:' + escVcard(v.website));
  if (v.note) lines.push('NOTE:' + escVcard(v.note));
  if (v.bday) {
    const digits = v.bday.replace(/-/g, '');
    lines.push('BDAY:' + (ver === '4.0' ? v.bday : digits));
  }
  lines.push('END:VCARD');
  return lines.join('\r\n');
}
function buildPayload(){
  if (contentState.type === 'text') return contentState.text.trim();
  if (contentState.type === 'url') return contentState.url.trim();
  if (contentState.type === 'vcard') {
    const v = contentState.vcard;
    if (!v.firstName.trim() && !v.lastName.trim()) return '';
    return buildVCard(v);
  }
  return '';
}
function payloadValidationError(){
  if (contentState.type === 'text' && !contentState.text.trim()) return t('err.emptyText');
  if (contentState.type === 'url' && !contentState.url.trim()) return t('err.emptyUrl');
  if (contentState.type === 'vcard' && !contentState.vcard.firstName.trim() && !contentState.vcard.lastName.trim()) return t('err.emptyVcard');
  if (contentState.type === 'vcard') {
    const okEmail = isValidEmail(contentState.vcard.email);
    const okWorkEmail = isValidEmail(contentState.vcard.workEmail);
    if (!okEmail || !okWorkEmail) return t('err.invalidEmailBlock');
  }
  return null;
}

/* ============================================================
   DENSITÀ (versione QR risultante) — indicatore live
============================================================ */
const MAX_VERSION = 25;
function debounce(fn, ms){
  let timer;
  return function(){
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){ fn.apply(null, args); }, ms);
  };
}
function tryEncode(payload, ec){
  const q = qrcode(0, ec);
  q.addData(payload);
  q.make();
  const n = q.getModuleCount();
  const version = Math.round((n - 17) / 4);
  return { qr: q, moduleCount: n, version: version };
}
function updateDensityIndicator(){
  const bar = $('densityBar'), pct = $('densityPct'), msg = $('densityMsg');
  const payload = buildPayload();
  if (!payload) {
    bar.style.width = '0%'; bar.style.background = '#C9C6B8';
    pct.textContent = '—'; msg.textContent = ''; msg.className = 'indicator-msg';
    window.__lastDensityOk = true;
    return;
  }
  try {
    const res = tryEncode(payload, styleState.ec);
    const ratio = res.version / MAX_VERSION;
    const pctVal = Math.min(ratio, 1.4) * 100;
    bar.style.width = Math.min(pctVal, 100) + '%';
    pct.textContent = 'v' + res.version + '/' + MAX_VERSION;
    if (res.version <= MAX_VERSION * 0.7) {
      bar.style.background = 'var(--ok)'; msg.textContent = t('density.ok'); msg.className = 'indicator-msg ok';
      window.__lastDensityOk = true;
    } else if (res.version <= MAX_VERSION) {
      bar.style.background = 'var(--amber)'; msg.textContent = t('density.warn'); msg.className = 'indicator-msg warn';
      window.__lastDensityOk = true;
    } else {
      bar.style.background = 'var(--danger)'; msg.textContent = t('density.bad'); msg.className = 'indicator-msg bad';
      window.__lastDensityOk = false;
    }
  } catch (e) {
    bar.style.width = '100%'; bar.style.background = 'var(--danger)';
    pct.textContent = 'v40+/' + MAX_VERSION;
    msg.textContent = t('density.bad'); msg.className = 'indicator-msg bad';
    window.__lastDensityOk = false;
  }
}
const scheduleDensityUpdate = debounce(updateDensityIndicator, 250);

/* ============================================================
   CONTRASTO — indicatore live (solo avviso)
============================================================ */
function hexToRgb(hex){
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.substring(0,2), 16),
    g: parseInt(h.substring(2,4), 16),
    b: parseInt(h.substring(4,6), 16)
  };
}
function relLuminance(rgb){
  const conv = [rgb.r, rgb.g, rgb.b].map(function(c){
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * conv[0] + 0.7152 * conv[1] + 0.0722 * conv[2];
}
function contrastRatio(hex1, hex2){
  const l1 = relLuminance(hexToRgb(hex1));
  const l2 = relLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2), darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
function updateContrastIndicator(){
  const bar = $('contrastBar'), val = $('contrastVal'), msg = $('contrastMsg');
  const fgColors = styleState.colorMode === 'gradient' ? [styleState.gradColor1, styleState.gradColor2] : [styleState.dotsColorFlat];
  let worst = Infinity;
  fgColors.forEach(function(c){ worst = Math.min(worst, contrastRatio(c, styleState.bgColor)); });
  const capped = Math.min(worst, 10);
  bar.style.width = (capped / 10 * 100) + '%';
  val.textContent = worst.toFixed(1) + ':1';
  if (worst >= 4.5) {
    bar.style.background = 'var(--ok)'; msg.textContent = t('contrast.ok'); msg.className = 'indicator-msg ok';
  } else {
    bar.style.background = 'var(--danger)'; msg.textContent = t('contrast.bad'); msg.className = 'indicator-msg bad';
  }
}

/* ============================================================
   RENDERING CANVAS
============================================================ */
function roundedRectPath(c, x, y, w, h, r){
  r = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}
function pointInRoundedRect(px, py, x, y, w, h, r){
  if (px < x || px > x + w || py < y || py > y + h) return false;
  r = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  const inCornerX = px < x + r || px > x + w - r;
  const inCornerY = py < y + r || py > y + h - r;
  if (inCornerX && inCornerY) {
    const cx = px < x + r ? x + r : x + w - r;
    const cy = py < y + r ? y + r : y + h - r;
    return Math.hypot(px - cx, py - cy) <= r;
  }
  return true;
}
function buildForegroundFill(c, size){
  if (styleState.colorMode === 'flat') return styleState.dotsColorFlat;
  if (styleState.gradType === 'radial') {
    const cx = size / 2, cy = size / 2;
    const r = Math.hypot(size / 2, size / 2);
    const g = c.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, styleState.gradColor1);
    g.addColorStop(1, styleState.gradColor2);
    return g;
  }
  // lineare
  const a = styleState.gradAngle * Math.PI / 180;
  const dx = Math.cos(a), dy = Math.sin(a);
  const half = size / 2;
  const x0 = half - dx * half, y0 = half - dy * half;
  const x1 = half + dx * half, y1 = half + dy * half;
  const g = c.createLinearGradient(x0, y0, x1, y1);
  g.addColorStop(0, styleState.gradColor1);
  g.addColorStop(1, styleState.gradColor2);
  return g;
}
function drawShape(c, x, y, w, h, style, fill){
  c.fillStyle = fill;
  if (style === 'square') {
    c.beginPath(); c.rect(x, y, w, h); c.fill();
  } else if (style === 'rounded') {
    const r = Math.min(w, h) * 0.25;
    roundedRectPath(c, x, y, w, h, r); c.fill();
  } else { // circle
    c.beginPath();
    c.arc(x + w / 2, y + h / 2, Math.min(w, h) / 2, 0, Math.PI * 2);
    c.fill();
  }
}
function inFinder(r, cIdx, n){
  return (r < 7 && cIdx < 7) || (r < 7 && cIdx >= n - 7) || (r >= n - 7 && cIdx < 7);
}

function renderQR(qr, opts){
  const n = qr.getModuleCount();
  const size = opts.size;
  const scale = size / 512;
  const quietModules = 4;
  const totalModules = n + quietModules * 2;
  const moduleSize = size / totalModules;
  const offset = quietModules * moduleSize;
  const qrPixelWidth = n * moduleSize;

  canvas.width = size; canvas.height = size;
  ctx.clearRect(0, 0, size, size);

  // sfondo
  ctx.fillStyle = styleState.bgColor;
  ctx.fillRect(0, 0, size, size);

  const fg = buildForegroundFill(ctx, size);

  // area logo (maschera)
  let logoBox = null;
  if (logoState.enabled && logoState.img) {
    const logoSize = qrPixelWidth * 0.20;
    const marginSize = logoSize * 0.05;
    const boxSize = logoSize + marginSize * 2;
    logoBox = {
      x: offset + (qrPixelWidth - boxSize) / 2,
      y: offset + (qrPixelWidth - boxSize) / 2,
      size: boxSize,
      logoSize: logoSize,
      marginSize: marginSize,
      shape: styleState.eyeStyle
    };
  }
  function isInLogoBox(px, py){
    if (!logoBox) return false;
    if (logoBox.shape === 'circle') {
      const cx = logoBox.x + logoBox.size / 2, cy = logoBox.y + logoBox.size / 2;
      return Math.hypot(px - cx, py - cy) <= logoBox.size / 2;
    } else if (logoBox.shape === 'rounded') {
      return pointInRoundedRect(px, py, logoBox.x, logoBox.y, logoBox.size, logoBox.size, logoBox.size * 0.25);
    }
    return px >= logoBox.x && px <= logoBox.x + logoBox.size && py >= logoBox.y && py <= logoBox.y + logoBox.size;
  }

  // matrice "attiva": moduli scuri, non nei finder pattern, non nell'area del logo
  const active = [];
  for (let r = 0; r < n; r++) {
    active[r] = [];
    for (let c2 = 0; c2 < n; c2++) {
      let on = qr.isDark(r, c2) && !inFinder(r, c2, n);
      if (on && logoBox) {
        const px = offset + (c2 + 0.5) * moduleSize;
        const py = offset + (r + 0.5) * moduleSize;
        if (isInLogoBox(px, py)) on = false;
      }
      active[r][c2] = on;
    }
  }

  ctx.fillStyle = fg;

  if (styleState.dotStyle === 'square' || styleState.dotStyle === 'circle') {
    for (let r = 0; r < n; r++) {
      for (let c2 = 0; c2 < n; c2++) {
        if (!active[r][c2]) continue;
        const x = offset + c2 * moduleSize, y = offset + r * moduleSize;
        if (styleState.dotStyle === 'square') {
          ctx.beginPath(); ctx.rect(x, y, moduleSize, moduleSize); ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(x + moduleSize / 2, y + moduleSize / 2, moduleSize * 0.47, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  } else if (styleState.dotStyle === 'capsule-h') {
    for (let r = 0; r < n; r++) {
      let c2 = 0;
      while (c2 < n) {
        if (active[r][c2]) {
          const start = c2;
          while (c2 < n && active[r][c2]) c2++;
          const end = c2 - 1;
          const runLen = end - start + 1;
          const x = offset + start * moduleSize, y = offset + r * moduleSize;
          if (runLen === 1) {
            ctx.beginPath();
            ctx.arc(x + moduleSize / 2, y + moduleSize / 2, moduleSize * 0.47, 0, Math.PI * 2);
            ctx.fill();
          } else {
            roundedRectPath(ctx, x, y, runLen * moduleSize, moduleSize, moduleSize / 2);
            ctx.fill();
          }
        } else { c2++; }
      }
    }
  } else if (styleState.dotStyle === 'capsule-v') {
    for (let c2 = 0; c2 < n; c2++) {
      let r = 0;
      while (r < n) {
        if (active[r][c2]) {
          const start = r;
          while (r < n && active[r][c2]) r++;
          const end = r - 1;
          const runLen = end - start + 1;
          const x = offset + c2 * moduleSize, y = offset + start * moduleSize;
          if (runLen === 1) {
            ctx.beginPath();
            ctx.arc(x + moduleSize / 2, y + moduleSize / 2, moduleSize * 0.47, 0, Math.PI * 2);
            ctx.fill();
          } else {
            roundedRectPath(ctx, x, y, moduleSize, runLen * moduleSize, moduleSize / 2);
            ctx.fill();
          }
        } else { r++; }
      }
    }
  }

  // occhi (finder pattern): tre blocchi 7x7
  const finderOrigins = [
    { r: 0, c: 0 },
    { r: 0, c: n - 7 },
    { r: n - 7, c: 0 }
  ];
  finderOrigins.forEach(function(f){
    const x0 = offset + f.c * moduleSize, y0 = offset + f.r * moduleSize;
    const outer = 7 * moduleSize, inner = 5 * moduleSize, dot = 3 * moduleSize;
    const ringInset = moduleSize, dotInset = moduleSize * 2;
    drawShape(ctx, x0, y0, outer, outer, styleState.eyeStyle, fg);
    drawShape(ctx, x0 + ringInset, y0 + ringInset, inner, inner, styleState.eyeStyle, styleState.bgColor);
    drawShape(ctx, x0 + dotInset, y0 + dotInset, dot, dot, styleState.eyeDotStyle, fg);
  });

  // contorno
  if (styleState.borderThickness > 0) {
    const thickness = styleState.borderThickness * scale;
    const radius = styleState.borderRadius * scale;
    ctx.lineWidth = thickness;
    ctx.strokeStyle = fg;
    const inset = thickness / 2;
    roundedRectPath(ctx, inset, inset, size - thickness, size - thickness, radius);
    ctx.stroke();
  }

  // logo
  if (logoBox && logoState.img) {
    ctx.save();
    if (logoBox.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(logoBox.x + logoBox.size / 2, logoBox.y + logoBox.size / 2, logoBox.size / 2, 0, Math.PI * 2);
    } else if (logoBox.shape === 'rounded') {
      roundedRectPath(ctx, logoBox.x, logoBox.y, logoBox.size, logoBox.size, logoBox.size * 0.25);
    } else {
      ctx.beginPath(); ctx.rect(logoBox.x, logoBox.y, logoBox.size, logoBox.size);
    }
    ctx.fillStyle = styleState.bgColor;
    ctx.fill();
    ctx.restore();

    ctx.save();
    const imgX = logoBox.x + logoBox.marginSize, imgY = logoBox.y + logoBox.marginSize, imgSize = logoBox.logoSize;
    if (logoBox.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(imgX + imgSize / 2, imgY + imgSize / 2, imgSize / 2, 0, Math.PI * 2);
    } else if (logoBox.shape === 'rounded') {
      roundedRectPath(ctx, imgX, imgY, imgSize, imgSize, imgSize * 0.25);
    } else {
      ctx.beginPath(); ctx.rect(imgX, imgY, imgSize, imgSize);
    }
    ctx.clip();
    const img = logoState.img;
    const cover = Math.max(imgSize / img.width, imgSize / img.height);
    const dw = img.width * cover, dh = img.height * cover;
    const dx = imgX + (imgSize - dw) / 2, dy = imgY + (imgSize - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);
    ctx.restore();
  }
}

/* ============================================================
   GENERA / SCARICA
============================================================ */
function showGenError(text){
  genErrorBox.textContent = text;
  genErrorBox.classList.add('show');
}
function clearGenError(){
  genErrorBox.classList.remove('show');
}

function doGenerate(){
  clearGenError();
  const err = payloadValidationError();
  if (err) { showGenError(err); return; }
  const payload = buildPayload();
  let res;
  try {
    res = tryEncode(payload, styleState.ec);
  } catch (e) {
    showGenError(t('err.tooLong'));
    return;
  }
  if (res.version > MAX_VERSION) {
    showGenError(t('err.tooLong'));
    return;
  }
  renderQR(res.qr, { size: styleState.size });
  canvas.style.display = 'block';
  canvasPlaceholder.style.display = 'none';
  $('downloadBtn').disabled = false;
  $('downloadBtnMobile').disabled = false;
}

function doDownload(){
  const link = document.createElement('a');
  link.download = 'qrcode.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

$('generateBtn').addEventListener('click', doGenerate);
$('generateBtnMobile').addEventListener('click', doGenerate);
$('downloadBtn').addEventListener('click', doDownload);
$('downloadBtnMobile').addEventListener('click', doDownload);


/* ============================================================
   TEMA — slider a 7 posizioni, portato da yaiig
   (petrus-giannini/yaiig)
============================================================ */
const THEMES = ['acido', 'classico-chiaro', 'classico-scuro', 'circo', 'stalingrado', 'habana', 'ho-chi-min'];
const THEME_LABELS = {
  'acido': 'Acido',
  'classico-chiaro': 'Classico Chiaro',
  'classico-scuro': 'Classico Scuro',
  'circo': 'Circo',
  'stalingrado': 'Stalingrado',
  'habana': 'Habana',
  'ho-chi-min': 'Ho Chi Min'
};
function applyTheme(index){
  document.body.className = 'theme-' + THEMES[index];
  const labelEl = document.getElementById('theme-label');
  const sliderEl = document.getElementById('theme-slider');
  if (labelEl) labelEl.textContent = THEME_LABELS[THEMES[index]];
  if (sliderEl) sliderEl.value = index;
}
function initThemeSlider(){
  const slider = document.getElementById('theme-slider');
  if (!slider) return;
  slider.min = 0;
  slider.max = THEMES.length - 1;
  slider.value = 0;
  applyTheme(0);
  slider.addEventListener('input', function(){
    applyTheme(parseInt(slider.value, 10));
  });
}

/* ============================================================
   INIT
============================================================ */
initThemeSlider();
populateEcSelect();
updateEcHint();
refreshPresetSelect();
applyI18n();
updateContrastIndicator();
updateDensityIndicator();

})();
