import Card from './components/Card';
import './App.css';

const contacts = [
  {
    id: 1,
    name: "Hinata",
    img_src: "https://avatarfiles.alphacoders.com/110/thumb-1920-110985.jpg",
    phone_num: "+123 456 789", 
    email: "h@hinata.com"
  }, 
  {
    id: 2,
    name: "Shikamaru",
    img_src: "https://avatarfiles.alphacoders.com/262/thumb-1920-262987.jpg",
    phone_num: "+123 456 780",
    email: "s@shikamaru.com"
  }, 
  {
    id: 3,
    name: "Kakashi",
    img_src: "https://avatarfiles.alphacoders.com/946/thumb-1920-94614.jpg",
    phone_num: "+123 456 781", 
    email: "k@kakashi.com"
  }
]

function createCard(contact){
  return (
    <Card 
      key={contact.id}
      name={contact.name}
      img_src={contact.img_src} 
      phone_num={contact.phone_num} 
      email={contact.email}
    />
  );
}


function App() {
  return (
    <div className="App">
      {/* <Card name={contacts[0].name} img_src={contacts[0].img_src} phone_num={contacts[0].phone_num} email={contacts[0].email} />
      <Card name={contacts[1].name} img_src={contacts[1].img_src} phone_num={contacts[1].phone_num} email={contacts[1].email} />
      <Card name={contacts[2].name} img_src={contacts[2].img_src} phone_num={contacts[2].phone_num} email={contacts[2].email} /> */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
