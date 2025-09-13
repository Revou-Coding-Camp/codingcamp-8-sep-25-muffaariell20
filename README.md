# codingcamp-8-sep-25-muffaariell20
codingcamp-8-sep-25-muffaariell20 created by GitHub Classroom
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Company Profile</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Nama</a></li>
        <li><a href="#profile">Our Profile</a></li>
        <li><a href="#contact">Message Us</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home" class="banner">
  <div class="banner-content">
    <img src="me.jpg" alt="Welcome Image" class="banner-image" />
    <h1>Hi, saya ufa</h1>
  </div>
</section>


    <section id="profile" class="profile">
      <h2>Our Profile</h2>
      <div class="info">
      <p> Mahasiswa Teknik Informatika</p>
      <p>Saya adalah seorang web developer yang berdedikasi dengan passion dalam menciptakan pengalaman digital yang menarik dan fungsional. Saya menggabungkan kemampuan teknis dan kreativitas untuk membangun website yang responsif dan user-friendly.</p>
      <div class="info">
        <div class="about">
          <h3>About the Company</h3>
          <p>Kami adalah perusahaan teknologi yang fokus pada pengembangan perangkat lunak modern dan efisien.</p>
        </div>
        <div class="vision">
          <h3>Vision & Mission</h3>
          <p>Visi kami adalah menjadi pemimpin inovasi teknologi di Asia Tenggara. Misi kami adalah memberikan solusi digital yang berdampak dan berkelanjutan.</p>
        </div>
      </div>
    </section>
<section id="profile" class="profile">
  <h2>Our Profile</h2>

  <div class="company-profile">
    <p><strong>Company Name:</strong> PT. Solusi Digital Nusantara</p>
    <p><strong>Founded:</strong> 2020</p>
    <p><strong>Location:</strong> Jakarta, Indonesia</p>
    <p><strong>Services:</strong> Web & Mobile App Development, UI/UX Design, Software Consultation</p>
    <p><strong>Contact:</strong> contact@solusidigital.id</p>
  </div>

  <div class="info">
    <div class="about">
      <h3>About the Company</h3>
      <p>Kami adalah perusahaan teknologi yang fokus pada pengembangan perangkat lunak modern dan efisien.</p>
    </div>
    <div class="vision">
      <h3>Vision & Mission</h3>
      <p>Visi kami adalah menjadi pemimpin inovasi teknologi di Asia Tenggara. Misi kami adalah memberikan solusi digital yang berdampak dan berkelanjutan.</p>
    </div>
  </div>
</section>

    <section id="contact" class="contact">
      <h2>Message Us</h2>
      <form id="contactForm">
        <label>
          Name
          <input type="text" id="name" required />
        </label>
        <label>
          Email
          <input type="email" id="email" required />
        </label>
        <label>
          Phone Number
          <input type="tel" id="phone" required />
        </label>
        <label>
          Message
          <textarea id="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div id="output" class="output"></div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
