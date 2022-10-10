import React, { useState, useCallback, useMemo } from "react";
import CountDetails from "./CountDetails";
import ButtonCount from "./ButtonCount";
import Title from "./Title";

const UseCallbackHook = () => {
  const [countOne, setCountOne] = useState(1);
  const [countFive, setCountFive] = useState(5);
  const incrementByOne = useCallback(() => {
    setCountOne((previous) => previous + 1);
  }, []);
  const incrementByFive = useCallback(() => {
    setCountFive((previous) => previous + 5);
  }, []);
  return (
    <div>
      <Title />
      <CountDetails value={countOne} title="Counter 1" />
      <ButtonCount increment={incrementByOne}>Increment by 1</ButtonCount>

      <CountDetails value={countFive} title="Counter 2" />
      <ButtonCount increment={incrementByFive}>Increment by 5</ButtonCount>
    </div>
  );
};

export default UseCallbackHook;
