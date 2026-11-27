const FIRST_PURCHASE_KEY = 'shimaejoy_first_purchase_used';
const FIRST_PURCHASE_DISCOUNT_RATE = 0.15;

const PRODUCTS = [
  {
    id: 'produk-1',
    number: 1,
    name: 'Felt Charm Keychain',
    category: 'Keychain',
    price: 16000,
    image: 'assets/images/produk-1.jpg',
    isPhoto: true,
    alt: 'Produk 1 Felt Charm Keychain karakter Snoopy, Miffy, dan apel',
    description: 'Gantungan kunci flanel jahit tangan bentuk bintang, apel, dan semanggi dengan karakter Snoopy & Miffy.',
    variants: ['Snoopy Bintang Biru', 'Snoopy Apel Merah', 'Miffy Semanggi Hijau', 'Apel Putih Merah', 'Apel Putih Hijau'],
    keywords: 'produk 1 felt flanel charm keychain ganci gantungan kunci snoopy miffy bintang apel semanggi pita'
  },
  {
    id: 'produk-2',
    number: 2,
    name: 'Jepit Rambut Kancing Lucu',
    category: 'Hair Clip',
    price: 9000,
    image: 'assets/images/produk-2.jpg',
    isPhoto: true,
    alt: 'Produk 2 Jepit Rambut Kancing dan apel warna-warni',
    description: 'Jepit rambut handmade berhias kancing pastel, motif kotak gingham, bulan, kucing, dan buah apel.',
    variants: ['Biru Pastel', 'Kucing Pink', 'Apel Merah Kotak', 'Hati Merah Gingham', 'Kuning Apel', 'Hijau Apel'],
    keywords: 'produk 2 jepit rambut hair clip kancing button apel kucing bulan gingham warna warni'
  },
  {
    id: 'produk-3',
    number: 3,
    name: 'Felt Card Holder Tomat & Bintang',
    category: 'Card Holder',
    price: 28000,
    image: 'assets/images/produk-3.jpg',
    isPhoto: true,
    alt: 'Produk 3 Felt Card Holder motif tomat dan bintang',
    description: 'Tempat kartu / photocard bahan flanel sulam tangan dengan detail tomat ceria, bintang, dan kancing.',
    variants: ['Merah Bintang Hijau', 'Biru Tomat Ceria'],
    keywords: 'produk 3 card holder photocard tempat kartu flanel felt tomat tomato bintang kancing merah biru'
  },
  {
    id: 'produk-4',
    number: 4,
    name: 'Crochet Cup Holder Bunga',
    category: 'Rajut',
    price: 22000,
    image: 'assets/images/produk-4.jpg',
    isPhoto: true,
    alt: 'Produk 4 Crochet Cup Holder rajut dengan charm bunga',
    description: 'Tas gelas minuman rajut tangan (cup sleeve) praktis dengan hiasan bunga matahari, daisy, dan mawar.',
    variants: ['Coklat Bunga Matahari', 'Hijau Bunga Daisy', 'Hitam Bunga Oranye'],
    keywords: 'produk 4 crochet rajut cup holder tas gelas minuman bunga matahari coklat hijau hitam'
  },
  {
    id: 'produk-5',
    number: 5,
    name: 'Crochet Drawstring Pouch',
    category: 'Rajut',
    price: 35000,
    image: 'assets/images/produk-5.jpg',
    isPhoto: true,
    alt: 'Produk 5 Crochet Drawstring Pouch serut rajut',
    description: 'Pouch serut rajut lembut motif semangka, semanggi keberuntungan, kucing hitam, dan bunga tulip.',
    variants: ['Semangka Merah', 'Kucing Hitam Lilac', 'Semanggi Pink', 'Tulip Cream'],
    keywords: 'produk 5 crochet rajut pouch serut drawstring dompet mini semangka kucing tulip semanggi'
  },
  {
    id: 'produk-6',
    number: 6,
    name: 'Clay Charm Strap Bintang & Apel',
    category: 'Strap & Charm',
    price: 33000,
    image: 'assets/images/produk-6.jpg',
    isPhoto: true,
    alt: 'Produk 6 Clay Charm Strap bentuk bintang kuning dan apel merah',
    description: 'Gantungan clay handmade lukis tangan motif bintang berpita dan apel dengan tag keberuntungan.',
    variants: ['Bintang Kuning', 'Apel Merah'],
    keywords: 'produk 6 clay charm strap gantungan tas hp bintang apel merah kuning tag handmade'
  },
  {
    id: 'produk-7',
    number: 7,
    name: 'Felt Photostrip Frame',
    category: 'Photo Frame',
    price: 5000,
    image: 'assets/images/produk-7.jpg',
    isPhoto: true,
    alt: 'Produk 7 Felt Photostrip Frame BFFS',
    description: 'Bingkai photostrip flanel hias pita gelombang, kancing bunga, dan renda emas untuk foto bersama sahabat.',
    variants: ['Biru Pink BFFS', 'Kuning Hijau Daisy'],
    keywords: 'produk 7 felt flanel photostrip frame bingkai foto bff sahabat biru kuning pita bunga'
  },
  {
    id: 'produk-8',
    number: 8,
    name: 'Phone Strap Kancing & Kupu',
    category: 'Strap & Charm',
    price: 18000,
    image: 'assets/images/produk-8.jpg',
    isPhoto: true,
    alt: 'Produk 8 Phone Strap manik kancing dan kupu-kupu',
    description: 'Gantungan HP manik-manik dengan kancing lucu, charm kupu-kupu, hati, dan buah apel warna pastel.',
    variants: ['Biru Kupu-kupu', 'Pink Peach Hati', 'Merah Apel', 'Ungu Pastel'],
    keywords: 'produk 8 phone strap gantungan hp manik kancing kupu butterfly hati apel pastel'
  },
  {
    id: 'produk-9',
    number: 9,
    name: 'Gelang Tali Kepang Bintang',
    category: 'Gelang',
    price: 14000,
    image: 'assets/images/produk-9.jpg',
    isPhoto: true,
    alt: 'Produk 9 Gelang Tali Kepang dengan manik bintang dan kerang',
    description: 'Gelang tali kepang etnik manis dengan manik batu alam, kerang mutiara, dan bandul bintang kaca.',
    variants: ['Bintang Biru Muda', 'Bintang Pink Kerang', 'Bintang Hijau Batu', 'Bintang Ungu Pastel'],
    keywords: 'produk 9 gelang bracelet tali kepang manik bintang star kerang alam'
  },
  {
    id: 'produk-10',
    number: 10,
    name: 'Gelang Manik Pastel Star Bear',
    category: 'Gelang',
    price: 11000,
    image: 'assets/images/produk-10.jpg',
    isPhoto: true,
    alt: 'Produk 10 Gelang Manik Pastel dengan charm bintang dan gummy bear',
    description: 'Gelang manik warna-warni pastel dengan charm bintang imut dan gummy bear transparan yang menggemaskan.',
    variants: ['Pastel Bear (16 cm)', 'Pastel Bear (18 cm)'],
    keywords: 'produk 10 gelang bracelet manik beads pastel rainbow bintang star gummy bear'
  }
];

