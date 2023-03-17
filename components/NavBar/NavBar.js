import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import LanguageChange from '../../buttons/LanguageChange';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li style={{marginRight:"10px"}}>
                    <Link href="/">
                        <div className={router.pathname === "/" ? styles.active : ""}>Home</div>
                    </Link>
                </li>
                <li style={{marginRight:"10px"}}>
                    <Link href="#myskills">
                        <div>My Skills</div>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <div>Contact</div>
                    </Link>
                </li>
                
            </ul>
            <div className={styles['language-change']}>
                <LanguageChange />
            </div>
        </nav>
    );
};

export default Navbar;
