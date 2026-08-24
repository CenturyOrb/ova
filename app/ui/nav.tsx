import styles from "@/app/ui/nav.module.css";
import NavLinks from "@/app/ui/nav-links";
import Image from 'next/image';

const Navigation = () => { 
    return(
        <nav className={styles.nav}> 
            <div>
            <Image 
                src="/logo.png"
                width={1080}
                height={1350}
                alt="OVA logo"
                className={styles.logo}
            />
            <h1>OVA ENTERTAINMENT</h1>
            </div>
            <NavLinks />
        </nav>
    );
}

export default Navigation;
