#pragma once
#include <iostream>
#include <string>

using namespace std;

class Action
{
public:
	string name;
	string surname;

	Action() {};
	Action(string n, string s)
	{
		name = n;
		surname = s;
	}
	void addWorker(string name2,string surname2);
	void wypisz()
	{
		cout << "Name: " << name << endl;
		cout << "Surname: " << surname << endl;
	}
};
void showWorkers();
void removeWorker();
void removeAll();