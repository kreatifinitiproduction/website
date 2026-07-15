import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Kreatifiniti Production - Creative Infinity Agency</title>
        <meta
          name="description"
          content="Learn about Kreatifiniti Production (Creative Infinity). Our mission, team, and commitment to delivering exceptional creative solutions for businesses worldwide."
        />
        <meta
          name="keywords"
          content="about kreatifiniti, about kreatifiniti production, creative infinity team, our mission, web design agency"
        />
        <meta name="author" content="Kreatifiniti Production" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | Kreatifiniti Production" />
        <meta
          property="og:description"
          content="Learn about Kreatifiniti Production and our mission to deliver creative excellence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kreatifinitiproduction.com/about" />
        <meta property="og:image" content="https://kreatifinitiproduction.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Kreatifiniti Production" />
        <meta
          name="twitter:description"
          content="Learn about Kreatifiniti Production and our creative services."
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kreatifinitiproduction.com/about" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>About Kreatifiniti Production</h1>
          <p className={styles.subtitle}>Creative Infinity - Crafting Excellence in Every Project</p>
        </header>

        <section className={styles.content}>
          <h2>Who We Are</h2>
          <p>
            <strong>Kreatifiniti Production</strong>, also known as <strong>Creative Infinity</strong>, is a modern creative agency 
            dedicated to transforming businesses through innovative digital solutions. We believe in the power of creativity 
            and technology to drive meaningful change.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses by creating exceptional digital experiences that inspire, engage, and convert. 
            Whether you need web design, development, branding, or strategic digital marketing, 
            <strong>Kreatifiniti Production</strong> is here to bring your vision to life.
          </p>

          <h2>Why Choose Kreatifiniti Production?</h2>
          <ul>
            <li>✨ <strong>Creative Excellence</strong> - Our team brings artistic vision and technical expertise</li>
            <li>🚀 <strong>Innovative Solutions</strong> - We stay ahead of industry trends</li>
            <li>🎯 <strong>Results-Driven</strong> - Every project is built with your goals in mind</li>
            <li>💼 <strong>Professional Team</strong> - Experienced designers, developers, and strategists</li>
            <li>🤝 <strong>Client-Centric</strong> - Your success is our success</li>
          </ul>

          <h2>Our Services</h2>
          <div className={styles.services}>
            <div className={styles.service}>
              <h3>Web Design</h3>
              <p>Beautiful, responsive web designs that capture your brand essence and engage your audience.</p>
            </div>
            <div className={styles.service}>
              <h3>Web Development</h3>
              <p>Robust, scalable web applications built with modern technologies and best practices.</p>
            </div>
            <div className={styles.service}>
              <h3>Branding</h3>
              <p>Comprehensive branding strategies that establish your unique identity in the market.</p>
            </div>
            <div className={styles.service}>
              <h3>Digital Strategy</h3>
              <p>Data-driven digital marketing strategies to maximize your online presence and growth.</p>
            </div>
          </div>

          <h2>Keywords & Services</h2>
          <p>
            We are known as <strong>Kreatifiniti Production</strong>, <strong>Kreatifiniti</strong>, 
            <strong>kreatifinitiproduction</strong>, and <strong>Creative Infinity</strong>. 
            Regardless of how you find us, we deliver the same level of creative excellence and professional service.
          </p>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Get Started?</h2>
          <p>Let's create something amazing together!</p>
          <Link href="/" className={styles.ctaButton}>
            Back to Home
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Kreatifiniti Production. All rights reserved.</p>
        <p>Creative Infinity - Crafting Excellence in Every Project</p>
      </footer>
    </>
  );
}
