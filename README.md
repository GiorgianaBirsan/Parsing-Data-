# Parsing-Data-

 Uneori, datele vin intr-un format structurat pe care trebuie să îl descompunem și să le transformam în înregistrări, astfel încât să le putem prelucra. CSV, sau valori separate prin virgulă, este un standard des folosit pentru a face acest lucru. 
 Am construit un program care citește următorul fișier de date:
 
 Ling, Mai, 55900
 Johnson, Jim, 56500 
 Jones, Aaron, 46000 
 Jones, Chris, 34500 
 Swift, Geoffrey, 14200 
 Xiong, Fong, 65000
 Zarnecki, Sabrina, 51500    
 
Am procesat înregistrările și afișat rezultatele formatate sub formă de tabel, distanțate uniform, așa cum se arată în exemplul de date ieșire.
Exemplu de date de ieșire folosind Node.js:

Last 	   First 	     Salary
_ _ _ _ _ _ _ _ _ _ _ _ _ _   
Ling 	     Mai 	      55900 
Johnson	   Jim	      56500 
Jones 	   Aaron      46000 
Jones 	   Chris 	    34500 
Swift 	   Geoffrey   14200  
Xiong 	   Fong 	    65000 
Zarnecki   Sabrina    51500 


Alte provocari:

Am utilizat spații pentru alinierea coloanelor.
Fiecare coloană este cu un spațiu mai lung decât cea mai lunga valoare din coloană.
Am formatat salariul ca monedă valutara prin simboluri monetare și virgule.
Am sortat rezultatele în funcție de salariu de la cel mai mare la cel mai mic. 
