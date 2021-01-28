import { useState } from "react";
const CandyDispenser = () => {
  const initialCandies = ["snickers", "skittles", "twix", "milky way"];
  const [candies, setCandies] = useState(initialCandies);
  const dispense = (candy) => {
      //let newCandyArray = candies.filter((c) => c !== candy);
      setCandies(candies.filter((c) => c !== candy));
    //setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  };
  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul>
            {candies.map((candy) => (
              <li key={candy}>
                <button onClick={() => dispense(candy)}>grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CandyDispenser;
