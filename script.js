console.log("🎨 Moodboard Generator berhasil connect!");

// Seleksi elemen input warna
const inputPrimaryColor = document.querySelector("#primary-color");
const inputSecondaryColor = document.querySelector("#secondary-color");
const inputAccentColor = document.querySelector("#accent-color");
const inputColorPreset = document.querySelector("#color-preset");

// Seleksi elemen input teks
const inputMoodTitle = document.querySelector("#mood-title");
const inputKeyword1 = document.querySelector("#mood-keyword1");
const inputKeyword2 = document.querySelector("#mood-keyword2");
const inputKeyword3 = document.querySelector("#mood-keyword3");
const inputDescription = document.querySelector("#mood-description");

// Seleksi elemen tema pastel
const inputPastelTheme = document.querySelector("#pastel-theme");

// Seleksi elemen pratinjau
const previewTitle = document.querySelector("#preview-title");
const previewKeyword1 = document.querySelector("#preview-keyword1");
const previewKeyword2 = document.querySelector("#preview-keyword2");
const previewKeyword3 = document.querySelector("#preview-keyword3");
const previewDescription = document.querySelector("#preview-description");
const moodboardCanvas = document.querySelector("#moodboard-preview");

// Seleksi color swatches
const swatch1 = document.querySelector("#swatch-1");
const swatch2 = document.querySelector("#swatch-2");
const swatch3 = document.querySelector("#swatch-3");

// Seleksi keyword cards untuk styling
const keywordCard1 = document.querySelector("#keyword-card-1");
const keywordCard2 = document.querySelector("#keyword-card-2");
const keywordCard3 = document.querySelector("#keyword-card-3");

// Seleksi color labels
const primaryColorLabel = document.querySelector("#primary-color-label");
const secondaryColorLabel = document.querySelector("#secondary-color-label");
const accentColorLabel = document.querySelector("#accent-color-label");

// Color Presets
const colorPresets = {
  sunset: {
    primary: "#FF6B6B",
    secondary: "#FFB347",
    accent: "#FFA07A",
  },
  ocean: {
    primary: "#4ECDC4",
    secondary: "#1A535C",
    accent: "#95E1D3",
  },
  forest: {
    primary: "#2E7D32",
    secondary: "#66BB6A",
    accent: "#AED581",
  },
  lavender: {
    primary: "#9B59B6",
    secondary: "#E1BEE7",
    accent: "#CE93D8",
  },
  autumn: {
    primary: "#D84315",
    secondary: "#FF8A65",
    accent: "#FFB74D",
  },
  neon: {
    primary: "#FF00FF",
    secondary: "#00FFFF",
    accent: "#FFFF00",
  },
};

// Pastel Theme Backgrounds
const pastelThemes = {
  pink: "linear-gradient(135deg, #FFD6E8 0%, #FFF0F5 50%, #FFE5EE 100%)",
  blue: "linear-gradient(135deg, #E0F4FF 0%, #F0F8FF 50%, #E6F3FF 100%)",
  mint: "linear-gradient(135deg, #D4F1E8 0%, #E8FAF3 50%, #E0F7EE 100%)",
  lavender: "linear-gradient(135deg, #E8D5F2 0%, #F5EEFA 50%, #EFE3F7 100%)",
  peach: "linear-gradient(135deg, #FFE8D6 0%, #FFF5ED 50%, #FFEEE0 100%)",
  lemon: "linear-gradient(135deg, #FFF9D6 0%, #FFFDF0 50%, #FFFBE5 100%)",
};

// Event Listener: Primary Color
inputPrimaryColor.addEventListener("input", function () {
  const color = inputPrimaryColor.value;
  swatch1.style.backgroundColor = color;
  swatch1.querySelector(".color-code").textContent = color.toUpperCase();
  primaryColorLabel.textContent = color.toUpperCase();
  keywordCard1.style.background = `linear-gradient(135deg, ${color} 0%, ${darkenColor(color, 20)} 100%)`;
});

// Event Listener: Secondary Color
inputSecondaryColor.addEventListener("input", function () {
  const color = inputSecondaryColor.value;
  swatch2.style.backgroundColor = color;
  swatch2.querySelector(".color-code").textContent = color.toUpperCase();
  secondaryColorLabel.textContent = color.toUpperCase();
  keywordCard2.style.background = `linear-gradient(135deg, ${color} 0%, ${darkenColor(color, 20)} 100%)`;
});

