import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallBackButton from '../../components/layout/UseCallBackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0);

    const inc = useCallback(function (delta) {  // Isso é muito bom pra componentes estáticos.
        setCount(current => current + delta)
    }, [setCount]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>    
                <UseCallBackButton inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
