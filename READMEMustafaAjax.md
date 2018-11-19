# mcevik
# mcevik
I created get,post,delete,put functions.
I Made a Get button to call User1,2,3 information table.
Here is what I did for Get button
<button onclick="Get()">Get</button>
 function Get(){
             $.getJSON("http://127.0.0.1:8080/listUsers", function(data, status, xhr){
                  //tableHeadings.push({})
                let tableHeadings = {
               
                    "name": "User Name",
                    "password" : "Password",
                    "JobTitle": "JobId",
                    "Surname": "Name"
                };
                // let tableHeadings=[];
                // tableHeadings["name"] = "User Name";
                //  tableHeadings["password"] = "Password";
                //  tableHeadings["profession"] = "Profession";
                //  tableHeadings["JobTitle"] = "JOBTITLE";
                
                
                 //sometimes yhou need to conver an object as a set of keys to an array of objects
                 let objectKeys = Object.keys(data);
                 let dataArray = [];
                 for( i =0; i < objectKeys.length; i++){
                     dataArray.push(data[objectKeys[i]]);
                 }
                 DisplayJSONobjectArrayAsTable(dataArray,"table", tableHeadings);
                let pretyJSON = JSON.stringify(data, null, 2);
                $('#images').html("<pre>" +pretyJSON +"</pre>") ;
            });
           
        }
        
     I added a POST method on the file for posting some hardcoded data(as opposed to data taken from a form) to API.
     My Example;
     
         function Post(){
            ajaxSetting = getDefaultAjaxSettings();
            ajaxSetting.method = "POST";
            ajaxSetting.contentType = "application/json";
            ajaxSetting.url = "https://api.usaspending.gov/api/v2/bulk_download/list_agencies/";
            ajaxSetting.data = "{\"agency\": 14}";
            ajaxSetting.success =  function (data, status, xhr) {
                console.log(status);
                let prettyText = JSON.stringify(data, null, 2);
                console.log(prettyText);
                $('#images').html("<pre>"+prettyText+ "</pre>") ;
                let responseHeaders = xhr.getAllResponseHeaders();
                //   let responseHeader = xhr.getResponseHeader();
                let responseText = xhr.responseText;
                let responseCode = xhr.status;
                let statusText = xhr.statusText;
            }
            jQuery.ajax(ajaxSetting);
        }
       
       I made a delete button to DELETE USER 2 Id.
       My example for delete;
       function Delete(){
            ajaxSetting = getDefaultAjaxSettings();
            ajaxSetting.method = "DELETE";
            ajaxSetting.contentType = "application/json";
            ajaxSetting.url = "http://127.0.0.1:8080/id/2";
           // ajaxSetting.data = "{\"agency\": 14}";
            ajaxSetting.success =  function (data, status, xhr) {
                console.log(status);
                // let prettyText = JSON.stringify(data, null, 2);
                // console.log(prettyText);
                // $('#images').html("<pre>"+prettyText+ "</pre>") ;
                // let responseHeaders = xhr.getAllResponseHeaders();
                // //   let responseHeader = xhr.getResponseHeader();
                // let responseText = xhr.responseText;
                // let responseCode = xhr.status;
                // let statusText = xhr.statusText;
            }
            jQuery.ajax(ajaxSetting);
        }
        
   Lastly, I made a PUT button to call User 1,2,3 information table.
       My example;
       function Put(){
            $.getJSON("http://127.0.0.1:8080/listUsers", function(data, status, xhr){
                  //tableHeadings.push({})
                let tableHeadings = {
               
                    "name": "User Name",
                    "password" : "Password",
                 
               
