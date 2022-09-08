export type Props = JSX.IntrinsicElements['div'] & {
  id: string;
  title: string;
  link?: string;
  selected?: boolean;
  onClick?: () => void;
};
