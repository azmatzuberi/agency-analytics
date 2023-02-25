const Header = () => {

    const openTab = (name: string) => {

    }

    return (
    <div className="header">
        <h1>Photos</h1>
        <div className="tabs">
            <button className="tablinks" onClick={ () => openTab('Recently added')}>Recently Added</button>
            <button className="tablinks" onClick={ () => openTab('Favorited')}>Favorited</button>
        </div>
    </div>
    );
}

export default Header
