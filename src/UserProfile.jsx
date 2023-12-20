import { useLoaderData } from 'react-router-dom'
let personObjectArray = [
{
    name: 'Brit',
    hobby: 'Being Outside',
    funFact: 'I love Summer'
},
{
    name: 'Cody',
    hobby: 'Flag Football',
    funFact: 'I have a big head.'
},
{   name: 'Evan',
    hobby: 'Climbing',
    funFact: 'I climb.'

}

]


function UserProfile(){

    let theNumber = useLoaderData()
    return (
        <div>
            <h2>Name: {personObjectArray[theNumber].name}</h2>
            <h3>Hobby: {personObjectArray[theNumber].hobby}</h3>
            <h3>Fun Fact: {personObjectArray[theNumber].funFact}</h3>
        </div>
    )
}
export default UserProfile