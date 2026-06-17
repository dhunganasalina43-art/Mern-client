
import { type } from './../../.next/types/routes.d';



interface IProps {
	label:string;
	id:string;
	type:'text' |'email' |'password' |'number';
	placeholder: string
	name:string
}

const Input =({id,label,placeholder,type,name} : IProps) =>{
	return (
		<div className="w-full flex flex-col  gap-1">
			<label htmlFor={id} className="text-[14px] font-semibold">{label}
				</label>
				<input 
				id={id}
				className="w-full border-[1.5px] border-indigo-500 px-2 py-2.5 rounded-b-sm"
				type={type}
				placeholder={placeholder}
				name={name}
				/>


		</div>
	)
}
export default Input