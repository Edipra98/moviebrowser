import Hero from './hero'

const Home = () => {
    return (
        <>
            <Hero text="Welcome to React 201" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint maiores aliquid, veniam pariatur vel placeat dolore laudantium, adipisci eum odit dolores rerum, id dolor laborum doloribus autem! Modi, vero!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;