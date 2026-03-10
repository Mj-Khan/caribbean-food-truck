import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>Oops! We lost this recipe.</h1>
          <p className={styles.message}>
            The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. 
            Don't worry, there's plenty of good food back where you started!
          </p>
          <div className={styles.actions}>
            <Link href="/" className="btn btn-primary">
              Take Me Home
            </Link>
            <Link href="/menu" className="btn btn-secondary">
              Check the Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
