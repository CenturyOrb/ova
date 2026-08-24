import styles from "./footer.module.css";
import Button from "@/app/ui/button";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.storm_warning}>
                <div>
                    <h1>Storm warning</h1>
                    <p>Get the weekly forecast on the creative economy, exclusive <br />roster news, and early access to ÀJÀLÁ drops.</p>
                </div>
                <div className={styles.email_sub}>
                    <input type="email" placeholder="YOUR EMAIL ADDRESS" size="30"/>
                    <Button className={styles.sub_button}>SUBSCRIBE</Button>
                </div>
            </div>
            <div className={styles.oya_footer}>
                <div>
                    <h1>OYA</h1>
                    <p>Building the architectural infrastructure for a grounded, global creative future.</p>
                </div>
                <div className={styles.footer_section}>
                    <p>SERVICES</p>
                    <div>
                        <p>Management</p>
                        <p>Distribution</p>
                    </div>
                </div> 
                <div className={styles.footer_section}>
                    <p>SOCIAL</p>
                    <div>
                        <p>Instagram</p>
                        <p>TikTok</p>
                        <p>LinkedIn</p>
                    </div>
                </div> 
                <div className={styles.footer_section}>                    
                    <p>CONTACT</p>
                    <div>
                        <h1>connect@oyaentertainment.com</h1>
                        <p>Philadelphia, PA — Global</p>
                    </div>
                </div> 
            </div>
        </footer>
    );
}

export default Footer;
