/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.Uploader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.wishyHub.WebServer.repository.uploadRepository;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Maninderpal
 */

@RestController
@RequestMapping(path="/file")
public class Filedownloader {
    
//    public ResponseEntity<?> uploadFileMulti(
//            @RequestParam("extraField") String extraField,
//            @RequestParam("files") MultipartFile[] uploadfiles) {
//     @RequestMapping(value = "/file", method = RequestMethod.GET,
//            produces = MediaType.IMAGE_JPEG_VALUE)
     
//    public ResponseEntity<byte[]> getImage() throws IOException {

    @GetMapping("") 
public ResponseEntity<byte[]> getFile( @RequestParam("fileid") int fileid) throws FileNotFoundException, IOException,org.springframework.dao.EmptyResultDataAccessException {
        
        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                  .body(getActualFile(fileid));
    }

@GetMapping("/img/ALL")
    public ResponseEntity<List<Map<String, Object>>> downloadAllImage() throws FileNotFoundException, IOException,org.springframework.dao.EmptyResultDataAccessException {
        
        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(getAllFilePath(-1));
    }
    
    @GetMapping("/img")
    public ResponseEntity<byte[]> downloadImage( @RequestParam("fileid") int fileid) throws FileNotFoundException, IOException,org.springframework.dao.EmptyResultDataAccessException {
        
        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(getActualFile(fileid));
    }
   @GetMapping("/pdf") 
public ResponseEntity<byte[]> getPdf( @RequestParam("fileid") int fileid) throws FileNotFoundException, IOException,org.springframework.dao.EmptyResultDataAccessException {

        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_PDF)
                .body(getActualFile(fileid));
    }    

private byte[] getActualFile(int fileid) throws FileNotFoundException, IOException {
    InputStream targetStream = null;
    File initialFile = null;
    Map<String, Object> map = null;
   
        //get result from db put in map
        map = new uploadRepository().getResult(fileid);
        // create file from path
      //TODO fix upload folder name 
        initialFile = new File(FileUploaderController.UPLOADED_FOLDER+map.get("type")+"/"+ map.get("name"));
        targetStream = new FileInputStream(initialFile);
//        byte[] bytes = StreamUtils.copyToByteArray(targetStream);
return StreamUtils.copyToByteArray(targetStream);
       }
      
private List<Map<String, Object>> getAllFilePath(int fileid) {
       List<Map<String, Object>> map = new uploadRepository().getResultAll(fileid);
        
         return map;
}
   
}
