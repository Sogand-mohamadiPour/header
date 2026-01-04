import { X } from 'lucide-react';
import styles from './TopBanner.module.css';

export default function TopBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.blackFriday}>
          <span className={styles.blackLabel}>Black</span>
          <span>Friday</span>
        </div>
        <div className={styles.discount}>
          <span>Up to</span>
          <span className={styles.discountPercent}>59%</span>
          <span>OFF</span>
        </div>
        <button className={styles.shopButton}>
          SHOP NOW →
        </button>
      </div>
      <button className={styles.closeButton}>
        <X size={18} />
      </button>
    </div>
  );
}

