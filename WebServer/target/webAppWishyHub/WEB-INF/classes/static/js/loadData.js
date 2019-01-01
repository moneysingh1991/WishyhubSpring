// Load data for sidebar
loadDataSideBar();

// Load data for mainContent
loadDataMainContent();

addService();

// load sidebar data
function loadDataSideBar() {
	

	var item = ["Multithread", "Java", "polymorphisam", "OOP","Big data","hadoop","linux","ssh",
	"linux command","Android","Maven","Jenkin","Kafka","Tomcat","Apple","IOS","Class","Fragment","Iot","Virus","Process","Window Command","zip file","class java"];

	var ul = document.getElementById("myMenu");

	for (var i = 0; i < item.length; i++) {

		var li = document.createElement("li");
		var a = document.createElement("a");
	         //a.setAttribute("href", item[i]);
	         a.setAttribute("onclick", "selectSideMenu(this)");
	         a.appendChild(document.createTextNode(item[i]));
	         li.appendChild(a);
	         ul.appendChild(li);
	     }
	 }

function loadDataMainContent() {

gloabl_array_item.push({link:"https://gemreportunesco.files.wordpress.com/2012/09/120801_wide_logo_1-copy.jpg",
              title:"Wide Education for All",
              detail:"← Education empowers people and promotes democracyPut Education First – share our flyer → T",
              author:"Maninderpal Singh", 
              date:getCurrentDate()
    });

	gloabl_array_item.push({link:"https://i.imgur.com/uFiL7hq.jpg",
              detail:"This is item 1 ",
              title:"Introduction to programming",
              author:"Maninderpal Singh", 
              date:getCurrentDate()
    });

    gloabl_array_item.push({link:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
              detail:"C++ Program",
              title:"Introduction to C++",
              author:"Maninderpal Singh", 
              date:getCurrentDate()
    });



    var div_main = document.getElementById('main_top');
	div_main.innerHTML += getMainContent();
}

// load servies
function addService() {
   document.getElementById('addService').innerHTML = '<a onclick="uploadService()">Upload</a>'+
      '<a onclick="newPostService()">New Post</a>'+
      '<a onclick="browseService()">Browse</a>';
}

//load files into global array

function loadFileLinks() {

 
   $.ajax({
          type:"GET",
          url: global_site_domain+"/file/img/ALL",
          data:null,
          async:false,

          success: function(result){
              //console.log(result);
          
            
              for (var i = 0 ; i <result.length ; i++) {
                 gloabl_file_browse_array.push(global_site_domain+"/file/img?fileid=" + result[i].fileid);
  
}
          }, error: function(result) {

          
          }

        });

 

}