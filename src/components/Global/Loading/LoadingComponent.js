import React from 'react'
import styleLoading from './LoadingComponent.module.css';
import { useSelector } from 'react-redux'

export default function LoadingComponent() {

    const { isLoading } = useSelector(state => state.LoadingReducer)

    if (isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={'../assets/default/loading.gif'} width={65} />
            </div>
        )
    } else {
        return ''
    }
}