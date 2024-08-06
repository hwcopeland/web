// src/app/blog/components/MlbPitchData.js

'use client'; // Make sure this is added at the top

import React, { useEffect, useState } from 'react';

const MlbPitchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8686/api/games'); // Ensure this URL is correct
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>MLB Pitch Data</h2>
            <ul>
                {data.map((game) => (
                    <li key={game.value}>{game.label}</li>
                ))}
            </ul>
        </div>
    );
};

export default MlbPitchData;
