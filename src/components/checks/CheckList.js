import { useState } from "react";
const CheckList = () => {
  const initialCandies = [];
  const [label, setLabel] = useState("");
  const [checkLists, setCheckLists] = useState(initialCandies);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckLists([...checkLists, label]);
  };
  return (
    <>
      <div>
        <form name="checkListForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="label"
            onChange={(e) => setLabel(e.target.value)}
          />
          <input type="submit" name="submit" value="submit" />
        </form>
      </div>
      <ul>
        {checkLists.length > 0 &&
          checkLists.map((chekList, index) => {
            return (
              <li key={index}>
                <a>{chekList}</a>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default CheckList;
