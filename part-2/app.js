function App(){
    return (<div>
                <Tweet
                    name = "John Smith"
                    username = "jjonsmithy"
                    date = {new Date().toDateString()}
                    message = "Hello!"
                />
                <Tweet
                    name = "Billy Bob"
                    username = "bbbontwitter"
                    date = {new Date().toDateString()}
                    message = "My first tweet!!!"
                />
                <Tweet
                    name = "Carlos Benitez"
                    username = "cbenny22"
                    date = {new Date().toDateString()}
                    message = "Conspiracy theories"
                />
    </div>)
}