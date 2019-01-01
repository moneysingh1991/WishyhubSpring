// upload service
  function uploadService() {

    // create popup
      if(!document.getElementById("upload_modal")) {
          createModal("upload_modal", "upload_modal_container", "upload_modal_title");
          
      } 
     
     // Add element to popup
     document.getElementById('upload_modal_title').innerHTML = 'Upload';
     document.getElementById('upload_modal_container').innerHTML = getFileUploader();

     //open popup
      openPopup({id:"upload_modal"});

  }

// new post service , this pop is simmilar to edit pop up
  function newPostService() {

    if(document.getElementById("modal-content-main")) {
      document.getElementById('modal-title').innerHTML = 'New Post';

       var valueArr = {author:"",
       title:"",
       link:"",
       upload:"",
       detail:""
      }
       document.getElementById('modal-content-main').innerHTML = getEditPopupContent(valueArr);

       openPopup(modal_popup);
    } else {
      console.log("modal-content-main not exist, error at newPostService()");
    }
    
  }

/*
This is browse Service
which will show all files to copy link
*/
  function browseService() {
    // create popup
      if(!document.getElementById("browse_modal")) {
          createModal("browse_modal", "browse_modal_container", "browse_modal_title");
          
      } 
     
     // Add element to popup
     document.getElementById('browse_modal_title').innerHTML = 'Browse';
     document.getElementById('browse_modal_container').innerHTML = getBrowse();

     //open popup
      openPopup({id:"browse_modal"});
  }