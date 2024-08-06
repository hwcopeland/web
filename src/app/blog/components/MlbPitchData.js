'use client'; // Make sure this is added at the top

import React, { useEffect, useState } from 'react';

const MlbPitchData = () => {
    const [games, setGames] = useState(null);
    const [activeGameData, setActiveGameData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:8686/api/games'); // Ensure this URL is correct
                const result = await response.json();
                console.log('Fetched games:', result); // Debugging line
                setGames(result);

                // Fetch data for active games
                const activeGames = result.filter(game => game.label.includes('In Progress'));
                if (activeGames.length === 0) {
                    setLoading(false); // No active games, stop loading
                } else {
                    activeGames.forEach(game => {
                        fetchActiveGameData(game.value);
                    });
                }
            } catch (error) {
                console.error('Error fetching games:', error);
                setLoading(false);
            }
        };

        const fetchActiveGameData = async (gameId) => {
            try {
                const response = await fetch(`http://localhost:8686/api/game/${gameId}`);
                const result = await response.json();
                setActiveGameData(prevState => ({ ...prevState, [gameId]: result }));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching game data:', error);
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const formatGameLabel = (gameLabel) => {
        const labelParts = gameLabel.split(' - ');
        if (labelParts.length < 2) return gameLabel; // Return the original label if it's not in the expected format
        const [teams] = labelParts;
        const [awayTeam, homeTeam] = teams.split('@');
        return `${awayTeam.trim()} @ ${homeTeam.trim()}`;
    };

    return (
        <div className="text-gray-400 bg-gray-900 body-font flex">
            <div className="w-1/3 h-screen overflow-y-scroll p-4">
                <h2 className="text-3xl font-bold mb-4">MLB Pitch Data</h2>
                <ul className="mb-8">
                    {games && games.length > 0 ? (
                        games.map((game) => (
                            <li key={game.value} className="mb-2">
                                {formatGameLabel(game.label)}
                            </li>
                        ))
                    ) : (
                        <li>No games scheduled or available at the moment.</li>
                    )}
                </ul>
            </div>
            <div className="w-2/3 p-4">
                {Object.keys(activeGameData).length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(activeGameData).map(([gameId, gameData]) => (
                            <div key={gameId} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold mb-2">{gameData.game_info.title}</h3>
                                <h4 className="text-md mb-2">{gameData.game_info.subtitle}</h4>
                                <div dangerouslySetInnerHTML={{ __html: gameData.pitch_plot }} />
                                <div dangerouslySetInnerHTML={{ __html: gameData.stats_plot }} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No active games at the moment.</div>
                )}
            </div>
        </div>
    );
};

export default MlbPitchData;