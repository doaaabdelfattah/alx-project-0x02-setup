import React from "react";
import Card from "@/components/common/Card";
import { CardProps } from "@/interfaces";
const home = () => {
  return (
    <div>
      <Card title="hello" content="bodyContent" />
      <Card title="title 2" content="bodyContent 2" />
    </div>
  );
};

export default home;
