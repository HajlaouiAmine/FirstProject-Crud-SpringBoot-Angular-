package com.SmartIT.FirstProject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class HistoriqueClient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	public String nom;
	public String projet;
	public String commentaire;
}
