import { ChevronDown, Phone } from 'lucide-react';
import styles from './SecondaryNav.module.css';

export default function SecondaryNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.navLeft}>
          {/* All Category dropdown */}
          <div>
            <button className={styles.categoryButton}>
              All Category
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Navigation links */}
          <nav className={styles.navigation}>
            <a href="#" className={styles.navLink}>
              Track Order
            </a>
            <a href="#" className={styles.navLink}>
              Compare
            </a>
            <a href="#" className={styles.navLink}>
              Customer Support
            </a>
            <a href="#" className={styles.navLink}>
              Need Help
            </a>
          </nav>
        </div>

        {/* Phone number */}
        <div className={styles.phoneContainer}>
          <Phone size={18} />
          <span className={styles.phoneNumber}>+1-202-555-0104</span>
        </div>
      </div>
    </div>
  );
}

