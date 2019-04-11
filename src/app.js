const renderContacts = () => {
    const storage = window.localStorage
    // Read all the contacts from the storage
    const contacts = JSON.parse(storage.getItem('contacts'))
  
    // Select the container we will use to list the contacts 
    let div = document.querySelector('#contact-list')
  
    if (contacts) {
      div.innerHTML = ''
  
      // render the contacts
      const ul = document.createElement('ul')
  
      // For every contact in our array of contacts, we will
      // create a li element that will contain a card with
      // all the information of the contact
      contacts.forEach(contact => {
        let li = document.createElement('li')
        li.innerHTML = `
        <div class="max-w-md w-full lg:flex" id:"card">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://cdn1.comparetv.com.au/wp-content/uploads/2016/10/phone_hp.jpg'); height: 100px; width: 100px">
        </div>
        <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-grey-dark flex items-center">
              <svg class="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              ID: ${contact.id}
            </p>
            <div class="content">
              <h5>${ contact.name }</h5>
              <h6>${ contact.company }</h6>
              <p>${ contact.notes }</p> 
              <a href="mailto:${ contact.email }">Send Email</a> | 
              <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
              <br>
              <br>
              <button class="bg-red hover:bg-red-dark text-white font-bold py-1 px-1 border border-blue-darker rounded-full" onclick="deleteContact(${contact.id})">Remove</button>      
              </div>
        </div>
      </div>     
      
      `
        // Add the contact's li to the unordered list we created earlier
        ul.appendChild(li)
      })
  
      // Lastly, append the list to the contact-list container.
      div.appendChild(ul) 
    } else { 
      div.innerHTML = '<img src="nocontacts.gif" alt="You have no contacts in your address book"</img>' 
    }
  }


document.addEventListener("DOMContentLoaded", () => {
    renderContacts()
    const addContactForm = document.querySelector("#new-contact-form")
    addContactForm.addEventListener("submit", event => {
        event.preventDefault()
        const storage = window.localStorage
        const {
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements

        
        const contact = {
            id: Date.now(),
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }

        console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
           
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))

             

        renderContacts()
        window.location.reload(true)
    })
})
