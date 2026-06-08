function showReward(){
            const el = document.getElementById("reward");
            if (el) {
                el.innerHTML = "Kamu harus melihat di bagian header untuk mengetahui reward yang kamu dapatkan!";
            }
        }
        function topup(){
        alert("halo selamat datang di Resourceful merchant 🧑‍🔬!")
    let paket = prompt("pilih paket yang kamu inginkan: paket 1 = 1 juta coin + 2 item bonus; paket 2 = 5 juta coin + 10 item bonus; paket 3 = 10 juta coin + 25 item bonus");
    let hasil;
    if (paket === "paket 1") {
        hasil = 100000;
        alert("Silakan melakukan topup di nomor ini 0000000000!");
    } else if (paket === "paket 2") {
        hasil = 500000;
        alert("Silakan melakukan topup di nomor ini 0000000000!");
    } else if (paket === "paket 3") {
        hasil = 1000000;
        alert("Silakan melakukan topup di nomor ini 0000000000!");
    } else {
        hasil = "paket tidak benar";
    }
            

    alert(`hasil: ${hasil}`);
        }
        
        function downloadGame(){
            alert("Download akan segera dimulai!");
        }

        let player = 10000000;

        function addPlayer(){
            player++;
            document.getElementById("playerCount").innerHTML =
            player;
        }
        function hoverButton(){
            const button = document.getElementById("downloadBtn");
            button.style.backgroundColor = "#4CAF50";
        }