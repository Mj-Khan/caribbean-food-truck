import ScrollReveal from '../../components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: "Menu | Caribbean Food Truck",
  description: "Explore our authentic Caribbean menu including jerk chicken, oxtail, curry goat, and more.",
};

export default function MenuPage() {
  const menuCategories = [
    {
      title: "Main Dishes",
      summary: "Hearty, traditional island meals served with your choice of sides.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      items: [
        { name: "Jerk Chicken Plate", desc: "Authentic Jamaican jerk chicken served with rice & peas, sweet plantains, and cabbage.", price: "$16.00", available: true, tags: ["Spicy", "Popular"] },
        { name: "Oxtail Stew", desc: "Slow-cooked, fall-off-the-bone oxtail in a rich savory gravy with butter beans. Served with rice & peas.", price: "$22.00", available: true, tags: ["Signature"] },
        { name: "Curry Goat", desc: "Tender chunks of goat meat slow-cooked in traditional Caribbean curry spices. Served with white rice.", price: "$18.00", available: true, tags: [] },
        { name: "Brown Stew Chicken", desc: "Chicken simmered in a rich brown gravy with carrots and bell peppers.", price: "$15.00", available: true, tags: [] },
      ]
    },
    {
      title: "Caribbean Specialties",
      summary: "Unique street food favorites and island classics.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      items: [
        { name: "Ackee and Saltfish", desc: "Jamaica's national dish. Sautéed ackee fruit and salted cod with onions, tomatoes, and peppers.", price: "$19.00", available: true, tags: ["National Dish"] },
        { name: "Escovitch Fish", desc: "Fried red snapper topped with a spicy, pickled vegetable medley of onions, carrots, and scotch bonnet peppers.", price: "$24.00", available: false, tags: ["Seafood"] },
        { name: "Roti with Curry Channa", desc: "Trinidadian-style flatbread wrapped around a savory, spiced chickpea curry.", price: "$14.00", available: true, tags: ["Vegan"] },
      ]
    },
    {
      title: "Sides",
      summary: "Perfect pairings for your main dish.",
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      items: [
        { name: "Rice and Peas", desc: "Traditional dark kidney beans cooked with rice in coconut milk and spices.", price: "$6.00", available: true, tags: ["Vegetarian"] },
        { name: "Fried Sweet Plantains", desc: "Golden, caramelized ripe plantains.", price: "$5.00", available: true, tags: ["Vegetarian", "Sweet"] },
        { name: "Jamaican Patty", desc: "Flaky pastry shell filled with savory spiced beef, chicken, or vegetables.", price: "$4.00", available: true, tags: ["Popular"] },
        { name: "Festivals", desc: "Slightly sweet, fried cornmeal dough (3 pieces).", price: "$4.00", available: true, tags: [] },
      ]
    },
    {
      title: "Drinks & Desserts",
      summary: "Refresh and satisfy your sweet tooth.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      items: [
        { name: "Sorrel Drink", desc: "Traditional hibiscus beverage spiced with ginger and cloves. Served cold.", price: "$4.50", available: true, tags: ["House Made"] },
        { name: "Ting Grapefruit Soda", desc: "Refreshing Jamaican grapefruit soda.", price: "$3.50", available: true, tags: [] },
        { name: "Rum Cake", desc: "Dense, moist cake soaked in dark rum and spices.", price: "$6.50", available: true, tags: ["Contains Alcohol"] },
        { name: "Coconut Drops", desc: "Traditional sweet treat made with fresh diced coconut, ginger, and brown sugar.", price: "$4.00", available: true, tags: [] },
      ]
    }
  ];

  return (
    <div className={styles.menuPage}>
      <header className={styles.menuHeader}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContent}`}>
          <ScrollReveal>
            <h1 className={styles.pageTitle}>Our Menu</h1>
            <p className={styles.pageSubtitle}>Bold, authentic flavor straight from the islands</p>
          </ScrollReveal>
        </div>
      </header>

      <div className={`container ${styles.menuContainer}`}>
        {menuCategories.map((category, index) => (
          <ScrollReveal key={index} delay={100}>
            <section className={styles.menuCategory}>
              <div className={styles.categoryHero} style={{ backgroundImage: `url(${category.image})` }}>
                <div className={styles.categoryHeroOverlay}>
                  <h2 className={styles.categoryTitle}>{category.title}</h2>
                  <p className={styles.categorySummary}>{category.summary}</p>
                </div>
              </div>
              
              <div className={styles.menuGrid}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={`${styles.menuItem} ${!item.available ? styles.unavailable : ''}`}>
                    <div className={styles.itemTags}>
                      {item.tags?.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemName}>
                        {item.name}
                        {!item.available && <span className={styles.unavailableLabel}>Sold Out</span>}
                      </h3>
                      <div className={styles.itemDottedLine}></div>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
