import './Content.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/UseEffect'
import UseRef from '../../views/examples/UseRef'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact element={<Home />} path="/" />

            <Route path="/useState" element={<UseState />} />

            <Route path="/useEffect" element={<UseEffect />} />

            <Route path="/useRef" element={<UseRef />} />

            <Route path="/useMemo" element={<UseMemo />} />
                
            {/* 

            <Route path="/useCallback" element={<UseCallback />} />

            <Route path="/useContext">
                <UseContext />
            </Route>

            <Route path="/useReducer">
                <UseReducer />
            </Route>

            <Route path="/useCustom">
                <UseCustom />
            </Route> */}

            <Route path="*" element={<NotFound />} />

        </Routes>
    </main>
)

export default Content