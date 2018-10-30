package com.wishyHub.WebServer.Uploader;

import com.wishyHub.WebServer.repository.uploadRepository;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import org.jboss.logging.MDC;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;



@RestController
public class FileUploaderController{
    
   @Autowired
   
   public uploadRepository uploadRepo;
   
     //Save the uploaded file to this folder
    private static final String UPLOADED_FOLDER = "Upload/";
  // 3.1.2 Multiple file upload
    @PostMapping("/upload")
    public ResponseEntity<?> uploadFileMulti(
            @RequestParam("extraField") String extraField,
            @RequestParam("files") MultipartFile[] uploadfiles) {

       
            int ret = 0  ;
           
        // Get file name
        String uploadedFileName = Arrays.stream(uploadfiles).map(x -> x.getOriginalFilename())
                .filter(x -> !StringUtils.isEmpty(x)).collect(Collectors.joining(" , "));

        if (StringUtils.isEmpty(uploadedFileName)) {
            return new ResponseEntity("please select a file!", HttpStatus.OK);
        }

        try {

             ret = saveUploadedFiles(Arrays.asList(uploadfiles));
            

        } catch (Exception e) {
            if(e instanceof MaxUploadSizeExceededException) {
                 return new ResponseEntity<>("Exception: File Size exceed: " +Integer.toString(ret),HttpStatus.OK);
            } else {
                 return new ResponseEntity<>("Something wrong in FileUploader: " +Integer.toString(ret),HttpStatus.BAD_REQUEST);
            }
           
        }

        return new ResponseEntity("Successfully uploaded - "
                + uploadedFileName, HttpStatus.OK);

    }
//save file
    
    private String saveIntoDB(String filename, Integer size, String type, Integer userid) {
        
        FileDetail file = new FileDetail();
        file.setName(filename);
        file.setSize(size);
        file.setType(type);
        file.setUserid(userid);
        uploadRepo.save(file);

        return "success file store in DB";
    }
    private int saveUploadedFiles(List<MultipartFile> files) throws IOException {
       String extension = "extra";
       String dir= "";
       byte[] bytes = null;
        for (MultipartFile file : files) {

            if (file.isEmpty()) {
                continue; //next pls
            }
            
            File directory = new File( UPLOADED_FOLDER);
                if (! directory.exists()){
                  if(directory.mkdir()) {
                     // System.out.println("############# success create directory");
                   
                  } 
        // If you require it to make the entire directory path including parents,
        // use directory.mkdirs(); here instead.
              }
                
         

             bytes = file.getBytes();
            
            
            extension = file.getOriginalFilename();
            extension = extension.substring(extension.lastIndexOf(".")+1);
                   dir = UPLOADED_FOLDER + extension+"/";

            directory = new File( dir);
                if (! directory.exists()){
                  directory.mkdir();
        // If you require it to make the entire directory path including parents,
        // use directory.mkdirs(); here instead.
              }
            
            Path path = Paths.get(dir+  file.getOriginalFilename());
            
            
            Files.write(path, bytes);
            
            //saveIntoDB(file.getOriginalFilename(), bytes.length,  extension, 0);

        }
        return bytes.length;  
    }

   
}