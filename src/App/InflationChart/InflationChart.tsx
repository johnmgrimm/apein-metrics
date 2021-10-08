import React from 'react';
import { Line } from 'react-chartjs-2';
import { ItemInflation } from '../../helpers/getInflationHistory';

function convertToDateString(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });
}

type Props = {
  avaData: ItemInflation[];
  ethData: ItemInflation[];
};

export function InflationChart({ avaData, ethData }: Props) {
  console.log(avaData, ethData, 'chart');

  const labels = avaData
    .concat(ethData)
    .reduce((all: number[], item: ItemInflation, index: number) => {
      if (index === 0) {
        return [item.date];
      }
      if (!all.includes(item.date)) {
        all.push(item.date);
      }
      return all;
    }, [])
    .sort((a, b) => a - b)
    .map((date: number) => convertToDateString(date));

  const avaDataset = avaData ? avaData.map((d: any) => d.value) : [];
  const ethDataset = ethData ? ethData.map((d: any) => d.value) : [];
  return (
    <Line
      // style={{ height: '346px' }}
      data={{
        labels: labels,
        datasets: [
          {
            label: 'Avalanche',
            data: avaDataset,
            borderColor: 'rgb(232, 65, 66)',
            backgroundColor: 'rgba(232, 65, 66, 0.5)',
          },
          {
            label: 'Ethereum',
            data: ethDataset,
            borderColor: 'rgb(28, 28, 225)',
            backgroundColor: 'rgba(28, 28, 225, 0.5)',
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
