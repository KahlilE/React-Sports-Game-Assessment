import React from 'react';

class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            shots: 0,
            score: 0
        }

        this.shotSound = new Audio('assets/Audio/Back+Board.wav')

        this.scoreSound = new Audio('assets/Audio/Swish+2.wav')
    }



    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()
        


        if (Math.random() > 0.5) {
            score += 1
            
            setTimeout(() => {
                this.scoreSound.play()
            }, 300)
            
        }


        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }






    render() {
        let shotPercentageDiv 
        if(this.state.shots) {
        const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)

            shotPercentageDiv = (
                <div>
                
                <strong>Shooting Percentage: {shotPercentage} </strong>
                
                </div>

            )
        }


        return (
            <div className="Team">

                <h1>{this.props.name}</h1>



                <div className="Team1logo">

                    <img src={this.props.logo} alt={this.props.name} />
                </div>

                <div>

                    <h2>Shots:</h2> {this.state.shots}

                </div>


                <div>

                    <h2>Score:</h2> {this.state.score}

                </div>


                


                {shotPercentageDiv}


                <button onClick={this.shotHandler}>Shoot</button>


            </div>
        )
    }


}

export default Team;