package com.SmartIT.FirstProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.SmartIT.FirstProject.entity.HistoriqueClient;

@Repository
public interface HistoriqueClientRepository extends JpaRepository<HistoriqueClient, Long> {

}
