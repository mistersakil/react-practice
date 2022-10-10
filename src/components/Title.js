import { memo } from "react";

const Title = () => {
  console.log("rendering title");
  return <h1>UseCallbackHook hook practice</h1>;
};

export default memo(Title);
