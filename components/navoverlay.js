import Link from 'next/link'
import ButtonUI from './buttonui'

import styles from './navoverlay.module.scss'

export default function NavOverlay(closeClickHandler) {
    return (
        <div className={styles.nav_overlay}>
            <nav className={styles.nav_overlay_menu}>
                <ButtonUI icon="close" clickHandler={closeClickHandler}/>
                <ul>
                    <li>
                        <Link href="/">
                            <a>home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>menu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Locations</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>People</a>
                        </Link>
                        <li>
                        <Link href="/">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Content</a>
                        </Link>
                    </li>
                    </li>
                </ul>
            </nav>
        </div>    
    )
}