const CUSTOMER_CARE_INFO = {
  'how-to-order': 'Cara Order: Klik VIEW PRODUCT, pilih produk & variannya, lalu tekan + Keranjang dan Pesan Sekarang.',
  payment: 'Pembayaran: Mendukung transfer bank, QRIS, dan e-wallet (GoPay, OVO, DANA).',
  shipping: 'Pengiriman: Dikirim dari workshop ShiMaeJOY setiap Senin–Sabtu dengan kemasan aman.',
  faq: 'FAQ: Semua produk handmade dibuat terbatas. Diskon 15% Special Launch berlaku untuk pembelian pertama!'
};

const state = {
  query: '',
  cart: [],
  highlightedId: null,
  activeVariantProductId: null,
  selectedVariant: '',
  variantQty: 1
};

const els = {
  openSearchBtn: document.getElementById('openSearchBtn'),
  closeSearchBtn: document.getElementById('closeSearchBtn'),
  searchOverlay: document.getElementById('searchOverlay'),
  modalSearchForm: document.getElementById('modalSearchForm'),
  modalSearchInput: document.getElementById('modalSearchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  searchResultMeta: document.getElementById('searchResultMeta'),
  searchResultsList: document.getElementById('searchResultsList'),

  openLaunchBtn: document.getElementById('openLaunchBtn'),
  footerShopLink: document.getElementById('footerShopLink'),
  launchOverlay: document.getElementById('launchOverlay'),
  closeLaunchBtn: document.getElementById('closeLaunchBtn'),
  launchScrollBody: document.getElementById('launchScrollBody'),

  catalogSearchForm: document.getElementById('catalogSearchForm'),
  catalogSearchInput: document.getElementById('catalogSearchInput'),
  filterChips: document.getElementById('filterChips'),
  promoBannerNote: document.getElementById('promoBannerNote'),
  catalogStatus: document.getElementById('catalogStatus'),
  productGrid: document.getElementById('productGrid'),

  variantOverlay: document.getElementById('variantOverlay'),
  closeVariantBtn: document.getElementById('closeVariantBtn'),
  variantImg: document.getElementById('variantImg'),
  variantCategory: document.getElementById('variantCategory'),
  variantProductName: document.getElementById('variantProductName'),
  variantPriceBox: document.getElementById('variantPriceBox'),
  variantOptions: document.getElementById('variantOptions'),
  variantQtyMinus: document.getElementById('variantQtyMinus'),
  variantQtyValue: document.getElementById('variantQtyValue'),
  variantQtyPlus: document.getElementById('variantQtyPlus'),
  confirmAddVariantBtn: document.getElementById('confirmAddVariantBtn'),
  orderNowVariantBtn: document.getElementById('orderNowVariantBtn'),

  splitTomatoStage: document.getElementById('splitTomatoStage'),

  cartBtn: document.getElementById('cartBtn'),
  cartBadge: document.getElementById('cartBadge'),
  cartOverlay: document.getElementById('cartOverlay'),
  closeCartBtn: document.getElementById('closeCartBtn'),
  cartItems: document.getElementById('cartItems'),
  cartFooter: document.getElementById('cartFooter'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartDiscountRow: document.getElementById('cartDiscountRow'),
  cartDiscount: document.getElementById('cartDiscount'),
  cartBonusNote: document.getElementById('cartBonusNote'),
  cartTotal: document.getElementById('cartTotal'),
  checkoutBtn: document.getElementById('checkoutBtn'),

  accountBtn: document.getElementById('accountBtn'),
  accountOverlay: document.getElementById('accountOverlay'),
  closeAccountBtn: document.getElementById('closeAccountBtn'),
  browseFromAccountBtn: document.getElementById('browseFromAccountBtn'),

  toast: document.getElementById('toast')
};

let toastTimer = null;

function isFirstPurchase() {
  try {
    return localStorage.getItem(FIRST_PURCHASE_KEY) !== 'true';
  } catch {
    return true;
  }
}

function getEffectivePrice(basePrice) {
  return isFirstPurchase()
    ? Math.round(basePrice * (1 - FIRST_PURCHASE_DISCOUNT_RATE))
    : basePrice;
}

function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    els.toast.hidden = true;
  }, 3200);
}

