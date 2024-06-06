
package com.SmartIT.FirstProject.HistoriqueClientServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.SmartIT.FirstProject.entity.HistoriqueClient;
import com.SmartIT.FirstProject.repository.HistoriqueClientRepository;
import com.SmartIT.FirstProject.service.HistoriqueClientService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class HistoriqueClientServiceImpl implements HistoriqueClientService {
	
	private final HistoriqueClientRepository historiqueClientRepository;
	
	@Override
	public HistoriqueClient create(HistoriqueClient historiqueClient) {
		
		return historiqueClientRepository.save(historiqueClient);
	}
	
	@Override
	public List<HistoriqueClient> getAllHistoriqueClients() {
		
		return historiqueClientRepository.findAll();
	}
	
	@Override
    public HistoriqueClient findHistoriqueClientById(Long id) {
        return historiqueClientRepository.findById(id)
                .orElseThrow();
	}

	
	@Override
	public void delete(Long id) {
		historiqueClientRepository.deleteById(id);
		
	}

	@Override
	public HistoriqueClient update(Long id,HistoriqueClient historiqueClient) {
		HistoriqueClient existinghistoriqueClient = historiqueClientRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("historiqueClient not found."));
		existinghistoriqueClient.setNom(historiqueClient.getNom());
		existinghistoriqueClient.setProjet(historiqueClient.getProjet());
		existinghistoriqueClient.setCommentaire(historiqueClient.getCommentaire());
		return historiqueClientRepository.save(existinghistoriqueClient);
	}

	

	
	}

