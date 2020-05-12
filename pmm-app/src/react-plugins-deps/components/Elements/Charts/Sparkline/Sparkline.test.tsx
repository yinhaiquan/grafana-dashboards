// Just a stub test
import React from 'react';
import renderer from 'react-test-renderer';
import { Sparkline } from './Sparkline';

jest.mock('react-tooltip');

const MOCK_SPARKLINE = [
  {
    time_frame: 360,
    timestamp: '2020-02-13T15:41:00Z',
    metric: '',
  },
  {
    point: 1,
    time_frame: 360,
    timestamp: '2020-02-13T15:35:00Z',
    metric: '',
  },
  {
    point: 2,
    time_frame: 360,
    timestamp: '2020-02-13T15:29:00Z',
    metric: '',
  },
  {
    point: 3,
    time_frame: 360,
    timestamp: '2020-02-13T15:23:00Z',
    metric: '',
  },
  {
    point: 4,
    time_frame: 360,
    timestamp: '2020-02-13T15:17:00Z',
    metric: '',
  },
  {
    point: 5,
    time_frame: 360,
    timestamp: '2020-02-13T15:11:00Z',
    metric: '',
  },
  {
    point: 6,
    time_frame: 360,
    timestamp: '2020-02-13T15:05:00Z',
    metric: '',
  },
  {
    point: 7,
    time_frame: 360,
    timestamp: '2020-02-13T14:59:00Z',
    metric: '',
  },
  {
    point: 8,
    time_frame: 360,
    timestamp: '2020-02-13T14:53:00Z',
    metric: '',
  },
  {
    point: 9,
    time_frame: 360,
    timestamp: '2020-02-13T14:47:00Z',
    metric: '',
  },
  {
    point: 10,
    time_frame: 360,
    timestamp: '2020-02-13T14:41:00Z',
    metric: '',
  },
  {
    point: 11,
    time_frame: 360,
    timestamp: '2020-02-13T14:35:00Z',
    metric: '',
  },
  {
    point: 12,
    time_frame: 360,
    timestamp: '2020-02-13T14:29:00Z',
    metric: '',
  },
  {
    point: 13,
    time_frame: 360,
    timestamp: '2020-02-13T14:23:00Z',
    metric: '',
  },
  {
    point: 14,
    time_frame: 360,
    timestamp: '2020-02-13T14:17:00Z',
    metric: '',
  },
  {
    point: 15,
    time_frame: 360,
    timestamp: '2020-02-13T14:11:00Z',
    metric: '',
  },
  {
    point: 16,
    time_frame: 360,
    timestamp: '2020-02-13T14:05:00Z',
    metric: '',
  },
  {
    point: 17,
    time_frame: 360,
    timestamp: '2020-02-13T13:59:00Z',
    metric: '',
  },
  {
    point: 18,
    time_frame: 360,
    timestamp: '2020-02-13T13:53:00Z',
    metric: '',
  },
  {
    point: 19,
    time_frame: 360,
    timestamp: '2020-02-13T13:47:00Z',
    metric: '',
  },
  {
    point: 20,
    time_frame: 360,
    timestamp: '2020-02-13T13:41:00Z',
    metric: '',
  },
  {
    point: 21,
    time_frame: 360,
    timestamp: '2020-02-13T13:35:00Z',
    metric: '',
  },
  {
    point: 22,
    time_frame: 360,
    timestamp: '2020-02-13T13:29:00Z',
    metric: '',
  },
  {
    point: 23,
    time_frame: 360,
    timestamp: '2020-02-13T13:23:00Z',
    metric: '',
  },
  {
    point: 24,
    time_frame: 360,
    timestamp: '2020-02-13T13:17:00Z',
    metric: '',
  },
  {
    point: 25,
    time_frame: 360,
    timestamp: '2020-02-13T13:11:00Z',
    metric: '',
  },
  {
    point: 26,
    time_frame: 360,
    timestamp: '2020-02-13T13:05:00Z',
    metric: '',
  },
  {
    point: 27,
    time_frame: 360,
    timestamp: '2020-02-13T12:59:00Z',
    metric: '',
  },
  {
    point: 28,
    time_frame: 360,
    timestamp: '2020-02-13T12:53:00Z',
    metric: '',
  },
  {
    point: 29,
    time_frame: 360,
    timestamp: '2020-02-13T12:47:00Z',
    metric: '',
  },
  {
    point: 30,
    time_frame: 360,
    timestamp: '2020-02-13T12:41:00Z',
    metric: '',
  },
  {
    point: 31,
    time_frame: 360,
    timestamp: '2020-02-13T12:35:00Z',
    metric: '',
  },
  {
    point: 32,
    time_frame: 360,
    timestamp: '2020-02-13T12:29:00Z',
    metric: '',
  },
  {
    point: 33,
    time_frame: 360,
    timestamp: '2020-02-13T12:23:00Z',
    metric: '',
  },
  {
    point: 34,
    time_frame: 360,
    timestamp: '2020-02-13T12:17:00Z',
    metric: '',
  },
  {
    point: 35,
    time_frame: 360,
    timestamp: '2020-02-13T12:11:00Z',
    metric: '',
  },
  {
    point: 36,
    time_frame: 360,
    timestamp: '2020-02-13T12:05:00Z',
    metric: '',
  },
  {
    point: 37,
    time_frame: 360,
    timestamp: '2020-02-13T11:59:00Z',
    metric: '',
  },
  {
    point: 38,
    time_frame: 360,
    timestamp: '2020-02-13T11:53:00Z',
    metric: '',
  },
  {
    point: 39,
    time_frame: 360,
    timestamp: '2020-02-13T11:47:00Z',
    metric: '',
  },
  {
    point: 40,
    time_frame: 360,
    timestamp: '2020-02-13T11:41:00Z',
    metric: '',
  },
  {
    point: 41,
    time_frame: 360,
    timestamp: '2020-02-13T11:35:00Z',
    metric: '',
  },
  {
    point: 42,
    time_frame: 360,
    timestamp: '2020-02-13T11:29:00Z',
    metric: '',
  },
  {
    point: 43,
    time_frame: 360,
    timestamp: '2020-02-13T11:23:00Z',
    metric: '',
  },
  {
    point: 44,
    time_frame: 360,
    timestamp: '2020-02-13T11:17:00Z',
    metric: '',
  },
  {
    point: 45,
    time_frame: 360,
    timestamp: '2020-02-13T11:11:00Z',
    metric: '',
  },
  {
    point: 46,
    time_frame: 360,
    timestamp: '2020-02-13T11:05:00Z',
    metric: '',
  },
  {
    point: 47,
    time_frame: 360,
    timestamp: '2020-02-13T10:59:00Z',
    metric: '',
  },
  {
    point: 48,
    time_frame: 360,
    timestamp: '2020-02-13T10:53:00Z',
    metric: '',
  },
  {
    point: 49,
    time_frame: 360,
    timestamp: '2020-02-13T10:47:00Z',
    metric: '',
  },
  {
    point: 50,
    time_frame: 360,
    timestamp: '2020-02-13T10:41:00Z',
    metric: 0.011111111,
  },
  {
    point: 51,
    time_frame: 360,
    timestamp: '2020-02-13T10:35:00Z',
    metric: 0.033333335,
  },
  {
    point: 52,
    time_frame: 360,
    timestamp: '2020-02-13T10:29:00Z',
    metric: 0.044444446,
  },
  {
    point: 53,
    time_frame: 360,
    timestamp: '2020-02-13T10:23:00Z',
    metric: '',
  },
  {
    point: 54,
    time_frame: 360,
    timestamp: '2020-02-13T10:17:00Z',
    metric: '',
  },
  {
    point: 55,
    time_frame: 360,
    timestamp: '2020-02-13T10:11:00Z',
    metric: '',
  },
  {
    point: 56,
    time_frame: 360,
    timestamp: '2020-02-13T10:05:00Z',
    metric: '',
  },
  {
    point: 57,
    time_frame: 360,
    timestamp: '2020-02-13T09:59:00Z',
    metric: '',
  },
  {
    point: 58,
    time_frame: 360,
    timestamp: '2020-02-13T09:53:00Z',
    metric: '',
  },
  {
    point: 59,
    time_frame: 360,
    timestamp: '2020-02-13T09:47:00Z',
    metric: '',
  },
  {
    point: 60,
    time_frame: 360,
    timestamp: '2020-02-13T09:41:00Z',
    metric: '',
  },
  {
    point: 61,
    time_frame: 360,
    timestamp: '2020-02-13T09:35:00Z',
    metric: '',
  },
  {
    point: 62,
    time_frame: 360,
    timestamp: '2020-02-13T09:29:00Z',
    metric: '',
  },
  {
    point: 63,
    time_frame: 360,
    timestamp: '2020-02-13T09:23:00Z',
    metric: '',
  },
  {
    point: 64,
    time_frame: 360,
    timestamp: '2020-02-13T09:17:00Z',
    metric: '',
  },
  {
    point: 65,
    time_frame: 360,
    timestamp: '2020-02-13T09:11:00Z',
    metric: '',
  },
  {
    point: 66,
    time_frame: 360,
    timestamp: '2020-02-13T09:05:00Z',
    metric: '',
  },
  {
    point: 67,
    time_frame: 360,
    timestamp: '2020-02-13T08:59:00Z',
    metric: '',
  },
  {
    point: 68,
    time_frame: 360,
    timestamp: '2020-02-13T08:53:00Z',
    metric: '',
  },
  {
    point: 69,
    time_frame: 360,
    timestamp: '2020-02-13T08:47:00Z',
    metric: '',
  },
  {
    point: 70,
    time_frame: 360,
    timestamp: '2020-02-13T08:41:00Z',
    metric: '',
  },
  {
    point: 71,
    time_frame: 360,
    timestamp: '2020-02-13T08:35:00Z',
    metric: '',
  },
  {
    point: 72,
    time_frame: 360,
    timestamp: '2020-02-13T08:29:00Z',
    metric: '',
  },
  {
    point: 73,
    time_frame: 360,
    timestamp: '2020-02-13T08:23:00Z',
    metric: '',
  },
  {
    point: 74,
    time_frame: 360,
    timestamp: '2020-02-13T08:17:00Z',
    metric: '',
  },
  {
    point: 75,
    time_frame: 360,
    timestamp: '2020-02-13T08:11:00Z',
    metric: '',
  },
  {
    point: 76,
    time_frame: 360,
    timestamp: '2020-02-13T08:05:00Z',
    metric: '',
  },
  {
    point: 77,
    time_frame: 360,
    timestamp: '2020-02-13T07:59:00Z',
    metric: '',
  },
  {
    point: 78,
    time_frame: 360,
    timestamp: '2020-02-13T07:53:00Z',
    metric: '',
  },
  {
    point: 79,
    time_frame: 360,
    timestamp: '2020-02-13T07:47:00Z',
    metric: '',
  },
  {
    point: 80,
    time_frame: 360,
    timestamp: '2020-02-13T07:41:00Z',
    metric: '',
  },
  {
    point: 81,
    time_frame: 360,
    timestamp: '2020-02-13T07:35:00Z',
    metric: '',
  },
  {
    point: 82,
    time_frame: 360,
    timestamp: '2020-02-13T07:29:00Z',
    metric: '',
  },
  {
    point: 83,
    time_frame: 360,
    timestamp: '2020-02-13T07:23:00Z',
    metric: '',
  },
  {
    point: 84,
    time_frame: 360,
    timestamp: '2020-02-13T07:17:00Z',
    metric: '',
  },
  {
    point: 85,
    time_frame: 360,
    timestamp: '2020-02-13T07:11:00Z',
    metric: '',
  },
  {
    point: 86,
    time_frame: 360,
    timestamp: '2020-02-13T07:05:00Z',
    metric: '',
  },
  {
    point: 87,
    time_frame: 360,
    timestamp: '2020-02-13T06:59:00Z',
    metric: '',
  },
  {
    point: 88,
    time_frame: 360,
    timestamp: '2020-02-13T06:53:00Z',
    metric: '',
  },
  {
    point: 89,
    time_frame: 360,
    timestamp: '2020-02-13T06:47:00Z',
    metric: '',
  },
  {
    point: 90,
    time_frame: 360,
    timestamp: '2020-02-13T06:41:00Z',
    metric: '',
  },
  {
    point: 91,
    time_frame: 360,
    timestamp: '2020-02-13T06:35:00Z',
    metric: '',
  },
  {
    point: 92,
    time_frame: 360,
    timestamp: '2020-02-13T06:29:00Z',
    metric: '',
  },
  {
    point: 93,
    time_frame: 360,
    timestamp: '2020-02-13T06:23:00Z',
    metric: '',
  },
  {
    point: 94,
    time_frame: 360,
    timestamp: '2020-02-13T06:17:00Z',
    metric: '',
  },
  {
    point: 95,
    time_frame: 360,
    timestamp: '2020-02-13T06:11:00Z',
    metric: '',
  },
  {
    point: 96,
    time_frame: 360,
    timestamp: '2020-02-13T06:05:00Z',
    metric: '',
  },
  {
    point: 97,
    time_frame: 360,
    timestamp: '2020-02-13T05:59:00Z',
    metric: '',
  },
  {
    point: 98,
    time_frame: 360,
    timestamp: '2020-02-13T05:53:00Z',
    metric: '',
  },
  {
    point: 99,
    time_frame: 360,
    timestamp: '2020-02-13T05:47:00Z',
    metric: '',
  },
  {
    point: 100,
    time_frame: 360,
    timestamp: '2020-02-13T05:41:00Z',
    metric: '',
  },
  {
    point: 101,
    time_frame: 360,
    timestamp: '2020-02-13T05:35:00Z',
    metric: '',
  },
  {
    point: 102,
    time_frame: 360,
    timestamp: '2020-02-13T05:29:00Z',
    metric: '',
  },
  {
    point: 103,
    time_frame: 360,
    timestamp: '2020-02-13T05:23:00Z',
    metric: '',
  },
  {
    point: 104,
    time_frame: 360,
    timestamp: '2020-02-13T05:17:00Z',
    metric: '',
  },
  {
    point: 105,
    time_frame: 360,
    timestamp: '2020-02-13T05:11:00Z',
    metric: '',
  },
  {
    point: 106,
    time_frame: 360,
    timestamp: '2020-02-13T05:05:00Z',
    metric: '',
  },
  {
    point: 107,
    time_frame: 360,
    timestamp: '2020-02-13T04:59:00Z',
    metric: '',
  },
  {
    point: 108,
    time_frame: 360,
    timestamp: '2020-02-13T04:53:00Z',
    metric: '',
  },
  {
    point: 109,
    time_frame: 360,
    timestamp: '2020-02-13T04:47:00Z',
    metric: '',
  },
  {
    point: 110,
    time_frame: 360,
    timestamp: '2020-02-13T04:41:00Z',
    metric: '',
  },
  {
    point: 111,
    time_frame: 360,
    timestamp: '2020-02-13T04:35:00Z',
    metric: '',
  },
  {
    point: 112,
    time_frame: 360,
    timestamp: '2020-02-13T04:29:00Z',
    metric: '',
  },
  {
    point: 113,
    time_frame: 360,
    timestamp: '2020-02-13T04:23:00Z',
    metric: '',
  },
  {
    point: 114,
    time_frame: 360,
    timestamp: '2020-02-13T04:17:00Z',
    metric: '',
  },
  {
    point: 115,
    time_frame: 360,
    timestamp: '2020-02-13T04:11:00Z',
    metric: '',
  },
  {
    point: 116,
    time_frame: 360,
    timestamp: '2020-02-13T04:05:00Z',
    metric: '',
  },
  {
    point: 117,
    time_frame: 360,
    timestamp: '2020-02-13T03:59:00Z',
    metric: '',
  },
  {
    point: 118,
    time_frame: 360,
    timestamp: '2020-02-13T03:53:00Z',
    metric: '',
  },
  {
    point: 119,
    time_frame: 360,
    timestamp: '2020-02-13T03:47:00Z',
    metric: '',
  },
];

describe('Polygon chart test', () => {
  it('Renders correct with right props', () => {
    const polygonChartProps = {
      data: MOCK_SPARKLINE,
      width: 150,
      ykey: 'metric',
    };

    const component = renderer.create(<Sparkline {...polygonChartProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
