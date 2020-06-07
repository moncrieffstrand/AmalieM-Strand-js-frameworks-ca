import React, { Component } from 'react'

import styles from './Header.module.css';

import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>

                <div className={styles.logo}>RAWG</div>

                <ul className={styles.menu}>
                    <Link className={styles.links} to="/"><li className={styles.link}>Home</li></Link>
                    <Link className={styles.links} to="/contact"><li className={styles.link}>Contact</li></Link>
                </ul>
                
            </div>
        )
    }
}

export default Header;