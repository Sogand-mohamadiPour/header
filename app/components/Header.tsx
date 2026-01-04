import { Search, ShoppingCart, Heart, User, Twitter, Facebook, Youtube, Instagram, Share2 } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      {/* Top info bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <span>Welcome to Clicon online eCommerce store.</span>
            <div className={styles.socialContainer}>
              <span>Follow us:</span>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <Twitter size={16} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Facebook size={16} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Share2 size={16} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Youtube size={16} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Instagram size={16} />
                </a>
              </div>
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

      {/* Main header */}
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>O</span>
            </div>
            <span className={styles.logoLabel}>CLICON</span>
          </div>

          {/* Search bar */}
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

          {/* Right icons */}
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

