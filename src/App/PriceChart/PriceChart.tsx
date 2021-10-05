import React from 'react';
import { Line } from 'react-chartjs-2';

function convertToDateString(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });
}

export function PriceChart({ avaData, ethData }: any) {
  return (
    <Line
      style={{ height: '346px' }}
      data={{
        labels: avaData
          ? avaData.map((d: any, index: number) =>
              index % 2 ? convertToDateString(d.date) : '',
            )
          : [],
        datasets: [
          {
            label: 'Avalanche',
            data: avaData ? avaData.map((d: any) => d.priceUSD) : [],
            borderColor: 'rgb(232, 65, 66)',
            backgroundColor: 'rgba(232, 65, 66, 0.5)',
          },
          {
            label: 'Ethereum',
            data: ethData ? ethData.map((d: any) => d.priceUSD) : [],
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
          // x: {
          //   ticks: {
          //     callback: function(val, index) {
          //       // Hide the label of every 2nd dataset
          //       return index % 2 === 0 ? this.getLabelForValue(val) : '';
          //     },
          //   }
          // }
        },
      }}
    />
  );
}
