import ScrollReveal from '../../components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: "Location | Caribbean Food Truck",
  description: "Find out where our food truck is parked today. View our weekly schedule and upcoming special events.",
};

export default function LocationPage() {
  const weeklySchedule = [
    { day: "Monday", location: "Downtown Food Park", hours: "11:00 AM - 4:00 PM" },
    { day: "Tuesday", location: "City Market Square", hours: "12:00 PM - 6:00 PM" },
    { day: "Wednesday", location: "University Campus East", hours: "11:00 AM - 3:00 PM" },
    { day: "Thursday", location: "Downtown Food Park", hours: "11:00 AM - 8:00 PM" },
    { day: "Friday", location: "Arts District Weekend Fest", hours: "4:00 PM - 10:00 PM" },
    { day: "Saturday", location: "Railyard Brewery", hours: "12:00 PM - 10:00 PM" },
    { day: "Sunday", location: "Closed", hours: "Rest Day" },
  ];

  return (
    <div className={styles.locationPage}>
      {/* Header Section */}
      <header className={styles.locationHeader}>
        <div className="container">
          <div className={`animate-fade-in ${styles.headerContent}`}>
            <h1 className={styles.pageTitle}>Find Us</h1>
            <p className={styles.pageSubtitle}>Track the truck and grab a bite.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className={styles.locationGrid}>
          
          {/* Map Section */}
          <ScrollReveal>
            <section className={styles.mapSection}>
              <h2 className={styles.sectionTitle}>Current Location</h2>
              <div className={styles.mapContainer}>
                {/* Fallback map placeholder */}
                <div className={styles.mapPlaceholder}>
                  <span className={styles.mapIcon}>📍</span>
                  <p>Interactive Map Loading...</p>
                  <p className={styles.mapSubtext}>(Google Maps integration placeholder)</p>
                </div>
              </div>
              
              <div className={styles.noticeBox}>
                <h3 className={styles.noticeTitle}>⚠️ Heads Up!</h3>
                <p className={styles.noticeText}>
                  Our truck moves daily! While we stick to our schedule as much as possible, locations and times may vary due to weather or special events. Check our <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a> for real-time updates.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Schedule Section */}
          <ScrollReveal delay={200}>
            <section className={styles.scheduleSection}>
              <h2 className={styles.sectionTitle}>Weekly Schedule</h2>
              <div className={styles.scheduleCard}>
                <ul className={styles.scheduleList}>
                  {weeklySchedule.map((item, index) => (
                    <li key={index} className={`${styles.scheduleItem} ${item.day === 'Sunday' ? styles.closedDay : ''}`}>
                      <div className={styles.dayGroup}>
                        <span className={styles.dayName}>{item.day}</span>
                        <span className={styles.hours}>{item.hours}</span>
                      </div>
                      <span className={styles.locationText}>{item.location}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special Events (Optional/Static for now) */}
              <div className={styles.eventsCard}>
                <h3 className={styles.eventsTitle}>Upcoming Special Events</h3>
                <ul className={styles.eventsList}>
                  <li className={styles.eventItem}>
                    <strong>Caribbean Heritage Festival</strong>
                    <span>Saturday, Aug 15 • 10 AM - 8 PM • City Center Park</span>
                  </li>
                  <li className={styles.eventItem}>
                    <strong>Food Truck Rodeo</strong>
                    <span>Sunday, Sept 2 • 12 PM - 6 PM • Fairgrounds</span>
                  </li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
