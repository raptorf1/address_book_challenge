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
 
               <div class="flex mb-4" id:"card">
                   <div class="w-2/5 image1 p-3">
                      <img src = "http://www.stefankarlberg.se//bilder_craft/person.jpg" class = "image_person">
                   </div>
                   <div class="w-3/5 p-3 pr-4">
                      <h2>${ contact.name }</h2>
                      <h4>${ contact.company }</h4>
                      <h5>${ contact.phone }</h5>
                      <h6><a href="mailto:${ contact.email }">${ contact.email }</a></h6>
                      <p>${ contact.notes }</p> 
                        <span style="font-size: 1.5em; color: black;">
                          <a href="https://www.twitter.com/${ contact.twitter}" target="_blank">
                          <i class="fab fa-twitter"></i>
                          </a>
                        </span
                    </div>
               
                    <div class = "btn_delete23">
                      <button id = "button_card_delete" style="display:none" class="button_remove bg-red hover:bg-red-dark text-white py-1 px-2" onclick="deleteContact(${contact.id})">Delete</button>      
                      <button id = "button_card_edit" style="display:none" class="button_edit bg-green hover:bg-green-dark text-white py-1 px-2" onclick="editContact(${contact.id})">Edit</button>      
                    </div>
              </div  
      
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
