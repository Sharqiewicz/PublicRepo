#include  <iostream>
#include "action.h"
#include <fstream>
#include <string>
#include <vector>
using namespace std;






	void Action::addWorker(string name, string surname)
	{
		fstream file;
		file.open("workers.txt", ios::out | ios::app);

		if (file.good())
		{
			file << name << endl;
			file << surname << endl;

			file.close();
		}
		else
		{
			cout << "File not found" << endl;
		}
	}



	void showWorkers()
	{
		string name;
		string surname;
		int lineNumber = 1;
		string line;
		fstream file;
		vector<Action> v1;
		file.open("workers.txt", ios::in);
			if (file.good())
			{
				
				while (getline(file, line))//jedna linia - jedno wykonanie petli XDDDDDD //
				{
					

					if (lineNumber % 2 != 0)
					{
						name = line;
					}
					if (lineNumber % 2 == 0)
					{
						surname = line;

					}
					
					if (lineNumber % 2 == 0) {
						v1.push_back(Action(name, surname));
					}
					lineNumber++;
					
				}

				for (vector<Action>::iterator it = v1.begin(); it !=v1.end(); it++)
				{
					it->wypisz();
				}
			}
			else
			{
				cout << " File not found" << endl;
			}
			file.close();
			system("pause");
	}

	void removeWorker()
	{
		string name;
		string surname;
		int lineNumber = 1;
		string line;
		fstream file;
		vector<Action> v1;
		file.open("workers.txt", ios::in);
		if (file.good())
		{

			while (getline(file, line))//jedna linia - jedno wykonanie petli XDDDDDD //
			{


				if (lineNumber % 2 != 0)
				{
					name = line;
				}
				if (lineNumber % 2 == 0)
				{
					surname = line;

				}

				if (lineNumber % 2 == 0) {
					v1.push_back(Action(name, surname));
				}
				lineNumber++;

			}
			file.close();
			vector<Action>::iterator it;
			for ( it = v1.begin(); it != v1.end(); it++)
			{
				it->wypisz();
			}
			int remover;
			int sizer = v1.size();
			cout << "Which one you want to remove? Enter number: "; cin >> remover; cout << endl;
			v1.erase(v1.begin() + remover-1);

			file.open("workers.txt", ios::out);
			
			
			for (int i = 0; i < v1.size() ; i++)
			{
				file << v1[i].name << endl;
				file << v1[i].surname << endl;
			}
			file.close();
				
		}
		else
		{
			cout << " File not found" << endl;
		}

		system("pause");
	}

	void removeAll()
	{
		fstream file;
		file.open("workers.txt", ios::out);
		file.close();
	}