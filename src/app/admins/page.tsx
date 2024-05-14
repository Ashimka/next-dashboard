import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Admin Page Dashdboard
      <div>
        <Link href={"/"}> Home</Link>
      </div>
    </div>
  );
};

export default page;
