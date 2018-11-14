/* 
Maninderpal Singh
*/
#include <stdlib.h>
#include <iostream>
#include <vector>
#include <string>
#include <list>
#include <set>
#include <memory>

using namespace std;

class Query
{
public:
	list<string> mylist;

	void print() {
		for (list<string>::iterator iter = mylist.begin(); iter != mylist.end(); iter++){
			cout << *iter << endl;
		}
	}

};

class PhrasedQuery : public Query {
public:
	list<string> phrases;
	
};

void print_list(list<string> mylist);


int main() {

	Query q;
	PhrasedQuery phq;

	q.mylist.push_back("A");
	q.mylist.push_back("B");
	q.mylist.push_back("C");
	q.mylist.push_back("D");

	phq.phrases.push_back("A B C D");
	phq.phrases.push_back("V M L A");
	phq.phrases.push_back("G F E D");
	phq.phrases.push_back("K L F E");


	shared_ptr<list<Query>> shr_ptr(new list<Query>);

	shr_ptr->push_back(q);
	shr_ptr->push_back(phq);
	shr_ptr->push_back(q);
	shr_ptr->push_back(phq);
	shr_ptr->push_back(q);

	// Here i need to print from pointer

	return 0;
}

void print_list(list<string> mylist) {
	for (list<string>::iterator iter = mylist.begin(); iter != mylist.end(); iter++){
		cout << *iter << endl;
	}
}

