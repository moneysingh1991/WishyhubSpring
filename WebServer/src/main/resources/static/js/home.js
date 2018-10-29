var global_item_index_Count = 0;
var gloabl_array_item = [];
var global_site_domain = "http://localhost:8080/webAppWishyHub";
global_site_domain = "http://localhost:9080"
global_site_domain = "http://192.168.1.5:9080"

$(document).ready(function(){
    $("button").change(function(){
        alert("The text has been changed.");
    });
    
});

document.getElementsByName("UploadFiles_input[]").onchange = function () {
    alert();
};
/*
This function is when user select side item
*/
function selectSideMenu(val) {

     var title = document.getElementById("page_selection_title");
     title.innerHTML = val.innerHTML;
    
    //title.innerHTML = getContent(val.innerHTML.toUpperCase());

}


function getContent(val) {
    var item = {"ONE":"ONE page content","TWO":"TWO page content"};

    return item[val] ? item[val] : "Content" ;
}

/*
Dynamic search function for left side bar 
*/
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// this is content for footer
function getFooterContent() {
    return '<p align="center">Maninderpal Singh </p>';

}


// get current date
function getCurrentDate() {

  var item_Date = new Date();
    //item_Date.setDate(new Date().getDate());
    return  (item_Date.getMonth()+1) +'/'+ item_Date.getDay() +'/'+ item_Date.getFullYear();
  
}


// this function will get main content
function getMainContent(index) {

  if(!index) {
    index = 0;
  } 
 

 
    gloabl_array_item.push({image_link:"https://i.imgur.com/uFiL7hq.jpg",
              item_desc:"This is item 1 ",
              item_title:"Introduction to programming",
              item_Author:"Author: " +"Maninderpal Singh", 
              item_Date:getCurrentDate()
    });

    gloabl_array_item.push({image_link:"https://i.imgur.com/uFiL7hq.jpg",
              item_desc:"This is item 2 ",
              item_title:"Introduction to JAVA",
              item_Author:"Author: " +"Gery Singh", 
              item_Date:getCurrentDate()
    });

  gloabl_array_item.push({image_link:"https://i.imgur.com/uFiL7hq.jpg",
              item_desc:"This is item 3 ",
              item_title:"Introduction to C++",
              item_Author:"Author: " +"AMAR Singh", 
              item_Date:getCurrentDate()
    });
    
    gloabl_array_item.push({image_link:"https://i.imgur.com/uFiL7hq.jpg",
              item_desc:"This is item 4 ",
              item_title:"Introduction to Python",
              item_Author:"Author: " +"Amar Jot", 
              item_Date:getCurrentDate()
    });
    var stringRet = '';
    for(var i = 0; i < 1; i++) {
        stringRet = stringRet + createMainItem(gloabl_array_item[index]["image_link"],gloabl_array_item[index]["item_desc"], gloabl_array_item[index]["item_title"], gloabl_array_item[index]["item_Author"], gloabl_array_item[index]["item_Date"]);
    }

   
    return stringRet ;
}

// Create main  item

function createMainItem(image_link,item_desc, item_title, item_Author, item_Date) {
    stringRet =  '<div class="main_item">' 
    + '<div class="main_item_top1"> <div id="main_item_author"> '+item_Author+' </div> <div id="main_item_Date"> '+item_Date+'</div>  </div> '
    
    + '<div class="main_item_title">  '+item_title+' </div> '
    +' <div class="main_item_img_container"><img class="main_item_img" src='+image_link+' alt="Italian Trulli"></div> ' 
    + '<div class="main_item_content"> ' + item_desc + '</div>'
    + '<div class="main_item_top1"> <Button  class="main_item_Button id="main_item_edit" onclick="editPopup(modal_popup)"> Edit </Button></div> '
     + '<div class="main_item_top2"> <div class="main_item_div_left"> <Button class="main_item_Button id="main_item_Prev" onclick="goToPrev(modal_popup)"> Prev </Button> </div>  <div class="main_item_div_right"> <Button class="main_item_Button id="main_item_Prev" onclick="goToNext(modal_popup)"> Next </Button> </div></div> '
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
    var navbar = '<a class="active" href="/home">Home</a>'+
    ' <div class="search-container"><form action="/action_page.php"><input type="text" placeholder="Search.." name="search">'+
      '<button type="submit"><i class="fa fa-search"></i> Search</button></form></div>'+
     '<div class="nav-menu">'+
      ' <div class="dropdown"> Service'+
    '<div class="dropdown-content">'+
      '<a onclick="uploadService()">Upload</a>'+
      '<a href="#">Link 2</a>'+
      '<a href="#">Link 3</a>'+
    '</div>' +
    '</div>'+
     
      '<a href="#about">Project</a><a href="#about">About</a><a href="#contact">Contact</a></div>';
    return navbar;
}

// pop open based on param
// if param = "edit" then edit popup open
function openPopup(id) {

        var modal = document.getElementById(id.id);
        modal.style.display = "block";
}

