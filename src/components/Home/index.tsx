import ProfileImage from './profile-image.svg';
import DribbbleIcon from './dribbble-brands.svg';
import GithubIcon from './github-brands.svg';
import styles from './styles.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.profileImage}>
        <ProfileImage />
      </div>

      <h1 className={styles.name}>Ping Lu</h1>
      <h4 className={styles.description}>Frontend Developer</h4>

      <p className={styles.text}>
        The website is currently under construction.
      </p>

      <div className={styles.socialMediaContainer}>
        <a href="https://github.com/pinglu85">
          <GithubIcon />
        </a>
        <a href="https://dribbble.com/pinglu">
          <DribbbleIcon />
        </a>
      </div>
    </main>
  );
};

export default Home;
