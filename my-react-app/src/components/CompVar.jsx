const CompVar = () => {

    let a = 1;
    let b = 2;
    let c = 50;

    const connor = {
        name: "connor",
        age: 24,
        height: 165 
    }



    return (
        <div>
        <h1>I AM FUCKING MASSIVE, THE OTHER HEADERS LOOK AT MY HEIGHT IN ALL ITS GLORY AND BOW TO IT. FEAR ME, FOR I AM TRULY THE MIGHTIEST</h1>
        <p>{a} + {b} is equal to {a + b}  </p>
        <p>but {a} + {b} X by {c} is {(a + b) * c}</p>

        <p> The owner of this page is {connor.name}. His age is {connor.age}, and his height is {connor.height}cm </p>

        </div>
        

    );

};

export default CompVar;