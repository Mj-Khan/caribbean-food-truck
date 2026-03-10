import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Caribbean<span className={styles.logoAccent}>Bites</span></h3>
          <p className={styles.footerText}>
            Authentic Caribbean street food bringing the vibrant flavors of the islands straight to your neighborhood.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/location">Location</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contact Us</h4>
          <ul className={styles.contactInfo}>
            <li><span className={styles.icon}>📞</span> (555) 123-4567</li>
            <li><span className={styles.icon}>📧</span> info@caribbeanbites.com</li>
            <li><span className={styles.icon}>📍</span> See <Link href="/location" className={styles.inlineLink}>Location page</Link> for daily spots</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Follow Us</h4>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Facebook
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Caribbean Bites Food Truck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
