  var global_item_index_Count = 0;
  var gloabl_array_item = [];
  var global_site_domain = "http://localhost:8080/webAppWishyHub";
  global_site_domain = "http://localhost:9080"
  //global_site_domain = "http://192.168.1.5:9080"

  var global_total_uploaded_count = 1;

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
  function searchFunction() {
      var input, input1, filter, ul, li, a, i;
      input = document.getElementById("mySearch");
      input1 = document.getElementById("id_main_search");
      if(input1.value.length > 0) {
        input = input1;
      }
      
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

    if(!index || index < 0 || index > gloabl_array_item.length -1) {
      index = 0;
    } 
   
      var stringRet = '';
      for(var i = 0; i < 1; i++) {
          stringRet = stringRet + createMainItem(gloabl_array_item[index]["link"],gloabl_array_item[index]["detail"], gloabl_array_item[index]["title"], gloabl_array_item[index]["author"], gloabl_array_item[index]["date"]);
      }

      return stringRet ;
  }


  // pop open based on param
  // if param = "edit" then edit popup open
  function openPopup(id) {

          var modal = document.getElementById(id.id);
          modal.style.display = "block";
  }


  /*
  This function will open edit pop up
  and fill info in all filed according to currect item open.

  */
  function editPopup(id) {
       document.getElementById('modal-title').innerHTML = 'Edit Page';

       var valueArr = {author:gloabl_array_item[global_item_index_Count]["author"],
       title:gloabl_array_item[global_item_index_Count]["title"],
       link:gloabl_array_item[global_item_index_Count]["link"],
       upload:gloabl_array_item[global_item_index_Count]["upload"],
       detail:gloabl_array_item[global_item_index_Count]["detail"]
      }
       document.getElementById('modal-content-main').innerHTML = getEditPopupContent(valueArr);

       openPopup(id);
  }

  /*
  11/01/2018
   Method to handle  event on pressing some key on textArea
   */

  function textareaKeydown() {


  // handling tab key press event
      if (event.keyCode===9) {
       var v=this.value;
       s=this.selectionStart;
       e=this.selectionEnd;

       this.value=v.substring(0, s)+'\t'+v.substring(e);

       this.selectionStart=this.selectionEnd=s+1;

       return false;
      }
  }

  // Save item on click on save
  function itemSave(edit) {
    
    var author = $("[name=author_input]").val();
    var title = $("[name=title_input]").val();
    var link = $("[name=link_input]").val();
    //var image =  $("[name=UploadImage_input[]]")[0].files;

    var uploadImage = document.getElementsByName("UploadImage_input[]");

    if(uploadImage.length > 0){
      var file = document.getElementsByName("UploadImage_input[]")[0].files;
    }
    
    var textArea =  $("[name=textarea_input]").val();

    if( author == ""  || title == "" || textArea.length < 2) {
      alert("Enter all field mendatory filed");
      return;
  }

    var data = {author: author, title:title, link:link, image:file, textArea:textArea};

    if(edit) {
      gloabl_array_item[global_item_index_Count] = {link:link,
                detail:textArea,
                title:title,
                author:author, 
                date:getCurrentDate()
      };
    } else {
       gloabl_array_item.push({link:link,
                detail:textArea,
                title:title,
                author:author, 
                date:getCurrentDate()
      });
       global_item_index_Count = gloabl_array_item.length -1;
    }

    

    var localUrl = global_site_domain + "/post";

    var reposnse = ajaxRequest("post",localUrl,data, false);

    if(reposnse.error == false) {
        setMainContentInList();
      

    } else {
      console.log("Need to handle bad ajax request error");
      
      if (confirm("Server Error, You want to save Ofline") == true) {
          setMainContentInList();
      } 
    }

    //close popup with id = modal_pop
      close_popup({id:"modal_popup"});
  }

/*
This helper function will save update main item content 
*/
  function setMainContentInList() {
    var div_main = document.getElementById('main_top');
       
      if(gloabl_array_item.length > global_item_index_Count) {
             
                  div_main.innerHTML = getMainContent(global_item_index_Count);
            
        } else {
              alert("Index not valid")
        }   
  }

  /*
  Ajax request 
  return result 
  */
    function ajaxRequest(type,localUrl,data, async) {

      var finalResult = null;

      if(!(type || localUrl || data)) {
        console.log("One of the field is empty (type,url,data) in ajaxRequest() , home.js")
        return {error:true, data:""};
      }
       $.ajax({
          type:type,
          url: localUrl,
          data:data,
          async:async,

          success: function(result){
              //console.log(result);
          
              finalResult =  {error:false, data:result};
          }, error: function(result) {

            finalResult =  {error:true, data:result};
          }

        });

       return finalResult;
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
      
      table_tr.innerHTML = '<th>No</th> <th> Name </th> <th> Size </th> <th> Status </th>';

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
          table_tr.innerHTML = '<td>'+  global_total_uploaded_count +'</td>';
          global_total_uploaded_count++;
          table_tr.innerHTML += '<td>'+  file.name +'</td>';
          table_tr.innerHTML += '<td>'+  Math.ceil(file.size/1024) +' KB</td>';
          table_tr.innerHTML += '<td> uploaded </td>';
          table.appendChild(table_tr);
       
      },
      error:function(result) {
        console.log("Error in file uploading");
          var table_tr = document.createElement('TR');
          table_tr.innerHTML = '<td>'+  global_total_uploaded_count +'</td>';
          global_total_uploaded_count++;
          table_tr.innerHTML += '<td>'+  file.name +'</td>';
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




  function uploadService() {
      if(!document.getElementById("upload_modal")) {
          createModal("upload_modal", "upload_modal_container", "upload_modal_title");
          
      } 
     
     document.getElementById('upload_modal_title').innerHTML = 'Upload';
     document.getElementById('upload_modal_container').innerHTML = getFileUploader();
      openPopup({id:"upload_modal"});
  }

  function newPostService() {
    document.getElementById('modal-title').innerHTML = 'New Post';

       var valueArr = {author:"",
       title:"",
       link:"",
       upload:"",
       detail:""
      }
       document.getElementById('modal-content-main').innerHTML = getEditPopupContent(valueArr);

       openPopup(modal_popup);
  }

/*
Method for delete post
*/
function deletePost() {
  if(confirm("Are you Sure, You want to delete Post") ) {
    alert("Post deleted successfully");
    gloabl_array_item.splice(global_item_index_Count,1);

    if(global_item_index_Count+1 <  gloabl_array_item.length ) {
      goToNext();
      
    } else if (global_item_index_Count-1 >  -1){
      goToPrev();
    }
  } 
}
  /*
  @param id

   function handle Go to Prev page functionality

  */

  function goToPrev(id) {
    var div_main = document.getElementById('main_top');
    if((global_item_index_Count - 1 > -1) && (global_item_index_Count - 1 < gloabl_array_item.length )) {

         global_item_index_Count -=1;
        div_main.innerHTML = getMainContent(global_item_index_Count);
       
        
    }  

    else {
      alert("No More Page")
    }
        
  }

  /*
  @param id

   function handle Go to next page functionality

  */
  function goToNext(id) {
    var div_main = document.getElementById('main_top');
   
    if(gloabl_array_item.length > global_item_index_Count + 1 && (-1 < global_item_index_Count + 1)) {
         global_item_index_Count +=1;
        div_main.innerHTML = getMainContent(global_item_index_Count);
        
    } else {
      alert("No More Page")
    }
  }





