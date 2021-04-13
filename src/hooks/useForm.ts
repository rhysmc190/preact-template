import { useState, useCallback } from "preact/hooks";

function useForm(formFields: string[]): [Map<string, string>, (e: Event) => void] {
	const defaultFormValues = new Map(formFields.map(field => [field, ""]));
	const [formValues, setFormValues] = useState(defaultFormValues);

	const onChangeFormValue = useCallback(
		(e: Event): void => {
			e.preventDefault();
			const [key, value] = getNameAndValue(e.target as HTMLInputElement);
			console.log(key, value);
			setFormValues(prevState => prevState.set(key, value));
		},
		[setFormValues]
	);

	return [formValues, onChangeFormValue];
}

function getNameAndValue(inputElement: HTMLInputElement) {
	return [inputElement.name, inputElement.value];
}

export default useForm;
