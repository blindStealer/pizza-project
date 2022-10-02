import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={350}
    height={459}
    viewBox="0 0 350 459"
    backgroundColor="#fbf9f9"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="166" cy="135" r="132" />
    <circle cx="140" cy="144" r="2" />
    <rect x="55" y="273" rx="14" ry="14" width="221" height="30" />
    <rect x="15" y="311" rx="15" ry="15" width="302" height="79" />
    <rect x="40" y="415" rx="15" ry="15" width="96" height="28" />
    <rect x="177" y="409" rx="15" ry="15" width="132" height="37" />
  </ContentLoader>
);
