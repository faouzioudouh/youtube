import React from "react";

interface Props {
  title: string;
}
const ArrowLeft = (props: Props) => (
  <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <path d="M6.628 16L21.68 31.052l3.691-3.695L14.011 16l11.36-11.36L21.68.949 6.628 16.001z" />
  </svg>
);

export default ArrowLeft;