function editPopup(id) {
     document.getElementById('modal-title').innerHTML = 'Edit Page';
        document.getElementById('modal-content-main').innerHTML = getEditPopupContent();
        openPopup(id);
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
function getEditPopupContent() {
  loginPop =  '<div> <label for="aname"><b>Author</b></label>'
   + ' <input type="text" placeholder="Enter Author Name" name="author_input" required>'
    + '<label for="title"><b>Title</b></label> <input type="text" placeholder="Enter title" name="title_input" required>'
   + getFileUploader()
    + '<div class = "padding-top-small"><textarea id = "textAreaid" class= "textArea" placeholder="Enter Code" name="textarea_input"> </textarea></div>'
    + '<div class = "padding-top-large"><button class="button medium fullwidth" onclick="itemSave()" type="submit">Save</button></div>'
 
  + '</div>';

    return loginPop;
}

// Save item on click on save
function itemSave() {
  
  var author = $("[name=author_input]").val();
  var title = $("[name=title_input]").val();
  //var image =  $("[name=UploadImage_input[]]")[0].files;
  var image = document.getElementsByName("UploadImage_input[]")[0].files;
  var textArea =  $("[name=textarea_input]").val();
  var data = {author: author, title:title, image:image, textArea:textArea};

var url = global_site_domain + "/post";
  $.ajax({
    type:"post",
    url: url,
    data:data,

    success: function(result){
        console.log(result);
    }

  });
  }

function upload() {
   
    var files = document.getElementsByName("UploadFiles_input[]")[0].files;
    var fileListDisplay = document.getElementById('file-list-display');
    
    fileListDisplay.innerHTML = '';
    var table = document.createElement('TABLE');
    var table_tr = document.createElement('TR');
    var table_td = document.createElement('TD');
    var table_th = document.createElement('TH');
    var node = document.createTextNode("File Name");
    
    table_tr.innerHTML = '<th> Name </th> <th> Size </th> <th> Status </th>';

   // table_tr.appendChild(document.createElement('TH').appendChild(document.createTextNode("Size")));
    //table_tr.appendChild(document.createElement('TH').appendChild(document.createTextNode("Status")));
    table.appendChild(table_tr);
    
   
    
     fileListDisplay.appendChild(table);
    for (var i = 0; i < files.length; i++) {
    	sendFile(files[i],table);
       
    }
   
}

function sendFile(file, table) {
 console.log("uploading");
  var url = global_site_domain + "/upload";
  var formData = new FormData(file);
  formData.set('files', file);
   formData.append("extraField", "This is some extra data, testing");
  $.ajax({
    type:"post",
    enctype: 'multipart/form-data',
    url: url,
    data:formData,
    cache: false,
    contentType: false,
    processData: false,
    async:true,

     success: function(result){
        // comment hello
        console.log(result);
        var table_tr = document.createElement('TR');
        table_tr.innerHTML = '<td>'+  file.name +'</td>';
        table_tr.innerHTML += '<td>'+  Math.ceil(file.size/1024) +' KB</td>';
        table_tr.innerHTML += '<td> uploaded </td>';
        table.appendChild(table_tr);
    },
    error:function(result) {
      console.log("Error in file uploading");
        var table_tr = document.createElement('TR');
        table_tr.innerHTML = '<td>'+  file.name +'</td>';
        table_tr.innerHTML += '<td>'+  Math.ceil(file.size/1024) +' KB</td>';
        table_tr.innerHTML += '<td> Failed </td>';
        table.appendChild(table_tr);
    }

  });
  
  }
// pop close based on param
// if param = "edit" then edit popup open
function close_popup(id) {
  
        var modal = document.getElementById(id.id);
         if(modal) {
               modal.style.display = "none";
         } else {
             console.log("close_pop() : id not exist");
         }
       
    
}

function goToPrev(id) {
  var div_main = document.getElementById('main_top');
  if(global_item_index_Count > 0) {
       global_item_index_Count -=1;
      div_main.innerHTML = getMainContent(global_item_index_Count);
  }
      
}


function getFileUploader() {
    return '<div class = "padding-top-small"><label><b>Upload Image</b></label> <input type="file" multiple="" placeholder="Enter title" name="UploadFiles_input[]" /> <button onclick="upload()" type="submit">Upload</button></div>'
    +'<div class = "padding-top-small" id="file-list-display"></div>';
}

function uploadService() {
    if(!document.getElementById("upload_modal")) {
        createModal("upload_modal", "upload_modal_container", "upload_modal_title");
        
    } 
   
   document.getElementById('upload_modal_title').innerHTML = 'Upload';
   document.getElementById('upload_modal_container').innerHTML = getFileUploader();
    openPopup({id:"upload_modal"});
}
function goToNext(id) {
  var div_main = document.getElementById('main_top');
 
      if(gloabl_array_item.length > global_item_index_Count) {
       global_item_index_Count +=1;
      div_main.innerHTML = getMainContent(global_item_index_Count);
  }
}




