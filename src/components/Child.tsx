import React from "react";

type Props = {
  onClick: () => void;
};

function Child({ onClick }: Props) {
  console.log("Child rendered");

  return <button onClick={onClick}>Click Me</button>;
}

export default React.memo(Child);
