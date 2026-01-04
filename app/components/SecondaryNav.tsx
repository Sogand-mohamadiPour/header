import { ChevronDown, Phone, PackageSearch, GitCompare, Headphones, HelpCircle } from 'lucide-react';
import styles from './SecondaryNav.module.css';

export default function SecondaryNav() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.navLeft}>

            <div>
              <button className={styles.categoryButton}>
                All Category
                <ChevronDown size={18} />
              </button>
            </div>


            <nav className={styles.navigation}>
              <span className={styles.navLink}>
                <PackageSearch size={18} />
                <span>Track Order</span>
              </span>
              <span className={styles.navLink}>
                <GitCompare size={18} />
                <span>Compare</span>
              </span>
              <span className={styles.navLink}>
                <Headphones size={18} />
                <span>Customer Support</span>
              </span>
              <span className={styles.navLink}>
                <HelpCircle size={18} />
                <span>Need Help</span>
              </span>
            </nav>
          </div>


          <div className={styles.phoneContainer}>
            <Phone size={18} />
            <span className={styles.phoneNumber}>+1-202-555-0104</span>
          </div>
        </div>

      </div>
      <div className={styles.container}>
        <img
          src="/Widgets.png"
          alt="Promotional Banner"
          className={styles.promoImage}
        />
      </div>
    </>
  );
}

