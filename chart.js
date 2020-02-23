const updatedAt = '23/02/2020 00:50 UTC';

const days = [
  '22-01','23-01','24-01','25-01','26-01','27-01','28-01','29-01','30-01','31-01',
  '01-02','02-02','03-02','04-02','05-02','06-02','07-02','08-02','09-02','10-02',
  '11-02','12-02','13-02','14-02','15-02','16-02','17-02','18-02','19-02', '20-02',
  '21-02', '22-02', '23-02'
];

const data = {
  singapore: [
    0, 1, 3, 4, 4, 5, 7, 10, 13, 16,
    18, 18, 18, 24, 28, 30, 33, 40, 43, 45,
    47, 50, 58, 67, 72, 75, 77, 81, 84, 85,
    86, 89, 89
  ],
  japan: [
    1, 2, 2, 3, 4, 4, 7, 8, 14, 17,
    20, 20, 20, 23, 25, 25, 25, 25, 26, 26,
    28, 29, 33, 41, 53, 59, 67, 75, 85, 95,
    109, 131, 131,
  ],
  hongKong: [
    1, 2, 5, 5, 8, 8, 8, 10, 12, 13,
    14, 15, 15, 18, 21, 24, 26, 26, 36, 42,
    49, 50, 53, 56, 56, 57, 60, 62, 65, 69,
    69, 70, 70
  ],
  southKorea: [
    1, 1, 2, 2, 3, 4, 4, 4, 6, 11,
    12, 15, 15, 16, 23, 23, 24, 24, 27, 27,
    28, 28, 28, 28, 28, 29, 30, 31, 58, 112,
    208, 444, 469,
  ],
  thailand: [
    4, 4, 5, 5, 8, 8, 14, 14, 14, 19,
    19, 19, 19, 25, 25, 25, 25, 32, 32, 32,
    33, 33, 33, 33, 34, 34, 35, 35, 35, 35,
    35, 35, 35,
  ],
  taiwan: [
    1, 1, 3, 3, 4, 5, 8, 8, 9, 10,
    10, 10, 10, 11, 11, 16, 16, 17, 18, 18,
    18, 18, 18, 18, 18, 21, 23, 23, 24, 24,
    26, 26, 26,
  ],
  malaysia: [
    0, 0, 0, 4, 4, 4, 7, 7, 8, 8,
    8, 8, 8, 10, 12, 14, 15, 16, 17, 18,
    18, 18, 19, 19, 22, 22, 22, 22, 22, 22,
    22, 22, 22
  ],
}

Highcharts.chart('container', {
  title: {
    text: 'SARS-CoV-2 Confirmed Infections in Asia'
  },

  subtitle: {
    text: `Source: bnonews.com. Updated ${updatedAt}`,
  },

  yAxis: {
    title: {
      text: 'Number of confirmed infections'
    }
  },

  xAxis: {
    categories: days,
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [
    { name: 'Singapore', data: data.singapore },
    { name: 'Japan', data: data.japan },
    { name: 'Hong Kong', data: data.hongKong },
    { name: 'South Korea', data: data.southKorea },
    { name: 'Thailand', data: data.thailand },
    { name: 'Taiwan', data: data.taiwan },
    { name: 'Malaysia', data: data.malaysia },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 800
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
});
