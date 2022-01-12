import ContactCard from "./ContactCard";

const ContactCardManager = () => {
    return (
        <div>
        <ContactCard name="Cute Cat" number="12345678" imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/220px-VAN_CAT.png' quote="Meow" address="321 Whisker Street"></ContactCard>
        <ContactCard name="Cute Dog" number="12345678" imageUrl='https://pbs.twimg.com/profile_images/2294813930/7l3jcln9kbdanlwi1hcb_400x400.jpeg' quote="Woof" address="143 Bark Street"></ContactCard>
        <ContactCard name="Cute Otter" number="12345678" imageUrl='https://th-thumbnailer.cdn-si-edu.com/v5rTyWGeBFrwPa9ZAOqtHKI9m3E=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/01/a8/01a82275-e542-47c5-aa79-1af3caecdac4/gettyimages-1010735052.jpg' quote="EORRR EORR" address="Icy Places"></ContactCard>
        <ContactCard name="Cute Axelotl" number="12345678" imageUrl='https://s26162.pcdn.co/wp-content/uploads/2020/09/Pink_1.jpg' quote="???" address="Under de ocean"></ContactCard>
        <ContactCard name="Cute Monkey" number="12345678" imageUrl='https://cdn.pixabay.com/photo/2020/07/21/01/33/cute-5424776_1280.jpg' quote="OOH OOH AAH AH" address="Banana Avenue"></ContactCard>
        </div>
        
      );
}
 
export default ContactCardManager;