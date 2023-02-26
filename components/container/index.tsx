import PhotoGrid from '@/components/photoGrid'
import FavoriteGrid from '@/components/favoriteGrid'
import React from 'react';

const Container = () => {

    const photoCheck: Boolean = false

    const setTab = (tab: string) => {
        if (tab === 'tab1') {
            const elem = document.getElementById("label-1") 
            elem?.classList.add("selected")
            const elem2 = document.getElementById("label-2")
            elem2?.classList.remove("selected") 
        }
        else {
            const elem = document.getElementById("label-1") 
            elem?.classList.remove("selected")
            const elem2 = document.getElementById("label-2")
            elem2?.classList.add("selected") 
        }
    }

    return (
    <div className="header">
        <h1>Photos</h1>
        <div className='tabs'>
            <div className="tab-2">
                <label id="label-1" className="selected" htmlFor="tab2-1">Recently added</label>
                <input id="tab2-1" name="tabs-two" type="radio" defaultChecked onClick={() => {setTab("tab1")}} />
                <div>
                    <PhotoGrid />
                </div>
            </div>
            <div className="tab-2">
                <label id='label-2' htmlFor="tab2-2">Favorited</label>
                <input id="tab2-2" name="tabs-two" type="radio" onClick={() => setTab("tab2")} />
                <div>
                    <FavoriteGrid />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Container
