# Proba-IT-2024

### Modul de rulare
Vom rula comanda 'npm run dev', pe rand, din doua terminale diferite, in directorul /frontend si in directorul /backend pentru a porni ambele parti ale site-ului. Partea de frontend ruleaza pe portul 5000 al host-ului local (http://localhost:5000), iar backend-ul pe portul 3000 (http://localhost:3000)


### Prezentarea site-ului
Prima pagina a website-ului este una simpla, cu fundal sugestiv, fiind necesara pentru a ne inregistra pe site, iar mai apoi pentru a ne loga. In bara de navigatie intalnim logo-ul site-ului, care a fost realizat de la 0 de catre mine in Canva si butoanele de **Login** si **Register**. Butonul de Register declanseaza un formular care trebuie completat cu informatiile utilizatorului. Formularul este trimis in partea de backend si datele sunt stocate intr-un fisier acolo, fapt de impiedica, din pacate, inregistrarea mai multor utilizatori. Dupa inregistrare, ne putem loga pe site folosind aceleasi date de inregistrare. 

Mai apoi bara de navigatie se schimba si apar optiunile noi **Profile** si **Recipes**. Butonul de Profile afiseaza datele utilizatorului, preluate din fisierul stocat in backend. Apasand butonul de Recipes suntem redirectati pe o alta pagina, unde intalnim optiunea de a adauga retete. Butonul **Add Recipe** declanseaza un formular in care putem nota diferite detalii despre reteta pe care dorim sa o adaugam. Din nefericire, aceasta functionalitate nu este implementata. Ea trebuia sa aiba o mecanica asemanatoare cu cea de inregistrare, doar ca la nivel de baza de date.