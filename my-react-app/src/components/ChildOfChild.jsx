import ChildOfChildOfChild from "./ChildOfChildOfChild";

const ChildOfChild = () => {
    return (
       <div>
           <p> I am a child of the child</p>
           <ChildOfChildOfChild/>
       </div> 

      );
}
 
export default ChildOfChild;