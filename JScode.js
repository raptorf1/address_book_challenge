const idEditContact = document.getElementById("edit-contact");
const idDeleteContact = document.getElementById("delete-contact");
const idNewContactForm = document.getElementById("new-contact-form");
const idAddContactHide = document.getElementById("add-contact-hide");
const idAddContact = document.getElementById("add-contact");
const classButtonRemove = document.getElementsByClassName("button_remove");
const classButtonEdit = document.getElementsByClassName("button_edit");
const localStorGetItemJSON = JSON.parse(window.localStorage.getItem('contacts'));

SetItemLocalStorage = () => {
  window.localStorage.setItem('contacts', JSON.stringify(localStorGetItemJSON));
}

Button_visibility_Delete = () => {
  for (i = 0; i < classButtonRemove.length; i++) {
    classButtonRemove.item(i).style.display = "block";
  }
    idDeleteContact.style.background = "#a7a7a7";
    idDeleteContact.style.color = "white";
};

Button_visibility_Edit = () => {
  for (i = 0; i < classButtonEdit.length; i++) {
    classButtonEdit.item(i).style.display = "block";
  }
    idEditContact.style.background = "#a7a7a7";
    idEditContact.style.color = "white";   
};

showAddContactForm = () => {
  idEditContact.style = "display: none";
  idDeleteContact.style = "display: none";
  idNewContactForm.style = "display: block";
  idAddContactHide.style = "display: inline";
  let inputNameForm = document.getElementById("contact-name");
  inputNameForm.focus();
  inputNameForm.select();

  for (i = 0; i < classButtonEdit.length; i++) {
    classButtonEdit.item(i).style.display = "none";
  }

  for (i = 0; i < classButtonRemove.length; i++) {
    classButtonRemove.item(i).style.display = "none";
  }
};

hideShowAddContactForm = () => {
  idNewContactForm.style = "display: none";
  idAddContactHide.style = "display: none";
  window.location.reload(true);
};

function deleteContact(id){
  for (let i = 0; i < localStorGetItemJSON.length; i++) {
    if (localStorGetItemJSON[i].id == id) {
      localStorGetItemJSON.splice(i ,1);
      SetItemLocalStorage();
      window.location.reload(true);
    }
  }
};

function editContact(id) {
  idAddContact.style = "display: none";
  idEditContact.style = "display: none";
  idNewContactForm.style = "display: block";

  for (let i = 0; i < localStorGetItemJSON.length; i++) {
    if (localStorGetItemJSON[i].id == id) {
      document.getElementById("contact-name").value = localStorGetItemJSON[i].name;
      document.getElementById("contact-company").value = localStorGetItemJSON[i].company;
      document.getElementById("contact-email").value = localStorGetItemJSON[i].email;
      document.getElementById("contact-phone").value = localStorGetItemJSON[i].phone;
      document.getElementById("contact-twitter").value = localStorGetItemJSON[i].twitter;
      document.getElementById("contact-notes").value = localStorGetItemJSON[i].notes;
      localStorGetItemJSON.splice(i ,1);
      alert("You selected to edit a contact. Please do NOT refresh your browser and make sure to push the 'Save Contact' button, even if you do not want to make changes to the contact. Otherwise the contact will be DELETED!")
      SetItemLocalStorage();

      for (i = 0; i < classButtonEdit.length; i++) {
        classButtonEdit.item(i).style.display = "none";
        }

      for (i = 0; i < classButtonRemove.length; i++) {
        classButtonRemove.item(i).style.display = "none";
        }

      idDeleteContact.style = "display: none";
      topFunction()
      }
    }  
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const idMyBtn = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    idMyBtn.style.display = "block";
  } else {
    idMyBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
