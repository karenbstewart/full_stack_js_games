import GameCard from "./GameCard";

const GamesGrid = ({games, deleteGame}) =>{
    if (!games)return <h2>Loading</h2>
    const gamesList = games.map((game)=>{
        return (
            <div key={game._id}>

                <GameCard game={game} deleteGame={deleteGame} />
                <hr/>
            </div>
        )
    });
    return (
        <>
            {gamesList}
        </>
    );
}

export default GamesGrid;