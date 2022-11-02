import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onInputSubmit = ( event ) => {
        const newInputValue = inputValue.trim();
        
        event.preventDefault();

        if( newInputValue.length <= 1) return;

        onNewValue(newInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onInputSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} // {(event) => onInputChange(event)}
            />
        </form>
    )
}