// Event Listener: Accent Color
inputAccentColor.addEventListener("input", function () {
  const color = inputAccentColor.value;
  swatch3.style.backgroundColor = color;
  swatch3.querySelector(".color-code").textContent = color.toUpperCase();
  accentColorLabel.textContent = color.toUpperCase();
  keywordCard3.style.background = `linear-gradient(135deg, ${color} 0%, ${darkenColor(color, 20)} 100%)`;
});

// Event Listener: Color Preset
inputColorPreset.addEventListener("change", function () {
  const preset = inputColorPreset.value;
  if (preset !== "custom" && colorPresets[preset]) {
    inputPrimaryColor.value = colorPresets[preset].primary;
    inputSecondaryColor.value = colorPresets[preset].secondary;
    inputAccentColor.value = colorPresets[preset].accent;
    inputPrimaryColor.dispatchEvent(new Event("input"));
    inputSecondaryColor.dispatchEvent(new Event("input"));
    inputAccentColor.dispatchEvent(new Event("input"));
  }
});

// Event Listener: Pastel Theme
inputPastelTheme.addEventListener("change", function () {
  const theme = inputPastelTheme.value;
  console.log("Tema pastel dipilih:", theme);
  
  if (theme !== "custom" && pastelThemes[theme]) {
    moodboardCanvas.style.background = pastelThemes[theme];
    console.log("Background berhasil diubah:", pastelThemes[theme]);
  } else {
    // Reset ke default
    moodboardCanvas.style.background = "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)";
  }
});

// Event Listener: Mood Title
inputMoodTitle.addEventListener("input", function () {
  const title = inputMoodTitle.value;
  previewTitle.textContent = title === "" ? "MY MOODBOARD" : title.toUpperCase();
});

// Event Listener: Keyword 1
inputKeyword1.addEventListener("input", function () {
  const keyword = inputKeyword1.value;
  previewKeyword1.textContent = keyword === "" ? "CREATIVE" : keyword.toUpperCase();
});

// Event Listener: Keyword 2
inputKeyword2.addEventListener("input", function () {
  const keyword = inputKeyword2.value;
  previewKeyword2.textContent = keyword === "" ? "MODERN" : keyword.toUpperCase();
});

// Event Listener: Keyword 3
inputKeyword3.addEventListener("input", function () {
  const keyword = inputKeyword3.value;
  previewKeyword3.textContent = keyword === "" ? "BOLD" : keyword.toUpperCase();
});

// Event Listener: Description
inputDescription.addEventListener("input", function () {
  const desc = inputDescription.value;
  if (desc === "") {
    previewDescription.textContent = "Deskripsi mood dan vibe Anda akan muncul di sini. Jelaskan inspirasi dan tema yang ingin Anda sampaikan.";
    previewDescription.style.fontStyle = "italic";
  } else {
    previewDescription.textContent = desc;
    previewDescription.style.fontStyle = "normal";
  }
});

// Utility Function: Darken Color
function darkenColor(hex, percent) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  r = Math.floor(r * (1 - percent / 100));
  g = Math.floor(g * (1 - percent / 100));
  b = Math.floor(b * (1 - percent / 100));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Set initial date
const today = new Date();
const options = { year: "numeric", month: "short" };
const currentDate = today.toLocaleDateString("en-US", options);
document.querySelector("#preview-date").textContent = currentDate;

// Reset Button
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", function () {
  inputPrimaryColor.value = "#FF6B9D";
  inputSecondaryColor.value = "#4ECDC4";
  inputAccentColor.value = "#FFE66D";
  inputColorPreset.value = "custom";
  inputMoodTitle.value = "";
  inputKeyword1.value = "";
  inputKeyword2.value = "";
  inputKeyword3.value = "";
  inputDescription.value = "";
  inputPastelTheme.value = "custom";
  
  inputPrimaryColor.dispatchEvent(new Event("input"));
  inputSecondaryColor.dispatchEvent(new Event("input"));
  inputAccentColor.dispatchEvent(new Event("input"));
  inputMoodTitle.dispatchEvent(new Event("input"));
  inputKeyword1.dispatchEvent(new Event("input"));
  inputKeyword2.dispatchEvent(new Event("input"));
  inputKeyword3.dispatchEvent(new Event("input"));
  inputDescription.dispatchEvent(new Event("input"));
  inputPastelTheme.dispatchEvent(new Event("change"));
  
  console.log("Form berhasil direset!");
});

// Initialize
inputPrimaryColor.dispatchEvent(new Event("input"));
inputSecondaryColor.dispatchEvent(new Event("input"));
inputAccentColor.dispatchEvent(new Event("input"));

console.log("✅ Semua event listener berhasil dipasang!");
console.log("🎨 Moodboard Generator digunakan!");