# probable-octo-system
Simple Angular 4 project with user list

1.Stworzenie nowego projektu przy użyciu CLI
2.Stworzenie komponentu głównego (kontenera), i komponentu reprezentującego pojedynczego użytkownika. Rezultatem ma być lista użytkowników umozliwiajaca : edycje, usuwanie, dodawanie nowego uzytkownika
3.Stworzenie modelu reprezentującego pojedynczego uzytkownika
4.Stworzenie serwisu umożliwiającego dodawanie / usuwanie/ edycje  uzytkownikow
5. W serwisie zamiast bazy danych będzie zmienna prywatna przechowujaca liste użytkowników. Na starcie komponentu będą dodawane do niej dane z endpointa (http://beta.rohub.org/portal/rosdata/allcreators) - dodawanie , usuwanie i edycja pojedynczych użytkowników będzie odpbywała się właśnie na tej liscie (np. Array<UserObject>
  https://jsonformatter.curiousconcept.com/
