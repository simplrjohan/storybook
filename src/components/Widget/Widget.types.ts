export interface WidgetProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  theme?: any;
  currentDirection?: boolean;
  currentNumber?: any;
  isLoading?: boolean;
  label?: string;
  previousNumber?: any;
  previousLabel?: string;
  title?: string;
  $isWidgetMoodPositive?: boolean;
}
