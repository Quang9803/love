const messages = [
    "Anh yêu em nhiều",
    "Luôn vui vẻ nhé ",
    "Love you so much",
    "❤️",
    "Luôn bên anh nhé",
    "Moah moah moah"
  ];
  
  const images = ["images/1.JPG", "images/2.JPG", "images/3.JPG", "images/4.JPG", "images/5.JPG"];
  
  const container = document.getElementById("container");
  const audio = document.getElementById("backgroundMusic"); // giả sử <audio id="backgroundMusic" src="music.mp3" preload="auto"></audio>
  
  // Hàm bật nhạc khi người dùng tương tác lần đầu
  function playAudio() {
    audio.play().catch(err => console.log("Lỗi phát nhạc:", err));
    // Chỉ bật 1 lần nên remove event listener
    document.body.removeEventListener("click", playAudio);
    document.body.removeEventListener("touchstart", playAudio);
  }
  
  document.body.addEventListener("click", playAudio);
  document.body.addEventListener("touchstart", playAudio);
  
  function createFallingText() {
    const text = document.createElement("div");
    text.classList.add("falling-text");
    text.innerText = messages[Math.floor(Math.random() * messages.length)];
    text.style.left = Math.random() * window.innerWidth + "px";
  
    const duration = 12000 + Math.random() * 4000; // 12-16 giây
    text.style.animationName = "fall-text";
    text.style.animationDuration = duration + "ms";
  
    container.appendChild(text);
  
    text.addEventListener("animationend", () => {
      explodeHeart(text.offsetLeft, window.innerHeight - 50);
      container.removeChild(text);
    });
  }
  
  function createFallingImage() {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add("falling-img");
    img.style.left = Math.random() * window.innerWidth + "px";
  
    const duration = 12000 + Math.random() * 4000; // 12-16 giây
    img.style.animationName = "fall-rotate";
    img.style.animationDuration = duration + "ms";
  
    container.appendChild(img);
  
    img.addEventListener("animationend", () => {
      explodeHeart(img.offsetLeft, window.innerHeight - 50);
      container.removeChild(img);
    });
  }
  
  function explodeHeart(x, y) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    container.appendChild(heart);
  
    setTimeout(() => {
      container.removeChild(heart);
    }, 1000);
  }
  
  setInterval(() => {
    createFallingText();
  }, 400); // chữ rơi mỗi 400ms
  
  setInterval(() => {
    createFallingImage();
  }, 1500); // ảnh rơi mỗi 1.5s
  