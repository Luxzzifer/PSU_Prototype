
// Tenaga Pekerja
let TotalPkj0 = 0;
let TotalPkj1 = 0;
let TotalPkj2 = 0;

// Tenaga Tukang
let TotalTkg0 = 0;
let TotalTkg1 = 0;
let TotalTkg2 = 0;

// Kepala Tukang
let TotalKatkg = 0;

//Tenaga Mandor

let TotalMdr0 = 0;
let TotalMdr1 = 0;
let TotalMdr2 = 0;

// Bahan 
let U_ditch0 = 0;
let U_ditchcov0 = 0;

let CraneMobile5Ton0 = 0;
let CraneMobile5Ton1 = 0;

let BuisU30_0 = 0;

let BatuBata0 = 0;
let Semen0 = 0;
let PasirPasang0 = 0;

let PasirUrug0 = 0;
let PasirUrug1 = 0;

//sum
function totalSum() {

    //Sum tenaga
    let JumlahPkj = TotalPkj0 + TotalPkj1 + TotalPkj2;
    let JumlahTkg = TotalTkg0 + TotalTkg1 + TotalTkg2;
    let jumlahKaTa = TotalKatkg;
    let jumlahMdr = TotalMdr0 + TotalMdr1 + TotalMdr2;
    
    let roundedPKJ = Math.round(JumlahPkj);
    let roundedTKG = Math.round(JumlahTkg);
    let roundedKAT = Math.round(jumlahKaTa);
    let roundedMDR = Math.ceil(jumlahMdr);



    //Sum Bahan

    let JumlahU_ditch = U_ditch0;
    let JumlahCoverUditch = U_ditchcov0;
    let JumlahCrane5Ton = CraneMobile5Ton0 + CraneMobile5Ton1;
    let jumlahBuis30 = BuisU30_0;
    let JumlahBatuBata = BatuBata0;
    let JumlahSemen = Semen0 / 40;
    let PasirPasang = PasirPasang0;
    let JumlahPasirUrug = PasirUrug0 + PasirUrug1;
    
    let roundedU_Ditch = Math.round(JumlahU_ditch);
    let roudedU_Cover = Math.round(JumlahCoverUditch);
    let roudedCrane = Math.ceil(JumlahCrane5Ton);
    let roundSemen = Math.round(JumlahSemen);
    let roundPasirUrug =  Math.round(JumlahPasirUrug);




    console.log("Jumlah TENAGA PKJ:", roundedPKJ.toFixed(2));
    console.log("Jumlah TENAGA TKG:", roundedTKG.toFixed(2));
    console.log("Jumlah KEPALA TKG:", roundedKAT.toFixed(2));
    console.log("Jumlah TENAGA MDR:", roundedMDR.toFixed(2));
    console.log("--------------------------------Bahan")
    console.log("Jumlah U-DITCH", roundedU_Ditch.toFixed(2));
    console.log("Jumlah COVER U-DITCH", roudedU_Cover.toFixed(2));
    console.log("Jumlah CRANE 5 TON", roudedCrane.toFixed(2));
    console.log("Jumlah BUIS-U 30", jumlahBuis30.toFixed(2));
    console.log("Jumlah BATU BATA", JumlahBatuBata.toFixed(2));
    console.log("Jumlah SEMEN",roundSemen.toFixed(2));
    console.log("Jumlah PASIR PASANG", PasirPasang.toFixed(2));
    console.log("Jumlah PASIR URUG", roundPasirUrug.toFixed(2));

    //output tabel
    const bahanTableBody = document.getElementById('bahan-table-body');

    bahanTableBody.innerHTML = `
        <tr><td>U-Ditch</td><td>${roundedU_Ditch.toFixed(2)}</td><td>Unit</td></tr>
        <tr><td>Cover U-Ditch</td><td>${roudedU_Cover.toFixed(2)}</td><td>Unit</td></tr>
        <tr><td>Buis U-30</td><td>${jumlahBuis30.toFixed(2)}</td><td>Unit</td></tr>
        <tr><td>Crane 5 Ton</td><td>${(roudedCrane).toFixed(2)}</td><td>Jam</td></tr>
        <tr><td>Batu Bata</td><td>${JumlahBatuBata.toFixed(2)}</td><td>Buah</td></tr>
        <tr><td>Semen</td><td>${(roundSemen).toFixed(2)}</td><td>Sak</td></tr>
        <tr><td>Pasir Pasang</td><td>${ PasirPasang.toFixed(2)}</td><td>m³</td></tr>
        <tr><td>Pasir Urug</td><td>${(roundPasirUrug).toFixed(2)}</td><td>m³</td></tr>
    `;


    const pekerjatablebody = document.getElementById('pekerja-table-body');

    pekerjatablebody.innerHTML = `

        <tr><td>Pekerja</td><td>${roundedPKJ.toFixed(2)}</td><td>Orang</td></tr>
        <tr><td>Tukang Batu</td><td>${roundedTKG.toFixed(2)}</td><td>Orang</td></tr>
        <tr><td>Kepala Tukang</td><td>${roundedKAT.toFixed(2)}</td><td>Orang</td></tr>
        <tr><td>Mandor</td><td>${roundedMDR.toFixed(2)}</td><td>Orang</td></tr>
            
    `;
   
}



