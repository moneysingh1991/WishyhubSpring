#include <iostream>
#include <vector>
#include <memory>
#include <list>
//Anthony Vo 008191248
using namespace std;

class Query{
public:
    vector<string> stuff;
    virtual void print(){
        for(auto it = stuff.begin(); it != stuff.end(); it++)
            cout << *it << endl;
    }
};

class PhrasedQuery : public Query{
public:
    vector<string> phrases;
    void print(){
        for(auto it = phrases.begin(); it != phrases.end(); it++)
            cout << *it << endl;
    }
};

int main()
{
    shared_ptr<vector<Query*>> a(new vector<Query*>);
    Query* query = new Query;
    PhrasedQuery* phrasedquery = new PhrasedQuery;
    query->stuff.push_back("its");
    phrasedquery->phrases.push_back("dat boi");
    (*a).push_back(query);
    (*a).push_back(phrasedquery);
    for(auto it = (*a).begin(); it != (*a).end(); it++){
            (*it)[0].print();                           //deference in vector pointer
    }
    return 0;
}
