import TopBanner from './TopBanner';
import Header from './Header';
import SecondaryNav from './SecondaryNav';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <TopBanner />
      <Header />
      <SecondaryNav />
    </header>
  );
}

