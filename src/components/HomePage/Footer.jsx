import styles from './Footer.module.css';

function Footer() {
    return (
        <footer id="copyright" className={styles.footer}>
            <p>© 2024 NFL Enterprises LLC. NFL and the NFL shield design are registered trademarks of the National Football League. The team names, logos and uniform designs are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League. NFL footage © NFL Productions LLC.</p>
        </footer>
    );
}

export default Footer;