function filterProducts(rawQuery) {
  const normalized = rawQuery.trim().toLowerCase();
  if (!normalized) {
    return PRODUCTS;
  }

  const terms = normalized.split(/\s+/);
  return PRODUCTS.filter((item) => {
    const haystack = `${item.name} ${item.category} ${item.description} ${item.variants.join(' ')} ${item.keywords}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

function setSearchQuery(nextQuery) {
  state.query = nextQuery;
  els.modalSearchInput.value = nextQuery;
  els.catalogSearchInput.value = nextQuery;
  els.clearSearchBtn.hidden = nextQuery.trim() === '';
  updateActiveChip();
  renderCatalog();
  renderModalResults();
}

function updateActiveChip() {
  const normalized = state.query.trim().toLowerCase();
  els.filterChips.querySelectorAll('.chip').forEach((chip) => {
    const chipQuery = (chip.dataset.query || '').toLowerCase();
    chip.classList.toggle('is-active', chipQuery === normalized);
  });
}

function buildPriceMarkup(basePrice) {
  const firstPurchase = isFirstPurchase();
  const finalPrice = getEffectivePrice(basePrice);
  return `
    <div class="price-stack">
      ${firstPurchase ? `<span class="price-old">${formatRupiah(basePrice)}</span>` : ''}
      <div class="product-price-row">
        <span class="product-price">${formatRupiah(finalPrice)}</span>
        ${firstPurchase ? '<span class="discount-pill">-15%</span>' : ''}
      </div>
    </div>
  `;
}

function renderCatalog() {
  const results = filterProducts(state.query);
  const trimmed = state.query.trim();
  const firstPurchase = isFirstPurchase();

  els.promoBannerNote.textContent = firstPurchase
    ? 'Promo Pembelian Pertama Aktif: Semua harga otomatis mendapat diskon 15% + Gratis Kartu Ucapan Custom!'
    : 'Harga normal berlaku (promo diskon 15% pembelian pertama sudah digunakan).';

  if (trimmed) {
    els.catalogStatus.textContent = `Menampilkan ${results.length} dari ${PRODUCTS.length} produk untuk "${trimmed}".`;
  } else {
    els.catalogStatus.textContent = `Menampilkan semua ${PRODUCTS.length} produk handmade ShiMaeJOY.`;
  }

  els.productGrid.innerHTML = '';

  if (results.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <p>Produk dengan kata kunci "<strong></strong>" tidak ditemukan.</p>
      <button type="button" class="primary-pill-btn">Tampilkan Semua Produk</button>
    `;
    empty.querySelector('strong').textContent = trimmed;
    empty.querySelector('button').addEventListener('click', () => setSearchQuery(''));
    els.productGrid.appendChild(empty);
    return;
  }

  results.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.id = `card-${product.id}`;
    if (state.highlightedId === product.id) {
      card.classList.add('is-highlighted');
    }

    card.innerHTML = `
      <div class="product-thumb ${product.isPhoto ? 'is-photo' : ''}">
        <img src="${product.image}" alt="${product.alt}">
      </div>
      <p class="product-category"></p>
      <h4></h4>
      <p class="product-desc"></p>
      <span class="variant-count-badge">${product.variants.length} pilihan varian</span>
      <div class="product-card-footer">
        ${buildPriceMarkup(product.price)}
        <button type="button" class="add-cart-btn">Pilih &amp; Pesan</button>
      </div>
    `;

    card.querySelector('.product-category').textContent = `Produk ${product.number} • ${product.category}`;
    card.querySelector('h4').textContent = product.name;
    card.querySelector('.product-desc').textContent = product.description;
    card.querySelector('.add-cart-btn').addEventListener('click', () => openVariantPicker(product.id));

    els.productGrid.appendChild(card);
  });
}

