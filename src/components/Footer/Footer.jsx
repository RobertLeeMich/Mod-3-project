import React from "react";
import styles from "./Footer.module.css";
import logoImage from "../../../footer.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                <p>Made by: Robert Michaud</p>
                <p>
                    Powered by{" "}
                    <a className={styles["rlink"]} href="https://rawg.io/">
                        RAWG Games API
                    </a>
                </p>
                <p>
                    Logo:{" "}
                    <a className={styles["llink"]} href="https://app.logo.com/">
                        https://app.logo.com/
                    </a>
                </p>
                <p>
                    Fonts:{" "}
                    <a className={styles["glink"]} href="http://google.com">
                        http://google.com
                    </a>
                </p>
            </div>
            <div className={styles.footerLogo}>
                <img src={logoImage} alt="Logo" className={styles.logoImage} />
            </div>
        </footer>
    );
};

export default Footer;
