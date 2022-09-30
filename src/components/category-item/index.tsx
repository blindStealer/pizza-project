import React, {useState} from 'react';
import s from './style.module.scss'

interface CategoryItemProps {
    item: string
    idx: number
    selectCategory: number
    setSelectCategory: (idx: number) => void
}


export const CategoryItem: React.FC<CategoryItemProps> = ({item,idx,selectCategory,setSelectCategory}) => {

    return (
        <div onClick={()=> setSelectCategory(idx)} className={selectCategory === idx ?` ${s['wrapper-active']} ` : `${s.wrapper}`}>
            {item}
        </div>
    );
};