function renderModalResults() {
  const results = filterProducts(state.query);
  const trimmed = state.query.trim();
  const firstPurchase = isFirstPurchase();

  els.searchResultMeta.textContent = trimmed
    ? `Ditemukan ${results.length} produk untuk "${trimmed}"`
    : `Semua koleksi (${results.length} produk) — ketik untuk menyaring`;

  els.searchResultsList.innerHTML = '';

  if (results.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <p>Tidak ada produk yang cocok dengan "<strong></strong>".</p>
      <button type="button" class="link-pill-btn">Reset Pencarian</button>
    `;
    empty.querySelector('strong').textContent = trimmed;
    empty.querySelector('button').addEventListener('click', () => {
      setSearchQuery('');
      els.modalSearchInput.focus();
    });
    els.searchResultsList.appendChild(empty);
    return;
  }

  results.forEach((product) => {
    const finalPrice = getEffectivePrice(product.price);
    const priceLabel = firstPurchase
      ? `${formatRupiah(finalPrice)} (diskon 15% dari ${formatRupiah(product.price)})`
      : formatRupiah(product.price);

    const row = document.createElement('div');
    row.className = 'search-result-item';
    row.innerHTML = `
      <img src="${product.image}" alt="${product.alt}">
      <div>
        <h3></h3>
        <p></p>
      </div>
      <div class="search-result-actions">
        <button type="button" class="link-pill-btn">Lihat</button>
        <button type="button" class="add-cart-btn">Pilih Varian</button>
      </div>
    `;

    row.querySelector('h3').textContent = product.name;
    row.querySelector('p').textContent = `${product.category} • ${priceLabel}`;

    row.querySelector('.link-pill-btn').addEventListener('click', () => {
      closeModal(els.searchOverlay);
      openLaunchWithProduct(product.id);
    });

    row.querySelector('.add-cart-btn').addEventListener('click', () => {
      openVariantPicker(product.id);
    });

    els.searchResultsList.appendChild(row);
  });
}

function openVariantPicker(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  state.activeVariantProductId = product.id;
  state.selectedVariant = product.variants[0];
  state.variantQty = 1;

  els.variantImg.src = product.image;
  els.variantImg.alt = product.alt;
  els.variantCategory.textContent = `Produk ${product.number} • ${product.category}`;
  els.variantProductName.textContent = product.name;
  els.variantPriceBox.innerHTML = buildPriceMarkup(product.price);
  els.variantQtyValue.textContent = '1';

  renderVariantChips(product.variants);
  openModal(els.variantOverlay, els.closeVariantBtn);
}

function renderVariantChips(variants) {
  els.variantOptions.innerHTML = '';
  variants.forEach((variantName) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'variant-chip';
    chip.setAttribute('role', 'radio');
    const isSelected = state.selectedVariant === variantName;
    chip.setAttribute('aria-checked', String(isSelected));
    if (isSelected) chip.classList.add('is-selected');
    chip.textContent = variantName;

    chip.addEventListener('click', () => {
      state.selectedVariant = variantName;
      renderVariantChips(variants);
    });

    els.variantOptions.appendChild(chip);
  });
}

function openLaunchModal(scrollToCatalog = false) {
  openModal(els.launchOverlay, els.closeLaunchBtn);
  els.launchScrollBody.scrollTop = 0;
  if (scrollToCatalog) {
    setTimeout(() => {
      document.getElementById('catalogTitle').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }
}

function openLaunchWithProduct(productId) {
  state.highlightedId = productId;
  renderCatalog();
  openModal(els.launchOverlay, els.closeLaunchBtn);
  setTimeout(() => {
    const target = document.getElementById(`card-${productId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      state.highlightedId = null;
      const current = document.getElementById(`card-${productId}`);
      if (current) current.classList.remove('is-highlighted');
    }, 2400);
  }, 80);
}

