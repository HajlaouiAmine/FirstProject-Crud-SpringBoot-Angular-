package com.SmartIT.FirstProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.SmartIT.FirstProject.entity.HistoriqueClient;


public interface HistoriqueClientService {
	
	
	HistoriqueClient create(HistoriqueClient historiqueClient);
    
    List<HistoriqueClient> getAllHistoriqueClients();
   
    HistoriqueClient findHistoriqueClientById(Long id);
    
     HistoriqueClient update(Long id, HistoriqueClient historiqueClient); 
     
     

    void delete(Long id);


}
