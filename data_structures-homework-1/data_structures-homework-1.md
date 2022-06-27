# Homework-1 

1. [22,27,16,2,18,6] dizisinin sort türüne göre aşamalarını yazınız.

   ##### ADIM-1

   1. [2,27,16,22,18,6] -> 2 ile 22 yer değiştiriyor.
   2. [2,6,16,22,18,27] -> 6 ile 27 yer değiştiriyor.
   3. [2,6,16,22,18,27] -> 3. sıradaki eleman en küçük. Dokunmadan devam et.
   4. [2,6,16,18,22,27] -> 18 ile 22 yer değiştiriyor ve sonlanıyor.
   5. [2,6,16,18,22,27] -> 5. sıradaki eleman en küçük. Dokunmadan devam et.
   6. [2,6,16,18,22,27] -> 6. sıradaki eleman en büyük ve bitir.

2. Big-O gösterimini yazınız.

   ##### ADIM-2

   O(n^2)

3. Time Complexity:

   - Best Case : (n) Bütün dizinin sıralı olduğunu varsayarsak hiç yer değiştirme 
     işlemi yapmadan sadece listeyi tarar.
   - Average Case : Worst case ile best case'in ortalamasını alırsak (n^2.n)/2=n^2
  
   ##### ADIM-4

     Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

    **Averge case** 

   ---

   - [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız. 

   ##### ADIM-5

       [2,3,5,8,7,9,4,15,6] => Array
       [2,3,5,8,7,9,4,15,6] => 1. Adım
       [2,3,4,8,7,9,5,15,6] => 2. Adım
       [2,3,4,5,7,9,8,15,6] => 3. Adım
