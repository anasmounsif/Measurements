export interface Measurement {
  id: number;
  vehicleId: number;
  timestamp: string;
  position: Position;
  press: number;
  temp: number;
  omega: number;
  speed: number;
}

type Position = 'Front Left' | 'Front Right' | 'Rear Left' | 'Rear Right';
