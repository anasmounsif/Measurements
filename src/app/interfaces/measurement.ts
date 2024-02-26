export interface Measurement {
  id: number;
  vehicleId: number;
  date: string;
  position: Position;
  value: string;
  coordinate_x: number;
  coordinate_y: number;
  angle: number;
}

type Position = 'Front Left' | 'Front Right' | 'Rear Left' | 'Rear Right';
