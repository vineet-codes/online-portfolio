import Posts from "./Posts";

const Home = ({ posts }) => {
    return (
        <div>
            <h1>Home</h1>
            <p> Vineet Kumar Singh</p>
            <Posts posts={posts}/>
        </div>
    )
}

export default Home;

