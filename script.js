const products = [
  { id: 1, name: "Laptop", price: 800, img: "Apple_MacBook_Air_Apple_M3____8_GB_256_GB_SSD_macOS_Sonoma__MRYR3HN_A___15_Inch__Starlight__1_51_Kg__1.jpg" },
  { id: 2, name: "Phone", price: 500, img: "Apple_iPhone_16_Plus__Pink__256_GB__6.jpg" },
  { id: 3, name: "Headphones", price: 100, img: "Noise_TWO_with_50_Hours_Playtime__Low_latency__up_to_42ms___and_Dual_pairing_Wireless_Bluetooth___Serene_Blue__On_the_Ear__1.jpg" },
  { id: 4, name: "Shoes", price: 70, img: "RED_CHIEF__RC3841_006_Boots_For_Men___Tan___6__1.jpg" },
  { id: 5, name: "Watch", price: 150, img: "Titan__Edge_Ceramic_Quartz_in_Midnight_Gold_with_Diamonds_and_Black_Dial_Analog_Watch___For_Men_NT1696KC02_1696KC02_NT1696KC02_1.jpg" },
  { id: 7, name: "Whirlpool 240L Double Door Refrigerator", price: 400, img: "LG_272_L_Frost_Free_Double_Door_2_Star_Convertible_Refrigerator_with_Smart_Inverter_Compressor__Multi_Air_Flow_and_Auto_Smart_Connect___Red_Water_Lily__GL_S312SRWY__3.jpg" },
  { id: 8, name: "Bosch 7kg Front Load Washing Machine", price: 350, img: "InnoQ_9_kg___Turbo_Wash___Buzzer___Wheels___Turbo_Jet_Dryer___Magic_Filter___Lint_Filter_Semi_Automatic_Top_Load_Washing_Machine_Grey___90_TURBO_EXL_GB__1.jpg" },
  { id: 9, name: "Prestige Non-Stick Cookware Set", price: 80, img: "Prestige_Deluxe_Plus_3_L_Outer_Lid_Induction_Bottom_Pressure_Cooker___Aluminium__1.jpg" },
  { id: 10, name: "Philips 750W Mixer Grinder", price: 65, img: "PHILIPS_Daily_Collection_750_W_Mixer_Grinder___HL7756_03___3_Jars___Strawberry__Black__1.jpg" },
  { id: 11, name: "LG 1.5 Ton Split Air Conditioner", price: 600, img: "LG_2025_Model_AI_Plus_Convertible_6_in_1_Split_1_5_Ton_5_Star_Split_AI_Dual_Inverter_with_Energy_Manger_Plus_Voice_Control__HimClean__4_Way__VIRAAT_Mode_and_Diet_Mode_Plus_AC_with_Wi_fi_Connect___White___US_Q19PWZE.jpg" },
  { id: 12, name: "Nilkamal Wooden Study Table", price: 120, img: "Callas_Engineered_Wood_Study_Table___Free_Standing__Finish_Color___Walnut__DIY_Do_It_Yourself___1.jpg" },
  { id: 13, name: "Sleepwell Comfort Mattress", price: 200, img: "MXWELL_Siesta_Compress_Orthoplus_Memory_Foam_6_inch_Single_High_Density__HD__Foam_Mattress___L_x_W__72_inch_x_48_inch__1.jpg" },
  { id: 14, name: "Boat Stone 1200 Bluetooth Speaker", price: 90, img: "boAt_Stone_190_Pro_w__12_HRS_Playback__TWS_Feature___IPX6_Splash_Resistance_5_W_Bluetooth_Speaker___Tropical_Blue__Mono_Channel__1.jpg" },
  { id: 15, name: "Wildcraft 45L Backpack", price: 50, img: "Wildcraft__Large_35_L_Laptop_Backpack_Blaze_35_Slice___Red__1.jpg" },
  { id: 16, name: "Adidas Running T-Shirt", price: 35, img: "ADIDAS__Men_Printed_Round_Neck_Polyester_Black_T_Shirt_1.jpg" },
{ id: 17, name: "Levi’s Slim Fit Jeans", price: 60, img: "LEVI_S__Men_Tapered_Fit_Mid_Rise_Blue_Jeans_2.jpg" },
{ id: 18, name: "Canon EOS 200D DSLR Camera", price: 750, img: "Canon_EOS_R50_Mirrorless_Camera_Body_with_RF___S_18___45_mm_f_4_5___6_3_IS_STM___Black__4.jpg" },
{ id: 19, name: "HP Pavilion Gaming Laptop", price: 1200, img: "HP_Pavilion_x360_Intel_Core_i5_12th_Gen_1235U____16_GB_512_GB_SSD_Windows_11_Home__14_ek0078TU_Thin_and_Light_Laptop___14_Inch__Space_Blue__1_41_Kg__With_MS_Office__1.jpg" },
{ id: 20, name: "JBL Charge Bluetooth Speaker", price: 150, img: "JBL_Charge_5_with_20Hr_Playtime_IP67_Rating_7500_mAh_Powerbank__Portable_40_W_Bluetooth_Speaker___Squad__Mono_Channel__3.jpg"},
{ id: 23, name: "Dove Shampoo 1L", price: 12, img: "DOVE_Instense_Repair_Shampoo___Conditioner___825_ml__1.jpg" },
];


const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const toggleTheme = document.getElementById("toggleTheme");

function renderProducts(filter = "") {
  productList.innerHTML = "";
  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (sortSelect.value === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === "nameAZ") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortSelect.value === "nameZA") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Search & Sort
searchInput.addEventListener("input", e => renderProducts(e.target.value));
sortSelect.addEventListener("change", () => renderProducts(searchInput.value));

// Dark Mode
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent =
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Cart Sidebar Toggle
const cartEl = document.getElementById("cart");
const overlay = document.getElementById("overlay");
const toggleCartBtn = document.getElementById("toggleCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");

toggleCartBtn.addEventListener("click", () => {
  cartEl.classList.add("open");
  overlay.classList.add("active");
});

closeCartBtn.addEventListener("click", () => {
  cartEl.classList.remove("open");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  cartEl.classList.remove("open");
  overlay.classList.remove("active");
});

// Initial render
renderProducts();
// Hero Banner Carousel
let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto slide every 4s
setInterval(nextSlide, 4000);

// Buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Show first slide
showSlide(slideIndex);

