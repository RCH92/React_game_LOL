import React, { Component } from "react";
import NavBar from "../NavBar";
import Instructions from "../Instructions";
import data from "../../champions.json"; //Data seems shorter than Champions or I would keep the name ...
import CardDiv from "../CardDiv";
import Card from "../Card";

class CardGame extends Component {
    state = {
        score: 0, 
        top: 0, 
        data
    };

    componentDidMount() {
        this.setState({ data: this.fisherYatesShuffle(this.state.data)});
    }
    cardClick = cardId => {
        let guessBool = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === cardId) {
              if (!newItem.clicked) {
                newItem.clicked = true;
                guessBool = true;
              }
            }
            return newItem;
          });
          guessBool
            ? this.correctGuess(newData)
            : this.incorrectGuess(newData);
        };
    
    correctGuess = Data => {
        const score = this.state.score;
        const top = this.state.top;
        const tempScore = score + 1;
        const tempTop = Math.max(tempScore, top);

        this.setState({
            score: tempScore,
            top: tempTop,
            data: this.fisherYatesShuffle(Data)
        });
    }
    incorrectGuess = data => {
        this.setState({
            score: 0,
            data: this.initialData(data)
        })
    }
    fisherYatesShuffle = data => {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
    }

    initialData = data => {
        const initialData = data.map(element => ({
            ...element,
            click: false
        }));

        return this.fisherYatesShuffle(initialData);

    }

    // cardClick = cardID => {

    // }

    render() {
        return(
            <div>
                <NavBar score={this.state.score} top={this.state.top}/>
                <Instructions />
                <CardDiv>
                    {this.state.data.map(card =>(
                        <Card
                            key={card.id}
                            id={card.id}
                            img={card.img}
                            cardClick={this.cardClick}
                        />
                    ))}
                </CardDiv>
            </div>
        )
    }
};

export default CardGame;
