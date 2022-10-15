import React, { useEffect, useRef, useState } from "react";

const Clock2 = () => {
  const [clock, setClock] = useState(new Date());

  const btnStopRef = useRef();
  useEffect(() => {
    tick();
  }, []);
  const stop = () => {
    clearInterval(btnStopRef.current);
  };
  const start = () => {
    tick();
  };

  const tick = () => {
    clearInterval(btnStopRef.current);
    btnStopRef.current = setInterval(() => {
      setClock(new Date());
    }, 1000);
  };
  return (
    <div>
      <h2>Clock two using useRef hook</h2>
      <hr />
      <p>Clock : {clock.toLocaleTimeString()}</p>
      <button
        onClick={() => {
          stop();
        }}
      >
        Stop clock
      </button>
      <button
        onClick={() => {
          start();
        }}
      >
        Start clock
      </button>
    </div>
  );
};

export default Clock2;
