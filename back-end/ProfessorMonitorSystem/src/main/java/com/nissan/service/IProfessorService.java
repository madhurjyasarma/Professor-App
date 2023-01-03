package com.nissan.service;

import java.util.List;

import com.nissan.entity.Professor;

public interface IProfessorService {

//	Add new Proffesor
	Professor addNewProfessor(Professor professor);

//	Remove existing proffessor
	Professor removeProfessor(int professorId);

//	get songle proffessor
	Professor getProfessorById(int professorId);

//	gell all proffessors
	List<Professor> getAllProfessor();

//	update existing proffessor
	Professor updateSalaryById(int professorId, double salary);

}
