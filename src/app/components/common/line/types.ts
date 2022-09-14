export type Props = JSX.IntrinsicElements['div'] & {
  title?: string;
  id?: string;
  link?: string;
  selected?: boolean;
  onClick?: () => void;
};
