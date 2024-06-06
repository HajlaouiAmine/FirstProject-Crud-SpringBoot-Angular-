package com.SmartIT.FirstProject.controller;

import static org.springframework.http.HttpStatus.OK;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SmartIT.FirstProject.entity.HistoriqueClient;
import com.SmartIT.FirstProject.service.HistoriqueClientService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(path = {"/historiqueClient"})
public class HistoriqueClientController {

    private final  HistoriqueClientService historiqueClientService;

	
	 @PostMapping("/add")
	    public ResponseEntity<HistoriqueClient> create(@RequestBody HistoriqueClient historiqueClient)  {
		 HistoriqueClient newHistoriqueClient = historiqueClientService.create(historiqueClient);
	        return new ResponseEntity<>(newHistoriqueClient, OK);
	    }
	 
	 
	 @PutMapping("/update/{id}")
		public HistoriqueClient update(@PathVariable("id") Long id, @RequestBody HistoriqueClient historiqueClient) {
			return historiqueClientService.update(id, historiqueClient);
		}
	
	 @GetMapping("/list")
	    public ResponseEntity<List<HistoriqueClient>> getAllHistoriqueClients() {
	        List<HistoriqueClient> historiqueClients = historiqueClientService.getAllHistoriqueClients();
	        return new ResponseEntity<>(historiqueClients, OK);
	    }
	 
	 
	 @GetMapping("/findbyid/{id}")
	 public HistoriqueClient findHistoriqueClientById(@PathVariable Long id) {
		 
	 	return historiqueClientService.findHistoriqueClientById(id);
	 	
	 }
	 
	 @DeleteMapping("/delete/{id}")
	    public ResponseEntity<HistoriqueClient> delete(@PathVariable Long id)  {
	        historiqueClientService.delete(id);
	        return ResponseEntity.noContent().build();
	    }
}
