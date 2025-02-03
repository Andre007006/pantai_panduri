function toggleMenu() {
  let menu = document.querySelector(".menu");
  let hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Menambahkan efek perubahan latar navbar saat scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


document.addEventListener('mousemove', (event) => {
  const cursorTrail = document.querySelector('.cursor-trail');

  // Update posisi kursor
  cursorTrail.style.left = `${event.pageX}px`;
  cursorTrail.style.top = `${event.pageY}px`;

  // Duplikasi jejak
  const clone = cursorTrail.cloneNode();
  document.body.appendChild(clone);

  // Hilangkan jejak setelah beberapa waktu
  setTimeout(() => {
    clone.remove();
  }, 800); // Durasi animasi fade sesuai CSS (0.8s)
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hero", {
    y: "-10%", // Tarik hero ke atas
    opacity: 0.5, // Buat efek transparan saat ditarik
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1, // Efek mengikuti scroll
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#about .about-flex", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%", // Animasi dimulai saat 80% layar terlihat
      toggleActions: "play none none none"
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function checkSections() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkSections);
  checkSections(); // Cek saat halaman pertama kali dimuat
});

document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelectorAll(".service");
  const galleryItems = document.querySelectorAll(".gallery-item");

  function checkServices() {
    services.forEach((service, index) => {
      if (service.getBoundingClientRect().top < window.innerHeight - 50) {
        setTimeout(() => {
          service.classList.add("show");
        }, index * 50);
      }
    });
  }

  function checkGallery() {
    let sortedItems = [...galleryItems].sort((a, b) => a.offsetTop - b.offsetTop); // Urutkan dari atas ke bawah

    sortedItems.forEach((item, index) => {
      if (item.getBoundingClientRect().top < window.innerHeight - 50) {
        setTimeout(() => {
          item.classList.add("show");
        }, index * 50); // Muncul berurutan berdasarkan posisi
      }
    });
  }

  function checkSections() {
    checkServices();
    checkGallery();
  }

  window.addEventListener("scroll", checkSections);
  checkSections();
});


// Event untuk maps
document.getElementById("visitUs").addEventListener("click", function () {
  window.open("https://www.google.com/maps/place/Pantai+PANDURI", "_blank");
});

// Menyembunyikan button saat berada di Home
document.addEventListener("DOMContentLoaded", function () {
  let floatingButtons = document.querySelector(".floating-buttons");
  let header = document.querySelector("header");
  let home = document.getElementById("home");

  function checkVisibility() {
    let headerHeight = header.offsetHeight;
    let homeHeight = home.offsetHeight;
    let scrollY = window.scrollY;

    if (scrollY < (headerHeight + homeHeight)) {
      floatingButtons.style.display = "none"; // Sembunyikan tombol
    } else {
      floatingButtons.style.display = "flex"; // Tampilkan kembali
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Jalankan saat halaman dimuat
});

// Event untuk mengirim pesan
document.querySelector(".contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form reload halaman

  // Ambil nilai dari input
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let package = document.getElementById("package").value;
  let date = document.getElementById("date").value;
  let visitors = document.getElementById("visitors").value;
  let message = document.getElementById("message").value;

  // Nomor WhatsApp tujuan
  let phoneNumber = "6283861995160";

  // format pesan
  let whatsappMessage = `Halo, saya ingin melakukan reservasi:\n\n` +
    `👤 *Nama*: ${name}\n` +
    `📍 *Alamat*: ${email}\n` +
    `📞 *No HP*: ${phone}\n` +
    `🎟️ *Paket*: ${package}\n` +
    `📅 *Tanggal*: ${date}\n` +
    `👥 *Jumlah Pengunjung*: ${visitors}\n` +
    `💬 *Pesan Tambahan*: ${message}\n\n` +
    `Mohon konfirmasinya. Terima kasih!`;

  // Encode agar URL tetap aman
  let encodedMessage = encodeURIComponent(whatsappMessage);

  // Redirect ke WhatsApp
  location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
});
