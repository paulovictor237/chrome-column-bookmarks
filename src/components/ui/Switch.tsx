type Props = {
  variable: boolean;
  OnClick: () => void;
};

export default function Switch({ variable, OnClick }: Props) {
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={variable}
        readOnly
      />
      <div
        onClick={OnClick}
        className=" after:absolute after:top-0.5 after:left-[2px] w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-peve-selected  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-peve-selected"
      ></div>
    </label>
  );
}
