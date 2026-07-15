import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kreatifiniti Production | Creative Infinity - Web & Design Services</title>
        <meta
          name="description"
          content="Kreatifiniti Production - Creative Infinity. Professional web design, development, and creative services. Explore our portfolio of innovative digital solutions."
        />
        <meta
          name="keywords"
          content="kreatifiniti production, kreatifiniti, kreatifinitiproduction, creative infinity, web design, web development, creative agency"
        />
        <meta name="author" content="Kreatifiniti Production" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kreatifiniti Production | Creative Infinity" />
        <meta
          property="og:description"
          content="Professional web design and development services. Creative solutions for your digital needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kreatifinitiproduction.com/" />
        <meta property="og:image" content="https://kreatifinitiproduction.com/og-image.jpg" />
        <meta property="og:site_name" content="Kreatifiniti Production" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kreatifiniti Production | Creative Infinity" />
        <meta
          name="twitter:description"
          content="Professional web design and development services. Creative solutions for your digital needs."
        />
        <meta name="twitter:image" content="https://kreatifinitiproduction.com/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kreatifinitiproduction.com/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Welcome to Kreatifiniti Production</h1>
          <p className={styles.subtitle}>Creative Infinity - Bringing Your Vision to Life</p>
        </header>

        <section className={styles.hero}>
          <h2>About Us</h2>
          <p>
            <strong>Kreatifiniti Production</strong> (Creative Infinity) is a creative agency dedicated to delivering 
            innovative web design, development, and digital solutions. We transform ideas into reality 
            through creative excellence and technical expertise.
          </p>
          <p>
            Our services include web development, UI/UX design, branding, and digital marketing strategy. 
            We partner with businesses to create impactful digital experiences.
          </p>
        </section>

        <section className={styles.cta}>
          <h2>Explore Our Work</h2>
          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>
              🏠 Home
            </Link>
            <Link href="/about" className={styles.link}>
              ℹ️ About Us
            </Link>
          </nav>
        </section>

        <section className={styles.keywords}>
          <h3>Services & Expertise</h3>
          <p>
            At Kreatifiniti Production (Creative Infinity), we specialize in:
          </p>
          <ul>
            <li><strong>kreatifiniti production</strong> - Full-service creative agency</li>
            <li><strong>kreatifiniti</strong> - Web design and development solutions</li>
            <li><strong>kreatifinitiproduction</strong> - Digital presence optimization</li>
            <li><strong>creative infinity</strong> - Unlimited creative possibilities for your brand</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Kreatifiniti Production. All rights reserved.</p>
        <p>Creative Infinity - Bringing Ideas to Life</p>
      </footer>
    </>
  );
}
