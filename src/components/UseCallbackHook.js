import React, { useState, useCallback, useMemo, useEffect } from "react";
import CountDetails from "./CountDetails";
import ButtonCount from "./ButtonCount";
import Title from "./Title";

const UseCallbackHook = () => {
  const [countOne, setCountOne] = useState(1);
  const [countFive, setCountFive] = useState(5);

  /** useCallback */
  const incrementByOne = useCallback(() => {
    setCountOne((previous) => previous + 1);
  }, []);
  /** useCallback */
  const incrementByFive = useCallback(() => {
    setCountFive((previous) => previous + 5);
  }, []);
  /** useEffect */
  function numberType() {
    return countOne % 2 == 0 ? "even" : "odd";
  }
  return (
    <div>
      <Title />
      Number type: {numberType()}
      <CountDetails value={countOne} title="Counter 1" />
      <ButtonCount increment={incrementByOne}>Increment by 1</ButtonCount>
      <CountDetails value={countFive} title="Counter 2" />
      <ButtonCount increment={incrementByFive}>Increment by 5</ButtonCount>
    </div>
  );
};

export default UseCallbackHook;
