type tProps = {
  blockStyle?: string;
  inputStyle?: string;
  labelStyle?: string;
  type: 'radio' | 'checkbox';
  id: string;
  checked: boolean;
  action: () => void;
  label: string;
};

function Checkable(props: tProps) {
  return (
    <span className={`flex items-center gap-[5px] ${props.blockStyle}`}>
      <input
        className={`h-[1rem] w-[1rem] ${props.inputStyle}`}
        type={props.type}
        id={props.id}
        checked={props.checked}
        onChange={props.action}
      />
      <label className={`${props.labelStyle}`} htmlFor={props.id}>
        {props.label}
      </label>
    </span>
  );
}

export default Checkable;
