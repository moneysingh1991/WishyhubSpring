  var global_item_index_Count = 0;
  var gloabl_array_item = [];
  var gloabl_array_item_dynamic=[];
  var global_total_uploaded_count = 1;
  var gloabl_file_browse_array = [];
  // this array will contains all possible searchable keyword exists in posts
var sidebar_items = new Set();


  
  // set devlopment to false before commit
  var development = false;
  
  var global_home_sub_path = "wishyhub";
  // var global_site_domain = "http://localhost:8080/"+global_home_sub_path;
  //global_site_domain = "http://54.67.42.199:8080/"+global_home_sub_path;
  var global_site_domain = window.location.href;
  if(global_site_domain[global_site_domain.length -1] == "/") {
    global_site_domain = global_site_domain.substring(0,global_site_domain.length -1)
  }
if(development == true) {
      global_home_sub_path = "/";
       global_site_domain = "http://localhost:9080";
  }
