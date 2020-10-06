import React from 'react'

export const LinkCard = ({ link })=>{
    return (
        <>
            <h2>Ссылка</h2>
            <p>Ваша ссылка: <a href={link.to} target="_blank" rel="noopenen norefeffer">{link.to}</a></p>
            <p>Откуда: <a href={link.from} target="_blank" rel="noopenen norefeffer">{link.from}</a></p>
            <p>Количество кликов: <b>{link.clicks}</b></p>
            <p>Дата создания: <b>{new Date(link.date).toLocaleDateString()}</b></p>
        </>
    )
}