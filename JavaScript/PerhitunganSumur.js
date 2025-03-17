document.addEventListener('DOMContentLoaded', function() {
   
    function hitungSumur() {
        var luasLantai = parseFloat(document.getElementById('luas_lantai').value);
        var diameterBuis = parseFloat(document.getElementById('diameter_buis').value) / 100; // Convert to meters
        var kedalaman = parseFloat(document.getElementById('kedalaman').value);
        
        // Asumsi tambahan
        var num = 25; // Nilai pembagi tetap
        var numT0 = 0.30; // Asumsi nilai tetap untuk batu kosong
        var numT1 = 0.20;
        var numT2 = 0.10;
        var numP0 = 2.00;
 
        var numDia0 = 12.00;
        var numDia1 = 8.00;
        var numDia2 = 12.00

        var numKgm0 = 0.88776;
        var numKgm1 = 0.39456;
        var numKgm2 =0.88776;

        var numP00 = 0.85;
        var numP01 = 0.85;
        var numP02 = 0.55;
        var numP03 = 1.00;
        var numP04 = 1.00;

        var numJmlTul0 = 7.00;
        var numJmlTul1 = 7.00;
        var numJmlTul2 = 2.00;
        var numJmlTul3 = 0.10;

        //analisa kof PJK TKG KATKG MDR

        var Pkjkof_0 = 1.0000;
        var pkjkof_1 = 0.78;
        var pkjkof_2 = 0.3000;
        var pkjkof_3 = 0.081;
        var pkjkof_4 = 1.65;
        var pkjkof_5 = 0.007;
        var pkjkof_6 = 0.66;


        var Tkgkof_0 = 0.2000;
        var Tkgkof_1 = 0.39;
        var Tkgkof_2 = 0.135;
        var Tkgkof_3 = 0.275;
        var Tkgkof_4 = 0.007;
        var Tkgkof_5 = 0.33;
      
        

        var Katkgkof_0 = 0.0200;
        var Katkgkof_1 = 0.039;
        var Katkgkof_2 = 0.0135;
        var Katkgkof_3 = 0.028;
        var Katkgkof_4 = 0.001;
        var Katkgkof_5 = 0.033;


        var Mdrkof_0 = 0.0100;
        var Mdrkof_1 = 0.039;
        var Mdrkof_2 = 0.0100;
        var Mdrkof_3 = 0.004;
        var Mdrkof_4 = 0.083;
        var Mdrkof_5 = 0.04/100;
        var Mdrkof_6 = 0.033;

        //Bahan
        var Semenkof = 352;
        var Airkof = 215;

        var Kerikilkof_0 = 1.200;
        var Kerikilkof_1 = 1031;

        var PasirBetonkof = 731;
        var KawatBetonkof = 1.5/100;

        var Buiskof = 2.0000;
        var BatuKosongkof = 1.2;
        var Pakukof = 0.4;
        var Pipakof = 1.2 + 0.35;
        var PapaKayubegekof = 0.04;
        var MinyakBegekof = 0.2;
        var BalokKayubegekof = 0.015;
        var Plywoodkof = 0.35;
        var DolkenBambukof = 6;
        var BesiBetonkof = 105/100;

        // Cek apakah input valid
        if (!isNaN(luasLantai) && !isNaN(diameterBuis) && !isNaN(kedalaman)) {
            // Menghitung luas penampang sumur dan kebutuhan sumur
            var luasPenampangSumur = Math.PI * Math.pow(diameterBuis / 2, 2) * kedalaman; 
            var kebutuhan_sumur = luasLantai / num / luasPenampangSumur;
            

            // Membulatkan hasil kebutuhan sumur
            var rkebutuhan_sumur = Math.round(kebutuhan_sumur);

            // Menghitung volume 

            
            var volumeBuisBeton = kedalaman * rkebutuhan_sumur; 
            var volumeBatuKosong = Math.PI * Math.pow(diameterBuis / 2, 2) * numT0 * rkebutuhan_sumur; 
            var volumeLapisanKerikil = Math.PI * Math.pow(diameterBuis / 2, 2) * numT1 * rkebutuhan_sumur; 
            var volumePipaPvc = numP0 * rkebutuhan_sumur;
            var volumeBetonMutu = Math.PI * Math.pow(diameterBuis / 2, 2) * numT2 * rkebutuhan_sumur; 

            var numQTY0 = rkebutuhan_sumur * 2; 

            var volumePembesian_0 =   numKgm0 * numP00 * numJmlTul0 * numQTY0;
            var volumePembesian_1 =  numKgm1 * numP01 * numJmlTul1 * numQTY0;
            var volumePembesian_2 =  numKgm2 * numP02 * numJmlTul2 * numQTY0;

            var volumebekistinglantai_0 = Math.PI * Math.pow(numP03 / 2, 2) * rkebutuhan_sumur;
            var volumebekistinglantai_1 = 2 * Math.PI * (numP04 / 2) * numJmlTul3 * rkebutuhan_sumur;

            var sumPemesanganBesi = volumePembesian_0 + volumePembesian_1 + volumePembesian_2;
            var volumepemasanganBekisting = volumebekistinglantai_0 + volumebekistinglantai_1;
            //Perhitungan TENAGA PKJ, TKG, KA TKG, MDR

            var TenagaPkj_0 = volumeBuisBeton * Pkjkof_0;
            var TenagaPkj_1 = volumeBatuKosong * pkjkof_1;
            var TenagaPkj_2 = volumeLapisanKerikil * pkjkof_2;
            var TenagaPkj_3 =  volumePipaPvc * pkjkof_3;
            var TenagaPkj_4 = volumeBetonMutu * pkjkof_4;
            var TenagaPkj_5 = sumPemesanganBesi * pkjkof_5;
            var TenagaPkj_6 = volumepemasanganBekisting * pkjkof_6;

            var TenagaTkg_0 = volumeBuisBeton * Tkgkof_0;
            var TenagaTkg_1 = volumeBatuKosong * Tkgkof_1;
            var TenagaTkg_2 = volumePipaPvc * Tkgkof_2;
            var TenagaTkg_3 = volumeBetonMutu * Tkgkof_3;
            var TenagaTkg_4 = sumPemesanganBesi * Tkgkof_4;
            var TenagaTkg_5 = volumepemasanganBekisting * Tkgkof_5;

            var TenagaKaTkg_0 = volumeBuisBeton * Katkgkof_0;
            var TenagaKaTkg_1 = volumeBatuKosong * Katkgkof_1;
            var TenagaKaTkg_2 = volumePipaPvc  *  Katkgkof_2;
            var TenagaKaTkg_3 = volumeBetonMutu * Katkgkof_3;
            var TenagaKaTkg_4 = sumPemesanganBesi *  Katkgkof_4;
            var TenagaKaTkg_5 = volumepemasanganBekisting * Katkgkof_5;

            var TenagaMdr_0 = volumeBuisBeton * Mdrkof_0;
            var TenagaMdr_1 = volumeBatuKosong * Mdrkof_1;
            var TenagaMdr_2 = volumeLapisanKerikil * Mdrkof_2;
            var TenagaMdr_3 = volumePipaPvc * Mdrkof_3;
            var TenagaMdr_4 = volumeBetonMutu * Mdrkof_4;
            var TenagaMdr_5 = sumPemesanganBesi * Mdrkof_5;
            var TenagaMdr_6 = volumepemasanganBekisting * Mdrkof_6;

            var Semen = Math.ceil(volumeBetonMutu * Semenkof /40);
            var Air = Math.ceil(volumeBetonMutu * Airkof);

            var Kerikil_0 = volumeLapisanKerikil * Kerikilkof_0;
            var Kerikil_1 = volumeBetonMutu * Kerikilkof_1;

            var PasirBeton = volumeBetonMutu * PasirBetonkof;
            var KawatBeton = Math.ceil(sumPemesanganBesi * KawatBetonkof);
            var Buis = Math.round(volumeBuisBeton * Buiskof);
            var BatuKosong = Math.ceil((volumeBatuKosong * BatuKosongkof) * 10) /10;
            var PakuBiasa =  Math.ceil(volumepemasanganBekisting * Pakukof);
            var Pipa =  Math.ceil(volumePipaPvc * Pipakof / 4);
            var PapaKayuBeges =  Math.ceil(volumepemasanganBekisting * PapaKayubegekof);
            var MinyakBekisting = Math.ceil((volumepemasanganBekisting * MinyakBegekof) * 10) /10;
            var BalokKayuBeges = Math.ceil((volumepemasanganBekisting * BalokKayubegekof) * 10) /10;
            var PlywoodTebal = Math.ceil(volumepemasanganBekisting * Plywoodkof);
            var DolkenBambu = Math.ceil(volumepemasanganBekisting * DolkenBambukof);
            var BesiBeton = sumPemesanganBesi * BesiBetonkof;



            var sumTenagaPKJ = Math.ceil(TenagaPkj_0 + TenagaPkj_1 + TenagaPkj_2 + TenagaPkj_3 + TenagaPkj_4 + TenagaPkj_5 + TenagaPkj_6);
            var sumTenagaTKG = Math.ceil(TenagaTkg_0 + TenagaTkg_1  + TenagaTkg_2  + TenagaTkg_3  + TenagaTkg_4 + TenagaTkg_5);
            var sumTenagaKATKG = Math.ceil(TenagaKaTkg_0  + TenagaKaTkg_1  + TenagaKaTkg_2  + TenagaKaTkg_3 + TenagaKaTkg_4 + TenagaKaTkg_5);
            var sumTenagaMDR = Math.ceil(TenagaMdr_0 + TenagaMdr_1 + TenagaMdr_2 + TenagaMdr_3 + TenagaMdr_4 + TenagaMdr_5 + TenagaMdr_6);

            var TotKerikil = Math.ceil((Kerikil_1 /2000 + Kerikil_0) * 10) /10;
            var TotPasirBeton = Math.ceil((PasirBeton / 1400) * 10) /10;

            

            console.log("Volume Buis Beton:", volumeBuisBeton.toFixed(2));
            console.log("Volume Batu Kosong:", volumeBatuKosong.toFixed(2));
            console.log("Volume Lapisan Kerikil:", volumeLapisanKerikil.toFixed(2));
            console.log("Volume Pemasangan Pipa PVC:",  volumePipaPvc.toFixed(2));
            console.log("Volume Pembuatan 1 m3 Betom Mutu:",  volumeBetonMutu.toFixed(2));
            console.log("Volume Pembesian dg Besi Polos atau Besi Ulir:", sumPemesanganBesi.toFixed(2));
            console.log("Memasang bekisting untuk lantai:", volumepemasanganBekisting.toFixed(2));

            console.log("Test : ",volumePembesian_0.toFixed(2));
            console.log("Test : ",volumePembesian_1.toFixed(2));
            console.log("Test : ",volumePembesian_2.toFixed(2));
           
            console.log("Test : ",volumebekistinglantai_0.toFixed(2));
            console.log("Test : ",volumebekistinglantai_1.toFixed(2));


            


            const bahanTableBody = document.getElementById('bahan-table-body');
            bahanTableBody.innerHTML = `
                <tr><td>Buis Beton</td><td>${Buis.toFixed(2)}</td><td>buah</td></tr>
                <tr><td>Batu Kosong</td><td>${BatuKosong.toFixed(2)}</td><td>m³</td></tr>
                <tr><td>Kerikil</td><td>${TotKerikil.toFixed(2)}</td><td>m³</td></tr>
                <tr><td>Pipa Pvc 4</td><td>${Pipa.toFixed(2)}</td><td>btg</td></tr>
                <tr><td>Semen Portlan</td><td>${Semen.toFixed(2)}</td><td>sak</td></tr>
                <tr><td>Pasir Beton</td><td>${TotPasirBeton.toFixed(2)}</td><td>m³</td></tr>
                <tr><td>Besi Beton (polos/ulir)</td><td>${BesiBeton.toFixed(2)}</td><td>kg</td></tr>
                <tr><td>Kawat Ikat</td><td>${KawatBeton.toFixed(2)}</td><td>kg</td></tr>
                <tr><td>Papan Kayu Begestingt</td><td>${PapaKayuBeges.toFixed(2)}</td><td>m³</td></tr>
                <tr><td>Paku 5 cm - 12 cmt</td><td>${PakuBiasa.toFixed(2)}</td><td>kg</td></tr>
                <tr><td>Minyak Begesting</td><td>${MinyakBekisting.toFixed(2)}</td><td>liter</td></tr>
                <tr><td>Balok Kayu Begesting</td><td>${BalokKayuBeges.toFixed(2)}</td><td>m³</td></tr>
                <tr><td>Plywood tebal 9mm</td><td>${PlywoodTebal.toFixed(2)}</td><td>lbr</td></tr>
                <tr><td>Dolken Bambu Panjang 4m</td><td>${DolkenBambu.toFixed(2)}</td><td>batang</td></tr>
                <tr><td>Air</td><td>${Air.toFixed(2)}</td><td>liter</td></tr>
                
            `;

            const pekerjatablebody = document.getElementById('pekerja-table-body');
            pekerjatablebody.innerHTML = `
                <tr><td>Pekerja</td><td>${sumTenagaPKJ.toFixed(2)}</td><td>Orang per Hari</td></tr>
                <tr><td>Tukang Batu</td><td>${sumTenagaTKG.toFixed(2)}</td><td>Orang per Hari</td></tr>
                <tr><td>Kepala Tukang</td><td>${sumTenagaKATKG.toFixed(2)}</td><td> Orang per Hari</td></tr>
                <tr><td>Mandor</td><td>${sumTenagaMDR.toFixed(2)}</td><td>Orang per Hari</td></tr>
            `;


            document.getElementById('jumlah_sumur').value = rkebutuhan_sumur; 
        } else {
            document.getElementById('jumlah_sumur').value = ''; // Hapus hasil jika input tidak valid
        }
    }

    // Menambahkan event listener pada input field untuk menghitung secara otomatis saat ada perubahan
    document.getElementById('luas_lantai').addEventListener('input', hitungSumur);
    document.getElementById('diameter_buis').addEventListener('input', hitungSumur);
    document.getElementById('kedalaman').addEventListener('input', hitungSumur);

   
    
    
});
