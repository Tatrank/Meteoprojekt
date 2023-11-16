"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import { trpc } from "../_trpc/client";
import { useEffect, useState } from "react";
export default function Home() {
  let data = [{ axi: [{ valueX: 12, valueY: 13 }] }];
  let datas = trpc.getData.useQuery();
  let y;
  let x;

  return (
    <>
      {data && (
        <LineChart
          xAxis={[
            {
              data: data
                ? data[0].axi.map((data) => {
                    return data.valueX;
                  })
                : [],
            },
          ]}
          series={[
            {
              data: data
                ? data[0].axi.map((data) => {
                    return data.valueY;
                  })
                : [],
            },
          ]}
          width={500}
          height={300}
        />
      )}
    </>
  );
}
