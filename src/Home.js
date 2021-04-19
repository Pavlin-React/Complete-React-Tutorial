const Home = () => {

    let handleClick = ( e ) => {
        console.log('hello ninja"s', e);
    }

    let handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target.value);
    }

    return (
        <div className='home'>
            <h2>Homepage</h2>
            <button onClick={ handleClick } >Click Me</button>
            <button onClick={ ( e ) => {
                handleClickAgain('mario', e)
            } } >Click Again</button>
        </div>
    );
}

export default Home;