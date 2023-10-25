import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const App = () => {

    //const apikey = 'kU9MqDD9GwgEjOM8sf26U47n796pKBwf';
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory: string) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />



            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>


    )
}

export default App
