import React, { Component } from 'react'

import styles from './Home.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Home extends Component {

    state = {
        games: [],
        search: ''
    }
    
    async componentDidMount(){
        const response = await axios.get(`https://api.rawg.io/api/games`);
        // console.log(response.data);

        this.setState({
            games: response.data.results
        });

    }


    renderGames = () => {
        return this.filterGames(this.state.games).map(game => {
            // console.log(game);
            return (
                <div key={game.id} className={styles.row}>
                    <div className={styles.imageBlock}>
                        <img className={styles.image} src={game.background_image} alt={game.slug}/>
                    </div>
                    <div className={styles.content1}>{game.name}</div>
                    <div className={styles.content1}>{game.rating}</div>
                    <div className={styles.content1}>{game.released}</div>
                    <Link to={`/game/${game.id}`} className={styles.viewGame}>VIEW</Link>
                </div>

            )
        })
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })

    }

    filterGames = (games) => {
        const nameFilter = this.state.search;
        if (!nameFilter) return games;
        return games.filter(game => {
            return game.name.toLowerCase().startsWith(nameFilter)
        });
    }

    render() {
        return (
            <div className={styles.home}>

                <div className={styles.searchContainer}>
                    <input className={styles.search} type="text" placeholder="Search by Title" value={this.state.search} onChange={this.handleChange}/>
                </div>

                <div className={styles.container}>

                    <div className={styles.header}>
                        <div className={styles.img}>Image</div>
                        <div className={styles.content}>Title</div>
                        <div className={styles.content}>Rating</div>
                        <div className={styles.content}>Release Date</div>
                        <div className={styles.content}>Link</div>
                    </div>


                    {this.renderGames()}
                    

                </div>
                
            </div>
        )
    }
}

export default Home;