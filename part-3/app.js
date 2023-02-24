function App(){
    return (<div>
                <Person
                    name = "Joe"
                    age = "22"
                    hobbies = {[swimming, golfing]}
                />
                <Person
                    name = "Mary"
                    age = "48"
                    hobbies = {[reading, baking]}
                />
                <Person
                    name = "Kyle"
                    age = "16"
                    hobbies = {[gaming, skiing]}
                />
    </div>)
}