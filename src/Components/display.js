const Profile =()=>{
    return(
        <img className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="profile image"
        width={100}
        height={100}
        
        
        
        />
    );
}
const Gallery=()=>{
    return(
        <div>
             <Profile/>
             <Profile/>
             <Profile/>
        </div>

   
        
    );

}

export default Gallery;