import { useEffect, useState } from "react";

export const SBBRatings = () => {
    const [data, setData] = useState();

    useEffect(() => {
        // Define the async function inside the useEffect
        const fetchData = async () => {
            try {
                // Fetch data from the URL
                const response = await fetch('https://fft-bot.herokuapp.com/advice');
                // Parse the response as JSON
                const jsonData = await response.json();
                // Set the parsed data to state
                setData(Object.values(jsonData));
                // Log the data to the console
                // console.log(jsonData);
            } catch (error) {
                // Log any errors to the console
                console.error('Failed to fetch data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Dependency array is empty, so this runs once on component mount

	console.table(data)
	if (!data) return <>Loading...</>
    return (
        <>
            <img src="https://storage.cloud.google.com/fftbg-site-publicimages/61683_a%20dashing%20knight%20from%20final%20fantasy%20tactics%20in%20the_xl-1024-v1-0.png" width="600" height="340"/>
            <h2>SBB Advice</h2>
            {/* Optional: Displaying data */}
			<table style={{width: 600}}>
				<tr>
					<th>
						Matchup
					</th>
					<th>
						Likely Winner
					</th>
					<th>
						Odds to Win
					</th>
				</tr>
				{data.map(fight => {
					return (
						<tr>
							<td>
								{fight.tag.toUpperCase().split('-').join(" vs. ")}
							</td>
							<td>
								{fight.winner.toUpperCase()}
							</td>
							<td>
								{(fight.correctRate * 100).toFixed(2)}%
							</td>
						</tr>
					)
				})}
				
			</table>
            {/* {data && <div>{JSON.stringify(data)}</div>} */}
        </>
    );
};