function addToCart(productId, variantName, qty = 1) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const chosenVariant = variantName || product.variants[0];
  const cartKey = `${productId}__${chosenVariant}`;
  const existing = state.cart.find((item) => item.key === cartKey);

  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      key: cartKey,
      id: productId,
      variant: chosenVariant,
      qty
    });
  }

  renderCart();
  showToast(`${product.name} (${chosenVariant}) ditambahkan ke keranjang.`);
}

function updateCartQty(cartKey, delta) {
  const item = state.cart.find((entry) => entry.key === cartKey);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((entry) => entry.key !== cartKey);
  }
  renderCart();
}

function renderCart() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  els.cartBadge.textContent = String(totalCount);
  els.cartBadge.hidden = totalCount === 0;

  els.cartItems.innerHTML = '';

  if (state.cart.length === 0) {
    els.cartFooter.hidden = true;
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `<p>Keranjang belanja masih kosong.</p>`;
    els.cartItems.appendChild(empty);
    return;
  }

  const firstPurchase = isFirstPurchase();
  let subtotalAmount = 0;

  state.cart.forEach((entry) => {
    const product = PRODUCTS.find((p) => p.id === entry.id);
    if (!product) return;

    const lineSubtotal = product.price * entry.qty;
    subtotalAmount += lineSubtotal;

    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <img src="${product.image}" alt="${product.alt}">
      <div>
        <h4></h4>
        <p class="cart-variant"></p>
        <span></span>
      </div>
      <div class="qty-controls">
        <button type="button" aria-label="Kurangi jumlah">-</button>
        <strong>${entry.qty}</strong>
        <button type="button" aria-label="Tambah jumlah">+</button>
      </div>
    `;

    row.querySelector('h4').textContent = product.name;
    row.querySelector('.cart-variant').textContent = `Varian: ${entry.variant}`;
    row.querySelector('span').textContent = formatRupiah(lineSubtotal);

    const [minusBtn, plusBtn] = row.querySelectorAll('.qty-controls button');
    minusBtn.addEventListener('click', () => updateCartQty(entry.key, -1));
    plusBtn.addEventListener('click', () => updateCartQty(entry.key, 1));

    els.cartItems.appendChild(row);
  });

  const discountAmount = firstPurchase
    ? Math.round(subtotalAmount * FIRST_PURCHASE_DISCOUNT_RATE)
    : 0;
  const totalAmount = subtotalAmount - discountAmount;

  els.cartSubtotal.textContent = formatRupiah(subtotalAmount);
  els.cartDiscountRow.hidden = !firstPurchase;
  els.cartDiscount.textContent = '-' + formatRupiah(discountAmount);
  els.cartBonusNote.hidden = !firstPurchase;
  els.cartTotal.textContent = formatRupiah(totalAmount);
  els.cartFooter.hidden = false;
}

function openModal(overlay, focusEl) {
  overlay.hidden = false;
  if (overlay === els.searchOverlay) {
    els.openSearchBtn.setAttribute('aria-expanded', 'true');
    renderModalResults();
  }
  if (focusEl) {
    setTimeout(() => focusEl.focus(), 20);
  }
}

function closeModal(overlay) {
  overlay.hidden = true;
  if (overlay === els.searchOverlay) {
    els.openSearchBtn.setAttribute('aria-expanded', 'false');
  }
}

function initSplitTomatoAnimation() {
  const stage = els.splitTomatoStage;
  if (!stage) return;

  stage.addEventListener('click', () => {
    stage.classList.toggle('is-open');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              stage.classList.add('is-open');
            }, 260);
          } else {
            stage.classList.remove('is-open');
          }
        });
      },
      { threshold: 0.45 }
    );
    observer.observe(stage);
  } else {
    stage.classList.add('is-open');
  }
}

// Event Listeners
els.openLaunchBtn.addEventListener('click', () => openLaunchModal(false));
els.footerShopLink.addEventListener('click', (event) => {
  event.preventDefault();
  openLaunchModal(true);
});
els.closeLaunchBtn.addEventListener('click', () => closeModal(els.launchOverlay));

els.closeVariantBtn.addEventListener('click', () => closeModal(els.variantOverlay));
els.variantQtyMinus.addEventListener('click', () => {
  if (state.variantQty > 1) {
    state.variantQty -= 1;
    els.variantQtyValue.textContent = String(state.variantQty);
  }
});
els.variantQtyPlus.addEventListener('click', () => {
  state.variantQty += 1;
  els.variantQtyValue.textContent = String(state.variantQty);
});

els.confirmAddVariantBtn.addEventListener('click', () => {
  addToCart(state.activeVariantProductId, state.selectedVariant, state.variantQty);
  closeModal(els.variantOverlay);
});

els.orderNowVariantBtn.addEventListener('click', () => {
  addToCart(state.activeVariantProductId, state.selectedVariant, state.variantQty);
  closeModal(els.variantOverlay);
  closeModal(els.launchOverlay);
  closeModal(els.searchOverlay);
  renderCart();
  openModal(els.cartOverlay, els.closeCartBtn);
});

els.openSearchBtn.addEventListener('click', () => {
  openModal(els.searchOverlay, els.modalSearchInput);
});

els.closeSearchBtn.addEventListener('click', () => closeModal(els.searchOverlay));

els.modalSearchInput.addEventListener('input', (event) => {
  setSearchQuery(event.target.value);
});

els.modalSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closeModal(els.searchOverlay);
  openLaunchModal(true);
});

els.clearSearchBtn.addEventListener('click', () => {
  setSearchQuery('');
  els.modalSearchInput.focus();
});

document.querySelectorAll('[data-modal-query]').forEach((btn) => {
  btn.addEventListener('click', () => {
    setSearchQuery(btn.dataset.modalQuery || '');
    els.modalSearchInput.focus();
  });
});

els.catalogSearchInput.addEventListener('input', (event) => {
  setSearchQuery(event.target.value);
});

els.catalogSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  setSearchQuery(els.catalogSearchInput.value);
});

els.filterChips.addEventListener('click', (event) => {
  const chip = event.target.closest('.chip');
  if (!chip) return;
  setSearchQuery(chip.dataset.query || '');
});

els.cartBtn.addEventListener('click', () => {
  renderCart();
  openModal(els.cartOverlay, els.closeCartBtn);
});

els.closeCartBtn.addEventListener('click', () => closeModal(els.cartOverlay));

els.checkoutBtn.addEventListener('click', () => {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const wasFirstPurchase = isFirstPurchase();
  const totalText = els.cartTotal.textContent;

  state.cart = [];
  if (wasFirstPurchase) {
    try {
      localStorage.setItem(FIRST_PURCHASE_KEY, 'true');
    } catch {
      // Abaikan jika storage dibatasi
    }
  }

  renderCatalog();
  renderModalResults();
  renderCart();
  closeModal(els.cartOverlay);

  if (wasFirstPurchase) {
    showToast(`Pesanan ${totalCount} produk (${totalText}) berhasil! Diskon 15% + Gratis Kartu Ucapan Custom diterapkan.`);
  } else {
    showToast(`Pesanan ${totalCount} produk (${totalText}) berhasil dibuat! Terima kasih telah berbelanja di ShiMaeJOY.`);
  }
});

els.accountBtn.addEventListener('click', () => openModal(els.accountOverlay, els.closeAccountBtn));
els.closeAccountBtn.addEventListener('click', () => closeModal(els.accountOverlay));
els.browseFromAccountBtn.addEventListener('click', () => {
  closeModal(els.accountOverlay);
  openLaunchModal(false);
});

document.querySelectorAll('.footer-info-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const info = CUSTOMER_CARE_INFO[btn.dataset.care];
    if (info) showToast(info);
  });
});

document.querySelectorAll('.social-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showToast(`Temukan kami di ${link.dataset.social}!`);
  });
});

[els.launchOverlay, els.searchOverlay, els.variantOverlay, els.cartOverlay, els.accountOverlay].forEach((overlay) => {
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal(overlay);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    [els.variantOverlay, els.cartOverlay, els.accountOverlay, els.searchOverlay, els.launchOverlay].forEach((overlay) => {
      if (!overlay.hidden) closeModal(overlay);
    });
  }
});

// Init
renderCatalog();
renderCart();
initSplitTomatoAnimation();
