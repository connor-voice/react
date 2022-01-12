import ChildOfChild from "./ChildOfChild";

const ChildComponent = () => {
    return (
        <div>
            <p> this is a child component </p>
            <ChildOfChild/>
        </div>
    );
};
 
export default ChildComponent;