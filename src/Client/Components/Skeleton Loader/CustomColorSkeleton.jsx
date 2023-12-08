import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomColorSkeleton = ({ width, height }) => (
  <SkeletonTheme color="#b5b5b5" highlightColor="#c9c9c9">
    <Skeleton width={width} height={height} />
  </SkeletonTheme>
);

export default CustomColorSkeleton;
