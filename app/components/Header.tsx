import { Search, ShoppingCart, Heart, User, Twitter, Facebook, Youtube, Instagram, Share2 } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>

      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <span className={styles.welcomeText}>Welcome to Clicon online eCommerce store.</span>
          <div className={styles.topBarRight}>
            <div className={styles.socialContainer}>
              <span>Follow us:</span>
              <div className={styles.socialLinks}>
                <span className={styles.socialLink}>
                  <Twitter size={16} />
                </span>
                <span className={styles.socialLink}>
                  <Facebook size={16} />
                </span>
                <span className={styles.socialLink}>
                  <Share2 size={16} />
                </span>
                <span className={styles.socialLink}>
                  <Youtube size={16} />
                </span>
                <span className={styles.socialLink}>
                  <Instagram size={16} />
                </span>
              </div>
            </div>
            <div className={styles.dropdowns}>
              <select className={styles.select}>
                <option>Eng</option>
              </select>
              <select className={styles.select}>
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContent}>
       
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>O</span>
            </div>
            <span className={styles.logoLabel}>CLICON</span>
          </div>

       
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search for anything..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <Search size={20} className={styles.searchIcon} />
              </button>
            </div>
          </div>

        
          <div className={styles.iconsContainer}>
            <button className={styles.iconButton}>
              <ShoppingCart size={24} />
              <span className={styles.badge}>2</span>
            </button>
            <button className={styles.iconButton}>
              <Heart size={24} />
            </button>
            <button className={styles.iconButton}>
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

