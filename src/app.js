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
 
      <div class ="card w-full sm:flex ">
        <div class = "card_column_left flex-inline">
            <div class = "card_column_left_image flex-none">
            </div>
        </div>
       <div class="p-4 pl-6 flex flex-col">
           <div>
              <h2>${ contact.name }</h2>
              <h3>${ contact.company }</h3>
              <h4>${ contact.phone }</h4>
              <p>${ contact.notes }</p>
           </div>

          <div class="flex card_bottom pin-b pin-r card_column_bottom">
              <div class="w-2/5 float:left">
                  <span style="font-size: 2em; color: black; margin-right:10px;">
                  <a href="mailto:${ contact.email }"><i class="fas fa-envelope fa-w-16"></i></a>
                  </span>
                  <span style="font-size: 2em; color: black;">
                  <a href="https://www.twitter.com/${ contact.twitter}"><i class="fab fa-twitter"></i></a>
                  </span>
              </div>
              <div class="w-3/5 style = "float:right">
                  <button id = "button_card_delete" style="display:none" class="button_remove card_button bg-red hover:bg-red-dark text-white py-2 px-3" onclick="deleteContact(${contact.id})">Delete</button>      
                  <button id = "button_card_edit" style="display:none" class="button_edit card_button bg-green hover:bg-green-dark text-white py-2 px-3" onclick="editContact(${contact.id})">Edit</button>      
              </div>
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
