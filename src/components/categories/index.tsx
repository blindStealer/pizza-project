import React, {useState} from 'react';
import s from './style.module.scss'
import {CategoryItem} from "../category-item";
import {Sort} from "../sort";
export const Categories = () => {

    const [selectCategory, setSelectCategory] = useState(0)
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль','Острые', 'Закрытые']

    return (
        <div className={s.wrapper}>
            <div className={s.categories}>
                {
                    categories.map((item,idx) => {
                        return <CategoryItem item={item} idx={idx} key={idx} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
                    })
                }
            </div>

           <Sort/>

        </div>
    );
};