//volume
document.getElementById("U-Ditch").addEventListener('input', function(){
    var length = parseFloat(this.value);
    var unitLength = 1.2;
    var widtUditch = 0.4;
    var thicknessSand = 0.05;




    //PKJ pemasangan U-ditch 30.30 koefisien
    var TenagaPKJ = 0.2799;
    var TenagaTKG = 0.0933;
    var TengaMDR  = 0.0279;

    //PKJ pemasangan Urugan Pasir Bawah U-Ditch koefisien
    var TenagaPKJpasir = 0.3000;
    var TenagaMDRpasir = 0.0100;

    //Bahan U-Ditch kofisien
    var Uditchkoefisien = 1.00;
    var CraneM5Tonkof = 0.2345; 
    var PasirUrugkof = 1.200;


    var numUnits = Math.ceil(length/unitLength)
    var sandVolume = length * widtUditch * thicknessSand;

    //Perhitungan Pemasang U-ditch 30.30
    var TenagaPkjRslt = (numUnits * TenagaPKJ) / 8;
    var TenagaTKGRslt = (numUnits * TenagaTKG ) / 8;
    var TenagaMDRRslt = (numUnits * TengaMDR) / 8;

    //Perhitungan Bahan
    var BahanUditchRslt = numUnits * Uditchkoefisien;
    var Crane5Ton = numUnits *  CraneM5Tonkof;
    var PasirUrug = sandVolume * PasirUrugkof;



    //Perhitungan Urugan Pasir Bawah U-Ditch
    var TenagasPkjPasirRslt = sandVolume * TenagaPKJpasir;
    var TenagaMDRPasirRslt = sandVolume * TenagaMDRpasir;

    

    //sum
    TotalPkj0 = TenagaPkjRslt + TenagasPkjPasirRslt;
    TotalTkg0 = TenagaTKGRslt;
    TotalMdr0 = TenagaMDRRslt + TenagaMDRPasirRslt;
    
    U_ditch0 = BahanUditchRslt;
    CraneMobile5Ton0 = Crane5Ton;
    PasirUrug0 = PasirUrug;


    console.log("Volume :", numUnits.toFixed(2), "Unit");
    console.log("Volume Pasir:", sandVolume.toFixed(2),"m3")
    
    //Hasil Pemasangan U-ditch
    console.log("--------------- Hasil Pemasangan U-ditch ")
    console.log("TenagaPkj :", TenagaPkjRslt.toFixed(3));
    console.log("TenagaTkg :", TenagaTKGRslt.toFixed(2));
    console.log("TenagaMdr :", TenagaMDRRslt.toFixed(2));

    //Hasil Urugan Pasir Bawah U-Ditch
    console.log("--------------- Hasil urug pasir U-ditch ")
    console.log("TenagaPkjpasir :", TenagasPkjPasirRslt.toFixed(3));
    console.log("TenagaMdrpasir :", TenagaMDRPasirRslt.toFixed(2));

    const bahanTableBody = document.getElementById('bahan-table-body');
    

   
    totalSum();
    

});


