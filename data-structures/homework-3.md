# Homework-3


- **[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.**
    		1. İlk değer root olarak seçilir. Root değerden büyük olanlar sağ tarafa küçük olanlar sol tarafa sırası ile yazılarak tree oluşturulur.
         1. root değer 7 dir.



| Açıklama                                                                  |      |      |      |      |      |      |      |      |      |      |      |
| --------------------------------------------------------------------------| :--: | ---- | :--: | ---- | :--: | ---- | :--: | ---- | :--: | ---- | ---- |
| Root değer                                                                |      |      |      |      |      |      |  7   |      |      |      |      |
| 7 den sonraki ilk değer 7 den küçük olduğundan sol tarafa eklenir         |      |      |      |      |      | /    |      | \    |      |      |      |
| 1 değeri 7 den küçük yani sol tarafa, 5ten de küçük onunda soluna eklenir |      |      |      |      |  5   |      |      |      |  8   |      |      |
| 8 değeri 7den büyük, 7 nin sağına eklenir                                 |      |      |      | /    |      |      |      | /    |      | \    |      |
| 3 değeri 5 ten küçük sola 1 den büyük sağa eklenir                        |      |      |  1   |      |      |      |  6   |      |      |      | 9    |
| 6 7 den küçük 5ten büyük 5in sağına eklenir                               |      | /    |      | \    |      |      |      |      |      |      |      |
| 0 en küçük olduğundan soldan ilerlenerek eklenir                          |  0   |      |      |      |  3   |      |      |      |      |      |      |
| 9 7 ve 8den büyük olduğundan sağa eklenir                                 |      |      |      | /    |      | \    |      |      |      |      |      |
| 4 3ten büyük olduğundan 3ün sağına eklenir                                |      |      |  2   |      |      |      |  4   |      |      |      |      |
| 2 1 den büyük olduğundan sağdan ilerleyerek, 3 ten küçük olup 3ün soluna eklenir |      |      |      |      |      |      |      |      |      |      |      |