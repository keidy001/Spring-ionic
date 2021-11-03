package com.OdkApprenant.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table
public class Formateur {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idFormateur;
	@Column(name = "nom")
	private String nom;
	@Column(name = "prenom")
	private String prenom;
	@Column(name = "age")
	private int age;
	@Column(name = "telephone")
	private int telephone;
	@Column(name = "email")
	private String email;
	@Column(name = "login")
	private String login;
	@Column(name = "password")
	private String password;
	@Column(name = "genre")
	private String genre;
	@Column(name = "dateCreation")
	private String dateCreation;
	@Column(name = "dateModification")
	private String dateModification;
	public Formateur() {
		super();
	}
	public Formateur(String nom, String prenom, int age, int telephone, String email, String login, String password,
			String genre, String dateCreation, String dateModification) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.telephone = telephone;
		this.email = email;
		this.login = login;
		this.password = password;
		this.genre = genre;
		this.dateCreation = dateCreation;
		this.dateModification = dateModification;
	}
	public Long getIdFormateur() {
		return idFormateur;
	}
	public void setIdFormateur(Long idFormateur) {
		this.idFormateur = idFormateur;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getTelephone() {
		return telephone;
	}
	public void setTelephone(int telephone) {
		this.telephone = telephone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(String dateCreation) {
		this.dateCreation = dateCreation;
	}
	public String getDateModification() {
		return dateModification;
	}
	public void setDateModification(String dateModification) {
		this.dateModification = dateModification;
	}
	
}
