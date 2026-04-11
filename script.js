document.addEventListener('DOMContentLoaded', function () {

  /* =========================
     1. DATA PRODUK
  ========================= */
  const products = [
    {
      id: 1,
      name: "Sate Madura",
      price: 2000,
      image: "produk1.jpg",
      variants: ["Sate Ayam", "Sate hati", "Sate usus", "Sate komoh"]
    },
    {
      id: 2,
      name: "Corndog",
      price: 2000,
      image: "produk2.jpg",
      variants: [
        "Original",
        "Kecap+saus+mayonaise sedikit",
        "Kecap+saus+mayonaise sedang",
        "Kecap+saus+mayonaise Ekstra"
      ]
    },
    {
      id: 3,
      name: "Martabak Mini",
      price: 15000,
      image: "produk3.jpg",
      variants: ["Coklat", "Keju", "Mix"]
    },
    {
      id: 4,
      name: "Pisang goreng",
      price: 2000,
      image: "produk4.jpg",
      variants: ["Chocolate", "Matcha", "Cheese", "Mix"]
    }
  ];

  /* =========================
     2. AMBIL ELEMEN DOM
  ========================= */
  const productGrid = document.getElementById('productGrid');
  const orderBtn = document.getElementById('orderBtn');
  const menuBtn = document.getElementById('menuBtn');

  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalProductName = document.getElementById('modalProductName');
  const modalProductImage = document.getElementById('modalProductImage');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalVariant = document.getElementById('modalVariant');
  const modalQuantity = document.getElementById('modalQuantity');
  const modalOrder = document.getElementById('modalOrder');

  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');

  /* =========================
     3. STATE
  ========================= */
  let selectedProduct = null;

  /* =========================
     4. FUNCTIONS
  ========================= */

  function renderProducts() {
    productGrid.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-card-body">
          <h3>${product.name}</h3>
          <p>Rp ${product.price.toLocaleString('id-ID')}</p>
          <button>Pesan Sekarang</button>
        </div>
      `;

      card.querySelector('button').addEventListener('click', () => {
        openModal(product);
      });

      productGrid.appendChild(card);
    });
  }

  function openModal(product) {
    selectedProduct = product;

    modalProductName.textContent = product.name;
    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;

    modalVariant.innerHTML = '';
    product.variants.forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant;
      modalVariant.appendChild(option);
    });

    modalQuantity.value = 1;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  /* =========================
     5. EVENT LISTENERS
  ========================= */

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  if (orderBtn) {
    orderBtn.addEventListener('click', () => openModal(products[0]));
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.getElementById('products')
        .scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (modalOrder) {
    modalOrder.addEventListener('click', () => {
      if (!selectedProduct) return;

      const qty = parseInt(modalQuantity.value) || 1;
      const variant = modalVariant.value;
      const total = selectedProduct.price * qty;
      const phone = '6285705431638';

      const message =
        `Halo Admin Eat Kita!\n\n` +
        `Saya ingin memesan:\n` +
        `- ${selectedProduct.name}\n` +
        `• Varian: ${variant}\n` +
        `• Jumlah: ${qty} pcs\n` +
        `• Total: Rp ${total.toLocaleString('id-ID')}\n\n` +
        `Terima kasih!`;

      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        '_blank'
      );

      closeModal();
    });
  }

  // Burger menu
  burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  /* =========================
     6. INIT
  ========================= */
  renderProducts();
  console.log('✅ Eat JS ready');

});