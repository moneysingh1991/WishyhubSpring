  var global_item_index_Count = 0;
  var gloabl_array_item = [];
  var global_total_uploaded_count = 1;
  var gloabl_file_browse_array = [];
  
  // set devlopment to false before commit
  var development = true;
  
  var global_home_sub_path = "wishyhub";
  var global_site_domain = "http://localhost:8080/"+global_home_sub_path;


if(development == true) {
      global_home_sub_path = "/";
       global_site_domain = "http://localhost:9080";
  }