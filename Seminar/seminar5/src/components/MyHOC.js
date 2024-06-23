// Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для
// оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который
// определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого
// компонента должен отображаться загрузочный индикатор.
// 1. Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый
// компонент, который показывает либо индикатор загрузки, либо содержимое оригинального
// компонента в зависимости от пропса isLoading.
// 2. Можно использовать простой текстовый индикатор или любой спиннер из доступных
// библиотек.

import { useState } from 'react';
import Loading from './Loading';

const withLoadingIndicator = (Component, isLoading) => {
    return (props) => {
        const newProps = {
            ...props,
            isLoading
        };
        return <Component {...newProps} />
    }
}

function MyHOC() {
    const [isLoading, setIsLoading] = useState(true);
    const NewLoading = withLoadingIndicator(Loading, isLoading);

    setTimeout(() => {
        setIsLoading((prev) => !prev);
    }, 5000);

    return (
        <>
            <NewLoading />
        </>
    );
}

export default MyHOC;