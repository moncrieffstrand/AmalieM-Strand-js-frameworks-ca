import React, { Component } from 'react'

import styles from './SpecificGame.module.css';
import axios from 'axios';

class SpecificGame extends Component {

    state = {
        game: null
    }

    async componentDidMount(){
        const gameId = this.props.match.params.gameId;
        // console.log(gameId);

        const response = await axios.get(`https://api.rawg.io/api/games/${gameId}`)
        // console.log(response.data);
        this.setState({
            game: response.data
        });
    }

    renderGame = () => {
        return this.state.game ? 
        (
            <div className={styles.container}>

                <h1 className={styles.title}>{this.state.game.name}</h1>

                <div className={styles.imgContainer}>
                    <img className={styles.img} src={this.state.game.background_image} alt={this.state.game.slug}/>
                </div>

                <div className={styles.descContainer}>
                    <h3 className={styles.descHeading}>Description</h3>
                    <p className={styles.desc}>{this.state.game.description_raw}</p>
                </div>

                <div className={styles.linkContainer}>
                    <h3 className={styles.descHeading}>Website Link</h3>
                    <a href={this.state.game.website} target="_blank" rel="noopener noreferrer"  className={styles.link}>{this.state.game.website}</a>
                </div>
                
            </div>

        )
        :
        (
            <h1 className={styles.loading}>Loading...</h1>
        )
    }


    render() {
        return (
            <div>
                {this.renderGame()}
            </div>
        );
    }

}


export default SpecificGame;
