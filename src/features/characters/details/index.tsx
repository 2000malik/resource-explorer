import React from "react";

type Props = {
  id: string;
};

export const CharacterDetails: React.FC<Props> = ({ id }) => {
  return <div>{id}</div>;
};
