import React from "react";

const layout = ({ children }) => {
  return <>{children}</>;
};

export default layout;

export async function generateMetadata({ params }) {
  return { title: params?.slug };
}
