document.addEventListener('DOMContentLoaded', function() {
    var selectPolaElement = document.getElementById('pola');
    var panjangJalanElement = document.getElementById('panjang_jalan');
    var lebarJalanElement = document.getElementById('lebar_jalan');

    if (selectPolaElement && panjangJalanElement && lebarJalanElement) {
        function calculateVolumes() {
            var selectPola = selectPolaElement.value;
            var panjangJalan = parseFloat(panjangJalanElement.value) || 0;
            var lebarJalan = parseFloat(lebarJalanElement.value) || 0;

            // Fixed  calculations
            var lebarPola1_0 = 0.50; 
            var qtyPola1_0 = 0.40;  
            var qtyPola1_1 = 0.60;
            var tPola2_0 = 1.03;
            var tPola2_1 = 0.1718;
            var tPola2_2 = 1.0308;
            var num0 = 4.0572;
            var num1 = 1.8028 / 4.7518 / 2;
            var num3 = 0.738095238095238 / 2;
            var num4 = 0.3061 / 1.4968;

            var qtyPola2_0 = (num0 - tPola2_0 - tPola2_1) / num0;
            var qtyPola2_1 = tPola2_1 / num0;
            var QtyPola2_2 = tPola2_2 / num0;
            var QtyPola3_0 = 1 - num1 - num1;
            var QtyPola4_0 = 1 - num3 - num3;
            var QtyPola5_0 = 1 - num4;

            //kuncian beton
            var Lt = 0.10;
            var qty = 2.00;

            var kuncian_beton0 = panjangJalan + panjangJalan;
            var kuncian_beton1 = panjangJalan;
            

            // analisa Kof pola 1
            var PkjkofPola1_0 = 0.25;
            var pkjkofPola1_1 = 0.25;
            var pkjkofPola1_2 = 1.65;

            var TkgkofPola1_0 = 0.5;
            var TkgkofPola1_1 = 0.5;
            var TkgkofPola1_2 = 0.275;

            var KatkgPola1_0 = 0.05;
            var KatkgPola1_1 = 0.05;
            var KatkgPola1_2 = 0.028;

            var MdrPola1_0 = 0.0013;
            var MdrPola1_1 = 0.0013;
            var MdrPola1_2 = 0.083;

            var SemenkofPola1 = 326;
            var AirkofPola1 = 215;

            var PasirPasangkofPola1_0 = 0.05;
            var PasirPasangkofPola1_1 = 0.05;

            var kerikilkofPola1  = 1029;

            var PasirBetonKofPola1 = 760;

            var PavingHollandAbuPola1kof = 1.01;
            var PavingHollandMerahPola1kof = 1.01;

            //analisa kof Pola 2

            var PkjkofPola2_0 = 0.25
            var PkjkofPola2_1 = 0.25
            var PkjkofPola2_2 = 1.65;

            var TkgkofPola2_0 = 0.5;
            var TkgkofPola2_1 = 0.5;
            var TkgkofPola2_2 = 0.275;

            var KatkgPola2_0 = 0.05;
            var KatkgPola2_1 = 0.05;
            var KatkgPola2_2 = 0.028;

            var MdrPola2_0 = 0.0013;
            var MdrPola2_1 = 0.0013;
            var MdrPola2_2 = 0.083;

            var SemenkofPola2 = 326;
            var AirkofPola2 = 215;

            var PasirPasangkofPola2_0 = 0.05;
            var PasirPasangkofPola2_1 = 0.05;
            
            var KerikilkofPola2 = 1029;
            var PasirBetonkofPola2 =  760;

            var PavingHexagonalwarnaAbukofPola2 = 1.01;
            var PavingHexagonalwarnaKuningkofPola2 = 1.01;
            var PavingHexagonalwarnaBirukofPola2 = 1.01;

            //analisa kof pola 3
            var PkjkofPola3_0 = 0.25;
            var PkjkofPola3_1 = 0.25;
            var PkjkofPola3_2 = 1.65;

            var TkgkofPola3_0 = 0.5;
            var TkgkofPola3_1 = 0.5
            var TkgkofPola3_2 = 0.275;

            var KatkgPola3_0 = 0.05;
            var KatkgPola3_1 = 0.05;
            var KatkgPola3_2 = 0.028;

            var MdrPola3_0 = 0.0013;
            var MdrPola3_1 = 0.0013;
            var MdrPola3_2 = 0.083;

            var Semenkofpola3 = 326;
            var AirkofPola3 = 215;

            var PasirPasangkofPola3_0 = 0.05;
            var PasirPasangkofPola3_1 = 0.05;

            var KerikilkofPola3 = 1029;
            var PasirBetonkofPola3 =  760;

            var PavingHollandwarnaAbuPola3  = 1.01
            var PavingHollandwarnaKuningPola3 = 1.01
            var PavingHollandwarnaBiruPola3 = 1.01

            //analis kof pola 4

            var PkjkofPola4_0 = 0.25;
            var PkjkofPola4_1 = 0.25;
            var PkjkofPola4_2 = 1.65;

            var TkgkofPola4_0 = 0.5;
            var TkgkofPola4_1 = 0.5;
            var TkgkofPola4_2 = 0.275;

            var KatkgPola4_0 = 0.05;
            var KatkgPola4_1 = 0.05;
            var KatkgPola4_2 = 0.028;

            var MdrPola4_0 = 0.0013;
            var MdrPola4_1 = 0.0013;
            var MdrPola4_2 = 0.083;

            var Semenkofpola4 = 326;
            var AirkofPola4 = 215;

            var PasirPasangkofPola4_0 = 0.05;
            var PasirPasangkofPola4_1 = 0.05;

            var KerikilkofPola4 = 1029;
            var PasirBetonkofPola4 =  760;

            var PavingHollandwarnaAbuPola4  = 1.01
            var PavingHollandwarnaMerahPola4 = 1.01
            var PavingHollandwarnaHitamPola4 = 1.01

            // analisis kof pola 5

            var PkjkofPola5_0 = 0.25;
            var pkjkofPola5_1 = 0.25;
            var pkjkofPola5_2 = 1.65;

            var TkgkofPola5_0 = 0.5;
            var TkgkofPola5_1 = 0.5;
            var TkgkofPola5_2 = 0.275;

            var KatkgPola5_0 = 0.05;
            var KatkgPola5_1 = 0.05;
            var KatkgPola5_2 = 0.028;

            var MdrPola5_0 = 0.0013;
            var MdrPola5_1 = 0.0013;
            var MdrPola5_2 = 0.083;

            var SemenkofPola5 = 326;
            var AirkofPola5 = 215;

            var PasirPasangkofPola5_0 = 0.05;
            var PasirPasangkofPola5_1 = 0.05;

            var kerikilkofPola5  = 1029;

            var PasirBetonKofPola5 = 760;

            var PavingHollandAbuPola5kof = 1.01;
            var PavingHollandMerahPola5kof = 1.01;

            var kerikilkofPola5  = 1029;

            var PasirBetonKofPola5 = 760;

            var PavingHollandAbuPola5kof = 1.01;
            var PavingHollandMerahPola5kof = 1.01;

  
            if (selectPola === 'pola1') {
                // perhitungan Pola 1
                var Volumepola1_0 = panjangJalan * lebarJalan;
                var Volumepola1_1 = panjangJalan * lebarPola1_0 * qtyPola1_0;
                var volumePavingHollandWarnaAbuPola1 = Volumepola1_0 + Volumepola1_1;
                var volumePavingHollandWarnaMerahPola1 = panjangJalan * lebarPola1_0 * qtyPola1_1;

                var KuncianBetonPola1 = kuncian_beton0 * Lt * Lt * qty;

                
                //perhitungan Tengana PKJ, TKG, KA TKG, MDR Pola 1
                var TenagaPkjPola1_0 = volumePavingHollandWarnaAbuPola1 *  PkjkofPola1_0;
                var TenagaPkjPola1_1 = volumePavingHollandWarnaMerahPola1 * pkjkofPola1_1;
                var TenagaPjkPola1_2 = KuncianBetonPola1 * pkjkofPola1_2;

                var TenagaTkgPola1_0 = volumePavingHollandWarnaAbuPola1 * TkgkofPola1_0;
                var TenagaTkgPola1_1 = volumePavingHollandWarnaMerahPola1 * TkgkofPola1_1;
                var TenagaTkgPola1_2 =  KuncianBetonPola1  *  TkgkofPola1_2;
                
                var KepalaTkgPola1_0 = volumePavingHollandWarnaAbuPola1 * KatkgPola1_0;
                var KepalaTkgPola1_1 = volumePavingHollandWarnaMerahPola1 *  KatkgPola1_1;
                var KepalaTkgPola1_2 = KuncianBetonPola1 *  KatkgPola1_2;
                
                var TenagaMdrPola1_0 = volumePavingHollandWarnaAbuPola1 *  MdrPola1_0;
                var TenagaMdrPola1_1  = volumePavingHollandWarnaMerahPola1 * MdrPola1_1;
                var TenagaMdrPola1_2 = KuncianBetonPola1 * MdrPola1_2;

                var SemenPola1 = KuncianBetonPola1 * SemenkofPola1;
                var AirPola1 = KuncianBetonPola1 * AirkofPola1;

                var PasirPasangPola1_0 = volumePavingHollandWarnaAbuPola1 * PasirPasangkofPola1_0;
                var PasirPasangPola1_1 = volumePavingHollandWarnaMerahPola1 * PasirPasangkofPola1_1;
                
                var KerikilPola1 = KuncianBetonPola1 * kerikilkofPola1;
                var PasirBetonPola1 = KuncianBetonPola1 * PasirBetonKofPola1;

                var PavingHollandWarnaAbuPola1 = volumePavingHollandWarnaAbuPola1 * PavingHollandAbuPola1kof;
                var PavingHollandWarnaMerahPola1 =  volumePavingHollandWarnaMerahPola1 *PavingHollandMerahPola1kof;
                

                var Tenaga_Pkj_Pola1 = Math.ceil(TenagaPkjPola1_0 + TenagaPkjPola1_1 + TenagaPjkPola1_2);
                var Tenaga_Tkg_Pola1 = Math.ceil(TenagaTkgPola1_0 + TenagaTkgPola1_1 + TenagaTkgPola1_2);
                var Kepala_Tkg_Pola1 =  Math.ceil(KepalaTkgPola1_0 + KepalaTkgPola1_1 + KepalaTkgPola1_2);
                var Tenaga_Mandor_Pola1 = Math.ceil(TenagaMdrPola1_0 + TenagaMdrPola1_1 + TenagaMdrPola1_2);

                var Semen_Pola1 = Math.ceil(SemenPola1 / 40);
                var Air_Pola1 = Math.ceil(AirPola1);
                var PasirPasang_Pola1 = Math.ceil(PasirPasangPola1_0 + PasirPasangPola1_1);
                var Kerikil_Pola1 = Math.ceil((KerikilPola1 / 2000) * 10) / 10;
                var PasirBeton_Pola1 = Math.ceil((PasirBetonPola1/1400) * 10) / 10;

                var PavingHollandAbu_Pola1 = Math.ceil(PavingHollandWarnaAbuPola1);
                var PavingHollandMerah_Pola1 = Math.ceil(PavingHollandWarnaMerahPola1);
                
                console.log("Paving Holland t=6cm K-300 Warna Abu-abu Pola 1:", volumePavingHollandWarnaAbuPola1.toFixed(2), "m2");
                console.log("Paving Holland t=6cm K-300 Warna Merah Pola 1:", volumePavingHollandWarnaMerahPola1.toFixed(2), "m2");
                console.log("Kuncia Beton Pola 1 :", KuncianBetonPola1.toFixed(2));
                
                console.log("Tenaga Pekerja Pola 1 :", Tenaga_Pkj_Pola1.toFixed(2));
                console.log("Tenaga Tukang Pola 1 :",Tenaga_Tkg_Pola1.toFixed(2));
                console.log("Kepala Tukang :", Kepala_Tkg_Pola1.toFixed(2));
                console.log("Mandor :", Tenaga_Mandor_Pola1.toFixed(2));

                console.log("Pasir :", Semen_Pola1.toFixed(2));
                console.log("Air :",  Air_Pola1.toFixed(2));
                console.log("Pasir Pasang :", PasirPasang_Pola1.toFixed(2));
                console.log("Kerikil :", Kerikil_Pola1.toFixed(2));
                console.log("Pasir Beton :", PasirBeton_Pola1.toFixed(2));
                console.log(" Paving Holland t=6cm K-300 Warna Abu-abu :", PavingHollandAbu_Pola1.toFixed(2));
                console.log(" Paving Holland Warna Merah t=6cm K-300 :", PavingHollandMerah_Pola1.toFixed(2));


               
                //output tabel
                 const bahanTableBody = document.getElementById('bahan-table-body');

                    bahanTableBody.innerHTML = `
                        <tr><td>Paving Holland t=6cm K-300 Warna Abu-abu</td><td>${PavingHollandAbu_Pola1.toFixed(2)}</td><td>m²</td></tr>
                        <tr><td>Paving Holland Warna Merah t=6cm K-300</td><td>${PavingHollandMerah_Pola1.toFixed(2)}</td><td>m²</td></tr>
                        <tr><td>-</td><td>-</td><td>m²</td></tr>
                        <tr><td>Pasir Pasang Bawah Paving t=5cm</td><td>${PasirPasang_Pola1.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Kerikil</td><td>${Kerikil_Pola1.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Pasir Beton</td><td>${PasirBeton_Pola1.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Semen</td><td>${Semen_Pola1.toFixed(2)}</td><td>sak</td></tr>
                        <tr><td>Air</td><td>${Air_Pola1.toFixed(2)}</td><td>liter</td></tr>
                    `; 


                    

                    const pekerjatablebody = document.getElementById('pekerja-table-body');

                    pekerjatablebody.innerHTML = `

                        <tr><td>Pekerja</td><td>${Tenaga_Pkj_Pola1.toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Tukang Batu</td><td>${Tenaga_Tkg_Pola1.toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Kepala Tukang</td><td>${Kepala_Tkg_Pola1.toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Mandor</td><td>${Tenaga_Mandor_Pola1.toFixed(2)}</td><td>Orang per Hari</td></tr>
                            
                    `;
                

            } else if (selectPola === 'pola2') {
                // perhitungan  Pola 2
                var volumePavingHexagonalWarnaAbuPola2 = panjangJalan * lebarJalan * qtyPola2_0;
                var volPavingHexagonalWarnaKuningPola2 = panjangJalan * lebarJalan * tPola2_1 * qtyPola2_1;
                var volPavingHexagonalWarnaBiruPola2 = panjangJalan * lebarJalan * tPola2_2 * QtyPola2_2;

                var KuncianBetonPola2 = kuncian_beton1 * Lt * Lt * qty;

                var TenagaPkjPola2_0 = volumePavingHexagonalWarnaAbuPola2 * PkjkofPola2_0;
                var TenagaPkjPola2_1 = volPavingHexagonalWarnaKuningPola2 *  PkjkofPola2_1;
                var TenagaPkjPola2_2 = volPavingHexagonalWarnaBiruPola2 * PkjkofPola2_1
                var TenagaPkjPola2_3 = KuncianBetonPola2 *  PkjkofPola2_2;

                var TenagaTkgPola2_0 = volumePavingHexagonalWarnaAbuPola2 * TkgkofPola2_0;
                var TenagaTkgPola2_1 = volPavingHexagonalWarnaKuningPola2 * TkgkofPola2_1;
                var TenagaTkgPola2_2 = volPavingHexagonalWarnaBiruPola2 * TkgkofPola2_1;
                var TenagaTkgPola2_3 = KuncianBetonPola2 * TkgkofPola2_2;

                var KepalaTkgPola2_0 = volumePavingHexagonalWarnaAbuPola2 * KatkgPola2_0;
                var KepalaTkgPola2_1 = volPavingHexagonalWarnaKuningPola2 * KatkgPola2_1;
                var KepalaTkgPola2_2 = volPavingHexagonalWarnaBiruPola2 * KatkgPola2_1;
                var KepalaTkgPola2_3 = KuncianBetonPola2 * KatkgPola2_2;

                var TenagaMdrPola2_0 = volumePavingHexagonalWarnaAbuPola2 * MdrPola2_0;
                var TenagaMdrPola2_1 = volPavingHexagonalWarnaKuningPola2 * MdrPola2_1;
                var TenagaMdrPola2_2 =  volPavingHexagonalWarnaBiruPola2 *  MdrPola2_1;
                var TenagaMdrPola2_3 =  KuncianBetonPola2 * MdrPola2_2;

                var SemenPola2 = KuncianBetonPola2 * SemenkofPola2 / 40;
                var AirPola2 = KuncianBetonPola2 * AirkofPola2;
               
                var PasirPasangPola2_0 = volumePavingHexagonalWarnaAbuPola2 *  PasirPasangkofPola2_0;
                var PasirPasangPola2_1 = volPavingHexagonalWarnaKuningPola2 * PasirPasangkofPola2_1;
                var PasirPasangPola2_2 = volPavingHexagonalWarnaBiruPola2 * PasirPasangkofPola2_1;
                var KerikilPola2 = KuncianBetonPola2 * KerikilkofPola2;
                var PasirBetonPola2 =  KuncianBetonPola2 * PasirBetonkofPola2;


                var Tenaga_Pkj_Pola2 = Math.ceil(TenagaPkjPola2_0 + TenagaPkjPola2_1 + TenagaPkjPola2_2 + TenagaPkjPola2_3);
                var Tenaga_Tkg_Pola2 = Math.ceil(TenagaTkgPola2_0 + TenagaTkgPola2_1 + TenagaTkgPola2_2 + TenagaTkgPola2_3);
                var Kepala_Tkg_Pola2 = Math.ceil(KepalaTkgPola2_0 + KepalaTkgPola2_1 +  KepalaTkgPola2_2 + KepalaTkgPola2_3);
                var Tenaga_Mandor_Pola2 = Math.ceil(TenagaMdrPola2_0 + TenagaMdrPola2_1 + TenagaMdrPola2_2 + TenagaMdrPola2_3);

                var PavingHexagonalWarnaAbuPola2 = volumePavingHexagonalWarnaAbuPola2 * PavingHexagonalwarnaAbukofPola2;
                var PavingHexagonalwarnaKuningPola2 = volPavingHexagonalWarnaKuningPola2  * PavingHexagonalwarnaKuningkofPola2;
                var PavingHexagonalwarnaBiruPola2 = volPavingHexagonalWarnaBiruPola2 * PavingHexagonalwarnaBirukofPola2;

                
                var Semen_Pola2 = Math.ceil(SemenPola2);
                var Air_Pola2 = Math.ceil(AirPola2);
                var PasirPasang_Pola2 = Math.ceil(PasirPasangPola2_0 + PasirPasangPola2_1 + PasirPasangPola2_2);
                var Kerikil_Pola2 = Math.ceil((KerikilPola2 / 2000) * 10) / 10;
                var PasirBeton_Pola2 = Math.ceil((PasirBetonPola2 / 1400) * 10) / 10;

                var PavingHexagonalAbu_Pola2 = Math.ceil(PavingHexagonalWarnaAbuPola2);
                var PavingHexagonalKuning_Pola2 = Math.ceil(PavingHexagonalwarnaKuningPola2);
                var PavingHexagonalwarnaBiru_Pola2 =  Math.ceil(PavingHexagonalwarnaBiruPola2);


                console.log("Paving Hexagonal t=6 cm K-300 Warna Abu-abu Pola 2:", volumePavingHexagonalWarnaAbuPola2.toFixed(2), "m2");
                console.log("Paving Hexagonal t=6 cm K-300 Warna Kuning Pola 2:", volPavingHexagonalWarnaKuningPola2.toFixed(2), "m2");
                console.log("Paving Hexagonal t=6 cm K-300 Warna Biru Pola 2:", volPavingHexagonalWarnaBiruPola2.toFixed(2), "m2");
                console.log("Kuncia Beton Pola 2 :", KuncianBetonPola2.toFixed(2));

                console.log("Tenaga Pekerja Pola 2 :", Tenaga_Pkj_Pola2.toFixed(2));
                console.log("Tenaga Tukang Pola 2  :", Tenaga_Tkg_Pola2.toFixed(2));
                console.log("Kepala Tukang :", Kepala_Tkg_Pola2.toFixed(2));
                console.log("Tenaga Mandor :", Tenaga_Mandor_Pola2.toFixed(2));

                console.log("Semen :", Semen_Pola2.toFixed(2));
                console.log("Air  :", Air_Pola2.toFixed(2));
                console.log("Pasir Pasang :", PasirPasang_Pola2.toFixed(2));
                console.log("Kerikil  :", Kerikil_Pola2.toFixed(2));
                console.log("Pasir Beton  :", PasirBeton_Pola2 .toFixed(2));

                console.log(" Paving Hexagonal t=6 cm K-300 Warna Abu-abu ",PavingHexagonalAbu_Pola2.toFixed(2))
                console.log(" Paving Hexagonal t=6 cm K-300 Warna Kuning ",PavingHexagonalKuning_Pola2.toFixed(2))
                console.log(" Paving Hexagonal t=6 cm K-300 Warna Biru :", PavingHexagonalwarnaBiru_Pola2.toFixed(2));

                 //output tabel
                 const bahanTableBody = document.getElementById('bahan-table-body');

                    bahanTableBody.innerHTML = `
                        <tr><td>Paving Hexagonal t=6 cm K-300 Warna Abu-abu</td><td>${PavingHexagonalAbu_Pola2.toFixed(2)}</td><td>m²</td></tr>
                        <tr><td>Paving Hexagonal t=6 cm K-300 Warna Kuning</td><td>${PavingHexagonalKuning_Pola2.toFixed(2)}</td><td>m²</td></tr>
                        <tr><td>Paving Hexagonal t=6 cm K-300 Warna Biru</td><td>${PavingHexagonalwarnaBiru_Pola2.toFixed(2)}</td><td>m²</td></tr>
                        <tr><td>Pasir Pasang Bawah Paving t=5cm</td><td>${PasirPasang_Pola2.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Kerikil</td><td>${Kerikil_Pola2.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Pasir Beton</td><td>${PasirBeton_Pola2.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Semen</td><td>${Semen_Pola2.toFixed(2)}</td><td>sak</td></tr>
                        <tr><td>Air</td><td>${Air_Pola2.toFixed(2)}</td><td>liter</td></tr>
                    `;


                    const pekerjatablebody = document.getElementById('pekerja-table-body');

                    pekerjatablebody.innerHTML = `

                        <tr><td>Pekerja</td><td>${Tenaga_Pkj_Pola2 .toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Tukang Batu</td><td>${Tenaga_Tkg_Pola2.toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Kepala Tukang</td><td>${Kepala_Tkg_Pola2.toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Mandor</td><td>${Tenaga_Mandor_Pola2 .toFixed(2)}</td><td>Orang per Hari</td></tr>
                            
                    `;
                

            } else if (selectPola === 'pola3') {
                // perhitungan Pola 3
                var volumePavingHollandlWarnaAbuPola3 = panjangJalan * lebarJalan * QtyPola3_0;
                var volumePavingHollandlWarnaKunigPola3 = panjangJalan * lebarJalan * num1;
                var volumePavinHollandlWarnaKunigPola3 = panjangJalan * lebarJalan * num1;

                var KuncianBetonPola3 = kuncian_beton1 * Lt * Lt * qty;

                var TenagaPkjPola3_0 = volumePavingHollandlWarnaAbuPola3 * PkjkofPola3_0;
                var TenagaPkjPola3_1 = volumePavingHollandlWarnaKunigPola3 *  PkjkofPola3_1;
                var TenagaPkjPola3_2 =  volumePavinHollandlWarnaKunigPola3 * PkjkofPola3_1;
                var TenagaPkjPola3_3 = KuncianBetonPola3 * PkjkofPola3_2;

                var TenagaTkgPola3_0 = volumePavingHollandlWarnaAbuPola3 * TkgkofPola3_0;
                var TenagaTkgPola3_1 = volumePavingHollandlWarnaKunigPola3 *TkgkofPola3_1;
                var TenagaTkgPola3_2 = volumePavinHollandlWarnaKunigPola3 * TkgkofPola3_1;
                var TenagaTkgPola3_3 = KuncianBetonPola3 * TkgkofPola3_2;

                var KepalaTkgPola3_0 = volumePavingHollandlWarnaAbuPola3 * KatkgPola3_0;
                var KepalaTkgPola3_1 = volumePavingHollandlWarnaKunigPola3 * KatkgPola3_1;
                var KepalaTkgPola3_2 =  volumePavinHollandlWarnaKunigPola3 * KatkgPola3_1;
                var KepalaTkgPola3_3 = KuncianBetonPola3 * KatkgPola3_2;

                var TenagaMdrPola3_0 = volumePavingHollandlWarnaAbuPola3 * MdrPola3_0;
                var TenagaMdrPola3_1 = volumePavingHollandlWarnaKunigPola3 * MdrPola3_1;
                var TenagaMdrPola3_2 =  volumePavinHollandlWarnaKunigPola3 *  MdrPola3_1;
                var TenagaMdrPola3_3 =  KuncianBetonPola3  * MdrPola3_2;

                var SemenPola3 = KuncianBetonPola3 * Semenkofpola3 / 40;
                var AirPola3 = KuncianBetonPola3 * AirkofPola3;

                var PasirPasangPola3_0 = volumePavingHollandlWarnaAbuPola3 *  PasirPasangkofPola3_0;
                var PasirPasangPola3_1 = volumePavingHollandlWarnaKunigPola3 * PasirPasangkofPola3_1;
                var PasirPasangPola3_2 = volumePavinHollandlWarnaKunigPola3 * PasirPasangkofPola3_1;

                var KerikilPola3 = KuncianBetonPola3 * KerikilkofPola3;
                var PasirBetonPola3 = KuncianBetonPola3 * PasirBetonkofPola3;

                var PavingHollandWarnaAbuPola3 = volumePavingHollandlWarnaAbuPola3 * PavingHollandwarnaAbuPola3;
                var PavingHollandWarnaKuningPola3 = volumePavingHollandlWarnaKunigPola3 * PavingHollandwarnaKuningPola3;
                var PavingHollandWarnaBiruPola3 =   volumePavinHollandlWarnaKunigPola3 * PavingHollandwarnaBiruPola3;

                var Tenaga_Pkj_Pola3 = Math.ceil(TenagaPkjPola3_0 + TenagaPkjPola3_1 + TenagaPkjPola3_2 + TenagaPkjPola3_3);
                var Tenaga_Tkg_Pola3 = Math.ceil(TenagaTkgPola3_0 + TenagaTkgPola3_1 + TenagaTkgPola3_2 + TenagaTkgPola3_3);
                var Kepala_Tkg_Pola3 = Math.ceil(KepalaTkgPola3_0 + KepalaTkgPola3_1 +  KepalaTkgPola3_2 + KepalaTkgPola3_3);
                var Tenaga_Mandor_Pola3 = Math.ceil(TenagaMdrPola3_0 + TenagaMdrPola3_1 + TenagaMdrPola3_2 + TenagaMdrPola3_3);

                var Semen_Pola3 = Math.ceil(SemenPola3);
                var Air_Pola3 = Math.ceil(AirPola3);
                var PasirPasang_Pola3 = Math.round(PasirPasangPola3_0 + PasirPasangPola3_1 + PasirPasangPola3_2);
                var Kerikil_Pola3 = Math.ceil((KerikilPola3 / 2000) * 10) / 10;
                var PasirBeton_Pola3 = Math.ceil((PasirBetonPola3 / 1400) * 10) / 10;

                var pavingHollandAbu_Pola3 = Math.ceil(PavingHollandWarnaAbuPola3);
                var PavingHollandKuning_Pola3 = Math.ceil(PavingHollandWarnaKuningPola3);
                var PavingHollandBiru_Pola3 = Math.ceil(PavingHollandWarnaBiruPola3);

                
                console.log("Paving Holland t=6 cm K-300 Warna Abu-abu Pola 3:", volumePavingHollandlWarnaAbuPola3.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Kuning Pola 3:", volumePavingHollandlWarnaKunigPola3.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Biru Pola 3:", volumePavinHollandlWarnaKunigPola3.toFixed(2), "m2");
                console.log("Kuncia Beton Pola 3 :", KuncianBetonPola3.toFixed(2));

                console.log("Tenaga Pekerja Pola 3 :", Tenaga_Pkj_Pola3.toFixed(2));
                console.log("Tenaga Tukang Pola 3  :", Tenaga_Tkg_Pola3.toFixed(2));
                console.log("Kepala Tukang :", Kepala_Tkg_Pola3.toFixed(2));
                console.log("Tenaga Mandor :", Tenaga_Mandor_Pola3.toFixed(2));

                console.log("Semen :", Semen_Pola3.toFixed(2));
                console.log("Air  :", Air_Pola3.toFixed(2));
                console.log("Pasir Pasang :", PasirPasang_Pola3.toFixed(2));
                console.log("Kerikil  :", Kerikil_Pola3.toFixed(2));
                console.log("Pasir Beton  :", PasirBeton_Pola3 .toFixed(2));

                  
                console.log("Paving Holland t=6 cm K-300 Warna Abu-abu Pola 3:",pavingHollandAbu_Pola3.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Kuning Pola 3:", PavingHollandKuning_Pola3.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Biru Pola 3:", PavingHollandBiru_Pola3.toFixed(2), "m2");


                
                 //output tabel
                 const bahanTableBody = document.getElementById('bahan-table-body');

                    bahanTableBody.innerHTML = `
                        <tr><td>Paving Holland t=6cm K-300 Warna Abu-abu</td><td>${pavingHollandAbu_Pola3.toFixed(2)}</td><td>m²</td></tr>
                        <tr><td>Paving Holland t=6cm K-300 Warna Kuning</td><td>${PavingHollandKuning_Pola3.toFixed(2)}</td><td>m²</td></tr>
                        <tr><td>Paving Holland t=6cm K-300 Warna Biru</td><td>${PavingHollandBiru_Pola3.toFixed(2)}</td><td>m²</td></tr>
                        <tr><td>Pasir Pasang Bawah Paving t=5cm</td><td>${PasirPasang_Pola3.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Kerikil</td><td>${Kerikil_Pola3.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Pasir Beton</td><td>${PasirBeton_Pola3.toFixed(2)}</td><td>m³</td></tr>
                        <tr><td>Semen</td><td>${Semen_Pola3.toFixed(2)}</td><td>sak</td></tr>
                        <tr><td>Air</td><td>${Air_Pola3.toFixed(2)}</td><td>liter</td></tr>
                    `;


                    const pekerjatablebody = document.getElementById('pekerja-table-body');

                    pekerjatablebody.innerHTML = `

                        <tr><td>Pekerja</td><td>${Tenaga_Pkj_Pola3 .toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Tukang Batu</td><td>${Tenaga_Tkg_Pola3.toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Kepala Tukang</td><td>${Kepala_Tkg_Pola3.toFixed(2)}</td><td>Orang per Hari</td></tr>
                        <tr><td>Mandor</td><td>${Tenaga_Mandor_Pola3.toFixed(2)}</td><td>Orang per Hari</td></tr>
                            
                    `;
                

                

            } else if (selectPola === 'pola4') {
                // perhitungan pola 4
                var volumePavingHollandlWarnaAbuPola4 = panjangJalan * lebarJalan * num3;
                var volumePavingHollandlWarnaMerahPola4 = panjangJalan * lebarJalan * QtyPola4_0;
                var volumePavingHollandlWarnaHitamPola4 = panjangJalan * lebarJalan * num3;

                var KuncianBetonPola4 = kuncian_beton1 * Lt * Lt * qty;

                var TenagaPkjPola4_0 = volumePavingHollandlWarnaAbuPola4 * PkjkofPola4_0;
                var TenagaPkjPola4_1 = volumePavingHollandlWarnaMerahPola4 *  PkjkofPola4_1;
                var TenagaPkjPola4_2 =  volumePavingHollandlWarnaHitamPola4 * PkjkofPola4_1;
                var TenagaPkjPola4_3 = KuncianBetonPola4 * PkjkofPola4_2;

                var TenagaTkgPola4_0 = volumePavingHollandlWarnaAbuPola4 * TkgkofPola4_0;
                var TenagaTkgPola4_1 = volumePavingHollandlWarnaMerahPola4 *TkgkofPola4_1;
                var TenagaTkgPola4_2 = volumePavingHollandlWarnaHitamPola4  * TkgkofPola4_1;
                var TenagaTkgPola4_3 = KuncianBetonPola4 * TkgkofPola4_2;

                var KepalaTkgPola4_0 =  volumePavingHollandlWarnaAbuPola4 * KatkgPola4_0;
                var KepalaTkgPola4_1 = volumePavingHollandlWarnaMerahPola4 * KatkgPola4_1;
                var KepalaTkgPola4_2 =  volumePavingHollandlWarnaHitamPola4 * KatkgPola4_1;
                var KepalaTkgPola4_3 = KuncianBetonPola4 * KatkgPola4_2;

                var TenagaMdrPola4_0 = volumePavingHollandlWarnaAbuPola4  * MdrPola4_0;
                var TenagaMdrPola4_1 = volumePavingHollandlWarnaMerahPola4 * MdrPola4_1;
                var TenagaMdrPola4_2 =  volumePavingHollandlWarnaHitamPola4 *  MdrPola4_1;
                var TenagaMdrPola4_3 =  KuncianBetonPola4  * MdrPola4_2;

                var SemenPola4 = KuncianBetonPola4 * Semenkofpola4 / 40;
                var AirPola4 = KuncianBetonPola4 * AirkofPola4;

                var PasirPasangPola4_0 = volumePavingHollandlWarnaAbuPola4 *  PasirPasangkofPola4_0;
                var PasirPasangPola4_1 = volumePavingHollandlWarnaMerahPola4  * PasirPasangkofPola4_1;
                var PasirPasangPola4_2 = volumePavingHollandlWarnaHitamPola4 * PasirPasangkofPola4_1;

                var KerikilPola4 = KuncianBetonPola4 * KerikilkofPola4;
                var PasirBetonPola4 = KuncianBetonPola4 * PasirBetonkofPola4;

                var PavingHollandwarnaAbuPola4 = volumePavingHollandlWarnaAbuPola4 * PavingHollandwarnaAbuPola4;
                var PavingHollandWarnaMerahPola4 = volumePavingHollandlWarnaMerahPola4 * PavingHollandwarnaMerahPola4;
                var PavingHollandwarnaHitamPola4 =   volumePavingHollandlWarnaHitamPola4 * PavingHollandwarnaHitamPola4;

                var Tenaga_Pkj_Pola4 = Math.ceil(TenagaPkjPola4_0 + TenagaPkjPola4_1 + TenagaPkjPola4_2 + TenagaPkjPola4_3);
                var Tenaga_Tkg_Pola4 = Math.ceil(TenagaTkgPola4_0 + TenagaTkgPola4_1 + TenagaTkgPola4_2 + TenagaTkgPola4_3);
                var Kepala_Tkg_Pola4 = Math.ceil(KepalaTkgPola4_0 + KepalaTkgPola4_1 +  KepalaTkgPola4_2 + KepalaTkgPola4_3);
                var Tenaga_Mandor_Pola4 = Math.ceil(TenagaMdrPola4_0 + TenagaMdrPola4_1 + TenagaMdrPola4_2 + TenagaMdrPola4_3);

                var Semen_Pola4 = Math.ceil(SemenPola4);
                var Air_Pola4 = Math.ceil(AirPola4);
                var PasirPasang_Pola4 = Math.round(PasirPasangPola4_0 + PasirPasangPola4_1 + PasirPasangPola4_2);
                var Kerikil_Pola4 = Math.ceil((KerikilPola4 / 2000) * 10) / 10;
                var PasirBeton_Pola4 = Math.ceil((PasirBetonPola4  / 1400) * 10) / 10;

                var pavingHollandAbu_Pola4 = Math.ceil(PavingHollandwarnaAbuPola4);
                var PavingHollandMerah_Pola4 = Math.ceil(PavingHollandWarnaMerahPola4);
                var PavingHollandHitam_Pola4 = Math.ceil(PavingHollandwarnaHitamPola4 );


                
                console.log("Paving Holland t=6 cm K-300 Warna Abu-abu Pola 4:", volumePavingHollandlWarnaAbuPola4.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Merah Pola 4:", volumePavingHollandlWarnaMerahPola4.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Hitam Pola 4:", volumePavingHollandlWarnaHitamPola4.toFixed(2), "m2");
                console.log("Kuncia Beton Pola 4 :", KuncianBetonPola4.toFixed(2));

                console.log("Tenaga Pekerja Pola 4 :", Tenaga_Pkj_Pola4.toFixed(2));
                console.log("Tenaga Tukang Pola 4  :", Tenaga_Tkg_Pola4.toFixed(2));
                console.log("Kepala Tukang :", Kepala_Tkg_Pola4.toFixed(2));
                console.log("Tenaga Mandor :", Tenaga_Mandor_Pola4.toFixed(2));

                console.log("Semen :", Semen_Pola4.toFixed(2));
                console.log("Air  :", Air_Pola4.toFixed(2));
                console.log("Pasir Pasang :", PasirPasang_Pola4.toFixed(2));
                console.log("Kerikil  :", Kerikil_Pola4.toFixed(2));
                console.log("Pasir Beton  :", PasirBeton_Pola4 .toFixed(2));

                  
                console.log("Paving Holland t=6 cm K-300 Warna Abu-abu Pola 4:",pavingHollandAbu_Pola4.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Merah  Pola 4:", PavingHollandMerah_Pola4.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Hitam Pola 4:", PavingHollandHitam_Pola4.toFixed(2), "m2");

                
                //output tabel
                const bahanTableBody = document.getElementById('bahan-table-body');

                bahanTableBody.innerHTML = `
                    <tr><td>Paving Holland t=6 cm K-300 Warna Abu-abu</td><td>${pavingHollandAbu_Pola4 .toFixed(2)}</td><td>m²</td></tr>
                    <tr><td>Paving Holland t=6 cm K-300 Warna Merah</td><td>${PavingHollandMerah_Pola4.toFixed(2)}</td><td>m²</td></tr>
                    <tr><td>Paving Holland t=6 cm K-300 Warna Hitam</td><td>${PavingHollandHitam_Pola4.toFixed(2)}</td><td>m²</td></tr>
                    <tr><td>Pasir Pasang Bawah Paving t=5cm</td><td>${PasirPasang_Pola4.toFixed(2)}</td><td>m³</td></tr>
                    <tr><td>Kerikil</td><td>${Kerikil_Pola4.toFixed(2)}</td><td>m³</td></tr>
                    <tr><td>Pasir Beton</td><td>${PasirBeton_Pola4.toFixed(2)}</td><td>m³</td></tr>
                    <tr><td>Semen</td><td>${Semen_Pola4.toFixed(2)}</td><td>sak</td></tr>
                    <tr><td>Air</td><td>${Air_Pola4.toFixed(2)}</td><td>liter</td></tr>
                `;


                const pekerjatablebody = document.getElementById('pekerja-table-body');

                pekerjatablebody.innerHTML = `

                    <tr><td>Pekerja</td><td>${Tenaga_Pkj_Pola4 .toFixed(2)}</td><td>Orang per Hari</td></tr>
                    <tr><td>Tukang Batu</td><td>${Tenaga_Tkg_Pola4.toFixed(2)}</td><td>Orang per Hari</td></tr>
                    <tr><td>Kepala Tukang</td><td>${Kepala_Tkg_Pola4.toFixed(2)}</td><td>Orang per Hari</td></tr>
                    <tr><td>Mandor</td><td>${Tenaga_Mandor_Pola4 .toFixed(2)}</td><td>Orang per Hari</td></tr>
                        
                `;
            


            } else if (selectPola === 'pola5') {
                //perhitungan pola 5
                var volumePavingHollandlWarnaAbuPola5 = panjangJalan * lebarJalan * QtyPola5_0;
                var volumePavingHollandlWarnaMerahPola5 = panjangJalan * lebarJalan * num4;

                var KuncianBetonPola5 = kuncian_beton1 * Lt * Lt * qty;

                var TenagaPkjPola5_0 = volumePavingHollandlWarnaAbuPola5 *  PkjkofPola5_0;
                var TenagaPkjPola5_1 = volumePavingHollandlWarnaMerahPola5 * pkjkofPola5_1;
                var TenagaPjkPola5_2 = KuncianBetonPola5 * pkjkofPola5_2;

                var TenagaTkgPola5_0 = volumePavingHollandlWarnaAbuPola5 * TkgkofPola5_0;
                var TenagaTkgPola5_1 = volumePavingHollandlWarnaMerahPola5 * TkgkofPola5_1;
                var TenagaTkgPola5_2 =  KuncianBetonPola5  *  TkgkofPola5_2;
                
                var KepalaTkgPola5_0 = volumePavingHollandlWarnaAbuPola5 * KatkgPola5_0;
                var KepalaTkgPola5_1 = volumePavingHollandlWarnaMerahPola5 *  KatkgPola5_1;
                var KepalaTkgPola5_2 = KuncianBetonPola5 *  KatkgPola5_2;
                
                var TenagaMdrPola5_0 = volumePavingHollandlWarnaAbuPola5 *  MdrPola5_0;
                var TenagaMdrPola5_1  = volumePavingHollandlWarnaMerahPola5 * MdrPola5_1;
                var TenagaMdrPola5_2 = KuncianBetonPola5 * MdrPola5_2;

                var SemenPola5 = KuncianBetonPola5 * SemenkofPola5;
                var AirPola5 = KuncianBetonPola5 * AirkofPola5;

                var PasirPasangPola5_0 = volumePavingHollandlWarnaAbuPola5 * PasirPasangkofPola5_0;
                var PasirPasangPola5_1 = volumePavingHollandlWarnaMerahPola5 * PasirPasangkofPola5_1;
                
                var KerikilPola5 = KuncianBetonPola5 * kerikilkofPola5;
                var PasirBetonPola5 = KuncianBetonPola5 * PasirBetonKofPola5;

                var PavingHollandWarnaAbuPola5 = volumePavingHollandlWarnaAbuPola5 * PavingHollandAbuPola5kof;
                var PavingHollandWarnaMerahPola5 =  volumePavingHollandlWarnaMerahPola5 *PavingHollandMerahPola5kof;
                

                var Tenaga_Pkj_Pola5 = Math.ceil(TenagaPkjPola5_0 + TenagaPkjPola5_1 + TenagaPjkPola5_2);
                var Tenaga_Tkg_Pola5 = Math.ceil(TenagaTkgPola5_0 + TenagaTkgPola5_1 + TenagaTkgPola5_2);
                var Kepala_Tkg_Pola5 =  Math.ceil(KepalaTkgPola5_0 + KepalaTkgPola5_1 + KepalaTkgPola5_2);
                var Tenaga_Mandor_Pola5 = Math.ceil(TenagaMdrPola5_0 + TenagaMdrPola5_1 + TenagaMdrPola5_2);

                var Semen_Pola5 = Math.ceil(SemenPola5 / 40);
                var Air_Pola5 = Math.ceil(AirPola5);
                var PasirPasang_Pola5 = Math.ceil(PasirPasangPola5_0 + PasirPasangPola5_1);
                var Kerikil_Pola5 = Math.ceil((KerikilPola5 / 2000) * 10) / 10;
                var PasirBeton_Pola5 = Math.ceil((PasirBetonPola5/1400) * 10) / 10;

                var PavingHollandAbu_Pola5 = Math.ceil(PavingHollandWarnaAbuPola5);
                var PavingHollandMerah_Pola5 = Math.ceil(PavingHollandWarnaMerahPola5);
                

                
                console.log("Paving Holland t=6 cm K-300 Warna Abu-abu Pola 5:", volumePavingHollandlWarnaAbuPola5.toFixed(2), "m2");
                console.log("Paving Holland t=6 cm K-300 Warna Merah Pola 5:", volumePavingHollandlWarnaMerahPola5.toFixed(2), "m2");

                console.log("Kuncia Beton Pola  5:", KuncianBetonPola5.toFixed(2));

                //output tabel
                const bahanTableBody = document.getElementById('bahan-table-body');

                bahanTableBody.innerHTML = `
                    <tr><td>Paving Holland t=6cm K-300 Warna Abu-abu</td><td>${PavingHollandAbu_Pola5.toFixed(2)}</td><td>m²</td></tr>
                    <tr><td>Paving Holland Warna Merah t=6cm K-300</td><td>${PavingHollandMerah_Pola5.toFixed(2)}</td><td>m²</td></tr>
                    <tr><td>-</td><td>-</td><td>m²</td></tr>
                    <tr><td>Pasir Pasang Bawah Paving t=5cm</td><td>${PasirPasang_Pola5.toFixed(2)}</td><td>m³</td></tr>
                    <tr><td>Kerikil</td><td>${Kerikil_Pola5.toFixed(2)}</td><td>m³</td></tr>
                    <tr><td>Pasir Beton</td><td>${PasirBeton_Pola5.toFixed(2)}</td><td>m³</td></tr>
                    <tr><td>Semen</td><td>${Semen_Pola5.toFixed(2)}</td><td>sak</td></tr>
                    <tr><td>Air</td><td>${Air_Pola5.toFixed(2)}</td><td>liter</td></tr>
                `;


                const pekerjatablebody = document.getElementById('pekerja-table-body');

                pekerjatablebody.innerHTML = `

                    <tr><td>Pekerja</td><td>${Tenaga_Pkj_Pola5.toFixed(2)}</td><td>Orang per Hari</td></tr>
                    <tr><td>Tukang Batu</td><td>${Tenaga_Tkg_Pola5.toFixed(2)}</td><td>Orang per Hari</td></tr>
                    <tr><td>Kepala Tukang</td><td>${Kepala_Tkg_Pola5.toFixed(2)}</td><td>Orang per Hari</td></tr>
                    <tr><td>Mandor</td><td>${Tenaga_Mandor_Pola5.toFixed(2)}</td><td>Orang per Hari</td></tr>
                        
                `;
            }


        }

        // Add event listeners for real-time calculations
        selectPolaElement.addEventListener('change', calculateVolumes);
        panjangJalanElement.addEventListener('input', calculateVolumes);
        lebarJalanElement.addEventListener('input', calculateVolumes);

    } else {
        console.error("One or more elements not found.");
    }
});
