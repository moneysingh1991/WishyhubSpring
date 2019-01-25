// Create main  item

function createMainItem(image_link,item_desc, item_title, item_Author, item_Date) {
    stringRet =  '<div class="main_item">' 
    + '<div class="main_item_top1 bottom-border"> <div class= "left" ><div class= "left bold">Author :  </div> <div class="right" id="main_item_author"> '+item_Author+' </div></div> <div class="right"><div class= "left bold"> Published on :  </div> <div class="right" id="main_item_Date"> '+item_Date+'</div>  </div></div> '
    + '<div class="main_item_top1"> <div class="right" ><a   class="small"  onclick="editPopup(modal_popup)"> <img class="icon" src="img/edit.svg"></img> </a><a   class="small"  onclick="deletePost()"> <img class="icon" src="img/delete.svg"></img> </a></div></div>'
  
    + '<div class="main_item_title left">  '+item_title+' </div>'
    + '<div class="main_item_top2"> <div class="left"> <Button class="button medium" id="main_item_Prev" onclick="goToPrev(modal_popup)"> Prev </Button> </div>  <div class="right"> <Button class="button medium" id="main_item_Prev" onclick="goToNext(modal_popup)"> Next </Button> </div></div> '
    +' <div class="main_item_img_container"><img class="main_item_img" src='+image_link+' alt="Italian Trulli"></div> ' 
    + '<div class="main_item_content"><p class="paragraph"> ' + item_desc + '</p></div>'
   
   
 + '</div>';
    return stringRet;
}

/*
Create Modal which shows in middle of screen

param1: modal-id , to create new modal always give unique id 
param2: modal content-id where u want to add content


*/

function createModal(modalId, modalContentId, modal_title) {
    
    var modal = '<div id= '+ modalId +' class="modal">'
    +'<div class="modal-content" >'
    +'<div class="container-verticle"> <div id= '+ modal_title +' style="float: left;" ></div>' 
    + ' <div  style="float: right;" ><button  class="button small"  onclick="close_popup('+modalId+')">Close</button></div>'
    + '</div>'
     +'<div id= '+ modalContentId +' class="container" > </div>'
      
    +'</div></div>';

    document.body.innerHTML += modal;
    
  }



/*
To add something in nav bar add in this function
return navigation content
*/

function getNavBarContent() {
    var navbar = '<div class="left width-70"><a href="">Home</a>'+
    ' <div class="search-container right"><input id="id_main_search" onkeyup="searchFunction()" type="text" placeholder="Search.." name="search">'+
      '<button type="submit" ><img src="img/search.svg"></button></div></div>'+
     '<div class="nav-menu right">'+
      ' <div onclick="showService(1)" class="dropdown"> Services'+
    '<div id="addService" class="dropdown-content">'+
     
    
    '</div>' +
    '</div>'+
     
      '<a href="#about">Project</a><a href="#about">About</a><a href="#contact">Contact</a></div>';
    return navbar;
}

// this is login popup content
function getloginPopupContent() {
  loginPop =  '<div class="container"> <label for="uname"><b>Username</b></label>'
   + ' <input type="text" placeholder="Enter Username" name="uname" required>'

    + '<label for="psw"><b>Password</b></label> <input type="password" placeholder="Enter Password" name="psw" required>'
        
    + '<button class="button large" type="submit">Login</button>'
  + '  <label>  <input type="checkbox" checked="checked" name="remember"> Remember me </label>'
  + '</div>';

    return loginPop;
}



// this is create  or edit item content
function getEditPopupContent(valueArr) {

	edit = true;

// if valueArr have all key value as empty string theat mean its new posting 
//otherwise its editing of existing posting 
	if (valueArr["author"] == "") {
		edit = false;
	} 
	

  loginPop =  '<div> <label for="aname"><b>Author</b></label>'
   + ' <input class="popup_input" type="text" value= " '+ valueArr["author"]+'" placeholder="Enter Author Name" name="author_input" required>'
    + '<label for="title"><b>Title</b></label> <input class="popup_input" type="text" value= " '+ valueArr["title"]+'" placeholder="Enter title" name="title_input" required>'
   
    + '<label for="title"><b>Link</b></label> <input class="popup_input" type="text" value= " '+ valueArr["link"]+'" placeholder="Enter Link" name="link_input" required>'
    + getFileUploader()
    + '<div class = "padding-top-small"><textarea  onkeydown="textareaKeydown()" id = "textAreaid" class= "textArea" placeholder="Enter Code" name="textarea_input">  '+ valueArr["detail"]+'</textarea></div>'
    + '<div class = "padding-top-large"><button class="button medium fullwidth" onclick="itemSave('+ edit+')" type="submit">Save</button></div>'
 
  + '</div>';

    return loginPop;
}

/*
This is file uploader 
can be added to any div 
*/

function getFileUploader() {
    return '<div class = "padding-top-small"><label><b>Upload Image</b></label> <input type="file" multiple="" placeholder="Enter title" name="UploadFiles_input[]" /> <button onclick="upload()" type="submit">Upload</button></div>'
    +'<div class = "padding-top-small" id="file-list-display"></div>';
}

/*
Create Browser to get all files
*/
function getBrowse() {
   loadFileLinks();
  var image_link;
  var div = '<div class="div_grid_view" >';
  var img = '';
  for(var i = 0; i < gloabl_file_browse_array.length; i++) {
    img += '<div class="item_browse"><img class="browse_item_img" src='+gloabl_file_browse_array[i]+'></div>';
  }
  div += img + '</div>';
  return div;

}
