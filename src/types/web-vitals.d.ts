declare module 'web-vitals' {
    export function getCLS(onPerfEntry?: ReportHandler): void;
    export function getFID(onPerfEntry?: ReportHandler): void;
    export function getFCP(onPerfEntry?: ReportHandler): void;
    export function getLCP(onPerfEntry?: ReportHandler): void;
    export function getTTFB(onPerfEntry?: ReportHandler): void;
  
    export type ReportHandler = (metric: Metric) => void;
    export type Metric = {
      name: string;
      delta: number;
      id: string;
      value: number;
      entries: PerformanceEntry[];
    };
  }
  