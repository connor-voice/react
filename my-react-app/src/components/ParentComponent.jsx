import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    return ( 
    <div>
        <p> this is a parent component </p> 
        <ChildComponent/>
    </div>
    );     
}
 
export default ParentComponent;