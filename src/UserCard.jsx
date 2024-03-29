 const Userdata = [{
    name : "kavin",
    city : "thanjavur",
    description : "Data Scientist",
    skills : ["python","SQL","TensorFlow","Seaborn"],
    online : false,
    profile : "images/1.webp",
},
{
    name : "Reena",
    city : "Tirunelveli",
    description : "Back End Developer",
    skills : ["NodeJs","Express","mongoDp","ReactJS"],
    online : true,
    profile : "images/2.jpg",
},
{
    name : "Teena",
    city : "Namakkal",
    description : "Full Stock Developer",
    skills : ["Html","Css","Javascript","Angular","Node","Express","Oracle"],
    online : false,
    profile : "images/3.jpg",
},
{
    name : "Teena",
    city : "Namakkal",
    description : "Full Stock Developer",
    skills : ["Html","Css","Javascript","Angular","Node","Express","Oracle"],
    online : false,
    profile : "images/3.jpg",
},
{
    name : "Teena",
    city : "Namakkal",
    description : "Full Stock Developer",
    skills : ["Html","Css","Javascript","Angular","Node","Express","Oracle"],
    online : false,
    profile : "images/3.jpg",
},
];
    
function Card (props){
    return (
        <div className="cardContainer">
            <span className={props.online?"Pro online":"Pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src="images/3.jpg" alt="" />
            <h2>{props.name}</h2>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Follow</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill,index)=>(
                        <li key={index}>
                            {skill}
                         </li>
                    ))}
                </ul>
            </div>

        </div>
    )
 }
export const UserCard = () => {
  return (
    <> 
      { Userdata.map((User,index) => (
        <Card key = {index} name = {User.name} 
        city={User.city} 
        description={User.description} 
         online={User.online}
         profile={User.profile}
         skills={User.skills}  />
       )) } 
    </>
  )
}
