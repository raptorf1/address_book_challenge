Button_visibility_Delete = () => {
  let visDel = document.getElementsByClassName("button_remove");
  for (i = 0; i < visDel.length; i++) {
  visDel.item(i).style.display = "block";
  }
    document.getElementById("delete-contact").style.background = "#a7a7a7";
    document.getElementById("delete-contact").style.color = "white";
};



Button_visibility_Edit = () => {
  let visEdit = document.getElementsByClassName("button_edit");
  for (i = 0; i < visEdit.length; i++) {
  visEdit.item(i).style.display = "block";
  }
    document.getElementById("edit-contact").style.background = "#a7a7a7";
    document.getElementById("edit-contact").style.color = "white";
   
};

showAddContactForm = () => {
  document.getElementById("edit-contact").style = "display: none";
  document.getElementById("delete-contact").style = "display: none";
  document.getElementById("new-contact-form").style = "display: block";
  document.getElementById("add-contact-hide").style = "display: inline";
  let inputNameForm = document.getElementById("contact-name");
  inputNameForm.focus();
  inputNameForm.select();

  let btnEd = document.getElementsByClassName("button_edit");
  for (i = 0; i < btnEd.length; i++) {
  btnEd.item(i).style.display = "none";
  }

  let btnRmv = document.getElementsByClassName("button_remove");
  for (i = 0; i < btnRmv.length; i++) {
  btnRmv.item(i).style.display = "none";
  }

};

hideShowAddContactForm = () => {
  document.getElementById("new-contact-form").style = "display: none";
  document.getElementById("add-contact-hide").style = "display: none";
  window.location.reload(true);
};

function deleteContact(id){
  let conDel = JSON.parse(window.localStorage.getItem('contacts'))
  for (let i = 0; i < conDel.length; i++) {
    if (conDel[i].id == id) {
    conDel.splice(i ,1);
    window.localStorage.setItem('contacts', JSON.stringify(conDel))
    window.location.reload(true);
    }
  }
};

function editContact(id) {
  document.getElementById("add-contact").style = "display: none";
  document.getElementById("edit-contact").style = "display: none";
  document.getElementById("new-contact-form").style = "display: block";

  let conEdit = JSON.parse(window.localStorage.getItem('contacts'));
  for (let i = 0; i < conEdit.length; i++) {
    if (conEdit[i].id == id) {
      document.getElementById("contact-name").value = conEdit[i].name;
      document.getElementById("contact-company").value = conEdit[i].company;
      document.getElementById("contact-email").value = conEdit[i].email;
      document.getElementById("contact-phone").value = conEdit[i].phone;
      document.getElementById("contact-twitter").value = conEdit[i].twitter;
      document.getElementById("contact-notes").value = conEdit[i].notes;
      conEdit.splice(i ,1);
      alert("You selected to edit a contact. Please do NOT refresh your browser and make sure to push the 'Save Contact' button, even if you do not want to make changes to the contact. Otherwise the contact will be DELETED!")
      window.localStorage.setItem('contacts', JSON.stringify(conEdit));

      let bEd = document.getElementsByClassName("button_edit");
      for (i = 0; i < bEd.length; i++) {
        bEd.item(i).style.display = "none";
        }

      let bRem = document.getElementsByClassName("button_remove");
      for (i = 0; i < bRem.length; i++) {
        bRem.item(i).style.display = "none";
        }

      document.getElementById("delete-contact").style = "display: none";     
      }
    }  
};
