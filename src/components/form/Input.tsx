import ErrorMessage from '../general/ErrorMessage';

type tProps = {
  blockStyle?: string;
  labelStyle?: string;
  inputStyle?: string;
  errorStyle?: string;
  label?: string;
  id: string;
  type: 'text';
  placeholder: string;
  value: string;
  action: (value: string) => void;
  error: string;
};

function Input(props: tProps) {
  return (
    <div className={`flex flex-wrap mt-[15px] ${props.blockStyle}`}>
      {props.label && (
        <label className={`w-full mb-[2px] ${props.labelStyle}`} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input
        className={`flex-1 max-w-[500px] border border-[#d0d0d0] focus:shadow-[0_0_3px_0_#d0d0d0] rounded-[2px] p-[5px] ${props.inputStyle}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        autoComplete="off"
        onChange={(event) => props.action(event.target.value)}
      />
      <ErrorMessage text={props.error} style={`w-full ${props.errorStyle}`} />
    </div>
  );
}

export default Input;
