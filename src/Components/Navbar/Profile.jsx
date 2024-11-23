import { useState, useContext, useEffect } from "react";
import { ProfileContext } from "../../profilecontext";
function Profile(){
    const [username, setUserName] = useState(useContext(ProfileContext));
	useEffect(()=>{
		console.log(username)
		
	},[])
    return(
        <>
            <div className='relative h-full mt-3 profile hidden' onMouseLeave={()=>{
          document.querySelector('.profile').style.display = "none"
        }}>
					<div className='absolute bg-white w-48 font-inter -right-2 text-base  text-gray-600' style={{top:'27px',zIndex:'999',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}} >
						{/* sections 1 */}
            			<div className='flex border-b border-gray-400 items-center pl-4 group' style={{height:'45px'}}>
		    	    	    <div >
		    	    		    <a href = "#" className=' no-underline  hover:no-underline hover:text-black'>{username}</a>
		    	    	  	</div>
		    	    	</div>
						<div className='flex border-b border-gray-400 items-center pl-4 group hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div >
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">Home</a>
		    	    	  	</div>
		    	    	</div>
						{/* sections 2 */}
						<div className='group flex border-b border-gray-400 items-center pl-4 hover:text-purple-600 hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">My Bookmarks</a>
		    	    	  	</div>
		    	    	</div>
						{/* section 3 */}
						<div className='group flex border-b border-gray-400  items-center pl-4 hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">Edit Resume</a>
		    	    	  	</div>
		    	    	</div>
						{/* section 4 */}
						<div className='group flex border-b border-gray-400   items-center pl-4  hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">Safety Tips</a>
		    	    	  	</div>
		    	    	</div>
						{/* section 5 */}
						<div className='group flex border-b border-gray-400   items-center pl-4  hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">Help Center</a>
		    	    	  	</div>
		    	    	</div>
						{/* section 6 */}
						<div className='group flex items-center pl-4  hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">More</a>
		    	    	  	</div>
		    	    	</div>

					</div>
				</div>
        </>
    )
}
export default Profile;