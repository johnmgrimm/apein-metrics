import React from 'react';
import { Line } from 'react-chartjs-2';
import { formatDateString } from '../../helpers/formatDateString';
import { DataPoint } from '../../helpers/getInflationHistory';

type Props = {
  data: DataPoint[];
  label: string;
  color: string;
};

export function PriceChart({ data, label, color }: Props) {
  const labels = data.map((item: DataPoint) => formatDateString(item.date));

  const dataset = data ? data.map((d: any) => d.value) : [];

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label,
            data: dataset,
            borderColor: color,
            backgroundColor: color,
          },
        ],
      }}
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            ticks: {
              callback: function (val, index) {
                // Hide the label of every 2nd dataset
                return index % 2 === 0 ? labels[index] : '';
              },
            },
          },
        },
      }}
    />
  );
}
