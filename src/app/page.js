import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import styles from "./page.module.css";

export default function Home() {
  const featuredMenu = [
    { name: "Jerk Chicken Plate", desc: "Authentic Jamaican jerk chicken served with rice & peas and sweet plantains.", price: "$16" },
    { name: "Oxtail Stew", desc: "Slow-cooked, fall-off-the-bone oxtail in a rich gravy with butter beans.", price: "$22" },
    { name: "Curry Goat", desc: "Tender chunks of goat meat slow-cooked in traditional Caribbean curry spices.", price: "$18" }
  ];

  const reviews = [
    { name: "Sarah M.", text: "Best jerk chicken I've had outside of Jamaica! The plantains are always perfect.", rating: 5 },
    { name: "Marcus T.", text: "The oxtail is incredible. Huge portions and amazing flavor. New favorite lunch spot.", rating: 5 },
    { name: "Elena R.", text: "Great food, fast service, and the friendliest staff. Highly recommend the curry goat!", rating: 4 }
  ];

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className="container">
            <div className={`animate-fade-in ${styles.heroContent}`}>
              <h1 className={styles.heroTitle}>Authentic Caribbean Street Food</h1>
              <p className={styles.heroSubtitle}>Bringing the vibrant flavors of the islands straight to your neighborhood.</p>
              <div className={styles.heroCtas}>
                <Link href="/menu" className="btn btn-primary">View Menu</Link>
                <Link href="/location" className="btn btn-secondary">Find Our Location</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <ScrollReveal>
        <section className={`section ${styles.featuredMenu}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured Dishes</h2>
              <p className={styles.sectionSubtitle}>A taste of our most popular island flavors</p>
            </div>
            
            <div className={styles.menuGrid}>
              {featuredMenu.map((item, index) => (
                <div key={index} className={styles.menuCard}>
                  <div className={styles.menuImagePlaceholder}></div>
                  <div className={styles.menuInfo}>
                    <div className={styles.menuHeader}>
                      <h3 className={styles.menuName}>{item.name}</h3>
                      <span className={styles.menuPrice}>{item.price}</span>
                    </div>
                    <p className={styles.menuDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.textCenter}>
              <Link href="/menu" className="btn btn-primary">See Full Menu</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* About Preview Section */}
      <ScrollReveal delay={100}>
        <section className={`section ${styles.aboutPreview}`}>
          <div className="container">
            <div className={styles.aboutGrid}>
              <div className={styles.aboutContent}>
                <h2 className={styles.sectionTitle}>Our Story</h2>
                <p className={styles.aboutText}>
                  Born from a passion for authentic island cooking, Caribbean Bites started with family recipes passed down through generations. We believe in using fresh ingredients, traditional spices, and slow-cooking methods to deliver the true taste of the Caribbean.
                </p>
                <Link href="/about" className={styles.textLink}>Read more about us &rarr;</Link>
              </div>
              <div className={styles.aboutImagePlaceholder}></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Location Highlight Section */}
      <ScrollReveal delay={100}>
        <section className={`section ${styles.locationHighlight}`}>
          <div className="container">
            <div className={styles.locationContent}>
              <h2 className={styles.sectionTitle}>Find Us Today</h2>
              <div className={styles.locationCard}>
                <h3 className={styles.locationCity}>Currently Located In: Downtown Area</h3>
                <p className={styles.locationAddress}>123 Main Street Food Truck Park</p>
                <p className={styles.locationHours}>Open today: 11:00 AM - 8:00 PM</p>
                <Link href="/location" className="btn btn-primary" style={{ marginTop: '1rem' }}>See Weekly Schedule</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Customer Reviews Section */}
      <ScrollReveal delay={100}>
        <section className={`section ${styles.reviewsSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
            </div>
            
            <div className={styles.reviewsGrid}>
              {reviews.map((review, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div className={styles.stars}>
                    {"★".repeat(review.rating)}{"☆".repeat(5-review.rating)}
                  </div>
                  <p className={styles.reviewText}>"{review.text}"</p>
                  <p className={styles.reviewAuthor}>- {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
