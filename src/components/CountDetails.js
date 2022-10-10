import { memo } from "react";

const CountDetails = ({ value, title }) => {
  console.log(`counter details ${value}`);
  return (
    <p>
      {title} is: {value}
    </p>
  );
};

export default memo(CountDetails);
