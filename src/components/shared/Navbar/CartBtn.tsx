'use client';

import Cart from "@/components/ui/svg/Cart";
import React from "react";
import Paragraph from "../Typograpgy/Paragraph";

const CartBtn = ({ text }: { text?: boolean }) => {
  return (
    <div className="flex items-center gap-1">
      <div className={text ? "text-White" : "text-Grey-700 md:hidden"}>
        <Cart />
      </div>
      {text && (
        <Paragraph
          size="p14"
          weight="normal"
          lineH="lh20"
          className="text-White"
        >
          Cart
        </Paragraph>
      )}
    </div>
  );
};

export default CartBtn;
