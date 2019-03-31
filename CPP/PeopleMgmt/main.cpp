#include <iostream>
#include "action.h"
#include <conio.h>
#include <string>
#include <list>
#include <fstream>
using namespace std;


int main()
{
	int line = 0;
	char input;
	Action object;
	list<Action> l1;

	for(;;)
	{
		system("cls");
		cout << "Welcome!" << endl;

		if (line == 0)
		{
			cout << " >  ";
		} 
		cout << "Worker Creator" << endl;
		if (line == 1)
		{
			cout << " >  ";
		}
		cout << "Show Workers" << endl;
		if (line == 2)
		{
			cout << " >  ";
		}
		cout << "Remove Worker" << endl;
		if (line == 3)
		{
			cout << " >  ";
		}
		cout << "Remove All Workers" << endl;
		if (line == 4)
		{
			cout << " >  ";
		}
		cout << "Exit" << endl;
		cout << "---------------------------" << endl;
		cout << endl;
		input = _getch();
		int ascii = int(input);

		switch (ascii)
		{
			case 119:
				line--;
				break;
			case 115:
				line++;
				break;
			case 13:
				if (line == 0)
				{
					string a, b;
					cout << "Worker creator: " << endl;
					cout << "Worker name: "; cin >> a; 
					cout << "Worker surname: "; cin >> b;
					object.addWorker(a, b);
				}
				if (line == 1)
				{
					showWorkers();
				}
				if (line == 2)
				{
					removeWorker();
				}
				if (line == 3)
				{
					removeAll();
				}
				if (line == 4)
				{
					exit(0);
				}
				break;

			

			default:
				cout << "There is not such an option!" << endl;
				break;
		}
		
	}


		return 0;

}