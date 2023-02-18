export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface AccountErrorMessageProps {
  password: string;
  username: string;
  confirmPassword: string;
}