document.getElementById("Cover-U-Ditch").addEventListener('input', function(){
    var length = parseFloat(this.value);
    var uditchlength = 0.6



    //pemasangan cover uditch koefisien
    var Tenagapkjcover = 0.2799;
    var TenagaTkgcover = 0.0933;
    var TenagaMdrcover = 0.0279;

    //bahan cover uditch koefisien
    var coverUditchkof = 1.0
    var coverCrane5Tonkof = 0.2345

    
    var coverudtvolume = length/uditchlength;

    //perhitungan pemasangan cover
    var Tenagapkjcoverrslt = (coverudtvolume * Tenagapkjcover ) / 8;
    var Tenagatkgcoverrslt = (coverudtvolume * TenagaTkgcover) / 8;
    var Tenagamdrcoverrslt = (coverudtvolume * TenagaMdrcover) / 8;

    //perhitungan bahan cover uditch
    var coveruditch = coverudtvolume * coverUditchkof;
    var coverCranemobile =  coverudtvolume  *  coverCrane5Tonkof ;


    TotalPkj1 = Tenagapkjcoverrslt;
    TotalTkg1 = Tenagatkgcoverrslt;
    TotalMdr1 = Tenagamdrcoverrslt;

    U_ditchcov0 = coveruditch;

    CraneMobile5Ton1 = coverCranemobile;

   
    console.log("Volume cover Udit:", coverudtvolume.toFixed(2),"Unit")

    console.log("--------------- Hasil Pemasangan Cover ")
    console.log("TenagaPkjCover :", Tenagapkjcoverrslt.toFixed(3))
    console.log("TenagaTkgCover:", Tenagatkgcoverrslt.toFixed(2))
    console.log("TenagaMdrCover:", Tenagamdrcoverrslt.toFixed(2))

    

    

    totalSum();
    
});


// buis volume
document.getElementById("Buis-U").addEventListener('input', function(){
    var length = parseFloat(this.value);
    var buislength = 1;


    //Pemasangan Buis U-30 koefisien
    var TenagaPKJBuis = 0.5300
    var TenagaTKGBuis = 0.3300
    var KepalaTKGBuis = 0.0330
    var TenagaMDRBuis = 0.0380
    
    //Bahan
    var BuisU30Kof = 1.00
    var BatuBataKof = 70.00
    var SemenKof = 20.99
    var PasirPasangKof = 0.07
    var PasirUrug2Kof = 0.06;



    var buisvolume = length/buislength;

    //perhitungan Pemasangan Buis u-30
    var Tenagapkjbuisrslt = buisvolume * TenagaPKJBuis;
    var Tenagatkgbuisrslt = buisvolume * TenagaTKGBuis;
    var Kepalatkgbuisrslt = buisvolume * KepalaTKGBuis;
    var Tenagamdrbuisrslt = buisvolume * TenagaMDRBuis;

    var BuisU30 = buisvolume * BuisU30Kof;
    var BatuBata = buisvolume * BatuBataKof;
    var Semen = buisvolume * SemenKof;
    var PasirPasang =  buisvolume * PasirPasangKof;
    var PasirUrug2 = buisvolume * PasirUrug2Kof;

 

    TotalPkj2 = Tenagapkjbuisrslt;
    TotalTkg2 = Tenagatkgbuisrslt;
    TotalKatkg =  Kepalatkgbuisrslt;
    TotalMdr2 = Tenagamdrbuisrslt;
    

    BuisU30_0 = BuisU30;

    BatuBata0 = BatuBata;
    Semen0 = Semen;
    PasirPasang0 = PasirPasang;
    PasirUrug1 = PasirUrug2;



    console.log(" buis Volume :", buisvolume.toFixed(2), "m'");


    console.log("------ Hasil Perhitungan buis");
    console.log(" TenagaPkjBuis :",Tenagapkjbuisrslt.toFixed(3));
    console.log(" TenagaTkgBuis",Tenagatkgbuisrslt.toFixed(2));
    console.log(" KepalaTkgBuis :",Kepalatkgbuisrslt.toFixed(2));
    console.log(" TenagaMdrBuis :",Tenagamdrbuisrslt.toFixed(2));

    totalSum();
   
   
});







