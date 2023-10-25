import { useState } from "react";

interface AddCategoryProps {
    onNewCategory: (category: string) => void;
    //setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}


export const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (value: string) => {
        setInputValue(value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={(e) => onInputChange(e.target.value)}
                />
            </form>
        </>
    )
}

