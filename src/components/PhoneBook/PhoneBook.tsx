import { memo, useCallback, useState } from 'react';

// OBJECTIVE: useCallback is used to cache an instance of a function.
// OBJECTIVE 2: Also avoids rendering a child

// EXAMPLE: We have a phone number that we call very often, instead of calling continuously we will save it in a contact (we use the same contact unless the number changes).

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
  console.log(`Rendering contact ${contact.name}`);

  return (
    <div>
      <h2>{contact.name}</h2>
      <h3>{contact.phone}</h3>
      <button onClick={() => onCall(contact.name)}>Call</button>
    </div>
  );
});

export function PhoneBook() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: 'Alice', phone: '123-123-123' },
    { id: 2, name: 'Peter', phone: '085-234-456' },
    { id: 3, name: 'Mary Jane', phone: '222-122-777' },
  ]);
  const [status, setStatus] = useState<string>(' ');
  const makeCall = useCallback(
    (name: string) => setStatus(`Calling to ${name}`),
    []
  );
  function addContact() {
    const newContact = {
      id: contacts.length + 1,
      name: `Contact ${contacts.length + 1}`,
      phone: `${Math.floor(1000000) + Math.random() * 999999}`,
    };
    setContacts([...contacts, newContact]);
  }
  return (
    <div>
      <h1>Phone Book</h1>
      <h2>{status}</h2>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}
      <button onClick={addContact}>New Contact</button>
    </div>
  );
}
