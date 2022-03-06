import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

 @Injectable({
     providedIn : "root"
 })
 export class ProductsService {
     products : Product[] = [
         new Product(
            "Corsair K65 RGB Mini",
            "Format compact, grandes fonctionnalités : Le K65 RGB MINI fournit des fonctionnalités de pointe dans un format 60 % pour s’intégrer facilement dans les espaces réduits.",
            "https://m.media-amazon.com/images/I/71BLi29LJnS._AC_SL1500_.jpg",
            "Azerty",
            62,
            true,
            false,
            true,
            90,
            new Date('2020-04-04'),
         ),new Product(
             "Razer Ornata V2",
             "Signant le retour de la technologie méca-membrane hybride Razer, ce clavier associe les avantages des touches à membrane et des switchs mécaniques, réunissant ainsi le meilleur des deux mondes.",
             "https://m.media-amazon.com/images/I/61TL3sRzrEL._AC_SL1024_.jpg",
             "Azerty",
             104,
             true,
             false,
             false,
             70,
             new Date('2020-06-09')
         ), new Product (
             "Epomaker Anne Pro2",
             "Conçu avec un mode double filaire/sans fil, ce clavier adopte Bluetooth 5.0 BLE et une batterie de grande capacité-1900mAh pour une utilisation plus longue. Vous pouvez connecter jusqu'à 4 appareils et basculer en toute transparence. Théoriquement, il peut fonctionner 60 jours avec le rétroéclairage éteint, en veille jusqu'à 4 000 heures, avec une consommation aussi faible que 0,5 mA.",
             "https://m.media-amazon.com/images/I/51oOWzKOczL._AC_SL1000_.jpg",
             "Qwerty",
             62,
             true,
             true, 
             true,
             117,
             new Date('2019-03-30')
         ), new Product (
             "Logitech G PRO TKL",
             "Les pros ont parlé, nous avons écouté. Avec un design compact et des switchs Clicky de qualité professionnelle, le clavier PRO est testé par des professionnels, adapté aux tournois et conçu pour gagner.",
             "https://m.media-amazon.com/images/I/71ymAYjFNeL._AC_SL1500_.jpg",
             "Azerty",
             87,
             true,
             true,
             true,
             124,
             new Date ('2019-10-01')
         ), new Product (
            "Steelseries Apex Pro",
            "Véritable bond en avant, le clavier SteelSeries Apex Pro vous permet de régler chaque touche en fonction de votre niveau de sensibilité préféré, que ce soit pour le gaming, le travail ou autre chose. Avec une réponse 8x plus rapide, une activation 5x plus rapide et une résistance 2x plus durable que les autres claviers, vous n'avez aucune excuse pour ne pas sortir vainqueur de vos combats.",
            "https://m.media-amazon.com/images/I/717lESxqWaL._AC_SL1329_.jpg",
            "Azerty",
            104,
            true,
            false,
            true,
            230,
            new Date ('2019-05-27')
         ), new Product(
             "Trust Taro Clavier Filaire",
             "Le Trust Taro fait tout ce que vous attendez d’un clavier fiable. C’est un clavier de taille standard, de hauteur réglable et avec des touches résistantes aux déversements. Il est facile à utiliser : vous commencez à travailler dès que vous le reliez à votre ordinateur de bureau ou portable.",
             "https://m.media-amazon.com/images/I/71KpMJqdU4L._AC_SL1500_.jpg",
             "Azerty",
             107,
             false,
             false,
             false,
             15,
             new Date ('2020-09-24')
         ) ,new Product (
             "Logitech K380",
             "Le clavier Logitech K380 Multi-Device Bluetooth apporte le confort de la saisie de bureau sur votre smartphone, tablette et bien plus encore.",
             "https://m.media-amazon.com/images/I/61U7vYMCWHS._AC_SL1267_.jpg",
             "Azerty",
             82,
             false,
             true,
             false,
             45,
             new Date ('2015-09-02')
         ),new Product( 
             "EPOMAKER SKYLOONG SK64",
             "Le SK64/64S est maintenant hotswap. Une caractéristique rare parmi les claviers mécaniques, cela signifie que vous pouvez facilement changer les commutateurs mécaniques pour un autre type sans soudure ni effort.",
             "https://m.media-amazon.com/images/I/616QTF+VWrL._AC_SL1000_.jpg",
             "Qwerty",
             64,
             true,
             false,
             true,
            82,
            new Date('2020-08-17')
         ),new Product (
         "Keychron K6",
         "Clavier mécanique compact Bluetooth 65 % (68 touches) avec rétroéclairage RVB. Cadre en aluminium.",
        "https://m.media-amazon.com/images/I/61Bdvqc8dML._AC_SL1500_.jpg",
        "Qwerty",
        68,
        true,
        true,
        true,
        120,
        new Date('2022-02-18')
        ), new Product (
            "EPOMAKER K870T",
            "Le clavier qui a 87 clés fournit des fonctionnalités avec un mini format. Vous avez les touches directionnelles complètement et les autres clés basiques. Conçu pour les deux système : Mac et Wins, vous pouvez appuyer facilement sur les touches pour changer le système. K870T s’intègre facilement dans les espaces réduits. C’est parfait pour les jeux et le travail.",
            "https://m.media-amazon.com/images/I/51WSW-yMHjL._AC_SL1000_.jpg",
            "Qwerty",
            87,
            true,
            true,
            true,
            90,
            new Date('2021-04-12')
        )

     ]
     getAllProducts() : Product[] {
        return this.products
    }
 }

