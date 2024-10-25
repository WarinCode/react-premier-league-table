import { ReactElement, FC } from "react";
import { CaptionProps } from "../types";

const Caption: FC<CaptionProps> = ({
  attributes,
  imageAttributes,
}): ReactElement => {
  return (
    <caption {...attributes}>
      <img {...imageAttributes} />
    </caption>
  );
};

export default Caption;
