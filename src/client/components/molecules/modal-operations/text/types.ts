type Tags = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'label'
>;

export type Styles = { [key in Tags]: string };

type GenericMode = {
  mode?: Tags;
};

type LabelMode = {
  mode: keyof Pick<JSX.IntrinsicElements, 'label'>;
  htmlFor?: string;
};

export type Props = (GenericMode | LabelMode) &
  React.HTMLAttributes<HTMLElement>;
