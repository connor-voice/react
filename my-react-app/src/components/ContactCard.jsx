const ContactCard = ({name, number, imageUrl, quote, address}) => {
    return (
        <div class="animal">
            <p>Name is {name}</p>
            <p>Phone Number is {number}</p>
            <img src={imageUrl} alt="Image of cute animal" class="animalpic"/>
            <p>Quote is {quote}</p>
            <p>Address is {address}</p>
        </div>
      );
}
 
export default ContactCard;