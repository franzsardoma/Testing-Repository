// SeePeePee.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>

using namespace std;
int main()
{
	int a, b, c;
	a = 10;
	b = 7;
	// ask if a is equal to b, if true it will print the value of a, else print the value of b.
	c = (a == b) ? a : b;
	cout << c;
	return 0;
}
