import Image from 'next/image';
import ScrollReveal from '../../components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: "About Us | Caribbean Food Truck",
  description: "Learn about the story behind Caribbean Bites, our food philosophy, and our mission to bring authentic island flavors to you.",
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <header className={styles.aboutHeader}>
        <div className="container">
          <div className={`animate-fade-in ${styles.headerContent}`}>
            <h1 className={styles.pageTitle}>Our Story</h1>
            <p className={styles.pageSubtitle}>From the islands to your neighborhood</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className={styles.aboutGrid}>
          
          {/* Business Story */}
          <ScrollReveal>
            <section className={styles.storySection}>
              <h2 className={styles.sectionTitle}>The Caribbean Bites Journey</h2>
              <div className={styles.textBlock}>
                <p>
                  Caribbean Bites was born out of a deep love for island culture and authentic homemade street food. Growing up in a household where the kitchen was the heart of the home, our founder learned early on that food is more than just sustenance—it's a way to bring people together, celebrate heritage, and share love.
                </p>
                <p>
                  After years of perfecting family recipes passed down through generations, we decided to take our kitchen on the road. What started as cooking for family gatherings and neighborhood block parties has grown into the Caribbean Bites food truck you see today.
                </p>
                <p>
                  Our goal is simple: to serve up the comforting, bold, and spicy flavors of the Caribbean to our community. Whether you're craving the fiery kick of real jerk chicken or the comforting warmth of a slow-cooked oxtail stew, we're here to provide a genuine island experience in every bite.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Mission & Philosophy */}
          <ScrollReveal delay={200}>
            <section className={styles.philosophySection}>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Our Mission</h3>
                <p className={styles.cardText}>
                  To share the joy, warmth, and vibrant flavors of authentic Caribbean cuisine with our local community through high-quality, freshly prepared street food.
                </p>
              </div>

              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Our Food Philosophy</h3>
                <p className={styles.cardText}>
                  We believe there are no shortcuts to authentic flavor. That's why we marinate our meat for 24 hours, slow-cook our stews, and use traditional spices imported directly from the islands. We don't compromise on ingredients, and we cook every dish with the same care and attention we'd give to a meal for our own family.
                </p>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
