import React from 'react';
import { Line } from 'react-chartjs-2';
import { ItemInflation } from '../../helpers/getInflationHistory';
import { formatDateString } from '../../helpers/formatDateString';

type Props = {
  avaData: ItemInflation[];
  ethData: ItemInflation[];
};

export function InflationChart({ avaData, ethData }: Props) {
  const labels = avaData.map((item: ItemInflation) =>
    formatDateString(item.date),
  );

  const avaDataset = avaData ? avaData.map((d: any) => d.value) : [];
  const ethDataset = ethData ? ethData.map((d: any) => d.value) : [];
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: 'Avalanche',
            data: avaDataset,
            borderColor: 'rgb(232, 65, 66)',
            backgroundColor: 'rgba(232, 65, 66)',
          },
          {
            label: 'Ethereum',
            data: ethDataset,
            borderColor: 'rgb(28, 28, 225)',
            backgroundColor: 'rgba(28, 28, 225)',
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
